/* =====================================================================
   LE LAPLACIEN — SIXIÈME — SVT
   (même mise en forme que le fichier des mathématiques)
   ===================================================================== */
window.CONTENU = window.CONTENU || {};
CONTENU["6e"] = CONTENU["6e"] || {};
CONTENU["6e"]["svt"] = {

"Classer le vivant": {
  video: "",
  objectifs: ["Distinguer le vivant du non-vivant", "Classer les êtres vivants selon les attributs qu'ils partagent", "Construire des groupes emboîtés"],
  cours: `
### Qu'est-ce qu'un être vivant ?
Un être vivant **naît, se nourrit, respire, grandit, se reproduit et meurt**. Une pierre ou un robot ne sont pas vivants.

### Classer, ce n'est pas trier
On ne classe pas les êtres vivants selon l'endroit où ils vivent ou ce qu'ils mangent, mais selon les **attributs** qu'ils **possèdent** (ce qu'ils ont), par exemple :
- un **squelette interne** avec une colonne vertébrale ;
- **4 membres** ;
- des **poils**, des **plumes** ou des **écailles** ;
- des **mamelles**.

### Les groupes emboîtés
Plus on avance, plus le groupe est petit et partage d'attributs :
| Groupe | Attribut partagé | Exemples |
|---|---|---|
| Vertébrés | squelette interne, colonne vertébrale | poisson, grenouille, chat, aigle |
| Tétrapodes | 4 membres | grenouille, lézard, aigle, chat |
| Mammifères | poils et mamelles | chat, chauve-souris, dauphin |
| Oiseaux | plumes | aigle, pingouin |

> Le dauphin vit dans l'eau, mais ce n'est pas un poisson : il a des **mamelles** et respire avec des **poumons**. C'est un mammifère.
`,
  exemple: `
La **chauve-souris** vole comme un oiseau, mais elle a des **poils** et allaite ses petits : c'est un **mammifère**, pas un oiseau.
`,
  exercices: [
    { q: "Pourquoi la baleine est-elle classée avec les mammifères ?", r: "Elle possède des **mamelles** (elle allaite ses petits) et quelques poils : ce sont des attributs des mammifères." },
    { q: "Quel attribut partagent le chat, l'aigle et la grenouille ?", r: "Ils ont tous **4 membres** et une **colonne vertébrale** : ce sont des vertébrés tétrapodes." },
    { q: "Le serpent n'a pas de pattes. Est-ce un vertébré ?", r: "**Oui** : il a un squelette interne avec une colonne vertébrale." }
  ],
  retenir: ["On classe selon ce que les êtres vivants possèdent.", "Les groupes sont emboîtés les uns dans les autres.", "Vertébrés : colonne vertébrale ; mammifères : poils et mamelles ; oiseaux : plumes."]
},

"Les besoins des plantes": {
  video: "",
  objectifs: ["Identifier les besoins d'une plante verte", "Comprendre le rôle des différentes parties de la plante", "Connaître les conditions de la germination"],
  cours: `
### Ce dont une plante verte a besoin
Pour vivre et grandir, une plante verte a besoin :
- de **lumière** ;
- d'**eau** ;
- de **sels minéraux** (puisés dans le sol) ;
- de **dioxyde de carbone** (un gaz de l'air).

Avec tout cela, la plante **fabrique sa propre matière** grâce à ses feuilles vertes. Les animaux, eux, doivent manger d'autres êtres vivants.

### Le rôle des organes
| Organe | Rôle |
|---|---|
| **Racines** | absorbent l'eau et les sels minéraux, fixent la plante |
| **Tige** | transporte l'eau et la sève, porte les feuilles |
| **Feuilles** | captent la lumière et fabriquent la matière |
| **Fleurs** | servent à la reproduction |

### La germination
Une graine a besoin d'**eau**, d'une **température** adaptée et d'**air** (de dioxygène) pour germer. Au début, elle n'a pas besoin de lumière : elle utilise ses **réserves**.

> Une expérience simple : un haricot sans lumière pousse, mais devient jaune et fragile, puis finit par mourir quand ses réserves sont épuisées.
`,
  exemple: `
Deux plantes identiques : l'une près de la fenêtre, l'autre dans un placard. Après deux semaines, seule celle à la lumière est verte et en bonne santé. On a montré que la plante a **besoin de lumière**.
`,
  exercices: [
    { q: "Cite les quatre besoins d'une plante verte.", r: "**Lumière, eau, sels minéraux et dioxyde de carbone**." },
    { q: "Quel organe absorbe l'eau du sol ?", r: "Les **racines**." },
    { q: "Une graine peut-elle germer dans le noir ?", r: "**Oui**, car elle utilise ses réserves. Mais la jeune plante aura ensuite besoin de lumière pour continuer à vivre." }
  ],
  retenir: ["Lumière, eau, sels minéraux, CO₂.", "La plante verte fabrique sa propre matière.", "Germination : eau, chaleur, air."]
},

"La cellule, unité du vivant": {
  video: "",
  objectifs: ["Savoir que tout être vivant est fait de cellules", "Reconnaître les parties d'une cellule", "Utiliser un microscope"],
  cours: `
### Tous faits de cellules
Tous les êtres vivants sont constitués de **cellules**. Certains n'ont qu'**une seule cellule** (les bactéries, la levure), d'autres en ont des milliards (notre corps en compte des dizaines de milliers de milliards).

### Les parties d'une cellule
Toute cellule possède :
- une **membrane** qui l'entoure ;
- un **cytoplasme** (son contenu) ;
- en général un **noyau** qui contient l'information génétique.

### Cellule animale et cellule végétale
| | Cellule animale | Cellule végétale |
|---|---|---|
| Membrane | oui | oui |
| Noyau | oui | oui |
| **Paroi** rigide | non | oui |
| **Chloroplastes** (verts) | non | oui (dans les parties vertes) |

### Observer au microscope
Les cellules sont trop petites pour être vues à l'œil nu : on utilise un **microscope**. On commence toujours par le **plus petit grossissement**.

> Grossissement du microscope = grossissement de l'oculaire × grossissement de l'objectif. Exemple : 10 × 40 = 400 fois.
`,
  exemple: `
En observant un fin morceau de peau d'oignon au microscope, on voit des cellules allongées, collées les unes aux autres, chacune avec une paroi et un noyau.
`,
  exercices: [
    { q: "Quelles parties possède toute cellule ?", r: "Une **membrane**, du **cytoplasme**, et en général un **noyau**." },
    { q: "Quelles parties ne trouve-t-on que dans une cellule végétale ?", r: "La **paroi** et les **chloroplastes**." },
    { q: "Avec un oculaire × 10 et un objectif × 10, quel est le grossissement ?", r: "10 × 10 = **100 fois**." }
  ],
  retenir: ["La cellule est l'unité de base du vivant.", "Membrane, cytoplasme, noyau.", "Les cellules végétales ont en plus une paroi et des chloroplastes."]
},

"Le développement des êtres vivants": {
  video: "",
  objectifs: ["Décrire les étapes du développement d'un être vivant", "Distinguer développement direct et métamorphose", "Comprendre la croissance"],
  cours: `
### Les grandes étapes
Un être vivant **naît**, **grandit**, devient **adulte**, se **reproduit** puis **meurt**. C'est son cycle de vie.

### Développement direct
Le jeune **ressemble** déjà à l'adulte, en plus petit : il grandit sans changer de forme.
Exemples : le chat, l'être humain, le poulet.

### Développement avec métamorphose
Le jeune (la **larve**) ne ressemble pas du tout à l'adulte. Il change de forme : c'est une **métamorphose**.
| Animal | Étapes |
|---|---|
| Papillon | œuf → chenille → chrysalide → papillon |
| Grenouille | œuf → têtard → jeune grenouille → grenouille adulte |

### Chez les plantes
graine → germination → plantule → plante adulte → fleur → fruit et nouvelles graines.

> Le têtard respire avec des **branchies** dans l'eau, la grenouille adulte respire avec des **poumons** et par la peau.
`,
  exemple: `
On peut suivre la croissance d'un enfant en mesurant sa taille chaque année : on trace ensuite une **courbe de croissance**, très rapide les premières années.
`,
  exercices: [
    { q: "Remets dans l'ordre : chrysalide, œuf, papillon, chenille.", r: "**œuf → chenille → chrysalide → papillon**." },
    { q: "Le chien a-t-il un développement direct ou avec métamorphose ?", r: "Un développement **direct** : le chiot ressemble déjà à un chien adulte." },
    { q: "Comment s'appelle la larve de la grenouille ?", r: "Le **têtard**." }
  ],
  retenir: ["Naître, grandir, se reproduire, mourir : le cycle de vie.", "Développement direct : le jeune ressemble à l'adulte.", "Métamorphose : la larve change complètement de forme."]
},

"Les êtres vivants dans leur milieu": {
  video: "",
  objectifs: ["Comprendre les relations alimentaires", "Construire une chaîne alimentaire", "Comprendre l'adaptation aux saisons"],
  cours: `
### Qui mange qui ?
Dans un milieu (une forêt, une mare…), les êtres vivants sont reliés par des **relations alimentaires**. On les représente par une **chaîne alimentaire** : la flèche signifie « **est mangé par** ».

herbe → lapin → renard

### Les rôles
| Rôle | Description | Exemples |
|---|---|---|
| **Producteurs** | fabriquent leur matière | plantes vertes |
| **Consommateurs** | mangent d'autres êtres vivants | lapin, renard, chouette |
| **Décomposeurs** | transforment les restes morts en sels minéraux | champignons, bactéries, vers de terre |

Plusieurs chaînes alimentaires reliées forment un **réseau alimentaire**.

### S'adapter aux saisons
En hiver, la nourriture se fait rare et il fait froid. Les êtres vivants s'adaptent :
- **hibernation** : le hérisson ou la marmotte dorment tout l'hiver ;
- **migration** : les hirondelles partent vers l'Afrique ;
- **vie ralentie** : de nombreux arbres perdent leurs feuilles ;
- certains passent l'hiver sous forme d'**œufs** ou de **graines**.

> Si on retire un maillon d'une chaîne alimentaire, tout le milieu peut être perturbé !
`,
  exemple: `
Dans une mare : algues → têtard → libellule (larve) → poisson. Les algues sont les **producteurs**, les autres sont des **consommateurs**.
`,
  exercices: [
    { q: "Complète la chaîne : feuille → chenille → … → épervier.", r: "Par exemple : feuille → chenille → **mésange** → épervier." },
    { q: "Quel est le rôle des vers de terre dans un milieu ?", r: "Ce sont des **décomposeurs** : ils transforment les feuilles mortes, qui redonnent des sels minéraux au sol." },
    { q: "Que fait l'hirondelle en hiver ?", r: "Elle **migre** vers des pays plus chauds (en Afrique)." }
  ],
  retenir: ["La flèche signifie « est mangé par ».", "Producteurs, consommateurs, décomposeurs.", "Hibernation, migration, vie ralentie : s'adapter à l'hiver."]
}

};
