
var api = {
    url : 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id : 1,
};
//const urlapi = `${api.url}${api.type}/${api.id}`

const {url, type, id} = api;
let i = 0;
function strUcFirst(a){
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}
while (i < 20){
    console.log(api.id)
    let urlapi =api.url + api.type + '/' + i;
fetch(urlapi)
.then(data => data.json()) 
.then(pokemon => {
    console.log(api.id);
    api.id = api.id + 1;
    urlapi =api.url + api.type + '/' + i;
    let content = document.createElement("div");
    content.id = "content" + api.id;
    content.className = "card"
    console.log(pokemon.base_experience)
    document.getElementById("pokemon").appendChild(content);
//pokemon_nom
    let nom = document.createElement("h1");
    nom.id = "name" + api.id;
    nom.className = "baba"
    console.log(pokemon.base_experience)
    nom.appendChild(document.createTextNode(strUcFirst(pokemon.name)));
    document.getElementById("content" + api.id).appendChild(nom);
//barre_vie
    let barre_vie = document.createElement("div");
    barre_vie.className = "barre_vie";
    document.getElementById("content" + api.id).appendChild(barre_vie);
// section HP_XP
    let hp_xp = document.createElement("div");
    hp_xp.id = "hp_xd" + api.id;
    hp_xp.className = "hp_xp";
    document.getElementById("content" + api.id).appendChild(hp_xp);
    // HP
    let hp = document.createElement("p");
    hp.id = "hp" + api.id;
    hp.className = "hp";
    hp.appendChild(document.createTextNode("HP " + pokemon.stats[0].base_stat));
    document.getElementById("hp_xd" + api.id).appendChild(hp);
    //XP
    let xp = document.createElement("p");
    xp.id = "xp" + api.id;
    xp.className = "xp";
    xp.appendChild(document.createTextNode("XP " + pokemon.base_experience));
    document.getElementById("hp_xd" + api.id).appendChild(xp);
// Bouton
    let bouton = document.createElement("a")
    bouton.className = "bouton";
    bouton.appendChild(document.createTextNode("TRANSFER"));
    document.getElementById("content" + api.id).appendChild(bouton);
// stats
    let stats = document.createElement("div");
    stats.id = "stats" + api.id;
    stats.className = "stats";
    document.getElementById("content" + api.id).appendChild(stats);
    //stats_type
    let stats_type = document.createElement("div");
    stats_type.id = "stats_type" + api.id;
    stats_type.className = "stats_type";
    document.getElementById("stats" + api.id).appendChild(stats_type);
        //type_info
    let type_info = document.createElement("p");
    type_info.id = "type_info" + api.id;
    type_info.className = "type_info";
    type_info.appendChild(document.createTextNode(strUcFirst(pokemon.types[0].type.name)));
    document.getElementById("stats_type" + api.id).appendChild(type_info);
        //type_titre
    let type_titre = document.createElement("p");
    type_titre.id = "type_titre" + api.id;
    type_titre.className = "type_titre";
    type_titre.appendChild(document.createTextNode("Type"));
    document.getElementById("stats_type" + api.id).appendChild(type_titre);
    //stats_weight
    let stats_weight = document.createElement("div");
    stats_weight.id = "stats_weight" + api.id;
    stats_weight.className = "stats_weight";
    document.getElementById("stats" + api.id).appendChild(stats_weight);
        //weight_info
    let weight_info = document.createElement("p");
    weight_info.id = "weight_info" + api.id;
    weight_info.className = "weight_info";
    let pokemon_weight = pokemon.weight*0.10 
    weight_info.appendChild(document.createTextNode(pokemon_weight.toFixed(1) + "Kg"));
    document.getElementById("stats_weight" + api.id).appendChild(weight_info);
        //weight_titre
    let weight_titre = document.createElement("p");
    weight_titre.id = "weight_titre" + api.id;
    weight_titre.className = "weight_titre";
    weight_titre.appendChild(document.createTextNode("Weight"));
    document.getElementById("stats_weight" + api.id).appendChild(weight_titre);
    //stats_height
    let stats_height = document.createElement("div");
    stats_height.id = "stats_height" + api.id;
    stats_height.className = "stats_height";
    document.getElementById("stats" + api.id).appendChild(stats_height);
        //height_info
    let height_info = document.createElement("p");
    height_info.id = "height_info" + api.id;
    height_info.className = "height_info";
    let pokemon_height = pokemon.height*0.1;
    height_info.appendChild(document.createTextNode(pokemon_height.toFixed(2) + "m"));
    document.getElementById("stats_height" + api.id).appendChild(height_info);
        //height_titre
    let height_titre = document.createElement("p");
    height_titre.id = "height_titre" + api.id;
    height_titre.className = "height_titre";
    height_titre.appendChild(document.createTextNode("Height"));
    document.getElementById("stats_height" + api.id).appendChild(height_titre);
    // stats2_
    let stats2_ = document.createElement("div");
    stats2_.id = "stats2_" + api.id;
    stats2_.className = "stats2_";
    document.getElementById("content" + api.id).appendChild(stats2_);
     //stats_att
     let stats_att = document.createElement("div");
     stats_att.id = "stats_att" + api.id;
     stats_att.className = "stats_att";
     document.getElementById("stats2_" + api.id).appendChild(stats_att);
         //att_info
     let att_info = document.createElement("p");
     att_info.id = "att_info" + api.id;
     att_info.className = "att_info";
     att_info.appendChild(document.createTextNode(pokemon.stats[1].base_stat));
     document.getElementById("stats_att" + api.id).appendChild(att_info);
         //att_titre
     let att_titre = document.createElement("p");
     att_titre.id = "att_titre" + api.id;
     att_titre.className = "att_titre";
     att_titre.appendChild(document.createTextNode("Att"));
     document.getElementById("stats_att" + api.id).appendChild(att_titre);
     //stats_att_spe
     let stats_att_spe = document.createElement("div");
     stats_att_spe.id = "stats_att_spe" + api.id;
     stats_att_spe.className = "stats_att_spe";
     document.getElementById("stats2_" + api.id).appendChild(stats_att_spe);
        //att_spe_info
     let att_spe_info = document.createElement("p");
     att_spe_info.id = "att_spe_info" + api.id;
     att_spe_info.className = "att_spe_info";
     att_spe_info.appendChild(document.createTextNode(pokemon.stats[3].base_stat));
     document.getElementById("stats_att_spe" + api.id).appendChild(att_spe_info);
        //att_spe_titre
     let att_spe_titre = document.createElement("p");
     att_spe_titre.id = "att_spe_titre" + api.id;
     att_spe_titre.className = "att_spe_titre";
     att_spe_titre.appendChild(document.createTextNode("Att-Spé"));
     document.getElementById("stats_att_spe" + api.id).appendChild(att_spe_titre);
     //stats_def
     let stats_def = document.createElement("div");
     stats_def.id = "stats_def" + api.id;
     stats_def.className = "stats_def";
     document.getElementById("stats2_" + api.id).appendChild(stats_def);
        //def_info
     let def_info = document.createElement("p");
     def_info.id = "def_info" + api.id;
     def_info.className = "def_info";
     def_info.appendChild(document.createTextNode(pokemon.stats[2].base_stat));
     document.getElementById("stats_def" + api.id).appendChild(def_info);
        //def_titre
     let def_titre = document.createElement("p");
     def_titre.id = "def_titre" + api.id;
     def_titre.className = "def_titre";
     def_titre.appendChild(document.createTextNode("Déf"));
     document.getElementById("stats_def" + api.id).appendChild(def_titre);
     //stats_def_spe
     let stats_def_spe = document.createElement("div");
     stats_def_spe.id = "stats_def_spe" + api.id;
     stats_def_spe.className = "stats_def_spe";
     document.getElementById("stats2_" + api.id).appendChild(stats_def_spe);
        //def_spe_info
     let def_spe_info = document.createElement("p");
     def_spe_info.id = "def_spe_info" + api.id;
     def_spe_info.className = "def_spe_info";
     def_spe_info.appendChild(document.createTextNode(pokemon.stats[4].base_stat));
     document.getElementById("stats_def_spe" + api.id).appendChild(def_spe_info);
        //def_spe_titre
     let def_spe_titre = document.createElement("p");
     def_spe_titre.id = "def_spe_titre" + api.id;
     def_spe_titre.className = "def_spe_titre";
     def_spe_titre.appendChild(document.createTextNode("Déf-Spé"));
     document.getElementById("stats_def_spe" + api.id).appendChild(def_spe_titre);
     //stats_vit
     let stats_vit = document.createElement("div");
     stats_vit.id = "stats_vit" + api.id;
     stats_vit.className = "stats_vit";
     document.getElementById("stats2_" + api.id).appendChild(stats_vit);
        //vit_info
     let vit_info = document.createElement("p");
     vit_info.id = "vit_info" + api.id;
     vit_info.className = "vit_info";
     vit_info.appendChild(document.createTextNode(pokemon.stats[5].base_stat));
     document.getElementById("stats_vit" + api.id).appendChild(vit_info);
        //vit_titre
     let vit_titre = document.createElement("p");
     vit_titre.id = "vit_titre" + api.id;
     vit_titre.className = "vit_titre";
     vit_titre.appendChild(document.createTextNode("Vit"));
     document.getElementById("stats_vit" + api.id).appendChild(vit_titre);
//img
    let image = document.createElement("img");
    image.id = "img";
    console.log("liens : " + pokemon.sprites.other.home.front_default);
    image.src = pokemon.sprites.other.home.front_default;
    document.getElementById("content" + api.id).appendChild(image);
});

i++
}
