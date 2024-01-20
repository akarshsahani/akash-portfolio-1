'use client';

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Required Modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Jenifer',
        job: 'Chief',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Lopez Chris',
        job: 'CEO',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Hamilton',
        job: 'C00',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Lucifer',
        job: 'APP Developer',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Mark Steve',
        job: 'Chief',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Stork Gem',
        job: 'Chief',
        review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi. Fuga necessitatibus qui, quam deserunt, ducimus non assumenda aspernatur quis, fugit voluptates aut facere possimus.'
    },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">
                Reviews
            </h2>
            {/* Slider */}
            <Swiper
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            className="h-[350px]"
            >
                {reviewsData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader className='p-0' mb-10>
                                    <div className="flex items-center gap-x-4">
                                        {/* Image */}
                                        <Image 
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=""
                                        priority
                                        />
                                        {/* Name */}
                                        <div className="flex flex-col">
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews