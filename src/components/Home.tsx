import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../assets/css/Home.scss';
import HeroImgn from '../assets/images/hero-img_n.png';
import HeroImgw from '../assets/images/hero-img_w.png';

export const Home: React.FC = () => {
    return (
        <div className="relative px-10 mt-8">
            <div className="relative flex w-full items-center justify-between">
                <div className="relative w-[70%] text-center pl-[2rem] mt-4">
                    <div className='text-[4rem] font-bold w-full leading-snug uppercase'>
                        <span className='block'><span className='pr-4'>A</span><span className='txt-gradient text-[5rem]'>Frontend</span></span>
                        <span className="block"><span className=''>Developer</span>
                        <span className='pl-4'>Who Loves</span></span>
                        <span className='block'>Design & Code</span>
                    </div>
                    {/* <div className="btns-wrp flex gap-6 justify-center items-center mt-8">
                    <button className="btn-primary gap-2 self-stretch px-10 py-3 disabled:opacity-50 min-w-[5rem]"><span>Let's Connect</span></button>
                    <button className="btn-primary-outline gap-4 px-6 py-3 disabled:opacity-80 min-w-[5rem]"><span>Download CV</span></button>
                    </div> */}
                    <div className="testimonial-wrp w-full flex justify-center mt-10">
                        <div className="testimonial-card relative flex shrink-0 flex-col shadow-2xl justify-between gap-6 overflow-hidden rounded-2xl border p-6 w-[60%] border-blue-500">
                            <div className="relative flex h-full items-start gap-4 md:gap-6">
                                <div className="flex-1 text-sm text-body-gray">
                                    <Icon icon="icomoon-free:quotes-left" className='text-2xl inline-block mr-4 text-blue-600' />
                                    This certification serves as a valuable confirmation of one's Vue.js skills, enhancing professional profiles and fostering credibility when seeking new employment opportunities.
                                    <Icon icon="icomoon-free:quotes-right" className='text-2xl inline-block ml-4 text-blue-400' />
                                </div>
                            </div>
                            <div className="relative flex w-full items-center gap-5 justify-start">
                                <div className="size-10 overflow-hidden rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mvyKPkS_CGZT8W9USlBXSluwsoCzEI331g&s" className="size-full object-cover object-center shadow" alt="Eduardo San Martin Morote" />
                                </div>
                                <div className="text-left">
                                    <p className="heading-primary text-sm font-bold">Eduardo San Martin Morote</p>
                                    <p className="text-sm text-body-gray">Vue.js Core Team member and Creator of Pinia and Vue Router</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] flex justify-end absolute right-[2rem] z-[-1]">
                    <img className='hero-img-light size-[35%]' src={HeroImgn} alt="" />
                    <img className='hero-img-dark' src={HeroImgw} alt="" />
                </div>
            </div>
        </div>
    )
};