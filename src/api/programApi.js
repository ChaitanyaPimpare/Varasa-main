const BASE = "http://127.0.0.1:5000/api/programs";

export const getPrograms = async (type) => {
  const res = await fetch(`${BASE}?type=${type}`);
  return await res.json();
};
