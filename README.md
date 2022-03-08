#TDD API

Initiation au Test Driven Development (TDD) avec JavaScript sur une API Rest

## Consignes TP

Avec une approche TDD, tester et implémenter les routes associées aux actions CRUD (Create Read Update Delete) d'une API Rest sur la ressource Task.

Utiliser les framework Express.js(https://expressjs.com) et Jest (https://jestjs.io).

Si nécessaire, tester d'abord les requêtes et résultats retournés sur l'API JSON PlaceHolder (https://jsonplaceholder.typicode.com/) puis implémenter l'API.

### Routes

- Post /tasks
- Get /tasks
- Get /tasks/{id}
- Put /tasks/{id}
- Patch /tasks/{id}
- Delete /tasks/{id}

Tester les résultats retournés (Body, Headers, Code de statut HTTP, scénarios d'erreur...).

### Commandes utiles

- Installation des dépendances NPM

 ```
 npm install
 ```

- Hot Reloading

```
npm run watch
```

- Tests

```
npm run test
```

_Pour tester l'API, démarrer le projet dans un premier onglet du terminal, puis effectuer les tests dans un second onglet du terminal_

---

__Alexandre Leroux__

_Enseignant / Formateur indépendant_

_Développeur logiciel full stack web & mobile_

- alex@sherpa.one
- https://sherpa.one
- sherpa#3890
- https://github.com/sherpa1/