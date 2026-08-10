import { ShimmerElement } from "../../../components/Shimmer"

export const CarouselSkeleton = () => {
    return (
        <div className="feed-skeleton-container">
            <div className="card-layout-class">
                <ShimmerElement type="carousel" width="100%" />
            </div>
        </div>
    )
}

export const CardSkeleton = () => {
    const items = Array.from({ length: 5 }, (_, i) => i);
    return (
        <div className="feed-skeleton-container">
            <div className="card-layout-class flex flex-row gap-5">
                {items.map((key) => (
                    <ShimmerElement key={key} type="block" width="80%" height="300px" />
                ))}
            </div>
        </div>
    )
}

export const GenreSkeleton = () => {
    const items = Array.from({ length: 5 }, (_, i) => i);
    return (
        <div className="feed-skeleton-container">
            <div className="card-layout-class flex flex-row gap-5">
                {items.map((key) => (
                    <ShimmerElement key={key} type="block" width="80%" height="300px" />
                ))}
            </div>
        </div>
    )
}
