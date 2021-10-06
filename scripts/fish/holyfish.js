import { getFish } from "./database.js"

const fishDatabase = getFish() 

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []

    for (const fish of fishDatabase) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []

    for (const fish of fishDatabase) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let nonHoly = []

    for (const fish of fishDatabase) {
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