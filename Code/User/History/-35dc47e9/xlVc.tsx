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

export const components: TLComponents = {
  Toolbar: (props) => {
    const tools = useTools();
    const isStickerSelected = useIsToolSelected(tools["ai"]);
    return (
      <DefaultToolbar {...props}>
        <TldrawUiMenuItem {...tools["ai"]} isSelected={isStickerSelected} />
        <DefaultToolbarContent />
      </DefaultToolbar>
    );
  },
  KeyboardShortcutsDialog: (props) => {
    const tools = useTools();
    return (
      <DefaultKeyboardShortcutsDialog {...props}>
        <DefaultKeyboardShortcutsDialogContent />
        <TldrawUiMenuItem {...tools["ai"]} />
      </DefaultKeyboardShortcutsDialog>
    );
  },
};

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
