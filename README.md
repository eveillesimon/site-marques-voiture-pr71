# MarquesVoitures

Ce projet a été développé avec [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.  
Auteur : Simon EVEILLE

## Installation et lancement du projet 

À la racine du projet :  
```npm install```   
```npm run start```

Pour le back-end :  
```npm install -g json-server```  
```json-server --watch db.json```

## Listes des features implémentées : 

### Concernant les marques : 
- Cartes de présentation des marques
- Listing des marques
- Service pour les marques (fonctions de recherche et d'ajout)
- Formulaire d'ajout (avec validation des champs required et message en cas de non-respect)

### Concernant les modèles :  
- Cartes de présentation des modèles
- Listing de modèles
- Service pour les modèles (fonctions de recherche et d'ajout)
- Formulaire d'ajout (avec validation des champs required et message en cas de non-respect)

## Features non-implémentées

- La possibilité d'enregistrer des images pour les marques/modèles (seul le chemin est enregistré)
- La redirection lors de la création d'un modèle vers la liste de modèles correspondante
