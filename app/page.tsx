import  Navbar from './components/Navbar'
import ClothingList from './components/ClothingList'
import { ClothingItem } from '@/types/index'
import { getClothingItems } from '@/sanity.query'
import Content from './components/Content'
import Footer from './components/Footer'

export default async function Home() {
  const clothingItems: ClothingItem[] = await getClothingItems();
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-12 justify-center">
        <Navbar/>
        <Content/>
      </div>
      <Footer/>
    </main>
  );
};