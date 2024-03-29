import { defineStore } from "pinia";

export const useCvsStore = defineStore("cvs", {
  state: () => ({ cvs: [] }),
  getters: {
    getAllCvs: (state) => {
      return state.cvs;
    },
  },
  actions: {
    addCv(cv) {
      this.cvs.push(cv);
    },
  },
});
