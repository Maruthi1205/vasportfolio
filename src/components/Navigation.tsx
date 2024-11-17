import React from 'react';
import { BookOpen, Briefcase, Award, Code, Medal } from 'lucide-react';

const navItems = [
  { id: 'academics', label: 'Academics', icon: BookOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'certifications', label: 'Certifications', icon: Medal },
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex overflow-x-auto no-scrollbar">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors whitespace-nowrap"
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}