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
  