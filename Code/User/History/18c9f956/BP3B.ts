import { TLUiOverrides } from "tldraw";


export const Override_AI: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.ai_select = {
      id: "aiselect",
      icon: "github",
      label: "AI Tool",
      kbd: "c",
      onSelect: () => {
        // Whatever you want to happen when the tool is selected
        editor.setCurrentTool("aiselect");
      },
    };

    return tools;
  },
};
