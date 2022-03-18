import { addingProduct } from "./usersscenarios/addingProduct.js";
import { createOrder } from "./usersscenarios/createOrder.js";

export const getScenario = () => {
  const s = [addingProduct, createOrder];

  const choice = Math.floor(Math.random() * s.length);
  const result = s[choice];

  return result;
};

