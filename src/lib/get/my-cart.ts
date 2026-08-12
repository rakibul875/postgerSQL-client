import { handleGetSection } from "../action/serverGet";

export const getMyCart = async (userId: string) => {
  return handleGetSection(`/cart/${userId}`);
};
