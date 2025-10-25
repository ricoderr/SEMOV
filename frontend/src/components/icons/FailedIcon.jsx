import * as React from "react";

const FailedIcon = (props) => (
  <svg
    width={20}
    height={24}
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1046_13)">
      <circle
        cx={10}
        cy={12}
        r={9}
        stroke="#FFF3F3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10L8 14"
        stroke="#FFF3F3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L12 14"
        stroke="#FFF3F3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1046_13">
        <rect width={20} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default FailedIcon;