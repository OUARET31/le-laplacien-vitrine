/* =====================================================================
   LE LAPLACIEN — SIXIÈME — MATHÉMATIQUES
   ---------------------------------------------------------------------
   Pour modifier une leçon : changez le texte entre les accents graves ` `.
   Mise en forme :
     ### Titre          -> sous-titre
     **mot**            -> gras
     - élément          -> liste à puces
     1. élément         -> liste numérotée
     > texte            -> encadré « Attention / Astuce »
     | a | b |          -> tableau (1re ligne = en-tête)
   video : collez l'adresse d'une vidéo YouTube (sinon le bouton mène à la chaîne).
   ===================================================================== */
window.CONTENU = window.CONTENU || {};
CONTENU["6e"] = CONTENU["6e"] || {};
CONTENU["6e"]["mathematiques"] = {

"Les nombres entiers et décimaux": {
  video: "",
  objectifs: ["Connaître la valeur de chaque chiffre dans un nombre", "Lire et écrire un nombre décimal", "Passer d'une fraction décimale à l'écriture à virgule"],
  cours: `
### Chiffres et nombres
On écrit tous les nombres avec seulement **10 chiffres** : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Comme pour les lettres et les mots, un **nombre** est formé de un ou plusieurs **chiffres**.

### Le tableau de numération
Chaque chiffre a une valeur qui dépend de sa **position** (son rang).

| Milliers | Centaines | Dizaines | Unités | , | Dixièmes | Centièmes | Millièmes |
|---|---|---|---|---|---|---|---|
| 2 | 0 | 4 | 7 | , | 3 | 5 | 8 |

Dans **2 047,358** :
- la **partie entière** est 2 047 ;
- la **partie décimale** est 358 millièmes ;
- le chiffre des dixièmes est 3, il vaut 3/10 = 0,3.

### Fractions décimales
Une **fraction décimale** a pour dénominateur 10, 100, 1 000…
- 1 dixième = 1/10 = 0,1
- 1 centième = 1/100 = 0,01
- 1 millième = 1/1 000 = 0,001

> Attention : ne confondez pas le **chiffre** des dizaines et le **nombre** de dizaines. Dans 2 047, le chiffre des dizaines est 4, mais le nombre de dizaines est 204.
`,
  exemple: `
Décomposer **35,62** :
- 35,62 = 30 + 5 + 0,6 + 0,02
- 35,62 = 35 + 6/10 + 2/100
- 35,62 = 3 562/100

On le lit : « trente-cinq unités et soixante-deux centièmes ».
`,
  exercices: [
    { q: "Dans 4 803,72, quel est le chiffre des centièmes ? Et le chiffre des centaines ?", r: "Chiffre des centièmes : **2**. Chiffre des centaines : **8**." },
    { q: "Écris sous forme décimale : 47/10 ; 305/100 ; 6/1 000.", r: "47/10 = **4,7** ; 305/100 = **3,05** ; 6/1 000 = **0,006**." },
    { q: "Combien y a-t-il de dizaines dans 5 638 ?", r: "Il y a **563** dizaines (et le chiffre des dizaines est 3)." }
  ],
  retenir: ["La valeur d'un chiffre dépend de sa place dans le nombre.", "0,1 = 1/10 ; 0,01 = 1/100 ; 0,001 = 1/1 000.", "Un nombre décimal = partie entière + partie décimale, séparées par la virgule."]
},

"Comparer et ranger les décimaux": {
  video: "",
  objectifs: ["Comparer deux nombres décimaux", "Ranger des nombres dans l'ordre croissant ou décroissant", "Encadrer et placer un décimal sur une droite graduée"],
  cours: `
### Les symboles
- **<** signifie « est inférieur à » : 3 < 5
- **>** signifie « est supérieur à » : 8 > 2
- **=** signifie « est égal à »

### Comparer deux décimaux
1. On compare d'abord les **parties entières**.
2. Si elles sont égales, on compare les **dixièmes**, puis les **centièmes**, etc.

> Astuce : on peut ajouter des zéros à la fin de la partie décimale sans changer le nombre : 4,5 = 4,50 = 4,500. Cela aide à comparer.

### Ranger
- **Ordre croissant** : du plus petit au plus grand.
- **Ordre décroissant** : du plus grand au plus petit.

### Encadrer
Encadrer 7,38 à l'unité : **7 < 7,38 < 8**. Au dixième : **7,3 < 7,38 < 7,4**.
`,
  exemple: `
Comparer **12,7** et **12,65** :
- parties entières égales (12) ;
- dixièmes : 7 > 6.

Donc **12,7 > 12,65**, même si 12,65 a plus de chiffres !
`,
  exercices: [
    { q: "Complète par <, > ou = : 5,8 … 5,79 ; 0,4 … 0,40 ; 13,09 … 13,1.", r: "5,8 **>** 5,79 ; 0,4 **=** 0,40 ; 13,09 **<** 13,1." },
    { q: "Range dans l'ordre croissant : 2,5 ; 2,05 ; 2,55 ; 2,505.", r: "**2,05 < 2,5 < 2,505 < 2,55**" },
    { q: "Encadre 9,47 au dixième près.", r: "**9,4 < 9,47 < 9,5**" }
  ],
  retenir: ["On compare d'abord les parties entières, puis chiffre par chiffre après la virgule.", "Plus de chiffres après la virgule ne veut pas dire plus grand.", "Croissant = du plus petit au plus grand."]
},

"Les fractions": {
  video: "",
  objectifs: ["Comprendre une fraction comme un partage", "Placer une fraction sur une droite graduée", "Calculer la fraction d'une quantité"],
  cours: `
### Vocabulaire
Dans la fraction **3/4** :
- 3 est le **numérateur** (le nombre de parts prises) ;
- 4 est le **dénominateur** (le nombre de parts égales).

### Une fraction, c'est un partage
3/4 d'une pizza : on coupe la pizza en **4 parts égales** et on en prend **3**.

### Une fraction, c'est aussi une division
3/4 = 3 ÷ 4 = **0,75**. Le quotient de a par b s'écrit a/b.

### Fractions égales
On ne change pas une fraction en multipliant (ou divisant) le numérateur et le dénominateur par le **même nombre** : 1/2 = 2/4 = 5/10.

### Fraction d'une quantité
Pour prendre 3/4 de 20 : on divise par 4 puis on multiplie par 3.
20 ÷ 4 = 5, puis 5 × 3 = **15**.

> Une fraction est plus grande que 1 quand le numérateur est plus grand que le dénominateur : 7/4 > 1.
`,
  exemple: `
Sur une droite graduée de 0 à 1 partagée en 5 parts égales, chaque graduation vaut **1/5**. Le point situé à la 3e graduation correspond à **3/5**.
`,
  exercices: [
    { q: "Calcule 2/3 de 18 €.", r: "18 ÷ 3 = 6 ; 6 × 2 = **12 €**." },
    { q: "Écris 3/4 et 7/10 sous forme décimale.", r: "3/4 = **0,75** ; 7/10 = **0,7**." },
    { q: "Complète : 2/5 = …/10 = …/20.", r: "2/5 = **4**/10 = **8**/20." }
  ],
  retenir: ["Numérateur en haut, dénominateur en bas.", "a/b = a ÷ b.", "Pour prendre a/b d'une quantité : ÷ b puis × a."]
},

"Addition et soustraction": {
  video: "",
  objectifs: ["Poser une addition et une soustraction de décimaux", "Calculer mentalement", "Vérifier avec un ordre de grandeur"],
  cours: `
### Vocabulaire
- Le résultat d'une addition est une **somme** : 12 + 5 = 17.
- Le résultat d'une soustraction est une **différence** : 12 − 5 = 7.

### Poser l'opération
On aligne les chiffres de **même rang** : unités sous unités, **virgule sous virgule**. On complète par des zéros si besoin.

| | 4 | 5 | , | 7 | 0 |
|---|---|---|---|---|---|
| + | 1 | 2 | , | 3 | 8 |
| = | 5 | 8 | , | 0 | 8 |

### Ordre de grandeur
Avant de calculer, on estime : 45,7 + 12,38 ≈ 46 + 12 = 58. Le résultat 58,08 est cohérent.

> Dans une addition, on peut changer l'ordre des termes : 17 + 25 + 3 = 17 + 3 + 25 = 45. C'est pratique pour calculer de tête !
`,
  exemple: `
Calculer **30 − 7,45** :
on écrit 30,00 − 7,45 = **22,55**.
Vérification : 22,55 + 7,45 = 30. ✓
`,
  exercices: [
    { q: "Pose et calcule : 127,6 + 48,75.", r: "127,60 + 48,75 = **176,35**." },
    { q: "Pose et calcule : 50 − 13,8.", r: "50,0 − 13,8 = **36,2**." },
    { q: "Calcule astucieusement : 2,7 + 9,4 + 7,3.", r: "2,7 + 7,3 = 10 ; 10 + 9,4 = **19,4**." }
  ],
  retenir: ["Virgule sous virgule.", "Somme = résultat de l'addition ; différence = résultat de la soustraction.", "Toujours vérifier avec un ordre de grandeur."]
},

"Multiplication et division": {
  video: "",
  objectifs: ["Multiplier un décimal par un entier ou par un décimal", "Multiplier et diviser par 10, 100, 1 000", "Effectuer une division euclidienne"],
  cours: `
### Vocabulaire
Le résultat d'une multiplication est un **produit** : 6 × 4 = 24. Le résultat d'une division est un **quotient**.

### Multiplier par 10, 100, 1 000
On décale la virgule vers la **droite** de 1, 2 ou 3 rangs : 3,47 × 100 = **347**.

### Diviser par 10, 100, 1 000
On décale la virgule vers la **gauche** : 58 ÷ 100 = **0,58**.

### Multiplier deux décimaux
1. On calcule sans s'occuper des virgules.
2. On place la virgule : le résultat a **autant de chiffres après la virgule** que les deux facteurs réunis.

Exemple : 2,5 × 1,3. On calcule 25 × 13 = 325. 2,5 a 1 chiffre après la virgule et 1,3 en a 1 : le résultat en a 2, donc **3,25**.

### La division euclidienne
**dividende = diviseur × quotient + reste**, avec **reste < diviseur**.
Exemple : 47 = 6 × 7 + 5 (quotient 7, reste 5).
`,
  exemple: `
On partage **47 bonbons** entre **6 enfants** : chacun en reçoit **7** et il en reste **5**, car 6 × 7 + 5 = 47 et 5 < 6.
`,
  exercices: [
    { q: "Calcule : 0,56 × 1 000 ; 72 ÷ 10 ; 4,3 × 0,2.", r: "0,56 × 1 000 = **560** ; 72 ÷ 10 = **7,2** ; 4,3 × 0,2 = **0,86**." },
    { q: "Effectue la division euclidienne de 158 par 12.", r: "158 = 12 × **13** + **2** (quotient 13, reste 2)." },
    { q: "Un cahier coûte 2,45 €. Combien coûtent 6 cahiers ?", r: "2,45 × 6 = **14,70 €**." }
  ],
  retenir: ["× 10, 100, 1 000 : virgule vers la droite ; ÷ : vers la gauche.", "Produit de décimaux : on compte les chiffres après la virgule des deux facteurs.", "Division euclidienne : dividende = diviseur × quotient + reste, reste < diviseur."]
},

"Les angles": {
  video: "",
  objectifs: ["Nommer un angle", "Mesurer et tracer un angle au rapporteur", "Reconnaître les angles aigus, droits, obtus et plats"],
  cours: `
### Définition
Un **angle** est formé par deux **demi-droites** de même origine. L'origine est le **sommet**, les demi-droites sont les **côtés**.
L'angle de sommet B formé par [BA) et [BC) se note **ABC** avec un chapeau sur le B (la lettre du sommet est toujours **au milieu**).

### Mesurer avec un rapporteur
1. On place le **centre** du rapporteur sur le **sommet**.
2. On aligne le **zéro** sur un côté.
3. On lit la mesure sur la graduation qui part de ce zéro.
Les angles se mesurent en **degrés** (°).

### Les types d'angles
| Angle | Mesure |
|---|---|
| aigu | entre 0° et 90° |
| droit | exactement 90° |
| obtus | entre 90° et 180° |
| plat | exactement 180° |

> Piège classique : lire la mauvaise graduation du rapporteur. Vérifiez toujours : un angle aigu doit mesurer moins de 90° !
`,
  exemple: `
Un angle de **35°** est aigu, un angle de **120°** est obtus. L'angle formé par les aiguilles d'une montre à 3 h est un angle **droit** (90°).
`,
  exercices: [
    { q: "Classe ces angles : 45°, 90°, 160°, 180°, 89°.", r: "Aigus : **45°, 89°** ; droit : **90°** ; obtus : **160°** ; plat : **180°**." },
    { q: "Dans l'angle noté RST, quel point est le sommet ?", r: "Le sommet est **S** (la lettre du milieu)." },
    { q: "Quel angle forment les aiguilles d'une montre à 6 h ?", r: "Un angle **plat** de **180°**." }
  ],
  retenir: ["Le sommet est la lettre du milieu.", "Centre du rapporteur sur le sommet, zéro sur un côté.", "Aigu < 90° = droit < obtus < 180° = plat."]
},

"Le cercle": {
  video: "",
  objectifs: ["Connaître le vocabulaire du cercle", "Tracer un cercle au compas", "Calculer la longueur d'un cercle"],
  cours: `
### Définition
Le **cercle** de centre O et de rayon r est l'ensemble des points situés **à la distance r** du point O.

### Vocabulaire
- **Centre** : le point O.
- **Rayon** : segment qui relie le centre à un point du cercle (ou sa longueur).
- **Diamètre** : segment qui passe par le centre et relie deux points du cercle. **diamètre = 2 × rayon**.
- **Corde** : segment qui relie deux points du cercle.
- **Arc** : portion de cercle entre deux points.

### Tracer un cercle
On écarte le compas de la longueur du **rayon**, on pique sur le **centre** et on tourne.

### Longueur du cercle (périmètre)
**Longueur = π × diamètre = 2 × π × rayon**, avec π ≈ 3,14.

> Le disque, c'est la surface à l'intérieur du cercle. Le cercle, c'est seulement le « bord ».
`,
  exemple: `
Une roue a un rayon de **30 cm**. Son diamètre est 60 cm. En un tour, elle parcourt environ 3,14 × 60 = **188,4 cm**.
`,
  exercices: [
    { q: "Un cercle a un diamètre de 9 cm. Quel est son rayon ?", r: "Rayon = 9 ÷ 2 = **4,5 cm**." },
    { q: "Calcule la longueur d'un cercle de rayon 5 cm (π ≈ 3,14).", r: "2 × 3,14 × 5 = **31,4 cm**." },
    { q: "Un diamètre est-il une corde ?", r: "**Oui** : c'est la plus longue corde du cercle, celle qui passe par le centre." }
  ],
  retenir: ["Tous les points du cercle sont à la même distance du centre.", "Diamètre = 2 × rayon.", "Longueur du cercle = π × diamètre."]
},

"Périmètres et aires": {
  video: "",
  objectifs: ["Distinguer périmètre et aire", "Utiliser les formules du carré, du rectangle, du triangle et du disque", "Convertir des unités d'aire"],
  cours: `
### Périmètre ou aire ?
- Le **périmètre** est la **longueur du contour** d'une figure (en m, cm…).
- L'**aire** est la **mesure de la surface** (en m², cm²…).

### Les formules
| Figure | Périmètre | Aire |
|---|---|---|
| Carré de côté c | 4 × c | c × c |
| Rectangle L × l | 2 × (L + l) | L × l |
| Triangle rectangle | somme des 3 côtés | (côté 1 × côté 2) ÷ 2 |
| Disque de rayon r | 2 × π × r | π × r × r |

### Unités d'aire
1 m² = 100 dm² = 10 000 cm². Pour les aires, on passe d'une unité à la suivante en **multipliant par 100**.

> Deux figures peuvent avoir le même périmètre et des aires différentes ! Un rectangle 1 × 9 et un carré 5 × 5 ont tous les deux un périmètre de 20, mais des aires de 9 et 25.
`,
  exemple: `
Une chambre rectangulaire mesure **4 m sur 3 m**.
- Périmètre (pour la plinthe) : 2 × (4 + 3) = **14 m**.
- Aire (pour la moquette) : 4 × 3 = **12 m²**.
`,
  exercices: [
    { q: "Calcule le périmètre et l'aire d'un carré de 6 cm de côté.", r: "Périmètre = 4 × 6 = **24 cm** ; aire = 6 × 6 = **36 cm²**." },
    { q: "Un triangle rectangle a des côtés de l'angle droit de 8 cm et 5 cm. Quelle est son aire ?", r: "(8 × 5) ÷ 2 = **20 cm²**." },
    { q: "Convertis 3 m² en cm².", r: "3 × 10 000 = **30 000 cm²**." }
  ],
  retenir: ["Périmètre = contour (cm) ; aire = surface (cm²).", "Rectangle : P = 2 × (L + l) ; A = L × l.", "Aires : on change d'unité en × 100 ou ÷ 100."]
},

"La symétrie axiale": {
  video: "",
  objectifs: ["Construire le symétrique d'un point et d'une figure", "Connaître les propriétés de la symétrie", "Trouver les axes de symétrie d'une figure"],
  cours: `
### Définition
Deux figures sont **symétriques par rapport à une droite (d)** si elles se superposent quand on plie la feuille le long de (d). La droite (d) est l'**axe de symétrie**.

### Symétrique d'un point
Le symétrique de A par rapport à (d) est le point A' tel que **(d) est la médiatrice de [AA']** :
- (AA') est **perpendiculaire** à (d) ;
- A et A' sont à la **même distance** de (d).

### Propriétés
La symétrie axiale **conserve** :
- les longueurs ;
- les angles ;
- les aires et les périmètres ;
- l'alignement.

### Axes de symétrie de figures connues
| Figure | Nombre d'axes |
|---|---|
| Rectangle | 2 |
| Carré | 4 |
| Losange | 2 |
| Triangle équilatéral | 3 |
| Cercle | une infinité |

> Un point situé sur l'axe est son propre symétrique.
`,
  exemple: `
Les lettres **A**, **M** et **T** ont un axe de symétrie vertical. La lettre **E** a un axe horizontal. La lettre **H** en a deux.
`,
  exercices: [
    { q: "Combien d'axes de symétrie possède un carré ?", r: "**4** axes : les 2 diagonales et les 2 droites qui passent par les milieux des côtés opposés." },
    { q: "Un segment de 5 cm a pour symétrique un segment [A'B']. Combien mesure [A'B'] ?", r: "**5 cm**, car la symétrie conserve les longueurs." },
    { q: "Cite une lettre majuscule qui n'a aucun axe de symétrie.", r: "Par exemple **F**, **G**, **J**, **L**, **P**, **R** ou **S**." }
  ],
  retenir: ["L'axe est la médiatrice du segment qui relie un point à son symétrique.", "La symétrie conserve longueurs, angles et aires.", "Carré : 4 axes ; rectangle : 2 ; cercle : une infinité."]
}

};
