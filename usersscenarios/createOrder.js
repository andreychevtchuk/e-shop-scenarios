import axios from "axios";

const host =
  "http://internet-shop-api-dot-internet-shop-api-343214.lm.r.appspot.com";

const createOrderEndpoint = `${host}/api/Shopping_cart/Add_Shopping_Cart`;

export const createOrder = async () => {
  const createOrderRequest = {
    address: "Brest, square Imagine, home 60"
  };
  
  try {
    const createOrderResponse = await axios.post(
      createOrderEndpoint,
      createOrderRequest
    );
    const result = 'order is created from address:${createOrderResponse.name}';
    return result;
  } catch (error) {
	const result = 'order is not created';
	return result;
  }
};
