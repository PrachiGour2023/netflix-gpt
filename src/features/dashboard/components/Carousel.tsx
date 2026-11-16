"use client";

import { useSelector } from "react-redux";
import { Carousel } from "../../../components/ui/carousel"
import type { RootState } from "../../../redux/store";
export function CarouselDemo() {

    const indianMovies = useSelector((state: RootState) => state.movie.indianMovies);

    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={indianMovies} />
        </div>
    );
}
