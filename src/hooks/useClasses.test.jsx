import { renderHook, act } from "@testing-library/react";
import useClasses from "./useClasses";

describe("useClasses Hook", () => {
  it("deve adicionar uma nova aula", () => {
    const { result } = renderHook(() => useClasses());

    act(() => {
      result.current.addClass({ id: 1, title: "Matemática", date: "2025-04-15" });
    });

    expect(result.current.classes).toHaveLength(1);
    expect(result.current.classes[0]).toEqual({
      id: 1,
      title: "Matemática",
      date: "2025-04-15",
    });
  });

  it("deve editar uma aula existente", () => {
    const { result } = renderHook(() => useClasses());

    act(() => {
      result.current.addClass({ id: 1, title: "Matemática", date: "2025-04-15" });
    });

    act(() => {
      result.current.editClass({ id: 1, title: "Física", date: "2025-04-20" });
    });

    expect(result.current.classes).toHaveLength(1);
    expect(result.current.classes[0]).toEqual({
      id: 1,
      title: "Física",
      date: "2025-04-20",
    });
  });
});