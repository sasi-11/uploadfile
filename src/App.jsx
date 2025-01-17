import React, { useState } from "react";
import Auth from "./Auth";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [category, setCategory] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [persistDirectory, setPersistDirectory] = useState("");
  const [chunkingSize, setChunkingSize] = useState("");
  const [chunkingStrategy, setChunkingStrategy] = useState("");
  const [enableHybrid, setEnableHybrid] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length > 10) {
      alert("You can only upload up to 10 PDF files at once.");
      return;
    }

    const allPDF = selectedFiles.every(
      (file) => file.type === "application/pdf"
    );
    if (!allPDF) {
      alert("Only PDF files are allowed.");
      return;
    }

    setFiles(selectedFiles);
    alert(`${selectedFiles.length} PDF file(s) selected.`);
  };

  const handleSubmit = () => {
    alert("Your documents have been submitted for ingestion.");
    console.log({
      category,
      collectionName,
      persistDirectory,
      chunkingSize,
      chunkingStrategy,
      enableHybrid,
      files,
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <h1>Document Ingestion</h1>

      <div className="form-group">
        <label htmlFor="file-category">File Category</label>
        <select
          id="file-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="oil_gas">Oil & Gas</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="collection-name">Collection Name</label>
        <input
          id="collection-name"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          placeholder="Enter collection name..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="persist-directory">Persist Directory</label>
        <input
          id="persist-directory"
          value={persistDirectory}
          onChange={(e) => setPersistDirectory(e.target.value)}
          placeholder="E.g. /path/to/folder"
        />
      </div>

      <div className="form-group">
        <label htmlFor="chunking-size">Chunking Size</label>
        <input
          id="chunking-size"
          type="number"
          value={chunkingSize}
          onChange={(e) => setChunkingSize(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="chunking-strategy">Chunking Strategy</label>
        <input
          id="chunking-strategy"
          value={chunkingStrategy}
          onChange={(e) => setChunkingStrategy(e.target.value)}
          placeholder="E.g. 'by-page' or 'by-size'"
        />
      </div>

      <div className="form-group switch-group">
        <input
          type="checkbox"
          id="enable-hybrid"
          checked={enableHybrid}
          onChange={(e) => setEnableHybrid(e.target.checked)}
        />
        <label htmlFor="enable-hybrid">Enable Hybrid</label>
      </div>

      <div className="form-group">
        <label htmlFor="pdf-upload">Upload PDF Files</label>
        <input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
