// Returns var with three random colors/numbers 
function randomColors() {
    let colors = ["1W", "2U", "3B", "4R", "5G"];
    let groups = [];
    // Loop for adding random colors to groups until the length is 3
    for (let i = 0; groups.length < 3; i++) {
        let grabColor = colors[Math.floor(Math.random() * 5)];
        if (groups.includes(grabColor) === false) {
            groups.push(grabColor);
        }
    }
    // Sorts the colors with the associated numbers for easy reading
    groups = groups.sort();
    groups = groups.join("");
    return groups;
}

let setGroup = randomColors();
// Var for storing the randomly selected color combo's properties
let clanNameAndColors = [];
// Determines what section, clan, and color names are associated with each color groups
switch  (setGroup)   {
    case "1W2U3B": 
        clanNameAndColors.push("Esper", "Shard", "White, Blue, and Black");
        break;
    case "1W2U5G":
        clanNameAndColors.push("Bant", "Shard", "Green, White, and Blue");
        break;
    case "2U3B4R":
        clanNameAndColors.push("Grixis", "Shard", "Blue, Black, and Red");
        break;
    case "3B4R5G":
        clanNameAndColors.push("Jund", "Shard", "Black, Red, and Green");
        break;
    case "1W4R5G":
        clanNameAndColors.push("Naya", "Shard", "Red, Green, and White");
        break;
    case "1W3B5G":
        clanNameAndColors.push("Abzan", "Wedge", "White, Black, and Green");
        break;
    case "1W2U4R":
        clanNameAndColors.push("Jeskai", "Wedge", "Blue, Red, and White");
        break;
    case "2U3B5G":
        clanNameAndColors.push("Sultai", "Wedge", "Black, Green, and Blue");
        break;
    case "1W3B4R":
        clanNameAndColors.push("Mardu", "Wedge", "Red, White, and Black");
        break;
    case "2U4R5G":
        clanNameAndColors.push("Temur", "Wedge", "Green, Blue, and Red");
        break;
    default:
        console.log("There is not enough colors!")
}

const button = document.getElementById('magicClick');
const messageBox = document.getElementById('generatedMessage');
const message = `Your ${clanNameAndColors[1]} name is ${clanNameAndColors[0]}!  
    Your ${clanNameAndColors[1]}'s colors are ${clanNameAndColors[2]}!`

    function clanAndColors()    {
    messageBox.innerHTML = message;
}

button.addEventListener("click", clanAndColors);