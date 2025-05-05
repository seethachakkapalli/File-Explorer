import React from "react";
import Actions from "./Actions";

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
            <Actions isFile={true} />
        </div>
    );
}

export default File;