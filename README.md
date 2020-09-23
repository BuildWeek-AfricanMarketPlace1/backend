# Back-End

API hosted at: https://african-market712.herokuapp.com/

API - These are the endpoints and required information

### User Endpoints 

| Method | Endpoint           | Need Auth? | Description                            |
| ------ | ------------------ | ---------- | -------------------------------------- |
| POST   | /api/auth/register | No         | Allows users to register an account    |
| POST   | /api/auth/login    | No         | Allows user to login to their account  |

### Items Endpoints

| Method | Endpoint           | Need Auth? | Description                            |
| ------ | ------------------ | ---------- | -------------------------------------- |
| GET    | /api/items/user/:id| Yes        | Get items by user id                   |
| GET    | /api/items         | Yes        | Get all items                          |
| GET    | /api/items/:id     | Yes        | Get item by id                         |
| POST   | /api/items/user/:id| Yes        | Add item by user id                    |
| PUT    | /api/items/:id     | Yes        | Edit item by item id                   |
| DELETE | /api/items/:id     | Yes        | Deletes a specific item by id          |

### Locations Endpoints

| Method | Endpoint           | Need Auth? | Description                            |
| ------ | ------------------ | ---------- | -------------------------------------- |
| GET    | /api/locations     | Yes        | Get all locations                      |
| GET    | /api/locations/:id | Yes        | Get location by id                     |
| POST   | /api/locations     | Yes        | Add location                           |
| PUT    | /api/locations/:id | Yes        | Edit location by id                    |
| DELETE | /api/locations/:id | Yes        | Deletes a specific location by id      |

### Categories Endpoints

| Method | Endpoint           | Need Auth? | Description                            |
| ------ | ------------------ | ---------- | -------------------------------------- |
| GET    | /api/categories    | Yes        | Get all categories                     |
| GET    | /api/categories/:id| Yes        | Get category by id                     |
| POST   | /api/categories    | Yes        | Add category                           |
| PUT    | /api/categories/:id| Yes        | Edit category by id                    |
| DELETE | /api/categories/:id| Yes        | Deletes a specific category by id      |