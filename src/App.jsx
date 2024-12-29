import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [category, setCategory] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [persistDirectory, setPersistDirectory] = useState("");
  const [chunkingSize, setChunkingSize] = useState("");
  const [chunkingStrategy, setChunkingStrategy] = useState("");
  const [enableHybrid, setEnableHybrid] = useState(false);
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = () => {
    console.log({
      category,
      collectionName,
      persistDirectory,
      chunkingSize,
      chunkingStrategy,
      enableHybrid,
      password,
      files,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Document Ingestion</h1>

      <div className="mb-4">
        <label className="block mb-2">File Category</label>
        <select
          className="border rounded p-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="oil_gas">Oil & Gas</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Collection Name</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Persist Directory</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={persistDirectory}
          onChange={(e) => setPersistDirectory(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Chunking Size</label>
        <input
          type="number"
          className="border rounded p-2 w-full"
          value={chunkingSize}
          onChange={(e) => setChunkingSize(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Chunking Strategy</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={chunkingStrategy}
          onChange={(e) => setChunkingStrategy(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Enable Hybrid</label>
        <input
          type="checkbox"
          className="mr-2"
          checked={enableHybrid}
          onChange={(e) => setEnableHybrid(e.target.checked)}
        />
        Enable
      </div>

      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          className="border rounded p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Upload PDF Files</label>
        <input
          type="file"
          className="border rounded p-2 w-full"
          accept=".pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
