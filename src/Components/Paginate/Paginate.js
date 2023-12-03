import React from 'react';
import './Paginate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Paginate = ({
    postsPerPage,
    totalPosts,
    currentPage,
    paginate,
    previousPage,
    nextPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li onClick={previousPage} className="page-number">
                    <FontAwesomeIcon icon={faBackward} />
                </li>
                <li onClick={previousPage} className="page-number">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={
                            'page-number ' + (number === currentPage ? 'active' : '')
                        }
                    >
                        {number}
                    </li>
                ))}
                <li onClick={nextPage} className="page-number">
                    <FontAwesomeIcon icon={faArrowRight} />
                </li>
                <li onClick={nextPage} className="page-number">
                    <FontAwesomeIcon icon={faForward} />
                </li>
            </ul>
        </div>
    );
};

export default Paginate;