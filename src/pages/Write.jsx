import "../styles/Write.scss";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Link } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Preview from "../components/create-story/Preview";
import { useEffect, useRef, useState } from "react";

function Write() {
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const editorRef = useRef(null); // Reference for EditorJS instances

  const togglePreview = async () => {
    await saveContent();
    setPreview(!preview);
  };

  const saveContent = async () => {
    try {
      if (editorRef.current) {
        const savedData = await editorRef.current.save();
        // setContent(savedData);
        setContent(JSON.stringify(savedData)); // Save the editor data in the state
      }
    } catch (error) {
      console.error("Saving failed: ", error);
    }
  };

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Write something, or press '/' for commands...",

      tools: {
        header: {
          class: Header,
          config: {
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
    });

    editorRef.current = editor; // Set the EditorJS instance in the ref

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((error) => console.error("Error destroying editor:", error));
    };
  }, []);

  return (
    <div className="write-section">
      <div className="write-container">
        <div className="write-nav">
          <div className="write-nav__logo">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Pratibela
            </Link>
          </div>
          <div className="write-nav__menu">
            <button onClick={togglePreview}>Publish</button>

            {preview && (
              <Preview
                togglePreview={togglePreview}
                title={title}
                content={content}
              />
            )}

            <div className="profile">
              <>
                <Dropdown />
              </>
            </div>
          </div>
        </div>

        {/* title */}
        <div className="title">
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* editor js */}
        <div id="editorjs" />
      </div>
    </div>
  );
}

export default Write;
