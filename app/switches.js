// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {

    let strDay = day.toString().toUpperCase()

    let days = {
        SUNDAY: 1,
        MONDAY: 2,
        TUESDAY: 3,
        WEDNESDAY: 4,
        THURSDAY: 5,
        FRIDAY: 6,
        SATURDAY: 7
    }

    let dayNum = days[strDay]

    switch (true) {
        case (days[strDay] <= 7):
            if (offset) {
                return days[strDay] - 1
            } else {
                return dayNum
            }
        default:
            return 'That\'s not a day of the week'
    }
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {

    let newScore = score - par

    switch (true) {
        case (newScore == 1 || -3):
            return "Ace"
        case (newScore == -2):
            return "Eagle"
        case (newScore == -1):
            return "Birdie"
        case (newScore == 0):
            return "Par"
        case (newScore == 1):
            return "Bogie"
        case (newScore == 2):
            return "Double Bogie"
        case (newScore >= 3):
            return "Ouch"
        default:
            break
    }
}


// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    
    switch (card) {
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6':
            count++
            break
        case '10': 
        case 'J': 
        case 'Q': 
        case 'K': 
        case 'A':
            count--
            break
        default:
            count + 0
            break
    }

    switch (true) {
        case (count <= 0):
            return count + " Hold"
        case (count > 0):
            return count + "Bet"
    }

}
