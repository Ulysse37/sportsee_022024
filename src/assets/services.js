const API_URL = 'http://localhost:3001'; // URL de l'api

// Vérifie sir l'API est disponible 
export const checkApiAvailabilityFetch = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    if (!response.ok) {
      return false; // L'API n'est pas disponible
    }
    return true; // L'API est disponible
  } catch (error) {
    console.log('Erreur lors de la vérification de l\'API :', error);
    return false; // L'API n'est pas disponible en raison d'une erreur
  }
};

// Fetch pour récupérer les données utilisateur
export const getUserData = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    /* if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    } */
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données :', error);
    return null;
  }
};

// Fetch pour récupérer les données d'activité utilisateur
export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/activity`);
    /* if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    } */
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données :', error);
    return null;
  }
};

// Fetch pour récupérer les moyennes de sessions utilisateur
export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
    /* if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    } */
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données :', error);
    return null;
  }
};

// Fetch pour récupérer les performances utilisateur
export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}/performance`);
    /* if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    } */
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données :', error);
    return null;
  }
};
