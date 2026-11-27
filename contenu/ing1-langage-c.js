/* =====================================================================
   INGÉNIERIE NUMÉRIQUE — DÉBUTANT — LANGAGE C
   (mode d'emploi de la mise en forme : voir l'en-tête de ing1-python.js)
   ===================================================================== */
AJOUTE("ing1", "langage-c", {

"Compiler son premier programme": {
  objectifs: ["Comprendre la différence entre code source et exécutable", "Compiler avec gcc", "Écrire un programme qui affiche du texte"],
  cours: String.raw`
### Un langage compilé
Le C est un langage **compilé** : on écrit le **code source** dans un fichier [[.c]], puis un **compilateur** (gcc, clang) le traduit en langage machine. On obtient un **exécutable** que le processeur lance directement. C'est rapide, et c'est le langage des systèmes embarqués, des microcontrôleurs et des systèmes d'exploitation.

### Le programme minimal
~~~c
#include <stdio.h>

int main(void) {
    printf("Bonjour, LE LAPLACIEN !\n");
    return 0;
}
~~~
- [[#include <stdio.h>]] donne accès aux fonctions d'entrée-sortie comme [[printf]] ;
- [[main]] est le point de départ du programme ;
- [[\n]] passe à la ligne ;
- chaque instruction se termine par un **point-virgule** ;
- [[return 0;]] signale que tout s'est bien passé.

### Compiler et exécuter
~~~bash
gcc -Wall -o bonjour bonjour.c
./bonjour
~~~
[[-Wall]] active les avertissements : prends l'habitude de les lire et de les corriger.

> Sous Windows, on peut installer gcc avec MSYS2, ou utiliser un environnement comme Code::Blocks ou VS Code.
`,
  exemple: String.raw`
~~~c
#include <stdio.h>

int main(void) {
    printf("Ligne 1\n");
    printf("Ligne 2\n");
    printf("Le C a été créé en %d.\n", 1972);
    return 0;
}
~~~
[[%d]] est remplacé par l'entier donné après la virgule.
`,
  exercices: [
    { q:"Écris un programme qui affiche ton prénom et ton âge sur deux lignes.", r:String.raw`
~~~c
#include <stdio.h>
int main(void) {
    printf("Salah\n");
    printf("%d ans\n", 25);
    return 0;
}
~~~` },
    { q:"Quelle commande compile [[jeu.c]] en un exécutable nommé [[jeu]] ?", r:"[[gcc -Wall -o jeu jeu.c]]" },
    { q:"Le compilateur affiche « expected ';' before 'return' ». Que faut-il corriger ?", r:"Il manque un **point-virgule** à la fin de l'instruction juste avant [[return]]." }
  ],
  retenir: ["Code source [[.c]] → compilateur → exécutable.", "Tout programme commence dans [[int main(void)]].", "[[printf]] affiche ; [[%d]] insère un entier ; chaque instruction finit par [[;]]."],
  quiz: [
    { niveau:"facile", q:"Quelle fonction affiche du texte en C ?", choix:["print","printf","cout","echo"], bonne:1, pourquoi:"printf, déclarée dans stdio.h." },
    { niveau:"facile", q:"Le C est un langage compilé.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Le code source est traduit en exécutable par un compilateur." },
    { niveau:"intermediaire", q:"Quelle fonction est le point de départ d'un programme C ?", rep:["main","main()"], pourquoi:"L'exécution commence toujours dans main." },
    { niveau:"intermediaire", q:"Quel fichier faut-il inclure pour utiliser printf ?", choix:["math.h","stdlib.h","stdio.h","string.h"], bonne:2, pourquoi:"stdio = standard input/output." },
    { niveau:"difficile", q:"Que fait l'option -Wall de gcc ?", choix:["Elle accélère le programme","Elle active les avertissements","Elle supprime les erreurs","Elle crée une bibliothèque"], bonne:1, pourquoi:"Wall = warnings all." }
  ],
  niveaux: {
    facile: [
      { q:"Recopie, compile et exécute le programme « Bonjour ».", r:"[[gcc -Wall -o bonjour bonjour.c]] puis [[./bonjour]]." },
      { q:"À quoi sert [[\\n]] dans un printf ?", r:"À passer à la ligne suivante." }
    ],
    difficile: [
      { q:"Écris un programme qui affiche un carré de 4 × 4 étoiles en n'utilisant que des printf.", r:String.raw`
~~~c
#include <stdio.h>
int main(void) {
    printf("****\n****\n****\n****\n");
    return 0;
}
~~~` },
      { q:"Quelles sont les 4 étapes de la compilation avec gcc ?", r:"1. **Préprocesseur** (traite les #include, #define)\n2. **Compilation** (C → assembleur)\n3. **Assemblage** (assembleur → fichier objet .o)\n4. **Édition de liens** (fichiers objets + bibliothèques → exécutable)" }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Écris un programme C qui affiche « Je jure solennellement que mes intentions sont mauvaises » pour ouvrir la Carte du Maraudeur.", r:String.raw`
~~~c
#include <stdio.h>
int main(void) {
    printf("Je jure solennellement que mes intentions sont mauvaises\n");
    return 0;
}
~~~` },
    { niveau:"intermediaire", perso:"Le Poudlard Express", q:"Affiche « Départ du quai 9 3/4 à 11 h » en utilisant %d pour le chiffre 9 et pour 11.", r:String.raw`
~~~c
printf("Départ du quai %d 3/4 à %d h\n", 9, 11);
~~~` },
    { niveau:"difficile", perso:"Arthur Weasley", q:"Arthur ne comprend pas pourquoi son programme ne compile pas :\n~~~c\n#include <stdio.h>\nint main(void) {\n    printf(\"Moldus fascinants\")\n    return 0\n}\n~~~\nTrouve les erreurs.", r:"Il manque deux **points-virgules** : après le printf et après [[return 0]]. On peut aussi ajouter [[\\n]] à la fin du texte." }
  ]
},

"Types, variables et opérateurs": {
  objectifs: ["Déclarer des variables typées", "Lire une saisie avec scanf", "Utiliser les opérateurs arithmétiques"],
  cours: String.raw`
### Déclarer une variable
En C, chaque variable a un **type** fixé à la déclaration :
~~~c
int age = 17;          // entier
float taille = 1.75f;  // réel simple précision
double pi = 3.14159;   // réel double précision
char lettre = 'A';     // un caractère
~~~

### Les principaux types
| Type | Contenu | Format printf/scanf |
|---|---|---|
| int | entier | %d |
| float | réel | %f |
| double | réel précis | %lf (scanf) / %f (printf) |
| char | caractère | %c |

### Lire une valeur
~~~c
int n;
printf("Un nombre : ");
scanf("%d", &n);       // & donne l'adresse de n
~~~

### Opérateurs
[[+ - * /]] et [[%]] (reste). Attention : entre deux entiers, **[[/]] est une division entière** : [[7 / 2]] vaut 3. Pour obtenir 3.5 : [[7.0 / 2]].

Raccourcis : [[x += 3]], [[x++]] (ajoute 1), [[x--]].

> Une variable non initialisée contient n'importe quoi : initialise toujours tes variables.
`,
  exemple: String.raw`
~~~c
#include <stdio.h>
int main(void) {
    double r;
    printf("Rayon : ");
    scanf("%lf", &r);
    printf("Aire du disque : %.2f\n", 3.14159 * r * r);
    return 0;
}
~~~
[[%.2f]] affiche 2 chiffres après la virgule.
`,
  exercices: [
    { q:"Lis deux entiers et affiche leur somme, leur quotient entier et le reste.", r:String.raw`
~~~c
int a, b;
scanf("%d %d", &a, &b);
printf("%d %d %d\n", a + b, a / b, a % b);
~~~` },
    { q:"Que vaut [[x]] après [[int x = 5; x += 2; x++;]] ?", r:"5 + 2 = 7, puis 8 : **x vaut 8**." },
    { q:"Pourquoi [[float m = 7 / 2;]] donne-t-il 3.0 ?", r:"7 et 2 sont des entiers : la division est entière (3), puis 3 est converti en 3.0. Il faut écrire [[7.0f / 2]]." }
  ],
  retenir: ["Chaque variable a un type : int, float, double, char.", "[[scanf(\"%d\", &n)]] lit un entier dans n (ne pas oublier &).", "Entre deux int, [[/]] est une division entière."],
  quiz: [
    { niveau:"facile", q:"Quel type pour stocker un âge ?", choix:["char","int","double","bool"], bonne:1, pourquoi:"Un âge est un entier." },
    { niveau:"facile", q:"En C, une variable doit être déclarée avec un type.", choix:["Vrai","Faux"], bonne:0, pourquoi:"Le C est un langage typé statiquement." },
    { niveau:"intermediaire", q:"Que vaut 17 / 5 entre deux int ?", rep:["3"], pourquoi:"Division entière : 3 (reste 2)." },
    { niveau:"intermediaire", q:"Quel format printf pour afficher un int ?", choix:["%f","%c","%d","%s"], bonne:2, pourquoi:"%d pour un entier décimal." },
    { niveau:"difficile", q:"Que vaut i après [[int i = 3; i = i++ + 0;]] dans un code bien écrit ?", choix:["Un code bien écrit n'écrit pas ça : c'est un comportement à éviter","4","3","5"], bonne:0, pourquoi:"Modifier i deux fois dans la même expression est un comportement non défini : il ne faut jamais écrire ça." }
  ],
  niveaux: {
    facile: [
      { q:"Déclare un entier [[nb]] valant 12 et affiche-le.", r:"[[int nb = 12; printf(\"%d\\n\", nb);]]" },
      { q:"Quel caractère faut-il mettre devant la variable dans scanf ?", r:"Le **&** (adresse de la variable)." }
    ],
    difficile: [
      { q:"Lis une température en °C (réel) et affiche-la en °F (F = C × 9/5 + 32) avec une décimale.", r:String.raw`
~~~c
double c;
scanf("%lf", &c);
printf("%.1f F\n", c * 9.0 / 5.0 + 32);
~~~
Attention : [[9 / 5]] vaudrait 1 en division entière !` },
      { q:"Combien d'octets occupe un int sur ton ordinateur ? Comment le vérifier ?", r:"Le plus souvent **4 octets** (32 bits). On le vérifie avec [[printf(\"%zu\\n\", sizeof(int));]]." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Ron", q:"Déclare une variable [[int chocogrenouilles = 7;]], Ron en mange 3 : mets-la à jour et affiche le résultat.", r:String.raw`
~~~c
int chocogrenouilles = 7;
chocogrenouilles -= 3;
printf("%d\n", chocogrenouilles);   // 4
~~~` },
    { niveau:"intermediaire", perso:"Un gobelin de Gringotts", q:"Lis un nombre de Mornilles et affiche combien de Gallions entiers cela fait, et les Mornilles qui restent (1 Gallion = 17 Mornilles).", r:String.raw`
~~~c
int m;
scanf("%d", &m);
printf("%d Gallions et %d Mornilles\n", m / 17, m % 17);
~~~
Pour 100 : 5 Gallions et 15 Mornilles.` },
    { niveau:"difficile", perso:"Hermione", q:"Hermione calcule sa moyenne avec [[int total = 77; int n = 4; float moy = total / n;]] et obtient 19.00 au lieu de 19.25. Explique et corrige.", r:"[[total / n]] est une division **entière** (19) avant la conversion en float. Correction : [[float moy = (float)total / n;]] → 19.25." }
  ]
},

"Conditions et boucles en C": {
  objectifs: ["Écrire des conditions avec if, else et switch", "Utiliser les boucles for, while et do…while", "Éviter les erreurs classiques (= au lieu de ==)"],
  cours: String.raw`
### if / else
~~~c
if (note >= 10) {
    printf("Admis\n");
} else if (note >= 8) {
    printf("Rattrapage\n");
} else {
    printf("Refusé\n");
}
~~~
En C, une condition vaut **0 (faux)** ou **autre chose (vrai)**. Opérateurs : [[==]], [[!=]], [[<]], [[>]], [[&&]] (et), [[||]] (ou), [[!]] (non).

### switch
~~~c
switch (choix) {
    case 1: printf("Jouer\n"); break;
    case 2: printf("Quitter\n"); break;
    default: printf("Choix inconnu\n");
}
~~~

### Les boucles
~~~c
for (int i = 0; i < 5; i++) { printf("%d\n", i); }   // 0 à 4

int n = 1;
while (n < 100) { n *= 2; }                          // 128

int x;
do { scanf("%d", &x); } while (x < 0);               // au moins une fois
~~~

> Piège classique : [[if (x = 5)]] **affecte** 5 à x et vaut toujours vrai. Il faut [[if (x == 5)]].
`,
  exemple: String.raw`
~~~c
// Somme des entiers de 1 à n
int n, s = 0;
scanf("%d", &n);
for (int i = 1; i <= n; i++) s += i;
printf("Somme = %d\n", s);
~~~
`,
  exercices: [
    { q:"Lis un entier et affiche s'il est positif, négatif ou nul.", r:String.raw`
~~~c
int n; scanf("%d", &n);
if (n > 0) printf("positif\n");
else if (n < 0) printf("négatif\n");
else printf("nul\n");
~~~` },
    { q:"Affiche la table de multiplication de 9 avec une boucle for.", r:String.raw`
~~~c
for (int i = 1; i <= 10; i++) printf("9 x %d = %d\n", i, 9 * i);
~~~` },
    { q:"Avec do…while, redemande une note tant qu'elle n'est pas entre 0 et 20.", r:String.raw`
~~~c
int note;
do {
    printf("Note : ");
    scanf("%d", &note);
} while (note < 0 || note > 20);
~~~` }
  ],
  retenir: ["[[if / else if / else]], [[switch]] avec [[break]].", "[[for]], [[while]], [[do…while]] (au moins une exécution).", "[[==]] compare, [[=]] affecte."],
  quiz: [
    { niveau:"facile", q:"Quel opérateur signifie « et » en C ?", choix:["and","&","&&","+"], bonne:2, pourquoi:"&& est le ET logique." },
    { niveau:"facile", q:"Une boucle do…while s'exécute au moins une fois.", choix:["Vrai","Faux"], bonne:0, pourquoi:"La condition est testée à la fin." },
    { niveau:"intermediaire", q:"Combien de tours fait [[for (int i = 3; i < 10; i += 2)]] ?", rep:["4"], pourquoi:"i = 3, 5, 7, 9." },
    { niveau:"intermediaire", q:"Dans un switch, à quoi sert break ?", choix:["À recommencer","À sortir du switch","À ignorer le case","À rien"], bonne:1, pourquoi:"Sans break, on continue dans le case suivant." },
    { niveau:"difficile", q:"Que se passe-t-il avec [[if (x = 0) printf(\"zéro\");]] ?", choix:["Affiche zéro si x vaut 0","N'affiche jamais rien et met x à 0","Erreur de compilation","Affiche toujours zéro"], bonne:1, pourquoi:"x = 0 affecte 0, l'expression vaut 0 donc faux." }
  ],
  niveaux: {
    facile: [
      { q:"Affiche les nombres de 10 à 1 (compte à rebours).", r:"[[for (int i = 10; i >= 1; i--) printf(\"%d\\n\", i);]]" },
      { q:"Lis l'âge et affiche « majeur » ou « mineur ».", r:"[[if (age >= 18) printf(\"majeur\\n\"); else printf(\"mineur\\n\");]]" }
    ],
    difficile: [
      { q:"Affiche un triangle d'étoiles de hauteur n (1 étoile, puis 2, … jusqu'à n).", r:String.raw`
~~~c
for (int i = 1; i <= n; i++) {
    for (int j = 0; j < i; j++) printf("*");
    printf("\n");
}
~~~` },
      { q:"Écris un programme qui teste si un nombre est premier.", r:String.raw`
~~~c
int n, premier = 1;
scanf("%d", &n);
if (n < 2) premier = 0;
for (int d = 2; d * d <= n && premier; d++)
    if (n % d == 0) premier = 0;
printf(premier ? "premier\n" : "pas premier\n");
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Neville", q:"Neville doit arroser 6 mandragores. Écris une boucle for qui affiche « Mandragore n° i arrosée » pour i de 1 à 6.", r:"[[for (int i = 1; i <= 6; i++) printf(\"Mandragore n° %d arrosée\\n\", i);]]" },
    { niveau:"intermediaire", perso:"Le Choixpeau", q:"Avec un switch sur un entier (1 à 4), affiche la maison correspondante (1 Gryffondor, 2 Serdaigle, 3 Poufsouffle, 4 Serpentard).", r:String.raw`
~~~c
switch (m) {
    case 1: printf("Gryffondor\n"); break;
    case 2: printf("Serdaigle\n"); break;
    case 3: printf("Poufsouffle\n"); break;
    case 4: printf("Serpentard\n"); break;
    default: printf("Le Choixpeau réfléchit…\n");
}
~~~` },
    { niveau:"difficile", perso:"Hermione", q:"Le Retourneur de Temps permet de revivre une heure. Hermione a 3 cours en même temps de 9 h à 10 h. Écris une boucle while qui simule ses retours : elle suit un cours, remonte d'une heure, jusqu'à avoir suivi les 3 cours, puis affiche le nombre de retours.", r:String.raw`
~~~c
int cours = 0, retours = 0;
while (cours < 3) {
    cours++;
    printf("Cours %d suivi de 9 h à 10 h\n", cours);
    if (cours < 3) retours++;
}
printf("%d retours dans le temps\n", retours);   // 2
~~~` }
  ]
},

"Les fonctions en C": {
  objectifs: ["Déclarer et définir une fonction", "Comprendre le passage par valeur", "Organiser un programme en fonctions"],
  cours: String.raw`
### Une fonction en C
~~~c
int carre(int x) {      // type de retour, nom, paramètres
    return x * x;
}

int main(void) {
    printf("%d\n", carre(7));   // 49
    return 0;
}
~~~
Une fonction qui ne renvoie rien est de type [[void]].

### Prototype
Si la fonction est écrite **après** main, on annonce son **prototype** avant :
~~~c
double moyenne(double a, double b);   // prototype
~~~

### Passage par valeur
Les paramètres sont des **copies** : modifier un paramètre ne change pas la variable de l'appelant.
~~~c
void ajoute_un(int n) { n = n + 1; }   // ne modifie pas l'original
~~~
(Pour modifier l'original, il faudra un **pointeur**, vu au niveau Confirmé.)

> Une fonction = une tâche. Un main court qui appelle des fonctions bien nommées est plus facile à lire et à tester.
`,
  exemple: String.raw`
~~~c
#include <stdio.h>

int max2(int a, int b) { return (a > b) ? a : b; }

int main(void) {
    printf("%d\n", max2(12, 30));   // 30
    return 0;
}
~~~
`,
  exercices: [
    { q:"Écris une fonction [[int cube(int x)]].", r:"[[int cube(int x) { return x * x * x; }]]" },
    { q:"Écris une fonction [[void ligne(int n)]] qui affiche n tirets puis passe à la ligne.", r:String.raw`
~~~c
void ligne(int n) {
    for (int i = 0; i < n; i++) printf("-");
    printf("\n");
}
~~~` },
    { q:"Pourquoi [[ajoute_un(x)]] ne modifie-t-il pas x ?", r:"Le C passe les paramètres **par valeur** : la fonction reçoit une copie de x." }
  ],
  retenir: ["[[type nom(paramètres) { … return …; }]]", "[[void]] : la fonction ne renvoie rien.", "Les paramètres sont des copies (passage par valeur)."],
  quiz: [
    { niveau:"facile", q:"Quel type pour une fonction qui ne renvoie rien ?", choix:["int","null","void","empty"], bonne:2, pourquoi:"void = vide." },
    { niveau:"facile", q:"Une fonction C peut renvoyer une valeur avec return.", choix:["Vrai","Faux"], bonne:0, pourquoi:"return renvoie la valeur et termine la fonction." },
    { niveau:"intermediaire", q:"Que renvoie [[f(3)]] avec [[int f(int x) { return 2 * x + 1; }]] ?", rep:["7"], pourquoi:"2 × 3 + 1 = 7." },
    { niveau:"intermediaire", q:"À quoi sert un prototype ?", choix:["À exécuter la fonction","À annoncer la fonction avant sa définition","À la supprimer","À la copier"], bonne:1, pourquoi:"Le compilateur connaît ainsi sa signature." },
    { niveau:"difficile", q:"Après [[int a = 5; ajoute_un(a);]] avec [[void ajoute_un(int n) { n++; }]], que vaut a ?", rep:["5"], pourquoi:"Passage par valeur : a n'est pas modifié." }
  ],
  niveaux: {
    facile: [
      { q:"Écris une fonction [[int somme(int a, int b)]].", r:"[[int somme(int a, int b) { return a + b; }]]" },
      { q:"Écris le prototype d'une fonction [[aire]] qui prend deux double et renvoie un double.", r:"[[double aire(double l, double h);]]" }
    ],
    difficile: [
      { q:"Écris une fonction récursive [[int fibo(int n)]] (fibo(0) = 0, fibo(1) = 1). Pourquoi est-elle lente pour n = 40 ?", r:String.raw`
~~~c
int fibo(int n) { return n < 2 ? n : fibo(n - 1) + fibo(n - 2); }
~~~
Elle recalcule les mêmes valeurs un très grand nombre de fois (complexité exponentielle). Une boucle avec deux variables est bien plus rapide.` },
      { q:"Écris [[int pgcd(int a, int b)]] avec l'algorithme d'Euclide.", r:String.raw`
~~~c
int pgcd(int a, int b) {
    while (b != 0) { int r = a % b; a = b; b = r; }
    return a;
}
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Écris une fonction [[void expelliarmus(void)]] qui affiche « La baguette adverse s'envole ! » et appelle-la dans main.", r:String.raw`
~~~c
void expelliarmus(void) { printf("La baguette adverse s'envole !\n"); }
int main(void) { expelliarmus(); return 0; }
~~~` },
    { niveau:"intermediaire", perso:"Olivier Dubois", q:"Écris [[int score(int buts, int vif)]] qui renvoie 10 points par but, plus 150 si vif vaut 1.", r:"[[int score(int buts, int vif) { return 10 * buts + (vif ? 150 : 0); }]]" },
    { niveau:"difficile", perso:"Un gobelin de Gringotts", q:"Écris [[int en_noises(int g, int m, int n)]] qui convertit un montant (Gallions, Mornilles, Noises) en Noises (1 G = 17 M, 1 M = 29 N), puis teste-la sur 2 G 3 M 10 N.", r:String.raw`
~~~c
int en_noises(int g, int m, int n) { return (g * 17 + m) * 29 + n; }
// en_noises(2, 3, 10) = (34 + 3) * 29 + 10 = 1083
~~~` }
  ]
},

"Les tableaux": {
  objectifs: ["Déclarer et initialiser un tableau", "Parcourir un tableau avec une boucle", "Calculer somme, maximum et moyenne"],
  cours: String.raw`
### Déclarer un tableau
Un **tableau** regroupe plusieurs valeurs du **même type**, rangées côte à côte en mémoire :
~~~c
int notes[5] = {12, 15, 9, 17, 11};
notes[2] = 10;            // modifie la 3e case
printf("%d\n", notes[0]); // 12
~~~
Les indices vont de **0 à taille − 1**. La taille est fixée à la déclaration.

### Parcourir
~~~c
#define N 5
int s = 0;
for (int i = 0; i < N; i++) {
    s += notes[i];
}
printf("Moyenne : %.2f\n", (double)s / N);
~~~

### Trouver le maximum
~~~c
int max = notes[0];
for (int i = 1; i < N; i++)
    if (notes[i] > max) max = notes[i];
~~~

> Le C ne vérifie pas les indices : écrire dans [[notes[5]]] sort du tableau et provoque des bugs graves (dépassement de mémoire).
`,
  exemple: String.raw`
~~~c
int t[6] = {4, 8, 15, 16, 23, 42};
int pairs = 0;
for (int i = 0; i < 6; i++)
    if (t[i] % 2 == 0) pairs++;
printf("%d nombres pairs\n", pairs);   // 4
~~~
`,
  exercices: [
    { q:"Déclare un tableau de 4 réels et affiche-les un par ligne.", r:String.raw`
~~~c
double v[4] = {1.5, 2.0, 3.25, 4.0};
for (int i = 0; i < 4; i++) printf("%.2f\n", v[i]);
~~~` },
    { q:"Compte combien d'éléments d'un tableau de 10 entiers sont négatifs.", r:String.raw`
~~~c
int neg = 0;
for (int i = 0; i < 10; i++) if (t[i] < 0) neg++;
~~~` },
    { q:"Pourquoi [[int t[3] = {1, 2, 3}; printf(\"%d\", t[3]);]] est-il dangereux ?", r:"L'indice 3 n'existe pas (indices 0, 1, 2) : on lit en dehors du tableau, le résultat est imprévisible." }
  ],
  retenir: ["[[type nom[taille];]], indices de 0 à taille − 1.", "On parcourt avec [[for (i = 0; i < N; i++)]].", "Le C ne vérifie pas les dépassements : c'est au programmeur d'y veiller."],
  quiz: [
    { niveau:"facile", q:"Quel est le dernier indice valide de [[int t[8]]] ?", choix:["8","7","9","0"], bonne:1, pourquoi:"Indices de 0 à 7." },
    { niveau:"facile", q:"Un tableau C peut contenir des valeurs de types différents.", choix:["Vrai","Faux"], bonne:1, pourquoi:"Toutes les cases ont le même type." },
    { niveau:"intermediaire", q:"Avec [[int t[4] = {3, 1, 4, 1};]], que vaut [[t[2]]] ?", rep:["4"], pourquoi:"t[0] = 3, t[1] = 1, t[2] = 4." },
    { niveau:"intermediaire", q:"Que vaut la somme des éléments de {2, 4, 6, 8} ?", rep:["20"], pourquoi:"2 + 4 + 6 + 8 = 20." },
    { niveau:"difficile", q:"Combien d'octets occupe [[int t[10]]] si un int fait 4 octets ?", choix:["10","14","40","4"], bonne:2, pourquoi:"10 × 4 = 40 octets, ce que donne sizeof(t)." }
  ],
  niveaux: {
    facile: [
      { q:"Déclare un tableau de 3 entiers valant 7, 8, 9.", r:"[[int t[3] = {7, 8, 9};]]" },
      { q:"Affiche le premier élément du tableau t.", r:"[[printf(\"%d\\n\", t[0]);]]" }
    ],
    difficile: [
      { q:"Écris une fonction qui inverse un tableau sur place.", r:String.raw`
~~~c
void inverser(int t[], int n) {
    for (int i = 0; i < n / 2; i++) {
        int tmp = t[i];
        t[i] = t[n - 1 - i];
        t[n - 1 - i] = tmp;
    }
}
~~~` },
      { q:"Écris le tri à bulles d'un tableau d'entiers.", r:String.raw`
~~~c
void tri_bulles(int t[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - 1 - i; j++)
            if (t[j] > t[j + 1]) { int x = t[j]; t[j] = t[j + 1]; t[j + 1] = x; }
}
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Professeur Dumbledore", q:"Range les points des 4 maisons dans un tableau [[int points[4] = {482, 426, 352, 472};]] et affiche les points de la 1re maison.", r:"[[printf(\"%d\\n\", points[0]);]] → 482." },
    { niveau:"intermediaire", perso:"Professeur Dumbledore", q:"Avec [[int points[4] = {482, 426, 352, 472};]] (Gryffondor, Serdaigle, Poufsouffle, Serpentard), trouve l'indice de la maison qui a le plus de points.", r:String.raw`
~~~c
int imax = 0;
for (int i = 1; i < 4; i++)
    if (points[i] > points[imax]) imax = i;
printf("Maison n° %d\n", imax);   // 0 : Gryffondor
~~~` },
    { niveau:"difficile", perso:"Hermione", q:"Hermione a noté ses temps de préparation de potion (en minutes) sur 7 jours : {35, 28, 31, 25, 30, 22, 27}. Calcule la moyenne (avec décimales) et le nombre de jours où elle a fait mieux que la moyenne.", r:String.raw`
~~~c
int t[7] = {35, 28, 31, 25, 30, 22, 27}, s = 0, mieux = 0;
for (int i = 0; i < 7; i++) s += t[i];
double moy = (double)s / 7;          // 198 / 7 ≈ 28.29
for (int i = 0; i < 7; i++) if (t[i] < moy) mieux++;
printf("%.2f min, %d jours\n", moy, mieux);   // 4 jours
~~~` }
  ]
}

});
