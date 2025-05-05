import React from "react";

const Actions = ({ isFile, handleAddFolder, handleAddFile, handleRename, handleDelete }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: '0px'
        }}>
            {!isFile && <div>
                <button
                    className="action-button"
                    onClick={handleAddFolder}>+ Folder</button>
                <button
                    className="action-button"
                    onClick={handleAddFile}>+ File</button>
            </div>}
            <button
                className="action-button"
                onClick={handleRename}>Rename</button>
            <button
                className="action-button"
                onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Actions;