import React from "react";
import Actions from "./Actions";
import File from "./File";
import { handleAddFile } from "../utils/Utils";

const Folder = ({ folder }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <div onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "1px solid #ccc",
                marginBottom: "5px",
                borderRadius: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#f9f9f9"
            }}>
                <h2>{folder.name}</h2>
                <Actions
                    handleAddFolder={(e) => {
                        e.stopPropagation();
                        handleAddFile(folder);
                    }}
                    handleAddFile={(e) => {
                        e.stopPropagation();
                        handleAddFile(folder);
                    }}
                    handleRename={(e) => {
                        e.stopPropagation();
                        handleRename(folder, "Update Folder Name");
                    }}
                    handleDelete={(e) => {
                        e.stopPropagation();
                        handleDelete(folder);
                    }}
                />
            </div>

            {isOpen && (
                <div style={{
                    marginLeft: "20px"
                }}>
                    {folder.items.map(file => {
                        if (file.isFolder) {
                            return <Folder key={file.id} folder={file} />;
                        } else {
                            return <File key={file.id} file={file} />;
                        }
                    })}
                </div>
            )}
        </div>
    );
}

export default Folder;