import { toast } from "react-toastify";
import type { ProductsProps } from "../interfaces";
import Card from "./Card";
import NoContent from "./ui/NoContent";
import { memo, useCallback } from "react";



const Products = ({ CardsApi }: ProductsProps) => {
    
    const handleAddToCart = useCallback(
      (title: string) => {
          toast.success(`${title} added to cart!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
      },[]
    );

  if (!CardsApi.length) return <NoContent />;

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

      {CardsApi.map((product) => (
        <Card Card={product} onAddToCart={handleAddToCart}  key={product.id} />
      ))}
      
    </div>
  );
};

export default memo(Products);
