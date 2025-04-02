
import React from 'react';
import { Link } from 'react-router-dom';
import { MilestoneCategory } from '@/types/milestone';
import { Button } from '@/components/ui/button';
import { Brain, Activity, Users, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-0">
          <div className="bg-gradient-to-r from-kid-blue to-kid-purple p-2 rounded-lg">
            <Activity size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold text-kid-navy">KidSpark</span>
        </Link>

        <nav className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              <span>Home</span>
            </Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/milestones" className="flex items-center gap-2">
              <Activity size={18} />
              <span>Milestones</span>
            </Link>
          </Button>
          
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/milestones?category=cognitive" className="flex items-center gap-2">
              <Brain size={18} className="text-kid-blue" />
              <span>Cognitive</span>
            </Link>
          </Button>
          
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/milestones?category=motor" className="flex items-center gap-2">
              <Activity size={18} className="text-kid-green" />
              <span>Motor</span>
            </Link>
          </Button>
          
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/milestones?category=social" className="flex items-center gap-2">
              <Users size={18} className="text-kid-purple" />
              <span>Social</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
