import { TLUiOverrides } from "tldraw";


export const Override_AI: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.aiselect = {
      id: "aiselect",
      icon: "github",
      label: "aiselect",
      kbd: "c",
      onSelect: () => {
        // Whatever you want to happen when the tool is selected
        editor.setCurrentTool("aiselect");
      },
    };

    return tools;
  },
};
