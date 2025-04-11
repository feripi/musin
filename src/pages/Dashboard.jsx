import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminDashboard from "../components/AdminDashboard";
import StudentDashboard from "../components/StudentDashboard";

const Dashboard = () => {
  const { user } = useAuth();

  // Verifique se o usuário está autenticado
  if (!user) {
    console.log("Usuário não autenticado");
    return <h2 className="access-denied">Acesso negado. Faça login primeiro.</h2>;
  }

  console.log("Usuário autenticado:", user);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bem-vindo, {user.role === "admin" ? "Admin" : "Aluno"}!</h1>
        <button
          className="logout-button"
          onClick={() => alert("Logout implementado aqui!")}
        >
          Sair
        </button>
      </header>

      {/* Renderize o dashboard com base no tipo de usuário */}
      {user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <StudentDashboard />
      )}
    </div>
  );
};

export default Dashboard;