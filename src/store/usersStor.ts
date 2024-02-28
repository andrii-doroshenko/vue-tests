import { defineStore } from "pinia";
import { data } from "../../data/data";

interface userProps {
  id: Number;
  name: string;
  avatar: string;
}

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: data.users as userProps[],
    newUsers: data.newUsers as userProps[],
  }),
  getters: {
    getUserById: (state) => {
      return (userId: number | string) =>
        state.users.find((user) => user.id === userId);
    },
  },
  actions: {},
});
