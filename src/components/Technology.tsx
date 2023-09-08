import "./Technology.css"
interface props {
    image: string;
    alt: string;
    col?: boolean;
}
function Technology({ image, alt, col = true }: props) {
    const technologyImage = (
        <img
            src={`/assets/technologies/${image}`}
            alt={alt}
            title={alt}
            data-tooltip-placement="top"
            className="technology-image"
        />
    )
    if (col) return (
        <div className="col">
            {technologyImage}
        </div>
    )
    else return (
        <>
            {technologyImage}
        </>
    )
}

export default Technology;