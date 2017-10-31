function SlapController() {
    var slapService = new SlapService()


    function update() {
        var sagat = slapService.getSagat()
        var ryu = slapService.getRyu()
        if (sagat.health < 1) {
            document.getElementById("comphealth").innerText = "Knockout"
        } else if (sagat.health > 1) {
            document.getElementById("comphealth").innerText = sagat.health
        }
        document.getElementById("health").innerText = ryu.health
        document.getElementById("hits").innerText = ryu.hits
        document.getElementById('comphits').innerText = sagat.hits
        document.getElementById("target-name").innerText = sagat.name
        document.getElementById("player-name").innerText = ryu.name
    }

    this.slap = function slap(input) {
        slapService.slap(input)
        update()
    }

    this.giveItem = function giveItem(item) {
       slapService.giveItem(item)
    }

    update()
}

