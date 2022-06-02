import React, { useState, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Configuration from "./configuration";

const Editor = (props) => {
  let ce = document.querySelectorAll("#ce-paragraph");

  const [editor, seteditor] = useState({});

  useEffect(() => {
    const editor = new EditorJS(Configuration());
    seteditor(editor);
  }, []);

  let [data, setData] = useState("salom");
  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log(outputData.blocks[0].data.text);
        // setData(outputData.blocks[0].data.text);
        setData(outputData.blocks);

      })

      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <>
    <h1>
      {
        // data.map((el) => {
        //  console.log(el.data.text);
        // })
        console.log(data)
      }
    </h1>
      <div>
        <div id="editorjs" />
        <button onClick={onSave}>save</button>
      </div>
      {/* <h1>{data}</h1> */}
    </>
  );
};

export default Editor;
