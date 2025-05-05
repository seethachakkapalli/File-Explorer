import React from "react";
import explorer from "../data/data";
import Folder from "../components/Folder";
import File from "../components/File";

const FileExplorer = () => {
    return (
        <>
            <Folder folder={explorer} />
        </>
    )
}

export default FileExplorer;