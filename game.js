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
var sagatPlus = new Player("Sagat 2.0", 140, "Tiger Fury")
var sagat = new Player("Sagat", 100, "Tiger Knee")
var specialMoves = {
    tigerKnee: new Special("TigerKnee", 40, 20),
    hadouken: new Special("hadouken", 70, 15),
}
function Player(name, health, specialMove) {
    this.name = name;
    this.health = health;
    this.specialMove = specialMove;
}

function Special(specialAttack, damage, health) {
    this.specialAttack = specialAttack;
    this.damage = damage;
    this.health = health;
}
function giveSpecialMove() {

}