export interface Feature {
    number: string,
    title: string,
    text: string
};

export interface ServiceCardImageData {
    id: number,
    to: string,
    src: string,
    alt: string,
    service: string,
    title: string,
    text: string,
    time: string,
    price: number
};

export const features: Feature[] = [
    { number: "I", title: "Sur rendez-vous", text: "Dix places, trente minutes entre chaque client. Jamais d'attente en salon." },
    { number: "II", title: "Diagnostic inclus", text: "Vingt minutes d'observation avant tout geste – matière, cuir chevelu, historique." },
    { number: "III", title: "Couleurs végétales", text: "Henné, indigo et plantes tinctoriales, formulés en atelier chaque semaine." }
];

export const cards: ServiceCardImageData[] = [
    {
        id: 1,
        to: "/prestations#balayage-lumiere",
        src: "/images/cards/balayage.webp",
        alt: "Image d'une mise en place d'une couleur",
        service: "Couleur",
        title: "Balayage Lumière",
        text: "Éclaircissement main levée et patine composée devant vous.",
        time: "3 h",
        price: 180
    },
    {
        id: 2,
        to: "/prestations#rituel-ondine",
        src: "/images/cards/soin.webp",
        alt: "Image d'un soin",
        service: "Soin",
        title: "Rituel Ondine",
        text: "Vapeur, masque botanique et massage crânien de quinze minutes.",
        time: "1 h",
        price: 65
    },
    {
        id: 3,
        to: "/prestations#coupe-ondine",
        src: "/images/cards/coupe.webp",
        alt: "Image d'une coupe de cheveux",
        service: "Coupe",
        title: "Coupe Ondine",
        text: "Diagnostic, shampooing rituel, coupe aux ciseaux et coiffage.",
        time: "1 h 15",
        price: 180
    }
]