import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";

export function HoverMovieCard({ data }: any) {
    return (
        <div className="flex gap-4 overflow-x-auto no-scrollbar [scrollbar-width:none]">
            {data.map((item: any) => (
                <div
                    key={item.id}>
                    <DirectionAwareHover
                        imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    >
                        <p className="font-bold text-lg">{item.title ?? item.original_name}</p>
                        <p className="font-sans text-xs">{item.overview}</p>
                    </DirectionAwareHover>
                </div>
            ))}
        </div>
    );
}