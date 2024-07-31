import React from 'react';
import { Product_type } from '@/app/types/interface';
import Image from 'next/image';
import HeartSvg from '@/app/Assets/Icons/heart small.svg';
import QuickViewSvg from '@/app/Assets/Icons/Quick View.svg';
import StarSvg from '@/app/Assets/Icons/star.svg';


const getRandomDiscount = () => {
  
    return Math.floor(Math.random() * (30 - 5 + 1)) + 5;
};

interface CardComponentProps {
    product: Product_type;
}

const CardComponent: React.FC<CardComponentProps> = ({ product }) => {
    const discount = getRandomDiscount();
    const discountedPrice = product.price * (1 - discount / 100);

   
    const stars = Array(5).fill(1).map((_, index) => (
        <StarSvg key={index} className="w-4 h-4 text-yellow-500" />
      ));
      

    return (
        <div className='relative w-[48%] h-[300px] mb-5  md:w-[250px] md:h-[350px] group'>
            <div className='relative w-full h-[65%]'>
                <div className='absolute z-10 left-3 w-8 flex items-center justify-center h-6 top-3 bg-red-500'>
                    <span className=' text-secondary_font_color text-xs'>{discount}%</span>
                </div>
                <div className='absolute cursor-pointer z-10 right-3 w-6 rounded-full shadow-md flex items-center justify-center h-6 top-3 bg-white'>
                    <HeartSvg />
                </div>
                <div className='absolute z-10 cursor-pointer right-3 w-6 rounded-full shadow-md flex items-center justify-center h-6 top-12 bg-white'>
                    <QuickViewSvg />
                </div>
                <Image
                    src={product.images[0]} // Ensure this is a single string URL
                    alt={product.title}
                    priority={false}
                    sizes='100%'
                  fill
                    className='w-full cursor-pointer h-full'
                />
                <button className='absolute bottom-0 w-full bg-black py-2 text-white opacity-0 group-hover:opacity-100 transition-opacity'>Add to Cart</button>
            </div>

            <div className='p-2 cursor-pointer h-[35%]'>
                <div className='h-[40%]'>
                    <h2 className='md:text-base text-sm line-clamp-2  font-medium'>{product.title}</h2>
                </div>
                <div className='my-2 h-[20%] flex flex-row items-center justify-between w-[50%]'>
                    <p className='md:text-base text-sm font-medium line-through text-red-500'>${product.price.toFixed(2)}</p>
                    <p className='md:text-base  text-sm font-medium'>${discountedPrice.toFixed(2)}</p>
                </div>
                <div className='h-[20%] flex items-center'>
                    {stars}
                </div>
            </div>

        </div>
    );
};

export default CardComponent;
