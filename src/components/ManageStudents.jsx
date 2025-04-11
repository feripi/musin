import React, { useState } from "react";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "João Silva", email: "joao@musin.com" },
    { id: 2, name: "Maria Oliveira", email: "maria@musin.com" },
  ]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newStudent.email)) {
      setError("E-mail inválido.");
      return;
    }

    setStudents([
      ...students,
      { id: students.length + 1, name: newStudent.name, email: newStudent.email },
    ]);
    setNewStudent({ name: "", email: "" });
    setError("");
  };

  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <h2>Gerenciar Alunos</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nome</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>E-mail</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                <button onClick={() => handleRemoveStudent(student.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "1rem" }}>
        <h3>Adicionar Novo Aluno</h3>
        <input
          type="text"
          placeholder="Nome"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          style={{ marginRight: "0.5rem" }}
        />
        <button onClick={handleAddStudent}>Adicionar</button>
      </div>
    </div>
  );
};

export default ManageStudents;