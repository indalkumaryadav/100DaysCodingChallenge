import React, { useState } from "react";

const MyForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();

  const newBook = () => {
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("image", image, image.name);

    console.log(uploadData);

    fetch("http://127.0.0.1:8000/api/posts/", {
      method: "POST",
      body: uploadData,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h3>Upload images with React</h3>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </label>
      <br />
      <label>
        Cover
        <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />
      </label>
      <br />
      <button onClick={() => newBook()}>New Book</button>
    </div>
  );
};

export default MyForm;
