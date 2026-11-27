export interface Prestation {
    id: string
    name: string
    detail: string
    duration: number
    price: number | null
};

export interface PrestationCategory {
    id: string
    title: string,
    note: string,
    items: Prestation[]
};

export const categories: PrestationCategory[] = [
    {
        id: 'coupe',
        title: 'Coupe & coiffage',
        note: 'diagnostic et shampooing rituel inclus',
        items: [
            {
                id: 'coupe-ondine',
                name: 'Coupe Ondine',
                detail: 'Femme — diagnostic, coupe aux ciseaux, coiffage',
                duration: 75,
                price: 75
            },
            {
                id: 'coupe-signature',
                name: 'Coupe Signature',
                detail: 'Homme — ciseaux, contours à la tondeuse',
                duration: 45,
                price: 45
            },
            {
                id: 'coiffage-brushing',
                name: 'Coiffage & Brushing',
                detail: 'Mise en forme, boucles ou lisse',
                duration: 40,
                price: 38
            },
            {
                id: 'frange',
                name: 'Frange',
                detail: 'Retouche entre deux rendez-vous',
                duration: 15,
                price: 15
            },
        ]
    },
    {
        id: 'couleur',
        title: 'Couleur & Balayage',
        note: 'tarifs selon la longueur, devis confirmé en salon',
        items: [
            {
                id: 'balayage-lumiere',
                name: 'Balayage Lumière',
                detail: 'Main levée, patine sur mesure',
                duration: 180,
                price: 180
            },
            {
                id: 'couleur-vegetale',
                name: 'Couleur Végétale',
                detail: 'Henné, indigo, plantes tinctoriales',
                duration: 120,
                price: 110
            },
            {
                id: 'retouches-racines',
                name: 'Retouche Racine',
                detail: 'Couleur d\'entretien, patine incluse',
                duration: 90,
                price: 70
            },
            {
                id: 'patine-gloss',
                name: 'Patine & Gloss',
                detail: 'Ravive le reflet et referme la fibre',
                duration: 45,
                price: 55
            },
        ]
    },
    {
        id: 'soins',
        title: 'Soins & occasions',
        note: 'sur rendez-vous, essai possible en amont',
        items: [
            {
                id: 'rituel-ondine',
                name: 'Rituel Ondine',
                detail: 'Vapeur, masque botanique, massage crânien',
                duration: 60,
                price: 65
            },
            {
                id: 'soin-reconstructeur',
                name: 'Soin Reconstructeur',
                detail: 'Fibre abîmée ou décolorée',
                duration: 45,
                price: 48
            },
            {
                id: 'chignon-occasion',
                name: 'Chignon d\'occasion',
                detail: 'Mariage, cérémonie — essai à 60€',
                duration: 60,
                price: 95
            },
            {
                id: 'diagnostic-cuir-chevelu',
                name: 'Diagnostic du cuir chevelu',
                detail: 'Sans engagement, en salon',
                duration: 20,
                price: null
            },
        ]
    }
]
