const { isResSent } = require("next/dist/next-server/lib/utils")

const aerloab = {
    position: 'Ssr Fullstack Developer',
    title: 'Aerolab',
    description: `4 years of experience working as a Fullstack 
        developer. I been working with finance products,
        e-commerces, know your customer services and
        realtime dashboard base on user analytics.`,
    color: '#FB9600',
    textColor: '#FFF',
}
const mercadolibre = {
    position: 'Ssr Fullstack Developer',
    title: 'Mercado libre',
    description: `4 years of experience working as a Fullstack 
        developer. I been working with finance products,
        e-commerces, know your customer services and
        realtime dashboard base on user analytics.`,
    color: '#FAF00F',
    textColor: '#565151',
}

const mural = {
    position: 'Sr Fullstack Developer',
    title: 'Mural',
    description: `4 years of experience working as a Fullstack 
        developer. I been working with finance products,
        e-commerces, know your customer services and
        realtime dashboard base on user analytics.`,
    color: '#F25773',
    textColor: '#FFF',
}

const globant = {
    position: 'Frontend Developer',
    title: 'Globant',
    description: `4 years of experience working as a Fullstack 
        developer. I been working with finance products,
        e-commerces, know your customer services and
        realtime dashboard base on user analytics.`,
    color: '#00D315',
    gradient: 'linear-gradient(90deg, rgba(33,210,28,1) 25%, rgba(241,245,242,1) 35%, rgba(33,210,28,1) 47%);',
    textColor: '#FFF',
}

// Sections
const sections = [
    {
        'label': 'Jobs',
        'url': 'portfolio'
    },
    {
        'label': 'Home',
        'url': 'home'
    },
    {
        'label': 'Academy',
        'url': 'academy'
    }
]

const career = {
    'label': 'Career',
    'url': 'portfolio'    
}

const home = {
    'label': 'Home',
    'url': 'home'
}

const experiments = {
    'label': 'Experiments',
    'url': 'experiments'
}

const data = {
    positions: [
        globant,
        aerloab,
        mercadolibre,
        mural,
    ],
    sections: [
        home,
        career,
        experiments,
    ]
}

module.exports = data;