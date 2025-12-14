// --- 1. Définition des Scènes du Jeu ---
const gameScenes = {
    start: {
        text: "Vous vous réveillez dans votre chambre, votre femme est a cote de vous. Est ce que vous la réveillez ?",
        image: "https://placehold.co/600x400/2c3e50/FFF?text=Dans+la+chambre", // Placeholder
        choices: [
            { text: "Oui", nextScene: "start" },
            { text: "Non", nextScene: "cuisine1" },
        ]
    },
    cuisine1: {
        text: "Vous décidez donc de la laisser dormir paisiblement.", 
        image: "https://placehold.co/600x400/27ae60/FFF?text=Cuisine", // Placeholder
        choices: [
            { text: "Continuer", nextScene: "cuisine2" },
       /*     { text: "Dans la forêt", nextScene: "foret" },*/
        ]
    },
    cuisine2: {
        text: "\nVous vous rendez dans la cuisine, et constatez qu’il n’y a plus rien à manger pour la journée.\nPréférez vous allez au village chercher du pain ou bien dans la forêt chercher des baies ?", 
        image: "https://placehold.co/600x400/27ae60/FFF?text=Cuisine", // Placeholder
        choices: [
            { text: "Au village", nextScene: "village" },
       /*     { text: "Dans la forêt", nextScene: "foret" },*/
        ]
    },
    /*foret: {
        text: "Vous arrivez dans la forêt, il y a des animaux qui vous regardent. Que faites-vous ?",
        image: "https://placehold.co/600x400/8e44ad/FFF?text=Foret", // Placeholder
        choices: [
            { text: "recommencer", nextScene: "start" },
        ]
    },*/
    village: {
        text: "Vous prenez donc vos affaires afin de partir au village non loin de chez vous. Après quelques minutes de marche, vous arrivez à hauteur de la boulangerie. \nElle semble vide. Y entrer vous quand même ?",
        image: "https://placehold.co/600x400/c0392b/FFF?text=Village", // Placeholder
        choices: [
            { text: "Oui", nextScene: "boutique" },
            /*{ text: "Non", nextScene: "village" },*/
        ]
    },
    boutique: {
        text: "L’intérieur de la boutique est étrangement délabré. Comme laissé à l’abandon depuis des années. \nL’ambiance est lourde, mais la boulangère arrive du fond du magasin. \n Lui parlez vous ? ",
        image: "https://placehold.co/600x400/f1c40f/000?text=Boulangerie", // Placeholder
        choices: [
             { text: "Oui", nextScene: "boutiqueBoulangère1" },
           /* { text: "Non", nextScene: "village" },*/
        ]
    },
boutiqueBoulangère1: {
    text: "Bonjour Madame, lancez vous avec courtoisie. Mais celle-ci ne répond pas réellement.\n Elle ne laisse apparaître qu’un étrange sourire, une bouche remplie de bien trop de dents.",
    image: "https://placehold.co/600x400/f1c40f/000?text=Boulangerie", // Placeholder
    choices: [
         { text: "Continuer", nextScene: "boutiqueBoulangère2" },
    ]
    },
boutiqueBoulangère2: {
        text: " Elle semblait terrifiée et heureuse de l’être. Tout son être paraissait disproportionné. \n Décidez vous de lui demander comment elle se porte  ? ",
        image: "https://placehold.co/600x400/f1c40f/000?text=Boulangerie", // Placeholder
        choices: [
             { text: "Oui", nextScene: "suicideBoulangère1" },
         /*   { text: "Non", nextScene: "boutiqueBoulangère" },*/
        ]
    },
suicideBoulangère1: {
        text: "A peine votre question terminée, la boulangère attrape un large couteau à pain et se tranche lentement la gorge avec. ",
        image: "https://placehold.co/600x400/f1c40f/000?text=Suicide+boulangère", // Placeholder
        choices: [
            { text: "Continuer", nextScene: "suicideBoulangère2" },
          /*  { text: "Non", nextScene: "boutiqueBoulangère" },*/
        ]
        },
        suicideBoulangère2: {
        text: "La peur vous prend l’estomac. Mais vous pensez à votre pauvre femme, qui doit avoir faim seule, à la maison. Osez vous voler une baguette malgré la scène ? ",
        image: "https://placehold.co/600x400/f1c40f/000?text=Suicide+boulangère", // Placeholder
        choices: [
            { text: "Oui", nextScene: "volebaguette1" },
          /*  { text: "Non", nextScene: "boutiqueBoulangère" },*/
        ]
        },
  volebaguette1: {
    text: "Vous vous emparez de la nourriture et fuyez l’instant. En sortant, un homme bien trop grand pour la norme vous attrape le bras. Le serrant de toutes ses forces. ",
    image:"https://placehold.co/600x400/f1c40f/000?text=Village",
    choices: [
      /*  { text: "Oui", nextScene: "suicideBoulangère" },*/
            { text: "Continuer", nextScene: "volbaguette2" },
    ]
  },
  volbaguette2: {
    text: "La douleur vous prends, mais ce qui vous préoccupe est le visage de cet homme. Il ne possède pas d’œil. L’atmosphère est devenue soudainement glaciale. Comme si la nuit tomber déjà. L’homme vous hurle de rendre le bien volé… ou le malheur vous suivra à jamais. Rendez vous l’objet volé ?",
    image:"https://placehold.co/600x400/f1c40f/000?text=Village",
    choices: [
      /*  { text: "Oui", nextScene: "suicideBoulangère" },*/
            { text: "Non", nextScene: "hommeVillage" },
    ]
  },
  /*si trop long faire deux scenes avec "continuer"  */
  hommeVillage: {
    text: "Vous collez la nourriture contre vous signe de refus. Alors l’homme se met à hurler de toutes ses tripes. Un hurlement strident et peu humain. ",
    image:"https://placehold.co/600x400/f1c40f/000?text=Village",
    choices: [
        { text: "Continuer", nextScene: "hommeVillage2" } ]
  },
  hommeVillage2: {
    text: "Il vous lâche enfin, vous rendant compte de la douleur de votre bras. Vous redressez la tête afin de voir où il est allé. Et le voyez entamer une course, il foule la place et, d'un élan de folie, saute dans le puits. Votre cœur rate un battement en entendant le fracas de son corps au fond du puits, vide. Restez vous là afin d’aider, ou partez vous en courant ?",
    image:"https://placehold.co/600x400/f1c40f/000?text=Village",
    choices: [
        { text: "fuir", nextScene: "fuite" } ]
  },
    fuite: {
    text: "Pris de panique, vous courez en direction de votre maison. Ne comprenant rien aux événements. Cependant, pour ne rien arranger. En pleine forêt, vous croisez une horde de personnes, tous plus difformes les uns que les autres. (Le brouillard est à son apogée. Le soleil a disparu.) Ils murmurent des choses. Et comme si le top avait été donné. Vous les voyez 1 par 1 mettre fin à leurs existences. Vous disant de les rejoindre dans un monde meilleur. Demandez vous de quel endroit ils parlent ? ",
    image:"https://placehold.co/600x400/f1c40f/000?text=Village",
    choices: [
        { text: "oui", nextScene: "gensdelaforet1" }
    ]
        
},
    gensdelaforet1: {
    image:"https://placehold.co/600x400/f1c40f/000?text=Foret",
    text: "Ils vous répondent d’une manière que trop étrange, des râles, des murmures, des geindres. Continuant à s’arracher les yeux, se couper, s’entretuer… vous ne comprenez rien à leurs mots. La réalité vous arrache les tripes, êtes vous le dernier survivant d’une fièvre meurtrière ?... ",
   choices: [
        { text: "Continuer", nextScene: "gensdelaforet2" }
    ]
  },
  gensdelaforet2: {
    image:"https://placehold.co/600x400/f1c40f/000?text=Foret",
    text: "Une hésitation irrationnelle vous envahit. Les suivez-vous ?",
   choices: [
        { text: "Non", nextScene: "retourmaison" }
    ]
  },
    retourmaison: {
    text: "Vous voila enfin rentré, la peur dans les yeux, l’angoisse aux creux du ventre. Vous poussez la porte de la maison. L’homme avait raison… Le malheur vous suivra sûrement. Vous la voyez elle, l’amour de votre vie, les yeux grand ouvert, étalé dans une mare de sang, aux côtés d’un fusil de chasse. Appelez vous à l’aide ? ",
    image:" https://placehold.co/600x400/f1c40f/000?text=Maison",
    choices: [
        { text: "Non", nextScene: "finSuicideTisonnier" }
    ]
    },
    finSuicideTisonnier: {
    text: "Vous décidez de ne pas appeler à l’aide, la peur vous paralyse. Vous vous approchez lentement de votre femme. Vous remarquez un papier à Le chagrin vous consume. Les visions des événements vous hantent l’esprit. Il vous est impossible d’oublier. Vous vous dirigez vers votre cheminer, attrapez d’une main décidez le tisonnier, puis vous vous allongez dans la flaque de sang laissée par votre chère et tendre. La bouche grande ouverte, vous enfoncez violemment la pointe de l’objet dans votre crâne… le temps s’arrête. Le silence règne enfin.",
    image:"https://placehold.co/600x400/000000/FFF?text=Fin1", // Placeholder
    choices: [
        { text: "Recommencer", nextScene: "start" }
    ]
  },

};
// --- 2. Références aux éléments HTML ---
const sceneImage = document.getElementById('scene-image');
const sceneText = document.getElementById('scene-text');
const choiceButtons = document.getElementById('choice-buttons');
let currentSceneId = 'start';

// --- 3. Fonction Moteur du Jeu ---
function updateScene(sceneId) {
    if (!gameScenes[sceneId]) {
        console.warn(`Scène "${sceneId}" introuvable, retour au départ.`);
        sceneId = 'start';
    }

    currentSceneId = sceneId;
    const scene = gameScenes[currentSceneId];

    // Mise à jour visuelle avec animation simple (fade)
    sceneImage.style.opacity = 0;
    setTimeout(() => {
        sceneImage.src = scene.image;
        sceneImage.style.opacity = 1;
    }, 200);

    sceneText.textContent = scene.text;
    choiceButtons.innerHTML = '';

    if (scene.choices) {
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-btn');
            button.textContent = choice.text;
            button.addEventListener('click', () => updateScene(choice.nextScene));
            choiceButtons.appendChild(button);
        });
    }
}

// --- 4. Démarrage ---
// Initialisation avec l'image chargée
sceneImage.onload = () => sceneImage.style.opacity = 1;
updateScene(currentSceneId);