'use client';

import { useState, useEffect } from 'react';
import { PersonalInfo, Skill, Certification, SocialMedia, Project, createOrUpdatePersonalInfo, getAllSkills, updateSkill, deleteSkill, getAllCertifications, updateCertification, deleteCertification, getPersonalInfo, getAllSocialMedia, addSocialMedia, updateSocialMedia, deleteSocialMedia, getAllProjects, addProject, updateProject, deleteProject } from '../../services/firebase';
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

type TabType = 'perfil' | 'proyectos' | 'habilidades' | 'certificaciones';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>('perfil');
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

  // States para Proyectos
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    tags: [],
    disciplines: [],
    github_url: '',
    live_url: '',
    image_url: '',
    featured: false
  });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

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
      loadProjects();
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
    } else {
      setPersonalInfo({
        name: 'Felipe Zúñiga',
        title: 'Data Analyst & Full Stack Developer',
        description: 'Soy Ingeniero en Informática con pasión por convertir datos en decisiones. Me especializo en análisis de datos, visualización con dashboards interactivos y desarrollo full stack.',
        email: 'contacto@felipezuniga.dev',
        phone: '',
        location: 'Chile'
      });
    }
  };

  const loadSocialMedia = async () => {
    const loadedSocialMedia = await getAllSocialMedia();
    setSocialMediaList(loadedSocialMedia);
  };

  const loadProjects = async () => {
    const loadedProjects = await getAllProjects();
    setProjects(loadedProjects);
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
      await createOrUpdatePersonalInfo(personalInfo);
      setPersonalInfo(personalInfo);
      setIsEditingProfile(false);
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

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProject(newProject);
      setNewProject({
        title: '',
        description: '',
        tags: [],
        disciplines: [],
        github_url: '',
        live_url: '',
        image_url: '',
        featured: false
      });
      await loadProjects();
      alert('Proyecto agregado con éxito');
    } catch (error) {
      console.error('Error al agregar proyecto:', error);
      alert('Error al agregar el proyecto');
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleUpdateProject = async () => {
    if (!editingProject?.id) return;
    try {
      await updateProject(editingProject.id, editingProject);
      setEditingProject(null);
      await loadProjects();
      alert('Proyecto actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar proyecto:', error);
      alert('Error al actualizar el proyecto');
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      try {
        await deleteProject(id);
        await loadProjects();
        alert('Proyecto eliminado con éxito');
      } catch (error) {
        console.error('Error al eliminar proyecto:', error);
        alert('Error al eliminar el proyecto');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center p-4">
        <div className="glass p-10 rounded-2xl w-full max-w-md animate-fade-in">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-[var(--color-text)]">Iniciar Sesión</h2>
          <form onSubmit={handleLogin} className="space-y-6">
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
              className="w-full bg-brand text-white py-3 px-4 rounded-xl font-medium hover:bg-brand/90 transition-all duration-200 mt-2"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Contenido */}
      <div className="relative z-10 pt-24">
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-heading font-bold text-[var(--color-text)]">Panel de Administración</h1>
              <p className="text-[var(--color-text-muted)] mt-2">Gestiona el contenido de tu portafolio en tiempo real.</p>
            </div>
            
            {/* Tabs de Navegación */}
            <div className="flex bg-[var(--color-surface)] p-1.5 rounded-xl border border-[var(--color-border)] w-full md:w-auto overflow-x-auto hide-scrollbar shrink-0 shadow-sm">
              {(['perfil', 'proyectos', 'habilidades', 'certificaciones'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full relative min-h-[500px]">
            {activeTab === 'perfil' && (
              <div className="space-y-8 animate-fade-in">
            {/* Tarjeta de Información Personal (Vista) */}
            <div className="glass p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold mb-2 text-[var(--color-text)]">
                  {personalInfo.name || 'Sin Nombre'}
                </h2>
                <div className="text-lg font-medium text-brand mb-4">
                  {personalInfo.title || 'Sin Título'}
                </div>
                <p className="text-[var(--color-text-muted)] text-sm mb-5 max-w-2xl leading-relaxed whitespace-pre-line">
                  {personalInfo.description || 'Sin Descripción'}
                </p>
                <div className="flex flex-wrap gap-5 text-sm text-[var(--color-text-subtle)]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {personalInfo.email || 'Sin Email'}
                  </div>
                  {personalInfo.phone && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {personalInfo.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {personalInfo.location || 'Sin Ubicación'}
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex self-start md:self-auto">
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:text-brand px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm group"
                >
                  <FaEdit className="group-hover:scale-110 transition-transform" /> Editar Perfil
                </button>
              </div>
            </div>

            {/* Modal de Edición */}
             {isEditingProfile && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
                  <button 
                    onClick={() => setIsEditingProfile(false)}
                    className="absolute top-6 right-6 text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors p-2"
                  >
                    <FaTimes size={20} />
                  </button>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)] font-heading">
                    Editar Información Personal
                  </h2>
                  <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Nombre</label>
                        <input
                          type="text"
                          value={personalInfo.name || ''}
                          onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                          className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-[var(--color-text-subtle)]"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Título Profesional</label>
                        <input
                          type="text"
                          value={personalInfo.title || ''}
                          onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
                          className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-[var(--color-text-subtle)]"
                          placeholder="Ej: Full Stack Developer"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Descripción Resumida</label>
                      <textarea
                        value={personalInfo.description || ''}
                        onChange={(e) => setPersonalInfo({...personalInfo, description: e.target.value})}
                        rows={5}
                        className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-y placeholder:text-[var(--color-text-subtle)]"
                        placeholder="Escribe sobre ti..."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Email Público</label>
                        <input
                          type="email"
                          value={personalInfo.email || ''}
                          onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                          className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-[var(--color-text-subtle)]"
                          placeholder="email@ejemplo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Teléfono (Opcional)</label>
                        <input
                          type="tel"
                          value={personalInfo.phone || ''}
                          onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                          className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-[var(--color-text-subtle)]"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5">Ubicación</label>
                        <input
                          type="text"
                          value={personalInfo.location || ''}
                          onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                          className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-[var(--color-text-subtle)]"
                          placeholder="Ciudad, País"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3 justify-end pt-5 border-t border-[var(--color-border)]">
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-6 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-all"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl text-sm font-medium bg-brand text-white hover:bg-brand/90 transition-all shadow-md shadow-brand/20 flex items-center gap-2"
                      >
                        <FaSave /> Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}


            {/* Formulario de Redes Sociales */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">
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
                                value={editingSocialMedia?.platform || ''}
                                onChange={(e) => setEditingSocialMedia(prev => prev ? {
                                  ...prev,
                                  platform: e.target.value
                                } : prev)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="url"
                                value={editingSocialMedia?.url || ''}
                                onChange={(e) => setEditingSocialMedia(prev => prev ? {
                                  ...prev,
                                  url: e.target.value
                                } : prev)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="text"
                                value={editingSocialMedia?.username || ''}
                                onChange={(e) => setEditingSocialMedia(prev => prev ? {
                                  ...prev,
                                  username: e.target.value
                                } : prev)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                              <input
                                type="text"
                                value={editingSocialMedia?.icon || ''}
                                onChange={(e) => setEditingSocialMedia(prev => prev ? {
                                  ...prev,
                                  icon: e.target.value
                                } : prev)}
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
              </div>
            )}

            {activeTab === 'habilidades' && (
              <div className="space-y-8 animate-fade-in">
            {/* Formulario de Habilidades */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">Agregar Habilidad</h2>
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
                              {editingSkill?.id === skill.id && editingSkill !== null ? (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                      type="text"
                                      value={editingSkill.name}
                                      onChange={(e) => setEditingSkill({...editingSkill, name: e.target.value})}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                      placeholder="Nombre"
                                    />
                                    <input
                                      type="text"
                                      value={editingSkill.icon}
                                      onChange={(e) => setEditingSkill({...editingSkill, icon: e.target.value})}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                      placeholder="Icono (ej: FaReact)"
                                    />
                                    <input
                                      type="number"
                                      value={editingSkill.years_experience.toString()}
                                      onChange={(e) => {
                                        const value = e.target.value === '' ? 0 : parseInt(e.target.value);
                                        setEditingSkill({...editingSkill, years_experience: value});
                                      }}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                      placeholder="Años exp."
                                    />
                                    <select
                                      value={editingSkill.category}
                                      onChange={(e) => setEditingSkill({...editingSkill, category: e.target.value as SkillCategory})}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                      {SKILL_CATEGORIES.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={handleUpdateSkill}
                                      className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                      <FaSave /> <span>Guardar</span>
                                    </button>
                                    <button
                                      onClick={() => setEditingSkill(null)}
                                      className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    >
                                      <FaTimes /> <span>Cancelar</span>
                                    </button>
                                  </div>
                                </div>
                              ) : (
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
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
              </div>
            )}

            {activeTab === 'certificaciones' && (
              <div className="space-y-8 animate-fade-in">
            {/* Formulario de Certificaciones */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">Agregar Certificación</h2>
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
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                          <input
                            type="url"
                            value={editingCertification.credential_url || ''}
                            onChange={(e) => {
                              if (editingCertification === null) return;
                              setEditingCertification({
                                ...editingCertification,
                                credential_url: e.target.value
                              });
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="URL del Certificado"
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
            )}

            {activeTab === 'proyectos' && (
              <div className="space-y-8 animate-fade-in">
            {/* Formulario de Proyectos */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">Agregar Proyecto</h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Imagen URL</label>
                    <input
                      type="text"
                      value={newProject.image_url}
                      onChange={(e) => setNewProject({...newProject, image_url: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tags (Separados por comas)</label>
                    <input
                      type="text"
                      value={newProject.tags.join(', ')}
                      onChange={(e) => setNewProject({...newProject, tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="React, Next.js, Tailwind"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Disciplinas (Separadas por comas)</label>
                    <input
                      type="text"
                      value={newProject.disciplines ? newProject.disciplines.join(', ') : ''}
                      onChange={(e) => setNewProject({...newProject, disciplines: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Data Analysis, Full Stack"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL del Live (Opcional)</label>
                    <input
                      type="text"
                      value={newProject.live_url || ''}
                      onChange={(e) => setNewProject({...newProject, live_url: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL de Github (Opcional)</label>
                    <input
                      type="text"
                      value={newProject.github_url || ''}
                      onChange={(e) => setNewProject({...newProject, github_url: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                  <textarea
                    value={newProject.description || ''}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Agregar Proyecto
                </button>
              </form>

              {/* Lista de Proyectos */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Proyectos Existentes</h3>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      {editingProject?.id === project.id && editingProject !== null ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              value={editingProject.title}
                              onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder="Título"
                            />
                            <input
                               type="text"
                               value={editingProject.tags.join(', ')}
                               onChange={(e) => setEditingProject({
                                 ...editingProject, 
                                 tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                               })}
                               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                               placeholder="Tags"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={handleUpdateProject}
                              className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                              <FaSave /> <span>Guardar</span>
                            </button>
                            <button
                              onClick={() => setEditingProject(null)}
                              className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                              <FaTimes /> <span>Cancelar</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-800 dark:text-white">{project.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {project.tags.join(', ')}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditProject(project)}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <FaEdit size={20} />
                            </button>
                            <button
                              onClick={() => project.id && handleDeleteProject(project.id)}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 