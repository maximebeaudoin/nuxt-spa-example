interface State {
    open: boolean
}

export const state = () => ({
  open: false
})

export const mutations = {
  update (state: State, open: boolean) {
    state.open = open
  }
}
