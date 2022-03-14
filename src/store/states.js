import { devtools } from 'zustand/middleware';
import create from 'zustand';

const useStore = create(
  devtools((set) => ({
    items: 0,
    alapData: {},
    filter: null,

    increaseItems: () =>
      set((state) => ({
        items: state.items + 1,
      })),

    importData: (data) =>
      set((state) => ({
        alapData: data,
      })),

    addData: (data) => {},

    updateFilter: (data) =>
      set((state_) => ({
        filter: data,
      })),

    // filteredKeys() {
    //   if (this.displayFilter === "") {
    //     return Object.keys(this.alapData.allLinks).sort();
    //   } else {
    //     return Object.keys(this.alapData.allLinks)
    //       .sort()
    //       .filter((item) => item.toLowerCase().includes(this.displayFilter.toLowerCase()));
    //   }
    // },
  }))
);

export { useStore };
