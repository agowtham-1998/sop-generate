import React from 'react';

function ThankYou() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="display-4 mb-4">Thank You for Submitting!</h1>
              <p className="lead">
                Your statement of purpose has been submitted successfully.
                We appreciate your interest.
              </p>
              <p>
                If you have any further questions or need assistance, please
                feel free to contact us.
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => window.location.href = '/'}
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
