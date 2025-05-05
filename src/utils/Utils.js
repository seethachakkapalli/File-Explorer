/* const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        ...(isFolder ? { items: [] } : {}),
      });

      return tree;
    }

    let latestNode = [];

    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, folderId) {
    if (!tree.isFolder) {
      return tree;
    }

    const filteredItems = tree.items
      .filter((item) => item.id != folderId)
      .map((item) => {
        return deleteNode(item, folderId);
      });

    return { ...tree, items: filteredItems };
  };

  const editNode = function (tree, folderId, name) {
    if (tree.id === folderId) {
      return { ...tree, name };
    }

    const changedItems = tree.items.map((item) => {
      return editNode(item, folderId, name);
    });

    return { ...tree, items: changedItems };
  };
  return { insertNode, deleteNode, editNode };
};
*/

import explorer from "../data/data"

const handleRename = (tree, id, newName) => {
    debugger;
    // If the current item matches the id, update its name
    if (tree.id === id) {
      return { ...tree, name: newName };
    }
  
    // If the current item is a folder, recursively update its children
    if (tree.isFolder && tree.items) {
      return {
        ...tree,
        items: tree.items.map((item) => handleRename(item, id, newName))
      };
    }
  
    // Return the item unchanged if no match is found
    return tree;
  };

const handleDelete = (tree, id) => {
    // If the current item matches the id, return null to delete it
    if (tree.id === id) {
      return null;
    }
  
    // If the current item is a folder, recursively filter its children
    if (tree.isFolder && tree.items) {
      const filteredItems = tree.items
        .map((item) => handleDelete(item, id))
        .filter((item) => item !== null); // Filter out null items
  
      return { ...tree, items: filteredItems };
    }
  
    // Return the item unchanged if no match is found
    return tree;
  };


  const handleAddFile = (tree, id, name, isFolder) => {
    // If the current item matches the id, add a new file/folder to its items
    if (tree.id === id) {
      return {
        ...tree,
        items: [
          ...tree.items,
          {
            id: new Date().getTime(),
            name: name,
            isFolder: isFolder,
            ...(isFolder ? { items: [] } : {}),
          },
        ],
      };
    }
  
    // If the current item is a folder, recursively add to its children
    if (tree.isFolder && tree.items) {
      return {
        ...tree,
        items: tree.items.map((item) => handleAddFile(item, id, name, isFolder))
      };
    }
  
    // Return the item unchanged if no match is found
    return tree;
  };


export { handleRename, handleDelete, handleAddFile };