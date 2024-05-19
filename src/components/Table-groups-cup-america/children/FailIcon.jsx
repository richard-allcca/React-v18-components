const FailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <g
      stroke="#B10000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m1 1 8 8M1 1l8 8M1 9l8-8" />
    </g>
  </svg>
);
export default FailIcon;
