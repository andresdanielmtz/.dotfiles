import { StateNode } from "@tldraw/editor";
import { AIFunc } from "./childStates/aifunc";
const OFFSET = 12;

export class AITool extends StateNode {
  static override id = "ai";
  static override initial = "idle"

  reactor: undefined | (() => void) = undefined 


  override onEnter = () => {
    this.editor.setCursor({ type: "cross", rotation: 0 });
  };

  override onPointerDown = () => {
    const { currentPagePoint } = this.editor.inputs;
    this.editor.createShape({
      type: "text",
      x: currentPagePoint.x - OFFSET,
      y: currentPagePoint.y - OFFSET,
      props: { text: "❤️" },
    });
  };
}
