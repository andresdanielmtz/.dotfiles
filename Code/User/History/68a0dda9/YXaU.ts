import { SelectTool } from "tldraw";
import { react } from "@tldraw/editor"

const OFFSET = 12;

export class AISelect extends SelectTool {
  static override id = "aiselect";
  static override initial = "idle";

  reactor: undefined | (() => void) = undefined;

  
	// We want to clean up the duplicate props when the selection changes
	private override cleanUpDuplicateProps = () => {
		const selectedShapeIds = this.editor.getSelectedShapeIds()
		const instance = this.editor.getInstanceState()
		if (!instance.duplicateProps) return
		const duplicatedShapes = new Set(instance.duplicateProps.shapeIds)
		if (
			selectedShapeIds.length === duplicatedShapes.size &&
			selectedShapeIds.every((shapeId) => duplicatedShapes.has(shapeId))
		) {
			return
		}
		this.editor.updateInstanceState({
			duplicateProps: null,
		})
	}

	override onEnter = () => {
		this.reactor = react('clean duplicate props', () => {
			try {
				this.cleanUpDuplicateProps()
			} catch (e) {
				if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
					// ignore errors at test time
				} else {
					console.error(e)
				}
			}
		})
	}

	override onExit = () => {
		this.reactor?.()
		if (this.editor.getCurrentPageState().editingShapeId) {
			this.editor.setEditingShape(null)
		}
	}

}
