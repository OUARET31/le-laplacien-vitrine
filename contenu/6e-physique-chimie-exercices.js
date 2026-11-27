/* =====================================================================
   SIXIÈME — PHYSIQUE-CHIMIE : QUIZ, EXERCICES PAR NIVEAU, EXERCICES À POUDLARD
   (mode d'emploi : voir l'en-tête de 6e-mathematiques-exercices.js)
   ===================================================================== */
AJOUTE("6e", "physique-chimie", {

"La matière qui nous entoure": {
  quiz: [
    { niveau:"facile", q:"Lequel est un matériau naturel ?", choix:["le plastique","le bois","le verre","l'acier"], bonne:1, pourquoi:"Le bois vient des arbres ; les autres sont fabriqués par l'être humain." },
    { niveau:"facile", q:"L'air est de la matière.", choix:["Vrai","Faux"], bonne:0, pourquoi:"L'air a une masse et occupe un volume." },
    { niveau:"intermediaire", q:"Quel matériau est attiré par un aimant ?", choix:["le cuivre","l'aluminium","le fer","le verre"], bonne:2, pourquoi:"Le fer (et l'acier) sont attirés par l'aimant." },
    { niveau:"intermediaire", q:"Une bouteille en verre se jette :", choix:["dans le bac jaune","dans le conteneur à verre","avec les ordures ménagères","au compost"], bonne:1, pourquoi:"Le verre se recycle à l'infini dans un conteneur dédié." },
    { niveau:"difficile", q:"L'air contient environ 21 % de dioxygène et 78 % de …", rep:["diazote","azote"], pourquoi:"Le diazote est le gaz le plus abondant de l'air." }
  ],
  niveaux: {
    facile: [
      { q:"Classe en matériaux naturels ou fabriqués : bois, plastique, laine, verre, coton.", r:"Naturels : bois, laine, coton.\n\nFabriqués : plastique, verre." },
      { q:"Cite deux propriétés des métaux.", r:"Ils **conduisent l'électricité** et la **chaleur** ; ils sont souvent brillants et solides." }
    ],
    difficile: [
      { q:"Comment séparer un tas de clous en fer et de capsules en aluminium ?", r:"Avec un **aimant** : il attire le fer mais pas l'aluminium." },
      { q:"Propose une expérience pour montrer que l'air a une masse.", r:"On pèse un ballon dégonflé, puis le même ballon gonflé : il est un peu plus lourd. L'air ajouté a donc une masse." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Ollivander", q:"Les baguettes d'Ollivander sont en bois (houx, if…). Le bois est-il un matériau naturel ou fabriqué ? D'où vient-il ?", r:"**Naturel**, d'origine **végétale** : il vient des arbres." },
    { niveau:"intermediaire", perso:"Arthur Weasley", q:"Arthur Weasley collectionne des objets moldus : une prise en plastique, une fourchette en métal, une bouteille en verre. Lequel conduit l'électricité ?", r:"La **fourchette en métal**. Le plastique et le verre sont des isolants." },
    { niveau:"difficile", perso:"Un gobelin de Gringotts", q:"Un gobelin approche un aimant de trois pièces : une en or, une en fer, une en cuivre. Laquelle est attirée ? Peut-il distinguer l'or du cuivre de cette façon ?", r:"Seule la pièce en **fer** est attirée. L'aimant n'attire ni l'or ni le cuivre : il faut un autre test (couleur, masse pour un même volume…)." }
  ]
},

"Mélanges et solutions": {
  quiz: [
    { niveau:"facile", q:"De l'eau et du sel bien mélangés donnent :", choix:["un mélange hétérogène","une solution (mélange homogène)","un corps pur","un gaz"], bonne:1, pourquoi:"Le sel se dissout : on ne le voit plus." },
    { niveau:"facile", q:"L'eau boueuse est un mélange homogène.", choix:["Vrai","Faux"], bonne:1, pourquoi:"On distingue la terre de l'eau : il est hétérogène." },
    { niveau:"intermediaire", q:"Pour séparer le sable de l'eau, on utilise :", choix:["la filtration","un aimant","la dissolution","la congélation"], bonne:0, pourquoi:"Le filtre retient le sable." },
    { niveau:"intermediaire", q:"Dans l'eau salée, le sel est le soluté et l'eau est le …", rep:["solvant"], pourquoi:"Le solvant est le liquide qui dissout." },
    { niveau:"difficile", q:"Comment récupérer le sel dissous dans de l'eau ?", choix:["par filtration","par décantation","en faisant évaporer l'eau","avec un aimant"], bonne:2, pourquoi:"Le sel traverse le filtre ; quand l'eau s'évapore, il reste le sel." }
  ],
  niveaux: {
    facile: [
      { q:"Homogène ou hétérogène ? Jus d'orange avec pulpe ; eau sucrée ; huile et eau ; air.", r:"Hétérogène ; homogène ; hétérogène ; homogène." },
      { q:"Que signifie le mot « soluble » ?", r:"Une substance soluble **se dissout** dans un liquide : on ne la voit plus." }
    ],
    difficile: [
      { q:"Tu as un mélange de sable, de sel et d'eau. Comment obtenir le sable d'un côté et le sel de l'autre ?", r:"1. **Filtrer** : le sable reste dans le filtre.\n2. **Faire évaporer** l'eau qui est passée : il reste le sel." },
      { q:"On dissout 20 g de sucre dans 200 g d'eau. Quelle est la masse de la solution ?", r:"**220 g** : la masse se conserve lors d'une dissolution." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Professeur Rogue", q:"Rogue verse une poudre dans un chaudron d'eau et remue. On ne voit plus la poudre. Le mélange est-il homogène ? La poudre est-elle soluble ?", r:"**Oui**, c'est une solution homogène : la poudre est **soluble**." },
    { niveau:"intermediaire", perso:"Hermione", q:"Hermione renverse de la poudre soluble et du sable du parc dans de l'eau. Comment récupérer le sable, puis la poudre ?", r:"Filtrer pour récupérer le **sable**, puis faire évaporer l'eau pour récupérer la **poudre**." },
    { niveau:"difficile", perso:"Professeur Slughorn", q:"Slughorn dissout 15 g de sucre dans 185 g d'eau. Quelle est la masse du mélange ? S'il fait évaporer toute l'eau, que reste-t-il ?", r:"15 + 185 = **200 g**. Après évaporation, il reste **15 g de sucre**." }
  ]
},

"Les états de l'eau": {
  quiz: [
    { niveau:"facile", q:"À quelle température l'eau pure gèle-t-elle (au niveau de la mer) ?", choix:["0 °C","100 °C","−10 °C","4 °C"], bonne:0, pourquoi:"L'eau pure se solidifie à 0 °C." },
    { niveau:"facile", q:"La vapeur d'eau est :", choix:["solide","liquide","gazeuse","toujours visible"], bonne:2, pourquoi:"La vapeur d'eau est un gaz invisible." },
    { niveau:"intermediaire", q:"Pendant que la glace fond, sa température reste à 0 °C.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Pendant un changement d'état, la température d'un corps pur reste constante." },
    { niveau:"intermediaire", q:"Le passage de l'état liquide à l'état gazeux s'appelle la …", rep:["vaporisation","ébullition","évaporation"], pourquoi:"On parle de vaporisation (ébullition ou évaporation)." },
    { niveau:"difficile", q:"Quand de l'eau gèle, sa masse :", choix:["augmente","diminue","reste la même","devient nulle"], bonne:2, pourquoi:"La masse se conserve ; c'est le volume qui augmente." }
  ],
  niveaux: {
    facile: [
      { q:"Nomme les trois états de l'eau avec un exemple pour chacun.", r:"Solide : glace, neige. Liquide : pluie, mer. Gaz : vapeur d'eau dans l'air." },
      { q:"Un glaçon est laissé au soleil. Comment s'appelle ce qui se passe ?", r:"La **fusion** : il passe de l'état solide à l'état liquide." }
    ],
    difficile: [
      { q:"Une bouteille en verre pleine d'eau éclate au congélateur. Pourquoi ?", r:"En gelant, l'eau **augmente de volume** et pousse sur le verre." },
      { q:"Le « nuage » blanc au-dessus d'une casserole est-il de la vapeur d'eau ?", r:"**Non** : la vapeur est invisible. Ce nuage est fait de **gouttelettes d'eau liquide** (liquéfaction de la vapeur au contact de l'air froid)." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Avec « Aguamenti », de l'eau jaillit de la baguette. Dans quel état est-elle ? Et la neige à Pré-au-Lard ?", r:"Le jet d'eau est **liquide** ; la neige est **solide**." },
    { niveau:"intermediaire", perso:"Hagrid", q:"Hagrid fait bouillir de l'eau pour son thé. À quelle température l'eau bout-elle ? Qu'est-ce que le panache blanc qui sort de la bouilloire ?", r:"**100 °C**. Le panache : des **gouttelettes** d'eau liquide (la vapeur est invisible)." },
    { niveau:"difficile", perso:"Hermione", q:"Hermione fait fondre 2 kg de glace avec un feu magique. Quelle masse d'eau liquide obtient-elle ? Le volume est-il plus grand ou plus petit que celui de la glace ?", r:"**2 kg** (la masse se conserve). Le volume est **plus petit** : l'eau liquide prend moins de place que la glace." }
  ]
},

"Masse et volume": {
  quiz: [
    { niveau:"facile", q:"L'unité de masse du système international est :", choix:["le litre","le kilogramme","le mètre","le degré"], bonne:1, pourquoi:"La masse se mesure en kilogrammes (kg)." },
    { niveau:"facile", q:"1 L = … mL", rep:["1000","1 000"], pourquoi:"1 L = 1 000 mL." },
    { niveau:"intermediaire", q:"Pour mesurer un volume de liquide, on utilise :", choix:["une balance","une éprouvette graduée","un thermomètre","une règle"], bonne:1, pourquoi:"On lit le volume en bas du ménisque." },
    { niveau:"intermediaire", q:"1 L d'eau a une masse d'environ 1 kg.", choix:["Vrai","Faux"], bonne:0, pourquoi:"C'est une valeur à retenir : 1 L d'eau ≈ 1 kg." },
    { niveau:"difficile", q:"1 dm³ = … L", rep:["1"], pourquoi:"1 dm³ = 1 L, et 1 cm³ = 1 mL." }
  ],
  niveaux: {
    facile: [
      { q:"Convertis : 2,5 kg en g ; 750 mL en L.", r:"**2 500 g** ; **0,75 L**." },
      { q:"Où lit-on le volume dans une éprouvette graduée ?", r:"Les yeux à hauteur du liquide, en **bas du ménisque**." }
    ],
    difficile: [
      { q:"Dans une éprouvette, le niveau d'eau passe de 60 mL à 85 mL quand on plonge un caillou. Quel est le volume du caillou ?", r:"85 − 60 = **25 mL**, soit **25 cm³**." },
      { q:"1 L d'huile a une masse de 0,92 kg. L'huile flotte-t-elle sur l'eau ? Pourquoi ?", r:"**Oui** : pour le même volume, l'huile est plus légère que l'eau (0,92 kg < 1 kg)." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Professeur Slughorn", q:"Une recette de potion demande 250 mL de jus de pomme et 0,5 L d'eau. Quel est le volume total en mL ?", r:"0,5 L = 500 mL ; 250 + 500 = **750 mL**." },
    { niveau:"intermediaire", perso:"Hagrid", q:"Dans cet exercice, Crockdur a une masse de 45 kg. Hagrid le porte avec un sac de 12,5 kg. Quelle masse porte-t-il, en kg puis en g ?", r:"45 + 12,5 = **57,5 kg** = **57 500 g**." },
    { niveau:"difficile", perso:"Neville", q:"Neville plonge son Rapeltout dans une éprouvette : l'eau passe de 40 mL à 72 mL. Le Rapeltout a une masse de 64 g. Quel est son volume ? Coule-t-il dans l'eau ?", r:"Volume : 72 − 40 = **32 cm³**. 32 cm³ d'eau ont une masse de 32 g ; le Rapeltout (64 g) est plus lourd : il **coule**." }
  ]
},

"Les sources d'énergie": {
  quiz: [
    { niveau:"facile", q:"Laquelle est une source d'énergie renouvelable ?", choix:["le pétrole","le charbon","le vent","le gaz naturel"], bonne:2, pourquoi:"Le vent se renouvelle sans cesse." },
    { niveau:"facile", q:"Le Soleil est une source d'énergie renouvelable.", choix:["Vrai","Faux"], bonne:0, pourquoi:"À notre échelle, il ne s'épuise pas." },
    { niveau:"intermediaire", q:"Une éolienne transforme l'énergie du vent en énergie :", choix:["chimique","électrique","nucléaire","sonore"], bonne:1, pourquoi:"Ses pales font tourner un alternateur qui produit de l'électricité." },
    { niveau:"intermediaire", q:"En brûlant, les énergies fossiles rejettent du dioxyde de …", rep:["carbone"], pourquoi:"Le CO₂ renforce l'effet de serre." },
    { niveau:"difficile", q:"Dans une pile, l'énergie est stockée sous forme :", choix:["chimique","lumineuse","sonore","de mouvement"], bonne:0, pourquoi:"Une réaction chimique fournit l'énergie électrique." }
  ],
  niveaux: {
    facile: [
      { q:"Classe : solaire, pétrole, hydraulique, charbon, bois.", r:"Renouvelables : solaire, hydraulique, bois (si on replante).\n\nNon renouvelables : pétrole, charbon." },
      { q:"Cite deux appareils qui transforment l'énergie électrique.", r:"Exemples : une lampe (→ lumière), un radiateur (→ chaleur), un moteur (→ mouvement)." }
    ],
    difficile: [
      { q:"Fais la chaîne énergétique d'un panneau solaire qui alimente une lampe.", r:"Énergie **lumineuse** (Soleil) → panneau → énergie **électrique** → lampe → énergie lumineuse + énergie thermique (chaleur perdue)." },
      { q:"Pourquoi dit-on que le pétrole n'est pas renouvelable ?", r:"Il met des **millions d'années** à se former : on le consomme beaucoup plus vite qu'il ne se reforme." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Arthur Weasley", q:"Arthur Weasley s'émerveille devant une lampe de poche moldue. D'où vient son énergie ? Sous quelle forme est-elle stockée ?", r:"D'une **pile** : l'énergie y est stockée sous forme **chimique**." },
    { niveau:"intermediaire", perso:"Hagrid", q:"Hagrid allume un feu de bois dans sa cabane. Quelle forme d'énergie est stockée dans le bois ? En quoi est-elle transformée ? Le bois est-il renouvelable ?", r:"Énergie **chimique** → énergie **thermique** et **lumineuse**. Oui, le bois est renouvelable si on replante les arbres." },
    { niveau:"difficile", perso:"Le Poudlard Express", q:"La locomotive à vapeur du Poudlard Express brûle du charbon. Fais sa chaîne énergétique. Le charbon est-il renouvelable ? Propose une solution plus écologique.", r:"Chimique (charbon) → **thermique** (l'eau bout, la vapeur pousse les pistons) → **mouvement**.\n\nLe charbon n'est **pas renouvelable**. Solution : un train électrique alimenté par une énergie renouvelable." }
  ]
}

});
