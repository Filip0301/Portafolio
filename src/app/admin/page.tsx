'use client';

import { useState, useEffect } from 'react';
import { PersonalInfo, Skill, Certification, SocialMedia, createOrUpdatePersonalInfo, getAllSkills, updateSkill, deleteSkill, getAllCertifications, updateCertification, deleteCertification, getPersonalInfo, getAllSocialMedia, addSocialMedia, updateSocialMedia, deleteSocialMedia } from '../../services/firebase';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { initializeCollections } from '../../utils/initializeFirestore';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

// Categorías predefinidas
const SKILL_CATEGORIES = [
  'Lenguajes de programación',
  'Desarrollo Web',
  'Base de Datos',
  'Herramientas',
  'Sistemas Operativos',
  'Idiomas',
  'Otros'
] as const;

type SkillCategory = typeof SKILL_CATEGORIES[number];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    title: '',
    description: '',
    email: '',
    phone: '',
    location: ''
  });
  const [newSkill, setNewSkill] = useState<Skill>({
    name: '',
    category: 'Otros',
    icon: '',
    years_experience: 0
  });
  const [newCertification, setNewCertification] = useState<Certification>({
    name: '',
    issuer: '',
    issue_date: '',
    icon: '',
    description: '',
    expiry_date: '',
    credential_id: '',
    credential_url: '',
    image_url: ''
  });
  const [socialMediaList, setSocialMediaList] = useState<SocialMedia[]>([]);
  const [newSocialMedia, setNewSocialMedia] = useState<Omit<SocialMedia, 'id'>>({
    platform: '',
    url: '',
    username: '',
    icon: '',
    isActive: true
  });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [editingCertification, setEditingCertification] = useState<Certification | null>(null);
  const [editingSocialMedia, setEditingSocialMedia] = useState<SocialMedia | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadSkills();
      loadCertifications();
      loadPersonalInfo();
      loadSocialMedia();
    }
  }, [isAuthenticated]);

  const loadSkills = async () => {
    const loadedSkills = await getAllSkills();
    setSkills(loadedSkills);
  };

  const loadCertifications = async () => {
    const loadedCertifications = await getAllCertifications();
    setCertifications(loadedCertifications);
  };

  const loadPersonalInfo = async () => {
    const info = await getPersonalInfo();
    if (info) {
      setPersonalInfo({
        name: info.name || '',
        title: info.title || '',
        description: info.description || '',
        email: info.email || '',
        phone: info.phone || '',
        location: info.location || ''
      });
    }
  };

  const loadSocialMedia = async () => {
    const loadedSocialMedia = await getAllSocialMedia();
    setSocialMediaList(loadedSocialMedia);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await initializeCollections();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handlePersonalInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Asegurarse de que social_media existe y es un array
      const updatedPersonalInfo = {
        ...personalInfo,
        social_media: personalInfo.social_media || []
      };
      
      await createOrUpdatePersonalInfo(updatedPersonalInfo);
      setPersonalInfo(updatedPersonalInfo);
      alert('Información personal actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar información personal:', error);
      alert('Error al actualizar la información personal');
    }
  };

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'skills'), newSkill);
      setNewSkill({ name: '', category: 'Otros', icon: '', years_experience: 0 });
      await loadSkills();
      alert('Habilidad agregada con éxito');
    } catch (error) {
      console.error('Error al agregar habilidad:', error);
      alert('Error al agregar la habilidad');
    }
  };

  const handleAddCertification = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'certifications'), newCertification);
      setNewCertification({
        name: '',
        issuer: '',
        issue_date: '',
        icon: '',
        description: '',
        expiry_date: '',
        credential_id: '',
        credential_url: '',
        image_url: ''
      });
      await loadCertifications();
      alert('Certificación agregada con éxito');
    } catch (error) {
      console.error('Error al agregar certificación:', error);
      alert('Error al agregar la certificación');
    }
  };

  const handleAddSocialMedia = async () => {
    if (!newSocialMedia.platform || !newSocialMedia.url) {
      alert('Por favor, completa al menos la plataforma y la URL');
      return;
    }

    try {
      await addSocialMedia(newSocialMedia);
      setNewSocialMedia({
        platform: '',
        url: '',
        username: '',
        icon: '',
        isActive: true
      });
      await loadSocialMedia();
      alert('Red social agregada con éxito');
    } catch (error) {
      console.error('Error al agregar red social:', error);
      alert('Error al agregar la red social');
    }
  };

  const handleEditSkill = (skill: Skill) => {
    if (!skill.id) return;
    setEditingSkill({
      id: skill.id,
      name: skill.name,
      category: skill.category,
      icon: skill.icon,
      years_experience: skill.years_experience
    });
  };

  const handleUpdateSkill = async () => {
    if (!editingSkill?.id) return;
    try {
      await updateSkill(editingSkill.id, editingSkill);
      setEditingSkill(null);
      await loadSkills();
      alert('Habilidad actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar habilidad:', error);
      alert('Error al actualizar la habilidad');
    }
  };

  const handleDeleteSkill = async (skillId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta habilidad?')) {
      try {
        await deleteSkill(skillId);
        await loadSkills();
        alert('Habilidad eliminada con éxito');
      } catch (error) {
        console.error('Error al eliminar habilidad:', error);
        alert('Error al eliminar la habilidad');
      }
    }
  };

  const handleEditCertification = (cert: Certification) => {
    if (!cert.id) return;
    setEditingCertification({
      id: cert.id,
      name: cert.name,
      issuer: cert.issuer,
      issue_date: cert.issue_date,
      icon: cert.icon || '',
      description: cert.description || '',
      expiry_date: cert.expiry_date || '',
      credential_id: cert.credential_id || '',
      credential_url: cert.credential_url || '',
      image_url: cert.image_url || ''
    });
  };

  const handleUpdateCertification = async () => {
    if (!editingCertification?.id) return;
    try {
      await updateCertification(editingCertification.id, editingCertification);
      setEditingCertification(null);
      await loadCertifications();
      alert('Certificación actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar certificación:', error);
      alert('Error al actualizar la certificación');
    }
  };

  const handleDeleteCertification = async (certId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta certificación?')) {
      try {
        await deleteCertification(certId);
        await loadCertifications();
        alert('Certificación eliminada con éxito');
      } catch (error) {
        console.error('Error al eliminar certificación:', error);
        alert('Error al eliminar la certificación');
      }
    }
  };

  const handleEditSocialMedia = (social: SocialMedia) => {
    setEditingSocialMedia(social);
  };

  const handleUpdateSocialMedia = async () => {
    if (!editingSocialMedia?.id) return;

    try {
      await updateSocialMedia(editingSocialMedia.id, editingSocialMedia);
      setEditingSocialMedia(null);
      await loadSocialMedia();
      alert('Red social actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar red social:', error);
      alert('Error al actualizar la red social');
    }
  };

  const handleDeleteSocialMedia = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta red social?')) {
      try {
        await deleteSocialMedia(id);
        await loadSocialMedia();
        alert('Red social eliminada con éxito');
      } catch (error) {
        console.error('Error al eliminar red social:', error);
        alert('Error al eliminar la red social');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Iniciar Sesión</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Contenido */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Panel de Administración</h1>
          
          <div className="space-y-8 pb-20">
            {/* Formulario de Información Personal */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Información Personal
              </h2>
              <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                    <input
                      type="text"
                      value={personalInfo.name || ''}
                      onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                    <input
                      type="text"
                      value={personalInfo.title || ''}
                      onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                  <textarea
                    value={personalInfo.description || ''}
                    onChange={(e) => setPersonalInfo({...personalInfo, description: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      value={personalInfo.email || ''}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
                    <input
                      type="tel"
                      value={personalInfo.phone || ''}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Ubicación</label>
                    <input
                      type="text"
                      value={personalInfo.location || ''}
                      onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Guardar Información Personal
                  </button>
                </div>
              </form>
            </div>

            {/* Formulario de Redes Sociales */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Redes Sociales
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Plataforma</label>
                    <input
                      type="text"
                      value={newSocialMedia.platform}
                      onChange={(e) => setNewSocialMedia({...newSocialMedia, platform: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL</label>
                    <input
                      type="url"
                      value={newSocialMedia.url}
                      onChange={(e) => setNewSocialMedia({...newSocialMedia, url: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Usuario</label>
                    <input
                      type="text"
                      value={newSocialMedia.username}
                      onChange={(e) => setNewSocialMedia({...newSocialMedia, username: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icono</label>
                    <input
                      type="text"
                      value={newSocialMedia.icon}
                      onChange={(e) => setNewSocialMedia({...newSocialMedia, icon: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAddSocialMedia}
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Agregar Red Social
                </button>

                {/* Lista de Redes Sociales */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Redes Sociales Existentes</h3>
                  <div className="space-y-4">
                    {socialMediaList.map((social) => (
                      <div key={social.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        {editingSocialMedia?.id === social.id ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <input
                                type="text"
                                value={editingSocialMedia.platform}
                                onChange={(e) => setEditingSocialMedia({
                                  ...editingSocialMedia,
                                  platform: e.target.value
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="url"
                                value={editingSocialMedia.url}
                                onChange={(e) => setEditingSocialMedia({
                                  ...editingSocialMedia,
                                  url: e.target.value
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="text"
                                value={editingSocialMedia.username}
                                onChange={(e) => setEditingSocialMedia({
                                  ...editingSocialMedia,
                                  username: e.target.value
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="text"
                                value={editingSocialMedia.icon}
                                onChange={(e) => setEditingSocialMedia({
                                  ...editingSocialMedia,
                                  icon: e.target.value
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={handleUpdateSocialMedia}
                                className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                              >
                                <FaSave /> <span>Guardar</span>
                              </button>
                              <button
                                onClick={() => setEditingSocialMedia(null)}
                                className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                              >
                                <FaTimes /> <span>Cancelar</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-gray-800 dark:text-white">{social.platform}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {social.username} • {social.url}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditSocialMedia(social)}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                <FaEdit size={20} />
                              </button>
                              <button
                                onClick={() => social.id && handleDeleteSocialMedia(social.id)}
                                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                              >
                                <FaTrash size={20} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Habilidades */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Agregar Habilidad</h2>
              <form onSubmit={handleAddSkill} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                    <input
                      type="text"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoría</label>
                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill({...newSkill, category: e.target.value as SkillCategory})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    >
                      {SKILL_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icono</label>
                    <input
                      type="text"
                      value={newSkill.icon}
                      onChange={(e) => setNewSkill({...newSkill, icon: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Ejemplo: FaReact"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Años de Experiencia</label>
                    <input
                      type="number"
                      value={newSkill.years_experience.toString()}
                      onChange={(e) => {
                        const value = e.target.value === '' ? 0 : parseInt(e.target.value);
                        setNewSkill({...newSkill, years_experience: value});
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Agregar Habilidad
                </button>
              </form>
              
              {/* Lista de Habilidades por Categoría */}
              {skills.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Habilidades por Categoría</h3>
                  {SKILL_CATEGORIES.map(category => {
                    const categorySkills = skills.filter(skill => skill.category === category);
                    if (categorySkills.length === 0) return null;
                    
                    return (
                      <div key={category} className="mb-6">
                        <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{category}</h4>
                        <div className="space-y-3">
                          {categorySkills.map((skill) => (
                            <div key={skill.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {skill.years_experience} años • Icon: {skill.icon}
                                  </p>
                                </div>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleEditSkill(skill)}
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                  >
                                    <FaEdit size={20} />
                                  </button>
                                  <button
                                    onClick={() => skill.id && handleDeleteSkill(skill.id)}
                                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                  >
                                    <FaTrash size={20} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Formulario de Certificaciones */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Agregar Certificación</h2>
              <form onSubmit={handleAddCertification} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                    <input
                      type="text"
                      value={newCertification.name}
                      onChange={(e) => setNewCertification({...newCertification, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Emisor</label>
                    <input
                      type="text"
                      value={newCertification.issuer}
                      onChange={(e) => setNewCertification({...newCertification, issuer: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha de Emisión</label>
                    <input
                      type="date"
                      value={newCertification.issue_date}
                      onChange={(e) => setNewCertification({...newCertification, issue_date: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icono</label>
                    <input
                      type="text"
                      value={newCertification.icon}
                      onChange={(e) => setNewCertification({...newCertification, icon: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Ejemplo: FaCertificate"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                  <textarea
                    value={newCertification.description || ''}
                    onChange={(e) => setNewCertification({...newCertification, description: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Agregar Certificación
                </button>
              </form>

              {/* Lista de Certificaciones */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Certificaciones Existentes</h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      {editingCertification?.id === cert.id && editingCertification !== null ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              value={editingCertification.name}
                              onChange={(e) => {
                                if (editingCertification === null) return;
                                setEditingCertification({
                                  ...editingCertification,
                                  name: e.target.value
                                });
                              }}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <input
                              type="text"
                              value={editingCertification.issuer}
                              onChange={(e) => {
                                if (editingCertification === null) return;
                                setEditingCertification({
                                  ...editingCertification,
                                  issuer: e.target.value
                                });
                              }}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="date"
                              value={editingCertification.issue_date}
                              onChange={(e) => {
                                if (editingCertification === null) return;
                                setEditingCertification({
                                  ...editingCertification,
                                  issue_date: e.target.value
                                });
                              }}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <input
                              type="text"
                              value={editingCertification.icon}
                              onChange={(e) => {
                                if (editingCertification === null) return;
                                setEditingCertification({
                                  ...editingCertification,
                                  icon: e.target.value
                                });
                              }}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder="Ejemplo: FaCertificate"
                            />
                          </div>
                          <textarea
                            value={editingCertification.description || ''}
                            onChange={(e) => {
                              if (editingCertification === null) return;
                              setEditingCertification({
                                ...editingCertification,
                                description: e.target.value
                              });
                            }}
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={handleUpdateCertification}
                              className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                              <FaSave /> <span>Guardar</span>
                            </button>
                            <button
                              onClick={() => setEditingCertification(null)}
                              className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                              <FaTimes /> <span>Cancelar</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-800 dark:text-white">{cert.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {cert.issuer} • {new Date(cert.issue_date).toLocaleDateString()} • Icon: {cert.icon}
                            </p>
                            {cert.description && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{cert.description}</p>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditCertification(cert)}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <FaEdit size={20} />
                            </button>
                            <button
                              onClick={() => cert.id && handleDeleteCertification(cert.id)}
                              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            >
                              <FaTrash size={20} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 