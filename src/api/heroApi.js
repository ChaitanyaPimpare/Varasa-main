const BASE_URL = "http://127.0.0.1:5000/api/hero/";

export const getHero = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};
