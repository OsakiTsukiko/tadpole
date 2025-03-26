import { Seedling, Tadpole } from "../domain/user";

const Name = {
    first: [
        "Aqua", "Blooming", "Cedar",
        "Dewdrop", "Evergreen", "Fern",
        "Flora", "Garden", "Hazel", 
        "Ivy", "Jasmine", "Koi",
        "Lily", "Maple", "Mossy",
        "Nectar", "Oak", "Petal",
        "Pondside", "Rainy", "Ripple",
        "Rosewood", "Sprout", "Sunflower",
        "Thistle", "Tulip", "Verdant",
        "Waterlily", "Willow", "Zen",
    ],
    second: [
        "Arbor", "Basin", "Bloom",
        "Brook", "Canopy", "Cascade",
        "Cove", "Creek", "Fernery",
        "Fountain", "Frond", "Garden",
        "Glade", "Grove", "Haven",
        "Lagoon", "Meadow", "Oasis",
        "Orchid", "Pathway", "Pavilion",
        "Pond", "Reflection", "Retreat",
        "Ripple", "Sanctuary", "Stream",
        "Terrace", "Trellis", "Woodland",
    ]
}

function randomName(): { name: string, first: string, second: string } {
    const first = Name.first[Math.floor(Math.random() * Name.first.length)];
    const second = Name.second[Math.floor(Math.random() * Name.second.length)];
    return { name: (first + " " + second), first, second };
}

export function makeRandomSeedling(): Seedling {
    const name = randomName();
    return new Seedling(
        name.name,
        `A very ${name.first} Seedling! 🌱`,
        [],
        (new Date()).getTime()
    );
    // TODO: add sprinkles
}

export function makeRandomTadpole(): Tadpole {
    const name = randomName();
    const tadpole = new Tadpole(
        `${name.first.toLowerCase()}${name.second.toLowerCase()}`,
        `${name.first.toLowerCase()}@${name.second.toLowerCase()}.com`,
        `${name.first.toLowerCase()}${name.second.toLowerCase()}`,
        `Hello! I am ${name.first} ${name.second} and I love writing code!`,
        (new Date()).getTime() + ( - 1000 * 3600 * 24 * 10 + Math.floor(Math.random() * 1000 * 3600 * 24 * 10) ), // 10 days delta
    );

    for (let i = 0; i < 30; i += 1) {
        while (!tadpole.addSeedling(makeRandomSeedling())) {}
    }

    return tadpole;
}