//Contrôle des données et affichage
function displayResult(){
  // On récupère l'élément saisi dans le formulaire
  var age = parseInt(document.getElementById('age').value);
  // Déclaration de la variable définissant la Regex pour l'age
  var regexAge =  /^\d{2,3}$/;
  // Condition gérant les erreurs de saisie
  if(!regexAge.test(age)||(age>120)){
    //PAS BON : Premier nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais, c'est pas bon !");
  }else if(+age>=18){
    //Affichage majeur
    alert("Vous êtes majeur");
  }else{
    //Affichage mineur
    alert("Vous êtes mineur");
  }
};
