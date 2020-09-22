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
| POST   | /api/items/user/:id| Yes        | Add item by user id                    |
| PUT    | /api/items/:id     | Yes        | Edit item by item id                   |
| DELETE | /api/items/:id     | Yes        | Deletes a specific item by id          |

