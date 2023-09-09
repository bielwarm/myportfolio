
export default function Footprints({delay}) {

    const styleParent = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px"
    }

    const opacity = 0;
    const transformRight = "rotate(0.515turn) translate(7px)";
    const transformLeft = "rotate(0.485turn) translate(-7px)";

    const styleOne = {
        transform: transformRight,
        animationDelay: delay ? `${delay * 3}s` : 0,
        animationDuration: '9s',
        opacity
    }
    const styleTwo = {
        transform: transformLeft,
        animationDelay: delay ? `${delay * 3}.75s` : "0.75s",
        animationDuration: '9s',
        opacity
    }
    const styleThree = {
        transform: transformRight,
        animationDelay: delay ? `${(delay * 3) + 1}.5s` : "1.5s",
        animationDuration: '9s',
        opacity
    }
    const styleFour = {
        transform: transformLeft,
        animationDelay: delay ? `${(delay * 3) + 2}.25s` : "2.25s",
        animationDuration: '9s',
        opacity
    }

    return (
        <div style={styleParent}>
            <img width="20px" className="fadeInOut" style={styleOne} src="/footprint.svg" alt="footprint" />
            <img width="20px" className="fadeInOut" style={styleTwo} src="/footprint.svg" alt="footprint" />
            <img width="20px" className="fadeInOut" style={styleThree} src="/footprint.svg" alt="footprint" />
            <img width="20px" className="fadeInOut" style={styleFour} src="/footprint.svg" alt="footprint" />
        </div>
    )
}