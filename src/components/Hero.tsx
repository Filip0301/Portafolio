'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { PersonalInfo, SocialMedia, getPersonalInfo, getAllSocialMedia } from '../services/firebase';
import Navigation from './Navigation';
import Skills from './Skills';
import Certifications from './Certifications';

export default function Hero() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('personal');

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Iniciando carga de información personal...');
        const [info, social] = await Promise.all([
          getPersonalInfo(),
          getAllSocialMedia()
        ]);
        
        console.log('Información personal recibida:', info);
        if (!info) {
          console.log('No hay datos en Firestore, usando datos por defecto');
          setPersonalInfo({
            name: 'Felipe',
            title: 'Desarrollador Web Full Stack',
            description: 'Bienvenido a mi portafolio. La información está siendo configurada.',
            email: 'ejemplo@email.com',
            phone: '+56 9 1234 5678',
            location: 'Chile'
          });
        } else {
          setPersonalInfo(info);
        }
        
        setSocialMedia(social);
      } catch (error) {
        console.error('Error detallado al cargar información:', error);
        setPersonalInfo({
          name: 'Felipe',
          title: 'Desarrollador Web Full Stack',
          description: 'Error al cargar la información. Por favor, intenta más tarde.',
          email: 'ejemplo@email.com',
          phone: '+56 9 1234 5678',
          location: 'Chile'
        });
        setSocialMedia([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Cargando información...</p>
        </div>
      </div>
    );
  }

  if (!personalInfo) {
    return null;
  }

  const renderPersonalInfo = () => (
    <div className="mt-10 max-w-2xl w-full mx-auto px-4 md:px-0">
      <div className="bg-white dark:bg-black/40 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Información Personal
          </h3>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <dl>
            <div className="bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Descripción</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {personalInfo.description}
              </dd>
            </div>
            <div className="bg-white dark:bg-black/40 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 break-all">
                {personalInfo.email}
              </dd>
            </div>
            <div className="bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Teléfono</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {personalInfo.phone}
              </dd>
            </div>
            <div className="bg-white dark:bg-black/40 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Ubicación</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {personalInfo.location}
              </dd>
            </div>
            {socialMedia.length > 0 && (
              <div className="bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Redes Sociales</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  <div className="flex flex-wrap gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={social.id || index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {social.icon && (
                          <img
                            src={social.icon}
                            alt={social.platform}
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span>{social.platform}</span>
                      </a>
                    ))}
                  </div>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="mt-10 max-w-2xl min-w-[50vw] mx-auto">
      <div className="bg-white dark:bg-black/40 backdrop-blur-sm shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contacto</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Email</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{personalInfo.email}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Teléfono</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{personalInfo.phone}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Curriculum Vitae</h4>
              <a 
                href="/Documents/CV_Felipe_Zuniga.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Descargar Curriculum Vitae
              </a>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Ubicación</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{personalInfo.location}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Redes Sociales</h4>
              <div className="flex flex-wrap gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={social.id || index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {social.icon && (
                          <img
                            src={social.icon}
                            alt={social.platform}
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span>{social.platform}</span>
                      </a>
                    ))}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="mt-10 max-w-2xl min-w-[50vw] mx-auto">
      <div className="bg-white dark:bg-black/40 backdrop-blur-sm shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Proyectos</h3>
        <div className="space-y-6">
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Sección en construcción...
          </p>
          <div className="flex justify-center">
            <div className="animate-pulse w-16 h-16 text-gray-400">
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'personal':
        return renderPersonalInfo();
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return renderContact();
      case 'projects':
        return renderProjects();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 min-h-screen flex flex-col">
        <div className="relative p-6 md:p-8 flex-1">
          {/* Esquina superior derecha */}
          <div className="absolute top-0 right-0 w-[40%] sm:w-[45%] md:w-[50%] h-[20%] sm:h-[25%] md:h-[30%] border-t-4 border-r-4 border-blue-900 dark:border-gray-700 rounded-tr-lg pointer-events-none"></div>
          {/* Esquina inferior izquierda */}
          <div className="absolute bottom-0 left-0 w-[40%] sm:w-[45%] md:w-[50%] h-[20%] sm:h-[25%] md:h-[30%] border-b-4 border-l-4 border-blue-900 dark:border-gray-700 rounded-bl-lg pointer-events-none"></div>
          
          <div className="text-center relative z-10">
            <h1 className="text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-sm md:text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {personalInfo.title}
            </p>
          </div>

          <div className="relative z-10">
            <Navigation 
              currentSection={currentSection}
              onSectionChange={setCurrentSection}
            />
          </div>

          <div className="relative z-10">
            {renderSection()}
          </div>
        </div>
      </div>
    </section>
  );
} 