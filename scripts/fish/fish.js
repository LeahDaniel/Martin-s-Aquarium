export const FishHTML = (fishObj) => {
    const htmlString = `<section class="fish--details-species">
    <img class="fish--details-img" src="${fishObj.image}" alt="Image of ${fishObj.name}"/>
    <div class="fish--details-species-list">
        <ul>
            <li class="fish--species">Species: ${fishObj.species}</li>    
            <li class="fish--name">Name: ${fishObj.name}</li>
            <li class="fish--length">Length: ${fishObj.length} in</li>
            <li class="fish--location">Location: ${fishObj.location}</li>
            <li class="fish--diet">Diet: ${fishObj.diet}</li>
        </ul>
    </div>
</section>`
    return htmlString
}