export interface State {
  items: Array<object>
}

export const state = () => ({
  items: [
    { icon: 'mdi-home', text: 'Dashboard', link: 'index' },
    { icon: 'mdi-account-multiple', text: 'Users', link: 'users' }
  ]
}) as State
