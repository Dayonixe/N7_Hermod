
![](./Logo.png)

# Hermod 
## Description

Projet du module *Applications Internet* de Pierre LOTTE, Théo PIROUELLE et Eléa TURC.

Notre projet est un *Dashboard* qui a pour objectif d'être personnalisable et propre à chaque utilisateur. Un utilisateur de l'application *Hermod* pourra ainsi choisir les informations qu'il souhaite avoir sur son dashboard. Ces informations ont la particularité d'être configurables et en temps réel.

> **Lien utile :**
> - Production : http://hermod.prawse.fr/


## Méthodologie

- Création d'une branche personnelle pour le développement d'une fonctionnalité, la résolution d'un bug
- Demande de merge request sur la branche "[main](https://gitlab.com/hermodn7/hermod/-/tree/main)"
- Révision/Validation du code effectué par l'équipe
- Une fois le merge validé, procéder à une dernière validation sur l'[IHM](http://hermod.prawse.fr/)


## Configuration

Afin d'utiliser la base de données, ainsi que les APIs pour les widgets de météo et cinéma, il est nécessaire de créer un fichier `.env` à la racine du dossier *backend*. Ce fichier doit avoir la structure suivante :

```
WEATHER_API_KEY="XXXX"
CINEMA_API_KEY="XXXX"

DB_PASSWORD="XXXX"
DB_USER="XXXX"
DB_PORT=XXXX
DB_NAME="XXXX"
DB_HOST="XXXX"
```

### Technologies

Au cours de ce projet, nous avons pu utiliser les technologies suivantes :

- NodeJS : environnement d'exécution JavaScript utilisé principalement pour le backend de notre application;
- VueJS : framework JavaScript utilisé pour le frontend;
- FeathersJS : framework utilisé pour la gestion du temps réel;
- PostgreSQL : SGBD utilisé pour la persistence des données.


## Manuel d'utilisation

### Inscription

Accéder à la page d'accueil de [Hermod](http://hermod.prawse.fr/), puis entrer un nom d'utilisateur, un e-mail et un mot de passe dans les champs prévus à cet effet. Pour valider l'inscription, il ne reste plus qu'à appuyer sur le bouton "Sign Up".

### Connexion

Accéder à la page d'accueil de [Hermod](http://hermod.prawse.fr/), puis cliquer sur l'icone utilisateur en haut à droite de l'application. Une popup apparait, vous pouvez ainsi entrer votre e-mail et votre mot de passe dans les champs prévus à cet effet. Pour terminer la connexion, il ne reste qu'à appuyer sur le bouton "Login".

### Déconnexion

Une fois connecté à l'application, vous pouvez vous déconnecter en cliquant sur le bouton situé en haut à droite de l'application. 

### Widgets

Une fois connecté à l'application, vous avez la possibilité d'ajouter divers widgets. Pour ce faire, il vous suffit de cliquer sur le bouton "+" en bas à droite de l'écran, puis de sélectionner le widget souhaité.

Si vous souhaitez supprimer un widget de votre dashboard, vous devez placer votre curseur sur le widget que vous voulez supprimer, puis faire un `clic droit` ou `clic molette`.

#### Widget Météo

Ajouter le "Weather Widget", une fois ajouté, vous avez la possibilité d'indiquer une ville dans le champ prévu à cet effet. Vous pouvez valider votre saisie via le bouton situé à droite du champ ou avec la touche "Enter" de votre clavier.

Le widget météo s'appuie sur l'API suivante : https://openweathermap.org/

#### Widget Cinéma

Ajouter le "Cinema Widget", une fois ajouté, vous pouvez consulter les dernières sorties de films en appuyant sur les boutons latéraux du widget.

Le widget cinéma s'appuie sur l'API suivante : https://www.themoviedb.org/

#### Widget ToDo List

Ajouter le "TodoList Widget", une fois ajouté, vous avez la possibilité d'ajouter des éléments en renseignant le champ prévu à cet effet, puis en validant via le bouton situé à droite du champ ou avec la touche "Enter" de votre clavier. Une fois un élément ajouté, vous avez la possibilité de modifier son label en faisant un simple clic sur le texte et en validant votre modification en tapant sur la touche "Enter". Vous pouvez également supprimer l'élément avec le bouton de suppression à droite.

### Sidebar

La sidebar a été ajoutée dans le but de retourner sur l'accueil de notre dashboard, d'accéder à un système de messagerie, de configurer des groupes pour mettre en commun divers widgets (comme le widget de ToDo List), ou encore d'accéder à un menu de paramètres pour personnaliser l'application.

Ces fonctionnalités constituent des perspectives de poursuite.

### Persistence des données

Lorsque vous faites des modifications sur votre compte (par exemple en ajoutant des widgets avec un certain ordre, des éléments dans le widget ToDo List), les données persistent. C'est-à-dire que vos informations sont enregistrées dans la base de données pour garder votre configuration et ne pas avoir à la recréer à chaque connexion.
