import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Editor = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 rounded-3xl ${
        currentMode === "Dark" ? "bg-dark" : "bg-white"
      }`}
    >
      <Header title='Editor' category='App' />
      <RichTextEditorComponent id='rich-text-editor'>
        <EditorData />
        <Inject services={[Image, Link, HtmlEditor, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
