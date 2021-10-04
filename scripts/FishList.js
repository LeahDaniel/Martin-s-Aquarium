// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
import {mostHolyFish } from './database.js'
import {soldierFish} from './database.js'
import {nonHolyFish} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish();
    const holyFishes = mostHolyFish();
    const soldierFishes = soldierFish();
    const nonHolyFishes = nonHolyFish();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish--details">'

    // Create HTML representations of each fish here
    for (const fish of holyFishes) {
        htmlString += 
        `<section class="fish--details-species">
            <img class="fish--details-img" src="${fish.image}" alt="Image of ${fish.name}"/>
            <div class="fish--details-species-list">
                <ul>
                    <li class="fish--species">Species: ${fish.species}</li>    
                    <li class="fish--name">Name: ${fish.name}</li>
                    <li class="fish--length">Length: ${fish.length} in</li>
                    <li class="fish--location">Location: ${fish.location}</li>
                    <li class="fish--diet">Diet: ${fish.diet}</li>
                </ul>
            </div>
        </section>`
    }
    for (const fish of soldierFishes) {
        htmlString += 
        `<section class="fish--details-species">
            <img class="fish--details-img" src="${fish.image}" alt="Image of ${fish.name}"/>
            <div class="fish--details-species-list">
                <ul>
                    <li class="fish--species">Species: ${fish.species}</li>    
                    <li class="fish--name">Name: ${fish.name}</li>
                    <li class="fish--length">Length: ${fish.length} in</li>
                    <li class="fish--location">Location: ${fish.location}</li>
                    <li class="fish--diet">Diet: ${fish.diet}</li>
                </ul>
            </div>
        </section>`
    }
    for (const fish of nonHolyFishes) {
        htmlString += 
        `<section class="fish--details-species">
            <img class="fish--details-img" src="${fish.image}" alt="Image of ${fish.name}"/>
            <div class="fish--details-species-list">
                <ul>
                    <li class="fish--species">Species: ${fish.species}</li>    
                    <li class="fish--name">Name: ${fish.name}</li>
                    <li class="fish--length">Length: ${fish.length} in</li>
                    <li class="fish--location">Location: ${fish.location}</li>
                    <li class="fish--diet">Diet: ${fish.diet}</li>
                </ul>
            </div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}