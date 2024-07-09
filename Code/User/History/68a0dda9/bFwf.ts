import { SelectTool } from "tldraw";

export class AISelect extends SelectTool {
  static override id = "aiselect";
  static override initial = "idle";

  reactor: undefined | (() => void) = undefined;


}
