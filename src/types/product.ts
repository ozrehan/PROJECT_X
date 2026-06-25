export interface Product {
  id: number;
  name: string;
  description: string;

  price: number;
  oldPrice: number;
  discount: number;

  store: string;
  brand: string;
  category: string;

  rating: number;
  reviews: number;

  image1: string;
  image2: string;
  image3: string;
  image4: string;

  color: string[];
  sizes: string[];

  stock: number;

  delivery: string;
}