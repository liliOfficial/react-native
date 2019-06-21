export * from './authActions';

export const offer = (offerId) => {
    return {
        type: 'offerSelected',
        payLoad: offerId
    }
}