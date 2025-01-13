import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Table/Table.css";
import { fetchKickstarterProjects } from "./utlis/api";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/ Loader";
import Table from "./components/Table/Table";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchKickstarterProjects();
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = projects.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  return (
    <div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table projects={currentRecords} startIndex={startIndex} />
          <Pagination
            totalRecords={projects.length}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
