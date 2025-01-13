import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ projects, startIndex }) => {
  return (
    <div className="container">
      <table className="project-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {projects.length ? (
            projects.map((project, index) => (
              <tr key={project?.["s.no"]}>
                <td>{startIndex + index + 1}</td>
                <td>{project?.["percentage.funded"]}</td>
                <td>{project?.["amt.pledged"]?.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No projects available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  projects: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default Table;
