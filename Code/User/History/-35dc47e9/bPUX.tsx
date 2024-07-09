import { StateNode } from "@tldraw/editor";
import { TLStateNodeConstructor } from "tldraw";
import { Idle } from "./child/childStates/Idle";
import { Brushing } from "./child/childStates/Brushing";
import { Crop } from "./child/childStates/Crop/Crop";
import { Cropping } from "./child/childStates/Crop/children/Cropping";
import { PointingCropHandle } from "./child/childStates/Crop/children/PointingCropHandle";
import { DraggingHandle } from "./child/childStates/DraggingHandle";
import { EditingShape } from "./child/childStates/EditingShape";
import { PointingArrowLabel } from "./child/childStates/PointingArrowLabel";
import { PointingCanvas } from "./child/childStates/PointingCanvas";
import { PointingHandle } from "./child/childStates/PointingHandle";
import { PointingResizeHandle } from "./child/childStates/PointingResizeHandle";
import { PointingRotateHandle } from "./child/childStates/PointingRotateHandle";
import { PointingSelection } from "./child/childStates/PointingSelection";
import { PointingShape } from "./child/childStates/PointingShape";
import { Resizing } from "./child/childStates/Resizing";
import { Rotating } from "./child/childStates/Rotating";
import { ScribbleBrushing } from "./child/childStates/ScribbleBrushing";
import { Translating } from "./child/childStates/Translating";
const OFFSET = 12;

export class AITool extends StateNode {
  static override id = "ai";
  static override initial = "idle";

  reactor: undefined | (() => void) = undefined;

  static override children = (): TLStateNodeConstructor[] => [
    Crop,
    Cropping,
    Idle,
    PointingCanvas,
    PointingShape,
    Translating,
    Brushing,
    ScribbleBrushing,
    PointingCropHandle,
    PointingSelection,
    PointingResizeHandle,
    EditingShape,
    Resizing,
    Rotating,
    PointingRotateHandle,
    PointingArrowLabel,
    PointingHandle,
    DraggingHandle,
  ];

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
