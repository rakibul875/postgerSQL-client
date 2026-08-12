import { handlePost } from "../action/serverPost";

export const handleProductPost = async (newProduct: any): Promise<any> => {
  return handlePost("/products", newProduct);
};
