import { defineStore } from "pinia";
import { data } from "../../data/data";

interface userProps {
  id: number;
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
  actions: {
    deleteUser(userId: number) {
      const userIndexInUsers = this.users.findIndex(
        (user) => user.id === userId,
      );
      if (userIndexInUsers !== -1) {
        this.users.splice(userIndexInUsers, 1);
      }

      const userIndexInNewUsers = this.newUsers.findIndex(
        (user) => user.id === userId,
      );
      if (userIndexInNewUsers !== -1) {
        this.newUsers.splice(userIndexInNewUsers, 1);
      }
    },

    addUser(userName: string) {
      const newUserId = Math.floor(Math.random() * 1000);

      this.users.push({
        id: newUserId,
        name: userName,
        avatar: "https://avatar.iran.liara.run/public",
      });
    },
  },
  persist: {
    storage: localStorage,
    paths: ["users", "newUsers"],
    debug: true,
  },
});
