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
    }, [myRef, setHeight])

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
                shortDesc="A logistics administration application developed for a tourism company in Israel. The app simplifies the process of managing tour groups and automatically generates quotations based on saved supplier prices."
                description='"VMW Tours - Internal" marked the beginning of my programming career. Created for a tourism company in Israel, this project involved developing a full-stack logistics administration application. As the sole developer, I designed, developed, and deployed the app using Next.js for the front-end and Hasura and GraphQL for the back-end. My focus was on creating a user-friendly interface that could handle complex tour management tasks and automate quotation generation based on supplier prices.'
                responsibilities="As the only developer, I handled the full application lifecycle, including designing, coding, and deploying. I created a user-friendly interface and implemented logic for automating quotation generation."
                tags={["Full Stack", "Next.js", "Hasura", "GraphQL", "MUI"]}
                windowHeight={windowHeight} windowWidth={windowWidth}

            />
            <Footprints />
            <WorkSingle
                left={false}
                imgSrc="/caveworld_img.png"
                title="CaveWorld website"
                shortDesc="Deployed and maintained the primary website for CaveWorld, ensuring continuous updates and feature additions for new releases."
                description={`The "CaveWorld website" serves as the primary digital gateway to CaveWorld—a distinctive gaming universe where players battle, craft, explore, and trade in their journey to emerge as the mightiest caveman or tribe. In this captivating backdrop, I had the privilege of shaping the website's online presence, deploying and ensuring its continuous update with features that align with the game's evolving narrative.`}
                responsibilities="Managed the deployment and routine maintenance of the CaveWorld website. Utilized Next.js for front-end development tasks and integrated new features with Prismic for content management, ensuring the site always echoed the game's immersive experience."
                url="https://www.caveworld.com"
                tags={["Front-End", "Next.js", "Prismic"]}
                windowHeight={windowHeight} windowWidth={windowWidth}
            />
            <Footprints delay={1} />
            <WorkSingle
                left={true}
                imgSrc="/the-search.png"
                title="The Search - CaveWorld"
                shortDesc="Developed a smart contract for the CaveWorld game, enabling the upgrading, staking, and minting of NFTs, with integration of Metaplex Protocol's new Fusion feature."
                description={`"The Search - CaveWorld" is distinguished by its smart contract tailored for the CaveWorld game dynamics. This contract allows players and users to upgrade existing NFTs, stake assets, and mint new NFTs. Pioneering in its approach, the project is one of the first to leverage Metaplex Protocol's new "Fusion" feature, which introduces enhanced composability around NFT ownership. With a foundation in Rust and integration via the Solana-Web3.js framework, the project stands as a testament to innovative blockchain application.`}
                responsibilities={`Collaboratively designed and developed the smart contract, integrated the Metaplex Protocol's "Fusion" feature, managed NFT functionalities like upgrading, staking, and minting, and worked extensively with Rust and Solana-Web3.js for seamless development and integration.`}
                url="https://the-search.caveworld.com"
                tags={["Back-End", "Rust", "Solana-Web3.js", "Metaplex Protocol", "Fusion"]}
                windowHeight={windowHeight} windowWidth={windowWidth}
            />
            <Footprints delay={2} />
            <WorkSingle
                left={false}
                imgSrc="/beamo.png"
                title="Shared Wallet - Beamo"
                shortDesc="Developed a smart contract for Beamo that facilitates secure money transfers via crypto. It uniquely features dual-management, allowing both the client and Beamo to oversee wallet activity for heightened security."
                description={`For Beamo—a progressive financial and money transference platform harnessing cryptocurrency—I had the opportunity to design the "Shared Wallet." This wasn't just any smart contract; it was one meticulously devised to not only create and manage client wallets but also bolster security. In the face of threats like hacks or unauthorized accesses, Beamo, as the manager, can swiftly halt activities, effectively safeguarding client assets. The project's crown jewel is its pioneering system enabling one wallet to be jointly managed by two distinct entities—the client and Beamo. This dual-management setup acts as a formidable barrier against potential security breaches.`}
                responsibilities='Designed and implemented the smart contract for Beamo, emphasizing a dual-management system for wallets. Integrated security protocols to allow Beamo to counteract unauthorized wallet activities and ensure safety in financial transactions.'
                tags={["Back-End", "Rust", "Solana-Web3.js", "Security Engineering"]}
                windowHeight={windowHeight} windowWidth={windowWidth}
            />
        </div>
    )
}