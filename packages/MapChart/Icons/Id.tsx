import type { SVGProps } from "react";
const SvgId = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#e70011" d="M0 0h640v240H0Z" />
    <path fill="#fff" d="M0 240h640v240H0Z" />
  </svg>
);
export default SvgId;
