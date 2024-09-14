import { useState } from "react";
import Folder from "./Folder";
import useTraverseTree from "./use-traverse-tree";
import "./styles.css";
import explorer from "./folderData";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
      <div className="App">
        <SectionHeader data={"File Explorer"} />
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </>
  );
};

export default FileExplorer;
