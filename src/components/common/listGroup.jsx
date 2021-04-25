import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProprety,
    valueProprety,
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProprety]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProprety]}
        </li>
      ))}
    </ul>
  );
};

// Default props pour rendre plus facile et dynamique
ListGroup.defaultProps = {
  textProprety: "name",
  valueProprety: "_id",
};

export default ListGroup;
