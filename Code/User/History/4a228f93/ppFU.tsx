"use client";
import { Tldraw } from "tldraw";

import { Override_AI } from "./ai_select/Override_AISelect";
import { AISelect } from "./ai_select/AISelect";
import { components } from "./ai_select/Components";

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
