import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-16 max-w-6xl">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          B. Vasundara
        </h1>
        <p className="text-xl text-gray-300">B.Tech, CSE - AIML (2026)</p>
        <div className="flex gap-4">
          <a href="https://github.com/bv8904" target="_blank" rel="noopener noreferrer" 
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/b-vasundara-678b86253/" target="_blank" rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:22311A6605@aiml.sreenidhi.edu.in" 
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:9492631734" 
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}