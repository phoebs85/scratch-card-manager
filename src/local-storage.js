const STORAGE_KEY = 'status'

export const getStatus = () => {
    return window.localStorage.getItem(STORAGE_KEY)
}

export const setStatus = (value) => {
    return window.localStorage.setItem(STORAGE_KEY, value)
}
