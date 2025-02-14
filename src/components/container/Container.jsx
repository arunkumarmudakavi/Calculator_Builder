import React, { useEffect, useState } from "react";
import useStore from "../store/Store";
import { Droppable } from "../Droppable";


const Container = () => {

  return (
    <div>
      <Droppable/>
    </div>
  );
};

export default Container;

{/* <DndContext>
        <span>
          {clickedButton ? (
            <span>
              {components.map((d, i) => (
                <Draggable key={i } value={d?.value} type={d?.type} id={d?.id} />
              ))}
            </span>
          ) : (
            <h2>click on components</h2>
          )}
        </span>
      </DndContext> */}