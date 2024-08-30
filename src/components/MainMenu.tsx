import React, { useState } from 'react';
import '../assets/css/MainMenu.scss'
import { ThemeSwitcher } from './ThemeSwitcher';

export const MainMenu: React.FC = () => {
    return (
        <div className="sticky top-0 z-50 main-nav-bar">
            <div className="items-center backdrop-blur-2xl  h-[75px] p-4 w-full flex justify-center relative">
                <div className="logo mr-[5rem]">
                    <span className="logo-txt text-2xl font-bold txt-gradient indent-0 p-4 textShine">Sadith Chrishantha</span>
                </div>
                <div className="flex justify-left items-center mr-[5rem]">
                    <div className="nav-bar flex gap-8 text-lg">
                        <a href="#" className="nav-itm px-2">About</a>
                        <a href="#" className="nav-itm px-2">Skills</a>
                        <a href="#" className="nav-itm px-2">Experience</a>
                        <a href="#" className="nav-itm px-2">Works</a>
                        <a href="#" className="nav-itm px-2">Let's connect</a>
                        <a href="#" className="nav-itm px-2">In their own words</a>
                    </div>
                </div>
                <div className="theme-swicher absolute right-4 top-[30%]"><ThemeSwitcher /></div>
            </div>
        </div>
    )
};