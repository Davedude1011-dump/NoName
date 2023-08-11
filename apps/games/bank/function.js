window.onload = function() {
    document.querySelector(".left-panel").style.translate = "0 0"
    document.querySelector(".right-panel").style.translate = "0 0"
}
function GameMenu() {
    setTimeout(function() {
        window.open('../game-menu.html', '_self')
    }, 300)
    document.querySelector(".left-panel").style.translate = "0 100%"
    document.querySelector(".right-panel").style.translate = "0 -100%"
}

function SwitchPanel(menuItem) {
    var AllLeftPanelTexts = document.querySelectorAll(".left-panel-bar-option-text")
    for (var i = 0; i < AllLeftPanelTexts.length; i++) {
        var text = AllLeftPanelTexts[i].textContent.trim();
        if (text.endsWith(" •")) {
            AllLeftPanelTexts[i].textContent = text.slice(0, -2); // Remove the last two characters
        }
    }
    document.querySelector("." + menuItem).textContent = document.querySelector("." + menuItem).textContent + " •"

    var AllCenterPanels = document.querySelectorAll(".middle-panel")
    for (let i = 0; i < AllCenterPanels.length; i++) {
        if (AllCenterPanels[i].style.display != "none") {
            if (!AllCenterPanels[i].classList.contains("middle-panel-" + menuItem)) {
                AllCenterPanels[i].style.translate = "0 100%";
                document.querySelector(".middle-panel-" + menuItem).style.translate = "0 -100%";
                
                setTimeout(function() {
                    document.querySelector(".middle-panel-" + menuItem).style.display = "flex"
                    AllCenterPanels[i].style.display = "none"
                    AllCenterPanels[i].style.translate = "0 0";
                    setTimeout(function() {
                        document.querySelector(".middle-panel-" + menuItem).style.translate = "0 0";
                    }, 20)
                }, 1000)
            }
        }
    }
}

function RefreshMoney() {
    var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
    var PlayerAccountMoney = PlayerStats.Bank.Account
    var PlayerSavingMoney = PlayerStats.Bank.Saving
    
    document.querySelector(".account-money").textContent = PlayerAccountMoney
    document.querySelector(".savings-money").textContent = PlayerSavingMoney
}
RefreshMoney()

function deposit() {
    var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
    var PlayerAccountMoney = PlayerStats.Bank.Account
    var PlayerSavingMoney = PlayerStats.Bank.Saving

    let DepositAmount = Number(document.querySelector(".amount-block").value)
    console.log(DepositAmount)
    if (PlayerAccountMoney >= DepositAmount) {
        PlayerStats.Bank.Account = PlayerAccountMoney - DepositAmount
        PlayerStats.Bank.Saving = PlayerSavingMoney + DepositAmount
        
        document.querySelector(".amount-block").value = ""
        
        localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats))
        RefreshMoney()
    }
}
function withdraw() {
    var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
    var PlayerAccountMoney = PlayerStats.Bank.Account
    var PlayerSavingMoney = PlayerStats.Bank.Saving

    let WithdrawAmount = Number(document.querySelector(".amount-block").value)
    if (PlayerSavingMoney >= WithdrawAmount) {
        PlayerStats.Bank.Saving = PlayerSavingMoney - WithdrawAmount
        PlayerStats.Bank.Account = PlayerAccountMoney + WithdrawAmount

        document.querySelector(".amount-block").value = ""

        localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats))
        RefreshMoney()
    }
}

function ApplyInterest() {
    var PlayerStats = JSON.parse(localStorage.getItem("PlayerStats"))
    var PlayerAccountMoney = PlayerStats.Bank.Account
    var PlayerSavingMoney = PlayerStats.Bank.Saving

    var CurrentDayNum = ((date) => Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 86400000) + 1)(new Date())
    var OldDayNum = PlayerStats.Bank.DayNum

    var TimeDifference = CurrentDayNum - OldDayNum
    for (let i = 0; i < TimeDifference; i++) {
        PlayerSavingMoney *= 1.05
        PlayerAccountMoney += 10
    }

    PlayerStats.Bank.DayNum = CurrentDayNum
    PlayerStats.Bank.Saving = PlayerSavingMoney
    PlayerStats.Bank.Account = PlayerAccountMoney
    localStorage.setItem("PlayerStats", JSON.stringify(PlayerStats))
    RefreshMoney()
}
ApplyInterest()

var CurrencyOptions = [
    "₪",
    "₪",
    "₪",
    "₪",
    "₪",
    "₪"
]