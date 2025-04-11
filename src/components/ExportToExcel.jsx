import React from "react";
import * as XLSX from "xlsx";

const ExportToExcel = ({ data, fileName }) => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <button onClick={handleExport} style={{ marginTop: "1rem" }}>
      Exportar para Excel
    </button>
  );
};

export default ExportToExcel;