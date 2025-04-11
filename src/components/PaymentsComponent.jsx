import React, { useState } from "react";

const PaymentsComponent = ({ payments, onEditPayment }) => {
  const [editingPayment, setEditingPayment] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const getStatusColor = (status) => {
    switch (status) {
      case "pago":
        return "green";
      case "pendente":
        return "yellow";
      case "atrasado":
        return "red";
      default:
        return "gray";
    }
  };

  const handleEditClick = (payment) => {
    setEditingPayment(payment);
    setNewStatus(payment.status);
  };

  const handleSaveClick = () => {
    if (!newStatus) {
      alert("O status não pode estar vazio.");
      return;
    }
    onEditPayment({ ...editingPayment, status: newStatus });
    setEditingPayment(null);
    setNewStatus("");
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "600px" }}>
      <h2>Controle de Pagamentos</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Aluno</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.student}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{payment.student}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {editingPayment?.student === payment.student ? (
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="pago">Pago</option>
                    <option value="pendente">Pendente</option>
                    <option value="atrasado">Atrasado</option>
                  </select>
                ) : (
                  payment.status
                )}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {editingPayment?.student === payment.student ? (
                  <button onClick={handleSaveClick}>Salvar</button>
                ) : (
                  <button onClick={() => handleEditClick(payment)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsComponent;