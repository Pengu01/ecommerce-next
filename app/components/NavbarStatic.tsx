import Link from "next/link";
interface Open {
    women: boolean;
    men: boolean;
  }
const NavbarStatic: React.FC<Open> = ({ women, men })  => {
    return (
        <>  
        <div className={`ease-in-out duration-1000 transition-all w-full flex justify-center fixed z-30 top-0`}>
            <div className={`flex justify-between gap-8 ease-in-out duration-1000 delay-1000 bg-top transition-all bg-gradient-to-t from-[--rmain-color] to-[--rmain-color] bg-no-repeat w-full bg-[length:100%_100%]`}>
                <Link href={"/men"}><p className={`inline-block text-2xl border-2 border-[--rmain-color] py-2 px-3 bg-gradient-to-l from-[--rmain-color] to-[--main-color] from-50% to-50% md:text-4xl md:border-3 md:py-3 md:px-[18px] bg-[length:200%] transition-all duration-500 ease ${men ? 'text-[--main-color] bg-right cursor-default' : 'hover:text-[--main-color] hover:bg-right cursor-pointer bg-left text-[--rmain-color] '}`} >Men</p></Link>
                <Link href={"/women"}><p className={`inline-block text-2xl border-2 border-[--rmain-color] py-2 px-3 bg-gradient-to-r from-[--rmain-color] to-[--main-color] from-50% to-50% md:text-4xl md:border-3 md:py-3 md:px-[18px] bg-[length:200%] transition-all duration-500 ease ${women ? 'text-[--main-color] bg-left cursor-default' : 'hover:text-[--main-color] hover:bg-left cursor-pointer bg-right text-[--rmain-color] '}`}>Women</p></Link>
            </div>
        </div>
        </>

    );
}

export default NavbarStatic;
