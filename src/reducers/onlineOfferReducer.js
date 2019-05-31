export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'offerSelected':
            return action.payLoad;
        default:
            return state;
    }
}