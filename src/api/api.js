import * as axios from 'axios'

let instance = axios.create({
    baseURL: "https://dshamak-bh.ey.r.appspot.com/"
});

export const shopAPI = ({
    getProducts(){
        return instance.get("shop/products")
    },
    sendOrder(orderData) {
        return instance.post("shop/order", orderData)
    }
})