import { useRef, useEffect } from "react"
import Footprints from "./Footprints";
import WorkSingle from "./WorkSingle";

export default function Work({setHeight, windowHeight, windowWidth}) {
    const myRef = useRef(null);

    useEffect(() => {
        if (myRef.current) {
            const timeoutId = setTimeout(() => {
                setHeight(myRef.current.offsetHeight)
                // console.log(`Work section ${myRef.current.offsetHeight}`)
            }, 510);
            
            return () => clearTimeout(timeoutId)
        }
    }, [myRef])

    return (
        <div ref={myRef} style={{ padding: "6rem 0 6rem" }}>
            <div style={{ margin: '0 0 1rem', fontSize: '2.5rem', fontFamily: "'Roboto', sans-serif" }}>My Experience</div>
            <div style={{ marginBottom: '5rem', fontSize: '1.1rem', fontFamily: "'Open Sans', sans-serif", letterSpacing: '0.5px' }}>
                Explore my journey through various projects. Each one has shaped me into the developer I am today.
                </div>
            <WorkSingle
                left={true}
                imgSrc="/vmwtours-img.png"
                title="VMW Tours - Internal"
                paragraph="An internal logistics administration application for a tourism company in Israel, which I engineered, developed and deployed."
                description="An internal logistics administration application for a tourism company in Israel, which I engineered, developed and deployed."
                tags={["Full Stack", "Next.js", "Hasura", "GraphQL", "MUI"]}
                windowHeight={windowHeight} windowWidth={windowWidth}

            />
            <Footprints />
            <WorkSingle
                left={false}
                imgSrc="/caveworld_img.png"
                title="CaveWorld website"
                paragraph="The main website for Caveworld, which I was responsible with deploying and upkeeping."
                description="The main website for Caveworld, which I was responsible with deploying and upkeeping."
                url="https://www.caveworld.com"
                tags={["Front-End", "Next.js", "Prismic"]}
                windowHeight={windowHeight} windowWidth={windowWidth}
            />
            <Footprints delay={true} />
            <WorkSingle
                left={true}
                imgSrc="/caveworld_img.png"
                title="The Search - CaveWorld"
                paragraph="A smart contract for upgrading, stacking and minting NFTs for the CaveWorld game."
                description="A smart contract for upgrading, stacking and minting NFTs for the CaveWorld game."
                url="https://the-search.caveworld.com"
                tags={["Back-End", "Rust", "Solana-Web3.js", "Metaplex Protocol"]}
                windowHeight={windowHeight} windowWidth={windowWidth}
            />
        </div>
    )
}