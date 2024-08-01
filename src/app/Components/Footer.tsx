import React from 'react';
import Image from 'next/image';
import QrCodeSvg from '@/Assets/Images/Qrcode 1.png';
import GooglePlaycode from '@/Assets/Images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png';
import AppStore from '@/Assets/Images/download-appstore.png';
import FaceBook from '@/Assets/Icons/Icon-Facebook.png';
import Instagram from '@/Assets/Icons/icon-instagram.png';
import Linkdin from '@/Assets/Icons/Icon-Linkedin.png';
import Twitter from '@/Assets/Icons/Icon-Linkedin.png';

const Footer: React.FC = () => {
    return (
        <div className="bg-black text-white w-full">
            <div className="flex w-[90%] m-auto py-10 px-5 flex-wrap lg:flex-row items-start justify-between">
                <div className="w-1/2 mb-10 lg:w-1/5">
                    <h6 className="mb-5 font-medium text-xl">Exclusive</h6>
                    <ul>
                        <li className="mb-5">Subscribe</li>
                        <li>
                            <p className="font-thin text-xs">Get 10% off your first order</p>
                            <input
                                placeholder="Enter your email"
                                className="bg-black mt-3 border px-2 border-white py-2 rounded-sm"
                            />
                        </li>
                    </ul>
                </div>

                <div className="w-1/2 mb-10 lg:w-1/5">
                    <h6 className="mb-5 font-medium text-xl">Support</h6>
                    <ul>
                        <li>
                            <address className="font-normal text-base">
                                21st Floor, The Binary Tower, Marasi Drive, Business Bay, Dubai
                            </address>
                        </li>
                        <li className="my-5 font-normal text-base">
                            <a href="mailto:info@royalclass.group">info@royalclass.group</a>
                        </li>
                        <li className="font-normal text-base">
                            <a href="tel:+97142408999">+971 42 408 999</a>
                        </li>
                    </ul>
                </div>

                <div className="w-1/2 mb-10 lg:w-1/5">
                    <h6 className="mb-5 font-medium text-xl">Account</h6>
                    <ul>
                        <li className="font-normal text-base">My Account</li>
                        <li className="font-normal text-base my-5">
                            <a href="#">Login / Register</a>
                        </li>
                        <li className="font-normal text-base">Cart</li>
                        <li className="my-5 font-normal text-base">WishList</li>
                        <li className="font-normal text-base">Shop</li>
                    </ul>
                </div>

                <div className="w-1/2 mb-10 lg:w-1/5">
                    <h6 className="mb-5 font-medium text-xl">Quick Link</h6>
                    <ul>
                        <li className="font-normal text-base">Privacy Policy</li>
                        <li className="font-normal text-base my-5">Terms of Use</li>
                        <li className="font-normal text-base">FAQ</li>
                        <li className="font-normal text-base">Contact</li>
                    </ul>
                </div>

                <div className="w-1/2 mb-10 lg:w-1/5">
                    <h6 className="mb-5 font-medium text-xl">Download App</h6>
                    <ul>
                        <li>
                            <div className="flex flex-row items-center">
                                <div className="mr-2">
                                    <Image src={QrCodeSvg} alt="QR code" />
                                </div>
                                <div>
                                    <Image alt="Play store" src={GooglePlaycode} />
                                    <Image alt="App store" src={AppStore} />
                                </div>
                            </div>
                        </li>
                        <li className="flex mt-5 flex-row items-center justify-between">
                            <Image alt="Instagram" src={Instagram} />
                            <Image alt="Twitter" src={Twitter} />
                            <Image alt="LinkedIn" src={Linkdin} />
                            <Image alt="Facebook" src={FaceBook} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
