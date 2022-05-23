import { useState } from "react";
import styled from "styled-components";
import Tooltip from "./components/tooltip";
import TooltipSelector from "./components/selector/ttselector";
import "./styles.css";

const TooltipTarget = styled.span`
  color: red;
`;

export default function App() {
  const [position, setPosition] = useState("left");

  const handleChange = (value) => {
    setPosition(value);
  };

  return (
    <div className="App">
      <TooltipSelector onChange={handleChange} />
      <Tooltip text="I am a tooltip" position={position} background="00adb5">
        <TooltipTarget>Hover over me!</TooltipTarget>
      </Tooltip>
    </div>
  );
}
