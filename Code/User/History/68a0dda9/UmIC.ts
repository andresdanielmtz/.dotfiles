import { SelectTool } from "tldraw";

const OFFSET = 12;

export class AISelect extends SelectTool { 
    static override id = "ais"; 
    static override initial = "idle";

    reactor: undefined | (() => void) = undefined;
  
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