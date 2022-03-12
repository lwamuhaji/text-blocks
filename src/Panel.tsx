import React from "react";
import "./Panel.scss";
import Block from "./Block";

interface PanelProps {
  size: number;
}

const Panel = ({ size }: PanelProps) => {
  return (
    <div>
      <div className="panel">
        {Array.from({ length: size }, (v, k) => (
          <Block />
        ))}
      </div>
    </div>
  );
};

export default Panel;
