import { Inter,Poppins } from "next/font/google";


export const poppins = Poppins({
    subsets: ['latin'],
   weight:['400','100','200','300','500','600','700'],
   variable:'--poppins-font'
  });
  
  export  const inter = Inter({
      subsets: ['latin'],
      variable:'--font-inter',
      display:'swap'
    });