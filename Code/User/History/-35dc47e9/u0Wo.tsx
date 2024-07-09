import { StateNode } from "@tldraw/editor";
import {
  TLComponents,
  useIsToolSelected,
  DefaultToolbar,
  useTools,
  TldrawUiMenuItem,
  DefaultToolbarContent,
  DefaultKeyboardShortcutsDialog,
  DefaultKeyboardShortcutsDialogContent,
} from "tldraw";

const OFFSET = 12;
export class AITool extends StateNode {
  static override id = "ai";

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
