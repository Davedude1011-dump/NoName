var SelectedNumbers = [];
var PayoutPercent = 0

function GetRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SelectNumber(Element) {
    let NumberSelected = Number(Element.textContent);

    if (SelectedNumbers.includes(NumberSelected)) {
        SelectedNumbers = SelectedNumbers.filter(number => number !== NumberSelected);
    }
    else {
        SelectedNumbers.push(NumberSelected);
    }

    Element.classList.toggle("selected")
    document.querySelector(".payout-percent").textContent = `+${GetPayoutPercent()}%`

    console.log(SelectedNumbers)
}
function GetPayoutPercent() {
    let Percentages = [
        0,
        500,
        250,
        120,
        80,
        30,
        15,
        10,
        5,
        3,
        1,
        0
    ]
    PayoutPercent = Percentages[SelectedNumbers.length]
    return PayoutPercent
}

var DiceSvgs = [
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_49)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_49)"/><path d="M22 24.75C23.5188 24.75 24.75 23.5188 24.75 22C24.75 20.4812 23.5188 19.25 22 19.25C20.4812 19.25 19.25 20.4812 19.25 22C19.25 23.5188 20.4812 24.75 22 24.75Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_49" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_49"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_39)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_39)"/><path d="M22 18.0714C23.5188 18.0714 24.75 16.8402 24.75 15.3214C24.75 13.8026 23.5188 12.5714 22 12.5714C20.4812 12.5714 19.25 13.8026 19.25 15.3214C19.25 16.8402 20.4812 18.0714 22 18.0714Z" fill="#1C1C1F"/><path d="M22 30.8393C23.5188 30.8393 24.75 29.6081 24.75 28.0893C24.75 26.5705 23.5188 25.3393 22 25.3393C20.4812 25.3393 19.25 26.5705 19.25 28.0893C19.25 29.6081 20.4812 30.8393 22 30.8393Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_39" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_39"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_40)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_40)"/><path d="M22 14.9286C23.5188 14.9286 24.75 13.6973 24.75 12.1786C24.75 10.6598 23.5188 9.42856 22 9.42856C20.4812 9.42856 19.25 10.6598 19.25 12.1786C19.25 13.6973 20.4812 14.9286 22 14.9286Z" fill="#1C1C1F"/><path d="M22 24.5536C23.5188 24.5536 24.75 23.3223 24.75 21.8036C24.75 20.2848 23.5188 19.0536 22 19.0536C20.4812 19.0536 19.25 20.2848 19.25 21.8036C19.25 23.3223 20.4812 24.5536 22 24.5536Z" fill="#1C1C1F"/><path d="M22 34.1786C23.5188 34.1786 24.75 32.9473 24.75 31.4286C24.75 29.9098 23.5188 28.6786 22 28.6786C20.4812 28.6786 19.25 29.9098 19.25 31.4286C19.25 32.9473 20.4812 34.1786 22 34.1786Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_40" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_40"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_41)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_41)"/><path d="M15.3213 18.0714C16.8401 18.0714 18.0713 16.8402 18.0713 15.3214C18.0713 13.8027 16.8401 12.5714 15.3213 12.5714C13.8025 12.5714 12.5713 13.8027 12.5713 15.3214C12.5713 16.8402 13.8025 18.0714 15.3213 18.0714Z" fill="#1C1C1F"/><path d="M15.3213 30.8393C16.8401 30.8393 18.0713 29.6081 18.0713 28.0893C18.0713 26.5705 16.8401 25.3393 15.3213 25.3393C13.8025 25.3393 12.5713 26.5705 12.5713 28.0893C12.5713 29.6081 13.8025 30.8393 15.3213 30.8393Z" fill="#1C1C1F"/><path d="M29.0713 18.0714C30.5901 18.0714 31.8213 16.8402 31.8213 15.3214C31.8213 13.8027 30.5901 12.5714 29.0713 12.5714C27.5525 12.5714 26.3213 13.8027 26.3213 15.3214C26.3213 16.8402 27.5525 18.0714 29.0713 18.0714Z" fill="#1C1C1F"/><path d="M29.0713 30.8393C30.5901 30.8393 31.8213 29.6081 31.8213 28.0893C31.8213 26.5705 30.5901 25.3393 29.0713 25.3393C27.5525 25.3393 26.3213 26.5705 26.3213 28.0893C26.3213 29.6081 27.5525 30.8393 29.0713 30.8393Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_41" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_41"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_42)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_42)"/><path d="M13.75 16.5C15.2688 16.5 16.5 15.2688 16.5 13.75C16.5 12.2312 15.2688 11 13.75 11C12.2312 11 11 12.2312 11 13.75C11 15.2688 12.2312 16.5 13.75 16.5Z" fill="#1C1C1F"/><path d="M13.75 32.4107C15.2688 32.4107 16.5 31.1795 16.5 29.6607C16.5 28.1419 15.2688 26.9107 13.75 26.9107C12.2312 26.9107 11 28.1419 11 29.6607C11 31.1795 12.2312 32.4107 13.75 32.4107Z" fill="#1C1C1F"/><path d="M22 24.75C23.5188 24.75 24.75 23.5188 24.75 22C24.75 20.4812 23.5188 19.25 22 19.25C20.4812 19.25 19.25 20.4812 19.25 22C19.25 23.5188 20.4812 24.75 22 24.75Z" fill="#1C1C1F"/><path d="M30.6431 16.5C32.1619 16.5 33.3931 15.2688 33.3931 13.75C33.3931 12.2312 32.1619 11 30.6431 11C29.1243 11 27.8931 12.2312 27.8931 13.75C27.8931 15.2688 29.1243 16.5 30.6431 16.5Z" fill="#1C1C1F"/><path d="M30.6431 32.4107C32.1619 32.4107 33.3931 31.1795 33.3931 29.6607C33.3931 28.1419 32.1619 26.9107 30.6431 26.9107C29.1243 26.9107 27.8931 28.1419 27.8931 29.6607C27.8931 31.1795 29.1243 32.4107 30.6431 32.4107Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_42" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_42"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_28_43)"><path d="M38.5 0C41.5376 0 44 2.46243 44 5.5V38.5C44 41.5376 41.5376 44 38.5 44H5.5C2.46243 44 0 41.5376 0 38.5V5.5C0 2.46243 2.46243 0 5.5 0H38.5Z" fill="url(#paint0_linear_28_43)"/><path d="M15.125 15.125C16.6438 15.125 17.875 13.8938 17.875 12.375C17.875 10.8562 16.6438 9.625 15.125 9.625C13.6062 9.625 12.375 10.8562 12.375 12.375C12.375 13.8938 13.6062 15.125 15.125 15.125Z" fill="#1C1C1F"/><path d="M15.125 24.75C16.6438 24.75 17.875 23.5188 17.875 22C17.875 20.4812 16.6438 19.25 15.125 19.25C13.6062 19.25 12.375 20.4812 12.375 22C12.375 23.5188 13.6062 24.75 15.125 24.75Z" fill="#1C1C1F"/><path d="M15.125 34.375C16.6438 34.375 17.875 33.1438 17.875 31.625C17.875 30.1062 16.6438 28.875 15.125 28.875C13.6062 28.875 12.375 30.1062 12.375 31.625C12.375 33.1438 13.6062 34.375 15.125 34.375Z" fill="#1C1C1F"/><path d="M28.875 15.125C30.3938 15.125 31.625 13.8938 31.625 12.375C31.625 10.8562 30.3938 9.625 28.875 9.625C27.3562 9.625 26.125 10.8562 26.125 12.375C26.125 13.8938 27.3562 15.125 28.875 15.125Z" fill="#1C1C1F"/><path d="M28.875 24.75C30.3938 24.75 31.625 23.5188 31.625 22C31.625 20.4812 30.3938 19.25 28.875 19.25C27.3562 19.25 26.125 20.4812 26.125 22C26.125 23.5188 27.3562 24.75 28.875 24.75Z" fill="#1C1C1F"/><path d="M28.875 34.375C30.3938 34.375 31.625 33.1438 31.625 31.625C31.625 30.1062 30.3938 28.875 28.875 28.875C27.3562 28.875 26.125 30.1062 26.125 31.625C26.125 33.1438 27.3562 34.375 28.875 34.375Z" fill="#1C1C1F"/></g><defs><linearGradient id="paint0_linear_28_43" x1="2200" y1="0" x2="2200" y2="4400" gradientUnits="userSpaceOnUse"><stop stop-color="#F8F8FB"/><stop offset="1" stop-color="#EEEFF6"/></linearGradient><clipPath id="clip0_28_43"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,
]

var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
var PlayerAccountMoney = PlayerStats.Bank.Account

function RollDice() {
    let DiceOne = GetRandomInteger(1, 6)
    let DiceTwo = GetRandomInteger(1, 6)

    document.querySelector(".left-dice").innerHTML = DiceSvgs[DiceOne-1]
    document.querySelector(".right-dice").innerHTML = DiceSvgs[DiceTwo-1]

    let Total = DiceOne + DiceTwo

    console.log(DiceOne + " : " + DiceTwo, "( " + Total + " )")

    let BetAmount = Number(document.querySelector(".bet-amount").value)

    if (SelectedNumbers.includes(Total)) {
        PlayerAccountMoney += BetAmount * (PayoutPercent / 100)
    }
    else {
        PlayerAccountMoney -= BetAmount
    }
    RefreshMoney()
}
function RefreshMoney() {
    PlayerStats.Bank.Account = Math.floor(PlayerAccountMoney)
    localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats))
    console.log(PlayerStats)

    document.querySelector(".total-money").textContent = "₪ " + Math.floor(PlayerAccountMoney)

    let BetAmount = Number(document.querySelector(".bet-amount").value)
    if (BetAmount > Math.floor(PlayerAccountMoney) || document.querySelector(".bet-amount").value == "") {
        document.querySelector(".roll-button").onclick = ""
        document.querySelector(".roll-button").style.cursor = "not-allowed"
    }
    else {
        document.querySelector(".roll-button").onclick = RollDice
        document.querySelector(".roll-button").style.cursor = "pointer"
    }
}
RefreshMoney()
document.querySelector(".left-dice").innerHTML = DiceSvgs[5]
document.querySelector(".right-dice").innerHTML = DiceSvgs[5]

document.querySelector(".bet-amount").addEventListener("input", function() {
    let BetAmount = Number(document.querySelector(".bet-amount").value)
    if (BetAmount > Math.floor(PlayerAccountMoney) || document.querySelector(".bet-amount").value == "") {
        document.querySelector(".roll-button").onclick = ""
        document.querySelector(".roll-button").style.cursor = "not-allowed"
    }
    else {
        document.querySelector(".roll-button").onclick = RollDice
        document.querySelector(".roll-button").style.cursor = "pointer"
    }
})