import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Debug: Verificar si las variables de entorno están definidas
console.log('Estado de las variables de entorno:', {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Definida' : 'No definida',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Definida' : 'No definida',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Definida' : 'No definida',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'Definida' : 'No definida',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'Definida' : 'No definida',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Definida' : 'No definida',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? 'Definida' : 'No definida'
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

// Debug: Imprimir la configuración completa
console.log('Firebase Config:', firebaseConfig);

// Initialize Firebase only if it hasn't been initialized
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only in the browser
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    getAnalytics(app);
  }).catch((error) => {
    console.error('Error loading analytics:', error);
  });
}

// Initialize Auth
export const auth = getAuth(app); 