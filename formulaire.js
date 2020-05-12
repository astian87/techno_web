/* 2 fonctions pour le formulaire : calcul du prix moyen et confirmation de réservation*/

function validationfinal(){

    var heure = document.reservation.nbheure.value;
    var date = document.reservation.nbdate.value;
    var personnes = document.reservation.nbpersonnes.value;

    var validation = `Vous avez bien résrevé pour `+heure+` le `+date+` pour `+personnes+` personne(s).`;

    document.getElementById("validationreservation").innerHTML = validation;
    }

    var okidoki = 35;

    function moyennefin(){

    var personnes = document.reservation.nbpersonnes.value;
    
    var moy = `Cela vous coûtera environ `+personnes*okidoki+` euros.`;

    document.getElementById("calculicout").innerHTML = moy;
    };