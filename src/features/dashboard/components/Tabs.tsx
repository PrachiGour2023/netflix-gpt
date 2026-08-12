import { Tabs } from "../../../components/ui/tabs";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { HoverMovieCard } from "./HoverCard";

export function TabsDemo() {

    const movieList = useSelector((state: RootState) => state.movie)
    

    const tab = movieList.movieGenreList.map((item: any) => (
        {
            id: item.id,
            title: item.name,
            value: item.name.toLowerCase(),
            content: (
                <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-900">
                    <p>{item.name}</p>
                    <HoverMovieCard data={item.movies} />
                </div>
            ),
        }
    ))

    return (
        <div className="h-screen md:h-[40rem] [perspective:1000px] b flex flex-col mx-auto w-full  items-start justify-start">
            <Tabs tabs={tab} />
        </div>
    );
}