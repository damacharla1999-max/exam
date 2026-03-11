// Local Storage Utility Functions
export const STORAGE_KEYS = {
  EXAM_RESULTS: 'exam_results',
  RANK_CARDS: 'rank_cards',
  CERTIFICATES: 'certificates',
  USER_DATA: 'user_data',
  BULK_QUESTIONS: 'bulk_questions'
};

export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return null;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

export const clearAllStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

// Specific functions for exam data
export const saveExamResult = (userId, subject, result) => {
  const existingResults = getFromLocalStorage(STORAGE_KEYS.EXAM_RESULTS) || {};
  const userResults = existingResults[userId] || {};

  userResults[subject] = {
    result: result, // Store the array directly
    timestamp: new Date().toISOString(),
    subject: subject
  };

  existingResults[userId] = userResults;
  return saveToLocalStorage(STORAGE_KEYS.EXAM_RESULTS, existingResults);
};

export const getExamResults = (userId) => {
  const allResults = getFromLocalStorage(STORAGE_KEYS.EXAM_RESULTS) || {};
  return allResults[userId] || {};
};

export const saveRankCard = (userId, subject, rankData) => {
  const existingRankCards = getFromLocalStorage(STORAGE_KEYS.RANK_CARDS) || {};
  const userRankCards = existingRankCards[userId] || {};

  userRankCards[subject] = {
    ...rankData,
    timestamp: new Date().toISOString(),
    subject: subject
  };

  existingRankCards[userId] = userRankCards;
  return saveToLocalStorage(STORAGE_KEYS.RANK_CARDS, existingRankCards);
};

export const getRankCards = (userId) => {
  const allRankCards = getFromLocalStorage(STORAGE_KEYS.RANK_CARDS) || {};
  return allRankCards[userId] || {};
};

export const saveCertificate = (userId, subject, certificateData) => {
  const existingCertificates = getFromLocalStorage(STORAGE_KEYS.CERTIFICATES) || {};
  const userCertificates = existingCertificates[userId] || {};

  userCertificates[subject] = {
    ...certificateData,
    timestamp: new Date().toISOString(),
    subject: subject
  };

  existingCertificates[userId] = userCertificates;
  return saveToLocalStorage(STORAGE_KEYS.CERTIFICATES, existingCertificates);
};

export const getCertificates = (userId) => {
  const allCertificates = getFromLocalStorage(STORAGE_KEYS.CERTIFICATES) || {};
  return allCertificates[userId] || {};
};
