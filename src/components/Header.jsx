import { memo } from "react";

const Header = ({ name, jarAmount, jarGoal }) => (
  <div style={{ display: "grid", justifyContent: "center", gap: "16px" }}>
    <div style={{ fontSize: "40px" }}>{name}</div>
    {jarAmount && jarGoal ? (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <div>Rised</div>
          <div>{jarAmount}</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div>Goal</div>
          <div>{jarGoal}</div>
        </div>
      </div>
    ) : (
      "Loading..."
    )}
  </div>
);

export default memo(Header);
