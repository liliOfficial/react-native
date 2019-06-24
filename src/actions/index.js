export * from './authActions';
export * from './joinAcitions';

export const offer = (offerId) => {
    return {
        type: 'offerSelected',
        payLoad: offerId
    }
}