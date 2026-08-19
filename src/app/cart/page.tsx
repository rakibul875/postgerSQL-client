import CartDetailsView from "@/components/cart/CartDetailsView";
import { getUserSession } from "@/lib/api/getuser";
import { getMyCart } from "@/lib/get/my-cart";
import { getUser } from "@/lib/get/user";
import { redirect } from "next/navigation";

interface CartResponse {
  success: boolean;
  message: string;
  data: CartItem[];
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  quantity?: number;
}

const MyCart = async () => {
  const user = await getUserSession();
  
  if (!user) {
    redirect("/auth/signin");
  }

  const userId = user.id;

  // const userId = session?.user?.id;
  const myCartItems = (await getMyCart(userId as string)) as CartResponse;

  const data: CartItem[] = myCartItems.data || [];
  console.log("My Cart Items:", data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Manage the food items you added to your cart before checkout.
          </p>
        </div>

        <CartDetailsView initialCartItems={data} />
      </div>
    </div>
  );
};

export default MyCart;
