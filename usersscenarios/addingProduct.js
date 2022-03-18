import axios from "axios";

const host =
  "http://internet-shop-api-dot-internet-shop-api-343214.lm.r.appspot.com";

const addingProductEndpoint = `${host}/api/Product_data/Add_In_Shopping_Cart`;

export const addingProduct = async () => {
  const addingProductRequest = {
    id_cart: 1,
	id_product: 1,
	quantity: 1
  };
  
  try {
    const addingProductResponse = await axios.post(
      addingProductEndpoint,
      addingProductRequest
    );
    const result = 'product is added into shopping cart with id:${addingProductResponse.id_cart}';
    return result;
  } catch (error) {
	const result = 'product is not added';
	return result;
  }
};
