import Footprints from "./Footprints";
import WorkSingle from "./WorkSingle";

export default function Work() {

    return (
        <div>
            <WorkSingle
                left={true}
                imgSrc="/vmwtours-img.png"
                title="VMW Tours - Internal"
                paragraph="The complete development of the internal managing (solutions) application for a tourism company in Israel."
                description="The complete development of the internal managing (solutions) application for a tourism company in Israel."
                tags={["Full Stack", "Next.js", "Hasura", "GraphQL", "MUI"]}
                
            />
            <Footprints />
            <WorkSingle
                left={false}
                imgSrc="/caveworld_img.png"
                title="CaveWorld website"
                paragraph="The upkeeping of the website for Caveworld."
                description="The upkeeping of the website for Caveworld."
                url="https://www.caveworld.com"
                tags={["Front-End", "Next.js", "Prismic"]}
            />
            <Footprints delay={true} />
            <WorkSingle
                left={true}
                imgSrc="/caveworld_img.png"
                title="CaveWorld game"
                paragraph="The backend game functions for the Caveworld game."
                description="The backend game functions for the Caveworld game."
                url="https://www.caveworld.com"
                tags={["Back-End", "Rust", "Solana-Web3.js", "Metaplex Protocol"]}
            />
        </div>
    )
}