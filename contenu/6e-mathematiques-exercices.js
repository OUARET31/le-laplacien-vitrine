/* =====================================================================
   SIXIÈME — MATHÉMATIQUES : QUIZ, EXERCICES PAR NIVEAU, EXERCICES À POUDLARD
   ---------------------------------------------------------------------
   Comment modifier (sur GitHub : crayon ✏️ puis « Commit changes ») :
   • quiz : { niveau, q, choix:[...], bonne: n° de la bonne réponse en partant de 0, pourquoi }
            vrai/faux : choix:["Vrai","Faux"] ; réponse à écrire : rep:["réponse 1","variante"]
   • niveaux : { facile:[{q,r}], difficile:[{q,r}] }  (les exercices de base sont « intermédiaires »)
   • poudlard : [{ niveau:"facile"|"intermediaire"|"difficile", perso:"Nom", q, r }]
   • videos : [{ id:"identifiant YouTube (11 caractères)", titre:"..." }]
   ===================================================================== */
AJOUTE("6e", "mathematiques", {

"Les nombres entiers et décimaux": {
  quiz: [
    { niveau:"facile", q:"Dans 45,372, quel est le chiffre des **centièmes** ?", choix:["3","7","2","5"], bonne:1, pourquoi:"3 est le chiffre des dixièmes, 7 celui des centièmes, 2 celui des millièmes." },
    { niveau:"facile", q:"3,5 et 3,50 sont le même nombre.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Un zéro à la fin de la partie décimale ne change pas la valeur." },
    { niveau:"intermediaire", q:"Écris en chiffres : deux-cent-sept unités et quatre centièmes.", rep:["207,04"], pourquoi:"Il n'y a aucun dixième : on écrit 0 au rang des dixièmes." },
    { niveau:"intermediaire", q:"La fraction 7/100 s'écrit :", choix:["7,100","0,07","0,7","700"], bonne:1, pourquoi:"7 centièmes = 0,07." },
    { niveau:"difficile", q:"Combien y a-t-il de **dixièmes** en tout dans 12,6 ?", choix:["6","12","126","1 260"], bonne:2, pourquoi:"12,6 = 126 dixièmes (12 unités = 120 dixièmes, plus 6)." }
  ],
  niveaux: {
    facile: [
      { q:"Donne le chiffre des unités et celui des dixièmes dans 308,15.", r:"Unités : **8** ; dixièmes : **1**." },
      { q:"Écris sous forme de nombre décimal : 35/10 et 4/100.", r:"35/10 = **3,5** et 4/100 = **0,04**." }
    ],
    difficile: [
      { q:"Décompose 6 027,305 (milliers, centaines, dizaines, unités, dixièmes, centièmes, millièmes).", r:"6 027,305 = 6 × 1 000 + 0 × 100 + 2 × 10 + 7 + 3/10 + 0/100 + 5/1 000." },
      { q:"Trouve le nombre : 3 aux dizaines, 0 aux unités, 8 aux dixièmes, 5 aux centièmes, et rien d'autre.", r:"**30,85**" }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Hagrid", q:"Dans cet exercice, Hagrid mesure 3,5 m. Quel est le chiffre des unités ? Celui des dixièmes ?", r:"Unités : **3** ; dixièmes : **5**. 3,5 m, c'est aussi 35 dm." },
    { niveau:"intermediaire", perso:"Harry", q:"Harry prend le Poudlard Express sur la voie 9 ¾. Écris 9 ¾ sous forme de nombre décimal.", r:"3/4 = 0,75, donc 9 ¾ = **9,75**." },
    { niveau:"difficile", perso:"Hermione", q:"Hermione écrit un nombre mystère :\n- son chiffre des dizaines = le nombre de maisons de Poudlard ;\n- son chiffre des unités = le nombre de joueurs d'une équipe de Quidditch ;\n- son chiffre des dixièmes = le nombre de joueurs dans une équipe moins 7 ;\n- son chiffre des centièmes = le nombre de Reliques de la Mort.\nQuel est ce nombre ?", r:"4 maisons, 7 joueurs, 7 − 7 = 0 dixième, 3 Reliques : **47,03**." }
  ]
},

"Comparer et ranger les décimaux": {
  quiz: [
    { niveau:"facile", q:"Quel est le plus grand nombre ?", choix:["4,8","4,75","4,09","4,799"], bonne:0, pourquoi:"On compare d'abord les dixièmes : 8 est le plus grand." },
    { niveau:"facile", q:"2,15 > 2,9 parce que 15 > 9.", choix:["Vrai","Faux"], bonne:1, pourquoi:"On compare rang par rang : 1 dixième < 9 dixièmes, donc 2,15 < 2,9." },
    { niveau:"intermediaire", q:"Quel nombre est compris entre 3,4 et 3,5 ?", choix:["3,45","3,54","3,04","3,6"], bonne:0, pourquoi:"3,40 < 3,45 < 3,50." },
    { niveau:"intermediaire", q:"Complète l'encadrement par deux entiers consécutifs : 7 < 7,38 < …", rep:["8"], pourquoi:"L'entier qui suit 7 est 8." },
    { niveau:"difficile", q:"Quel est le bon rangement dans l'ordre croissant ?", choix:["0,405 < 0,45 < 0,5 < 0,54","0,45 < 0,405 < 0,5 < 0,54","0,5 < 0,45 < 0,54 < 0,405","0,405 < 0,5 < 0,45 < 0,54"], bonne:0, pourquoi:"Avec 3 chiffres après la virgule : 0,405 < 0,450 < 0,500 < 0,540." }
  ],
  niveaux: {
    facile: [
      { q:"Compare avec < ou > : 5,6 … 5,58 ; 12,03 … 12,3.", r:"5,6 **>** 5,58 ; 12,03 **<** 12,3." },
      { q:"Range dans l'ordre décroissant : 3,2 ; 3,02 ; 3,22 ; 2,99.", r:"3,22 > 3,2 > 3,02 > 2,99" }
    ],
    difficile: [
      { q:"Trouve trois nombres décimaux compris entre 1,7 et 1,8.", r:"Par exemple 1,72 ; 1,75 ; 1,79. Il y en a une infinité !" },
      { q:"Encadre 15,684 au dixième près, puis au centième près.", r:"15,6 < 15,684 < 15,7\n\n15,68 < 15,684 < 15,69" }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Madame Bibine", q:"Au cours de vol, Harry vole à 4,25 m, Drago à 4,5 m et Neville à 4,05 m. Qui vole le plus haut ? Le plus bas ?", r:"4,05 < 4,25 < 4,5 : **Drago** vole le plus haut, **Neville** le plus bas." },
    { niveau:"intermediaire", perso:"Professeur Rogue", q:"Rogue range quatre fioles : 0,3 L ; 0,25 L ; 0,305 L ; 0,035 L. Range-les dans l'ordre croissant.", r:"0,035 < 0,25 < 0,3 < 0,305" },
    { niveau:"difficile", perso:"Fred et George", q:"Fred a 2,7 kg de bonbons, George 2,69 kg. George dit : « 69 est plus grand que 7, donc j'en ai plus ! » Qui a raison ? Donne un nombre compris entre les deux.", r:"**Fred** a raison : 2,70 > 2,69 (7 dixièmes > 6 dixièmes). Un nombre entre les deux : 2,695." }
  ]
},

"Les fractions": {
  quiz: [
    { niveau:"facile", q:"Dans 3/8, le dénominateur est :", choix:["3","8","11","5"], bonne:1, pourquoi:"Le dénominateur est le nombre du bas : en combien de parts on partage." },
    { niveau:"facile", q:"1/2 = 2/4", choix:["Vrai","Faux"], bonne:0, pourquoi:"On multiplie le numérateur et le dénominateur par 2." },
    { niveau:"intermediaire", q:"Combien valent les 3/4 de 20 ?", rep:["15"], pourquoi:"20 ÷ 4 = 5, puis 5 × 3 = 15." },
    { niveau:"intermediaire", q:"Quelle fraction est égale à 1 ?", choix:["5/6","6/5","7/7","0/7"], bonne:2, pourquoi:"Quand le numérateur est égal au dénominateur, la fraction vaut 1." },
    { niveau:"difficile", q:"Écris 2/5 sous forme décimale.", rep:["0,4"], pourquoi:"2/5 = 4/10 = 0,4." }
  ],
  niveaux: {
    facile: [
      { q:"Une pizza est coupée en 8 parts égales ; on en mange 3. Quelle fraction a été mangée ? Quelle fraction reste ?", r:"Mangé : **3/8** ; reste : **5/8**." },
      { q:"Écris en fraction : un quart ; trois demis.", r:"**1/4** ; **3/2**" }
    ],
    difficile: [
      { q:"Encadre 7/4 entre deux entiers consécutifs, puis écris-la comme un entier + une fraction inférieure à 1.", r:"1 < 7/4 < 2 et 7/4 = 1 + 3/4." },
      { q:"Dans un club de 36 élèves, 2/9 font de la musique et 1/4 du sport. Combien d'élèves pour chaque activité ?", r:"2/9 de 36 : 36 ÷ 9 × 2 = **8** ; 1/4 de 36 : **9**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Ron", q:"Ron coupe une Chocogrenouille en 4 morceaux égaux et en mange 3. Quelle fraction a-t-il mangée ?", r:"**3/4**" },
    { niveau:"intermediaire", perso:"Professeur Chourave", q:"Dans la serre, les 3/5 des 40 mandragores sont prêtes à être rempotées. Combien de mandragores ?", r:"40 ÷ 5 × 3 = **24** mandragores." },
    { niveau:"difficile", perso:"Le Choixpeau", q:"Le Choixpeau répartit 280 élèves : 1/4 à Gryffondor, 1/5 à Serdaigle, 3/10 à Poufsouffle et le reste à Serpentard. Combien par maison ? Quelle fraction va à Serpentard ?", r:"Gryffondor : 70 ; Serdaigle : 56 ; Poufsouffle : 84.\n\nSerpentard : 280 − 210 = **70**, soit 70/280 = **1/4**." }
  ]
},

"Addition et soustraction": {
  quiz: [
    { niveau:"facile", q:"12,5 + 7,3 = ?", rep:["19,8"], pourquoi:"On aligne les virgules : 12,5 + 7,3 = 19,8." },
    { niveau:"facile", q:"10 − 3,6 = ?", rep:["6,4"], pourquoi:"10,0 − 3,6 = 6,4." },
    { niveau:"intermediaire", q:"Pour poser 45,2 + 3,75, il faut aligner :", choix:["les chiffres de droite","les virgules","les chiffres de gauche","peu importe"], bonne:1, pourquoi:"On aligne les virgules pour additionner des chiffres de même rang." },
    { niveau:"intermediaire", q:"8,3 − 2,15 = 6,25", choix:["Vrai","Faux"], bonne:1, pourquoi:"8,30 − 2,15 = 6,15." },
    { niveau:"difficile", q:"Donne un ordre de grandeur de 398,7 + 201,4 en arrondissant à la centaine.", rep:["600"], pourquoi:"400 + 200 = 600." }
  ],
  niveaux: {
    facile: [
      { q:"Calcule : 23,4 + 5,52 ; 50 − 12,7.", r:"**28,92** ; **37,3**" },
      { q:"Un cahier coûte 2,35 € et un stylo 1,40 €. Quel est le prix total ?", r:"2,35 + 1,40 = **3,75 €**" }
    ],
    difficile: [
      { q:"Complète : 14,8 + … = 20 ; … − 3,75 = 6,25.", r:"20 − 14,8 = **5,2** ; 6,25 + 3,75 = **10**." },
      { q:"Théo a 50 €. Il achète un livre à 12,90 € et un jeu à 24,65 €. Combien lui reste-t-il ? Vérifie avec un ordre de grandeur.", r:"12,90 + 24,65 = 37,55 ; 50 − 37,55 = **12,45 €**.\n\nOrdre de grandeur : 50 − (13 + 25) = 12. ✔" }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Harry court 12,6 m dans un couloir, puis 8,4 m pour rejoindre la tour de Gryffondor. Quelle distance parcourt-il ?", r:"12,6 + 8,4 = **21 m**" },
    { niveau:"intermediaire", perso:"Hermione", q:"Hermione porte trois livres : 1,25 kg, 0,8 kg et 2,15 kg. Quelle masse porte-t-elle ? Son sac supporte 5 kg : combien peut-elle encore ajouter ?", r:"1,25 + 0,8 + 2,15 = **4,2 kg** ; 5 − 4,2 = **0,8 kg**." },
    { niveau:"difficile", perso:"Olivier Dubois", q:"Au Quidditch, un but rapporte 10 points et le Vif d'or 150 points. Gryffondor marque 6 buts et attrape le Vif d'or ; Serpentard marque 17 buts. Qui gagne, et avec combien de points d'avance ?", r:"Gryffondor : 60 + 150 = 210 ; Serpentard : 170.\n\n**Gryffondor** gagne avec 210 − 170 = **40 points** d'avance." }
  ]
},

"Multiplication et division": {
  quiz: [
    { niveau:"facile", q:"4,5 × 10 = ?", rep:["45"], pourquoi:"Multiplier par 10 décale les chiffres d'un rang vers la gauche." },
    { niveau:"facile", q:"37 ÷ 100 = ?", rep:["0,37"], pourquoi:"Diviser par 100 décale les chiffres de deux rangs vers la droite." },
    { niveau:"intermediaire", q:"2,4 × 3 = ?", choix:["6,12","7,2","72","0,72"], bonne:1, pourquoi:"24 × 3 = 72, et il y a un chiffre après la virgule : 7,2." },
    { niveau:"intermediaire", q:"Dans la division euclidienne de 47 par 5, le quotient est 9 et le reste 2.", choix:["Vrai","Faux"], bonne:0, pourquoi:"47 = 5 × 9 + 2, et 2 < 5." },
    { niveau:"difficile", q:"1,2 × 0,5 = ?", choix:["6","0,6","0,06","1,7"], bonne:1, pourquoi:"12 × 5 = 60, deux chiffres après la virgule : 0,60 = 0,6." }
  ],
  niveaux: {
    facile: [
      { q:"Calcule : 3,7 × 100 ; 52 ÷ 10 ; 0,8 × 1 000.", r:"**370** ; **5,2** ; **800**" },
      { q:"Pose la division euclidienne de 158 par 7.", r:"158 = 7 × 22 + 4 : quotient **22**, reste **4**." }
    ],
    difficile: [
      { q:"6 cahiers coûtent 8,70 €. Quel est le prix d'un cahier ? De 10 cahiers ?", r:"8,70 ÷ 6 = **1,45 €** ; 1,45 × 10 = **14,50 €**." },
      { q:"Calcule 25 × 16, puis déduis-en 2,5 × 1,6.", r:"25 × 16 = 400. Il y a 2 chiffres après la virgule en tout : 2,5 × 1,6 = **4,00 = 4**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Neville", q:"Neville arrose 8 rangées de 12 plantes dans la serre n° 3. Combien de plantes arrose-t-il ?", r:"8 × 12 = **96** plantes." },
    { niveau:"intermediaire", perso:"Un gobelin de Gringotts", q:"1 Gallion = 17 Mornilles et 1 Mornille = 29 Noises. Combien de Mornilles valent 12 Gallions ? Combien de Noises valent 3 Mornilles ?", r:"12 × 17 = **204 Mornilles** ; 3 × 29 = **87 Noises**." },
    { niveau:"difficile", perso:"Professeur Rogue", q:"Rogue prépare 2,4 L de Pimentine qu'il verse dans des fioles de 0,15 L. Combien de fioles remplit-il ?", r:"2,4 ÷ 0,15 = 240 ÷ 15 = **16 fioles**." }
  ]
},

"Les angles": {
  quiz: [
    { niveau:"facile", q:"Un angle droit mesure :", choix:["45°","90°","180°","360°"], bonne:1, pourquoi:"L'angle droit mesure 90°." },
    { niveau:"facile", q:"Un angle de 120° est :", choix:["aigu","droit","obtus","plat"], bonne:2, pourquoi:"Entre 90° et 180° : obtus." },
    { niveau:"intermediaire", q:"Un angle aigu mesure moins de 90°.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Aigu : entre 0° et 90°." },
    { niveau:"intermediaire", q:"Combien de degrés mesure un angle plat ?", rep:["180","180°"], pourquoi:"Ses deux côtés forment une droite : 180°." },
    { niveau:"difficile", q:"Un angle de 35° et un angle de x° forment ensemble un angle droit. Combien vaut x ?", rep:["55","55°"], pourquoi:"90 − 35 = 55." }
  ],
  niveaux: {
    facile: [
      { q:"Aigu, droit, obtus ou plat ? 30° ; 90° ; 145° ; 180° ; 89°.", r:"30° aigu ; 90° droit ; 145° obtus ; 180° plat ; 89° aigu." },
      { q:"Avec quel instrument mesure-t-on un angle ? Comment le place-t-on ?", r:"Le **rapporteur** : son centre sur le sommet, le zéro sur un côté de l'angle." }
    ],
    difficile: [
      { q:"Un angle plat est partagé en deux angles. L'un mesure 65°. Combien mesure l'autre ?", r:"180 − 65 = **115°**." },
      { q:"Quel angle forment les aiguilles d'une horloge à 3 h ? À 1 h ?", r:"Le tour complet (360°) est partagé en 12 heures : 30° par heure.\n\n3 h : **90°** ; 1 h : **30°**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Pour lancer « Expelliarmus », Harry tient sa baguette qui forme un angle de 40° avec le sol. Cet angle est-il aigu, droit ou obtus ?", r:"40° < 90° : il est **aigu**." },
    { niveau:"intermediaire", perso:"Madame Bibine", q:"Le balai de Ginny monte avec un angle de 30° par rapport au sol, puis elle le relève encore de 25°. Quel est le nouvel angle ? Est-il aigu ?", r:"30 + 25 = **55°** : oui, il est aigu." },
    { niveau:"difficile", perso:"Le Saule cogneur", q:"Une branche du Saule cogneur tourne de 135°. Quel angle lui manque-t-il pour faire un demi-tour ? Un tour complet ?", r:"Demi-tour : 180 − 135 = **45°** ; tour complet : 360 − 135 = **225°**." }
  ]
},

"Le cercle": {
  quiz: [
    { niveau:"facile", q:"Le diamètre d'un cercle de rayon 4 cm mesure :", choix:["2 cm","4 cm","8 cm","16 cm"], bonne:2, pourquoi:"Diamètre = 2 × rayon." },
    { niveau:"facile", q:"Tous les points d'un cercle sont à la même distance de son centre.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Cette distance, c'est le rayon." },
    { niveau:"intermediaire", q:"Un segment qui relie deux points d'un cercle s'appelle :", choix:["un rayon","une corde","un centre","un arc"], bonne:1, pourquoi:"Une corde ; si elle passe par le centre, c'est un diamètre." },
    { niveau:"intermediaire", q:"Un cercle a un diamètre de 10 cm. Quel est son rayon (en cm) ?", rep:["5","5 cm"], pourquoi:"10 ÷ 2 = 5." },
    { niveau:"difficile", q:"La plus longue corde d'un cercle est :", choix:["un rayon","un diamètre","un arc","impossible à dire"], bonne:1, pourquoi:"Le diamètre est la plus longue corde." }
  ],
  niveaux: {
    facile: [
      { q:"Tu traces un cercle de centre O et de rayon 3 cm. Quel écartement donnes-tu au compas ?", r:"**3 cm**." },
      { q:"A est un point du cercle de centre O. Comment s'appelle le segment [OA] ?", r:"Un **rayon**." }
    ],
    difficile: [
      { q:"Construis le triangle ABC tel que AB = 5 cm, AC = 4 cm et BC = 3 cm. Explique ta méthode.", r:"1. Trace [AB] de 5 cm.\n2. Cercle de centre A, rayon 4 cm.\n3. Cercle de centre B, rayon 3 cm.\n4. C est un point d'intersection des deux cercles." },
      { q:"AB = 4 cm. Combien y a-t-il de points à 2 cm de A **et** à 3 cm de B ?", r:"Ce sont les points communs aux cercles (A ; 2 cm) et (B ; 3 cm). Ils se coupent en **2 points**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Dumbledore", q:"Dans cet exercice, la Pensine de Dumbledore est une vasque ronde de 60 cm de diamètre. Quel est son rayon ?", r:"60 ÷ 2 = **30 cm**." },
    { niveau:"intermediaire", perso:"Hermione", q:"Avec « Lumos », la baguette d'Hermione éclaire tout ce qui est à moins de 3 m d'elle. Quelle est la forme de la zone éclairée au sol ? Son diamètre ?", r:"Un **disque** de rayon 3 m centré sur Hermione ; diamètre **6 m**." },
    { niveau:"difficile", perso:"Hagrid", q:"Hagrid attache Buck l'hippogriffe à un piquet avec une corde de 5 m. Buck peut-il atteindre une citrouille à 4 m du piquet ? Une autre à 6 m ? Décris la zone où il peut aller.", r:"4 m : **oui** ; 6 m : **non**.\n\nIl peut aller dans le disque de centre le piquet et de rayon 5 m." }
  ]
},

"Périmètres et aires": {
  quiz: [
    { niveau:"facile", q:"Quel est le périmètre (en cm) d'un carré de côté 5 cm ?", rep:["20","20 cm"], pourquoi:"4 × 5 = 20 cm." },
    { niveau:"facile", q:"Quelle est l'aire (en cm²) d'un rectangle de 7 cm sur 3 cm ?", rep:["21","21 cm²","21 cm2"], pourquoi:"7 × 3 = 21 cm²." },
    { niveau:"intermediaire", q:"Deux figures de même périmètre ont toujours la même aire.", choix:["Vrai","Faux"], bonne:1, pourquoi:"Un rectangle 1 × 9 et un carré 5 × 5 ont le même périmètre (20) mais pas la même aire (9 et 25)." },
    { niveau:"intermediaire", q:"1 m² = ?", choix:["10 dm²","100 dm²","1 000 dm²","100 cm²"], bonne:1, pourquoi:"Pour les aires, on multiplie par 100 à chaque unité." },
    { niveau:"difficile", q:"Aire d'un triangle rectangle dont les côtés de l'angle droit mesurent 6 cm et 4 cm :", choix:["24 cm²","12 cm²","10 cm²","20 cm²"], bonne:1, pourquoi:"C'est la moitié d'un rectangle 6 × 4 : 24 ÷ 2 = 12 cm²." }
  ],
  niveaux: {
    facile: [
      { q:"Calcule le périmètre d'un rectangle de 8 cm sur 5 cm.", r:"2 × (8 + 5) = **26 cm**." },
      { q:"Calcule l'aire d'un carré de côté 9 m.", r:"9 × 9 = **81 m²**." }
    ],
    difficile: [
      { q:"Un disque a un rayon de 10 cm. Calcule son périmètre et son aire (prends π ≈ 3,14).", r:"Périmètre : 2 × 3,14 × 10 = **62,8 cm**.\n\nAire : 3,14 × 10 × 10 = **314 cm²**." },
      { q:"Une pièce en forme de L est faite d'un rectangle de 6 m × 4 m et d'un carré de 3 m de côté. Quelle est son aire ?", r:"24 + 9 = **33 m²**." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Olivier Dubois", q:"Dans cet exercice, le terrain de Quidditch est un rectangle de 150 m sur 50 m. L'équipe en fait le tour à l'entraînement. Quelle distance parcourt-elle ?", r:"2 × (150 + 50) = **400 m**." },
    { niveau:"intermediaire", perso:"Molly Weasley", q:"Le jardin du Terrier mesure 20 m sur 15 m. Ron le dégnome à raison de 25 m² par heure. Quelle est l'aire du jardin ? Combien d'heures lui faut-il ?", r:"Aire : 20 × 15 = **300 m²** ; 300 ÷ 25 = **12 heures**." },
    { niveau:"difficile", perso:"Hagrid", q:"Hagrid construit un enclos carré de 64 m² pour les Scroutts à pétard. Quelle est la longueur d'un côté ? Quelle longueur de clôture lui faut-il ?", r:"8 × 8 = 64 : côté **8 m** ; clôture : 4 × 8 = **32 m**." }
  ]
},

"La symétrie axiale": {
  quiz: [
    { niveau:"facile", q:"Par symétrie axiale, une figure garde ses longueurs.", choix:["Vrai","Faux"], bonne:0, pourquoi:"La symétrie conserve les longueurs, les angles et les aires." },
    { niveau:"facile", q:"Combien d'axes de symétrie a un carré ?", choix:["1","2","4","une infinité"], bonne:2, pourquoi:"2 médianes et 2 diagonales." },
    { niveau:"intermediaire", q:"Combien d'axes de symétrie a un cercle ?", choix:["0","1","2","une infinité"], bonne:3, pourquoi:"Toute droite qui passe par le centre est un axe." },
    { niveau:"intermediaire", q:"Quelle lettre a un axe de symétrie vertical ?", choix:["F","A","G","R"], bonne:1, pourquoi:"A est symétrique par rapport à un axe vertical." },
    { niveau:"difficile", q:"Le symétrique d'un point situé sur l'axe est ce point lui-même.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Un point de l'axe ne bouge pas." }
  ],
  niveaux: {
    facile: [
      { q:"Combien d'axes de symétrie a un rectangle (qui n'est pas un carré) ? Un triangle équilatéral ?", r:"Rectangle : **2** ; triangle équilatéral : **3**." },
      { q:"Dans le mot MAMAN, quelles lettres ont un axe de symétrie ?", r:"**M** et **A** (axe vertical). N n'en a pas." }
    ],
    difficile: [
      { q:"A et A' sont symétriques par rapport à la droite (d), et AA' = 6 cm. À quelle distance de (d) se trouve A ? Que représente (d) pour le segment [AA'] ?", r:"A est à **3 cm** de (d). La droite (d) est la **médiatrice** de [AA']." },
      { q:"Explique comment construire le symétrique d'un point A par rapport à une droite (d) avec une équerre et un compas.", r:"1. Trace la perpendiculaire à (d) passant par A ; elle coupe (d) en H.\n2. Avec le compas, reporte la longueur AH de l'autre côté de H.\n3. Le point obtenu est A'." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"La cicatrice en forme d'éclair de Harry a-t-elle un axe de symétrie ? Et ses lunettes rondes ?", r:"Éclair : **non**. Lunettes : **oui**, un axe vertical entre les deux verres." },
    { niveau:"intermediaire", perso:"Harry", q:"Devant le miroir du Riséd, Harry écrit HARRY. Quelles lettres restent identiques dans le miroir (symétrie d'axe vertical) ?", r:"**H**, **A** et **Y**. Les R apparaissent à l'envers." },
    { niveau:"difficile", perso:"Luna", q:"Luna dessine le symbole des Reliques de la Mort : un triangle équilatéral, un cercle dans le triangle et un trait vertical au milieu. Combien d'axes de symétrie a ce dessin ?", r:"Le triangle et le cercle ont 3 axes en commun, mais le trait vertical n'est conservé que par l'axe vertical : **1 seul axe**." }
  ]
}

});
