import React from "react";

export default function Pagination({
  articlesPerPage,
  totalArticles,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination-container">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="pagination-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
