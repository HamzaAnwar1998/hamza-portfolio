export const UI_DEVELOPMENT = 'UI_DEVELOPMENT';
export const REACT_DEVELOPMENT = 'REACT_DEVELOPMENT';
export const FIREBASE_DEVELOPMENT = 'FIREBASE_DEVELOPMENT';
export const ALL_DEVELOPMENT='ALL_DEVELOPMENT';

export const uiDevelopment=(payload)=>{
    return{
        type: UI_DEVELOPMENT,
        payload
    }
}

export const reactDevelopment=(payload)=>{
    return{
        type: REACT_DEVELOPMENT,
        payload
    }
}

export const firebaseDevelopment=(payload)=>{
    return{
        type: FIREBASE_DEVELOPMENT,
        payload
    }
}

export const allDevelopment=(payload)=>{
    return{
        type: ALL_DEVELOPMENT,
        payload
    }
}