import { collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

// Tipos
export interface SocialMedia {
  id?: string;
  platform: string;
  url: string;
  username: string;
  icon: string;
  isActive: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

export interface Skill {
  id?: string;
  name: string;
  category: string;
  icon: string;
  years_experience: number;
}

export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  issue_date: string;
  icon: string;
  expiry_date?: string;
  credential_id?: string;
  credential_url?: string;
  description?: string;
  image_url?: string;
}

// Funciones para PersonalInfo
export const createOrUpdatePersonalInfo = async (data: PersonalInfo) => {
  try {
    const docRef = doc(db, 'personal_info', 'main');
    await setDoc(docRef, data);
    return { success: true };
  } catch (error) {
    console.error('Error creating/updating personal info:', error);
    return { success: false, error };
  }
};

export const getPersonalInfo = async (): Promise<PersonalInfo | null> => {
  try {
    const docRef = doc(db, 'personal_info', 'main');
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as PersonalInfo : null;
  } catch (error) {
    console.error('Error getting personal info:', error);
    return null;
  }
};

// Funciones para Social Media
export const getAllSocialMedia = async (): Promise<SocialMedia[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'social_media'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SocialMedia[];
  } catch (error) {
    console.error('Error getting social media:', error);
    return [];
  }
};

export const addSocialMedia = async (socialMedia: Omit<SocialMedia, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'social_media'), socialMedia);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding social media:', error);
    return { success: false, error };
  }
};

export const updateSocialMedia = async (id: string, data: Partial<SocialMedia>) => {
  try {
    const docRef = doc(db, 'social_media', id);
    await updateDoc(docRef, data);
    return { success: true };
  } catch (error) {
    console.error('Error updating social media:', error);
    return { success: false, error };
  }
};

export const deleteSocialMedia = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'social_media', id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting social media:', error);
    return { success: false, error };
  }
};

// Funciones para Skills
export const getAllSkills = async (): Promise<Skill[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'skills'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Skill));
  } catch (error) {
    console.error('Error getting skills:', error);
    return [];
  }
};

export const updateSkill = async (skillId: string, skillData: Partial<Skill>) => {
  try {
    const skillRef = doc(db, 'skills', skillId);
    await updateDoc(skillRef, skillData);
    return { success: true };
  } catch (error) {
    console.error('Error updating skill:', error);
    return { success: false, error };
  }
};

export const deleteSkill = async (skillId: string) => {
  try {
    await deleteDoc(doc(db, 'skills', skillId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting skill:', error);
    return { success: false, error };
  }
};

// Funciones para Certifications
export const getAllCertifications = async (): Promise<Certification[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'certifications'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Certification[];
  } catch (error) {
    console.error('Error getting certifications:', error);
    throw error;
  }
};

export const updateCertification = async (certId: string, certData: Partial<Certification>) => {
  try {
    const certRef = doc(db, 'certifications', certId);
    await updateDoc(certRef, certData);
    return { success: true };
  } catch (error) {
    console.error('Error updating certification:', error);
    return { success: false, error };
  }
};

export const deleteCertification = async (certId: string) => {
  try {
    await deleteDoc(doc(db, 'certifications', certId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting certification:', error);
    return { success: false, error };
  }
}; 