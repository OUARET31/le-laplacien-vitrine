/* =====================================================================
   OUTIL COMMUN (ne pas modifier)
   AJOUTE(annee, matiere, { "Titre exact de la leçon": { ...champs } })
   ajoute des champs (quiz, niveaux, poudlard, videos) à une leçon existante.
   ===================================================================== */
window.CONTENU = window.CONTENU || {};
window.AJOUTE = function (annee, matiere, lecons) {
  CONTENU[annee] = CONTENU[annee] || {};
  CONTENU[annee][matiere] = CONTENU[annee][matiere] || {};
  for (const titre in lecons) {
    CONTENU[annee][matiere][titre] = Object.assign(CONTENU[annee][matiere][titre] || {}, lecons[titre]);
  }
};
