import * as React from "react";
const SuccessIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className="flex justify-center items-center"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12}
      cy={11.9999}
      r={9}
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10L11 14L9 12"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SuccessIcon;
