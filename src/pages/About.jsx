import DropDownV2 from "../components/DropDownV2.jsx";
import Banner from "../components/Banner.jsx";
import "../styles/pages/about/About.scss";

const About = () => {

    const dropdownData = [
        {
            title: "Fiabilité",
            content:
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
        },
        {
            title: "Respect",
            content:
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            title: "Service",
            content:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            title: "Responsabilité",
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];


    return (
        <main className="container">
            <Banner/>
            <section>
                <article className="dropdown-about-container">
            {dropdownData.map((dropdown, index) => (
                <DropDownV2 key={index} title={dropdown.title} content={dropdown.content} />
            ))}
                </article>
            </section>
        </main>
    )
}

export default About;