var CardsFull = [
    "AS",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "TS",
    "JS",
    "QS",
    "KS",
    "AH",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "TH",
    "JH",
    "QH",
    "KH",
    "AC",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "TC",
    "JC",
    "QC",
    "KC",
    "AD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "AD",
    "JD",
    "QD",
    "KD",
    "1J",
    "2J",
    //"1B",
    //"2B"
]

var CardContainer = document.querySelector(".card-container")

var CurrentSelection = []

function GetCardPath(ID) {
    return `../cards/${ID}.svg`
}
function RemoveItemFromArray(array, value) {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function PayPlayer(amount) {
    var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
    
    PlayerStats.Bank.Account = PlayerStats.Bank.Account + amount
    localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats))
}

function MakeRandomCards() {
    for (let i = 0; i < 9; i++) {
        let Cards = CardsFull

        let RandomKey = Cards[Math.floor(Math.random() * Cards.length)];
        let RandomValue = GetCardPath(RandomKey)

        RemoveItemFromArray(Cards, RandomKey)
        
        for (let j = 0; j < 2; j++) {
            let NewCard = document.createElement("img")
            NewCard.classList.add("card")
            NewCard.id = RandomKey
            NewCard.src = GetCardPath("1B")
            NewCard.setAttribute("value", RandomValue)

            NewCard.onclick = function() {
                var AllCards = document.querySelectorAll(".card")
                if (CurrentSelection.length != 2) {
                    if (this.src.split('/').pop() == GetCardPath("1B").split('/').pop()) {
                        this.src = this.getAttribute("value")
                        CurrentSelection.push(this.getAttribute("value"))
                    }
                }
                if (CurrentSelection.length == 2) {
                    if (CurrentSelection[0] == CurrentSelection[1]) {
                        CurrentSelection = []
                        Toastify({
                            text: "+ ₪5",
                            duration: 2000,
                            destination: "https://github.com/apvarun/toastify-js",
                            newWindow: true,
                            close: false,
                            gravity: "top", // `top` or `bottom`
                            position: "left", // `left`, `center` or `right`
                            stopOnFocus: false, // Prevents dismissing of toast on hover
                            style: {
                              background: "linear-gradient(90deg, rgba(34,49,73,1) 0%, rgba(118,123,175,1) 100%)",
                            },
                        }).showToast();
                        PayPlayer(5)
                    }
                    else {
                        setTimeout(function() {
                            for (var i = 0; i < CurrentSelection.length; i++) {
                                for (var j = 0; j < AllCards.length; j++) {
                                    if (AllCards[j].src.split('/').pop() != GetCardPath("1B").split('/').pop() && AllCards[j].getAttribute("value") == CurrentSelection[i]) {
                                        console.log("true")
                                        AllCards[j].src = GetCardPath("1B")
                                    }
                                    console.log(AllCards[j].src.split('/').pop(), GetCardPath("1B").split('/').pop())
                                }
                            }
                            CurrentSelection = []
                        }, 800)
                    }
                }
                console.log(CurrentSelection)

                let hasNo1BSource = true;

                for (let card of AllCards) {
                    if (card.getAttribute("src") === "../cards/1B.svg") {
                        hasNo1BSource = false;
                        break;
                    }
                }

                if (hasNo1BSource) {
                    Toastify({
                        text: "+ ₪15",
                        duration: 2000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: false,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: false, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(90deg, rgba(34,49,73,1) 0%, rgba(118,123,175,1) 100%)",
                        },
                    }).showToast();
                    PayPlayer(15)
                    CardContainer.innerHTML = ""
                    MakeRandomCards()
                }
            }

            CardContainer.appendChild(NewCard)
        }
    }

    let CardChildren = Array.from(CardContainer.children);

    for (let i = CardChildren.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [CardChildren[i], CardChildren[j]] = [CardChildren[j], CardChildren[i]];
    }
    
    CardChildren.forEach(child => CardContainer.appendChild(child));
}
MakeRandomCards()