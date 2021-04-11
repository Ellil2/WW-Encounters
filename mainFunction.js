
function npcChoice(){
     
//playerNumberVar = 4
//playerLevelVar = 7
//fightTypeVar = 2
//fightDifficultyVar = 1

fightCompute = Math.floor((((playerLevelVar-0.5)*5)+10)*(playerNumberVar)*(1.5-(fightDifficultyVar/4)))

     // fightCompute est la difficulté du combat, basé sur les variables choisies.

     function decision(argument,numberOn){ 
skillBonus = 0
stuntBonus = 0
stuntBonus2 = 0
legendaryBonus = 0
legendaryBonus2 = 0
physicalStressBonus = 0
mentalStressBonus = 0
enemyNumber = 0
fightComputeGroup = argument


     // L'ennemi est pour l'instant a stats de base, puis des stats lui sont attribués en fonction de la valeur de fightCompute

while(fightComputeGroup > 0){
     
buffChooser = Math.floor(Math.random() * 7+1)    
     
if (buffChooser == 1 && skillBonus <= Math.floor(playerLevelVar/2+playerNumberVar/2)+4){skillBonus += 1; fightComputeGroup -= 6+Math.floor(skillBonus/2); enemyNumber += numberOn};
if (buffChooser == 2 && skillBonus <= Math.floor(playerLevelVar/2+playerNumberVar/2)+4){skillBonus += 1; fightComputeGroup -= 6+Math.floor(skillBonus/2); enemyNumber += numberOn};
if (buffChooser == 3 && legendaryBonus <= 5){legendaryBonus += 1; fightComputeGroup -= 3; enemyNumber += numberOn };
if (buffChooser == 4 && legendaryBonus2 <= 5){legendaryBonus2 += 1; fightComputeGroup -= 3; enemyNumber += numberOn };      
if (buffChooser == 5 && physicalStressBonus <= 5){physicalStressBonus += 1; fightComputeGroup -= 2; enemyNumber += numberOn }; 
if (buffChooser == 6){stuntBonus2 += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 
if (buffChooser == 7){stuntBonus += 1; fightComputeGroup -= 1; enemyNumber += numberOn }; 


} 
          //_______________________________________________//
          
          // Décide en fonction du niveau des joueurs le niveau de Légende du Titanspawn (notamment permet de générer des Titanspawn uniques pour des joueurs tres high level)
          // Décide aussi le type de fight (2 petits ennemis, un gros boss, etc)
          
         npcChoiceLoop()}
//function to clarify the legendChoice maker    
function legendDecider(){
if (playerLevelVar <= 2){legendChoice = "1"}
else if (playerLevelVar <= 4){legendChoice = "2"}
else if (playerLevelVar <= 7){legendChoice = "3"}
}
//Setting up a Boss and his Minions     
if (fightTypeVar == 1){
enemyType = "Boss"
if (playerLevelVar <= 2){legendChoice = "2"}
else if (playerLevelVar <= 4){legendChoice = "3"}
else if (playerLevelVar <= 6){legendChoice = "3"}
else if (playerLevelVar > 6){legendChoice = "4"}
decision(fightCompute/2,0)
console.log(legendChoice);
enemyType = "Group1"

playerLevelVar >= 4 ? groupOrArmy = Math.floor(Math.random()*2) : groupOrArmy = 0
if(groupOrArmy === 0){

legendDecider()
decision(fightCompute/2-6 ,1)
}     
if(groupOrArmy === 1){
enemyType = "Group1"
legendDecider()
decision(fightCompute/2 ,3)     
}   
}
//Setting up a Crowd of Mobs
else if (fightTypeVar == 2){
legendDecider()

enemyType = "Group2"     
decision(fightCompute/2,1)
enemyType = "Group2"
decision(fightCompute/2,1 )
}     

//Setting up one big enemy
else if (fightTypeVar == 3){
if (playerLevelVar <= 2){legendChoice = "2"}
else if (playerLevelVar <= 4){legendChoice = "3"}
else if (playerLevelVar <= 6){legendChoice = "3"}
else if (playerLevelVar > 6){legendChoice = "4"}
enemyType = "Solo"     
decision(fightCompute,0)
//This sets the Difficulty of the One Big Enemy setting. It is set lower because of the Defense Stats.
}
else if (fightTypeVar == 4){
if (playerLevelVar <= 2){legendChoice = "2"}
else if (playerLevelVar <= 4){legendChoice = "3"}
else if (playerLevelVar <= 6){legendChoice = "3"}
else if (playerLevelVar > 6){legendChoice = "4"}
  
enemyType = "Group2"   
if(document.getElementById("Aten").value){playerLevelVar == 7; decision(document.getElementById("Aten").value,0)}
else{decision(fightCompute/2,0)}
enemyType = "Group2"
if(document.getElementById("Fenrir").value){playerLevelVar == 7; decision(document.getElementById("Fenrir").value,0)}
else{decision(fightCompute/2,0)}
}     

 // A ce moment-là, le type de combat, et la difficulté du PNJ, est décidée. La répartition Stunts/Skills/etc est décidée
 
    function npcChoiceLoop() {

//____________________________________________________________________________________________________


//User Input: L'individu choisi le type de PNJ, origine, role, etc.


//____________________________________________________________________________________________________

typeChoice = "nope"

function typeChoiceFunction (){

typeChoicePrompt = prompt("What type of creature is your NPC ? \n1- Titanspawn \n2- Mythborn");
if (typeChoicePrompt == "1") {titanspawnTypeChoiceFunction();
}
else if (typeChoicePrompt == "2") {mythbornTypeChoiceFunction()}
else if (typeChoicePrompt !== "1" && typeChoicePrompt !== "2"){typeChoiceFunction()}
}
         

function titanspawnTypeChoiceFunction() {
typeChoice = "Titanspawn";

     originChoice = prompt("Which Titan is your Titanspawn from ? Possibilities: \n1 - Muspelheim \n2 - Nyx \n3 - Soku no Kumi \n4 - Aether \n5 - Amaunet \n6 - Terra \n7 - Nun \n8 - Death ");
  if (originChoice === "1") {
       subOriginChoice = prompt("What Avatar of Muspelheim is your Titanspawn linked to ?  \n11 - Vrtra  \n12 - Surtr \n13 - Prometheus \n99 - Any");
  }
  else if (originChoice === "2") {
       subOriginChoice = prompt("What Avatar of Nyx is your Titanspawn linked to ?  \n21 - Nott \n22 - Fenrir \n23 - Apep \n24 - Selene \n99 - Any");
  }
  else if (originChoice === "3") {
       subOriginChoice = prompt("What Avatar of Soku no Kumi is your Titanspawn linked to ? \n31 - Huehueteotl \n32 - Mikaboshi \n33 - Erebus \n99 Any");
  }
  else if (originChoice === "4") {
       subOriginChoice = prompt("What Avatar of Aether is your Titanspawn linked to ? \n41 - Aten\n42 -  Hyperion\n99 -  Any");
  }
  else if (originChoice === "5") {
       subOriginChoice = prompt("What Avatar of Amaunet is your Titanspawn linked to ? \n51 -  Huracan\n52 -  Typhon\n53 -  Ouranos\n99 -  Any");
  }
  else if (originChoice === "6") {
       subOriginChoice = prompt("What Avatar of Terra is your Titanspawn linked to ? Possibilities:\n61 -  Gaia\n62 -  Kur\n63 -  Dis Pater\n64 - Ourea \n65 - Crom Cruach \n99 -  Any");  }
  else if (originChoice === "7") {
       subOriginChoice = prompt("What Avatar of Nun is your Titanspawn linked to ? Possibilities: \n71 Yam \n72 -  Tiamat \n73 -  Abzu \n74 -  Cipactli \n99 -  Any");  }

  else if (originChoice === "8") {
       subOriginChoice = prompt("What Avatar of Death is your Titanspawn linked to ? Possibilities: \n81 - Styx\n82 -  Grim Reaper \n83 -  Camatotz \n99 -  Any");
  }
 
  else {
    titanspawnTypeChoiceFunction();
    return;
}
}
         
function mythbornTypeChoiceFunction(){     
typeChoice = "Mythborn"; 
     originChoice = prompt("Which Race is your Mythborn  ? Possibilities: \n1 - Summer Court of Fairie \n2 - Winter Court of Fairie \n3 - Jade Sea \n4 - Dark Forest \n5 - Shambhala \n6 - Atlantis");
  if (originChoice === "1") {
       subOriginChoice = prompt("What type of Summer Court Fairie Mythborn is your NPC ?  \n11 - Fey  \n12 - Elf \n13 - Small Folk \n14 - Pixie \n15 - Nymph \n98 - Any");
  }
  else if (originChoice === "2") {
       subOriginChoice = prompt("What type of Winter Court Fairie Mythborn is your NPC ?  \n21 - Fey  \n22 - Elf \n23 - Small Folk \n24 - Pixie \n25 - Nymph \n98 - Any");
  }
  else if (originChoice === "3") {
       subOriginChoice = prompt("What type of Jade Sea Mythborn is your NPC ?  \n31 - Western Dragon  \n32 - Eastern Dragon \n33 - Wyvern \n34 - Coatl \n35 - Naga \n98 - Any");
  }
  else if (originChoice === "4") {
       subOriginChoice = prompt("What type of Dark Forest Mythborn is your NPC ?  \n41 - Ent  \n42 - Small Folk \n43 - Garou \n44 - Witch  \n98 - Any");
  }
  else if (originChoice === "5") {
       subOriginChoice = prompt("What type of Shambhala Mythborn is your NPC ?  \n51 - Raksasha  \n52 - Asura \n53 - Nymph \n54 - Naga \n98 - Any");
  }
  else if (originChoice === "6") {
       subOriginChoice = prompt("What type of Atlantis Mythborn is your NPC ?  \n61 - Triton  \n62 - Nymph \n98 - Any");
  }        
}         
         



function behaviorChoiceFunction() {
  behaviorChoice = prompt("What is your NPC's behavior like ? \n 1 - Aggressive \n 2 - Diplomatic");  
    if (behaviorChoice === "1" || behaviorChoice === "2") {
 intelligenceChoiceFunction();
}

else {
    behaviorChoiceFunction();
    return;
}
};

function intelligenceChoiceFunction() {
 intelligenceChoice = prompt("What is your NPC's Intelligence Level ? \n1 - Feral \n2 - Human");
 (intelligenceChoice === "1" || intelligenceChoice === "2") ? combat1ChoiceFunction() : intelligenceChoiceFunction(); return;};

function combat1ChoiceFunction() {
 combatChoice1 = prompt("What is your NPC's combat style' ? \n 1 - Warrior\n 2 - Mage\n 3 - Rogue ");
 (combatChoice1 === "1" || combatChoice1 === "2" || combatChoice1 === "3") ? combat2ChoiceFunction() : combat1ChoiceFunction(); return; };

function combat2ChoiceFunction() {
 combatChoice2 = prompt("What is your NPC's combat speciality' ? \n1 - Support \n2 - Fighter \n3 - Controller \n4 - Tank");
    if (combatChoice2 === "1" || combatChoice2 === "2" || combatChoice2 === "3" || combatChoice2 === "4") {}

else {
    combat2ChoiceFunction();
    return;
}
 combatChoice2Int = parseInt(combatChoice2);
};
typeChoiceFunction ()
behaviorChoiceFunction();


var Aspect = function(name,type,origin,subOrigin,legend,intelligence,behavior,combat1,combat2) {
  this.name = name;
  this.type = type;
  this.origin = origin;
  this.subOrigin = subOrigin;
  this.legend = legend;
  this.intelligence = intelligence;
  this.behavior = behavior;
  this.combat1 = combat1;
  this.combat2 = combat2;
   
    
};
    
var Stunt = function(description,dangerlevel,stuntType,stuntCombat2,type,NPCtype) {
  this.description = description;
  this.dangerlevel = dangerlevel;
  this.stuntType = stuntType;
  this.stuntCombat2 = stuntCombat2;
  this.type=type;
  this.NPCtype = NPCtype   
};
         
         
//____________________________________________________________________________________________________

//Titanspawn High Concept Chooser ----------------------------------------------------------------
// Celà décide, en fonction des parametre choisis si-dessus, le High Concept du PNJ

//____________________________________________________________________________________________________

        //Here, is the link to the image.
var highConcept = [
    // Titanspawn
 abbysalPriest = new Aspect("Abyssal Priest","Titanspawn","7",["71"],["2","1"],"2","behavior","2","http://i.imgur.com/fPtcAQe.jpg"),
abyssalSage = new Aspect("Abyssal Sage","Titanspawn","7",["71"],["2"],"2","behavior","2","http://i.imgur.com/y7zM752.jpg"),
abyssAncient = new Aspect("Abyss Ancient","Titanspawn","7",["73"],["3"],"1","behavior","2","http://i.imgur.com/FBhUm4Z.png"),
 agentVoid = new Aspect("Agent of the Void","Titanspawn","3",["32"],["2"],"2","behavior","2","http://i.imgur.com/DnRaFjz.jpg"), 
 ancientWitch = new Aspect("Ancient Witch","Titanspawn","6",["65"],["2"],"2","behavior","2","http://i.imgur.com/IIpthjn.jpg"),
 angel = new Aspect("Knight Angel","Titanspawn","4",["41"],["2","1"],"2","behavior","1","http://i.imgur.com/KVbDBKh.jpg"),
 angelPriest = new Aspect("Angel Priest","Titanspawn","4",["41"],["2","1"],"2","behavior","2","http://i.imgur.com/brXas2u.jpg"),  
 arachnidBroodmother = new Aspect("Arachnid Broodmother","Titanspawn","6",["65"],["2"],"2","behavior","3","http://i.imgur.com/2APpNX1m.jpg"), 
arcaneGolem = new Aspect("Arcane Golem","Titanspawn","6",["63"],["1"],"2","behavior","2","http://i.imgur.com/e5Bkg0d.jpg"),
 archAngel = new Aspect("Archangel", "Titanspawn", "4",[ "41"], ["3"],"2","behavior","1","http://i.imgur.com/S9hj0PO.jpg"),
 armoredWight = new Aspect("Armored Wight","Titanspawn","8",["82"],["2"],"1","behavior","1","http://i.imgur.com/6gW6XJw.jpg"),
 ashGiant = new Aspect("Ash Giant","Titanspawn","1",["11"],["3"],"1","behavior","1","http://i.imgur.com/2chmjUal.jpg"),
 atlanticDevourer = new Aspect("Atlantic Devourer","Titanspawn","7",["74"],["3"],"1","behavior","2","http://i.imgur.com/x8NPgBo.jpg"),
 baddassosaurus = new Aspect("Badassosaurus","Titanspawn","6",["63"],["2"],"1","behavior","2","http://i.imgur.com/OHEyu8l.jpg"),
 barachiel = new Aspect("Barachiel, Wrath of the Heavens","Titanspawn","4",["41"],["4"],"2","behavior","2","http://i.imgur.com/eX9JSFs.jpg"),
 batKing = new Aspect("Bat King","Titanspawn","8",["83"],["3"],"2","behavior","3","http://i.imgur.com/J6qYdeBl.jpg"),
 blindConqueror = new Aspect("Blind Conqueror","Titanspawn","3",["31"],["2","3"],"2","behavior","2","http://i.imgur.com/liB2c0I.jpg"),
 blindJuggernaunt = new Aspect("Blind Juggernaunt","Titanspawn","3",["31","33"],["2","3"],"2","behavior","2","http://i.imgur.com/ihZpYkk.jpg"),
 blightPaladin = new Aspect("Blight Paladin","Titanspawn","6",["65"],["2","3"],"2","behavior","2","http://i.imgur.com/Fe3633g.jpg"),
 blightScarab = new Aspect("Blight Scarab","Titanspawn","6",["65"],["1","2"],"1","behavior","3","http://i.imgur.com/0KFPydk.jpg"),
 blightsteelColossus = new Aspect("Blightsteel Colossus","Titanspawn","6",["65"],["3","2"],"1","behavior","1","http://i.imgur.com/Q69GOwI.jpg"),
 blightWyrm = new Aspect("Blight Wyrm","Titanspawn","6",["65"],["3","2"],"1","behavior","1","http://i.imgur.com/KRreRap.jpg"),
 bringerDepths = new Aspect("Bringer of the Depths","Titanspawn","7",["71"],["3","2"],"2","behavior","2","http://i.imgur.com/x7XYmT2.jpg"),
 bringerEclipse = new Aspect("Bringer of Eclipse","Titanspawn","2",["21"],["3"],"2","behavior","2","http://i.imgur.com/qOxA24a.jpg"), 
broodofAbzu = new Aspect("Brood of Abzu","Titanspawn","7",["73"],["2","3","1"],"1","behavior","2","http://i.imgur.com/Ooq5rj7.jpg"),
 burntElf = new Aspect("Burnt Elf","Titanspawn","1",["12"],["1","2"],"2","behavior","3","http://i.imgur.com/ScsuifE.jpg"),
caveCyclops = new Aspect("Cave Cyclops","Titanspawn","3",["33"],["2"],"2","behavior","2","http://i.imgur.com/ywXlwLU.jpg"),
caveNymph = new Aspect("Cave Nymph","Titanspawn","6",["65"],["2","1"],"2","behavior","2","http://i.imgur.com/MnAYMAM.jpg"),
 chainedSoul = new Aspect("Chained Soul","Titanspawn","8",["81"],["1","2"],"1","behavior","2","http://i.imgur.com/MVbhgr7.png"),
 cherubAngel = new Aspect("Cherub", "Titanspawn", "4", ["41"], ["1"],"2","behavior","2","http://i.imgur.com/NxEFxT5.jpg"),
childMadness = new Aspect("Child of Madness","Titanspawn","3",["32"],["2"],"1","behavior","2","http://i.imgur.com/ggVX9nd.jpg"),
childofYam = new Aspect("Child of Yam","Titanspawn","7",["71"],["1","2"],"1","behavior","2","http://i.imgur.com/76Hi052.jpg"),
 chitinousAbomination = new Aspect("Chitinous Abomination","Titanspawn","6",["65"],["2"],"1","behavior","2","http://i.imgur.com/JXEo071.jpg"),
 clockworkGnome = new Aspect("Clockwork Gnome","Titanspawn","6",["63"],["1"],"2","behavior","1","http://i.imgur.com/61HINJL.jpg"),
 clockWorkGnome = new Aspect("Clockwork Gnome","Titanspawn","1",["13"],["1"],"2","behavior","1","http://i.imgur.com/61HINJL.jpg"),
 cloudBreaker = new Aspect("Cloud Breaker","Titanspawn","5",["52"],["3"],"2","behavior","1","http://i.imgur.com/9DKIlZZ.jpg"),
 cloudDjinn = new Aspect("Cloud Djinn","Titanspawn","5",["53"],["2","3"],"2","behavior","1","http://i.imgur.com/TOtMBMR.jpg"),
cloudKeeper = new Aspect("Cloud Keeper","Titanspawn","5",["53"],["3"],"2","behavior","2","http://i.imgur.com/EDTqH0I.jpg"),
 corpseSpider = new Aspect("Corpse Spider","Titanspawn","8",["83"],["1"],"1","behavior","1","http://i.imgur.com/19vnxLK.jpg"),
corpseDevourer = new Aspect("Corpse Devourer","Titanspawn","8",["83"],["1","2"],"1","behavior","2","http://i.imgur.com/pod2fOi.jpg"),
 cottus = new Aspect("Cottus the Furious, Second of the Hecatonkheires","Titanspawn","6",["61"],["4"],"2","behavior","2","http://i.imgur.com/660AZAG.jpg"),
crazedGeist = new Aspect("Crazed Geist","Titanspawn","8",["82"],["1"],"1","behavior","2","http://i.imgur.com/YkXHvVm.jpg"),
darkPuppeteer = new Aspect("Dark Puppeteer","Titanspawn","3",["32"],["2","3"],"2","behavior","2","http://i.imgur.com/iZzjU5Z.jpg"),
 darkQueen = new Aspect("Dark Queen","Titanspawn","2",["21","23"],["3"],"2","behavior","1","http://i.imgur.com/k5BQY0O.jpg"),
 darkSilencer = new Aspect("Dark Silencer","Titanspawn","3",["31"],["2"],"2","behavior","2","http://i.imgur.com/aHAPoov.jpg"),
deepDweller = new Aspect("Deep Dweller","Titanspawn","7",["71","73"],["2","3"],"1","behavior","2","http://i.imgur.com/kXE6iDu.jpg"),
 deepOne = new Aspect("Deep One","Titanspawn","7",["73"],["2"],"1","behavior","1","http://i.imgur.com/g65FPvi.jpg"),    
 depthsPriest = new Aspect("Priest of the Depths","Titanspawn","7",["71"],["2"],"2","behavior","2","http://i.imgur.com/beJkyqO.jpg"),
 desertSnake = new Aspect("Desert Snake","Titanspawn","4",["42"],["1"],"1","behavior","1","http://i.imgur.com/NlocRHB.png"), 
devourer = new Aspect("Devourer","Titanspawn","8",["83"],["2"],"1","behavior","2","http://i.imgur.com/sV6KUdo.jpg"),
 djilluminatus = new Aspect("Djinn Illuminatus","Titanspawn","4",["41"],["2","3"],"2","behavior","2","http://i.imgur.com/adypqZz.jpg"),  
 drownedKeeper = new Aspect("Keeper of the Drowned","Titanspawn","7",["73"],["1"],"2","behavior","1","http://i.imgur.com/IZdInGS.jpg"),    
dolgrund = new Aspect("Dolgrund, Shadow King of An'leth","Titanspawn","3",["33"],["4"],"2","behavior","2","http://i.imgur.com/HiUWgs5.jpg"),
dryadAshes = new Aspect("Dryad of Ashes","Titanspawn","1",["12"],["1"],"2","behavior","2","http://i.imgur.com/lcUN7j6.jpg"),
enchantingSiren = new Aspect("Enchanting Siren","Titanspawn","5",["53"],["1"],"2","behavior","2","http://i.imgur.com/8R7AVGv.jpg"),
etherealDrake = new Aspect("Ethereal Drake","Titanspawn","8",["81"],["2"],"2","behavior","2","http://i.imgur.com/a0lsfvZ.jpg"),
 facelessLegionnaire = new Aspect("Faceless Legionnaire","Titanspawn","3",["31"],["1"],"2","behavior","1","http://i.imgur.com/uwizIO6.jpg"),
falseSavior = new Aspect("False Savior","Titanspawn","4",["41"],["2"],"2","behavior","2","http://i.imgur.com/tSr4AZj.jpg"),
 fenrisAlpha = new Aspect("Fenris Alpha", "Titanspawn", "2", ["22"], ["3","2"],"2","behavior","1","http://i.imgur.com/wnyudvk.jpg"),
 fenrisGiant = new Aspect("Fenris Giant","Titanspawn","2",["22"],["3","2"],"1","behavior","1","http://i.imgur.com/tdC6osc.jpg"),
 fenrisWolf = new Aspect("Fenris Wolf","Titanspawn","2",["22"],["1","2"],"1","behavior","3","http://i.imgur.com/Cxl9cvM.jpg"),
 festerhideBoar = new Aspect("Festerhide Boar","Titanspawn","6",["65"],["1","2"],"1","http://i.imgur.com/ee5c2xL.jpg"),
 fireAnt = new Aspect("Fire Ant","Titanspawn","1",["13"],["1"],"1","behavior","3","http://i.imgur.com/s1HeQz8.png"),
 fireBird = new Aspect("Fire Bird","Titanspawn","1",["12"],["1"],"1","behavior","1","http://i.imgur.com/uQCV2Ja.jpg"),
 fireColossus = new Aspect("Fire Colossus","Titanspawn","1",["13"],["3"],"1","behavior","1","http://i.imgur.com/4QvgyCw.jpg"),
 fireGiant = new Aspect("Fire Giant", "Titanspawn", "1", ["12"],["3","2"],"2","behavior","1","http://imgur.com/NOT7aEY.jpg"),
 fireLord = new Aspect("Fire Lord","Titanspawn","1",["12"],["3"],"2","behavior","2","http://i.imgur.com/Zug0tO7.jpg"),
 fireRevenant = new Aspect("Fire Revenant","Titanspawn","1",["12"],["2"],"2","behavior","2","http://i.imgur.com/r5DyVWO.jpg"),    
firewalker = new Aspect("Firewalker","Titanspawn","1",["12"],["1"],"1","behavior","2","http://i.imgur.com/0tPWTCi.jpg"),
 fireWyrm = new Aspect("Fire Wyrm", "Titanspawn", "1", ["12"],["2","3"],"1","behavior","1","http://i.imgur.com/9UC0iDn.jpg"),
 fomorian = new Aspect("Fomorian","Titanspawn","6",["65"],["1"],"2","behavior","1","http://i.imgur.com/t5jfTfs.jpg"),
 fomorianChieftain = new Aspect("Fomorian Chieftain","Titanspawn","6",["65"],["2"],"2","behavior","1","http://i.imgur.com/cWUrgVF.jpg"),
 fomorianHound = new Aspect("Fomorian Hound","Titanspawn","6",["65"],["1"],"1","behavior","3","http://i.imgur.com/lKa51EE.jpg"),    
 fomorianOgre = new Aspect("Fomorian Ogre","Titanspawn","6",["65"],["3"],"2","behavior","1","http://i.imgur.com/Lpfz0CZ.jpg"),    
 fomorianWarlock = new Aspect("Fomorian Warlock","Titanspawn","6",["65"],["2"],"2","behavior","1","http://i.imgur.com/bzS9Wpf.jpg"),
 forestGiant = new Aspect("Forest Giant","Titanspawn","6",["61"],["3","2"],"2","behavior","1","http://i.imgur.com/wGM3H2q.jpg"),
 forestSoulstealer = new Aspect("Forest Soulstealer","Titanspawn","8",["81"],["2"],"1","behavior","2","http://i.imgur.com/giFh9jh.jpg"),    
forestWyrm = new Aspect("Forest Wyrm","Titanspawn","6",["61","65","62"],["2","3"],"1","behavior","2","http://i.imgur.com/gEpCEPv.jpg"),
foundryChampion = new Aspect("Foundry Champion","Titanspawn","1",["13"],["2"],"1","behavior","2","http://i.imgur.com/8FRYxDH.jpg"),
 frogElder = new Aspect("Frog Elder","Titanspawn","6",["61"],["1","2"],"2","behavior","2","http://i.imgur.com/iZ8e1CF.jpg"),
FungusSpawn = new Aspect("Fungus Spawn","Titanspawn","6",["61"],["1"],"1","behavior","2"),
 garmSpawn = new Aspect("Garm Spawn","Titanspawn","1",["12"],["1"],"1","behavior","1","http://i.imgur.com/zzRa39l.jpg"),    
 gemstoneGolem = new Aspect("Gemstone Golem","Titanspawn","6",["64"],["3","2"],"1","behavior","1","http://i.imgur.com/xZYlvx0.jpg"),
 ghoul = new Aspect("Ghoul","Titanspawn","8",["83"],["1","2"],"1","behavior","1","http://i.imgur.com/GArrLAM.jpg"),    
 giantCentipede = new Aspect("Giant Centipede","Titanspawn","6",["65"],["2"],"1","behavior","1","http://i.imgur.com/ZgPBeOf.jpg"),
 giantRat = new Aspect("Giant Rat","Titanspawn","6",["65"],["1"],"1","behavior","1","http://i.imgur.com/MmWJhbk.jpg"),
glarvonjar = new Aspect("Glarvonjar, Great Thane of Muspelheim","Titanspawn","1",["12"],["4"],"2","behavior","2","http://i.imgur.com/0PfXXCR.jpg"),
 gloag = new Aspect("Gloag'thul, the Reaper's Might","Titanspawn","8",["82"],["4"],"2","behavior","2","http://i.imgur.com/X7Jq3rS.jpg"),
goldenKnight = new Aspect("Golden Knight","Titanspawn","4",["42","41"],["2","3"],"2","behavior","2","http://i.imgur.com/SwJHBXJ.jpg"),
goldenRam = new Aspect("Golden Ram","Titanspawn","6",["63"],["2"],"1","behavior","2","http://i.imgur.com/qaeRW61.jpg"),
 graniteGolem = new Aspect("Granite Golem","Titanspawn","6",["64"],["2","3"],"1","behavior","1","http://i.imgur.com/PuVZbml.jpg"),
hauntedGuardian = new Aspect("Haunted Guardian","Titanspawn","8",["81","82"],["1","2"],"1","behavior","2","http://i.imgur.com/7vrHfD6.jpg"),
 hopeEater = new Aspect("Hope Eater","Titanspawn","2","21",["2"],"1","behavior","2","http://i.imgur.com/xD3KDRG.jpg"),    
hydraKing = new Aspect("Hydra King","Titanspawn","6",["61","62"],["3"],"1","behavior","2","http://i.imgur.com/Bje3G9A.jpg"),
icebergSwallower = new Aspect("Iceberg Swallower","Titanspawn","7",["71"],["2","3"],"1","behavior","2","http://i.imgur.com/Ifcvsae.jpg"),
janaleth = new Aspect("Janaleth the Defiant, King of the Desert","Titanspawn","4",["42"],["4"],"1","behavior","2","http://i.imgur.com/Njg991N.jpg"),
jokung = new Aspect("Jo'Kung, Breaker of Dynasties","Titanspawn","8",["82","83"],["3"],"2","behavior","2","http://i.imgur.com/BkjFyh4.jpg"),
 jormungandrSpawn = new Aspect("Spawn of Jormungandr","Titanspawn","7",["72"],["3"],"1","behavior","2","http://i.imgur.com/NiLH0D7.jpg"),
 kraken = new Aspect("Kraken","Titanspawn","7",["74"],["3","2"],"1","behavior","2","http://i.imgur.com/OIXbO4t.jpg"),
kunLa = new Aspect("Kun La, The Unmaker","Titanspawn","3",["32"],["4"],"2","behavior","2","http://i.imgur.com/SFlupSP.jpg"),
 lampDjinn = new Aspect("Lamp Djinn","Titanspawn","4",["42"],["1"],"2","behavior","2","http://i.imgur.com/tQ3VBYm.png"),
 lavaWyrm = new Aspect("Lava Wyrm","Titanspawn","1",["12","11"],["3","2"],"1","behavior","2","http://i.imgur.com/9UC0iDn.jpg"),
 lavaLegionnaire = new Aspect("Lava Legionnaire","Titanspawn","1",["11"],["1","2"],"1","behavior","1","http://i.imgur.com/zJWcnO7.jpg"),
 lesserPhoenix = new Aspect ("Lesser Phoenix","Titanspawn","4",["41"],["1","2"],"1","behavior","2","http://i.imgur.com/O4FF87t.jpg"),
 lightningCoatl = new Aspect("Lightning Coatl","Titanspawn","5",["51"],["3","2"],"2","behavior","2","http://i.imgur.com/IcSsvbJ.jpg"),
lightningTroll = new Aspect("Lightning Troll","Titanspawn","5",["51"],["1"],"1","behavior","2","http://i.imgur.com/hIaOPrX.jpg"),
 lightPhoenix = new Aspect("Light Phoenix","Titanspawn","4",["41"],["3"],"1","behavior","2","http://i.imgur.com/i88n5m9.jpg"),
 livingAvalanche = new Aspect("Living Avalanche","Titanspawn","6",["64"],["3"],"1","behavior","2","http://i.imgur.com/0Uss89H.jpg"),
 livingRock = new Aspect("Living Rock","Titanspawn","6",["64"],["1"],"1","behavior","1","http://i.imgur.com/hLkwoXK.jpg"),
 lurkingNightmare = new Aspect("Lurking Nightmare","Titanspawn","2",["22"],["2"],"1","behavior","2","http://i.imgur.com/WXGcGud.jpg"),    
maskCollector = new Aspect("Mask Collector","Titanspawn","3",["33"],["3"],"2","behavior","2","http://i.imgur.com/8YnFelx.jpg"),
madnessMaker = new Aspect("Madness Maker","Titanspawn","3",["32"],["3"],"2","behavior","2","http://i.imgur.com/Gxo2XRW.jpg"),
magmaCaller = new Aspect("Magma Caller","Titanspawn","1",["12"],["2"],"2","behavior","2","http://i.imgur.com/t1hnNQm.jpg"),
 magmaCentaur = new Aspect("Magma Centaur","Titanspawn","1",["13"],["1"],"2","behavior","3","http://i.imgur.com/Ft3kTC1.jpg"),    
magmaGolem = new Aspect("Magma Golem","Titanspawn","1",["12"],["1","2"],"1","behavior","2","http://i.imgur.com/9qspqS6.jpg"),
 magmaSpewer = new Aspect("Magma Spewer","Titanspawn","1",["12"],["1"],"1","behavior","2","http://i.imgur.com/XDgXXTZ.jpg"),    
 maskMaker = new Aspect("Mask Maker","Titanspawn","4",["41"],["2"],"2","behavior","2","http://i.imgur.com/hpAKfH7.png"),
midnightHorror = new Aspect("Midnight Horror","Titanspawn","2",["21"],["2","1"],"1","behavior","2","http://i.imgur.com/BQYxMsV.jpg"),
nagaLeecher = new Aspect("Naga Leecher","Titanspawn","7",["72"],["2"],"2","behavior","2","http://i.imgur.com/WLLdsaT.jpg"),
nagaMyrmidon = new Aspect("Naga Myrmidon","Titanspawn","7",["72"],["2","1"],"2","behavior","2","http://i.imgur.com/3vmnmcb.jpg"),
nemeanRaptor = new Aspect("Nemean Raptor","Titanspawn","6",["61"],["1"],"1","behavior","2","http://i.imgur.com/5f1OcpG.jpg"),
 nightbringer = new Aspect("Nightbringer","Titanspawn","2",["21"],["3"],"2","behavior","2","http://i.imgur.com/LXaTRtk.jpg"),    
 nightDragon = new Aspect("Night Dragon","Titanspawn","2",["23"],["2","3"],"2","behavior","2","http://i.imgur.com/DiPKaVJ.jpg"),
 nightGiant = new Aspect("Night Giant","Titanspawn","2",["21"],["3"],"2","behavior","1","http://i.imgur.com/Nw8ms5d.jpg"),
nightmareMindcrawler = new Aspect("Nightmare Mindcrawler","Titanspawn","2",["22"],["1"],"1","behavior","2","http://i.imgur.com/GhV2E3a.jpg"),
nightTroll = new Aspect("Night Troll", "Titanspawn", "2", ["21"], ["1","2"],"2","behavior","1","http://i.imgur.com/b2Ak1bC.jpg"),
 nightWyrm = new Aspect("Night Wyrm","Titanspawn","2",["23"],["3","2"],"1","behavior","1","http://i.imgur.com/VeL4N81.jpg"),
noxiousTyrant = new Aspect("Noxious Tyrant","Titanspawn","6",["65"],["3"],"2","behavior","2","http://i.imgur.com/3x7sIwI.jpg"),
oceanBehemoth = new Aspect("Ocean Behemoth","Titanspawn","7",["71"],["3"],"1","behavior","2","http://i.imgur.com/MkUTK6P.jpg"),
ornateGolem = new Aspect("Ornate Golem","Titanspawn","6",["63"],["2"],"1","behavior","2","http://i.imgur.com/nxdHk5r.jpg"),
 orthosSpawn = new Aspect("Orthos Spawn","Titanspawn","6",["61"],["1","2"],"1","behavior","1","http://i.imgur.com/Lj6xNZ6.jpg"),
paleSeer = new Aspect("Pale Seer","Titanspawn","3",["32"],["2","3"],"2","behavior","2","http://i.imgur.com/vNLrhJa.jpg"),
plagueDragon = new Aspect("Plague Dragon","Titanspawn","6",["65"],["3"],"2","behavior","2","http://i.imgur.com/SuZ38JA.jpg"),
pliosaurus = new Aspect("Pliosaurus","Titanspawn","7",["71"],["2"],"1","behavior","2","http://i.imgur.com/17prnrk.jpg"),
raiju = new Aspect("Raiju, the Living Thunder","Titanspawn","5",["51"],["4"],"1","behavior","2","http://i.imgur.com/INfKDZ5.jpg"),
 rasaj = new Aspect("Rasaj, First Herald of Aten","Titanspawn","4",["41"],["4"],"2","behavior","2","http://i.imgur.com/I7tJJZr.jpg"),
 reacherDepths = new Aspect("Reacher of the Depths","Titanspawn","7",["74"],["2","3"],"1","behavior","2","http://i.imgur.com/x1DfWA5.jpg"),
reanimatedDragon = new Aspect("Reanimated Dragon","Titanspawn","8",["82"],["3"],"1","behavior","2","http://i.imgur.com/O6tnBD7.jpg"),
 runicGuardian = new Aspect("Runic Guardian","Titanspawn","6",["62"],["2","1"],"2","behavior","1","http://i.imgur.com/qg8pAwX.jpg"),
 sandDjinn = new Aspect("Sand Djinn","Titanspawn","4",["42"],["2","3"], "1","behavior","1","http://i.imgur.com/XVGRtx3.jpg"),
 sandWyrm = new Aspect("Sand Wyrm","Titanspawn","4",["42"],["1","2"],"1","behavior","1","http://i.imgur.com/URi7YQt.jpg"),
sakhanet = new Aspect("Sakhanet, Echo of the Void","Titanspawn","3",["32"],["4"],"2","behavior","2","http://i.imgur.com/RiJ8vl5.jpg"),
 salamander = new Aspect("Salamander","Titanspawn","1",["11"],["1","2"],"2","behavior","2","http://i.imgur.com/5KPNuzG.jpg"), 
 savageChimera = new Aspect("Savage Chimera","Titanspawn","6",["61"],["2"],"1","behavior","1","http://i.imgur.com/zBe9FIH.jpg"),
 seaDjinn = new Aspect("Sea Djinn","Titanspawn","7",["72"],["2","3"],"2","behavior","1","http://i.imgur.com/ZRZoQ8e.png"),
 seaSerpent = new Aspect("Sea Serpent","Titanspawn","7",["71"],["2","3"],"1","behavior","1","http://i.imgur.com/KqlrRh2.jpg"),    
 seaWitch = new Aspect("Sea Witch","Titanspawn","7",["74"],["2","1"],"1","behavior","1","http://i.imgur.com/e2PmzPe.jpg"),
 seerAngel = new Aspect("Harbinger of Aten", "Titanspawn", "4", ["41"], ["3","2"],"2","behavior","2","http://i.imgur.com/EtjtCdu.jpg"),
serpentLord = new Aspect("Serpent Lord","Titanspawn","6",["61"],["2"],"2","behavior","2","http://i.imgur.com/MjeVnp3.jpg"),
 shadeWidow = new Aspect("Shade Widow","Titanspawn","3",["32"],["3","2"],"1","behavior","3","http://i.imgur.com/x3wYmvw.jpg"),
shadowBehemoth = new Aspect("Shadow Behemoth","Titanspawn","3",["31"],["3"],"2","behavior","2","http://i.imgur.com/6JIKtWk.jpg"),
 shadowFiend = new Aspect("Shadow Fiend","Titanspawn","3",["32"],["3","2"],"2","behavior","3","http://i.imgur.com/yvx7qo7.jpg"),    
shiningKnight = new Aspect("Shining Knight","Titanspawn","4",["41"],["2"],"2","behavior","2","http://i.imgur.com/EnsX8h5.jpg"),
 silencer = new Aspect("Silencer","Titanspawn","3",["31"],["1","2"],"1","behavior","2","http://i.imgur.com/Y8kEtl1.jpg"),
silentSamurai = new Aspect("Silent Samurai","Titanspawn","3",["32"],["1"],"2","behavior","2","http://i.imgur.com/5JlLzDZ.jpg"),
skeleton = new Aspect("Skeleton","Titanspawn","8",["82"],["1"],"1","behavior","1","http://i.imgur.com/GndSLar.jpg"),
 skeletonWarlock = new Aspect("Skeleton Warlock","Titanspawn","8",["82"],["1"],"2","behavior","1","http://i.imgur.com/omxMk0d.jpg"),
skoll = new Aspect("Skoll, Son of Fenrir","Titanspawn","2",["22"],["4"],"1","behavior","2","http://i.imgur.com/4NN8YzH.jpg"),
 spawnAbyss = new Aspect("Spawn of the Abyss","Titanspawn","7",["73"],["2"],"1","behavior","1","http://i.imgur.com/NNDxxLI.jpg"),
spiritDragon = new Aspect("Spirit Dragon","Titanspawn","8",["81"],["2"],"2","behavior","2","http://i.imgur.com/3ftCymJ.jpg"),
sonoftheDeep = new Aspect("Son of the Deep","Titanspawn","7",["71"],["1"],"2","behavior","2","http://i.imgur.com/1aJN2cz.jpg"),
soulCollector = new Aspect("Soul Collector","Titanspawn","8",["81"],["2","3"],"2","behavior","2","http://i.imgur.com/DdNOld4.jpg"),
 soulReaper = new Aspect("Soul Reaper","Titanspawn","8",["82"],["2"],"2","behavior","1","http://i.imgur.com/FqQoOzE.jpg"),
 soulSearer = new Aspect("Soul Searer","Titanspawn","8",["82"],["3","2"],"2","behavior","2","http://i.imgur.com/kxkMaW8.jpg"),
starChild = new Aspect("Star Child","Titanspawn","2",["24"],["2"],"2","behavior","2","http://i.imgur.com/2ZHAcN0.jpg"),
 steelcladGiant = new Aspect("Steelclad Giant","Titanspawn","6",["63"],["3","2"],"2","behavior","1","http://i.imgur.com/q50wOJu.jpg"),
 steelCoatl = new Aspect("Steel Coatl","Titanspawn","5",["51"],["2"],"2","behavior","1","http://i.imgur.com/wtEnkkm.jpg"),
 steelSerpent = new Aspect("Steel Serpent","Titanspawn","6",["63"],["1","2"],"1","behavior","3","http://i.imgur.com/D6Sd5Mf.jpg"),
stitchedGladiator = new Aspect("Stitched Gladiator","Titanspawn","8",["83"],["1"],"2","behavior","2","http://i.imgur.com/UYdHCOr.jpg"),
 stitchedHorror = new Aspect("Stitched Horror","Titanspawn","3",["31"],["2"],"1","behavior","1","http://i.imgur.com/TeJEYrH.jpg"),
 stoneColossus = new Aspect("Stone Colossus","Titanspawn","6",["64"],["2"],"","behavior","1","http://i.imgur.com/rMuOrWP.jpg"),    
 stoneDragon = new Aspect("Stone Dragon","Titanspawn","6",["62"],["3","2"],"2","behavior","1","http://i.imgur.com/Ra20tJ6.png"), 
stormBroodlord = new Aspect("Storm Broodlord","Titanspawn","5",["51"],["3"],"1","behavior","2","http://i.imgur.com/wCGF41m.jpg"),
 stormbornMyrmidon = new Aspect("Stormborn Myrmidon","Titanspawn","5",["52"],["2","3"],"2","behavior","1","http://i.imgur.com/0EVug2Z.jpg"),
sulTharash = new Aspect("Sul'Tharash, Bane of Atlantis","Titanspawn","7",["71","72"],["4"],"2","behavior","2","http://i.imgur.com/0FM4f6C.jpg"),
     sunDrake = new Aspect("Sun Drake","Titanspawn","4",["41"],["3","2"],"2","behavior","2","http://i.imgur.com/x6yjUl8.jpg"),
 surtrJuggernaut = new Aspect("Surtr Juggernaut","Titanspawn","1",["12"],["3"],"2","behavior","1","http://i.imgur.com/NOT7aEY.jpg"),
swampDweller = new Aspect("Swamp Dweller","Titanspawn","7",["74"],["1"],"1","behavior","2","http://i.imgur.com/yTmz7uY.jpg"),
 swampHulk = new Aspect("Swamp Hulk","Titanspawn","6",["61"],["2","3"],"1","behavior","1","http://i.imgur.com/5XFk0gT.jpg"),
swampSkeleton = new Aspect("Swamp Skeleton","Titanspawn","8",["82"],["1"],"1","behavior","2","http://i.imgur.com/8dtyGE1.jpg"),
talospromise = new Aspect("Talos Mark VIII, Prometheus' Promise","Titanspawn","1",["13"],["4"],"1","behavior","2","http://i.imgur.com/VMtJxYk.jpg"),
tazintli = new Aspect("Tatzintlicoatl, Patriarch of the Lightning Serpents","Titanspawn","5",["51"],["4"],"2","behavior","2","http://i.imgur.com/tDCZsms.jpg"),
templeGolem = new Aspect("Temple Golem","Titanspawn","6",["63"],["2"],"1","behavior","2","http://i.imgur.com/Qk0J5s9.jpg"),
terastodon = new Aspect("Terastodon","Titanspawn","6",["61"],["2"],"1","behavior","2","http://i.imgur.com/7WM1Bd9.jpg"),
theBeastBelow = new Aspect("The Beast Below","Titanspawn","7",["74"],["4"],"1","behavior","2","http://i.imgur.com/VHNpxXw.jpg"),
theBehemoth = new Aspect("The Behemoth","Titanspawn","6",["62"],["4"],"1","behavior","2","http://i.imgur.com/NCd9KiE.jpg"),
theCountess = new Aspect("The Countess of Blood, First Born of Dracula","Titanspawn","2",["23"],["4"],"2","behavior","2","http://i.imgur.com/qY8wEee.jpg"),
theFlayer = new Aspect("The Flayer, Terror of the Underworld","Titanspawn","8",["83"],["4"],"1","behavior","2","http://i.imgur.com/IVqwxoy.jpg"),
thunderDragon = new Aspect("Thunder Dragon","Titanspawn","5",["51"],["3","2"],"2","behavior","1","http://i.imgur.com/rrk7dTl.jpg"),  
 tideSpoutTyrant = new Aspect("Tidespout Tyrant","Titanspawn","7",["71"],["2","3"],"2","http://i.imgur.com/xvhPIhR.jpg"),
tritonFootman = new Aspect("Triton Footman","Titanspawn","7",["72","73","71"],["1"],"2","behavior","2","http://i.imgur.com/IB4skAc.jpg"),
trokan = new Aspect("Trokan, The King of Bones","Titanspawn","8",["82"],["4"],"2","behavior","2","http://i.imgur.com/eT6ntWs.jpg"),
tsunamiDragon = new Aspect("Tsunami Dragon","Titanspawn","7",["73","72","71"],["2","3"],"2","behavior","2","http://i.imgur.com/yYTVHha.jpg"),
tuskedMastodon = new Aspect("Tusked Mastodon","Titanspawn","6",["62"],["1"],"1","behavior","2","http://i.imgur.com/zwWwT3q.jpg"),
twistedDryad = new Aspect("Twisted Dryad","Titanspawn","3",["32"],["1","2"],"2","behavior","2","http://i.imgur.com/9gvtr4d.jpg"),
 twistedSoulcursed = new Aspect("Twisted Soulcursed","Titanspawn","8",["82"],["3","2"],"1","behavior","2","http://i.imgur.com/uuMetIe.jpg"), 
 undeadKing = new Aspect("Undead King","Titanspawn","8",["81"],["2","3"],"2","behavior","1","http://i.imgur.com/aYufjEf.jpg"),
underkingdomHerald = new Aspect("Underkingdom Herald","Titanspawn","3",["33"],["2"],"2","behavior","2","http://i.imgur.com/rI1wHPA.jpg"),
underworldKnight = new Aspect("Underworld Knight","Titanspawn","3",["33"],["2"],"2","behavior","2","http://i.imgur.com/MgUjbfJ.jpg"),
 valkyrie = new Aspect("Valkyrie","Titanspawn","8",["81"],["2"],"2","behavior","1","http://i.imgur.com/1CvhuV0.jpg"),
voidMyrmidon = new Aspect("Void Myrmidon","Titanspawn","3",["33"],["1"],"2","behavior","2","http://i.imgur.com/Y0cZi4V.jpg"),
 volcanoCyclops = new Aspect("Volcano Cyclops","Titanspawn","1",["13"],["2","1"],"2","behavior","1","http://i.imgur.com/GKTE8TB.jpg"),
volcanicTyrant = new Aspect("Volcanic Tyrant","Titanspawn","1",["12"],["3"],"2","behavior","2","http://i.imgur.com/fSgS4GO.jpg"),
vulsrak = new Aspect("Vulsrak, the Dark Tyrant","Titanspawn","3",["33","32","31"],["4"],"2","behavior","2","http://i.imgur.com/137so4v.jpg"),
warpedCockRoach = new Aspect("Warped Cockroach","Titanspawn","6",["65"],["1"],"1","behavior","1","http://i.imgur.com/UNNxvNm.jpg"),
wildScorcher = new Aspect("Wild Scorcher","Titanspawn","2",["22"],["2","3"],"1","behavior","2","http://i.imgur.com/jjuKq9D.jpg"),
willBreaker = new Aspect("Will Breaker","Titanspawn","4",["41"],["3"],"2","behavior","2","http://i.imgur.com/O9jNhvp.jpg"),
 worldBurner = new Aspect("World Burner","Titanspawn","1",["11"],["3"],"2","behavior","2","http://i.imgur.com/xYxHR10.jpg"),
zombieGoblin = new Aspect("Zombie Goblin","Titanspawn","8",["82"],["1"],"1","behavior","2","http://i.imgur.com/3yKehKu.jpg"),
zulMadan = new Aspect("Zul Madan, the Eternal","Titanspawn","3",["31"],["4"],"1","behavior","2","http://i.imgur.com/zJu6p0o.jpg"),

     
 
     
    // Mythborn  
    
ancientCoatl = new Aspect("Ancient Coatl","Mythborn","3",["34"],["2"],"2","behavior","2","http://i.imgur.com/OM2DO6S.jpg"),
ancientDeer = new Aspect("Ancient Deer","Mythborn","4",["43"],["1"],"1","behavior","2","http://i.imgur.com/Ki6qew0.jpg"),
ancientTurtle = new Aspect("Ancient Turtle","Mythborn","4",["43"],["2"],"1","behavior","2","http://i.imgur.com/N5BPXMy.jpg"),
armoredMinotaur = new Aspect("Armored Minotaur","Mythborn","4",["43"],["1","2"],"2","behavior","2","http://i.imgur.com/qo5NA08.jpg"),
assimilatedGuardian = new Aspect("Assimilated Guardian","Mythborn","4",["41"],["1"],"1","behavior","2","http://i.imgur.com/LDSBiza.jpg"),
asuraDuelist = new Aspect("Asura Duelist","Mythborn","5",["52"],["2"],"2","behavior","2","http://i.imgur.com/yPmGqCl.jpg"),
aukuang = new Aspect("Au Kuang, Dragon King","Mythborn","3",["32"],["4"],"2","behavior","2","http://i.imgur.com/uo3nDec.jpg"),
aoShun = new Aspect("Ao Shun, Dragon King of the North Sea","Mythborn","3",["32"],["4"],"2","behavior","2","http://i.imgur.com/U0LA5mO.jpg"),
blackKnight = new Aspect("Black Knight","Mythborn","2",["22"],["2"],"2"),   
 brimstoneDragon = new Aspect("Brimstone Dragon","Mythborn","3",["31"],["2","3"],"2"),
burningSwordmaster = new Aspect("Burning Swordmaster","Mythborn","5",["52"],["1","2"],"2","behavior","2","http://i.imgur.com/15aZHGl.jpg"),
caveNymph = new Aspect("Cave Nymph","Mythborn","4",["44"],["2"],"2","behavior","2","http://i.imgur.com/MnAYMAM.jpg"),
 centaurHunter = new Aspect("Centaur Hunter","Mythborn","4",["43"],["1","2"],"2"), 
coatlLord = new Aspect("Coatl Lord","Mythborn","3",["34"],["3"],"2","behavior","2","http://i.imgur.com/gFaWYAJ.jpg"),
 darkElfSoldier = new Aspect("Dark Elf Soldier","Mythborn","1",["22"],["1","2"],"2"),
 diamondFairy = new Aspect("Diamond Fairy","Mythborn","2",["21"],["2"],"2"),
drakonidFighter = new Aspect("Drakonid Fighter","Mythborn","3",["31"],["1"],"2","behavior","2","http://i.imgur.com/NM1DaVf.jpg"),
drakonidKnight = new Aspect("Drakonid Knight","Mythborn","3",["31"],["2"],"2","behavior","2","http://i.imgur.com/qfliQrG.jpg"),
drakonidMage = new Aspect("Drakonid Mage","Mythborn","3",["31"],["2"],"2","behavior","2","http://i.imgur.com/VTPu8df.jpg"),
enchantedCrusher = new Aspect("Enchanted Crusher","Mythborn","4",["43"],["2"],"1","behavior","2","http://i.imgur.com/jTXmPXi.jpg"),
entBehemoth = new Aspect("Ent Behemoth","Mythborn","4",["41"],["2","3"],"1","behavior","2","http://i.imgur.com/PvPfYFK.jpg"),
evilEnt = new Aspect("Evil Ent","Mythborn","4",["41"],["1","2"],"1","behavior","2","http://i.imgur.com/8jMpzso.jpg"),
forestSpirit = new Aspect("Forest Spirit","Mythborn","4",["43"],["1"],"1","behavior","2","http://i.imgur.com/KQmU120.jpg"),
frogBehemoth = new Aspect("Frog Behemoth","Mythborn","4",["43"],["2","3"],"1","behavior","2","http://i.imgur.com/w2nUzpb.jpg"),
frostHungerer = new Aspect("Frost Hungerer","Mythborn","2",["22"],["2"],"1","behavior","2","http://i.imgur.com/L7XQnCs.jpg"),
frozenEradicator = new Aspect("Frozen Eradicator","Mythborn","2",["22"],["2"],"2","behavior","2","http://i.imgur.com/UiCcC7Y.jpg"),
 furnaceWhelp = new Aspect("Whelp","Mythborn","3",["31"],["1","2"],"1"),  
ganeshiGiant = new Aspect("Ganeshi Giant","Mythborn","4",["43"],["2"],"2","behavior","2","http://i.imgur.com/k9ApgUp.jpg"),
garudaKing = new Aspect("Garuda King","Mythborn","4",["43"],["4"],"2","behavior","2","http://i.imgur.com/RUC1FT4.jpg"),
gladeGuardian = new Aspect("Glade Guardian","Mythborn","4",["41"],["1","2"],"1","behavior","2","http://i.imgur.com/1g7udZn.jpg"),
goblinAmbusher = new Aspect("Goblin Ambusher","Mythborn","1",["12"],["1","2"],"2","behavior","2","http://i.imgur.com/Vf9HDuG.jpg"),
goldenKnight2 = new Aspect("Golden Knight","Mythborn","1",["12"],["2"],"2","behavior","2","http://i.imgur.com/SwJHBXJ.jpg"),
hag = new Aspect("Hag","Mythborn","4",["44"],["1","2"],"2","behavior","2","http://i.imgur.com/5yBchyw.jpg"),
jackalGarouAmbushers = new Aspect("Jackal Garou Ambushers","Mythborn","4",["43"],["1"],"2","behavior","2","http://i.imgur.com/Y2IInBj.jpg"),
 mabChosen = new Aspect("Mab's Chosen","Mythborn","1",["22"],["2","3"],"2"),
 minotaur = new Aspect("Minautor","Mythborn","4",["43"],["2"],"2"),
minotaurShaman = new Aspect("Minotaur Shaman","Mythborn","4",["43"],["2"],"2","behavior","2","http://i.imgur.com/nrzUFPy.jpg"),
nagaMyrmidon = new Aspect("Naga Myrmidon","Mythborn","5",["54"],["2","1"],"2","behavior","2","http://i.imgur.com/3vmnmcb.jpg"),
nagaSchemer = new Aspect("Naga Schemer","Mythborn","3",["35"],["2"],"2","behavior","2","http://i.imgur.com/auttkMX.jpg"),
nagaSnake = new Aspect("Naga Snake","Mythborn","3",["35"],["1"],"1","behavior","2","http://i.imgur.com/DJzwk4z.jpg"),
nagaSoulstealer = new Aspect("Naga Soulstealer","Mythborn","3",["35"],["2"],"2","behavior","2","http://i.imgur.com/6zSQIwI.jpg"),
oakEnt = new Aspect("Oak Ent","Mythborn","4",["41"],["2"],"1","behavior","2","http://i.imgur.com/gEh6JYd.jpg"),
pixieLord = new Aspect("Pixie Lord","Mythborn","1",["14"],["2"],"2","behavior","2","http://i.imgur.com/oh7q9RG.jpg"),
raksashaBattleMage = new Aspect("Raksasha Battle Mage","Mythborn","5",["51"],["2"],"2","behavior","2","http://i.imgur.com/MyC1FJk.jpg"),
raksashaBrute = new Aspect("Raksasha Brute","Mythborn","5",["51"],["2"],"1","behavior","2","http://i.imgur.com/H354Ycn.jpg"),
raksashaGuardian = new Aspect("Raksasha Guardian","Mythborn","5",["51"],["2"],"2","behavior","2","http://i.imgur.com/Xy5hcSg.jpg"),
rakshasaJungleDweller = new Aspect("Rakshasa Jungle Dweller","Mythborn","5",["51"],["2"],"2","behavior","2","http://i.imgur.com/H6kuTC4.jpg"),
rhinoPriest = new Aspect("Rhino-Garou Priest","Mythborn","4",["43"],["2"],"2","behavior","2","http://i.imgur.com/ahR9xod.jpg"),
savageGoblin = new Aspect("Savage Goblin","Mythborn","1",["12"],["1"],"1","behavior","2","http://i.imgur.com/kxb05TQ.jpg"),
serpentLord = new Aspect("Serpent Lord","Mythborn","5",["54"],["2"],"2","behavior","2","http://i.imgur.com/MjeVnp3.jpg"),
 shadowUnicorn = new Aspect("Shadow Unicorn","Mythborn","2",["21"],["2"],"1"),
soulForest = new Aspect("Soul of the Forest","Mythborn","4",["41"],["2","3"],"1","behavior","2","http://i.imgur.com/2eX4m8g.jpg"),
 sprite = new Aspect("Sprite","Mythborn","1",["14"],["1"],"1"),
summerKnight = new Aspect("Summer Knight","Mythborn","1",["12"],["1","2"],"2","behavior","2","http://i.imgur.com/XT9cwhz.jpg"),
 swampDevil = new Aspect("Swamp Devil","Mythborn","3",["32"],["1"],"1","behavior","2","http://i.imgur.com/MFhu2bb.jpg"),
 swampWitch = new Aspect("Swamp Witch","Mythborn","4",["44"],["2"],"2","behavior","2","http://i.imgur.com/ALGs3uC.jpg"),
 summerCourtNoble = new Aspect("Summer Court Noble","Mythborn","1",["21"],["2","3"],"2"),
tenguBattlelord = new Aspect("Tengu Battlelord","Mythborn","4",["43"],["3"],"2","behavior","2","http://i.imgur.com/y0SEttX.jpg"),
tenguCaptain = new Aspect("Tengu Captain","Mythborn","4",["43"],["2"],"2","behavior","2","http://i.imgur.com/nul74vD.jpg"),
 timberWolf = new Aspect("Timber Wolf","Mythborn","4",["43"],["1"],"1"),
 titaniaChosen = new Aspect("Titania's Chosen","Mythborn","2",["12"],["1","2"],"2"),
tundraGoblin = new Aspect("Tundra Goblin","Mythborn","2",["22"],["1"],"2","behavior","2","http://i.imgur.com/sYVajn0.jpg"),
 twoHeadedDragon = new Aspect("Two-Headed Dragon","Mythborn","3",["33"],["2","3"],"2"),
wereElephanGuard = new Aspect("Were-Elephant Guard","Mythborn","4",["43"],["1","2"],"2","behavior","2","http://i.imgur.com/j1MnYIy.jpg"),
 willowFairy = new Aspect("Willow Fairy","Mythborn","1",["11"],["1"],"2"),
 winterCourtNoble = new Aspect("Winter Court Noble","Mythborn","1",["21"],["2","3"],"2"),    
woodlandDryad = new Aspect("Woodland Dryad","Mythborn","1",["15"],["1"],"2","behavior","2","http://i.imgur.com/e1RUQy0.jpg"),
woodWarden = new Aspect("Wood Warden","Mythborn","4",["43"],["1","2"],"2","behavior","2","http://i.imgur.com/67gpudO.jpg")
    
    
    /* name = new Aspect("name","Mythborn","origin","subOrigin","legend","intelligence","behavior","combat1"),*/

]
    
   
// Ceci établi les différents candidats possibles pour le High Concept, laissant l'individu choisir celui qu'il préfere.

var highConceptOptions = [];

for(i=0; i < highConcept.length; i++) {
   if(
    (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
     typeChoice === highConcept[i].type &&
     originChoice === highConcept[i].origin &&
    (subOriginChoice === highConcept[i].subOrigin[0] || subOriginChoice === highConcept[i].subOrigin[1] || subOriginChoice === highConcept[i].subOrigin[2])  &&
    intelligenceChoice === highConcept[i].intelligence)
  {
      highConceptOptions.push(highConcept[i])
  }
     
     
    
  else if (typeChoice === highConcept[i].type && 
   typeChoice === highConcept[i].type &&
   originChoice === highConcept[i].origin &&
   subOriginChoice === "99" && 
   (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
   (intelligenceChoice === highConcept[i].intelligence))
  {
   highConceptOptions.push(highConcept[i])
  }
};

if ((typeof highConceptOptions[0] === 'undefined')&&(typeChoice === "Titanspawn")) {
for(i=0; i < highConcept.length; i++) {
  if (
    typeChoice === highConcept[i].type && 
    originChoice === highConcept[i].origin &&
   (legendChoice === highConcept[i].legend[0] || legendChoice === highConcept[i].legend[1] || legendChoice === highConcept[i].legend[2]) &&
    intelligenceChoice === highConcept[i].intelligence) 
  {
      highConceptOptions.push(highConcept[i])
  }
}
};
var highConceptsBeforeDefaults = highConceptOptions.length

// _______________________________________
    
    
// Default Titanspawn  -----------------------------------
// Si aucune High Concept ne fit tous les critères, plusieurs High Concept sont générés pour donner des options quand meme 

// _______________________________________

 
//if (typeof highConceptOptaions[3] === 'undefined') {
  
    
    // Titans Options
if (typeChoice === "Titanspawn" && originChoice === "4") {
     originDefault = ["Sun", "Sand", "Light","Bright","Shining","Radiant"]
}
else if (typeChoice === "Titanspawn" && originChoice === "2") {
     originDefault = ["Night", "Midnight", "Moonlit", "Nightmare","Dark","Somber","Twilight","Gloomy"]
}
else if (typeChoice === "Titanspawn" && originChoice === "8") {
     originDefault = ["Death", "Soul Eating","Dark","Grief","Grave","Ghost","Oblivion","Ruin"]
}
else if (typeChoice === "Titanspawn" && originChoice === "3") {
     originDefault = ["Darkness", "Faceless", "Silent","Obscure","Slithering"]
}
else if (typeChoice === "Titanspawn" && originChoice === "7") {
     originDefault = ["Drowned", "Naga", "Lizard","Sea","Mist","Ocean","Tentacled","Abyss","Ancient","Amphibian","Froglike","Shark"]
}
else if (typeChoice === "Titanspawn" && originChoice === "5") {
     originDefault = ["Wind", "Cloud", "Lightning","Flying","Mist","Fog","Sky","Heavenly"]
}
else if (typeChoice === "Titanspawn" && originChoice === "1") {
     originDefault = ["Lava", "Fire", "Ash","Blazing","Heat","Charred","Glowing","Devouring","Incandescent","Searing","Flaming","Pyromaniac"]
}
else if (typeChoice === "Titanspawn" && originChoice === "6") {
     originDefault = ["Swamp", "Rock", "Stone","Forest","Jungle","Giant","Mountain"]
}

// Combat 1 Options
    if (intelligenceChoice === "2") {
if (typeChoice === "Titanspawn" && combatChoice1 === "1") {
     combat1Default = ["Soldier","Legionnaire","Footsoldier","Cultist","Servant","Guard","Defender","Sentinel","Champion","Warrior",]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "2") {
     combat1Default = ["Sorcerer", "Prophet","Conjurer","Worshipper","Mage","Warlock","Wizard"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "3") {
     combat1Default = ["Scout", "Archer", "Assassin","Ranger","Spy","Agent","Lookout","Sentry","Sentinel"]
}
    }
    
else {
if (typeChoice === "Titanspawn" && combatChoice1 === "1") {
     combat1Default = ["Beast","Monster","Creature","Colossus","Fiend"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "2") {
     combat1Default = ["Invoker", "Primordial", "Servant"]
}
else if (typeChoice === "Titanspawn" && combatChoice1 === "3") {
     combat1Default = ["Lurker", "Creeper", "Hunter"]    
}
     
     
     
}
//}
    
    // Mythborn Options

     
if (typeChoice === "Mythborn" && originChoice === "2") {
    if (subOriginChoice === "21") { originDefault = ["Winter Fey","Frozen"]}
    else if (subOriginChoice === "22") { originDefault = ["Svartalfheim", "Dark Elf","Silver"]}
    else if (subOriginChoice === "23") { originDefault = ["Leprechaun", "Ice Korrigan", "Korrigan","Gnome"]}
    else if (subOriginChoice === "24") { originDefault = ["Pixie","Sprite"]}
    else if (subOriginChoice === "25") { originDefault = ["Stream Nymph", "Pine Dryad", "Frozen Dryad"]}
    else if (subOriginChoice === "99") { originDefault = ["Svartalfheim", "Dark Elf","Leprechaun", "Ice Korrigan", "Korrigan","Gnome","Pixie","Stream Nymph", "Pine Dryad", "Frozen Dryad"]}
}
else if (typeChoice === "Mythborn" && originChoice === "1") {
    if (subOriginChoice === "11") { originDefault = ["Summer Fey"]}
    else if (subOriginChoice === "12") { originDefault = ["Alfheim", "Light Elf","El Dorado","Annwn"]}
    else if (subOriginChoice === "13") { originDefault = ["Leprechaun", "Summer Korrigan", "Korrigan","Gnome"]}
    else if (subOriginChoice === "14") { originDefault = ["Pixie","Sprite"]}
    else if (subOriginChoice === "15") { originDefault = ["Vine Nymph", "Jungle Dryad", "Spring Dryad"]}
    else if (subOriginChoice === "98") { originDefault = ["Alfheim", "Light Elf","Leprechaun", "Summer Korrigan", "Korrigan","Gnome","Pixie","Vine Nymph", "Jungle Dryad", "Spring Dryad"]}
}
    
else if (typeChoice === "Mythborn" && originChoice === "3") {
    if (subOriginChoice === "31") { originDefault = ["Moutain Dragon","Forest Dragon","Cave Dragon"]}
    else if (subOriginChoice === "32") { originDefault = ["River Dragon", "Chinese Dragon"]}
    else if (subOriginChoice === "33") { originDefault = ["Wyvern"]}
    else if (subOriginChoice === "34") { originDefault = ["Coatl"]}
    else if (subOriginChoice === "35") { originDefault = ["Naga"]}
    else if (subOriginChoice === "99") { originDefault = ["Moutain Dragon","Forest Dragon","Cave Dragon","River Dragon", "Chinese Dragon","Wyvern","Coatl"]}
 
}
else if (typeChoice === "Mythborn" && originChoice === "4") {
    if (subOriginChoice === "41") { originDefault = ["Ent"]}
    else if (subOriginChoice === "42") { originDefault = ["Leprechaun", "Korrigan","Gnome"]}
    else if (subOriginChoice === "43") { originDefault = ["Loup-Garou","Were-Boar","Were-Spider","Were-Eagle","Were-Snake","Were-Bear"]}
    else if (subOriginChoice === "44") { originDefault = ["Hag"]}
    else if (subOriginChoice === "99") { originDefault = ["Leprechaun", "Korrigan","Gnome","Loup-Garou","Were-Boar","Were-Spider","Were-Eagle","Were-Snake","Were-Bear","Hag"]}
 
}
else if (typeChoice === "Mythborn" && originChoice === "5") {
    if (subOriginChoice === "51") { originDefault = ["Raksasha"]}
    else if (subOriginChoice === "52") { originDefault = ["Asura"]}
    else if (subOriginChoice === "53") { originDefault = ["Dryad","Nymph"]}
    else if (subOriginChoice === "54") { originDefault = ["Naga"]}
    else if (subOriginChoice === "99") { originDefault = ["Naga","Raksasha","Asura","Dryad","Nymph"]}
}
else if (typeChoice === "Mythborn" && originChoice === "6") {
    if (subOriginChoice === "61") { originDefault = ["Triton"]}
    else if (subOriginChoice === "52") { originDefault = ["Sea Nymph"]}
    else if (subOriginChoice === "99") { originDefault = ["Naga","Raksasha","Asura","Dryad","Nymph"]}
}     
          
// Combat 1 Options
    if (intelligenceChoice === "2") {
if (typeChoice === "Mythborn" && combatChoice1 === "1") {
     combat1Default = ["Fighter","Guard","Warrior","Brawler"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "2") {
     combat1Default = ["Sorcerer", "Mage", "Druid"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "3") {
     combat1Default = ["Scout", "Archer", "Assassin"]
}
    }
    
else {
if (typeChoice === "Mythborn" && combatChoice1 === "1") {
     combat1Default = ["Beast","Monster","Creature"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "2") {
     combat1Default = ["Wildcaller", "Mythcaller"]
}
else if (typeChoice === "Mythborn" && combatChoice1 === "3") {
     combat1Default = ["Lurker", "Creeper", "Hunter"]    
}    
    

    
} 

combat1DefaultRandom = ""
originDefaultRandom = ""
     function addRandom(){
combat1DefaultRandom = combat1Default[Math.floor(Math.random() * combat1Default.length)];
originDefaultRandom = originDefault[Math.floor(Math.random() * originDefault.length)];
defaultOriginAspect = new Aspect(originDefaultRandom + " " + combat1DefaultRandom,"0","0",["31"],["2","3"],"2"),     
highConceptOptions.push(defaultOriginAspect)}     

while (typeof highConceptOptions[3] === 'undefined') { 
 addRandom()
};    
choosingHighConcept = ""
for(i=0;i<highConceptOptions.length;i++){
if(i == highConceptsBeforeDefaults){choosingHighConcept += "  Defaults: \n"+ i + " " + highConceptOptions[i].name + "\n"}
else{choosingHighConcept+=(i + " " + highConceptOptions[i].name + "\n")}
}
 
//var randHighConcept = Math.floor(Math.random() * highConceptOptions.length)
//var imageLink = highConceptOptions[randHighConcept].combat2;
   
//var rand = highConceptOptions[randHighConcept].name;
        
chosenHighConcept = parseInt(prompt(choosingHighConcept))
 
var rand = highConceptOptions[chosenHighConcept].name
var imageLink = highConceptOptions[chosenHighConcept].combat2;


if(enemyNumber > 1){rand += " (" + enemyNumber + ")"};


//____________________________________________________________________________________________________


//First Aspect Chooser ---------------------------------------------------------------------------
// Génère un Aspect basé sur l'Origine

//____________________________________________________________________________________________________


var aspect1 = [
 nightAspects = new Aspect([
     "Stellar Light",
     "Full Moon",
     "Blind",
     "Night Stalker",
     "Born of the Darkness",
     "Hunger of Night",
     "Fear of the Light",
     "Behind You",
     "Child Snatcher",
     "He Comes at Night"], "Titanspawn", "2"),
 fireAspects = new Aspect([
     "Rage-Filled",
     "Walking Blaze",
     "Ash Maker",
     "Self Combustion",
     "Living Bomb",
     "I am the Fire in Firearms",
     "Mad Inventor",
     "Hatred of Water",
     "Walking Volcano"], "Titanspawn", "1"),
 lightAspects = new Aspect([
     "Divine Whiteness",
     "Light Cannot be Stopped",
     "A Light Into the Darkness",
     "Unworthy of My Sight",
     "Bright-Eyed Followers",
     "Sear Their Eyes",
     "Fervorous Faith",
     "Light Bringer",
     "Bright Presence"], "Titanspawn", "4"),
 waterAspects = new Aspect([
     "Drowning is Sacred",
     "To The Depths",
     "Amphibian",
     "Freezing Heart",
     "Drown Them All"],"Titanspawn","7"),  
 shadowAspects = new Aspect([
     "Extinguish the Light",
     "Reign Through Fear",
     "Shadow on the Land",
     "Shadow Affinity"],"Titanspawn","3"),
 skyAspects = new Aspect([
     "The Skies are Mine",
     "One With the Sky"],"Titanspawn","5"), 
 earthAspects = new Aspect([
     "Rotting Presence",
     "Symbiosis",
     "Born in the Jungle",
     "One With Nature",
     "Nature Lover",
     "Insatiable Hunger",
     "Hard as a Rock",
     "At One with the Land",
     "Underground Native",
     "Walking Factory",
     "We are Legion",
     "Horrid Stench"],"Titanspawn","6"),
 deathAspects = new Aspect([
     "Cold Embrace",
     "Feast of Souls"],"Titanspawn","8"),
 
 fairieSummerAspects = new Aspect([
     "Warm Embrace",
     "Summer is Coming",
     "Serve the Queen",
     "Worshipper of the Day",
     "Trickster",
     "Burning Touch",
     "Earthly Beauty",
     "Jungle Child",
     "Child Snatcher",
     "Walk Under the Sun"], "Mythborn", "1"), 
  fairieWInterAspects = new Aspect([
     "Cold Embrace",
     "Winter is Coming",
     "Serve the Queen",
     "Worshipper of the Night",
     "Trickster",
     "Cold Touch",
     "Ethereal Beauty",
     "Snow Lover",
     "Child Snatcher",
     "He Comes at Night"], "Mythborn", "2"),      
 jadeSeaAspects = new Aspect([
     "Fire Breath",
     "Frost Breath",
     "Water Mastery",
     "Sky Mastery",
     "The Master",
     "Tyrant",
     "Arrogant",
     "Wise",
     "Poison Breath"], "Mythborn", "3"),  
 darkForestAspects = new Aspect([
     "Creepy",
     "One with the Earth",
     "Attuned to the Forest",
     "Entling Servants",
     "Care for the Community",
     "Animal Companions"], "Mythborn", "4"),      
 shambhalaAspects = new Aspect([
     "Wise",
     "Karmic Obsession",
     "Well Connected",
     "Enlightened Allies",
     "Cultist Servants",
     "Respect for the Gods"], "Mythborn", "5"),      
    
// name = new Aspect("name","type","origin"),
]



var aspect1Options = aspect1.filter(function (el) {
  return el.type === typeChoice &&
         el.origin === originChoice 
});
var rand2 = aspect1Options[0].name[Math.floor(Math.random()*(aspect1Options[0].name.length))];

//____________________________________________________________________________________________________


//Second Aspect Chooser ---------------------------------------------------------------------------
// Génère un Aspect basé sur la personnalité

//____________________________________________________________________________________________________

var aspect2 = [
 sadisticGenius = new Aspect("Sadistic Genius","type","origin","subOrigin","legend","2","1"),
 berserkerBrute = new Aspect("Berserker Brute","type","origin","subOrigin","legend","1","1"),
 honorable1 = new Aspect("Honorable Beast","type","origin","subOrigin","legend","2","2"),
 wiseBeast = new Aspect("Wise Beast","type","origin","subOrigin","legend","1","2"),
 sadisticBrute = new Aspect("Sadistic Brute","type","origin","subOrigin","legend","1","1"),
 patientPolitician = new Aspect("Patient Politician","type","origin","subOrigin","legend","2","2"),
 reasonCivilized = new Aspect("No Reason Why We Can't Be Civilized", "type","origin","subOrigin","legend","2","2"),
 subteltyPower = new Aspect("Subtlety Is Its Own Power","type","origin","subOrigin","legend","2","2)"),
 justBusiness = new Aspect("Nothing Personal, It's Just Business","type","origin","subOrigin","legend","2","2"),
 strongRule = new Aspect("Only the Strong Are Fit to Rule","type","origin","subOrigin","legend","2","1"),
 politicsGame = new Aspect("Politics Is My Favorite Game","type","origin","subOrigin","legend","2","Manipulative"),
 speakSoftly = new Aspect("Speak Softly but Carry a Big Stick","type","origin","subOrigin","legend","2","2"),
 upholdLaw = new Aspect("Uphold the Law","type","origin","subOrigin","legend","2","2"),
 mercyCruelty = new Aspect("No Mercy, but No Cruelty","type","origin","subOrigin","legend","2","1"),
 worthyRespected = new Aspect("A Worthy Foe Should Be Respected","type","origin","subOrigin","legend","2","1"),
 theAlpha = new Aspect("The Alpha","type","origin","subOrigin","legend","1","1"),
 theElder = new Aspect("The Elder","type","origin","subOrigin","legend","1","2"),
 longTermPerspective = new Aspect("Long Term Perspective","type","origin","subOrigin","legend","2","2"),
 penBeforeSword = new Aspect("The Pen is Mightier","type","origin","subOrigin","legend","2","2"),
 greatEmpathy = new Aspect("Great Empathy","type","origin","subOrigin","legend","2","2"),
 tyrant = new Aspect("Tyrant","type","origin","subOrigin","legend","2","1"),
 beastTyrant = new Aspect("Beast Tyrant","type","origin","subOrigin","legend","1","1"),
 leaderofMen = new Aspect("Leader of Men","type","origin","subOrigin","legend","2","2"),
 general = new Aspect("General","type","origin","subOrigin","legend","2","1"),
 powerHungry = new Aspect("Power Hungry","type","origin","subOrigin","legend","2","2"),
 gentleBeast = new Aspect("Gentle Beast","type","origin","subOrigin","legend","1","2"),
 bully = new Aspect("Bully","type","origin","subOrigin","legend","2","1"),
 neverSurrender = new Aspect("Never Surrender","type","originChoice","subOriginChoice","legendChoice","2","1"),
 carefuLBeast = new Aspect("Careful Beast","type","origin","subOrigin","legend","1","2"),
 outForMyself = new Aspect("Out for Myself","type","originChoice","subOriginChoice","legendChoice","2","1"),
 bestThereIs = new Aspect("The Best There Is","type","originChoice","subOriginChoice","legendChoice","2","2"),
 alwaysAngry = new Aspect("I'm Always Angry","type","originChoice","subOriginChoice","legendChoice","2","1"),


  
// name = new Aspect("name","type","origin","subOrigin","legend","intelligence","behavior")

 
]

var aspect2Options = aspect2.filter(function (el) {
  return el.behavior === behaviorChoice &&
         el.intelligence === intelligenceChoice 
});

var rand3 = aspect2Options[Math.floor(Math.random() * aspect2Options.length)].name;

//____________________________________________________________________________________________________


//Legendary Abilities  + 3rd Aspect Chooser ------------------------------------------------------------------
// Choisi les Legendaries en fonction de l'origine, puis un Aspect basé sur les Legendaries choisies.

//____________________________________________________________________________________________________


//Setting the Level of the Legendary Abilities
abilityOne = legendaryBonus
abilityTwo = legendaryBonus2        

if (legendChoice === "4") {
     abilityOne += 0//4
     abilityTwo += 0//3
     skillAbilityOne =  0//4
     stuntBonus += 0//4

}
else if (legendChoice === "3") {
     abilityOne += 0//3
     abilityTwo += 0//2
     skillAbilityOne =  0//3
     stuntBonus += 0//3
}

else if (legendChoice === "2") {
     abilityOne += 0//2
     abilityTwo += 0//1
     skillAbilityOne =  0//2
     stuntBonus += 0//2
}

else if (legendChoice === "1") {
     abilityOne += 0 + legendaryBonus2//1 + legendaryBonus2
     skillAbilityOne =  0//1
     stuntBonus += 0//1
}


var LegendaryAbility = function(name,npcOptions,combat1Options,combat2Options,intelligenceOptions){
    this.name = name
    this.npcOptions = npcOptions
    this.combat1Options = combat1Options
    this.combat2Options = combat2Options
    this.intelligenceOptions = intelligenceOptions
}
rightOriginArray = []; rightOriginCombat1Array = []; rightOriginCombatAllArray = []; fullFinalArray = []                    
fullNameArray = []; name1Array = []; name2Array = []

var abilities2 = [
// Wyrdseeing
wyrdseeingProphecy = new LegendaryAbility(["Wyrdseeing: Prophecy","Prophetic","Prophet"],[["Titanspawn","1","13"],["Titanspawn","2","24"],["Titanspawn","2","21"],["Titanspawn","3","99"],["Titanspawn","4","99"],["Titanspawn","5","53"],["Titanspawn","6","62"],["Titanspawn","6","64"],["Titanspawn","6","61"],["Titanspawn","6","65"],["Titanspawn","7","71"],["Titanspawn","7","72"],["Titanspawn","8","99"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","42"],["Mythborn","4","43"],["Mythborn","4","44"],["Mythborn","5","99"],["Mythborn","6","99"]],["1","2","3"],[,"1","3","2"],["2"]),

// Druidism
druidismRunes = new LegendaryAbility(["Druidism: Runes","Runic","Runemaster"],[["Titanspawn","3","33"],["Titanspawn","4","42"],["Titanspawn","6","99"],["Titanspawn","7","73"],["Mythborn","1","12"],["Mythborn","1","13"],["Mythborn","2","22"],["Mythborn","2","23"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","52"],["Mythborn","5","54"]],["1","2"],[,"1","2","3","4"],["2"]),
druidismGreen = new LegendaryAbility(["Druidism: Green Druid","Nature-Loving","Druid"],[["Titanspawn","6","61"],["Titanspawn","6","62"],["Titanspawn","6","64"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","4","99"],["Mythborn","3","99"],["Mythborn","5","54"]],["2","1"],[,"1","2","3"],["1","2"]),
druidismMythcalling = new LegendaryAbility(["Druidism: Mythcalling","Mythcalling","Mythcaller"],[["Titanspawn","6","61"],["Titanspawn","4","99"],["Titanspawn","2","24"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","99"],["Mythborn","6","99"]],["2","1"],[,"1","2","3","4"],["2"]),
druidismTechnodruid = new LegendaryAbility(["Druidism: Technodruid","Cyborg","Technodruid"],[["Titanspawn","6","99"],["Mythborn","4","99"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","2","23"],["Mythborn","1","11"],["Mythborn","1","12"],["Mythborn","1","13"],["Mythborn","3","99"]],["2","3"],["1","3","2","4"],["2"]),             
druidismFey = new LegendaryAbility(["Druidism - Fey Sorcery","Mischievous","Sorcerer"],[["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","41"],["Mythborn","4","42"],["Mythborn","5","53"]],["2","3"],[,"1","2","3"],["1","2"]),


// Invokation
fireCreation = new LegendaryAbility(["Invokation: Fire - Creation","Foundry","Blacksmith"],[["Titanspawn","1","99"],["Titanspawn","6","63"],["Mythborn","1","13"],["Mythborn","2","23"],["Mythborn","1","12"],["Mythborn","3","99"],["Mythborn","5","51"],["Mythborn","5","52"],["Mythborn","5","54"]],["1","2","3"],[,"1","2","3","4"],["2"]),
fireDestruction = new LegendaryAbility(["Invokation: Fire - Destruction","Destructive","Pyromancer"],[["Titanspawn","1","99"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["1","2"],[,"2","3"],["1","2"]),
fireDrought = new LegendaryAbility(["Invokation: Fire - Drought","Desert","Scorcher"],[["Titanspawn","1","11"],["Titanspawn","1","12"],["Titanspawn","5","52"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["1","2"],[,"2","3"],["1","2"]),
fireLava = new LegendaryAbility(["Invokation: Fire - Lava","Magma","Earthmelter"],[["Titanspawn","1","99"],["Titanspawn","6","62"],["Titanspawn","6","63"],["Titanspawn","6","64"],["Mythborn","1","12"],["Mythborn","1","13"],["Mythborn","3","99"],["Mythborn","5","99"]],["1","2"],[,"1","2","3","4"],["1","2"]),
fireSummoning = new LegendaryAbility(["Invokation: Fire - Summoning","Flamecalling","Flamebringer"],[["Titanspawn","1","99"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["1","2"],[,"1","2","3","4"],["1","2"]),
nightVeil = new LegendaryAbility(["Invokation: Night - Veil","Veiling","Veilmaker"],[["Titanspawn","2","99"],["Titanspawn","3","99"],["Titanspawn","8","81"],["Titanspawn","5","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","99"]],["2","3"],[,"1","3","4"],["1","2"]),
nightFear = new LegendaryAbility(["Invokation: Night - Fear","Horrifying","Fearmonger"],[["Titanspawn","2","21"],["Titanspawn","2","22"],["Titanspawn","2","23"],["Titanspawn","3","31"],["Mythborn","2","21"],["Mythborn","2","23"],["Mythborn","2","24"],["Mythborn","2","25"],["Mythborn","3","32"],["Mythborn","4","99"]],["2","3","1"],[,"1","2","3","4"],["1","2"]),
nightMoon = new LegendaryAbility(["Invokation: Night - Moonlight","Moonlit","Beholder"],[["Titanspawn","2","24"],["Titanspawn","2","21"],["Titanspawn","4","42"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","99"]],["2","3"],[,"1","2"],["1","2"]),
darknessSenses = new LegendaryAbility(["Invokation: Darkness - Senses","Blinding","Visionbreaker"],[["Titanspawn","3","99"],["Titanspawn","2","22"],["Titanspawn","7","73"],["Titanspawn","8","99"],["Mythborn","2","99"],["Mythborn","4","99"],["Mythborn","5","51"],["Mythborn","5","52"]],["2","3"],[,"1","3","4"],["1","2"]),
darknessVoid = new LegendaryAbility(["Invokation: Darkness - Void","Voidwalking","Voidwalker"],[["Titanspawn","2","22"],["Titanspawn","2","23"],["Titanspawn","3","32"],["Titanspawn","3","31"],["Titanspawn","8","99"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","4","42"],["Mythborn","5","51"],["Mythborn","5","52"]],["1","2","3"],[,"2","3"],["1","2"]),
darknessUnderground = new LegendaryAbility(["Invokation: Darkness - Underground","Underground","Cavern Dweller"],[["Titanspawn","3","99"],["Titanspawn","6","99"],["Titanspawn","6","64"],["Titanspawn","8","99"],["Titanspawn","7","73"],["Titanspawn","7","74"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","43"],["Mythborn","4","44"],["Mythborn","4","42"],["Mythborn","5","51"],["Mythborn","5","52"],["Mythborn","5","54"]],["2","3"],["2","3","4"],["1","2"]),
lightIllumination = new LegendaryAbility(["Invokation: Light - Illumination","Illuminated","Genius"],[["Titanspawn","4","99"],["Titanspawn","1","13"],["Titanspawn","6","63"],["Mythborn","1","12"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","4","42"],["Mythborn","1","13"],["Mythborn","2","23"],["Mythborn","5","99"]],["2","3"],[,"1","2","3"],["1","2"]),
lightGlory = new LegendaryAbility(["Invokation: Sun - Glory","Glorious","Lightbringer"],[["Titanspawn","4","99"],["Mythborn","1","12"],["Mythborn","1","14"],["Mythborn","3","99"],["Mythborn","5","99"]],["1","2"],[,"1","2","3","4"],["1","2"]),
lightSun = new LegendaryAbility(["Invokation: Light - Sun","Sunlit","Sunwalker"],[["Titanspawn","4","99"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","51"],["Mythborn","5","52"]],["1","2"],[,"2","3","4"],["1","2"]),
lightBrightness = new LegendaryAbility(["Invokation: Light - Brightness","Bright","Priest"],[["Titanspawn","4","99"],["Titanspawn","2","24"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["2","1"],[,"2","3","4"],["1","2"]),
skyTempest = new LegendaryAbility(["Invokation: Sky - Tempest","Tempest","Skybreaker"],[["Titanspawn","4","41"],["Titanspawn","5","51"],["Titanspawn","5","52"],["Mythborn","1","11"],["Mythborn","1","14"],["Mythborn","2","21"],["Mythborn","2","24"],["Mythborn","3","99"],["Mythborn","5","52"]],["1","2"],[,"2","3","4"],["1","2"]),
skyDestruction = new LegendaryAbility(["Invokation: Sky - Destruction","Stormborn","Skylord"],[["Titanspawn","5","51"],["Titanspawn","5","52"],["Titanspawn","1","12"],["Mythborn","3","99"],["Mythborn","5","52"]],["1","2"],[,"2","3","4"],["1","2"]),
skyCalm = new LegendaryAbility(["Invokation: Sky - Calm","Calm","Peacemaker"],[["Titanspawn","4","42"],["Titanspawn","5","53"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","54"],["Mythborn","5","53"]],["2","3"],[,"1","3","4"],["1","2"]),
skyLightning = new LegendaryAbility(["Invokation: Sky - Lightning","Lightning","Thunderer"],[["Titanspawn","1","12"],["Titanspawn","2","24"],["Titanspawn","4","99"],["Titanspawn","5","99"],["Mythborn","1","12"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","99"]],["1","2"],[,"2","3","4"],["1","2"]),
earthAbundance = new LegendaryAbility(["Invokation: Earth - Abundance","Metalcrafting","Engineer"],[["Titanspawn","1","13"],["Titanspawn","6","99"],["Mythborn","1","99"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","2","23"],["Mythborn","3","99"],["Mythborn","4","42"],["Mythborn","4","43"],["Mythborn","4","44"],["Mythborn","5","51"],["Mythborn","5","54"]],["1","2"],[,"1","2","3","4"],["1","2"]),
earthCreation = new LegendaryAbility(["Invokation: Earth - Creation","Earthcrafting","Broodlord"],[["Titanspawn","5","53"],["Titanspawn","6","99"],["Titanspawn","7","72"],["Mythborn","1","99"],["Mythborn","2","25"],["Mythborn","2","24"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","52"],["Mythborn","5","53"],["Mythborn","5","54"],["Mythborn","6","99"]],["2","1"],[,"1","2","3","4"],["1","2"]),
earthFertility = new LegendaryAbility(["Invokation: Earth - Fertility","Lustful","Childbearer"],[["Titanspawn","2","21"],["Titanspawn","6","61"],["Titanspawn","6","62"],["Titanspawn","7","72"],["Mythborn","1","99"],["Mythborn","2","25"],["Mythborn","4","41"],["Mythborn","4","44"],["Mythborn","5","52"]],["2","1"],[,"1","4","3"],["1","2"]),
earthNature = new LegendaryAbility(["Invokation: Earth - Nature","Forest","Jungledweller"],[["Titanspawn","6","99"],["Mythborn","1","99"],["Mythborn","2","23"],["Mythborn","2","24"],["Mythborn","2","25"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","53"],["Mythborn","5","54"]],["2","1"],[,"1","2","3","4"],["1","2"]),
earthDecay = new LegendaryAbility(["Invokation: Earth - Decay","Plague","Blighter"],[["Titanspawn","1","11"],["Titanspawn","3","31"],["Titanspawn","3","33"],["Titanspawn","3","32"],["Titanspawn","6","61"],["Titanspawn","6","62"],["Titanspawn","6","65"],["Titanspawn","7","74"],["Titanspawn","8","99"],["Mythborn","1","11"],["Mythborn","1","14"],["Mythborn","1","15"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","2","99"],["Mythborn","3","32"],["Mythborn","3","34"],["Mythborn","3","35"],["Mythborn","4","99"],["Mythborn","5","54"],["Mythborn","5","53"],["Mythborn","5","52"],["Mythborn","5","51"]],["1","2"],[,"2","3","4"],["1","2"]),
earthStone = new LegendaryAbility(["Invokation: Earth - Stone","Avalanche","Earthbreaker"],[["Titanspawn","6","99"],["Mythborn","1","12"],["Mythborn","1","13"],["Mythborn","2","22"],["Titanspawn","3","33"],["Mythborn","2","23"],["Mythborn","3","99"],["Mythborn","4","42"],["Mythborn","5","99"]],["1","2"],[,"1","2","3","4"],["1","2"]),
earthLand = new LegendaryAbility(["Invokation: Earth - Land","Travelling","Wanderer"],[["Titanspawn","2","21"],["Titanspawn","3","33"],["Titanspawn","4","42"],["Titanspawn","5","53"],["Titanspawn","6","99"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","99"]],["2","3"],[,"1","2","4","3"],["1","2"]),
waterAbyss = new LegendaryAbility(["Invokation: Water - Abyss","Abyssal","Abyss-Caller"],[["Titanspawn","7","99"],["Mythborn","3","99"],["Mythborn","6","99"]],["1","2"],[,"2","3","4"],["1","2"]),
waterTerror = new LegendaryAbility(["Invokation: Water - Terror","Threatening","Terror"],[["Titanspawn","2","22"],["Titanspawn","5","51"],["Titanspawn","7","99"],["Mythborn","2","21"],["Mythborn","2","24"],["Mythborn","2","25"],["Mythborn","3","32"],["Mythborn","3","34"],["Mythborn","3","35"],["Mythborn","4","44"],["Mythborn","5","52"],["Mythborn","5","53"],["Mythborn","5","54"],["Mythborn","6","00"]],["2","3"],[,"1","3","4","2"],["1","2"]),
waterLife = new LegendaryAbility(["Invokation: Water - Life","Swarm","Progenitor"],[["Titanspawn","6","61"],["Titanspawn","7","99"],["Mythborn","1","12"],["Mythborn","1","13"],["Mythborn","1","14"],["Mythborn","1","15"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","53"],["Mythborn","5","54"],["Mythborn","6","00"]],["2","1"],[,"1","2","3","4"],["1","2"]),
waterSummoning = new LegendaryAbility(["Invokation: Water - Summoning","Watercrafting","Watercrafter"],[["Titanspawn","7","99"],["Mythborn","2","25"],["Mythborn","2","24"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","6","99"],["Mythborn","5","53"],["Mythborn","5","54"]],["1","2"],["1","2","3","4"],["1","2"]),
waterDrown = new LegendaryAbility(["Invokation: Water - Drowning","Flood","Drowned"],[["Titanspawn","7","99"],["Mythborn","2","99"],["Mythborn","1","15"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","53"],["Mythborn","5","54"],["Mythborn","6","99"]],["1","2"],[,"2","3"],["1","2"]),
waterSea = new LegendaryAbility(["Invokation: Water - Sea","Seafaring","Explorer"],[["Titanspawn","6","62"],["Titanspawn","5","53"],["Titanspawn","7","99"],["Titanspawn","8","81"],["Mythborn","2","99"],["Mythborn","1","99"],["Mythborn","3","99"],["Mythborn","5","99"],["Mythborn","6","99"]],["2","3"],[,"2","3","1"],["1","2"]),
waterIce = new LegendaryAbility(["Invokation: Water - Ice","Frozen","Iceheart"],[["Titanspawn","3","32"],["Titanspawn","3","33"],["Titanspawn","2","23"],["Titanspawn","5","51"],["Titanspawn","5","52"],["Titanspawn","7","73"],["Titanspawn","7","74"],["Titanspawn","8","82"],["Titanspawn","8","83"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","5","54"],["Mythborn","5","53"],["Mythborn","5","52"],["Mythborn","6","99"]],["1","2"],[,"2","3","4"],["1","2"]),
waterMist = new LegendaryAbility(["Invokation: Water - Mist","Mistborn","Mistweaver"],[["Titanspawn","2","21"],["Titanspawn","5","52"],["Titanspawn","5","53"],["Titanspawn","7","99"],["Titanspawn","8","81"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","4","42"],["Mythborn","5","54"],["Mythborn","5","53"],["Mythborn","6","99"]],["2","3"],[,"1","3"],["1","2"]),
deathPsychopomp = new LegendaryAbility(["Invokation: Death - Psychopomp","Soulspeaking","Psychopomp"],[["Titanspawn","8","81"],["Titanspawn","8","82"],["Mythborn","4","44"]],["2","3"],["1","3"],["1","2"]),
deathDestruction = new LegendaryAbility(["Invokation: Death - Destruction","Murderous","Killer"],[["Titanspawn","3","99"],["Titanspawn","2","22"],["Titanspawn","5","52"],["Titanspawn","7","73"],["Titanspawn","7","74"],["Titanspawn","8","99"],["Mythborn","2","21"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","51"],["Mythborn","5","52"],["Mythborn","5","54"]],["1","2"],[,"2"],["1","2"]),
deathNecromancer = new LegendaryAbility(["Invokation: Death - Necromancy","Soulstealing","Necromancer"],[["Titanspawn","2","22"],["Titanspawn","2","23"],["Titanspawn","3","31"],["Titanspawn","3","33"],["Titanspawn","7","74"],["Titanspawn","8","99"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","2","25"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","51"],["Mythborn","5","52"]],["1","2"],["1","2","3","4"],["1","2"]),
deathShamanism = new LegendaryAbility(["Invokation: Death - Shamanism","Shamanistic","Shaman"],[["Titanspawn","8","81"],["Titanspawn","8","82"],["Mythborn","1","13"],["Mythborn","1","15"],["Mythborn","2","25"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","99"]],["2","3","1"],[,"1","2","3","4"],["2"]),
deathHorror = new LegendaryAbility(["Invokation: Death - Horror","Horrifying","Terror"],[["Titanspawn","1","11"],["Titanspawn","1","12"],["Titanspawn","2","99"],["Titanspawn","3","99"],["Titanspawn","5","52"],["Titanspawn","5","51"],["Titanspawn","6","65"],["Titanspawn","7","99"],["Titanspawn","8","82"],["Titanspawn","8","84"],["Titanspawn","8","83"],["Mythborn","2","98"],["Mythborn","3","98"],["Mythborn","4","98"],["Mythborn","5","51"],["Mythborn","5","52"],["Mythborn","5","54"]],["2","3","1"],[,"3","4","1"],[,"1","2"]),
// Hematurgy
hematurgyItztli = new LegendaryAbility(["Hematurgy - Itztli","Blood Drinking","Executioner"],[["Titanspawn","2","22"],["Titanspawn","6","65"],["Titanspawn","7","74"],["Titanspawn","8","83"],["Mythborn","1","11"],["Mythborn","2","21"],["Mythborn","2","22"],["Mythborn","4","44"],["Mythborn","4","44"],["Mythborn","5","51"],["Mythborn","5","52"]],["1","2"],[,"1","2","4"],["1","2"]),
hematurgyYahuar = new LegendaryAbility(["Hematurgy - Yahuar","Self Sacrificial","Bloodsharer"],[["Titanspawn","6","61"],["Mythborn","1","99"],["Mythborn","3","31"],["Mythborn","3","33"],["Mythborn","3","34"],["Mythborn","3","35"],["Mythborn","4","43"],["Mythborn","4","44"],["Mythborn","5","52"],["Mythborn","5","54"]],["1","2"],[,"1"],["2"]),

    
// Epic Phsyiology
physiqueStrength = new LegendaryAbility(["Epic Physique - Strength","Mighty","Goliath"],[["Titanspawn","1","99"],["Titanspawn","2","99"],["Titanspawn","3","99"],["Titanspawn","4","99"],["Titanspawn","5","99"],["Titanspawn","6","99"],["Titanspawn","7","99"],["Mythborn","4","99"],["Mythborn","3","99"],["Mythborn","5","99"]],["1"],["1","2","3","4"],["1","2"]),
physiqueToughness = new LegendaryAbility(["Epic Physique - Toughness","Resilient","Hulk"],[["Titanspawn","1","11"],["Titanspawn","1","12"],["Titanspawn","1","13"],["Titanspawn","2","21"],["Titanspawn","2","23"],["Titanspawn","2","22"],["Titanspawn","3","99"],["Titanspawn","4","42"],["Titanspawn","5","99"],["Titanspawn","6","99"],["Titanspawn","7","99"],["Titanspawn","8","83"],["Mythborn","1","12"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","4","99"],["Mythborn","5","51"],["Mythborn","5","52"],["Mythborn","5","54"],["Mythborn","6","99"]],["1"],[,"2","4"],["1","2"]),
presenceLeader = new LegendaryAbility(["Epic Presence","Intimidating","Lord"],[["Titanspawn","2","22"],["Titanspawn","1","12"],["Titanspawn","1","11"],["Titanspawn","4","99"],["Titanspawn","5","51"],["Titanspawn","5","53"],["Titanspawn","6","99"],["Titanspawn","7","72"],["Titanspawn","7","73"],["Mythborn","1","12"],["Mythborn","1","11"],["Mythborn","2","22"],["Mythborn","3","99"],["Mythborn","4","43"],["Mythborn","5","99"]],["1","2"],[,"1","2","4"],["2"]),
appearanceBeauty = new LegendaryAbility(["Epic Appearance - Beauty","Beautiful","Supermodel"],[["Titanspawn","2","21"],["Titanspawn","2","24"],["Titanspawn","3","32"],["Titanspawn","4","99"],["Titanspawn","6","0"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","4","44"],["Mythborn","4","42"],["Mythborn","5","99"],["Mythborn","6","62"]],["2","3"],[,"3"],["2"]),
sensesDexterity = new LegendaryAbility(["Epic Senses - Dexterity","Agile","Assassin"],[["Titanspawn","1","13"],["Titanspawn","2","99"],["Titanspawn","3","32"],["Titanspawn","4","99"],["Titanspawn","5","51"],["Titanspawn","5","52"],["Titanspawn","6","63"],["Titanspawn","6","65"],["Titanspawn","7","99"],["Titanspawn","8","99"],["Mythborn","1","99"],["Mythborn","2","99"],["Mythborn","3","99"],["Mythborn","4","42"],["Mythborn","4","43"],["Mythborn","5","99"],["Mythborn","6","99"]],["1","3"],[,"2","3","4"],[,"1","2"]),



// Zoothropy
zoothropyDragon = new LegendaryAbility(["Zoothropy - Dragon","Dragon","Drakonid"],[["Titanspawn","1","12"],["Titanspawn","1","11"],["Titanspawn","2","23"],["Titanspawn","3","32"],["Titanspawn","4","42"],["Titanspawn","5","51"],["Titanspawn","5","52"],["Titanspawn","6","61"],["Titanspawn","7","73"],["Mythborn","3","99"],["Mythborn","5","54"],["Mythborn","5","51"]],["1","2"],[,"1","2","3","4"],["1","2"]),

// Pantheon-Specific Abilities
hekuRiot = new LegendaryAbility(["Heku - Riot","Riotous","Crowd Agitator"],[["Titanspawn","1","12"],["Titanspawn","2","22"],["Titanspawn","4","99"],["Titanspawn","5","51"],["Titanspawn","6","65"],["Titanspawn","7","74"],["Titanspawn","8","83"],["Mythborn","1","99"],["Mythborn","2","21"],["Mythborn","3","32"],["Mythborn","3","35"],["Mythborn","4","44"],["Mythborn","5","99"]],["2"],[,"3"],["2"]),
hekuSoothe = new LegendaryAbility(["Heku - Soothe","Calm","Soother"],[["Titanspawn","2","24"],["Titanspawn","4","99"],["Titanspawn","5","53"],["Titanspawn","8","81"],["Mythborn","1","11"],["Mythborn","1","99"],["Mythborn","2","24"],["Mythborn","3","32"],["Mythborn","3","35"],["Mythborn","5","53"],["Mythborn","5","54"]],["2"],[,"1","3"],["2"]),
taiyiManipulator = new LegendaryAbility(["Taiyi - Legend-Molding","Legend-Changing","Manipulator"],[["Titanspawn","1","13"],["Titanspawn","2","24"],["Titanspawn","4","42"],["Titanspawn","6","61"],["Titanspawn","6","62"],["Titanspawn","7","71"],["Titanspawn","7","72"],["Mythborn","1","11"],["Mythborn","2","11"],["Mythborn","2","21"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","99"]],["1","2"],[,"3","2","1"],["1","2"]),
taiyiFlow = new LegendaryAbility(["Taiyi - Flow Manipulation","Disruptive","Disruptor"],[["Titanspawn","1","13"],["Titanspawn","6","63"],["Titanspawn","3","99"],["Titanspawn","2","21"],["Titanspawn","2","23"],["Titanspawn","7","73"],["Titanspawn","8","81"],["Titanspawn","8","82"],["Mythborn","3","99"],["Mythborn","4","44"],["Mythborn","5","51"],["Mythborn","5","52"]],["1","2"],[,"1","3","4"],["1","2"]),
MentalismIllusion = new LegendaryAbility(["Mentalism - Illusion","Fleeting","Trickster"],[["Titanspawn","2","99"],["Titanspawn","3","99"],["Titanspawn","4","99"],["Titanspawn","5","53"],["Titanspawn","6","62"],["Titanspawn","6","63"],["Titanspawn","7","73"],["Titanspawn","8","81"],["Mythborn","1","98"],["Mythborn","2","98"],["Mythborn","3","98"],["Mythborn","4","98"],["Mythborn","5","98"],["Mythborn","6","98"]],["2","3"],[,"1","3","4"],[,"1","2"]),

]
    
// Décide de la Legendary Appropriée en fonction du PNJ

for(a=0;a<abilities2.length;a++){
for(b=0;b<abilities2[a].npcOptions.length;b++){

if((abilities2[a].npcOptions[b][0] === typeChoice)&&
    (abilities2[a].npcOptions[b][1] === originChoice)&&
    (abilities2[a].npcOptions[b][2] === "99")
  ){rightOriginArray.push(abilities2[a])}    
 
else if((abilities2[a].npcOptions[b][0] === typeChoice)&&
    (abilities2[a].npcOptions[b][1] === originChoice)&&
    (abilities2[a].npcOptions[b][2] === subOriginChoice)
  ){rightOriginArray.push(abilities2[a])}                 
}
                    }  

         
  // 
         
for(c=0;c<rightOriginArray.length;c++){
for(d=0;d<rightOriginArray[c].combat1Options.length;d++){
    if(rightOriginArray[c].combat1Options[d][0] === combatChoice1){rightOriginCombat1Array.push(rightOriginArray[c])}                 
}}
   
for(e=0;e<rightOriginCombat1Array.length;e++){
for(f=0;f<rightOriginCombat1Array[e].combat1Options.length;f++){
    if(rightOriginCombat1Array[e].combat1Options[f][0] === combatChoice1){rightOriginCombatAllArray.push(rightOriginCombat1Array[e])}                 
}}   

for(i=0;i<rightOriginCombatAllArray.length;i++){
    if((rightOriginCombatAllArray[i].intelligenceOptions[0] === intelligenceChoice)||(rightOriginCombatAllArray[i].intelligenceOptions[1] === intelligenceChoice)){fullFinalArray.push(rightOriginCombatAllArray[i])}                 
}

// Choisi au hasard parmis les Aspects adéquats ceux du PNJ final.
         
function randCalculator(){
if(fullFinalArray.length>1){
randSpawn = Math.floor(Math.random()*fullFinalArray.length)
randSpawn2 = Math.floor(Math.random()*fullFinalArray.length)
rand5 = (fullFinalArray[randSpawn].name[1] + " " + fullFinalArray[randSpawn2].name[2] + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;\n" + fullFinalArray[randSpawn].name[0] + " (" + abilityOne + ")<br>&nbsp;&nbsp; \n" + fullFinalArray[randSpawn2].name[0]+ " (" + abilityTwo + ")")

}
else{
randSpawn = Math.floor(Math.random()*rightOriginCombatAllArray.length)
randSpawn2 = Math.floor(Math.random()*rightOriginCombatAllArray.length)
rand5 = (rightOriginCombatAllArray[randSpawn].name[1] + " " + rightOriginCombatAllArray[randSpawn2].name[2] + "<br><b>Legendary Abilities:</b> <br>  &nbsp;&nbsp;\n" + rightOriginCombatAllArray[randSpawn].name[0] + " (" + abilityOne + ")<br>&nbsp;&nbsp; \n" + rightOriginCombatAllArray[randSpawn2].name[0]+ " (" + abilityTwo + ")")

}
}
randCalculator()
while(randSpawn === randSpawn2){randCalculator()}


    
    


//____________________________________________________________________________________________________


//Skills Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________

var Skill = function(name,level){
  this.name = name;
  this.level = level;  
}   

var skillOptions = [
fight = new Skill (" Fight: +",1),
will = new Skill (" Will: +",0),
rapport = new Skill (" Rapport: +",0),
physique = new Skill (" Physique: +",0),
presence = new Skill (" Presence: +",0),
stealth = new Skill (" Stealth: +",0),
lore = new Skill (" Lore: +",0),
notice = new Skill (" Notice: +",0)
]

if (behaviorChoice === "1"){presence.level += 2}
else if (behaviorChoice === "2"){rapport.level += 2}

if (intelligenceChoice === "1"){will.level += 2}
else if (intelligenceChoice === "2"){lore.level += 2}

if (combatChoice1 === "1"){fight.level += 1;physique.level += 2}
else if (combatChoice1 === "2"){will.level += 1;lore.level += 1}
else if (combatChoice1 === "3"){stealth.level += 3;fight.level += 2}
   
if (combatChoice2 === "1"){will.level += 2;lore.level += 2;notice.level+=1;stealth.level += 1}
else if (combatChoice2 === "2"){fight.level += 3;stealth.level += 1;physique.level+=1}
else if (combatChoice2 === "3"){lore.level += 1;will.level += 2;stealth.level += 1;presence.level+=1;rapport.level+=1}
else if (combatChoice2 === "4"){fight.level += 2;notice.level += 1;physique.level +=3;will.level += 2}

skillOptions.sort(function(a,b) {
    return b.level-a.level;     });
         
var randSkills = (skillOptions.sort()[0].name + (2+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[1].name + (1+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[2].name + (1+skillAbilityOne+skillBonus) +  ","+
     skillOptions.sort()[3].name + (1+skillAbilityOne+skillBonus));
//Sorts the highest skills, top first, and gives them a game-normal value. Adds skill bonus from numbers/Boss         

      
 
//name = new Aspect("name","type","origin","subOrigin","legend","intelligence","behavior","combat1","combat2"),


//____________________________________________________________________________________________________


//Stunts Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________
// name = new Stunt("description","dangerlevel"),
    //Here only varname, Name, combat1 and combat2 matter, and the Effect part is under "type"
function stuntCalculator(bonusType,costLevelSetter){
 randomEffect2 = Math.floor(Math.random() * costLevelSetter)
 randomEffect = randomEffect2 + 1 + bonusType  
}
     
// randomEffect2 here is the Cost of the ability, while randomEffect is the actual power of the ability
     
stuntCalculator(stuntBonus,4)         
stuntEffect = []

function stuntEffectCreator(){
     
  stuntEffect = [
// These are the Active Effects.
       // Lvl 2
energyBlast = new Stunt("use a Legendary Ability for free as an Attack action",2,"Legendary",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticPower = new Stunt("use a Legendary Ability for free to Create a Personal Advantage",2,"Legendary",[2,4,3,0],"Active",["Group1","Boss","Solo","Group2"]),
innerPower = new Stunt("invoke " + rand + " for free as an Attack action",2,"Personal Aspect",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
outerPower = new Stunt("invoke " + rand + " for free as a Create an Advantage action",2,"Personal Aspect",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticConstruct = new Stunt("use a Legendary Ability for free to Create a Situational Advantage",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
affectOther = new Stunt("use a Legendary Ability for free to Create a Character Advantage",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
uniqueNature = new Stunt("invoke " + rand + " for free to Create a Character Advantage",2,"Personal Aspect",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
allyHelp = new Stunt("give an ally a Free Invocation on an Aspect",2,"Any",[1,4,0,0],"Active",["Group1","Boss","Solo","Group2"]),
fatePointGain = new Stunt("gain a Fate Point",2,"Fate Point",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]), 
regeneration = new Stunt("Remove a Minor Consequence from an ally",2,"Defense",[1,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
regeneration = new Stunt("Remove a Minor Consequence from yourself",2,"Any",[4,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),        
       // Lvl 3
aspectBonusAlly = new Stunt("when an ally invokes an Aspect you created, gain +3 instead",3,"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]), 
massweaken3 = new Stunt("all enemies have -1 on their next Defense roll",3,"Any",[3,2,4,0],"Active",["Group1","Boss","Solo","Group2"]), 
        // Lvl 4
legendNature = new Stunt("you can use your Legendary Ability for free using non-Legendary Rolls until the end of the Scene",4,"Legendary",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),
energyBlast4 = new Stunt("use a Legendary Ability for free as an Attack action twice",4,"Legendary",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mysticPower4 = new Stunt("use a Legendary Ability for free to Create a Personal Advantage twice",4,"Legendary",[1,4,3,0],"Active",["Group1","Boss","Solo","Group2"]),
innerPower4 = new Stunt("invoke \"" + rand + "\" for free as an Attack action twice",4,"Personal Aspect",[2,0,0,0],"Active",["Group1","Boss","Solo","Group2"]),
outerPower4 = new Stunt("invoke " + rand + " for free as a Create an Advantage action twice",4,"Personal Aspect",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
      // Lvl 5


//_____________________
     
   ]  
function pushStunt2(uses){
for(i=-4;i<40;i++){
// These are the Active Effects.
  stuntEffect.push(shieldScaler = new Stunt("an ally has +" + i + " on their next Defense roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(defendScaler = new Stunt("get +"+i+" to your next Defense roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Defense",[2,4,0,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(createAspectScaler = new Stunt("automatically create an Aspect that requires a +"+i+" opposition to remove (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(massfogScaled = new Stunt("all enemies have -"+Math.ceil(i/2)+" on their next Attack roll (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,4,3,0],"Active",["Group1","Boss","Solo","Group2"]))
  stuntEffect.push(healAlly = new Stunt("heal an ally's Stress and Consequences to a total of "+ Math.ceil(i*0.75) + " (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,0,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(shield = new Stunt("gain the \"Shield\" Personal Aspect and get two +"+ Math.ceil(i/2) + " Stress Boxes (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,4,0,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(shield = new Stunt("create the \"Shield\" Personal Aspect on an ally. They get two +"+ Math.ceil(i/2) + " Stress Boxes (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(situationBuff = new Stunt("The next time you create a Situation Aspect, all enemies have -"+Math.ceil(i/3)+" to a Skill while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(soloBuff = new Stunt("The next time you create a Character Aspect, the target has -"+Math.ceil(i/2)+" to two Skills while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(attackSelfBuff = new Stunt("the next time you create a Character Aspect, your next Attack gains +"+Math.ceil(i)+" if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(attackAllyBuff = new Stunt("the next time you create a Character Aspect, an ally's next Attack gains +"+Math.ceil(i)+"if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[1,3,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(attackSelfBuff = new Stunt("the next time you create a Situation Aspect, your next Attack gains +"+Math.ceil(i/3)+" for each target if it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(defenseSelfBuff = new Stunt("the next time you create a Personal Aspect, you have +"+Math.ceil(i/3)+" to Defense Rolls while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(defenseAllyBuff = new Stunt("the next time you create a Personal Aspect, the target ally has +"+Math.ceil(i/3)+" to Defense Rolls while it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfBuff = new Stunt("the next time you create a Situation Aspect, you gain +"+Math.ceil(i/3)+" to a Skill every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[3,1,4,2],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(stackOtherBuff = new Stunt("the next time you create a Situation Aspect, an ally gains +"+Math.ceil(i/3)+" to a Skill every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[3,1,4,2],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfHeal = new Stunt("the next time you create a Situation Aspect, you heal a Stress Box or Consequence up to a value of +"+Math.ceil(i/3)+" every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
  stuntEffect.push(stackOtherHeal = new Stunt("the next time you create a Situation Aspect, an ally heals a Stress Box or Consequence up to a value of +"+Math.ceil(i/3)+" every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,1,4,0],"Active",["Group1","Boss","Group2"]))     
  stuntEffect.push(stackSelfLegend = new Stunt("the next time you create a Situation Aspect, you gain  "+Math.ceil(i/9)+" Legendary Ability uses every turn it is Active (Uses: "+uses+")",(i*uses)-(Math.round(randomEffect2*(uses-1))),"Any",[0,0,4,0],"Active",["Group1","Boss","Group2","Solo"]))     
      
     
}}
       
   pushStunt2(1);      
   pushStunt2(2);      
   pushStunt2(3); 
// Creates Stutns for 1-3 uses. New function needed for Passives

     // Crée des Stunts a différents niveaux de puissance, permettant plusieurs permutations du meme Stunt en fonction du niveau du combat.
function pushStuntPassives(){
for(i=-4;i<40;i++){
  stuntEffect.push(physicalResist = new Stunt("you have +" + Math.ceil(i/3) + " to Defense Rolls against Physical attacks ",i,"Any",[3,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(magicResist = new Stunt("you have +" + Math.ceil(i/2) + " to Defense Rolls against Non-Physical attacks ",i,"Any",[3,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(rageAlly = new Stunt("you have the \"Rage\" Aspect and have +" + Math.ceil(i*0.75) + " to Attack Rolls when an ally has suffered a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyChannel = new Stunt("you have the \"Empowered\" Aspect and have +" + Math.ceil(i*0.50) + " to Attack Rolls until an ally has suffered a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyChannel2 = new Stunt("you have the \"Empowered\" Aspect and have +" + Math.ceil(i*0.75) + " to Defense Rolls until an ally suffers a Consequence",i,"Any",[0,2,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyBuff = new Stunt("you have the \"Protector\" Aspect and your allies have +" + Math.ceil(i/3) + " to Defense Rolls until you are Taken Out",i,"Any",[1,0,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(allyEnrage = new Stunt("you have the \"Enrager\" Aspect and your allies have +" + Math.ceil(i/3) + " to Attack Rolls until you are Taken Out",i,"Any",[0,1,4,0],"Passive",["Group1","Boss","Group2"]));
  stuntEffect.push(bleedEnrage = new Stunt("you have +" + Math.ceil(i/5) + " to Attack Rolls every time you take a Consequence ",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(bleedBuff = new Stunt("you have +" + Math.ceil(i/4) + " to Create an Advantage Rolls every time you take a Consequence ",i,"Any",[2,4,3,1],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(lifeSteal = new Stunt("you gain a +" + Math.ceil(i/2) + " Stress Box every time you inflict a Consequence",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(thorns = new Stunt("whenever an enemy attacks you in melee, they take an Attack at +"+ Math.ceil(i/2) + " against Physique",i,"Any",[2,4,0,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(antiMagy = new Stunt("you have the \"Dampening Field\" Aspect and all enemies have -"+ Math.ceil(i/4) + " to Legendary Rolls until you are Taken Out",i,"Any",[1,4,3,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(weakAttack = new Stunt("you have the \"Weakening Attack\" Aspect and an enemy gets -"+ Math.ceil(i/2) + " to a Skill when you inflict Physical Stress or a Physical Consequence on them",i,"Any",[1,4,3,0],"Passive",["Group1","Boss","Solo","Group2"]));
  stuntEffect.push(aspectBonus5 = new Stunt("until the end of the Scene, when you invoke a Personal Aspect or an Aspect you created, gain an additional +"+Math.floor(i/3+1)+" ",i,"Any",[1,3,4,0],"Passive",["Group1","Boss","Solo","Group2"]))
  stuntEffect.push(aspectBonusAlly = new Stunt("until the end of the Scene, whenever an ally invokes an Aspect you created, they gain an additional +"+Math.floor(i/3+1)+" ",i,"Any",[1,3,4,0],"Passive",["Group1","Boss","Group2"]))     
    
}}
pushStuntPassives()
pushStuntPassives()
pushStuntPassives()


}

stuntEffectCreator()

         
var stuntCost = [ 
 
// These are the Active Costs.
// Ceci est ajouté aux Stunts pour leur donner un cout - ainsi un Stunt plus fort peut etre compensé par un coute plus fort. Deux PNJ du meme niveau
// avec le meme Stunt auront des effets différents grace au cout.
     
       // Lvl 0
free = new Stunt("At any time, ",0,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),
       // Lvl 1
recklessAttack = new Stunt("On your turn, ",1,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]), 
mentalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
physicalStress1 =  new Stunt("On your turn, ",1,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),        
       // Lvl 2  
fatePoint = new Stunt("For 1 Fate Point, ",2,"Fate Point",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),  
fatePoint2 = new Stunt("For 1 Legendary Ability use, ",2,"Legendary",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),  
mentalStress2 =  new Stunt("Take 2 Mental Stress, ",2,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
lowPain = new Stunt("You take a Minor Physical Consequence, and ",2,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),        
physicalStress2 =  new Stunt("Take 2 Physical Stress, ",2,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),   
     // Lvl 3
newAspect = new Stunt("You gain the Aspect: 'Vulnerable', and ",3,"Any",[1,3,0,0],"Active",["Group1","Boss","Solo","Group2"]),     
recklessAttack3 = new Stunt("Gain -3 to your next Defense Roll, and ",3,"Defense",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),
focus = new Stunt("Lose your Action this turn, and ",3,"Any",[1,3,0,0],"Active",["Group1","Boss","Solo","Group2"]),
mentalStress3 =  new Stunt("Take 3 Mental Stress, ",3,"Any",[1,2,3,4],"Active",["Group1","Boss","Solo","Group2"]),   
transform = new Stunt("Remove an Aspect you created, and ",3,"Any",[1,3,4,0],"Active",["Group1","Boss","Solo","Group2"]),                     
physicalStress3 =  new Stunt("Take 3 Physical Stress, ",4,"Any",[1,2,3,0],"Active",["Group1","Boss","Solo","Group2"]),   

// These are the Passive Costs.

recklessAttack = new Stunt("Passively, ",0,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]),   
recklessAttack = new Stunt("Passively, ",1,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack2 = new Stunt("Passively, ",2,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack3 = new Stunt("You have -1 to all Defense Rolls, ",3,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 
recklessAttack4 = new Stunt("You have -1 to all Defense Rolls, ",4,"Any",[1,2,3,4],"Passive",["Group1","Boss","Solo","Group2"]), 

     
   ]       
   
var stuntEffectOptions = [];
var stuntCostOptions = [];

   // Prend le niveau du Stunt, le cout, le niveau du combat et les points accordés aux Stunts, et génère des Stunts.   
     
function stuntChooser (targettedArray,targettedSecondArray){   
     
for(h=0; h < targettedArray.length; h++) {
  if ((randomEffect === targettedArray[h].dangerlevel) && (targettedArray[h].stuntCombat2[0] === combatChoice2Int || targettedArray[h].stuntCombat2[1] === combatChoice2Int || targettedArray[h].stuntCombat2[2] === combatChoice2Int || targettedArray[h].stuntCombat2[3] === combatChoice2Int)&&((targettedArray[h].NPCtype[0] === enemyType)||(targettedArray[h].NPCtype[1] === enemyType)||(targettedArray[h].NPCtype[2] === enemyType)||(targettedArray[h].NPCtype[3] === enemyType)))
{ stuntEffectOptions.push(targettedArray[h]) }}

 randEffect = stuntEffectOptions[Math.floor(Math.random() * stuntEffectOptions.length)];
    
for(j=0; j < stuntCost.length; j++) {
  if ((randomEffect2 ===  Math.floor(stuntCost[j].dangerlevel)) && (stuntCost[j].stuntCombat2[0] === combatChoice2Int || stuntCost[j].stuntCombat2[1] === combatChoice2Int || stuntCost[j].stuntCombat2[2] === combatChoice2Int || stuntCost[j].stuntCombat2[3] === combatChoice2Int)&&((stuntCost[j].NPCtype[0] === enemyType)||(stuntCost[j].NPCtype[1] === enemyType)||(stuntCost[j].NPCtype[2] === enemyType)||(stuntCost[j].NPCtype[3] === enemyType))){
  stuntCostOptions.push(stuntCost[j])   
  }} 
     
 randCost = stuntCostOptions[Math.floor(Math.random() * stuntCostOptions.length)];

}
stuntChooser(stuntEffect,stuntEffectOptions);
while((randCost.stuntType === randEffect.stuntType  && (randEffect.stuntType !== "Any" || randCost.stuntType !== "Any")) || (randEffect.type !== randCost.type)){
stuntChooser(stuntEffect,stuntEffectOptions);
}
  
stuntResultActives = randCost.description + randEffect.description  
// This is the result of the Stunt making function for Active Stunts
     
var rand6 = ("<br><b>\nStunts:</b> <br>\n- " + stuntResultActives)    
               
//____________________________________________________________________________________________________


//Stunts Maker 2 ------------------------------------------------------------------
// Pareil pour le deuxieme Stunt

//____________________________________________________________________________________________________

console.log(randomEffect2)
randomEffect2 = Math.floor(Math.random() * 4);
randomEffect = randomEffect2 + skillAbilityOne + stuntBonus2 ;
console.log(randomEffect2)

stuntEffect = []
stuntCostOptions = []
stuntEffectOptions = []

console.log(stuntEffect)
savedCost = randCost                    

stuntEffectCreator()
var stuntEffectOptions2 = [];
stuntChooser(stuntEffect,stuntEffectOptions2);
while((randCost.stuntType === randEffect.stuntType && (randEffect.stuntType !== "Any" || randCost.stuntType !== "Any"))||(randCost === savedCost)|| (randEffect.type !== randCost.type)){stuntChooser(stuntEffect,stuntEffectOptions2)}

stuntResultActives2 = randCost.description + randEffect.description  
// This is the result of the Stunt making function for Active Stunts
         
var rand7 = ("<br>\n- " + stuntResultActives2)  



//____________________________________________________________________________________________________


// Stress Maker ------------------------------------------------------------------
// Génère plus ou moins de Stress et Conséquences en fonction du niveau du combat

//____________________________________________________________________________________________________

physicalStress = ["<br>\nPhysical Stress: -1 ","-2 ","-3 ","Mild ","Medium "]

mentalStress = ["<br>\nMental Stress: -1 ","-2 ","-3 ","Mild ","Medium "]

function damageMaker(damageType,stringType){
if(damageType === 0){stringType[0] += ""}
if(damageType === 1){stringType[1] += "-2 "}
if(damageType === 2){stringType[0] += "-1 "; stringType[2] += "-3 "}
if(damageType === 3){stringType[0] += "-1 "; stringType[3] += "Mild "; stringType[2] += "-3 "}
if(damageType === 4){stringType[0] += "-1 "; stringType[4] += "Medium "; stringType[2] += "-3 "}
if(damageType === 5){stringType[0] += "-1 "; stringType[3] += "Mild "; stringType[4] += "Medium "; stringType[2] += "-3 "}
}

damageMaker(physicalStressBonus,physicalStress)
damageMaker(mentalStressBonus,mentalStress)

randPhysical = physicalStress[0] + physicalStress[1] + physicalStress[2] + physicalStress[3] + physicalStress[4]
randMental = mentalStress[0] + mentalStress[1] + mentalStress[2] + mentalStress[3] + mentalStress[4]


//____________________________________________________________________________________________________


// New Window Maker ------------------------------------------------------------------


//____________________________________________________________________________________________________


if (typeof imageLink === 'undefined') {     
var myWindow = window.open("", "_blank","width=400, height=400");
myWindow.document.write("<TITLE>"+rand+"</TITLE>")
myWindow.document.write("<BODY BGCOLOR='#297ACC'>")
myWindow.document.write("<p style='font-family:arial'><b>Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"   + rand5 + "<br>\n<b>Skills:</b> " + randSkills + rand6 + rand7 + randPhysical + randMental + " </p>");   
myWindow.document.write("</BODY>")
myWindow.document.write("</HTML>")}

else{
var myWindow = window.open("", "_blank","width=500, height=800");
myWindow.document.write("<TITLE>" + rand +"</TITLE>")
myWindow.document.write("<BODY BGCOLOR='#297ACC'>")
myWindow.document.write("<p style='font-family:arial'><b>Aspects: </b><br>&nbsp;&nbsp;" + rand  + "<br>&nbsp;&nbsp;" + rand2 + "<br>&nbsp;&nbsp;" + rand3 + "<br>\n&nbsp;&nbsp;"   + rand5 + "<br>\n<b>Skills:</b> " + randSkills + rand6 + rand7 + randPhysical + randMental + " </p>");   
myWindow.document.write('<img src=' + imageLink + '" alt="Image" width=100% height=auto >')
myWindow.document.write("</BODY>")
myWindow.document.write("</HTML>")


}     

}}
npcChoice()
