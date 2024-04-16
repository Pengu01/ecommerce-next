"use client"

import { ClothingItem } from '@/types';
import React, { useState } from "react";
import { getClothingItemByID } from '@/sanity.query';

interface ClothingListProps {
    itemID: string;
  }

const ItemPage: React.FC<ClothingListProps> = async ({ itemID }) => {
    const items: ClothingItem[] = await getClothingItemByID(itemID);
    const item = items[0];

    return (
        <>
            <div className="md:w-1/2">
                <img src={item.image} alt={item.name} className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 p-4">
                <h1 className="text-3xl font-bold mb-2 text-[--rmain-color]">{item.name}</h1>
                <p className="text-xl mb-4 text-[--rmain-color]">{item.description}</p>
                <p className="text-lg font-semibold mb-2 text-[--rmain-color]">Colors:</p>
                <div className="flex flex-wrap mb-4">
                    {item.colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 mr-2 mb-2"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                <p className="text-lg font-semibold mb-2 text-[--rmain-color]">Sizes:</p>
                <div className="flex flex-wrap mb-4">
                    {item.sizes.map((size, index) => (
                        <span key={index} className="mr-2 mb-2 bg-gray-200 rounded-md px-2 py-1">
                            {size}
                        </span>
                    ))}
                </div>
                <p className="text-2xl font-bold mb-2 text-[--rmain-color]">Price: ${item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </>
    );
};

export default ItemPage;
