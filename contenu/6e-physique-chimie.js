/* =====================================================================
   LE LAPLACIEN — SIXIÈME — PHYSIQUE-CHIMIE
   (même mise en forme que le fichier des mathématiques)
   ===================================================================== */
window.CONTENU = window.CONTENU || {};
CONTENU["6e"] = CONTENU["6e"] || {};
CONTENU["6e"]["physique-chimie"] = {

"La matière qui nous entoure": {
  video: "",
  objectifs: ["Savoir que tout ce qui nous entoure est fait de matière", "Reconnaître les trois états de la matière", "Distinguer matériaux naturels et fabriqués"],
  cours: `
### Tout est matière
L'eau, le bois, l'air, nos vêtements, notre corps… tout ce qui nous entoure est fait de **matière**. Même l'air, que l'on ne voit pas, est de la matière : il a une **masse** (1 litre d'air pèse environ 1,2 g).

### Les trois états de la matière
| État | Forme | Volume | Exemples |
|---|---|---|---|
| **Solide** | propre (ne change pas) | propre | bois, glace, fer |
| **Liquide** | prend la forme du récipient | propre | eau, huile, lait |
| **Gaz** | occupe tout l'espace disponible | variable (compressible) | air, vapeur d'eau |

> La surface d'un liquide au repos est toujours **plane et horizontale**.

### Matériaux naturels et fabriqués
- **Naturels** : bois, laine, coton, pierre, sable.
- **Fabriqués par l'être humain** : plastique, verre, acier, béton.
Le verre est fabriqué à partir de sable chauffé à très haute température.
`,
  exemple: `
Une seringue bouchée remplie d'**air** : on peut enfoncer le piston, car un gaz se **comprime**. Remplie d'**eau**, impossible : un liquide est presque incompressible.
`,
  exercices: [
    { q: "Classe dans les trois états : le lait, le sel, l'air, le bois, le jus d'orange, la vapeur d'eau.", r: "Solides : **sel, bois** ; liquides : **lait, jus d'orange** ; gaz : **air, vapeur d'eau**." },
    { q: "Le sable coule comme un liquide. Est-ce un liquide ?", r: "**Non** : chaque grain de sable est un solide. C'est un solide en grains (divisé)." },
    { q: "Comment prouver que l'air est de la matière ?", r: "On pèse un ballon dégonflé puis gonflé : il est **plus lourd** une fois gonflé, donc l'air a une masse." }
  ],
  retenir: ["Tout ce qui nous entoure est de la matière, même l'air.", "Trois états : solide, liquide, gaz.", "Un gaz est compressible, un liquide ne l'est presque pas."]
},

"Mélanges et solutions": {
  video: "",
  objectifs: ["Distinguer mélange homogène et hétérogène", "Comprendre la dissolution", "Connaître des techniques de séparation"],
  cours: `
### Deux types de mélanges
- **Homogène** : on ne distingue pas les constituants à l'œil nu (eau sucrée, sirop).
- **Hétérogène** : on distingue au moins deux constituants (eau + sable, eau + huile).

### La dissolution
Quand on met du sel dans l'eau et qu'il « disparaît », il s'est **dissous**. On obtient une **solution** :
- le **soluté** est ce qui se dissout (le sel) ;
- le **solvant** est ce qui dissout (l'eau).

Le sel n'a pas disparu : la masse de la solution est égale à la **masse de l'eau + la masse du sel**.

### La saturation
On ne peut pas dissoudre une quantité infinie de sel : au-delà d'environ **360 g par litre d'eau** (à 20 °C), le sel ne se dissout plus. La solution est **saturée**.

### Séparer les constituants
| Technique | Ce qu'elle sépare |
|---|---|
| **Décantation** | on laisse reposer : le solide tombe au fond |
| **Filtration** | un filtre retient les particules solides |
| **Évaporation** | l'eau s'évapore, le solide dissous reste |
`,
  exemple: `
Pour récupérer le sel de l'eau de mer, on la laisse **s'évaporer** au soleil dans des bassins : ce sont les **marais salants**.
`,
  exercices: [
    { q: "Le lait est-il un mélange homogène ? Et l'eau boueuse ?", r: "Le lait paraît **homogène** à l'œil nu. L'eau boueuse est **hétérogène**." },
    { q: "On dissout 20 g de sucre dans 200 g d'eau. Quelle est la masse de la solution ?", r: "200 + 20 = **220 g**." },
    { q: "Quelle technique utiliser pour obtenir une eau claire à partir d'une eau boueuse ?", r: "Une **décantation**, puis une **filtration**." }
  ],
  retenir: ["Homogène : un seul aspect ; hétérogène : plusieurs constituants visibles.", "Solution = soluté dissous dans un solvant. La masse se conserve.", "Décantation, filtration, évaporation pour séparer."]
},

"Les états de l'eau": {
  video: "",
  objectifs: ["Connaître les changements d'état de l'eau", "Connaître les températures de fusion et d'ébullition de l'eau", "Savoir que la masse se conserve"],
  cours: `
### Les trois états de l'eau
- **Solide** : la glace.
- **Liquide** : l'eau.
- **Gaz** : la vapeur d'eau (invisible !).

> La « fumée » blanche au-dessus d'une casserole n'est pas de la vapeur : ce sont de **minuscules gouttelettes** d'eau liquide. La vraie vapeur d'eau est invisible.

### Les changements d'état
| Passage | Nom |
|---|---|
| solide → liquide | **fusion** |
| liquide → solide | **solidification** |
| liquide → gaz | **vaporisation** (ébullition ou évaporation) |
| gaz → liquide | **liquéfaction** (on dit aussi condensation) |

### Les températures à retenir
Sous la pression atmosphérique normale :
- la glace fond à **0 °C** ;
- l'eau bout à **100 °C**.
Pendant un changement d'état de l'eau pure, la **température reste constante**.

### Masse et volume
Quand l'eau gèle, sa **masse ne change pas**, mais son **volume augmente** (d'environ 10 %). C'est pourquoi une bouteille pleine d'eau peut éclater au congélateur.
`,
  exemple: `
Le cycle de l'eau dans la nature : l'eau des océans **s'évapore**, la vapeur se **liquéfie** en gouttelettes qui forment les nuages, puis retombe en pluie ou en neige.
`,
  exercices: [
    { q: "Comment s'appelle le passage de l'eau liquide à la glace ?", r: "La **solidification**." },
    { q: "Un glaçon de 30 g fond complètement. Quelle est la masse d'eau obtenue ?", r: "**30 g** : la masse se conserve lors d'un changement d'état." },
    { q: "Pourquoi voit-on de la buée sur un miroir après une douche ?", r: "La vapeur d'eau de l'air touche le miroir froid et se **liquéfie** en fines gouttelettes." }
  ],
  retenir: ["Fusion à 0 °C, ébullition à 100 °C.", "La masse se conserve, le volume peut changer.", "La vapeur d'eau est invisible."]
},

"Masse et volume": {
  video: "",
  objectifs: ["Distinguer masse et volume", "Mesurer une masse et un volume", "Connaître les unités et les conversions"],
  cours: `
### La masse
La **masse** mesure la **quantité de matière**. On la mesure avec une **balance**.
Unités : kilogramme (kg), gramme (g), milligramme (mg). **1 kg = 1 000 g**.

### Le volume
Le **volume** mesure la **place occupée** par un objet.
- Pour un liquide, on utilise une **éprouvette graduée** : on lit la graduation au niveau du **bas du ménisque**, l'œil à la même hauteur.
- Pour un solide, on peut le plonger dans l'eau : le volume du solide est égal à **l'augmentation du volume d'eau**.

### Unités de volume
| Unité | Équivalence |
|---|---|
| 1 L | 1 dm³ |
| 1 mL | 1 cm³ |
| 1 L | 1 000 mL |

### Un repère utile
**1 litre d'eau a une masse d'environ 1 kg.** Mais 1 litre d'huile pèse moins (environ 0,9 kg) : elle flotte sur l'eau.

> Masse et volume, ce n'est pas pareil : 1 kg de plumes et 1 kg de plomb ont la même masse, mais pas du tout le même volume !
`,
  exemple: `
Une éprouvette contient **50 mL** d'eau. On y plonge une bille : le niveau monte à **58 mL**. Le volume de la bille est 58 − 50 = **8 mL = 8 cm³**.
`,
  exercices: [
    { q: "Convertis : 2,5 kg en g ; 750 mL en L.", r: "2,5 kg = **2 500 g** ; 750 mL = **0,75 L**." },
    { q: "Un caillou plongé fait passer le niveau d'eau de 120 mL à 145 mL. Quel est son volume ?", r: "145 − 120 = **25 mL = 25 cm³**." },
    { q: "Avec quel instrument mesure-t-on une masse ?", r: "Une **balance**." }
  ],
  retenir: ["Masse : balance, en kg ou g. Volume : éprouvette, en L ou mL.", "1 L = 1 dm³ ; 1 mL = 1 cm³.", "1 L d'eau ≈ 1 kg."]
},

"Les sources d'énergie": {
  video: "",
  objectifs: ["Identifier différentes sources d'énergie", "Distinguer énergies renouvelables et non renouvelables", "Comprendre qu'un objet a besoin d'énergie pour fonctionner"],
  cours: `
### Qu'est-ce que l'énergie ?
L'**énergie** permet de mettre en mouvement, de chauffer, d'éclairer, de faire fonctionner un appareil. Une lampe, une voiture, notre corps : tout a besoin d'énergie.

### Les sources d'énergie
| Renouvelables | Non renouvelables |
|---|---|
| Soleil (solaire) | Pétrole |
| Vent (éolien) | Gaz naturel |
| Eau qui coule (hydraulique) | Charbon |
| Biomasse (bois, déchets végétaux) | Uranium (nucléaire) |
| Chaleur de la Terre (géothermie) | |

- **Renouvelable** : la source se renouvelle rapidement à l'échelle humaine, elle ne s'épuise pas.
- **Non renouvelable** : les réserves sont limitées. Le pétrole, le gaz et le charbon (énergies **fossiles**) ont mis des millions d'années à se former.

### Conversion d'énergie
L'énergie ne disparaît pas, elle se **transforme** :
- un **panneau solaire** transforme la lumière en électricité ;
- une **éolienne** transforme le mouvement du vent en électricité ;
- une **lampe** transforme l'électricité en lumière (et un peu en chaleur).

> Brûler des énergies fossiles rejette du dioxyde de carbone (CO₂), un gaz qui contribue au réchauffement climatique.
`,
  exemple: `
Un vélo avec une dynamo : l'énergie de nos muscles fait tourner la roue, la dynamo la transforme en électricité, et la lampe en lumière.
`,
  exercices: [
    { q: "Classe : charbon, vent, soleil, pétrole, bois.", r: "Renouvelables : **vent, soleil, bois** ; non renouvelables : **charbon, pétrole**." },
    { q: "Quelle conversion d'énergie réalise un panneau solaire ?", r: "Il transforme l'énergie **lumineuse** en énergie **électrique**." },
    { q: "Pourquoi dit-on que le pétrole n'est pas renouvelable ?", r: "Il a mis des **millions d'années** à se former : les réserves s'épuisent bien plus vite qu'elles ne se reforment." }
  ],
  retenir: ["L'énergie permet de bouger, chauffer, éclairer.", "Renouvelables : soleil, vent, eau, biomasse, géothermie.", "L'énergie se transforme, elle ne disparaît pas."]
}

};
