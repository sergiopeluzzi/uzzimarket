# Uzzi Market API

### Description
<p> API for UzziMarket Web and UzziMarket App

### API Routes
| Route  | Method   | Description                          | Body                    |
| :----- | :------: | :----------------------------------- | :---------------------- |
| / | GET | There's nothing here | |
| /users | GET | Returns JSON with all users | |
| /users | POST | Returns JSON with registered user | name, email, password |
| /users/login | POST | Returns a jwt token | email, password |
| /lists | GET | Returns JSON with all lists of logged user | |
| /lists | POST | Returns JSON with registered list | title, description |
| /lists/:id | GET | Returns JSON with a list passed in params | |
| /lists/:id/items | GET | Returns JSON with items of list passed in params | |
| /lists/:id/items | POST | Returns JSON with registered items saved to list passed in params | Array of items: { description, note (optional), qnt } |
| /lists/:id/items/:item | DELETE | Returns a succesfull or fail deleting message | |