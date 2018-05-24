// On crée ici un contrat (interface) qui va définir l'interface de l'objet, un contrat est défini en tant que genre, type
// On va ajouter ici toutes les fonctions que l'on veut dans l'objet final
// le contrat est toujours public

export interface Hello {
    sayHello();   // Ici une erreur sera affichée si sayHello n'est pas utilisée
}


// Autres exemples

export interface Recorder {
    save();
}

export interface PersonHandler {
    getName();
    getAge();
    getVille();
}