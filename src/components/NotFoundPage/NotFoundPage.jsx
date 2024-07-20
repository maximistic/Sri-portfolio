import React from 'react';
import './notfoundpage.css';

const NotFoundPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="content_box_404">
                <h3 className=".looks__lost">Looks Like You're Lost</h3>
                <p>The page you are looking for not available</p>
                <a href="#" className="gohome">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;