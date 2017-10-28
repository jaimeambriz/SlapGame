var health = 100
var hits = 0
var targetName = "Sagat"
var input = ""
var compHealth = 100
var compHits = 0
function slap(input) {
    if (input == "superKick") {
        compHealth -= 20
    } else if (input == "kick") {
        compHealth -= 10
    } else {
        compHealth--
    }
    compHits++
    update()
}
update()

function update() {
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
    hadouken: new Item("Hadouken", 50, "Blast of energy"),
    tatsumaki: new Item("Tatsumaki", 40, "Super powerfull spinnign kick"),
    shoryuken: new Item("Shoryouken", 35, "Awesome upper cut"),
    tigerGenocide: new Item("Tiger Genocide", 50 ,"7 hit combo"),
    tigerUppercut: new Item("Tiger Uppercut", 40, "Super strong uppercut"),
    tigerShot: new Item("Tiger Shot", 35,"Fire Blast"),

}
function Player(name, health, ) {
    this.name = name;
    this.health = health;
    this.items = []



}

function Item(name, damage, description) {
    this.name = name;
    this.damage = damage;
    this.description = description;
}
function giveSpecialMove() {
    ryu.items.push(items.hadouken, items.shoryuken, items.tatsumaki)
    sagat.items.push(items.tigerUppercut, items.tigerShot, items.tigerGenocide)

}
giveSpecialMove()