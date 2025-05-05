import React from "react";
import Actions from "./Actions";
import File from "./File";

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
                padding: "10px",
                border: "1px solid #ccc",
                marginBottom: "5px",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9"
            }}>
                <h2>{folder.name}</h2>
                <Actions
                    handleAddFolder={() => console.log("Add Folder")}
                    handleAddFile={() => console.log("Add File")}
                    handleRename={() => console.log("Rename")}
                    handleDelete={() => console.log("Delete")}
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