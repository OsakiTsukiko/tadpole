export class Seedling {
    // basically repositories (but fancyer)
    name: string;
    description: string;

    sprinkles: string[];
    creation_date: number;

    is_public: boolean = false;

    constructor (
        name: string,
        description: string,
        sprinkles: string[] = [],
        creation_date: number,
    ) {
        this.name = name;
        this.description = description;
        this.sprinkles = sprinkles;
        this.creation_date = creation_date;
    }

    getSprinkleCount(): number {
        return this.sprinkles.length;
    }
}

export class Tadpole {
    // basically users (but fancyer)
    username: string;
    email: string;
    password: string; // TODO: use hash
    description: string;

    reg_date: number;

    seedlings: Seedling[] = [];

    constructor (
        username: string,
        email: string,
        password: string,
        description: string = "",
        reg_date: number,
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.description = description;

        this.reg_date = reg_date;
    }

    addSeedling(seedling: Seedling): boolean {
        if (this.hasSeedling(seedling.name)) return false;
        this.seedlings.push(seedling);
        return true;
    }

    hasSeedling(name: string): boolean {
        for (let r of this.seedlings) {
            if (r.name == name) return true;
        }
        return false;
    }
}