interface State {
    title: string
}

export const state = () => ({
  title: 'Dashboard'
})

export const mutations = {
  updateTitle (state: State, title: string) {
    state.title = title
  }
}
