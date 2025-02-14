import React, { useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import {draggable} from "./Draggable";
import useStore from "./store/Store";

export function Droppable() {
  const { components, clickedButton } = useStore();

  
  const [items, setItems] = useState(components);
  

  // const { isOver, setNodeRef } = useDroppable({
  //   id: props.id,
  // });
  // const style = {
  //   color: isOver ? "green" : undefined,
  // };
  const getTaskPos = (id) => items.findIndex((it) => it.id === id)

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (active?.id === over?.id) return;

      setItems((prevItems) => {
        const originalPos = getTaskPos(active?.id)
        const newPos = getTaskPos(over?.id)
        return arrayMove(prevItems, originalPos, newPos)
      });
    
  };
  console.log(items);

  return (
    <>
      {clickedButton ? (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          
              {/* <span> */}
                {items?.map((d, i) => {
                  
                  return draggable( d?.value, d?.type, d?.id)
                }
                  // <Draggable value={d?.value} type={d?.type} id = {d?.id}/>
                )}
                
                  {/* <Draggable
                    items = {items}
                  /> */}
              {/* </span> */}
        </DndContext>
      ) : (
        <h2>Click on component</h2>
      )}
    </>
  );
}
