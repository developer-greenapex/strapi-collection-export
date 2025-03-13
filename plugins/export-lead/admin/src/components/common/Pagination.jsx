import React from "react";

const Pagination = ({ currentPage, setCurrentPage, maxPages }) => {
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const makePagination = () => {
    let retStatus = [];

    if (maxPages <= 4) {
      for (let i = 1; i <= maxPages; i++) {
        retStatus.push(
          <button
            className={`section__pagination-list-item ${
              currentPage === i ? "active" : ""
            }`}
            onClick={() => {
              changePage(i);
            }}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage >= 1 && currentPage < 5) {
        for (let i = 1; i <= 5; i++) {
          retStatus.push(
            <button
              className={`section__pagination-list-item ${
                currentPage === i ? "active" : ""
              }`}
              onClick={() => {
                changePage(i);
              }}
            >
              {i}
            </button>
          );
        }

        retStatus.push(<label className="">. . .</label>);
        retStatus.push(
          <button
            className={`section__pagination-list-item ${
              currentPage === maxPages ? "active" : ""
            }`}
            onClick={() => {
              changePage(maxPages);
            }}
          >
            {maxPages}
          </button>
        );
      } else if (currentPage > maxPages - 4 && currentPage <= maxPages) {
        retStatus.push(
          <button
            className={`section__pagination-list-item ${
              currentPage === 1 ? "active" : ""
            }`}
            onClick={() => {
              changePage(1);
            }}
          >
            {1}
          </button>
        );
        retStatus.push(<label className="">. . .</label>);

        for (let i = maxPages - 4; i <= maxPages; i++) {
          retStatus.push(
            <button
              className={`section__pagination-list-item ${
                currentPage === i ? "active" : ""
              }`}
              onClick={() => {
                changePage(i);
              }}
            >
              {i}
            </button>
          );
        }
      } else {
        retStatus.push(
          <button
            className={`section__pagination-list-item ${
              currentPage === 1 ? "active" : ""
            }`}
            onClick={() => {
              changePage(1);
            }}
          >
            {1}
          </button>
        );
        retStatus.push(<label className="">. . .</label>);

        if (currentPage - 2 <= 1) {
          for (let i = currentPage; i <= currentPage + 1; i++) {
            retStatus.push(
              <button
                className={`section__pagination-list-item ${
                  currentPage === i ? "active" : ""
                }`}
                onClick={() => {
                  changePage(i);
                }}
              >
                {i}
              </button>
            );
          }
        } else if (currentPage + 2 >= maxPages) {
          for (let i = currentPage - 1; i <= currentPage; i++) {
            retStatus.push(
              <button
                className={`section__pagination-list-item ${
                  currentPage === i ? "active" : ""
                }`}
                onClick={() => {
                  changePage(i);
                }}
              >
                {i}
              </button>
            );
          }
        } else {
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            retStatus.push(
              <button
                className={`section__pagination-list-item ${
                  currentPage === i ? "active" : ""
                }`}
                onClick={() => {
                  changePage(i);
                }}
              >
                {i}
              </button>
            );
          }
        }

        retStatus.push(<label className="">. . .</label>);
        retStatus.push(
          <button
            className={`section__pagination-list-item ${
              currentPage === maxPages ? "active" : ""
            }`}
            onClick={() => {
              changePage(maxPages);
            }}
          >
            {maxPages}
          </button>
        );
      }
    }

    return retStatus;
  };

  return (
    <div className="section__pagination">
      <div className="section__pagination-container">
        <div className="section__pagination-list">
          <button
            className={`section__pagination-list-arrow ${
              currentPage === 1 ? "disabled" : ""
            }`}
            disabled={currentPage === 1 ? true : false}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5015 8.00006C14.503 8.26586 14.3987 8.52134 14.2115 8.71006L10.9015 12.0001L14.0815 15.3001C14.4692 15.6901 14.4692 16.32 14.0815 16.7101C13.6926 17.1022 13.0594 17.1048 12.6673 16.7159C12.6653 16.7139 12.6634 16.712 12.6615 16.7101L8.80148 12.7101H8.80148C8.42034 12.3212 8.42034 11.6989 8.80148 11.3101L12.8015 7.31006C13.1904 6.91794 13.8236 6.91534 14.2157 7.30426C14.2176 7.30619 14.2196 7.30812 14.2215 7.31006C14.4002 7.49544 14.5005 7.74259 14.5015 8.00006Z"
                />
              </g>
            </svg>
          </button>
          {makePagination()}
          <button
            className={`section__pagination-list-arrow ${
              currentPage >= maxPages ? "disabled" : ""
            }`}
            disabled={currentPage >= maxPages ? true : false}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.50243 15.9999C9.50089 15.7341 9.60524 15.4787 9.79243 15.2899L13.1024 11.9999L9.92243 8.69994C9.5347 8.3099 9.5347 7.67998 9.92243 7.28994C10.3113 6.89782 10.9445 6.89522 11.3366 7.28414C11.3386 7.28607 11.3405 7.288 11.3424 7.28994L15.2024 11.2899H15.2024C15.5836 11.6788 15.5836 12.3011 15.2024 12.6899L11.2024 16.6899C10.8135 17.0821 10.1803 17.0847 9.78822 16.6957C9.78628 16.6938 9.78435 16.6919 9.78243 16.6899C9.60374 16.5046 9.50345 16.2574 9.50243 15.9999Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
