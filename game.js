var health = 200
var hits = 0
var targetName = "Sagat"
// var input = ""
var compHealth = 200
var compHits = 0
var victoryStatus = "You Win"
function slap(input) {
    if (compHealth > 0) {
        if (input == "uppercut") {
            compHealth -= 20 * addMods(ryu)
        } else if (input == "kick") {
            compHealth -= 10 * addMods(ryu)
        } else if (input == "punch") {
            compHealth -= 1 * addMods(ryu)
        }
        compHits++
        update()
    }
}
update()

function update() {
    if(compHealth < 1){
        document.getElementById("comphealth").innerText = "Knockout"
    }else if (compHealth >1) {
        document.getElementById("comphealth").innerText = compHealth
    }
        
    document.getElementById("health").innerText = health
    document.getElementById("hits").innerText = hits
    document.getElementById('comphits').innerText = compHits
    document.getElementById("target-name").innerText = targetName
    // document.getElementById("vitory-status").innerText =victoryStatus
}

// page 2
var sagat = new Player("Sagat", 200, )
var ryu = new Player("Ryu", 200, )
var items = {
    hadouken: new Item("Hadouken", 2.2, "Blast of energy"),
    tatsumaki: new Item("Tatsumaki", 1.3, "Super powerfull spinningkick"),
    shoryuken: new Item("Shoryouken", 1.7, "Awesome upper cut"),
    tigerGenocide: new Item("Tiger Genocide", 2.3, "7 hit combo"),
    tigerUppercut: new Item("Tiger Uppercut", 1.5, "Super strong uppercut"),
    tigerShot: new Item("Tiger Shot", 1.2, "Fire Blast")

}
function Player(name, health, ) {
    this.name = name;
    this.health = health;
    this.items = []



}

function Item(name, damage, description) {
    this.name = name;
    this.damage = damage;
    this.description = description
}

// function giveSpecialMove() {
//     ryu.items.push(items.hadouken, items.shoryuken, items.tatsumaki)
//     sagat.items.push(items.tigerUppercut, items.tigerShot, items.tigerGenocide)

// }
// giveSpecialMove()

function addMods(player) {
    var totalDamage = 1
    for (var i = 0; i < player.items.length; i++) {
        var damage = player.items[i].damage;
        if (damage > 0) {
            totalDamage = damage
        }
    }
    return totalDamage
}
addMods(ryu)

function giveItem(item) {
    var out = ""
    if (item == "hadouken") {
        out = ryu.items.push(items.hadouken)
        console.log(out)
    } else if (item == "tatsumaki") {
        out = ryu.items.push(items.tatsumaki)
    } else {
        out = ryu.items.push(items.shoryuken)
    }
    return out
}

