export const rightCardArray = [
    {
        answer:"correct", 
        hp: -10,
        choice: "Stand Your Ground, it's your day off, you're basically a customer too", 
        buttonChoice: "Intimiation!", 
        outcome: "You stare her down as she locks eyes with you, but at the last moment course-corrects and veers to her right"
    },
    {
        answer:"incorrect", 
        health: 0,
        choice: "The computer might have a list of your manager's tasks for the day", 
        buttonChoice: "Investigation!", 
        outcome: "It's password protected! No luck here. Maybe check the breakroom?"
    },
    {
        answer:"incorrect", 
        hp: +10,
        choice: "Ignore Her and go check the cabinets, maybe there's something that will help there", 
        buttonChoice: "Investigate!", 
        outcome: "In the cabinets you find unrefrigerated condiments and an open offbrand Redbull, chugging it might make you feel better"
    },
    {
        answer:"correct", 
        choice: "You know your manager can sometimes perfer the solitude of the freezer, no one bothers you in there", 
        buttonChoice: "Go Right to the Freezer", 
        outcome: "You found her!"   
    }
]

export const leftCardArray = [
    {
        answer:"incorrect", 
        choice: "You're barely in the door, it's not worth making a scene in the vestibule with some stranger. Dodge out of the way just in time.", 
        buttonChoice: "Dexterity!", 
        outcome: "You attempt to leap to your right to avoid the oncoming cart, but the customer sees your movement and redirects her attack towards you "
    },
    {
        answer:"correct", 
        choice: "The break board could give some insight into who is here and where she might be", 
        buttonChoice: "Perception!", 
        outcome: "According to the board she should be on break now! Let's go search for her there!"
    },
    {
        answer: "correct",
        choice: "Ask her about her cats",
        buttonChoice: "Persuasion!",
        outcome: "Lisa regales you with trivia and pictures of her multiple cats. In between this information, she mentions she saw the manager in the stockroom."
    },
    {
        answer:"correct", 
        choice: "Your manager isn't one to take breaks, but perhaps she's searching for something over there", 
        buttonChoice: "Go Left to check behind the pallets", 
        outcome: "You found her!"   
    }
]