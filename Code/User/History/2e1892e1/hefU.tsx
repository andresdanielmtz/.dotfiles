import React from 'react';
import {
  TLComponents,
  DefaultToolbar,
  TldrawUiMenuItem,
  DefaultToolbarContent,
  DefaultKeyboardShortcutsDialogContent,
  DefaultKeyboardShortcutsDialog,
  useTools,
  useIsToolSelected,
} from "tldraw";

export const components: TLComponents = {
  Toolbar: (props) => {
    const tools = useTools();
    const isStickerSelected = useIsToolSelected(tools["ais"]);

    return (
      <DefaultToolbar {...props}>
        <TldrawUiMenuItem {...tools["ais"]} isSelected={isStickerSelected} />
        <DefaultToolbarContent />
      </DefaultToolbar>
    );
  },
  KeyboardShortcutsDialog: (props) => {
    const tools = useTools();

    return (
      <DefaultKeyboardShortcutsDialog {...props}>
        <DefaultKeyboardShortcutsDialogContent />
        <TldrawUiMenuItem {...tools["ais"]} />
      </DefaultKeyboardShortcutsDialog>
    );
  },
};
