import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TestDraggableList() {

    const getItems = (count) => {
        var itemsGenerated = [];
        console.log(count)
        for (let k= 0; k < 10; k++) {
            var itemsTemp = {};
            itemsTemp['id'] = 'item' + k.toString()
            itemsTemp['content'] = 'content' + k.toString()
            itemsGenerated.push(itemsTemp);
        }
        return itemsGenerated;
    };

    const [items, setItems] = useState(getItems(10));

        // useEffect(() => {
        //     setItems(getItems(10))
        // },[])


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
const result = Array.from(list);
const [removed] = result.splice(startIndex, 1);
result.splice(endIndex, 0, removed);

return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
// some basic styles to make the items look a bit nicer
userSelect: "none",
padding: grid * 2,
margin: `0 0 ${grid}px 0`,

// change background colour if dragging
background: isDragging ? "lightgreen" : "grey",

// styles we need to apply on draggables
...draggableStyle
});

const getListStyle = isDraggingOver => ({
background: isDraggingOver ? "lightblue" : "lightgrey",
padding: grid,
width: 250
});

const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const itemsCopy = reorder(
      [...items],
      result.source.index,
      result.destination.index
    );

    setItems(itemsCopy);
  }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <span>DragDropContext</span>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
            <span>Droppable</span>
              {items.map((item, index) => {
                return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                        >
                        <span>Draggable</span>
                        <br/>
                        {item.content}
                        </div>
                    )}
                    </Draggable>
              )})}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
}