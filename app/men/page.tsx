import { ClothingItem } from '@/types/index'
import ClothingList from '../components/ClothingList';
import NavbarStatic from '../components/NavbarStatic';
import { getMaleClothingItems } from '@/sanity.query';
import Footer from '../components/Footer';

export default async function Home() {
  const clothingItems: ClothingItem[] = await getMaleClothingItems();
  return (
    <main>
    <div className="flex min-h-screen flex-col items-center p-12 justify-center">
      <NavbarStatic men={true} women={false}/>
      <ClothingList items={clothingItems} />
      </div>
      <Footer/>
    </main>
  );
};