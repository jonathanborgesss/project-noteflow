export default function Checkmark({ width = 1.5, className, alt }) {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      alt={alt}
    >
      <path
        d="M0.75 3.99992L3.58 6.82992L9.25 1.16992"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
