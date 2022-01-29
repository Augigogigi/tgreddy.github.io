const PlayerRaces = ["Human", "Dwarf", "Elf", "Gnome", "Mixed"]
const Races = ["Human", "Dwarf", "Elf", "Gnome", "Giant", "Centaur", "Troll", "Orc", "Ogre", "Goblin", "Kobold", "Ent", "Angel", "Demon", "Demigod", "God", "Mixed"]
const Genders = ["Male", "Female", "Non-Binary [Androgynous]", "Non-Binary [Masculine]", "Non-Binary [Feminine]"]

function Character(name, age, race, gender, alignment, stats) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.gender = gender;
    this.alignment = alignment;
    this.stats = stats;
    this.health = getMaxHealth();
    
    function getMaxHealth() {
        return stats[2] * 3;
    }
    function getAttack() {
        return stats.reduce((r, c) => r + c);
    }
    function getDamage() {
        return Math.round(((1 + (stats[1] / 100)) * (1 + Math.sqrt(Math.round(Math.log2(stats[3]) * 10) / 10))) * 10) / 10;
    }

    function takeDamage(damage) {
        this.health -= damage;
    }
    function improveStat(stat, change) {
        this.stats[stat] += change;
    }
}

function Roll(amount, size, add) {
    var valArray = [];
    for (let index = 0; index < amount; index++) {
        valArray[index] = Math.floor(Math.random() * size) + add;
    }
    return valArray;
}