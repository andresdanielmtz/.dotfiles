"use client";
import { Tldraw } from "tldraw";
import { myOverrides } from "./tool/uioverride";
import { AITool } from "./tool/aitool";
import { components } from "./tool/components";

export function Whiteboard() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        components={components}
        tools={[AITool]}
        overrides={myOverrides}
      />
    </div>
  );
}
