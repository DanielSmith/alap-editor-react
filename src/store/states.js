import { devtools } from 'zustand/middleware';
import create from 'zustand';
import produce from 'immer';

const useStore = create(
  devtools((set) => ({
    items: 0,
    alapData: {},
    editItems: [],
    filter: null,

    importData: (data) =>
      set((state) => ({
        alapData: data,
      })),

    updateFilter: (data) =>
      set((state) => ({
        filter: data,
      })),

    // we need to try immer

    setItem: (data) => {
      // staalapData.allLinks[data.itemID] = data;
      // set((state)) => ({
      //   alapData.allLinks: [...state.alapData.allLinks, {
      //     data
      //   }]
      // })
    },

    patchItem: (whichItem, payload) => {
      console.dir(payload);
      set(
        produce((draft) => {
          draft.alapData.allLinks[whichItem] = payload;
        })
      );
    },

    removeItem: (payload) =>
      set(
        produce((draft) => {
          try {
            delete draft.alapData.allLinks[payload];
          } catch (err) {
            console.error(err);
          }
        })
      ),

    addEditItem: (data) => {
      // we use Set to assure no duplicates
      set((state) => ({
        editItems: [...new Set([...state.editItems, data])],
      }));
    },

    cancelEditItem: (data) => {
      set((state) => ({
        editItems: state.editItems.filter((item) => item !== data),
      }));
    },

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
