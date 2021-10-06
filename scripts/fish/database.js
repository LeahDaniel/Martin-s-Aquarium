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

