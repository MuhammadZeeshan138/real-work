let user = prompt("ENTER THE  S,W OR G(S FOR SANAKE, W FOR WATER, ANG G FOR GUN:");
let computerInput = Math.floor(Math.random() * 3);
let computer = ["S", "W", "G"][computerInput];

const computerVSuser = (computer, user) => {
    if (computer == user) {
        return "Nobody---MAtch is Tied---"
    }

    else if(
        (computer == "S" && user == "G") ||
        (computer == "W" && user == "S") ||
        (computer == "G" && user == "W")

    ) {
        return "USER: Congratulation! You Won The Match"
    }
    else {
        return "COMPUTER: Try Again You lose the MAtch"
    }
};

let result = computerVSuser (computer, user)

console.log(`COMPUTER:${computer}\n AND USER:${user}\n THE WINNER IS ${result}`);


