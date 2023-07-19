import React, { useState } from 'react';

function MultiPageForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <h2>Page 1</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Page 2</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Page 3</h2>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <button onClick={handlePreviousPage}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderPage()}
        <div className="step-info">
          Step {currentPage} of {totalPages}
        </div>
        {currentPage > 1 && (
          <button className="input-container button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button className="input-container button" onClick={handleNextPage}>
            Next
          </button>
        )}
        {currentPage === totalPages && (
          <button className="input-container button submit-button" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
}

export default MultiPageForm;
