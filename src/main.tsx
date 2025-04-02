import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { seedDatabase } from './services/milestoneService';

// Extend the Window interface
declare global {
  interface Window {
    seedDatabase: typeof seedDatabase;
  }
}

window.seedDatabase = seedDatabase;

createRoot(document.getElementById("root")!).render(<App />);
