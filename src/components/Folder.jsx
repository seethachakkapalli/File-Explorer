import React from "react";
import Actions from "./Actions";
import File from "./File";
import { handleRename, handleAddFile, handleDelete } from "../utils/Utils";

const Folder = ({ folder }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [data, setData] = React.useState(folder);
    return (
        <div>
            {data && (
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
                        <h2>{data.name}</h2>
                        <Actions
                            handleAddFolder={(e) => {
                                e.stopPropagation();
                                const newFolderName = prompt("Enter folder name:");
                                if (newFolderName && newFolderName.trim()) {
                                    const updatedData = handleAddFile(data, folder.id, newFolderName.trim(), true);
                                    setData(updatedData);
                                }
                            }}
                            handleAddFile={(e) => {
                                e.stopPropagation();
                                const newFileName = prompt("Enter file name:");
                                if (newFileName && newFileName.trim()) {
                                    const updatedData = handleAddFile(data, folder.id, newFileName.trim(), false);
                                    setData(updatedData);
                                }
                                handleAddFile(data);
                            }}
                            handleRename={(e) => {
                                e.stopPropagation();
                                const newName = prompt("Enter new name:", data.name);
                                if (newName && newName.trim()) {
                                    const updatedData = handleRename(data, folder.id, newName.trim());
                                    setData(updatedData);
                                }
                            }}
                            handleDelete={(e) => {
                                e.stopPropagation();
                                const updatedData = handleDelete(data, folder.id);
                                setData(updatedData)
                            }}
                        />
                    </div>

                    {isOpen && (
                        <div style={{
                            marginLeft: "20px"
                        }}>
                            {data.items.map(file => {
                                if (file.isFolder) {
                                    return <Folder key={file.id} folder={file} />;
                                } else {
                                    return <File key={file.id} file={file} />;
                                }
                            })}
                        </div>
                    )}
                </div>)}
        </div>
    );
}

export default Folder;