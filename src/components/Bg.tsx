import React, { useState } from 'react';
import gradientLapizLeft from './../assets/images/gradient-lapiz-left.svg';
import gradientLapizRight from './../assets/images/gradient-lapiz-right.svg';
export const Bg: React.FC = () => {
    return (
        <div className="z-[-1] relative">
        <img src={gradientLapizLeft} className="fixed left-0 top-0 -z-0 overflow-hidden rounded-full blur" alt="gradient-left"/>
        <img src={gradientLapizRight} className="fixed right-0 top-0 -z-0 overflow-hidden rounded-l-full blur" alt="gradient-left"/>
      </div>
    )
};