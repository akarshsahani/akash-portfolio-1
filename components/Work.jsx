'use client';

import Link from "next/link";
import { Button } from "./ui/button";

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Required Modules
import { Pagination } from 'swiper/modules';

//Components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';

const projectData = [
    {
        image: '/work/3.png',
        category: 'gsap',
        name: 'Gain Strom',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Food Website',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/2.png',
        category: 'gsap',
        name: 'Gym & Fitness',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/1.png',
        category: 'CSS Animation Effects',
        name: 'Particules Website',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Canteen Website',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/2.png',
        category: 'gsap',
        name: 'Little SPA',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/1.png',
        category: 'CSS Animation Effects',
        name: 'UX Website',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/3.png',
        category: 'gsap',
        name: 'Light Website',
        description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
        link: '/',
        codepen: '/',
    },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/** Text **/}
            <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
                <h2 className="section-title mb-4">Recent Projects</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quod.</p>
                <Link href='/projects'>
                    <Button>All projects</Button>
                </Link>
            </div>
            {/** Slider **/}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                className="h-[480px]"
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                >
                    {/* Show Only the First 4 Projects for the slides */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work