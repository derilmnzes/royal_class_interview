'use client'
import React, { useState } from 'react';
import MobileSvg from '@/Assets/Icons/Category-CellPhone.svg';
import DesktopSvg from '@/Assets/Icons/Category-Computer.svg';
import SmartWatchSvg from '@/Assets/Icons/Category-SmartWatch.svg';
import CamerSvg from '@/Assets/Icons/Category-Camera.svg';
import HeadPhonesSvg from '@/Assets/Icons/Category-Headphone.svg';
import GamingSvg from '@/Assets/Icons/Category-Gamepad.svg';
import HeaderTitle from '@/app/Components/Main_Heading';
import LeftArrowSvg from '@/Assets/Icons/icons_arrow-left.svg';
import RightArrowSvg from '@/Assets/Icons/icons arrow-right.svg';

const categories = [
    { title: 'Mobile', icon: <MobileSvg /> },
    { title: 'Desktop', icon: <DesktopSvg /> },
    { title: 'Smart Watch', icon: <SmartWatchSvg /> },
    { title: 'Camera', icon: <CamerSvg /> },
    { title: 'Headphones', icon: <HeadPhonesSvg /> },
    { title: 'Gaming', icon: <GamingSvg /> },
    { title: 'Headphones', icon: <HeadPhonesSvg /> },
    { title: 'Smart Watch', icon: <SmartWatchSvg /> },
    { title: 'Smart Watch', icon: <SmartWatchSvg /> },
    { title: 'Mobile', icon: <MobileSvg /> },
    { title: 'Smart Watch', icon: <SmartWatchSvg /> },
    { title: 'Smart Watch', icon: <SmartWatchSvg /> },
];

const Category: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);

    const itemsPerPage = 6;
    const maxIndex = categories.length - itemsPerPage;

    const handleNext = () => {
        if (startIndex < maxIndex) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    const displayedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <HeaderTitle
                subtitle="Categories"
                title="Browse By Category"

            >  <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePrev}
                        className="mr-4 w-10 h-10 bg-gray-400 flex items-center justify-center rounded-full disabled:opacity-50"
                        disabled={startIndex === 0}
                    >
                        <LeftArrowSvg />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded-full disabled:opacity-50"
                        disabled={startIndex === maxIndex}
                    >
                        <RightArrowSvg />
                    </button>
                </div></HeaderTitle>
            <div className="flex flex-wrap justify-between gap-4 md:gap-0  py-5">
                {displayedCategories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center border p-4 rounded-md shadow-md w-[45%] sm:w-1/3 md:w-1/4 lg:w-[16%] hover:bg-red-500 hover:text-white cursor-pointer"
                    >
                        <div className="mb-2">{category.icon}</div>
                        <p className="text-base font-normal">{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
