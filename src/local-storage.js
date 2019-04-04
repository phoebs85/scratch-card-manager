const STORAGE_KEYS = {
    CLEARED: 'cleared',
    PRIZE_ID: 'prizeId',
    SESSION_ID: 'sessionId'
}

export const isCleared = () => {
    return Boolean(window.localStorage.getItem(STORAGE_KEYS.CLEARED))
}

export const setCleared = (value) => {
    return window.localStorage.setItem(STORAGE_KEYS.CLEARED, value)
}

export const setLocalStorage = ({sessionId}) => {
    if(window.localStorage.getItem(STORAGE_KEYS.SESSION_ID) !== sessionId) {
        window.localStorage.clear()
    }
}