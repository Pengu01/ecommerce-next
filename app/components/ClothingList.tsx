import React from 'react';
import { ClothingItem } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ClothingListProps {
  items: ClothingItem[];
}

const ClothingList: React.FC<ClothingListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Link href={`product/${item.id}`} key={item.id}>
        <div key={item.id} className="bg-white shadow-md overflow-hidden w-52 h-52 group hover:cursor-pointer">
          <Image src={item.image} alt={item.name} className="w-full h-full object-cover"/>
          <div className="w-52 h-52 bottom-0 hover:bottom-52 bg-[--rmain-color] z-10 relative transition-all duration-500 ease">
          <p className="text-[--main-color]  m-auto relative bottom-[40px] p-1 text-center bg-[--rmain-color] text-2xl">{item.name}</p>
          <p className='text-2xl text-[--main-color] text-center'>Colors</p>
            <div className="flex m-auto w-full justify-center gap-2 flex-wrap max-w-full">
              {item.colors.map((color) => (
                <span
                  key={color}
                  className="w-8 h-8 rounded-full border-[--main-color] border-[1px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className='text-2xl text-[--main-color] text-center'>Sizes</p>
            <div className="flex m-auto w-full justify-center gap-2 flex-wrap max-w-full">
              {item.sizes.map((size) => (
                <span
                  key={size}  
                  className="text-[--main-color] text-2xl"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ClothingList;