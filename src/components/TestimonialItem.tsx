import React from 'react';
import { Icon } from '@iconify/react';

interface TestimonialItemProps {
    avatar: string; // Avatar image URL
    comment: string; // Testimonial comment text
    name: string; // Name of the person
    role: string; // Role or designation of the person
    linkedinURL: string; // LinkedIn profile URL
}

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

export const TestimonialItem: React.FC<TestimonialItemProps> = ({ avatar, comment, name, role, linkedinURL }) => {
    const truncatedComment = truncateText(comment, 300); // Truncate comment to 400 characters

    return (
        <div className="testimonial-card relative flex shrink-0 flex-col justify-between gap-6 overflow-hidden rounded-2xl border p-6 min-w-full max-w-full w-[700px] border-blue-500">
            <div className="relative flex h-full items-start gap-4 md:gap-6">
                <div className="flex-1 text-sm text-body-gray">
                    <Icon icon="icomoon-free:quotes-left" className='text-2xl inline-block mr-4 text-blue-600' />
                    {truncatedComment}
                    <Icon icon="icomoon-free:quotes-right" className='text-2xl inline-block ml-4 text-blue-400' />
                </div>
            </div>
            <div className="relative flex w-full items-end gap-5 justify-start">
                <div className='relative flex w-full items-center gap-5 justify-start'>
                    <div className="size-10 overflow-hidden rounded-full">
                        <img src={avatar} className="size-full object-cover object-center shadow" alt={name} />
                    </div>
                    <div className="text-left">
                        <p className="heading-primary text-sm font-bold">{name}</p>
                        <p className="text-sm text-body-gray">{role}</p>
                    </div>
                </div>
                <div className="linkedIn-btn">
                    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" className='text-3xl text-blue-500 hover:scale-110 cursor-pointer transition-all' />
                    </a>
                </div>
            </div>
        </div>
    );
};
