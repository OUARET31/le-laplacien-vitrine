/* =====================================================================
   SIXIÈME — SVT : QUIZ, EXERCICES PAR NIVEAU, EXERCICES À POUDLARD
   (mode d'emploi : voir l'en-tête de 6e-mathematiques-exercices.js)
   ===================================================================== */
AJOUTE("6e", "svt", {

"Classer le vivant": {
  quiz: [
    { niveau:"facile", q:"Quel attribut partagent tous les vertébrés ?", choix:["des plumes","une colonne vertébrale","des poils","des nageoires"], bonne:1, pourquoi:"Vertébré = qui a des vertèbres." },
    { niveau:"facile", q:"Le dauphin est un poisson.", choix:["Vrai","Faux"], bonne:1, pourquoi:"Il a des mamelles et respire avec des poumons : c'est un mammifère." },
    { niveau:"intermediaire", q:"La chauve-souris est :", choix:["un oiseau","un mammifère","un insecte","un reptile"], bonne:1, pourquoi:"Elle a des poils et allaite ses petits." },
    { niveau:"intermediaire", q:"Lequel n'est pas un être vivant ?", choix:["un champignon","une mousse","un cristal de sel","une bactérie"], bonne:2, pourquoi:"Un cristal ne se nourrit pas et ne se reproduit pas." },
    { niveau:"difficile", q:"Le groupe des tétrapodes réunit les animaux qui ont :", choix:["4 membres","des plumes","4 yeux","une coquille"], bonne:0, pourquoi:"Tétra = quatre, pode = pied." }
  ],
  niveaux: {
    facile: [
      { q:"Vivant ou non vivant ? Chêne, caillou, chat, voiture, champignon.", r:"Vivants : chêne, chat, champignon.\n\nNon vivants : caillou, voiture." },
      { q:"Quels attributs partagent le chat et l'aigle ?", r:"Une **colonne vertébrale** (vertébrés) et **4 membres** (tétrapodes)." }
    ],
    difficile: [
      { q:"Range la baleine, le requin et la chauve-souris dans des groupes emboîtés.", r:"Vertébrés : les trois.\n\nMammifères (poils, mamelles) : baleine et chauve-souris.\n\nLe requin est un vertébré mais pas un mammifère." },
      { q:"Pourquoi ne classe-t-on pas les animaux selon leur milieu de vie ?", r:"Parce que des animaux très différents vivent au même endroit : le dauphin et le requin vivent dans la mer, mais l'un est un mammifère et l'autre non. On classe selon **ce qu'ils possèdent**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Hagrid", q:"Hedwige est une chouette, Croûtard est un rat. Dans quel groupe ranges-tu chacun ? Quel attribut te permet de décider ?", r:"Hedwige : **oiseau** (plumes). Croûtard : **mammifère** (poils, mamelles)." },
    { niveau:"intermediaire", perso:"Luna", q:"Dans la Forêt interdite, Luna observe une araignée géante et un serpent. Lequel est un vertébré ?", r:"Le **serpent** (il a une colonne vertébrale). L'araignée a un squelette externe : ce n'est pas un vertébré." },
    { niveau:"difficile", perso:"Buck l'hippogriffe", q:"Dans la saga, l'hippogriffe a des plumes d'aigle et un corps de cheval avec des poils. Dans quel groupe le classerais-tu ? Qu'en déduis-tu ?", r:"Il aurait à la fois des **plumes** (oiseaux) et des **poils** (mammifères). Aucun animal réel n'a les deux : c'est la preuve qu'il s'agit d'une **créature imaginaire**." }
  ]
},

"Les besoins des plantes": {
  quiz: [
    { niveau:"facile", q:"De quoi une plante verte a-t-elle besoin pour fabriquer sa matière ?", choix:["lumière, eau, sels minéraux et CO₂","sucre et viande","seulement de terre","d'obscurité"], bonne:0, pourquoi:"C'est la photosynthèse." },
    { niveau:"facile", q:"Une plante verte peut vivre longtemps dans le noir complet.", choix:["Vrai","Faux"], bonne:1, pourquoi:"Sans lumière, elle ne peut plus fabriquer sa matière." },
    { niveau:"intermediaire", q:"Par quel organe la plante absorbe-t-elle l'eau ?", choix:["les feuilles","les racines","les fleurs","les fruits"], bonne:1, pourquoi:"Les racines puisent l'eau et les sels minéraux du sol." },
    { niveau:"intermediaire", q:"À la lumière, la plante absorbe le dioxyde de …", rep:["carbone"], pourquoi:"Le CO₂ entre par les feuilles." },
    { niveau:"difficile", q:"Quel gaz une plante verte rejette-t-elle à la lumière ?", choix:["le dioxygène","le méthane","l'hélium","le diazote"], bonne:0, pourquoi:"La photosynthèse produit du dioxygène." }
  ],
  niveaux: {
    facile: [
      { q:"Quel est le rôle des racines ? Et des feuilles ?", r:"Racines : **absorber** l'eau et les sels minéraux.\n\nFeuilles : capter la **lumière** et le CO₂ pour fabriquer la matière." },
      { q:"Pourquoi place-t-on les plantes d'intérieur près des fenêtres ?", r:"Pour qu'elles reçoivent de la **lumière**." }
    ],
    difficile: [
      { q:"On place une pousse à la lumière et une autre dans le noir, avec la même eau et la même terre. Que va-t-il se passer ? Pourquoi ne change-t-on qu'une seule chose ?", r:"La pousse dans le noir jaunit et dépérit. On ne change que la lumière pour être sûr que c'est **elle** la cause du résultat." },
      { q:"Une plante verte n'a pas besoin de « manger ». Explique pourquoi.", r:"Elle **fabrique sa propre matière** avec la lumière, l'eau, les sels minéraux et le CO₂." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Professeur Chourave", q:"Les serres de Poudlard ont un toit en verre. Pourquoi est-ce utile aux plantes ?", r:"Le verre laisse passer la **lumière**, indispensable aux plantes." },
    { niveau:"intermediaire", perso:"Neville", q:"Neville range une plante dans un placard sombre pendant deux semaines : elle jaunit. Explique, puis propose une solution.", r:"Sans **lumière**, elle ne fabrique plus sa matière. Il faut la remettre près d'une fenêtre." },
    { niveau:"difficile", perso:"Le Filet du Diable", q:"Dans la saga, le Filet du Diable aime l'obscurité et recule devant la lumière. Une vraie plante verte se comporterait-elle ainsi ?", r:"**Non** : une vraie plante verte a besoin de lumière pour la photosynthèse. Le Filet du Diable fait l'inverse : c'est une plante imaginaire." }
  ]
},

"La cellule, unité du vivant": {
  quiz: [
    { niveau:"facile", q:"Avec quel instrument observe-t-on des cellules ?", choix:["une loupe simple","un microscope","un télescope","des jumelles"], bonne:1, pourquoi:"Les cellules sont trop petites pour l'œil ou une simple loupe." },
    { niveau:"facile", q:"Tous les êtres vivants sont faits de cellules.", choix:["Vrai","Faux"], bonne:0, pourquoi:"La cellule est l'unité du vivant." },
    { niveau:"intermediaire", q:"Quel élément contient l'information génétique ?", choix:["la membrane","le cytoplasme","le noyau","la paroi"], bonne:2, pourquoi:"Le noyau contient l'ADN." },
    { niveau:"intermediaire", q:"Qu'est-ce qu'on ne trouve que dans les cellules des plantes vertes ?", choix:["le noyau","la membrane","les chloroplastes et la paroi","le cytoplasme"], bonne:2, pourquoi:"Les chloroplastes réalisent la photosynthèse." },
    { niveau:"difficile", q:"Une bactérie est formée d'une seule …", rep:["cellule"], pourquoi:"C'est un être unicellulaire." }
  ],
  niveaux: {
    facile: [
      { q:"Nomme trois éléments présents dans toutes les cellules.", r:"La **membrane**, le **cytoplasme** et l'information génétique (dans le **noyau** chez les plantes et les animaux)." },
      { q:"Au microscope : oculaire × 10 et objectif × 40. Quel est le grossissement ?", r:"10 × 40 = **× 400**." }
    ],
    difficile: [
      { q:"Compare une cellule d'oignon et une cellule de joue.", r:"Points communs : membrane, cytoplasme, noyau.\n\nL'oignon a en plus une **paroi** (forme rectangulaire). La joue n'en a pas (forme arrondie)." },
      { q:"Qu'est-ce qu'un être unicellulaire ? Donne un exemple.", r:"Un être vivant formé d'**une seule cellule** : une bactérie, une levure, une paramécie." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Hermione", q:"Hermione observe une feuille au microscope et voit de petits grains verts dans les cellules. Comment s'appellent-ils ?", r:"Des **chloroplastes**." },
    { niveau:"intermediaire", perso:"Professeur Rogue", q:"Rogue utilise un oculaire × 10, puis passe de l'objectif × 10 à l'objectif × 40. Quels sont les deux grossissements ?", r:"**× 100** puis **× 400**." },
    { niveau:"difficile", perso:"Le Polynectar", q:"Dans la saga, le Polynectar permet de prendre l'apparence de quelqu'un grâce à un de ses cheveux. Dans la réalité, quelle partie des cellules de la racine d'un cheveu contient les informations propres à une personne ? À quoi sert-elle en police scientifique ?", r:"Le **noyau**, qui contient l'**ADN**. La police compare l'ADN pour identifier une personne." }
  ]
},

"Le développement des êtres vivants": {
  quiz: [
    { niveau:"facile", q:"La transformation d'un têtard en grenouille s'appelle :", choix:["la germination","la métamorphose","la digestion","la fécondation"], bonne:1, pourquoi:"Le jeune ne ressemble pas à l'adulte : il se métamorphose." },
    { niveau:"facile", q:"Une graine contient une future plante (l'embryon).", choix:["Vrai","Faux"], bonne:0, pourquoi:"L'embryon et ses réserves sont dans la graine." },
    { niveau:"intermediaire", q:"Le cycle du papillon est :", choix:["œuf → chenille → chrysalide → papillon","œuf → papillon","chenille → œuf → papillon","graine → papillon"], bonne:0, pourquoi:"C'est une métamorphose complète." },
    { niveau:"intermediaire", q:"Le passage de la graine à la jeune plante s'appelle la …", rep:["germination"], pourquoi:"La graine germe quand elle a de l'eau, de l'air et une température adaptée." },
    { niveau:"difficile", q:"Le criquet grandit par :", choix:["métamorphose complète","mues successives","germination","division en deux"], bonne:1, pourquoi:"Il change de carapace plusieurs fois." }
  ],
  niveaux: {
    facile: [
      { q:"Range les étapes de la vie d'un être humain : adulte, bébé, adolescent, enfant.", r:"Bébé → enfant → adolescent → adulte." },
      { q:"De quoi une graine a-t-elle besoin pour germer ?", r:"D'**eau**, d'**air** (dioxygène) et d'une **température** adaptée." }
    ],
    difficile: [
      { q:"Propose une expérience pour montrer qu'une graine a besoin d'eau pour germer.", r:"Deux pots identiques avec des graines : l'un arrosé, l'autre non. Seules les graines arrosées germent. On ne change que l'eau." },
      { q:"Explique la différence entre développement direct et indirect, avec un exemple de chaque.", r:"**Direct** : le jeune ressemble à l'adulte (chat, poule).\n\n**Indirect** : le jeune est très différent et se métamorphose (grenouille, papillon)." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Dumbledore", q:"Dans la saga, Fumseck le phénix renaît de ses cendres. Dans la réalité, à partir de quoi se développe un oiseau ?", r:"À partir d'un **œuf**." },
    { niveau:"intermediaire", perso:"Hagrid", q:"Hagrid fait éclore un œuf de dragon. Comme chez les reptiles réels, le petit ressemble déjà à l'adulte. Le développement est-il direct ou indirect ?", r:"**Direct** : il n'y a pas de métamorphose." },
    { niveau:"difficile", perso:"Professeur Chourave", q:"Chourave fait pousser des plantes de la graine jusqu'à l'adulte. Range : fruit, graine, plante adulte, plantule, fleur. Que contient le fruit ?", r:"Graine → plantule → plante adulte → fleur → fruit.\n\nLe fruit contient de **nouvelles graines** : le cycle recommence." }
  ]
},

"Les êtres vivants dans leur milieu": {
  quiz: [
    { niveau:"facile", q:"Un être vivant qui fabrique sa matière grâce à la lumière est :", choix:["un producteur","un consommateur","un décomposeur","un prédateur"], bonne:0, pourquoi:"Les plantes vertes sont des producteurs." },
    { niveau:"facile", q:"Dans « herbe → lapin → renard », la flèche veut dire « est mangé par ».", choix:["Vrai","Faux"], bonne:0, pourquoi:"La flèche va de l'aliment vers celui qui le mange." },
    { niveau:"intermediaire", q:"Le ver de terre, qui transforme les feuilles mortes, est :", choix:["un producteur","un décomposeur","un carnivore","un parasite"], bonne:1, pourquoi:"Il recycle la matière morte en matière minérale." },
    { niveau:"intermediaire", q:"Pourquoi certains animaux hibernent-ils ?", choix:["pour éviter la chaleur","à cause du froid et du manque de nourriture en hiver","pour grandir","pour pondre"], bonne:1, pourquoi:"Ils ralentissent leur corps pour économiser leur énergie." },
    { niveau:"difficile", q:"Si on supprime les renards d'une forêt, le nombre de lapins va probablement :", choix:["augmenter","diminuer","rester identique","devenir nul tout de suite"], bonne:0, pourquoi:"Les lapins ont moins de prédateurs." }
  ],
  niveaux: {
    facile: [
      { q:"Construis une chaîne alimentaire avec : chouette, gland, mulot.", r:"Gland → mulot → chouette." },
      { q:"Qu'est-ce qu'un milieu de vie ? Donne deux exemples.", r:"L'endroit où vit un être vivant : une forêt, une mare, une prairie…" }
    ],
    difficile: [
      { q:"Dans une prairie : herbe → criquet → grenouille → héron. Que se passe-t-il si les criquets disparaissent ?", r:"Les grenouilles manquent de nourriture et diminuent, puis les hérons aussi. L'herbe, elle, est moins mangée." },
      { q:"Cite deux façons dont l'être humain modifie un milieu de vie, une négative et une positive.", r:"Négative : pollution, déforestation.\n\nPositive : replanter des haies, créer une réserve naturelle." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Hedwige", q:"Les chouettes comme Hedwige chassent les souris, qui mangent des graines. Écris la chaîne alimentaire.", r:"Graines → souris → chouette." },
    { niveau:"intermediaire", perso:"Hagrid", q:"Dans la Forêt interdite, Hagrid observe : des feuilles mortes, des vers de terre, des champignons, des araignées et des oiseaux. Lesquels sont des décomposeurs ?", r:"Les **vers de terre** et les **champignons**." },
    { niveau:"difficile", perso:"Le calmar géant", q:"Dans le lac de Poudlard (exercice) : algues → petits poissons → calmar géant. Une potion renversée fait disparaître les algues. Quelles sont les conséquences ?", r:"Les petits poissons n'ont plus de nourriture et diminuent ; le calmar géant manque ensuite de proies. Toute la chaîne est touchée." }
  ]
}

});
