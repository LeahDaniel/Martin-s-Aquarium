// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
import {mostHolyFish } from './holyfish.js'
import {soldierFish} from './holyfish.js'
import {nonHolyFish} from './holyfish.js'
import { FishHTML } from './fish.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish();
    const holyFishes = mostHolyFish();
    const soldierFishes = soldierFish();
    const nonHolyFishes = nonHolyFish();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish--details">';

    // Create HTML representations of each fish here
    
    const HTMLRepresentation = (fishLengthCategory) => {
        for (const fish of fishLengthCategory) {
            htmlString += FishHTML(fish)
        } 
    }
    
    HTMLRepresentation(holyFishes);
    HTMLRepresentation(soldierFishes);
    HTMLRepresentation(nonHolyFishes);


    htmlString += `</article>`;

    return htmlString
}