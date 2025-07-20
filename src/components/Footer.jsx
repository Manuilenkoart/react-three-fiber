import { memo } from "react";

const Footer = ({ description }) => (
  <div
    style={{
      width: "500px",
      margin: "auto",
      textAlign: "center",
      fontSize: "14px",
    }}
  >
    {description}
  </div>
);

export default memo(Footer);
