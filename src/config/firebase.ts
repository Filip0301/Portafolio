import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Debug: Imprimir todas las variables de entorno disponibles
console.log('Variables de entorno de Firebase:', {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'no disponible',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'no disponible',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'no disponible',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'no disponible',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'no disponible',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'no disponible',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'no disponible'
});

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics only in the browser
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    getAnalytics(app);
    console.log('Analytics inicializado correctamente');
  }).catch((error) => {
    console.error('Error loading analytics:', error);
  });
} 