interface Specifications {
    title: string;
    description: string;
}

interface Product {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: string;
    totalPrice: number;
    discountPrice:number;
    rating:number;
    info: string;
    category: string;
    images: {}[];
    specs: {title:string,description:string}[];
    specifications:Specifications[],
    quantity:number
  }

interface IcategoryItem {
    name: string,
    slug: string
}