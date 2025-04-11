import { useState } from "react";

const usePayments = () => {
  const [payments, setPayments] = useState([
    { student: "João Silva", status: "pago" },
    { student: "Maria Oliveira", status: "pendente" },
    { student: "Carlos Souza", status: "atrasado" },
  ]);

  const editPayment = (updatedPayment) => {
    setPayments(
      payments.map((payment) =>
        payment.student === updatedPayment.student ? updatedPayment : payment
      )
    );
  };

  return { payments, editPayment };
};

export default usePayments;