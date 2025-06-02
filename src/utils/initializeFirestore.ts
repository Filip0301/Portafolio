import { db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function initializeCollections() {
  try {
    // Inicializar documento principal de información personal
    await setDoc(doc(db, 'personal_info', 'main'), {
      name: '',
      title: '',
      description: '',
      email: '',
      phone: '',
      location: '',
      social_media: []
    }, { merge: true });

    console.log('Colecciones inicializadas correctamente');
    return true;
  } catch (error) {
    console.error('Error al inicializar las colecciones:', error);
    return false;
  }
} 