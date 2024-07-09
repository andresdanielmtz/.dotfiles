"use client";
import { Tldraw } from "tldraw";

import { Override_AI } from "./AISelect/Override_AISelect";
import { AISelect } from "./AISelect/AISelect";
import { components } from "./AISelect/Components";

export function Whiteboard() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        components={components}
        tools={[AISelect]}
        overrides={Override_AI}
      />
    </div>
  );
}
