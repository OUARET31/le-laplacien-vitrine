/* =====================================================================
   INGÉNIERIE NUMÉRIQUE — DÉBUTANT — PYTHON
   ---------------------------------------------------------------------
   Mise en forme du texte (en plus de ### titre, **gras**, listes, > encadré) :
     [[mot]]           -> code dans une phrase
     ~~~python         -> début d'un bloc de code (python, c, vhdl…)
     ~~~               -> fin du bloc de code
   Les textes sont écrits avec String.raw`...` pour que les \n du code restent tels quels.
   ===================================================================== */
AJOUTE("ing1", "python", {

"Installer Python et écrire son premier programme": {
  objectifs: ["Installer Python et un éditeur de code", "Écrire et exécuter un premier programme", "Afficher du texte et lire une saisie"],
  cours: String.raw`
### Qu'est-ce que Python ?
Python est un **langage de programmation** simple à lire, très utilisé en science, en data, en robotique et sur le web. Un programme Python est un fichier texte qui se termine par [[.py]]. L'**interpréteur** Python le lit ligne par ligne et exécute les instructions.

### Installer
1. Télécharger Python sur **python.org** (cocher « Add Python to PATH » sous Windows).
2. Installer un éditeur : **VS Code** (avec l'extension Python) ou **Thonny** pour débuter.
3. Vérifier dans un terminal : [[python --version]].

### Premier programme
~~~python
print("Bonjour, LE LAPLACIEN !")
~~~
[[print()]] affiche ce qu'on lui donne entre parenthèses. Le texte est entre guillemets : c'est une **chaîne de caractères**.

### Lire une saisie
~~~python
prenom = input("Comment t'appelles-tu ? ")
print("Enchanté,", prenom)
~~~
[[input()]] attend que l'utilisateur tape quelque chose et renvoie toujours du **texte**.

> Les commentaires commencent par # : Python les ignore, ils servent à expliquer le code.
`,
  exemple: String.raw`
~~~python
# Calcule l'âge dans 10 ans
age = int(input("Ton âge : "))   # int() transforme le texte en nombre entier
print("Dans 10 ans, tu auras", age + 10, "ans.")
~~~
Si on tape 14, le programme affiche : **Dans 10 ans, tu auras 24 ans.**
`,
  exercices: [
    { q: "Écris un programme qui affiche trois lignes : ton prénom, ta ville, ta matière préférée.", r: String.raw`
~~~python
print("Salah")
print("Paris")
print("Électronique")
~~~` },
    { q: "Écris un programme qui demande un nombre et affiche son double.", r: String.raw`
~~~python
n = float(input("Un nombre : "))
print("Le double vaut", 2 * n)
~~~` },
    { q: "Que se passe-t-il si on écrit [[print(\"Bonjour)]] ?", r: "Une **SyntaxError** : le guillemet de fin manque, Python ne sait pas où s'arrête le texte." }
  ],
  retenir: ["Un programme Python est un fichier [[.py]] exécuté ligne par ligne.", "[[print()]] affiche, [[input()]] lit du texte.", "[[int()]] et [[float()]] transforment un texte en nombre."],
  quiz: [
    { niveau:"facile", q:"Quelle instruction affiche un message à l'écran ?", choix:["input()","print()","show()","echo()"], bonne:1, pourquoi:"print() affiche ce qu'on lui donne." },
    { niveau:"facile", q:"L'extension d'un fichier Python est :", choix:[".py",".c",".txt",".exe"], bonne:0, pourquoi:"On écrit par exemple premier.py." },
    { niveau:"intermediaire", q:"input() renvoie toujours un nombre.", choix:["Vrai","Faux"], bonne:1, pourquoi:"input() renvoie du texte (str) ; il faut int() ou float() pour un nombre." },
    { niveau:"intermediaire", q:"Par quel caractère commence un commentaire en Python ?", rep:["#"], pourquoi:"Tout ce qui suit # sur la ligne est ignoré." },
    { niveau:"difficile", q:"Que affiche [[print(\"3\" + \"4\")]] ?", choix:["7","34","3 + 4","une erreur"], bonne:1, pourquoi:"Ce sont deux textes : + les colle l'un à l'autre." }
  ],
  niveaux: {
    facile: [
      { q:"Écris un programme qui affiche « Hello World ».", r:String.raw`
~~~python
print("Hello World")
~~~` },
      { q:"Comment vérifier que Python est installé ?", r:"Dans un terminal : [[python --version]] (ou [[python3 --version]])." }
    ],
    difficile: [
      { q:"Demande deux nombres décimaux et affiche leur somme et leur produit sur deux lignes.", r:String.raw`
~~~python
a = float(input("a = "))
b = float(input("b = "))
print("Somme :", a + b)
print("Produit :", a * b)
~~~` },
      { q:"Pourquoi [[int(\"3,5\")]] provoque-t-il une erreur ? Comment lire 3,5 correctement ?", r:"int() n'accepte que des entiers, et Python utilise le **point** comme séparateur décimal. Il faut taper 3.5 et utiliser [[float()]], ou remplacer la virgule : [[float(texte.replace(\",\", \".\"))]]." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Écris un programme qui affiche le message que Harry reçoit dans sa lettre : « Vous êtes admis à Poudlard ! »", r:String.raw`
~~~python
print("Vous êtes admis à Poudlard !")
~~~` },
    { niveau:"intermediaire", perso:"Le Choixpeau", q:"Écris un programme qui demande le prénom d'un élève, puis affiche « [prénom], bienvenue à Gryffondor ! ».", r:String.raw`
~~~python
prenom = input("Ton prénom : ")
print(prenom + ", bienvenue à Gryffondor !")
~~~` },
    { niveau:"difficile", perso:"Un gobelin de Gringotts", q:"Demande un nombre de Gallions et affiche sa valeur en Mornilles (1 Gallion = 17 Mornilles) et en Noises (1 Mornille = 29 Noises).", r:String.raw`
~~~python
g = int(input("Gallions : "))
mornilles = g * 17
noises = mornilles * 29
print(g, "Gallions =", mornilles, "Mornilles =", noises, "Noises")
~~~
Pour 2 Gallions : 34 Mornilles = 986 Noises.` }
  ]
},

"Variables et types": {
  objectifs: ["Créer et modifier une variable", "Connaître les types int, float, str et bool", "Convertir d'un type à l'autre"],
  cours: String.raw`
### Une variable, c'est une étiquette
Une **variable** donne un nom à une valeur rangée en mémoire. On l'**affecte** avec [[=]] :
~~~python
score = 0
score = score + 10   # score vaut maintenant 10
~~~
Le nom commence par une lettre, sans espace ni accent conseillé : [[note_finale]], [[nb_eleves]].

### Les types de base
| Type | Signification | Exemple |
|---|---|---|
| int | nombre entier | 42 |
| float | nombre à virgule | 3.14 |
| str | texte (chaîne) | "Poudlard" |
| bool | vrai ou faux | True |

La fonction [[type()]] indique le type : [[type(3.14)]] donne [[float]].

### Opérations utiles
~~~python
7 / 2    # 3.5  division
7 // 2   # 3    quotient entier
7 % 2    # 1    reste
2 ** 3   # 8    puissance
~~~

### Convertir
[[int("12")]] → 12, [[float("2.5")]] → 2.5, [[str(42)]] → "42".

> Une f-string permet de mélanger texte et variables : f"Score : {score} points".
`,
  exemple: String.raw`
~~~python
nom = "Hermione"
livres = 12
moyenne = 19.5
print(f"{nom} a lu {livres} livres et a {moyenne} de moyenne.")
~~~
Affiche : **Hermione a lu 12 livres et a 19.5 de moyenne.**
`,
  exercices: [
    { q:"Quel est le type de chaque valeur : 17 ; \"17\" ; 17.0 ; False ?", r:"int ; str ; float ; bool." },
    { q:"Échange les valeurs de deux variables a et b.", r:String.raw`
~~~python
a, b = b, a
~~~
(ou avec une variable temporaire : [[t = a ; a = b ; b = t]])` },
    { q:"Calcule le quotient et le reste de 100 divisé par 7.", r:"[[100 // 7]] = 14 et [[100 % 7]] = 2, car 100 = 7 × 14 + 2." }
  ],
  retenir: ["[[=]] affecte une valeur à une variable.", "4 types de base : int, float, str, bool.", "[[//]] quotient entier, [[%]] reste, [[**]] puissance."],
  quiz: [
    { niveau:"facile", q:"Quel est le type de 3.14 ?", choix:["int","float","str","bool"], bonne:1, pourquoi:"Un nombre à virgule est un float." },
    { niveau:"facile", q:"True est une valeur de type bool.", choix:["Vrai","Faux"], bonne:0, pourquoi:"bool n'a que deux valeurs : True et False." },
    { niveau:"intermediaire", q:"Combien vaut 17 % 5 ?", rep:["2"], pourquoi:"17 = 5 × 3 + 2 : le reste est 2." },
    { niveau:"intermediaire", q:"Que donne 2 ** 4 ?", choix:["8","6","16","24"], bonne:2, pourquoi:"2 puissance 4 = 16." },
    { niveau:"difficile", q:"Après [[x = 5]] puis [[x = x * 2 + 1]], combien vaut x ?", rep:["11"], pourquoi:"5 × 2 + 1 = 11." }
  ],
  niveaux: {
    facile: [
      { q:"Crée une variable [[ville]] contenant \"Lyon\" et affiche-la.", r:String.raw`
~~~python
ville = "Lyon"
print(ville)
~~~` },
      { q:"Combien vaut 7 // 2 ? Et 7 / 2 ?", r:"[[7 // 2]] = 3 ; [[7 / 2]] = 3.5." }
    ],
    difficile: [
      { q:"Convertis une durée en secondes (par exemple 3725) en heures, minutes, secondes.", r:String.raw`
~~~python
t = 3725
h = t // 3600
m = (t % 3600) // 60
s = t % 60
print(h, "h", m, "min", s, "s")   # 1 h 2 min 5 s
~~~` },
      { q:"Pourquoi [[0.1 + 0.2 == 0.3]] renvoie-t-il False ?", r:"Les float sont stockés en binaire et 0,1 n'a pas d'écriture binaire exacte : le résultat vaut 0.30000000000000004. On compare plutôt avec une tolérance : [[abs(a - b) < 1e-9]]." }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Ron", q:"Ron a 5 Chocogrenouilles, il en mange 2. Écris le programme avec une variable [[choco]].", r:String.raw`
~~~python
choco = 5
choco = choco - 2
print(choco)   # 3
~~~` },
    { niveau:"intermediaire", perso:"Professeur McGonagall", q:"Gryffondor a 312 points. McGonagall retire 50 points, puis en donne 20. Écris le programme et affiche le total avec une f-string.", r:String.raw`
~~~python
points = 312
points -= 50
points += 20
print(f"Gryffondor : {points} points")   # 282
~~~` },
    { niveau:"difficile", perso:"Un gobelin de Gringotts", q:"Convertis un montant en Noises (par exemple 1000) en Gallions, Mornilles et Noises (1 Gallion = 17 Mornilles = 493 Noises).", r:String.raw`
~~~python
n = 1000
gallions = n // 493
reste = n % 493
mornilles = reste // 29
noises = reste % 29
print(gallions, "G", mornilles, "M", noises, "N")   # 2 G 0 M 14 N
~~~` }
  ]
},

"Conditions et boucles": {
  objectifs: ["Écrire une condition avec if, elif, else", "Répéter avec for et range", "Répéter tant qu'une condition est vraie avec while"],
  cours: String.raw`
### Les conditions
~~~python
note = 13
if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Admis")
else:
    print("Refusé")
~~~
Les deux points [[:]] et l'**indentation** (4 espaces) délimitent le bloc.

Comparaisons : [[==]] égal, [[!=]] différent, [[<]], [[<=]], [[>]], [[>=]]. On combine avec [[and]], [[or]], [[not]].

### La boucle for
~~~python
for i in range(5):     # i prend 0, 1, 2, 3, 4
    print(i)
~~~
[[range(a, b)]] va de a à b − 1 ; [[range(a, b, pas)]] avance de « pas ».

### La boucle while
~~~python
n = 1
while n < 100:
    n = n * 2
print(n)   # 128
~~~
> Attention à la boucle infinie : la condition du while doit finir par devenir fausse.
`,
  exemple: String.raw`
Table de multiplication de 7 :
~~~python
for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")
~~~
`,
  exercices: [
    { q:"Demande un nombre et affiche s'il est pair ou impair.", r:String.raw`
~~~python
n = int(input("n = "))
if n % 2 == 0:
    print("pair")
else:
    print("impair")
~~~` },
    { q:"Calcule la somme 1 + 2 + … + 100 avec une boucle.", r:String.raw`
~~~python
s = 0
for i in range(1, 101):
    s += i
print(s)   # 5050
~~~` },
    { q:"Avec while, redemande un mot de passe tant qu'il est différent de \"Alohomora\".", r:String.raw`
~~~python
mdp = ""
while mdp != "Alohomora":
    mdp = input("Mot de passe : ")
print("La porte s'ouvre !")
~~~` }
  ],
  retenir: ["[[if / elif / else]] + deux points + indentation.", "[[for i in range(n)]] répète n fois (i de 0 à n − 1).", "[[while condition:]] répète tant que la condition est vraie."],
  quiz: [
    { niveau:"facile", q:"Quel opérateur teste l'égalité ?", choix:["=","==","===",":="], bonne:1, pourquoi:"= affecte, == compare." },
    { niveau:"facile", q:"range(5) produit 1, 2, 3, 4, 5.", choix:["Vrai","Faux"], bonne:1, pourquoi:"range(5) produit 0, 1, 2, 3, 4." },
    { niveau:"intermediaire", q:"Combien de fois s'affiche « Lumos » ? [[for i in range(2, 8): print(\"Lumos\")]]", rep:["6"], pourquoi:"i va de 2 à 7 : 6 valeurs." },
    { niveau:"intermediaire", q:"Qu'affiche ce code si x = 12 ? [[if x > 10 and x < 20: print(\"A\") else: print(\"B\")]]", choix:["A","B","AB","rien"], bonne:0, pourquoi:"12 est bien entre 10 et 20." },
    { niveau:"difficile", q:"Que vaut n à la fin ? [[n = 3]] puis [[while n < 50: n = n * 3]]", rep:["81"], pourquoi:"3 → 9 → 27 → 81 (81 n'est plus < 50)." }
  ],
  niveaux: {
    facile: [
      { q:"Affiche les nombres de 1 à 10.", r:String.raw`
~~~python
for i in range(1, 11):
    print(i)
~~~` },
      { q:"Demande l'âge et affiche « majeur » si l'âge est au moins 18, sinon « mineur ».", r:String.raw`
~~~python
age = int(input("Âge : "))
print("majeur" if age >= 18 else "mineur")
~~~` }
    ],
    difficile: [
      { q:"Affiche tous les nombres premiers inférieurs à 50.", r:String.raw`
~~~python
for n in range(2, 50):
    premier = True
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            premier = False
            break
    if premier:
        print(n)
~~~` },
      { q:"Jeu du nombre mystère : l'ordinateur choisit un nombre entre 1 et 100, le joueur propose, le programme répond « plus grand » ou « plus petit » jusqu'à trouver, puis affiche le nombre d'essais.", r:String.raw`
~~~python
import random
secret = random.randint(1, 100)
essais = 0
prop = 0
while prop != secret:
    prop = int(input("Ta proposition : "))
    essais += 1
    if prop < secret:
        print("plus grand")
    elif prop > secret:
        print("plus petit")
print(f"Trouvé en {essais} essais !")
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Hermione", q:"Hermione répète « Wingardium Leviosa » 5 fois pour s'entraîner. Écris la boucle.", r:String.raw`
~~~python
for i in range(5):
    print("Wingardium Leviosa")
~~~` },
    { niveau:"intermediaire", perso:"Le Choixpeau", q:"Demande le trait principal d'un élève (courage, sagesse, loyauté, ambition) et affiche sa maison.", r:String.raw`
~~~python
trait = input("Ton trait principal : ").lower()
if trait == "courage":
    print("Gryffondor !")
elif trait == "sagesse":
    print("Serdaigle !")
elif trait == "loyauté":
    print("Poufsouffle !")
elif trait == "ambition":
    print("Serpentard !")
else:
    print("Le Choixpeau hésite…")
~~~` },
    { niveau:"difficile", perso:"Olivier Dubois", q:"Simule un match : à chaque minute (boucle), Gryffondor marque un but (10 points) avec une chance sur 3 ; le match s'arrête quand l'attrapeur prend le Vif d'or (une chance sur 20 par minute, +150 points). Affiche le score final et la durée.", r:String.raw`
~~~python
import random
score, minute, fini = 0, 0, False
while not fini:
    minute += 1
    if random.randint(1, 3) == 1:
        score += 10
    if random.randint(1, 20) == 1:
        score += 150
        fini = True
print(f"Vif d'or attrapé à la minute {minute} : {score} points")
~~~` }
  ]
},

"Les fonctions": {
  objectifs: ["Définir une fonction avec def", "Utiliser des paramètres et return", "Comprendre la portée des variables"],
  cours: String.raw`
### Pourquoi des fonctions ?
Une **fonction** regroupe des instructions sous un nom, pour les réutiliser sans les recopier. On la **définit** une fois, on l'**appelle** autant de fois qu'on veut.

### Définir et appeler
~~~python
def aire_rectangle(longueur, largeur):
    return longueur * largeur

a = aire_rectangle(5, 3)   # a vaut 15
~~~
- [[longueur]] et [[largeur]] sont des **paramètres** ;
- 5 et 3 sont les **arguments** de l'appel ;
- [[return]] renvoie le résultat et termine la fonction.

### Valeur par défaut
~~~python
def saluer(nom, langue="fr"):
    if langue == "fr":
        return f"Bonjour {nom}"
    return f"Hello {nom}"
~~~

### Portée
Une variable créée dans une fonction est **locale** : elle n'existe pas en dehors.

> Une bonne fonction fait une seule chose, porte un nom clair et commence par une docstring qui explique son rôle.
`,
  exemple: String.raw`
~~~python
def moyenne(notes):
    """Renvoie la moyenne d'une liste de notes."""
    return sum(notes) / len(notes)

print(moyenne([12, 15, 18]))   # 15.0
~~~
`,
  exercices: [
    { q:"Écris une fonction [[carre(x)]] qui renvoie x².", r:String.raw`
~~~python
def carre(x):
    return x ** 2
~~~` },
    { q:"Écris une fonction [[est_pair(n)]] qui renvoie True si n est pair.", r:String.raw`
~~~python
def est_pair(n):
    return n % 2 == 0
~~~` },
    { q:"Quelle est la différence entre print et return dans une fonction ?", r:"[[print]] affiche à l'écran ; [[return]] **renvoie** une valeur qu'on peut stocker et réutiliser. Une fonction sans return renvoie [[None]]." }
  ],
  retenir: ["[[def nom(paramètres):]] définit une fonction.", "[[return]] renvoie un résultat et termine la fonction.", "Les variables créées dans une fonction sont locales."],
  quiz: [
    { niveau:"facile", q:"Quel mot-clé définit une fonction ?", choix:["function","def","func","define"], bonne:1, pourquoi:"En Python : def." },
    { niveau:"facile", q:"Une fonction peut être appelée plusieurs fois.", choix:["Vrai","Faux"], bonne:0, pourquoi:"C'est tout son intérêt." },
    { niveau:"intermediaire", q:"Que vaut [[f(4)]] si [[def f(x): return 3 * x - 2]] ?", rep:["10"], pourquoi:"3 × 4 − 2 = 10." },
    { niveau:"intermediaire", q:"Que renvoie une fonction qui n'a pas de return ?", choix:["0","None","False","une erreur"], bonne:1, pourquoi:"Elle renvoie None." },
    { niveau:"difficile", q:"Avec [[def p(a, b=2): return a ** b]], que vaut [[p(3)]] ?", rep:["9"], pourquoi:"b vaut 2 par défaut : 3² = 9." }
  ],
  niveaux: {
    facile: [
      { q:"Écris une fonction [[double(x)]].", r:String.raw`
~~~python
def double(x):
    return 2 * x
~~~` },
      { q:"Écris une fonction [[bonjour(nom)]] qui renvoie \"Bonjour \" suivi du nom.", r:String.raw`
~~~python
def bonjour(nom):
    return "Bonjour " + nom
~~~` }
    ],
    difficile: [
      { q:"Écris une fonction [[factorielle(n)]] (n! = 1 × 2 × … × n), d'abord avec une boucle, puis de façon récursive.", r:String.raw`
~~~python
def factorielle(n):
    r = 1
    for i in range(2, n + 1):
        r *= i
    return r

def factorielle_rec(n):
    return 1 if n <= 1 else n * factorielle_rec(n - 1)
~~~` },
      { q:"Écris [[pgcd(a, b)]] avec l'algorithme d'Euclide.", r:String.raw`
~~~python
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(pgcd(84, 36))   # 12
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Harry", q:"Écris une fonction [[lumos()]] qui affiche « La baguette s'illumine ! » et appelle-la deux fois.", r:String.raw`
~~~python
def lumos():
    print("La baguette s'illumine !")

lumos()
lumos()
~~~` },
    { niveau:"intermediaire", perso:"Olivier Dubois", q:"Écris [[score_quidditch(buts, vif)]] qui renvoie le score d'une équipe (10 points par but, 150 si vif vaut True).", r:String.raw`
~~~python
def score_quidditch(buts, vif):
    return buts * 10 + (150 if vif else 0)

print(score_quidditch(6, True))   # 210
~~~` },
    { niveau:"difficile", perso:"Professeur Rogue", q:"Une potion doit cuire un nombre de minutes qui dépend du nombre de doses : 10 minutes pour la première dose, puis 5 minutes de plus par dose supplémentaire. Écris [[temps_cuisson(doses)]] et teste-la, puis vérifie avec assert.", r:String.raw`
~~~python
def temps_cuisson(doses):
    if doses <= 0:
        return 0
    return 10 + 5 * (doses - 1)

assert temps_cuisson(1) == 10
assert temps_cuisson(4) == 25
~~~` }
  ]
},

"Listes et dictionnaires": {
  objectifs: ["Créer et parcourir une liste", "Utiliser les méthodes append, len, sorted", "Associer des clés à des valeurs avec un dictionnaire"],
  cours: String.raw`
### Les listes
Une **liste** range plusieurs valeurs dans l'ordre :
~~~python
maisons = ["Gryffondor", "Serdaigle", "Poufsouffle", "Serpentard"]
print(maisons[0])    # Gryffondor (on compte à partir de 0)
print(maisons[-1])   # Serpentard (le dernier)
print(len(maisons))  # 4
~~~
Opérations utiles : [[liste.append(x)]] ajoute à la fin, [[liste.remove(x)]] retire, [[sorted(liste)]] renvoie une copie triée, [[x in liste]] teste la présence.

### Parcourir
~~~python
for m in maisons:
    print(m)
~~~

### Les dictionnaires
Un **dictionnaire** associe une **clé** à une **valeur** :
~~~python
points = {"Gryffondor": 482, "Serpentard": 472}
points["Serdaigle"] = 426        # ajoute une clé
print(points["Gryffondor"])      # 482
for maison, p in points.items():
    print(maison, p)
~~~

> Une liste s'utilise avec une position (indice) ; un dictionnaire avec un nom (clé).
`,
  exemple: String.raw`
~~~python
notes = [12, 17, 9, 15]
notes.append(14)
print(max(notes), min(notes), sum(notes) / len(notes))   # 17 9 13.4
~~~
`,
  exercices: [
    { q:"Crée une liste de 5 prénoms et affiche-les un par ligne.", r:String.raw`
~~~python
amis = ["Léa", "Yanis", "Inès", "Tom", "Sami"]
for a in amis:
    print(a)
~~~` },
    { q:"Compte le nombre de notes supérieures ou égales à 10 dans une liste.", r:String.raw`
~~~python
notes = [8, 12, 15, 9, 10]
n = 0
for x in notes:
    if x >= 10:
        n += 1
print(n)   # 3
~~~` },
    { q:"Crée un dictionnaire prix de 3 fruits et calcule le prix total d'un panier.", r:String.raw`
~~~python
prix = {"pomme": 0.5, "banane": 0.3, "kiwi": 0.6}
panier = {"pomme": 4, "kiwi": 2}
total = sum(prix[f] * q for f, q in panier.items())
print(total)   # 3.2
~~~` }
  ],
  retenir: ["Liste : [[[a, b, c]]], indice à partir de 0, [[append]], [[len]].", "Dictionnaire : [[{clé: valeur}]], accès par [[d[clé]]].", "[[for x in liste]] et [[for k, v in d.items()]] pour parcourir."],
  quiz: [
    { niveau:"facile", q:"Quel est l'indice du premier élément d'une liste ?", choix:["0","1","-1","il n'y en a pas"], bonne:0, pourquoi:"On commence à compter à 0." },
    { niveau:"facile", q:"append ajoute un élément au début de la liste.", choix:["Vrai","Faux"], bonne:1, pourquoi:"append ajoute à la fin." },
    { niveau:"intermediaire", q:"Que vaut [[len([3, 1, 4, 1, 5])]] ?", rep:["5"], pourquoi:"La liste contient 5 éléments." },
    { niveau:"intermediaire", q:"Avec [[d = {\"a\": 1, \"b\": 2}]], que vaut [[d[\"b\"]]] ?", choix:["1","2","\"b\"","une erreur"], bonne:1, pourquoi:"La clé \"b\" est associée à 2." },
    { niveau:"difficile", q:"Que vaut [[[x * 2 for x in range(4)]]] ?", choix:["[0, 2, 4, 6]","[2, 4, 6, 8]","[0, 1, 2, 3]","8"], bonne:0, pourquoi:"C'est une liste en compréhension : 0, 1, 2, 3 multipliés par 2." }
  ],
  niveaux: {
    facile: [
      { q:"Affiche le dernier élément de [[[\"a\", \"b\", \"c\"]]].", r:"[[liste[-1]]] ou [[liste[2]]] : \"c\"." },
      { q:"Ajoute 42 à la fin de la liste [[nombres]].", r:"[[nombres.append(42)]]" }
    ],
    difficile: [
      { q:"Compte combien de fois chaque lettre apparaît dans un mot, avec un dictionnaire.", r:String.raw`
~~~python
mot = "abracadabra"
compte = {}
for l in mot:
    compte[l] = compte.get(l, 0) + 1
print(compte)   # {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}
~~~` },
      { q:"Écris une fonction qui renvoie la liste sans doublons, en gardant l'ordre.", r:String.raw`
~~~python
def sans_doublons(liste):
    vus, res = set(), []
    for x in liste:
        if x not in vus:
            vus.add(x)
            res.append(x)
    return res
~~~` }
    ]
  },
  poudlard: [
    { niveau:"facile", perso:"Ron", q:"Crée la liste des membres du trio (Harry, Ron, Hermione) et affiche sa longueur.", r:String.raw`
~~~python
trio = ["Harry", "Ron", "Hermione"]
print(len(trio))   # 3
~~~` },
    { niveau:"intermediaire", perso:"Professeur Dumbledore", q:"Avec le dictionnaire des points des maisons, affiche la maison gagnante de la Coupe.", r:String.raw`
~~~python
points = {"Gryffondor": 482, "Serpentard": 472, "Serdaigle": 426, "Poufsouffle": 352}
gagnante = max(points, key=points.get)
print(gagnante, "remporte la Coupe des Quatre Maisons !")
~~~` },
    { niveau:"difficile", perso:"Hermione", q:"Hermione note pour chaque sortilège le nombre de fois où elle l'a réussi : liste de tuples [(\"Lumos\", 12), (\"Accio\", 7), (\"Expelliarmus\", 15)]. Trie-la du plus réussi au moins réussi et affiche le classement numéroté.", r:String.raw`
~~~python
sorts = [("Lumos", 12), ("Accio", 7), ("Expelliarmus", 15)]
sorts.sort(key=lambda s: s[1], reverse=True)
for rang, (nom, n) in enumerate(sorts, start=1):
    print(f"{rang}. {nom} ({n} réussites)")
~~~` }
  ]
}

});
