
import React, { useState } from 'react';
import { Milestone } from '@/types/milestone';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Volume2 } from 'lucide-react';
import { toast } from 'sonner';

interface MilestoneCardProps {
  milestone: Milestone;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'cognitive':
      return 'bg-kid-blue text-white';
    case 'motor':
      return 'bg-kid-green text-white';
    case 'social':
      return 'bg-kid-purple text-white';
    default:
      return 'bg-kid-orange text-white';
  }
};

const formatAge = (age: number) => {
  if (age < 1) {
    const months = Math.round(age * 12);
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  return `${age} ${age === 1 ? 'year' : 'years'}`;
};

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  const [speaking, setSpeaking] = useState(false);

  const speakText = () => {
    if ('speechSynthesis' in window) {
      setSpeaking(true);
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const text = `${milestone.title}. This is a ${milestone.category} milestone for children at ${formatAge(milestone.age)}. ${milestone.description || ''}`;
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice to a more child-friendly voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('female'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Adjust speech parameters
      utterance.pitch = 1.2;  // Slightly higher pitch
      utterance.rate = 0.9;   // Slightly slower
      utterance.volume = 1.0; // Full volume
      
      utterance.onend = () => {
        setSpeaking(false);
      };
      
      utterance.onerror = () => {
        setSpeaking(false);
        toast.error("Failed to play speech");
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      toast.error("Text-to-speech is not supported in your browser");
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg border-2 h-full">
      <CardHeader className={`${getCategoryColor(milestone.category)} py-2`}>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-white text-kid-navy font-bold">
            {formatAge(milestone.age)}
          </Badge>
          <Badge variant="outline" className="bg-white text-kid-navy capitalize font-semibold">
            {milestone.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <CardTitle className="text-xl font-bold text-kid-navy mb-4">{milestone.title}</CardTitle>
        {milestone.description && (
          <p className="text-kid-navy/80 text-lg">{milestone.description}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={speakText} 
          variant="ghost" 
          size="sm" 
          className="ml-auto text-kid-navy hover:text-kid-blue hover:bg-kid-blue/10"
          disabled={speaking}
        >
          <Volume2 className={`mr-2 h-4 w-4 ${speaking ? 'animate-pulse' : ''}`} />
          {speaking ? 'Speaking...' : 'Read Aloud'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MilestoneCard;
