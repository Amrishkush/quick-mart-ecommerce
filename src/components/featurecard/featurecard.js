import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-5">
        <div className="row text-center mb-4">
          <h6 className="text-center fs-1 display-6">Categories</h6>
          <h2 className="text-center display-6 fw-bold ">
            Most Popular Categories
          </h2>
        </div>
        <div className="row">
          {cards.map((card) => {
            return (
              <Link to={`/categories/${card}`} className="col-md-4 mt-2">
                <div className="card rounded-lg h-full bg-gray-100 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="w-8 h-8 mr-3 rounded-full bg-indigo-500 text-white flex-shrink-0 d-flex justify-content-center align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h3 className="text-gray-900 text-lg font-medium text-capitalize">
                      {card}
                    </h3>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a
                      href="google.com"
                      className="mt-3 text-indigo-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 ml-2"
                        width="16"
                        height="16"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
