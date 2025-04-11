import React, { useState } from "react";

const ManageClasses = ({ classes, onAddClass, onEditClass }) => {
  const [newClass, setNewClass] = useState({ id: null, title: "", date: "" });
  const [error, setError] = useState("");

  const handleAddOrEditClass = () => {
    if (!newClass.title || !newClass.date) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const selectedDate = new Date(newClass.date);
    if (selectedDate < new Date()) {
      setError("A data da aula não pode ser no passado.");
      return;
    }

    if (newClass.id) {
      onEditClass(newClass);
    } else {
      onAddClass({ ...newClass, id: Date.now() });
    }

    setNewClass({ id: null, title: "", date: "" });
    setError("");
  };

  const handleEditClick = (cls) => {
    setNewClass(cls);
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <h2>Gerenciar Aulas</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Título da Aula"
          value={newClass.title}
          onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="date"
          value={newClass.date}
          onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <button onClick={handleAddOrEditClass}>
          {newClass.id ? "Editar Aula" : "Adicionar Aula"}
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Título</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Data</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{cls.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{cls.date}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                <button onClick={() => handleEditClick(cls)} style={{ marginRight: "0.5rem" }}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;