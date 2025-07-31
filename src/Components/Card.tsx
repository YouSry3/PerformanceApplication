import { memo } from "react";
import type { ICard } from "../interfaces";
import Button from "./ui/Button";

interface CardProps {
  Card: ICard;
  onAddToCart: (title: string) => void;
};

const Card = ({Card,onAddToCart}: CardProps) => {

  const {title, description, imageUrl } = Card;

  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="absolute top-0 right-0">
          <div className="w-32 h-8 absolute top-4 -right-8">
            <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
              SALE
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <Button className="bg-amber-400" onClick={() => onAddToCart(title)}>
        Add to cart
      </Button>
    </div>
  );
};

export default memo(Card);
