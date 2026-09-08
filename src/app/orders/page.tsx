import FoodItemsSection from "@/components/orders/FoodItemsSection";
import { getAllItems } from "@/lib/get/items";
import React from "react";
import SectionMotion from "@/components/pageUi/home/SectionMotion";
import { getUserSession } from "@/lib/api/getuser";

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  createdAt: string;
}

interface PageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const OrdersPage = async ({ searchParams }: PageProps) => {
  const user= await getUserSession()
console.log(user)
  const resolvedParams = await searchParams;
  const search = resolvedParams.search || "";
  const category = resolvedParams.category || "All";

  const foodItems = await getAllItems(search, category);
  const data: FoodItem[] = foodItems.data;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionMotion delay={0.1}>
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl font-black text-gray-950 tracking-tight">
              Our Delicious Menu
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-medium">
              Explore our wide range of freshly prepared foods just for you.
            </p>
          </div>
        </SectionMotion>

        <SectionMotion delay={0.2}>
          <FoodItemsSection
          user={user}
            initialItems={data}
            currentSearch={search}
            currentCategory={category}
            
          />
        </SectionMotion>
      </div>
    </div>
  );
};

export default OrdersPage;
