// utils/storage.js
export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    alert("Storage is full! Please remove some images.");
    console.error("Quota exceeded", e);
  }
};

export const loadData = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};
