import React, { useEffect, useState } from "react";
import { loadData, saveData } from "../utils/storage";
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

  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) window.location.href = "/";
  }, []);

  useEffect(() => {
    setSection(pageSections[page][0].key);
  }, [page]);

  useEffect(() => {
    setItems(loadData(section, []));
    setSelected(null);
  }, [section]);

  const saveAll = (updated) => {
    setItems(updated);
    saveData(section, updated);
  };

  const addNew = () => {
    if (items.length >= cardLimit)
      return alert(`Only ${cardLimit} cards allowed in this section`);

    saveAll([
      ...items,
      {
        id: Date.now(),
        title: "New Title",
        desc: "Description",
        img: "",
        date: "",
        location: ""
      }
    ]);
  };

  const deleteItem = (id) => {
    saveAll(items.filter(i => i.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const saveItem = () => {
    saveAll(items.map(i => (i.id === selected.id ? selected : i)));
    alert("Saved!");
  };

  const handleDragStart = (index) => setDragIndex(index);
  const handleDrop = (index) => {
    const reordered = [...items];
    const [moved] = reordered.splice(dragIndex, 1);
    reordered.splice(index, 0, moved);
    saveAll(reordered);
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <button className="back-btn" onClick={() => (window.location.href = "/")}>
          ← View Website
        </button>
        <button className="logout-btn" onClick={logout}>Logout</button>

        <h3>Content Manager</h3>

        <label>Page</label>
        <select value={page} onChange={e => setPage(e.target.value)}>
          <option value="home">Home Page Sections</option>
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
              <span className="title" onClick={() => setSelected(item)}>{item.title}</span>
              <button className="delete-icon" onClick={() => deleteItem(item.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-editor">
        {selected ? (
          <>
            <h3>Edit Card</h3>

            <label>Title</label>
            <input value={selected.title} onChange={e => setSelected({ ...selected, title: e.target.value })} />

            <label>Description</label>
            <textarea value={selected.desc} onChange={e => setSelected({ ...selected, desc: e.target.value })} />

            {(page === "eventsPage") && (
              <>
                <label>Date</label>
                <input value={selected.date || ""} onChange={e => setSelected({ ...selected, date: e.target.value })} />

                <label>Location</label>
                <input value={selected.location || ""} onChange={e => setSelected({ ...selected, location: e.target.value })} />
              </>
            )}

            <label>Image</label>
            <input type="file" accept="image/*" onChange={e => {
              const reader = new FileReader();
              reader.onload = () => setSelected({ ...selected, img: reader.result });
              reader.readAsDataURL(e.target.files[0]);
            }} />

            {selected.img && <img src={selected.img} alt="" className="admin-preview" />}

            <div className="admin-actions">
              <button onClick={saveItem}>Save Changes</button>
              <button onClick={() => deleteItem(selected.id)} className="danger">Delete Card</button>
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
