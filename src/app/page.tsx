import Image from "next/image";
import Link from "next/link";
import IphoneImage from '@/app/Assets/Images/hero_endframe__cvklg0xk3w6e_large 2.png'
import RightSvg from '@/app/Assets/Icons/right_white.svg'
import { CategoryItem, Product_type } from "./types/interface";
import Card_component from "./Components/Card_component";
import Category from "./Components/Category";
import HeaderTitle from "./Components/Main_Heading";
import PlayStationSvg from '@/app/Assets/Images/ps5-slim-goedkope-playstation_large 1.png'
import WomeCap from '@/app/Assets/Images/attractive-woman-wearing-hat-posing-black-background 1.png'
import Speaker from '@/app/Assets/Images/Frame 707.png'
import Perfume from '@/app/Assets/Images/Frame 706.png'
import TruckSvg from '@/app/Assets/Icons/icon-delivery.svg'
import CustomerSupportSvg from '@/app/Assets/Icons/Icon-Customer service.svg'
import SecureSvg from '@/app/Assets/Icons/Icon-secure.svg'
import Button_component from "./Components/Button_component";



async function getCategoriesData() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories',{
    next:{
      revalidate:3000
    }
  })


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getProductsData() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products',{
    next:{
      revalidate:3000
    }
  })


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}




export default async function Home() {
  const categories: CategoryItem[] = await getCategoriesData()
  const products: Product_type[] = await getProductsData()

  return (
    <div className="w-[90%] max-w-screen-4xl m-auto">
      <div className="flex 2xl:h-[750px]  h-[400px] items-start justify-between">
        <div className="w-[18%] hidden md:block h-full overflow-scroll">
          <ul className="border-r py-5  px-2">
            {categories.map((item) => (
              <li className="py-3 cursor-pointer" key={item.id}>
                <p className=" text-sm md:text-base font-normal">   {item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[80%] w-full  my-10 h-[80%]  flex flex-row items-center justify-around  ml-auto bg-black">
          <div className=" w-[90%] md:w-[40%]">
            <p className="text-secondary_font_color font-poppins text-lg">Iphone 14 series</p>

            <h1 className="  text-secondary_font_color font-semibold my-5 font-inter text-6xl md:text-6xl ">Up to 10% off Voucher</h1>
            <Link className="text-secondary_font_color font-medium flex items-center justify-between w-28 underline" href={'/'}>
              Shop Now <RightSvg /></Link>
          </div>

          <div className="hidden md:block md:w-[45%]">
            <Image src={IphoneImage} className="w-full h-full" alt="Iphone Image" />
          </div>
        </div>


      </div>

      <div className="md:mt-20 mt-10">
        <HeaderTitle subtitle="Todays" showTiming={true} title="Flash Sales" />

        <div className="mt-5">
          <div className=" flex flex-wrap items-center justify-between">
            {products.slice(0, 5).map((item) => (
              <Card_component key={item.id} product={{
                title: item.title,
                price: item.price,
                images: item.images,
                id: item.id
              }} />
            ))}
          </div>

          <div className=" flex items-center justify-center mt-10">
            <Button_component />
          </div>
        </div>
      </div>

      <div className="mt-20">



        <Category />

      </div>

      <div className="mt-20">
        <HeaderTitle subtitle="The Month" title="Best Selling Products" />

        <div className="mt-5">
          <div className=" flex flex-wrap items-center justify-between">
            {products.slice(5, 10).map((item) => (
              <Card_component key={item.id} product={{
                title: item.title,
                price: item.price,
                images: item.images,
                id: item.id
              }} />
            ))}
          </div>
        </div>
      </div>


      <div className="mt-20">
        <HeaderTitle subtitle="Our Products" title="Explore our products" />

        <div className="mt-5">
          <div className=" flex flex-wrap items-center justify-between">
            {products.slice(10, 20).map((item) => (
              <Card_component key={item.id} product={{
                title: item.title,
                price: item.price,
                images: item.images,
                id: item.id
              }} />
            ))}
          </div>

          <div className=" flex flex-row items-center justify-center mt-10">
            <Button_component />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <HeaderTitle subtitle="Featured" title="New Arrival" />


      </div>

      <div className="lg:h-[650px] md:h-[550px] xs:h-[700px]  h-[850px] w-full">
        <div className=" h-[100%] mt-10 flex justify-between flex-col md:flex-row w-full">
          <div className="md:w-[49%] mb-5 md:mb-0 md:h-full h-[50%] w-full relative  bg-primary_font_color">
            <div className="absolute z-5 bottom-0 h-[90%] w-full">
              <Image className="w-full h-full" src={PlayStationSvg} alt="Plastation image" />
            </div>
            <div className=" w-[40%] absolute left-5 bottom-5 z-10">
              <h5 className=" font-semibold text-2xl text-secondary_font_color">
                PlayStation 5
              </h5>
              <p className=" font-light text-sm my-4 text-secondary_font_color">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link href={'/'} className=" font-medium text-base text-secondary_font_color">Shop Now</Link>
            </div>
          </div>

          <div className="md:w-[49%] md:h-full h-[50%] w-full flex flex-col justify-center items-center">
            <div className="bg-black relative h-[48%] w-full mb-[4%]"> {/* Add bottom margin here */}
              <div className="absolute z-5 bottom-0 h-full right-0 w-[55%]">
                <Image className="w-full h-full" src={WomeCap} alt="Plastation image" />
              </div>
              <div className=" w-[60%] absolute left-5 bottom-5 z-10">
                <h5 className=" font-semibold text-2xl text-secondary_font_color">
                  Women’s Collections
                </h5>
                <p className=" font-light text-sm my-4 text-secondary_font_color">
                  Featured woman collections that give you another vibe.
                </p>
                <Link href={'/'} className=" font-medium text-base  text-secondary_font_color">Shop Now</Link>
              </div>
            </div>
            <div className="h-[48%] flex flex-row items-center justify-between w-full">
              <div className="bg-black relative w-[48%] h-full">
                <div className="absolute z-5 bottom-4 h-[85%]  w-[100%]">
                  <Image className="w-full h-full" src={Speaker} alt="Plastation image" />
                </div>
                <div className=" w-[60%] absolute left-5 bottom-5 z-10">
                  <h5 className=" font-semibold text-2xl  text-secondary_font_color">
                    Speakers
                  </h5>
                  <p className=" font-light text-sm my-3  text-secondary_font_color">
                    Amazon wireless speakers
                  </p>
                  <Link href={'/'} className=" font-medium text-base  text-secondary_font_color">Shop Now</Link>
                </div>
              </div>
              <div className="w-[48%] relative bg-primary_font_color h-full">
                <div className="absolute z-5 bottom-4 h-[80%] left-4  w-[90%]">
                  <Image className="w-full h-full" src={Perfume} alt="Plastation image" />
                </div>
                <div className=" w-[60%] absolute left-5 bottom-5 z-10">
                  <h5 className=" font-semibold text-2xl  text-secondary_font_color">
                    Perfume
                  </h5>
                  <p className=" font-light text-sm my-3  text-secondary_font_color">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Link href={'/'} className=" font-medium text-base  text-secondary_font_color">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className=" mt-20 mb-20 flex flex-col md:flex-row  justify-around items-center">
        {[{ name: 'FREE AND FAST DELIVERY', subtitle: "Free delivery for all orders over $140", icon: TruckSvg }, { icon: CustomerSupportSvg, name: "24/7 CUSTOMER SERVICE", subtitle: "Friendly 24/7 customer support" }, { name: "MONEY BACK GUARANTEE", subtitle: "We reurn money within 30 days", icon: SecureSvg }].map((item, index) => (
          <div key={index} className=" flex w-1/3 items-center justify-center flex-col">
            <div className=" bg-primary_font_color w-[80px] h-[80px] rounded-full flex items-center justify-center border-8 border-gray-300">
              <item.icon />
            </div>
            <h6 className=" my-3 font-semibold md:text-lg lg:text-xl">{item.name}</h6>
            <p className=" text-base font-normal">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


