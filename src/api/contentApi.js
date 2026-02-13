const API = "https://varasa-backend.onrender.com";

/* ---------- TOKEN HEADER ---------- */
function authHeader() {
  const token = localStorage.getItem("token");
  if (!token) return {};
  return {
    Authorization: `Bearer ${token}`
  };
}

/* ---------------- GET SECTION (PUBLIC) ---------------- */
export async function getSection(section) {
  const res = await fetch(`${API}/content/${section}`);

  if (!res.ok) throw new Error("Failed to load section");
  return await res.json();
}

/* ---------------- CREATE ---------------- */
export async function createItem(section, data) {
  const res = await fetch(`${API}/content/${section}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    },
    body: JSON.stringify(data)
  });

  if (res.status === 401) {
    alert("Session expired. Please login again.");
    window.location.href = "/admin-login";
    return;
  }

  if (!res.ok) throw new Error("Create failed");
  return await res.json();
}

/* ---------------- UPDATE ---------------- */
export async function updateItem(id, data) {
  const res = await fetch(`${API}/content/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    },
    body: JSON.stringify(data)
  });

  if (res.status === 401) {
    alert("Session expired. Please login again.");
    window.location.href = "/admin-login";
    return;
  }

  if (!res.ok) throw new Error("Update failed");
}

/* ---------------- DELETE ---------------- */
export async function deleteItem(id) {
  const res = await fetch(`${API}/content/${id}`, {
    method: "DELETE",
    headers: authHeader()
  });

  if (res.status === 401) {
    alert("Session expired. Please login again.");
    window.location.href = "/admin-login";
    return;
  }

  if (!res.ok) throw new Error("Delete failed");
}

/* ---------------- IMAGE UPLOAD ---------------- */
export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API}/upload`, {
    method: "POST",
    headers: authHeader(),
    body: formData
  });

  if (res.status === 401) {
    alert("Session expired. Please login again.");
    window.location.href = "/admin-login";
    return;
  }

  if (!res.ok) throw new Error("Image upload failed");

  const data = await res.json();
  return data.url;
}
