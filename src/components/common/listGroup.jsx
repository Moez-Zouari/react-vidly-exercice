import React from "react";

const ListGroup = (props) => {
  const { items, textProprety, valueProprety } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[valueProprety]} className="list-group-item">
          {item[textProprety]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProprety: "name",
  valueProprety: "_id",
};

export default ListGroup;
