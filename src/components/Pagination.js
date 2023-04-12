import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }
  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
            {prev ? (
                <li className="page-item">
                <button className="page-link" onClick={handlePrevious}>Anterior</button>
                </li>
            ): null}
            {next ? (
                <li className="page-item">
                <button className="page-link" onClick={handleNext}>Siguiente</button>
                </li>
            ): null}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
