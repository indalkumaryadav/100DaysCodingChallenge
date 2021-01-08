import React, { useState } from "react";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import SignUpForm from "../component/SignUpForm";
import LoginForm from "../component/LoginForm";
import ReactHookForm from "../component/ReactHookForm";
import { useForm } from "react-hook-form";

const Home = () => {
  const [state, setState] = useState("");
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      {/* <ReactHookForm />
      <LoginForm />
      <SignUpForm />
      <Header /> */}
      <div className="container my-5">
        <CKEditor
          editor={ClassicEditor}
          ref={register}
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
