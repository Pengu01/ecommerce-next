import { ClothingItem } from '@/types/index'
import ClothingList from '../components/ClothingList';
import NavbarStatic from '../components/NavbarStatic';
import { getFemaleClothingItems } from '@/sanity.query';

export default async function Home() {
  const clothingItems: ClothingItem[] = await getFemaleClothingItems();
  return (
    <main className="flex min-h-screen flex-col items-center p-12 justify-center">
      <NavbarStatic men={false} women={true}/>
      <ClothingList items={clothingItems} />
    </main>
  );
};