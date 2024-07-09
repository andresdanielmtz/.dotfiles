import { TLUiOverrides } from "tldraw";


export const myOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.ai_select = {
      id: "ai",
      icon: "blob",
      label: "AI Tool",
      kbd: "c",
      onSelect: () => {
        // Whatever you want to happen when the tool is selected
        editor.setCurrentTool("ai");
      },
    };

    return tools;
  },
};
