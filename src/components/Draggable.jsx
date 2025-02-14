import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useStore from "./store/Store";



function draggable(value, type, id, setItems) {
  // export function Draggable({ items }) {
  // console.log(setItems)
  console.log(value, type, id);

  const { expression, addExpression, components, clearExpression } =
    useStore.getState();
  // console.log(components)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

    const handleOperation = (v, t, i) => {
      console.log(v, t, i);
      if (v === "C") {
        clearExpression()
      }
    
      if(v !== "C"){
        addExpression(v)
      }

    };

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (type === "button") {
    return (
      <button
        id={id}
        className="w-[10vw] h-[7vh] bg-blue-950 text-white m-2 rounded"
        type={type}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onClick={() => handleOperation(value, type, id)}
      >
        {value}
      </button>
    );
  }

  if (type === "text") {
    return (
      <input
        className="w-[35vw] h-[7vh] m-2 rounded border-2 border-blue-950 text-black p-2 font-extrabold"
        type={type}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        value={expression}
      />
    );
  }

  // return (<span>
  //   {components?.map((d) => {
  //   console.log(d?.type, d?.value);
  //       <button
  //         id={d?.id}
  //         className="w-[10vw] h-[7vh] bg-blue-950 text-white m-2 rounded"
  //         type={d?.type}
  //         ref={setNodeRef}
  //         style={style}
  //         {...listeners}
  //         {...attributes}
  //       onClick={() => handleOperation(d?.value, d?.type, d?.id)}
  //       >
  //         {d?.value}
  //       </button>
  //   }
  // )}
  // </span>)
}

export  {draggable};

// }
