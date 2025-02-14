import React, { useState } from "react";
import useStore from "../store/Store";
import { useDraggable } from "@dnd-kit/core";
import Container from "./Container";

const Components = () => {
  const compo = [
    { id: "display", type: "text", label: "input" },
    { id: "btn-0", type: "button", label: "0" },
    { id: "btn-1", type: "button", label: "1" },
    { id: "btn-2", type: "button", label: "2" },
    { id: "btn-3", type: "button", label: "3" },
    { id: "btn-4", type: "button", label: "4" },
    { id: "btn-5", type: "button", label: "5" },
    { id: "btn-6", type: "button", label: "6" },
    { id: "btn-7", type: "button", label: "7" },
    { id: "btn-8", type: "button", label: "8" },
    { id: "btn-9", type: "button", label: "9" },
    { id: "btn-add", type: "button", label: "+" },
    { id: "btn-sub", type: "button", label: "-" },
    { id: "btn-mul", type: "button", label: "*" },
    { id: "btn-div", type: "button", label: "/" },
    { id: "calculate", type: "button", label: "=" },
    { id: "clear", type: "button", label: "C" },
  ];

  const {
    setClickedButton,
    addComponent,
    clickedButton,
    components,
    singleComponent,
    getComponent,
    clearExpression,
  } = useStore.getState();

  // (state) => ({
  //   components: state.components,
  // })

  // const [items, setItems] = useState(components);

  const [ex, setEx] = useState(0);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ex.id,
  });

  const handleClick = (val, label, type) => {
    // const el = document.getElementById(label)
    // console.log(el)
    addComponent(val, type, label);
    setClickedButton(label);
  };

  return (
    <>
      <div>Components</div>
      {/* {expression || 0} */}
      <section className="flex">
        <ul className="w-[70]">
          {compo.map((comp, i) => {
            return (
              <React.Fragment key={i}>
                <li style={{ listStyle: "none" }}>
                  {comp?.type === "button" ? (
                    <button
                      type={comp?.type}
                      className={
                        comp?.type === "button"
                          ? "p-2 w-[15vw] text-white font-bold bg-blue-950 rounded m-1"
                          : ""
                      }
                      value={comp?.label}
                      onClick={() =>
                        handleClick(comp?.label, comp?.id, comp?.type)
                      }
                    >
                      {comp?.label}
                    </button>
                  ) : (
                    <button
                      type={comp?.type}
                      className="p-2 m-1 rounded border-2 w-[15vw]"
                      onClick={() =>
                        handleClick(comp?.label, comp?.id, comp?.type)
                      }
                    >Textbox</button>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <section className="bg-gray-300 p-2 m-2  rounded w-[50rem] h-[80vh] ml-10">
          <Container/>
        </section>
      </section>
    </>
  );
};

export default Components;
