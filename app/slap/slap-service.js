function SlapService() {

    var sagat = new Player("Sagat", 300, 0)
    var ryu = new Player("Ryu", 300, 0)
    var items = {
        hadouken: new Item("Hadouken", 2.2, "Blast of energy", "Ultra"),
        tatsumaki: new Item("Tatsumaki", 1.3, "Super powerfull spinningkick", "Power"),
        shoryouken: new Item("Shoryouken", 1.7, "Awesome upper cut", "special"),
        tigerGenocide: new Item("Tiger Genocide", 2.3, "7 hit combo"),
        tigerUppercut: new Item("Tiger Uppercut", 1.5, "Super strong uppercut"),
        tigerShot: new Item("Tiger Shot", 1.2, "Fire Blast")
    }

    function Player(name, health, hits) {
        this.name = name;
        this.health = health;
        this.hits = hits;
        this.items = []
    }

    function Item(name, damage, description, button) {
        this.name = name;
        this.damage = damage;
        this.description = description
        this.button = button
    }

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


    this.getSagat = function getSagat() {
       return JSON.parse(JSON.stringify(sagat))
    }

    this.getRyu = function getRyu() {
       return JSON.parse(JSON.stringify(ryu))
    }

    this.slap = function slap(input) {
        if (sagat.health > 0) {
        
            if (input == "hadouken") {
                sagat.health -= 30 * addMods(ryu)
            } else if (input == "tatsumaki") {
                sagat.health -= 20 * addMods(ryu)
            } else if (input == "shoryouken") {
                sagat.health -= 10 * addMods(ryu)
            }
            sagat.hits++
        }
    }
    this.giveItem = function giveItem(item){
        if (item == "hadouken") {
            out = ryu.items.push(items.hadouken)
        } else if (item == "tatsumaki") {
            out = ryu.items.push(items.tatsumaki)
        } else if (item == "shoryouken") {
            out = ryu.items.push(items.shoryouken)
    
        }

    }
}