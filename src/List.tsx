// import React, { useState } from "react";

interface ListProps {
  data: string[];
  onDelete: (index: number) => void;
}

const List: React.FC<ListProps> = ({ data, onDelete }) => {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const index = Number(event.currentTarget.id);
    onDelete(index);
  };

  return (
    <div className="ui divided list" style={{ marginTop: "40px" }}>
      {data.map((item, index) => (
        <div className="item" key={index}>
          <div className="ui checkbox">
            <input type="checkbox" name="example" />
            <label>
              <div className="content">{item}</div>
            </label>
          </div>

          <button
            className="ui button"
            style={{ float: "right", color: "red" }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
