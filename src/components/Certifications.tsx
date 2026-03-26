'use client';

import { useState, useEffect } from 'react';
import { Certification, getAllCertifications } from '../services/firebase';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const loadedCertifications = await getAllCertifications();
        // Ordenar por fecha de emisión, más reciente primero
        const sortedCertifications = loadedCertifications.sort((a, b) => 
          new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime()
        );
        setCertifications(sortedCertifications);
      } catch (error) {
        console.error('Error loading certifications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-2xl min-w-[50vw] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Certificaciones
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Mis certificaciones y credenciales profesionales
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              {cert.image_url && (
                <div className="relative h-48 w-full">
                  <img
                    src={cert.image_url}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <p>Emitido: {new Date(cert.issue_date).toLocaleDateString()}</p>
                  {cert.expiry_date && (
                    <p>Expira: {new Date(cert.expiry_date).toLocaleDateString()}</p>
                  )}
                  {cert.credential_id && (
                    <p className="mt-2">
                      ID: {cert.credential_id}
                    </p>
                  )}
                </div>
                {cert.description && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                )}
                {cert.credential_url && (
                  <div className="mt-6">
                    <a
                      href={cert.credential_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-500 hover:text-blue-400 gap-2"
                    >
                      Ver credencial
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 