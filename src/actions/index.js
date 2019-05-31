export const offer = (offerId) => {
    return {
        type: 'offerSelected',
        payLoad: offerId
    }
}