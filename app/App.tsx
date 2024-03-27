import styles from "./page.module.css";
import { SetStateAction, useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";

const Text = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

function App() {
  const [VisibleEditor, SetVisibleEditor] = useState<boolean>(true);
  const [VisiblePreview, SetVisiblePreview] = useState<boolean>(true);
  const [TextChange, SetTextChange] = useState<string>(Text);
  const HandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    SetTextChange(event.target.value)
  };
  const HandleClick = () => {
    SetVisibleEditor(!VisibleEditor);
  }
  const HandleClick2 = () => {
    SetVisiblePreview(!VisiblePreview);
  }
  return (
    <div className={VisiblePreview ? styles.container : styles.container2}>
      {VisibleEditor ? 
        <div className={VisiblePreview ? styles.editor : styles.editor2}>
          <div className={styles.head}>
            <div>
              <FaFreeCodeCamp></FaFreeCodeCamp>
              <h5>Editor</h5>
            </div>
            {VisiblePreview ? 
            <FaExpandArrowsAlt onClick={HandleClick2}></FaExpandArrowsAlt>
            : <FaCompressAlt onClick={HandleClick2}></FaCompressAlt>}
          </div>
          <textarea id="editor" className={VisiblePreview ? styles.textarea : styles.textarea2}defaultValue={Text} onChange={HandleChange}></textarea>
        </div>
      : ""}
      {VisiblePreview ?
        <div className={styles.previewer}>
          <div className={styles.head}>
              <div>
                <FaFreeCodeCamp></FaFreeCodeCamp>
                <h5>Previewer</h5>
              </div>
              {VisibleEditor ? 
              <FaExpandArrowsAlt onClick={HandleClick}></FaExpandArrowsAlt>
              : <FaCompressAlt onClick={HandleClick}></FaCompressAlt>}
            </div>
          <div className={styles.content} id="preview">
            <ReactMarkdown>{TextChange}</ReactMarkdown>
          </div>
        </div>
      : ""}
    </div>
  );
}

export default App;