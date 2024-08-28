import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const ThemeSwitcher: React.FC = () => {
    const [iconClassName, setIconClassName] = useState<string>('ion:moon-sharp');

    const onThemeToggler = (): void => {
        const root = document.getElementsByTagName('html')[0];

        root.classList.toggle('dark');
        setIconClassName((prevClassName) => (prevClassName === 'ion:moon-sharp' ? 'ph:sun-fill' : 'ion:moon-sharp'));
    };

    return (
        <button
            type="button"
            className="flex border-1 w-2rem h-2rem p-0 align-center justify-center"
            onClick={onThemeToggler}
        >
            <Icon icon={`${iconClassName}`} className=' text-2xl' />
        </button>
    );
};