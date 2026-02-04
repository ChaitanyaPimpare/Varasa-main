import React, { useEffect, useState } from "react";

const BASE = "http://127.0.0.1:5000/api/programs";
const UPLOAD = "http://127.0.0.1:5000/api/upload/";

export default function ProgramsAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "event",
  });
  const [image, setImage] = useState(null);

  const loadData = async () => {
    const res1 = await fetch(`${BASE}?type=event`);
    const res2 = await fetch(`${BASE}?type=program`);
    const data1 = await res1.json();
    const data2 = await res2.json();
    setItems([...data1, ...data2]);
  };

  useEffect(() => { loadData(); }, []);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);

    const res = await fetch(UPLOAD, {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    return result.image_url;
  };

  const handleSubmit = async () => {
    const image_url = await uploadImage();

    await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, image_url }),
    });

    setForm({ title: "", description: "", type: "event" });
    setImage(null);
    loadData();
  };

  const deleteItem = async (id) => {
    await fetch(`${BASE}/${id}`, { method: "DELETE" });
    loadData();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Programs & Events Admin</h2>

      {/* FORM */}
      <div style={{ marginBottom: "30px" }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <br /><br />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <br /><br />

        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option value="event">Event</option>
          <option value="program">Program</option>
        </select>
        <br /><br />

        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <br /><br />

        <button onClick={handleSubmit}>Add</button>
      </div>

      {/* LIST */}
      <h3>Existing Items</h3>
      {items.map(item => (
        <div key={item.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <img
            src={`http://127.0.0.1:5000/${item.image_url}`}
            alt=""
            width="120"
          />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <small>Type: {item.type}</small>
          <br />
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
