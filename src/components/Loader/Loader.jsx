import React from 'react'

const Loader = (loading) => {
  return (
    <div className='loader'>
        <div class="d-flex justify-content-center">
            <div className="spinner-grow spinner-grow-md text-primary m-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border spinner-border-md text-secondary m-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-md text-primary m-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}

export default Loader