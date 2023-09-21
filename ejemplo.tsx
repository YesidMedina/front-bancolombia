import React, { useState } from "react";
const ToggleComponent: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {" "}
      <button onClick={handleToggle}>Toggle</button>{" "}
      {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}{" "}
    </div>
  );
};
export default ToggleComponent;
