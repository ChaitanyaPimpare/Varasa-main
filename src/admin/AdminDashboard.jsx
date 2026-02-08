import React, { useEffect, useState } from "react";
import {
  getSection,
  createItem,
  updateItem,
  deleteItem as deleteAPI,
  uploadImage
} from "../api/contentApi";
import "./admin.css";

const pageSections = {
  home: [
    { key: "programs", label: "Programs (Home Page)", limit: 4 },
    { key: "events", label: "Events (Home Page)", limit: 4 },
    { key: "researchHome", label: "Research Highlights (Home Page)", limit: 4 }
  ],
  research: [
    { key: "research_publications", label: "Publications", limit: 4 },
    { key: "research_seminars", label: "Learning & Seminars", limit: 4 },
    { key: "research_training", label: "Training & Workshop", limit: 4 }
  ],
  eventsPage: [
    { key: "events_page", label: "Events Page Slider", limit: 10 }
  ],
  about: [
    { key: "about_team", label: "About Page – Team Members", limit: 8 }
  ]
};

export default function AdminDashboard() {
  const [page, setPage] = useState("home");
  const [section, setSection] = useState("programs");
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);

  const currentSectionObj = pageSections[page].find(sec => sec.key === section);
  const cardLimit = currentSectionObj?.limit || 4;

  /* ---------- AUTH ---------- */
  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) window.location.href = "/";
  }, []);

  /* ---------- Change page -> first section ---------- */
  useEffect(() => {
    setSection(pageSections[page][0].key);
  }, [page]);

  /* ---------- LOAD DATA FROM BACKEND ---------- */
  useEffect(() => {
    async function load() {
      const data = await getSection(section);
      setItems(data);
      setSelected(null);
    }
    load();
  }, [section]);

  /* ---------- ADD NEW CARD ---------- */
  const addNew = async () => {
    if (items.length >= cardLimit)
      return alert(`Only ${cardLimit} cards allowed in this section`);

    const newItem = {
      title: "New Title",
      desc: "Description",
      img: "",
      date: "",
      location: "",
      author: "",
      year: "",
      position: items.length
    };

    await createItem(section, newItem);

    const refreshed = await getSection(section);
    setItems(refreshed);
  };

  /* ---------- DELETE ---------- */
  const deleteItem = async (id) => {
    await deleteAPI(id);
    const refreshed = await getSection(section);
    setItems(refreshed);
    if (selected?.id === id) setSelected(null);
  };

  /* ---------- SAVE ---------- */
  const saveItem = async () => {
    await updateItem(selected.id, selected);
    const refreshed = await getSection(section);
    setItems(refreshed);
    alert("Saved to database!");
  };

  /* ---------- DRAG DROP REORDER ---------- */
  const handleDragStart = (index) => setDragIndex(index);

  const handleDrop = async (index) => {
    const reordered = [...items];
    const [moved] = reordered.splice(dragIndex, 1);
    reordered.splice(index, 0, moved);

    for (let i = 0; i < reordered.length; i++) {
      await updateItem(reordered[i].id, { ...reordered[i], position: i });
    }

    const refreshed = await getSection(section);
    setItems(refreshed);
  };

  /* ---------- LOGOUT ---------- */
  const logout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="admin-layout">
      {/* ================= SIDEBAR ================= */}
      <div className="admin-sidebar">
        <button className="back-btn" onClick={() => (window.location.href = "/")}>
          ← View Website
        </button>

        <button className="logout-btn" onClick={logout}>Logout</button>

        <h3>Content Manager</h3>

        <label>Page</label>
        <select value={page} onChange={e => setPage(e.target.value)}>
          <option value="home">Home Page Sections</option>
          <option value="about">About Page</option>
          <option value="research">Research Page Sections</option>
          <option value="eventsPage">Events Page Slider</option>
        </select>

        <label>Section</label>
        <select value={section} onChange={e => setSection(e.target.value)}>
          {pageSections[page].map(sec => (
            <option key={sec.key} value={sec.key}>{sec.label}</option>
          ))}
        </select>

        <div className="card-limit">{items.length}/{cardLimit} Cards Used</div>

        <button onClick={addNew} className="admin-add-btn">+ Add New Card</button>

        <ul className="admin-list">
          {items.map((item, index) => (
            <li
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className={`admin-list-item ${selected?.id === item.id ? "active" : ""}`}
            >
              <span className="title" onClick={() => setSelected(item)}>
                {item.title}
              </span>

              <button className="delete-icon" onClick={() => deleteItem(item.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= EDITOR ================= */}
      <div className="admin-editor">
        {selected ? (
          <>
            <h3>Edit Card</h3>

            <label>Title</label>
            <input
              value={selected.title || ""}
              onChange={e => setSelected({ ...selected, title: e.target.value })}
            />

            <label>Description</label>
            <textarea
              value={selected.desc || ""}
              onChange={e => setSelected({ ...selected, desc: e.target.value })}
            />

            {/* Publications */}
            {section === "research_publications" && (
              <>
                <label>Author</label>
                <input
                  value={selected.author || ""}
                  onChange={e => setSelected({ ...selected, author: e.target.value })}
                />

                <label>Year</label>
                <input
                  value={selected.year || ""}
                  onChange={e => setSelected({ ...selected, year: e.target.value })}
                />
              </>
            )}

            {/* Events Page */}
            {section === "events_page" && (
              <>
                <label>Date</label>
                <input
                  value={selected.date || ""}
                  onChange={e => setSelected({ ...selected, date: e.target.value })}
                />

                <label>Location</label>
                <input
                  value={selected.location || ""}
                  onChange={e => setSelected({ ...selected, location: e.target.value })}
                />
              </>
            )}

            {/* IMAGE UPLOAD */}
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={async e => {
                const file = e.target.files[0];
                if (!file) return;

                const url = await uploadImage(file);
                setSelected({ ...selected, img: url });
              }}
            />

            {selected.img && (
              <img
                src={`http://127.0.0.1:5000${selected.img}`}
                alt=""
                className="admin-preview"
              />
            )}

            <div className="admin-actions">
              <button onClick={saveItem}>Save Changes</button>

              <button onClick={() => deleteItem(selected.id)} className="danger">
                Delete Card
              </button>
            </div>
          </>
        ) : (
          <div className="empty-editor">
            <h3>Select a card to edit</h3>
            <p>Or create a new one from the left panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}
