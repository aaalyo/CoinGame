let totalCoins = 0;
let availableCoins = 0;
let smallUpgradeCount = 0;
let bigUpgradeCount = 0;
let smallUpgradePrice=10;
let bigUpgradePrice=90;



function Update() {
    document.getElementById('total-coins').innerHTML = totalCoins;
    document.getElementById('available-coins').innerHTML = availableCoins;
    document.getElementById('small-price').innerHTML = smallUpgradePrice;
    document.getElementById('big-price').innerHTML = bigUpgradePrice;
    document.getElementById('small-upgrade').innerHTML = smallUpgradeCount;
    document.getElementById('big-upgrade').innerHTML = bigUpgradeCount;
}

function addCoins() {
    totalCoins++;
    availableCoins++;
    buttonCheck();
    Update();
}

function smallUpgrade() {
    setInterval(function(){
        addCoins()
    }, +1000);
    smallUpgradeCount++;
    availableCoins -= smallUpgradePrice;
    smallUpgradePrice += Math.round(smallUpgradePrice*0.1);
    buttonCheck();
}

function bigUpgrade() {
    setInterval(function(){
        addCoins()
    }, +100);
    bigUpgradeCount++;
    availableCoins -= bigUpgradePrice;
    bigUpgradePrice += Math.round(bigUpgradePrice*0.1);
    buttonCheck();
}

function buttonCheck() {
    if (availableCoins < bigUpgradePrice) {
        document.getElementById('buy-big-upgrade').disabled = true;
    } else {
        document.getElementById('buy-big-upgrade').disabled = false;
    }
    if (availableCoins < smallUpgradePrice) {
        document.getElementById('buy-small-upgrade').disabled = true;
    } else {
        document.getElementById('buy-small-upgrade').disabled = false;
    }
}



