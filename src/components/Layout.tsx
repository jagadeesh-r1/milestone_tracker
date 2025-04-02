
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-kid-cream">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto text-center text-kid-navy/70">
          <p>© {new Date().getFullYear()} KidSpark - Child Development Milestones</p>
          <p className="text-sm mt-1">A resource for parents and caregivers</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
