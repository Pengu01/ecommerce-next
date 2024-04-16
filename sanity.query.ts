import { groq } from "next-sanity";
import client from "./sanity.client";
export async function getClothingItems() {
  const data = await client.fetch(
    groq`*[_type == 'clothingItem']{
      "id": _id,
      "name": name,
      "description": description,
      "price": price,
      "image": image.asset->url,
      "category": category,
      "sizes": sizes,
      "colors": colors
    }`
  );
  console.log(data);
  return data;
}
export async function getClothingItemByID(id: string){
  const data = await client.fetch(
    groq`*[_type == 'clothingItem' && _id == $id]{
      "id": _id,
      "name": name,
      "description": description,
      "price": price,
      "image": image.asset->url,
      "category": category,
      "sizes": sizes,
      "colors": colors
    }`, { id }
  );
  console.log(data);
  return data;
}
export async function getFemaleClothingItems(){
  const data = await client.fetch(
    groq`*[_type == 'clothingItem' && category == 'women']{
      "id": _id,
      "name": name,
      "description": description,
      "price": price,
      "image": image.asset->url,
      "category": category,
      "sizes": sizes,
      "colors": colors
    }`
  );
  console.log(data);
  return data;
}
export async function getMaleClothingItems(){
  const data = await client.fetch(
    groq`*[_type == 'clothingItem' && category == 'men']{
      "id": _id,
      "name": name,
      "description": description,
      "price": price,
      "image": image.asset->url,
      "category": category,
      "sizes": sizes,
      "colors": colors
    }`, { cache: 'no-cache' }
  );
  console.log(data);
  return data;
}