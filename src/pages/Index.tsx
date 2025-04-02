
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Activity, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-kid-cream">
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-kid-navy">Track Your Child's Development Journey</h1>
          <p className="text-xl md:text-2xl text-kid-navy/80 max-w-3xl mx-auto mb-10">
            Monitor developmental milestones and celebrate every step of your child's growth with KidSpark.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button asChild size="lg" className="text-lg bg-kid-blue hover:bg-kid-blue/90">
              <Link to="/milestones">Explore Milestones</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-kid-blue/20">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-kid-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={32} className="text-kid-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-kid-navy">Cognitive Skills</h3>
                <p className="text-kid-navy/70 mb-4">Track thinking, learning, problem-solving, and language development.</p>
                <Button variant="link" asChild className="text-kid-blue">
                  <Link to="/milestones?category=cognitive" className="flex items-center gap-1">
                    <span>View Milestones</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-kid-green/20">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-kid-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity size={32} className="text-kid-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-kid-navy">Motor Skills</h3>
                <p className="text-kid-navy/70 mb-4">Monitor physical movements, coordination, and fine motor development.</p>
                <Button variant="link" asChild className="text-kid-green">
                  <Link to="/milestones?category=motor" className="flex items-center gap-1">
                    <span>View Milestones</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-kid-purple/20">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-kid-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-kid-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-kid-navy">Social Skills</h3>
                <p className="text-kid-navy/70 mb-4">Follow emotional development, social interactions, and communication skills.</p>
                <Button variant="link" asChild className="text-kid-purple">
                  <Link to="/milestones?category=social" className="flex items-center gap-1">
                    <span>View Milestones</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
