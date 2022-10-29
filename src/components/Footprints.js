
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
        animationDelay: delay ? "3s" : 0,
        opacity
    }
    const styleTwo = {
        transform: transformLeft,
        animationDelay: delay ? "3.75s" : "0.75s",
        opacity
    }
    const styleThree = {
        transform: transformRight,
        animationDelay: delay ? "4.5s" : "1.5s",
        opacity
    }
    const styleFour = {
        transform: transformLeft,
        animationDelay: delay ? "5.25s" : "2.25s",
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