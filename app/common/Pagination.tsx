type Props = {
  pages: number;
  currentPage: number;
  setCurrentPage: any;
  lastPage: number;
};

const FetchPagination = ({
  pages,
  currentPage,
  setCurrentPage,
  lastPage,
}: Props) => {
  const pagesNumber = pages;
  const startingOffset = 2;
  const pageNumbers = Array.from(
    { length: pagesNumber },
    (_, index) => currentPage - startingOffset + index - 3
  );

  return (
    <>
      <div className="flex justify-center items-center  m-auto text-sm font-medium my-4 p-2  text-[#F9F871]">
        <label className="mx-2">
          Showing {currentPage} result of {lastPage}
        </label>
        <button
          className={`${
            currentPage === 1 ? "text-ts-faded-purple" : "text-[#F9F871]"
          } mx-2`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {pageNumbers.map((pageNumber, index) => (
          <div key={index}>
            {pageNumber > 0 && (
              <button
                className={`mr-5 ${
                  pageNumber === currentPage ? "text-custom-green" : ""
                }`}
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )}
          </div>
        ))}

        <label className="mr-5">{lastPage > 5 && "..."}</label>

        <label className="mx-2 ">
          {lastPage > 5 ? currentPage + 4 : lastPage}
        </label>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === lastPage}
          className={`${
            currentPage === lastPage ? "text-ts-faded-purple" : "text-[#F9F871]"
          }`}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default FetchPagination;
