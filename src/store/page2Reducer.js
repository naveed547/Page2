const initialState = {
    appName: 'page2',
};
export default {
    name: 'page2',
    state: { ...initialState },
    reducers: {
        setAppName: (state, appName) => ({ ...state, appName }),
    },
};