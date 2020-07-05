function handleError(commit, error) {
  const message = error.message || error.info.error_description;
  commit("setError", message);
}

export default {
  //   async login({ commit }, userId) {
  async login({ commit, state }) {
    try {
      commit("setError", "");
      commit("setLoading", true);

      //   const currentUser = await chatkit.connectUser(userId);
      const currentUser = {
        userame: "Rin",
        name: "Shima Rin",
      };

      commit("setUser", {
        username: currentUser.id,
        name: currentUser.name,
      });

      // Save list of user's rooms in store
      const rooms = currentUser.rooms.map((room) => ({
        id: room.id,
        name: room.name,
      }));

      commit("setRooms", rooms);

      // Subscribe user to a room
      //    Pick last used room, or the first one.
      const activeRoom = state.activeRoom || rooms[0];
      commit("setActiveRoom", {
        id: activeRoom.id,
        name: activeRoom.name,
      });

      //   await chatkit.subscribeToRoom(activeRoom.id);

      commit("setReconnect", false);

      return true;
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit("setLoading", false);
    }
  },

  async changeRoom({ commit }, roomId) {
    try {
      //   const { roomid, name } = await chatkit.subscribeToRoom(roomId);
      const { roomid, name } = { roomid: roomId, name: "Rin" };
      commit("setActiveRoom", { roomid, name });
    } catch (error) {
      handleError(commit, error);
    }
  },
};
