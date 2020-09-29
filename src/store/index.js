export const state = () => ({
  status: null
})

export const getters = {
  getStatus(state) {
    return state.status
  }
}

export const mutations = {
  setStatus(state, value) {
    state.status = value
  }
}
