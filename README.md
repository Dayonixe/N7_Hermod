# <img src="Logo.png" alt="Hermod" />ermod

Team : Pierre L. & Théo Pirouelle & Eléa T.

<a href="https://www.python.org/">
  <img src="https://img.shields.io/badge/language-Vue-41b883?style=flat-square" alt="laguage-Vue" />
</a>

---

## Description

Our project is a **Dashboard** which aims to be customizable and specific to each user. A user of the **Hermod** application will be able to choose the information he wants to have on his dashboard. This information has the particularity to be configurable and in real time.

## Methodology

- Creation of a personal branch for the development of a feature, the resolution of a bug;
- Merge request on the `master` branch;
- Code review/validation by the team;
- Once the merge is validated, proceed to a final validation on the HMI.


## Setting

In order to use the database, as well as the APIs for the weather and movie widgets, it is necessary to create a `.env` file at the root of the *backend* folder. This file must have the following structure:

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

During this project, we were able to use the following technologies:

- NodeJS : JavaScript runtime environment used mainly for the backend of our application;
- VueJS : JavaScript framework used for the frontend;
- FeathersJS : framework used for real time management;
- PostgreSQL : DBMS used for data persistence.


## User manual

### Registration

Go to the Hermod home page, then enter a username, an e-mail and a password in the fields provided. To validate the registration, you just have to press the `Sign Up` button.

### Login

Go to the Hermod home page, then click on the user icon on the top right of the application. A popup appears, you can enter your email and your password in the fields provided. To finish the connection, you just have to press the `Login` button.

### Logout

Once connected to the application, you can disconnect by clicking on the button at the top right of the application.

### Widgets

Once connected to the application, you have the possibility to add various widgets. To do so, simply click on the `+` button at the bottom right of the screen, then select the desired widget.

If you want to remove a widget from your dashboard, you need to place your cursor on the widget you want to remove, then `right click` or `wheel click`.

#### Weather widget

Add the `Weather Widget`, once added, you have the possibility to indicate a city in the field provided for this purpose. You can validate your entry via the button located to the right of the field or with the `Enter` key on your keyboard.

The weather widget is based on the following API: https://openweathermap.org/

#### Cinema Widget

Add the `Cinema Widget`, once added, you can view the latest movie releases by pressing the side buttons of the widget.

The cinema widget is based on the following API: https://www.themoviedb.org/

#### ToDo List Widget

Add the `TodoList Widget`, once added, you can add items by filling in the field provided for this purpose, then validating via the button located to the right of the field or with the `Enter` key on your keyboard. Once an element has been added, you can modify its label by simply clicking on the text and validating your modification by pressing the `Enter` key. You can also delete the element with the delete button on the right.

### Sidebar

The sidebar has been added in order to return to the home of our dashboard, to access a messaging system, to configure groups to share various widgets (such as the ToDo List widget), or to access a settings menu to customize the application.

These features are prospects for further development.

### Data persistence

When you make changes to your account (e.g. adding widgets with a certain order, items in the ToDo List widget), the data persists. That is, your information is saved in the database so that you can keep your configuration and not have to recreate it each time you log in.
