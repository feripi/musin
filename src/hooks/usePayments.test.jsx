import { renderHook, act } from "@testing-library/react";
import usePayments from "./usePayments";

describe("usePayments Hook", () => {
  it("deve editar o status de um pagamento", () => {
    const { result } = renderHook(() => usePayments());

    act(() => {
      result.current.editPayment({ student: "João Silva", status: "pendente" });
    });

    expect(result.current.payments).toContainEqual({
      student: "João Silva",
      status: "pendente",
    });
  });

  it("deve manter pagamentos não editados inalterados", () => {
    const { result } = renderHook(() => usePayments());

    act(() => {
      result.current.editPayment({ student: "João Silva", status: "pendente" });
    });

    expect(result.current.payments).toContainEqual({
      student: "Maria Oliveira",
      status: "pendente",
    });
  });
});