import { create } from "zustand";

export const useSliderStore = create((set) => {
  return {
    sliderValue: 1000,
    setSliderValue: (value) => set((state) => ({ sliderValue: value })),
  };
});

export const useAgeSwitcher = create((set) => {
  return {
    isChecked: true,
    setIsChecked: (value) => set((state) => ({ isChecked: value })),
  };
});
export const useLocationSwitcher = create((set) => {
  return {
    isChecked: true,
    setIsChecked: (value) => set((state) => ({ isChecked: value })),
  };
});
export const useGenderSwitcher = create((set) => {
  return {
    isChecked: true,
    setIsChecked: (value) => set((state) => ({ isChecked: value })),
  };
});

export const useBULLtokenSwitcher = create((set) => {
  return {
    isClicked: true,
    setIsClicked: (value) => set((state) => ({ isClicked: value })),
  };
});

export const useEtheriumSwitcher = create((set) => {
  return {
    isClicked: false,
    setIsClicked: (value) => set((state) => ({ isClicked: value })),
  };
});
