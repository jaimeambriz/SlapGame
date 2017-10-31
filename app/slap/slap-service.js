function SlapService(){
    var health = 200
    var hits = 0
    var targetName = "Sagat"
    var compHealth = 200
    var compHits = 0
    var sagat = new Player("Sagat", 200, )
    var ryu = new Player("Ryu", 200, )

    function update() {
        if(compHealth < 1){
            document.getElementById("comphealth").innerText = "Knockout"
        }else if (compHealth >1) {
            document.getElementById("comphealth").innerText = (compHealth)
        }
        document.getElementById("health").innerText = health
        document.getElementById("hits").innerText = hits
        document.getElementById('comphits').innerText = compHits
        document.getElementById("target-name").innerText =  sagat.name
        // document.getElementById("vitory-status").innerText =victoryStatus
    }
    var items = {
        hadouken: new Item("Hadouken", 2.2, "Blast of energy"),
        tatsumaki: new Item("Tatsumaki", 1.3, "Super powerfull spinningkick"),
        shoryuken: new Item("Shoryouken", 1.7, "Awesome upper cut"),
        tigerGenocide: new Item("Tiger Genocide", 2.3, "7 hit combo"),
        tigerUppercut: new Item("Tiger Uppercut", 1.5, "Super strong uppercut"),
        tigerShot: new Item("Tiger Shot", 1.2, "Fire Blast")  
    }
}
