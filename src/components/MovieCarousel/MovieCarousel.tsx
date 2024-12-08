import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';


const MovieCarousel = () => {
    const Movies: MovieCardType[] = [
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "1",
            rating: 8.5,
            type: "ACtion/Thriller"
        },
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "2",
            rating: 8.5,
            type: "ACtion/Thriller"
        },
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "3",
            rating: 8.5,
            type: "ACtion/Thriller"
        },
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "4",
            rating: 8.5,
            type: "ACtion/Thriller"
        },
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "5",
            rating: 8.5,
            type: "ACtion/Thriller"
        },
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
            _id: "6",
            rating: 8.5,
            type: "ACtion/Thriller"
        }
    ];
    return (
        <div className='sliderout'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    Movies.map((Movie) => {
                        return (
                            <SwiperSlide key={Movie._id}>
                                <MovieCard {
                                    ...Movie
                                }

                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default MovieCarousel
