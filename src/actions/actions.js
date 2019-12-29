export const BUY_ITEM = 'BUY_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'


export function removeItem(item){
    return {
        type: REMOVE_ITEM,
        payload: item
    };
};

export function buyItem(item){
    return {
        type: BUY_ITEM,
        payload: item
    }
};

