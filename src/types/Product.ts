export type Product = {
  _id: string;
  title: string;
  description: string;
  price?: number;
  imageUrl?: string;
  category?: {
    name: string;
  };
  slug?: {
    current: string;
  };
   tags?: string[];
};
