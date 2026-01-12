import * as React from "react";

const Home = ({ width = 24, height = 24, className, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M9.7 21H5.83a.77.77 0 0 1-.83-.7V10m9.3 11h3.87a.77.77 0 0 0 .83-.7V10m-4.7 11v-6.9H9.7V21"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 3-9 9m9-9 9 9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Home;
