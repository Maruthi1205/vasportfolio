import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  id: string;
}

export default function Section({ title, icon: Icon, children, id }: SectionProps) {
  return (
    <section id={id} className="space-y-6 section-fade-in scroll-mt-20">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Icon className="w-8 h-8 text-blue-400" />
        {title}
      </h2>
      {children}
    </section>
  );
}