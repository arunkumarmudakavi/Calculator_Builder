import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const Store = (set) => ({
  components: [],
  clickedButton: null,
  setClickedButton: (button) => set({ clickedButton: button }),
  addComponent: (value, type, id) => {
    // console.log(value, type, id);
    set((state) => ({
      components: state.components.some((i) => i?.id === id) ? state.components : [...state.components, { value, id, type }],
    }));
  },
  getAllComponents: () => set((state) => ({ components: state.components })),
  singleComponent: "",
  getComponent: (componentId) => {
    set((state) => ({
      singleComponent: state.components.find((c) => c?.id === componentId),
    }));
  },
  expression: "",
  addExpression: (value) =>
    set((state) => ({
      expression:
        value === "="
          ? eval(state.expression).toString()
          : state.expression + value,
    })),
  clearExpression: () => set({ expression: "" }),
});

const useStore = create(
  devtools(
    persist(Store, {
      name: "components",
    })
  )
);

export default useStore;
