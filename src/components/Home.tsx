import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Home.scss';
import HeroImgn from '../assets/images/hero-img_n.png';
import HeroImgw from '../assets/images/hero-img_w.png';
import { TestimonialItem } from './TestimonialItem';

const testimonials = [
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQH7ktlJ0ts1Nw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723323300881?e=1730332800&v=beta&t=QzyP6JrpQ7TJuUKDK87BHfUv12RS8-6Zc630E-GZVB0',
        comment: 'An exceptional software engineer who consistently goes above and beyond. His enthusiasm, confidence, and active contributions make him an invaluable asset to any team. Sadith’s dedication to helping others and his positive approach to work set him apart. Whether it’s solving complex problems or collaborating with colleagues, he excels. I had the privilege of working with Sadith at BT and I wholeheartedly recommend him for any software engineering role.',
        name: 'Ellen McMahon',
        role: 'Product Manager at BT',
        linkedinURL: 'https://www.linkedin.com/in/ellenrosemcmahon/',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C5603AQGXDOtfPC4hXQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1629972282113?e=1730332800&v=beta&t=HfsQ998Im3TSZeQlt3pIXb_pvDRnGTgiDdoYFh5_Gf4',
        comment: 'I worked directly with Sadith for a project in BT. His exceptional skills in creating intuitive and visually appealing user interfaces have significantly improved our project. Sadith is a true team player, strong addition to any team he would work for and I highly recommend him as a UX/UI developer.',
        name: 'Purna Pushkal Meruga',
        role: '.Net Core | Angular | CRO',
        linkedinURL: 'https://www.linkedin.com/in/pushkalmeruga',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C5603AQEmxiOnIniAdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517466344054?e=1730332800&v=beta&t=7FwY0ZjJRAwbuc1xMrVR2avrxQc2yWdd6PAOn6CGuw8',
        comment: "I can't recommend Sadith enough, he his an absolute rock star with exceptional skills and a contagious passion for achieving remarkable results. Thank you Sadith, I hope our paths cross again in the future.",
        name: 'Luke Towers',
        role: 'Product Owner at BT Enterprise',
        linkedinURL: 'https://www.linkedin.com/in/luke-towers-5988a447',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQFiSQqdQxcXxA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706543126716?e=1730332800&v=beta&t=xO7YOHRuk9rXKY8VAH-qaMAFBJLqOZTlesT6iGMuGSY',
        comment: 'Sadith has been a key player in developing BT.com for business, his front end UX /UI knowledge is vast and his ability to proactively provide solutions and been key, to build with agility, a highly usable portal.',
        name: 'Neil Cooks',
        role: 'Senior Digital Delivery Manager | Project Manager',
        linkedinURL: 'https://www.linkedin.com/in/neil-cooks-06744b32',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D5603AQEmNFZfImumnA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713871416769?e=1730332800&v=beta&t=oi94Ra7TNRq-MMqNffKYqChX5sBs-jYb5FHX3FYVhp8',
        comment: "I am delighted to recommend Sadith, a talented website developer who has been instrumental in helping our company Amadeus establish a strong online presence with websites for hotels. Sadith takes a proactive approach to problem-solving and always goes above and beyond to ensure that his projects are functional, user-friendly, and visually appealing. Overall, I highly recommend Sadith for any website development projects. His expertise, professionalism, and commitment to excellence would make him an asset to any team.",
        name: 'Irfan Iqbal',
        role: 'Project Manager at Coles',
        linkedinURL: 'https://www.linkedin.com/in/irfaniqb',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQFbdhCJNGBA6g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1538663714673?e=1730332800&v=beta&t=3C6MXrxuPDcbbg6l5Djy4Ub5fnNYx5MchLpdB5fN4ic',
        comment: 'Sadith is a highly experienced front end developer, with a great work ethic. He has been a valued member of our development team and a pleasure to work with.',
        name: 'Sara Thomas',
        role: 'Identity Product Manager - BT Business',
        linkedinURL: 'https://www.linkedin.com/in/sara-thomas-6790ab24',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C5603AQFiNBrnukYFiA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1604410386303?e=1730332800&v=beta&t=oKF2TRYm6jgGH0D0Euc5XZa0ac2IT7HnZmt80mVaQ2o',
        comment: "Working with Sadith at BT has been a pleasure. He has a very strong knowledge of frontend design and development techniques and is extremely competent in his field. Working along side him, as a UX /UI designer, was easy and intuitive. He explains the technology and development process very well and is always happy to discuss and work out design and front end issues. He has a strong understanding of accessibility and is never afraid to suggest improvements to design, which prompted a very collaborative way of working. I really enjoyed working with Sadith and have learnt a lot too. I can highlight recommend him as a front end developer, an expert in his field.",
        name: 'Charlotte Barnett',
        role: 'UX, UI, IA Strategist. Design discovery & delivery lead.',
        linkedinURL: 'https://www.linkedin.com/in/charlotte-barnett-57482b1b',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4E35AQFiR3RZqFjk8Q/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1673262290673?e=1725696000&v=beta&t=bc5i4KZEOCecHKgQXkkeQ7iE6UGuX3W9NuOcyS6-C6Y',
        comment: 'I had the pleasure of working with Sadith. He is highly skilled, attentive to detail, always finding solutions and has great communication skills. He was reliable and easy to work with. Would highly recommend him.',
        name: 'Gitana Kausylaite',
        role: 'Senior Product UX/UI designer',
        linkedinURL: 'https://www.linkedin.com/in/gitanakausylaite',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQGdjvNKloewpg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516965744343?e=1730332800&v=beta&t=MbUCdJRsfUrvtDoTi_BY8WIZ5d-etlT-VjLWXD1a638',
        comment: 'Sadith is an experienced and talented UI specialist. His expertise in UI has helped the project we worked together immensely. He easily adjusts to any situation or business needs and is always willing to go the extra mile to achieve project deliverables. I want to work with him again if I get a chance.',
        name: 'Savinpaul S',
        role: 'Senior Frontend developer',
        linkedinURL: 'https://www.linkedin.com/in/savinpaul-s-02218722',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQEHkAPAM7sC9A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516803846348?e=1730332800&v=beta&t=rkY6TVjIEv101KbQiIYxSIQcaU1PQeBVnZ2XlX1n4MM',
        comment: "Sadith is one of the best among all people I have ever met and is a loyal colleague, who understands complex matters. Sadith is a strong and goal-oriented team player; with every problem there was a solution. He’s always willing to lend a hand to anyone who needs it. Watching him adapt to our ever-changing business landscape was an inspiration! His ability to overcome challenges with a smile made him stand out as a cut above the rest! Any company would be lucky to have Sadith on their payroll.",
        name: 'Nayana Kantha Karunarathne',
        role: 'Associate Tech Lead | Full Stack/Front end development',
        linkedinURL: 'https://www.linkedin.com/in/nayana-kantha-karunarathne-0411b819',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C5603AQEhjVkcEHmsPg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1591799953149?e=1730332800&v=beta&t=6ClVcq9TBQ2RZTBbp6EcjmWm36wTDwZbuYvT4j8BI3s',
        comment: 'Sadith worked as an UI specialist under me when I was working with British Telecommunications, UK. He is excellent to work with. He is higly motivated and a great team player. He understands the project needs deeply and delivers high quality deliverables on time. It is my pleasure to recommend Sadith. Looking forward to working with him again.',
        name: 'Sai Manoj Kumar Kommuru',
        role: 'Full stack developer | CX Practitioner | Solution Architecture',
        linkedinURL: 'https://www.linkedin.com/in/sainmaoj?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BOnTBg8fRS16e%2BoLLfv9kCQ%3D%3D',
    }

];

export const Home: React.FC = () => {
    // State to control which text is visible
    const [currentText, setCurrentText] = useState(0); // Start with the first text
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of texts to display
    const texts = ["Frontend", "User Interface", "Fullstack Web"];

    // UseEffect to change the text every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => (prevText + 1) % texts.length); // Loop through the texts
        }, 3000); // Change text every 2.5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Animation variants for text fade in and out
    const textVariants = {
        initial: { opacity: 0, y: 20 }, // Start with text off-screen and invisible
        animate: { opacity: 1, y: 0 }, // Fade in and move to position
        exit: { opacity: 0, y: -20 }, // Fade out and move up
    };

    // Function to handle index change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const animationVariants = {
    enter: { opacity: 0},
    center: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

    return (
        <div className="relative px-10 pt-[5rem] min-h-[100vh] box-border">
            <div className="relative flex w-full items-center justify-between">
                <div className=" absolute top-0 bottom-0 left-0s w-[70%] text-center pl-[2rem] pt-4">
                    <div className='text-[4rem] font-bold w-full leading-tight uppercase mt-10'>
                        <span className='flex items-center justify-end'>
                            <span className='pr-4 kalam-regular translate-y-[10px] mb-3'>A</span>
                            <div className='w-[800px] inline-block overflow-y-hidden h-[5rem] relative mb-3'>
                                {/* Animate only the current text */}
                                {texts.map((text, index) => (
                                    <motion.span
                                        key={index}
                                        className='txt-gradient text-[5rem] kalam-bold absolute left-0'
                                        variants={textVariants}
                                        initial="initial"
                                        animate={index === currentText ? "animate" : "initial"}
                                        exit="exit"
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                    >
                                        {text}
                                    </motion.span>
                                ))}
                            </div>
                        </span>
                        <span className="block">
                            <span className='kalam-regular'>Developer</span>
                            <span className='pl-4 kalam-regular'>Who Loves</span>
                        </span>
                        <span className='block kalam-regular'>Design & Code.</span>
                    </div>
                    <div className="testimonial-wrp w-full flex justify-center mt-10 relative ">
                        {testimonials.map((testimonial, index) => (
                            <AnimatePresence>
                            {testimonials.map((testimonial, index) =>
                              index === currentIndex ? (
                                <motion.div
                                  key={index}
                                  variants={animationVariants}
                                  initial="enter"
                                  animate="center"
                                  exit="exit"
                                >
                                    <div className='absolute left-[50%] translate-x-[-50%]'>
                                  <TestimonialItem
                                    avatar={testimonial.avatar}
                                    comment={testimonial.comment}
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    linkedinURL={testimonial.linkedinURL}
                                  />
                                  </div>
                                </motion.div>
                              ) : null
                            )}
                          </AnimatePresence>
                        ))}
                    </div>
                </div>
                <div className=" absolute top-0 bottom-0 right-0  w-[30%] text-center pt-4 z-[1]">
                    <img className='hero-img-light absolute right-0 max-w-[600px] w-[520px] top-0' src={HeroImgn} alt="" />
                    <img className='hero-img-dark absolute right-0 max-w-[600px] w-[520px] top-0' src={HeroImgw} alt="" />
                </div>
            </div>
        </div>
    );
};
