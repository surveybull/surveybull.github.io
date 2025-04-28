import { create } from "zustand";
import { PossibleSwitch } from "../constant/app";
export const useSliderStore = create((set) => {
  return {
    sliderValue: 1000,
    setSliderValue: (value) => set((state) => ({ sliderValue: value })),
  };
});
export const useSwitcherState = create((set) => ({
  checkedState: Array.from({ length: PossibleSwitch.length }, (_, index) => ({
    id: index,
    isChecked: index  == 2 ? true : false,
  })),

  toggleCheckbox: (id) =>
    set((state) => ({
      checkedState: state.checkedState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      ),
    })),
}));

export const useWorldcoinSwitcher = create((set) => {
  return {
    isClicked: false,
    setIsClicked: (value) => set((state) => ({ isClicked: value })),
  };
});

export const useEtheriumSwitcher = create((set) => {
  return {
    isClicked: true,
    setIsClicked: (value) => set((state) => ({ isClicked: value })),
  };
});

export const useTotalCost = create((set) => {
  return {
    totalCost: 0,
    setTotalCost: (value) => set((state) => ({ totalCost: value })),
  };
});
