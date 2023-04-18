export const TotalPrice = (data) => {
    return data.reduce((total, item) => {
        return total + item.price * item.quantity;
    } , 0);
}