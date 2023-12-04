import React from "react";
export const Pagination = ({lastPage, currentPage, setCurrentPage }) => {

    const goToNextPage = () => {
        console.log(currentPage);
        console.log(lastPage);
        if(currentPage !== lastPage)
            setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    const goToLastPage = () => {
            setCurrentPage(lastPage);
    }
    const goToFirstPage = () => {
            setCurrentPage(1);
    }
    return (
            <nav>
                <ul>
                    <li>
                        <a
                            onClick={goToFirstPage} 
                            href='#'>
                            First
                        </a>
                        <> </>
                        <a
                            onClick={goToPrevPage} 
                            href='#'>
                            Previous
                        </a>
                        <> </>
                        <a className="page-link" 
                            onClick={goToNextPage}
                            href='#'>
                            Next
                        </a>
                        <> </>
                        <a className="page-link" 
                            onClick={goToLastPage}
                            href='#'>
                            Last
                        </a>
                    </li>
                    <> Page : {currentPage}</>
                </ul>
            </nav>
  );
};




