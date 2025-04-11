import { useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);

  const addClass = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  const editClass = (updatedClass) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) => (cls.id === updatedClass.id ? updatedClass : cls))
    );
  };

  return { classes, addClass, editClass };
};

export default useClasses;