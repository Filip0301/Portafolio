'use client';

import React from 'react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: 'personal', label: 'Personal' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'certifications', label: 'Certificaciones' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="mt-10">
      <div className="flex justify-center space-x-4 flex-wrap">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              currentSection === section.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
} 