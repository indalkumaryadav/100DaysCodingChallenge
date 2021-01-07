import React, { useState } from "react";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import SignUpForm from "../component/SignUpForm";
import LoginForm from "../component/LoginForm";
import ReactHookForm from "../component/ReactHookForm";

const Home = () => {
  const [state, setState] = useState("");

  return (
    <>
      <ReactHookForm />
      <LoginForm />
      <SignUpForm />
      <Header />
      <div className="container">
        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor;
            setState(data.getData());
          }}
        />
        <div>{parse(state)}</div>
      </div>
    </>
  );
};
export default Home;
