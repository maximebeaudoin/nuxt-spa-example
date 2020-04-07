export interface User {
    id?: number
    name: string
    email: string,
    // eslint-disable-next-line camelcase
    job_title: string,
    password?: string
}

export interface Validator {
    validate: () => boolean,
    resetValidation: () => boolean
}
