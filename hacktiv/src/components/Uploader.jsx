import React, { useState } from "react";
import './uploader.css'
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleDeleteClick = () => {
    setFileName("No selected File");
    setImage(null);
  };

  return (
    <main>
      <form
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleFileChange}
        />
        {image ? (
        <img src={image} width={500} height={400} alt={fileName}/>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <MdCloudUpload color="1475cf" size={60} />
            <p>Browse Files to upload</p>
            </div>
          </>
        )}
      </form>

      <section className="uploaded-row">
        <AiFillFileImage color="1475cf" />
        <span className="upload-content">
          {fileName}
          <MdDelete onClick={handleDeleteClick} />
        </span>
      </section>
    </main>
  );
}

export default Uploader;
