document.addEventListener('DOMContentLoaded', () => {
    
    const characters = [
        "A giggling goblin",
        "A sleepy sloth",
        "A sleepy sloth with glasses",
        "A stretching sloth",
        "A cozy sloth in pajamas",
        "A dancing dinosaur",
        "A friendly monster",
        "A mischievous fairy",
        "A brave knight",
        "A curious astronaut",
        "A talking owl",
        "A talking cat",
        "A talking kitten",
        "A hula-hooping kitten",
        "A singing chicken",
        "A tap-dancing rooster",
        "A chicken wearing a top hat",
        "A breakdancing hen",
        "A chicken riding a unicycle",
        "A disco-loving chick",
        "A grumpy cloud",
        // "A joyful rainbow",
        "A shimmering mermaid",
        "A wobbly robot",
        "A tiny dragon",
        "A speedy snail",
        "A wise old owl",
        "A playful puppy",
        "A bouncy kangaroo",
        "A magical unicorn",
        "A whispering tree",
        "A mischievous squirrel",
        "A wise old turtle",
        "A zooming superhero",
        "A shy ghost",
        "A glittery jellyfish",
        "A musical mushroom",
        "A clumsy wizard",
        "A sparkling star",
        "A friendly alien",
        "A burrowing badger",
        "A giggling garden gnome",
        // "A zooming racecar",
        "A tiny mischievous sprite",
        "A courageous lion cub",
        "A bubbly teapot",
        "A flying piglet",
        "A storytelling spider",
        "A grumpy but kind troll",
        "A cheerful little ghost",
        "A rainbow-colored owl",
        "A rainbow-colored owllette",
        "A rainbow-colored kitten",
        "A rainbow-colored cat",
        "A bouncy marshmallow",
        "A sleepy little bat",
        "A brave little mouse",
        "A curious little fox",
        "A magical teacup",
        "A friendly cloud monster",
        "A speedy skateboard",
        "A shimmering moonbeam",
        // "A cuddly monster truck",
        "A purring Persian cat",
        "A playful tabby kitten",
        "A sleepy Siamese cat",
        "A dancing calico kitten",
        "A wise Maine Coon cat",
        "A mischievous black cat",
        "A curious orange kitten",
        "A fluffy white cat",
        "A bouncy Bengal kitten",
        "A magical cat with rainbow fur",
        "A wise barn owl",
        "A curious snowy owl",
        "A playful baby owl",
        "A sleepy night owl",
        "A dancing spotted owl",
        "A wise old great horned owl",
        "A tiny pygmy owl",
        "A magical owl with starry eyes",
        "A friendly screech owl",
        "A bouncy burrowing owl"
    ];

    const activities = [
        "riding a bike",
        "eating ice cream",
        "flying a kite",
        "building a sandcastle",
        "exploring a secret cave",
        "painting a masterpiece",
        "having a tea party",
        "telling silly jokes",
        "swimming with dolphins",
        "baking giant cookies",
        "planting a garden",
        "playing hide-and-seek",
        "going on a treasure hunt",
        "reading a magical book",
        "sliding down a rainbow",
        "dancing in the rain",
        "floating on a cloud",
        "racing against the wind",
        "whispering secrets to the stars",
        "learning to juggle",
        "building a fort out of pillows",
        "having a picnic under the moon",
        "singing karaoke really loud",
        "inventing a new silly dance",
        "searching for buried treasure",
        "flying on a magic carpet",
        "making giant bubbles",
        "chasing butterflies",
        "building a tower of blocks to the sky",
        "having a water balloon fight",
        "making shadow puppets",
        "going on a pretend safari",
        "drawing with sidewalk chalk",
        "playing in a ball pit",
        "decorating cupcakes with sprinkles",
        "going on a scavenger hunt",
        "pretending to be animals",
        "creating a secret handshake",
        "making paper airplanes and racing them",
        "exploring a giant maze",
        "having a pillow fight",
        "telling stories around a make-believe campfire",
        "making friendship bracelets",
        "collecting shiny pebbles",
        "having a parade with homemade instruments",
        "trying to catch falling leaves",
        "making a funny face contest",
        "building a bridge out of spaghetti",
        "playing fetch with a cloud",
        "practicing their superhero landing"
    ];

    const funnyElements = [
        "wearing mismatched socks.",
        "with a rubber chicken.",
        "while balancing a pancake on its head.",
        "and sneezing glitter.",
        "singing opera backwards.",
        "using a spaghetti noodle as a wand.",
        "and accidentally turning everything purple.",
        "with a tiny crown that keeps falling off.",
        "while riding a unicycle on the ceiling.",
        "and trying to teach a fish to whistle.",
        "carrying a suitcase full of marshmallows.",
        "and dreaming of giant pickles.",
        "wearing roller skates on its ears.",
        "while juggling three tiny planets.",
        "and communicating only in squeaks.",
        "with a hat that plays disco music.",
        "and thinking it's a superhero.",
        "while surrounded by bubbles.",
        "and having a beard made of cotton candy.",
        "while pretending to be a teapot.",
        "and tickling a giant flower.",
        "with a nose that honks when it laughs.",
        "while trying to walk on stilts made of jelly.",
        "and accidentally swapping heads with a squirrel.",
        "using a banana as a phone.",
        "and getting stuck in a giant spiderweb of candy floss.",
        "with shoes that light up and play a kazoo.",
        "while attempting to fly with an umbrella.",
        "and speaking entirely in riddles.",
        "wearing a tutu made of lettuce leaves.",
        "with a pet rock that tells fortunes.",
        "and trying to hug a cloud.",
        "while wearing a helmet made of a watermelon.",
        "and leaving a trail of sparkles everywhere.",
        "with a backpack full of imaginary friends.",
        "and trying to bake a cake using only sunshine.",
        "while carrying a very important invisible briefcase.",
        "and having a tail that wags independently.",
        "with a tiny telescope to look at microscopic stars.",
        "and communicating through interpretive dance.",
        "wearing sunglasses at night.",
        "with a pet cloud that rains chocolate.",
        "and finding a hidden portal to a marshmallow world.",
        "while trying to give a high-five to the moon.",
        "and being surprisingly good at playing the spoons.",
        "with a cloak made of wishes.",
        "and having a pocket that produces infinite snacks.",
        "while trying to teach a worm to read.",
        "and leaving footprints that glow in the dark.",
        "with a tiny backpack full of dreams."
    ];

    const generateButton = document.getElementById('generate-button');
    const dreamSeedTally = document.getElementById('dream-seed-tally');

    let generatedSeeds = []; // Array to store all generated seeds

    // Function to get a random item from an array
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    // Function to generate a Dream Seed
    function generateDreamSeed() {
        const character = getRandomItem(characters);
        const activity = getRandomItem(activities);
        const funny = getRandomItem(funnyElements);

        const dreamSeed = `${character} ${activity} ${funny}`;
        addSeedToTally(dreamSeed); // Add to running tally
    }

    // Function to add a generated seed to the tally
    function addSeedToTally(seed) {
        generatedSeeds.push(seed); // Add to the array
        const listItem = document.createElement('li');
        listItem.textContent = seed;
        dreamSeedTally.prepend(listItem); // Add to the top of the list
        
        // Optional: Limit the number of displayed tally items for performance/UI
        while (dreamSeedTally.children.length > 50) { // Keep only the last 50, for example
            dreamSeedTally.removeChild(dreamSeedTally.lastChild);
        }
    }

    // Event listener for the button
    generateButton.addEventListener('click', generateDreamSeed);

    // Initial generation on page load
    generateDreamSeed(); 
    generateDreamSeed(); 
    generateDreamSeed(); 
});