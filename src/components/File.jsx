import React from "react";
import Actions from "./Actions";
import { handleDelete, handleRename } from "../utils/Utils";

const File = ({ file }) => {
    const [data, setData] = React.useState(file);
    return (
        <div>
            {data && (
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
                    <p>{data.name}</p>
                    <Actions isFile={true}
                        handleRename={(e) => {
                            e.stopPropagation();
                            let updateName = handleRename(data, file.id, "Updated File Name");
                            setData(updateName);
                        }}
                        handleDelete={(e) => {
                            e.stopPropagation();
                            const updatedData = handleDelete(data, file.id);
                            setData(updatedData);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default File;