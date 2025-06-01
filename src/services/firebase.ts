import { collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

// Tipos
export interface SocialMedia {
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
  social_media: SocialMedia[];
}

export interface Skill {
  id?: string;
  name: string;
  category: string;
  icon?: string;
  years_experience: number;
}

export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  issue_date: string;
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

// Funciones para Skills
export const getAllSkills = async (): Promise<Skill[]> => {
  try {
    const skillsRef = collection(db, 'skills');
    const snapshot = await getDocs(skillsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Skill, 'id'>)
    }));
  } catch (error) {
    console.error('Error getting skills:', error);
    return [];
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