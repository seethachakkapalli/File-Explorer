import React from "react";
import Actions from "./Actions";
import { handleDelete, handleRename } from "../utils/Utils";

const File = ({ file }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "5px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9"
        }}>
            <p>{file.name}</p>
            <Actions isFile={true}
                handleRename={(e) => {
                    e.stopPropagation();
                    handleRename(file, "New File Name");
                }}
                handleDelete={(e) => {
                    e.stopPropagation();
                    handleDelete(file);
                }}
            />
        </div>
    );
}

export default File;