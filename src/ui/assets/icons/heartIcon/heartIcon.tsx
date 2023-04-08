import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  fill?: string;
  onClick?: (data: any) => void;
}

export const HeartIcon: FC<IconProps> = ({
  className,
  color = "#D1D5D",
  width = "30px",
  height = "26px",
  fill = "none",
  onClick
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M2.01376 5.66687C2.35298 4.84791 2.85019 4.10379 3.477 3.477C4.10379 2.85019 4.84791 2.35298 5.66686 2.01376C6.48582 1.67454 7.36357 1.49994 8.25 1.49994C9.13643 1.49994 10.0142 1.67454 10.8331 2.01376C11.6521 2.35298 12.3962 2.85019 13.023 3.477L15 5.454L16.977 3.477C18.2429 2.21112 19.9598 1.49996 21.75 1.49996C23.5402 1.49996 25.2571 2.21112 26.523 3.477C27.7889 4.74288 28.5 6.45978 28.5 8.25C28.5 10.0402 27.7889 11.7571 26.523 13.023L15 24.546L3.477 13.023C2.85019 12.3962 2.35298 11.6521 2.01376 10.8331C1.67454 10.0142 1.49994 9.13643 1.49994 8.25C1.49994 7.36357 1.67454 6.48582 2.01376 5.66687Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  );
};