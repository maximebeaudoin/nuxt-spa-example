export interface User {
    name: string
    email: string,
    // eslint-disable-next-line camelcase
    job_title: string,
    password: string
}

export interface Validator { validate: () => boolean }
