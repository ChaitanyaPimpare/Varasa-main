const BASE = "http://127.0.0.1:5000/api/research";

export const getResearch = async () => {
  const res = await fetch(BASE);
  return await res.json();
};
