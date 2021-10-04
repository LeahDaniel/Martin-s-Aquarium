/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "images/Shark.jpg",
            species: "Great White Shark",
            name: "Bruce",
            length: 1000,
            location: "Bahamas",
            diet: "Nemo"
        },
        {
            image: "images/Jellyfish.jpg",
            species: "Jellyfish",
            name: "Squishy",
            length: 1,
            location: "Sydney, Australia",
            diet: "Peanut Butter"
        },
        {
            image: "images/Jellyfish.jpg",
            species: "Jellyfish",
            name: "Fish3(1)",
            length: 3,
            location: "Sydney, Australia",
            diet: "Peanut Butter"
        },
        {
            image: "images/Jellyfish.jpg",
            species: "Jellyfish",
            name: "Fish3(2)",
            length: 9,
            location: "Sydney, Australia",
            diet: "Peanut Butter"
        },
        {
            image: "images/Jellyfish.jpg",
            species: "Jellyfish",
            name: "Fish5(1)",
            length: 5,
            location: "Sydney, Australia",
            diet: "Peanut Butter"
        },
        {
            image: "images/Jellyfish.jpg",
            species: "Jellyfish",
            name: "Fish5(2)",
            length: 10,
            location: "Sydney, Australia",
            diet: "Peanut Butter"
        }
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let nonHoly = []

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) { 
            continue; 
        } else if (fish.length % 3 ===0) { 
            continue; 
        } else {
            nonHoly.push(fish)
        }
    }

    return nonHoly
}



console.log(nonHolyFish())
console.log(soldierFish())
console.log(mostHolyFish())