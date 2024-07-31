export interface CategoryItem {
    id: number;
    name: string;
    image: string;
    creationAt: string; 
    updatedAt: string;  
  }


  export interface Product_type {
    id: number;
    title: string;
    price: number;
    description?: string;
    images: string[]; 
    creationAt?: string; 
    updatedAt?: string; 
    category?:CategoryItem;
  }