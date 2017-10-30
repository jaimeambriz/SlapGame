var health = 100
var hits = 0
var targetName = "Sagat"
// var input = ""
var compHealth = 100
var compHits = 0
function slap(input) {
   var victoryStatus = "You win"
    if (input == "superKick" && compHealth > 0) {
        compHealth -= 20 * addMods(ryu)
    } else if (input == "kick" && compHealth > 0) {
        compHealth -= 10 * addMods(ryu)
    } else if (input == "punch" && compHealth > 0){
        compHealth -= 1 * addMods(ryu)
    }else {
        return victoryStatus
    }
    compHits++
    update()
}
update()

function update() {
    // document.getElementById("vitory-status").innerText =victoryStatus
    document.getElementById("health").innerText = health
    document.getElementById("hits").innerText = hits
    // document.getElementById("victoryStatus").innerHTML = name
    document.getElementById("comphealth").innerText = compHealth
    document.getElementById('comphits').innerText = compHits
    document.getElementById("target-name").innerText = targetName
}

// page 2
var sagat = new Player("Sagat", 140, )
var ryu = new Player("Ryu", 140, )
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
    console.log(damage)
    return totalDamage
}
addMods(ryu)

function giveItem(item){
 var out = ""
    if(item == "hadouken"){
        out = ryu.items.push(items.hadouken)
        console.log(out)
    }else if(item == "tatsumaki"){
        out = ryu.items.push(items.tatsumaki)
    }else {
        out = ryu.items.push(items.shoryuken)
    }
    return out
}

