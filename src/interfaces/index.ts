export interface ICard{
  id : string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ProductsProps {
  CardsApi: ICard[];
};