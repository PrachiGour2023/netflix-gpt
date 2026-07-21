"use client";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";

export function HoverMovieCard({ data }: any) {
    return (
        <div className="relative flex flex-wrap items-center justify-center gap-2">
            {
                data.map((item: any) => {
                    return (
                        <DirectionAwareHover imageUrl={item.movie} key={item.id}>
                            <p className="font-bold text-lg">{item.name}</p>
                            {/* <p className="font-normal text-sm">$1299 / night</p> */}
                        </DirectionAwareHover>
                    )
                })
            }

        </div>
    );
}
