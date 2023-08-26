interface props {
    className?: string;
    image: string;
    alt: string;
}
function Technology({ className, image, alt }: props) {
    return(
        <img
            src={`/assets/technologies/${image}`}
            alt={alt}
            title={alt}
            data-tooltip-placement="top"
            className={className}
        />
    )
}

export default Technology;