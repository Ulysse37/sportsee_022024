const API_URL = 'http://localhost:3001'; // URL de l'api

export const isServerAvailable = async () => {
  try {
    const response = await fetch(`${API_URL}/user/12`);
    return response.ok;
  } catch (error) {
    return false;
  }
};
/* isServerAvailable(); */

// Vérifie sir l'API est disponible 
export const checkApiAvailabilityFetch = async (userId) => {

  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    if (!response.ok) {
      return false; // L'API n'est pas disponible
    }
    return true; // L'API est disponible
  } catch (error) {
    console.log('Fetch impossible : API non disponible');
    return false; // L'API n'est pas disponible en raison d'une erreur
  }
};

// Fetch pour récupérer les données utilisateur
export const getUserData = async (userId) => {
  /* const serverAvailable = await isServerAvailable();
  
  if (!serverAvailable) {
    console.log("Le serveur n'est pas disponible");
    return null;
  } */

  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch impossible : API non disponible');
    return null;
  }
};

// Fetch pour récupérer les données d'activité utilisateur
export const getUserActivity = async (userId) => {
  /* const serverAvailable = await isServerAvailable();
  
  if (!serverAvailable) {
    console.log("Le serveur n'est pas disponible");
    return null;
  } */

  try {
    const response = await fetch(`${API_URL}/user/${userId}/activity`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch impossible : API non disponible');
    return null;
  }
};

// Fetch pour récupérer les moyennes de sessions utilisateur
export const getUserAverageSessions = async (userId) => {
  /* const serverAvailable = await isServerAvailable();
  
  if (!serverAvailable) {
    console.log("Le serveur n'est pas disponible");
    return null;
  } */

  try {
    const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch impossible : API non disponible');
    return null;
  }
};

// Fetch pour récupérer les performances utilisateur
export const getUserPerformance = async (userId) => {
  /* const serverAvailable = await isServerAvailable();
  
  if (!serverAvailable) {
    console.log("Le serveur n'est pas disponible");
    return null;
  } */

  try {
    const response = await fetch(`${API_URL}/user/${userId}/performance`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch impossible : API non disponible');
    return null;
  }
};
