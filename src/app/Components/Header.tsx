import Link from 'next/link'
import React from 'react'
import WishListSvg from '@/Assets/icons/Wishlist.svg'
import CartSvg from '@/Assets/icons/Cart1 with buy.svg'
import BottomArrowSvg from '@/Assets/Icons/DropDown.svg'
import SearchSvg from '@/Assets/Icons/Component 2.svg'
import MenuSvg from '@/Assets/Icons/bar.svg'

const Header: React.FC = () => {
    return (
        <div className='w-full'>
            <div className=' bg-secondary_color py-2 w-full text-secondary_font_color'>
                <div className='flex w-[95%] md:w-[90%] m-auto flex-row items-center justify-between'>
                    <div className='hidden md:block'>
                        {/* Add any content or components here */}
                    </div>

                    <div>
                        <div className='w-full flex flex-row items-center'>
                            <p className='font-primary_font_family hidden md:block font-normal text-xs md:text-sm'>
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            </p>
                            <p className='font-primary_font_family md:hidden font-normal text-[7px] md:text-sm'>
                                Summer Sale For All Swim Suits - OFF 50%!
                            </p>
                            <Link className='underline font-semibold text-[7px] md:text-sm ml-2' href={'/'}>
                                ShopNow
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <p className='font-primary_font_family flex flex-row items-center text-[7px] md:text-sm'>
                            English 
                            <span className='hidden md:block'>
                                <BottomArrowSvg />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-5 border-b'>
                <div className='flex flex-row items-center justify-between w-[90%] m-auto'>
                    <div className='md:w-1/4 flex flex-row items-center w-1/2'>
                        <div className='md:hidden'>
                            <MenuSvg />
                        </div>
                        <div>
                            <h5 className='font-bold text-primary_font_color text-xl md:text-2xl'>Royal Class</h5>
                        </div>
                    </div>

                    <div className='lg:w-1/4 md:w-2/4 hidden md:block'>
                        <ul className='text-primary_font_color flex flex-row items-center justify-between'>
                            <li className='font-normal text-base'>Home</li>
                            <li className='font-normal text-base'>Contact</li>
                            <li className='font-normal text-base'>About</li>
                            <li className='font-normal text-base'>Sign Up</li>
                        </ul>
                    </div>

                    <div className='md:w-1/4 w-1/2 flex flex-row items-center justify-between'>
                        <div className='w-[75%] hidden lg:block relative'>
                            <input className='bg-gray-200 px-2 w-full py-2 rounded-md' type="text" placeholder='Search' />
                            <div className='absolute top-2 right-2'>
                                <SearchSvg />
                            </div>
                        </div>

                        <div className='lg:w-[25%] w-full flex flex-row justify-end items-center'>
                            <div className='lg:hidden'>
                                <SearchSvg />
                            </div>
                            <div className='mx-2 md:mx-2'>
                                <WishListSvg />
                            </div>
                            <CartSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
