import React from 'react'
import Card from "../components/CardTemplate"
const Blogs = () => {
    return (
        <>
            <Card
            link="/HistoryOfCS"
            title="History of Computer Science"
            description="History of Computer Science Computing Disciplines, 5 main computing disciples, Careers and Roles in Computing"
            button="learn more"
            />
            <Card
            link="/ISCD"
            title="Information System: Concepts and Definitions"
            description="lorem ipsum sfasdfgsdagg"
            button="learn more"
            />
            <Card
            link="/UsesOfComputerSystem"
            title="Uses of Computer System"
            description="lorem ipsum sfasdfgsdagg"
            button="learn more"
            />
            <Card
            link="/NumberSystem"
            title="Number System"
            description="A system of writing to express numbers."
            button="learn more"
            />
            <Card
            link="/ComputerComponentsAndOSs"
            title="Computer Components & Operating Systems"
            description="lorem ipsum sfasdfgsdagg"
            button="learn more"
            />
        </>
    )

}

export default Blogs