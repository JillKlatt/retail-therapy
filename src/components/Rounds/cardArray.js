export const rightCardArray = [
    {
        answer:"correct", 
        hp: -10,
        choice: "Stand Your Ground, it's your day off, you're basically a customer too", 
        buttonChoice: "Intimiation!", 
        outcome: "You stare her down as she locks eyes with you, but at the last moment course-corrects and veers to her right",
        inventory: 'A sense of pride',
        inventoryOutcome: 'points'
    },
    {
        answer:"incorrect", 
        hp: 0,
        choice: "The computer might have a list of your manager's tasks for the day", 
        buttonChoice: "Investigation!", 
        outcome: "It's password protected! No luck here. Maybe check the breakroom?",
        inventory: ''
    },
    {
        answer:"incorrect", 
        hp: 0,
        choice: "Ignore her and go check the cabinets, maybe there's something that will help there", 
        buttonChoice: "Investigate!", 
        outcome: "In the cabinets you find unrefrigerated condiments and an open Off Brand Redbull, chugging it might make you feel better",
        inventory: "Off Brand Redbull",
        inventoryOutcome: 'health'
    },
    {
        answer:"correct", 
        choice: "You know your manager can sometimes prefer the solitude of the freezer, no one bothers you in there", 
        buttonChoice: "Go Left to the Freezer", 
        outcome: "You found her!",
        inventory: ''
    },
    {
        answer:"incorrect", 
        choice: "You don't get paid enough for this nonsense!", 
        buttonChoice: "Flight!", 
        outcome: "Coward! You have to stay and fight because this game doesn't have that type of choice functionality yet. But also, come on.",
        inventory: ''
    },
    {
        answer:"correct", 
        choice: "Take a broke piece of pallet and attempt to sweep its legs", 
        buttonChoice: "Athletics!", 
        outcome: "You knock it prone on the ground in front of you, now's your chance!",
        inventory: ''   
    },
    {
        answer:"correct", 
        choice: "Luckily the stockroom always comes equipped with a heavy crossbow. Take a step back and FIRE!", 
        buttonChoice: "Ranged Attack!", 
        outcome: "You hear your manager's cheers before anything else, you've defeated the evil DM!",
        inventory: '' 
    },
]
export const leftCardArray = [
    {
        lAnswer:"incorrect", 
        lHp: 0,
        lChoice: "You're barely in the door, it's not worth making a scene in the vestibule with some stranger. Dodge out of the way just in time.", 
        lButtonChoice: "Dexterity!", 
        lOutcome: "You attempt to leap to your right to avoid the oncoming cart, but the customer sees your movement and redirects her attack towards you",
        inventory: ''
    },
    {
        lAnswer:"correct", 
        lChoice: "The break board could give some insight into who is here and where she might be", 
        lButtonChoice: "Perception!", 
        lOutcome: "According to the board she should be on break now! Let's go search for her there!",
        inventory: ''
    },
    {
        lAnswer: "correct",
        lHp: 0,
        lChoice: "Lisa could have a wealth of information if we can get on her good side.. Ask her about her cats",
        lButtonChoice: "Persuasion!",
        lOutcome: "Lisa regales you with trivia and pictures of her multiple cats. In between this information, she mentions she saw the manager in the stockroom.",
        inventory: ''
    },
    {
        lAnswer:"correct", 
        lChoice: "Your manager isn't one to take breaks, but perhaps she's searching for something over there", 
        lButtonChoice: "Go Right to check behind the pallets", 
        lOutcome: "You found her!",
        inventory: ''
    },
    {
        lAnswer:"correct", 
        lChoice: "Enough is enough! Take her down once and for all!", 
        lButtonChoice: "Fight!", 
        lOutcome: "You're exactly what this world needs!!",
        inventory: ''   
    },
    {
        lAnswer:"incorrect", 
        lHp: -10,
        lChoice: "This calls for fisticuffs", 
        lButtonChoice: "Strength!", 
        lOutcome: "All these hours of lifting banana boxes have made you strong, but not strong enough to punch a dragon. It sees it coming and reacts with fire breath!",
        inventory: ''   
    },
    {
        lAnswer:"correct", 
        lChoice: "You pull your box cutter from your pocket and charge for the weak spot!", 
        lButtonChoice: "Melee Attack!", 
        lOutcome: "You hear your manager's cheers before anything else, you've defeated the evil DM!",
        inventory: ''   
    }
]