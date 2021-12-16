# Uzzi Market API

### DESCRIPTION
API for UzziMarket Web and UzziMarket App

All features is considering logged user to perform inserts, updates or deletes. Users can only modify your own lists and items

### API ROUTES
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

### USAGE
1. Clone or download this repository to your environment
```shell
git clone https://github.com/sergiopeluzzi/uzzimarketapi.git 
```

2. Create or rename ```.env.example``` to ```.env```

3. In your terminal, access project folder and install dependencies with ```npm``` or ```yarn```
```shell
    npm install
```

4. After change ```.env``` file to your configs, you can run ```npm run dev``` to run in developer mode or ```npm start``` to production mode


