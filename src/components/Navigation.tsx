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
      <div className="flex justify-center space-x-2 md:space-x-4 flex-wrap px-2 md:px-0">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 mb-2 ${
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