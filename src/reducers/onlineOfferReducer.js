export default (state = null, action) => {
    switch (action.type) {
        case 'offerSelected':
            return action.payLoad;
        default:
            return state;
    }
}