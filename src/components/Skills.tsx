'use client';

import { useState, useEffect } from 'react';
import { Skill, getAllSkills } from '../services/firebase';

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const loadedSkills = await getAllSkills();
        setSkills(loadedSkills);
        // Seleccionar la primera categoría por defecto
        if (loadedSkills.length > 0) {
          const categories = Array.from(new Set(loadedSkills.map(skill => skill.category)));
          categories.sort();
          setSelectedCategory(categories[0]);
        }
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  categories.sort();
  
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <section className="py-8 md:py-16 max-h-[200vh]">
      <div className="max-w-2xl w-full mx-auto px-4 md:px-0">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Mis Habilidades
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
            Tecnologías y herramientas que manejo
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="flex justify-center space-x-2 md:space-x-4 flex-wrap px-2 md:px-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-2 transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 dark:bg-black/40 dark:text-gray-300 dark:hover:bg-black/60 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredSkills.map(skill => (
              <div
                key={skill.id}
                className="bg-white dark:bg-black/40 backdrop-blur-sm overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-6 w-6 md:h-8 md:w-8 object-contain dark:filter dark:brightness-90"
                      />
                    )}
                  </div>
                  <div className="mt-3 md:mt-4">
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      {skill.years_experience} {skill.years_experience === 1 ? 'año' : 'años'} de experiencia
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 