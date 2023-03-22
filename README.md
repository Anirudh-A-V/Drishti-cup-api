# Drishti-cup-api

An API that tracks the games and the name and phone number of the people playing each game. Database used is MongoDB

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

## Endpoints

| HTTP Method | Endpoint          | Description                           |
|-------------|-------------------|---------------------------------------|
| GET         | /scoreboard        | Retrieves all scoreboards.            |
| GET         | /scoreboard/:id    | Retrieves a specific scoreboard by ID.|
| POST        | /scoreboard        | Creates a new scoreboard.             |
| PATCH       | /scoreboard/:id    | Updates a specific scoreboard by ID.  |
| DELETE      | /scoreboard/:id    | Deletes a specific scoreboard by ID.  |

### HTTP GET `/scoreboard`

Retrieves all scoreboards.

### HTTP GET `/scoreboard/:id`

Retrieves a specific scoreboard by ID.

### HTTP POST `/scoreboard`

Creates a new scoreboard.

#### Request Body

| Field   | Data Type | Required | Description             |
|---------|-----------|----------|-------------------------|
| game    | string    | yes      | The name of the game.    |
| person  | string    | yes      | The name of the player.  |

#### Response

| Field   | Data Type | Description                               |
|---------|-----------|-------------------------------------------|
| id      | string    | The ID of the created scoreboard.         |
| game    | string    | The name of the game.                      |
| person  | string    | The name of the player.                    |

### HTTP PATCH `/scoreboard/:id`

Updates a specific scoreboard by ID.

##### Request Body

| Field   | Data Type | Required | Description             |
|---------|-----------|----------|-------------------------|
| game    | string    | no       | The updated name of the game.|

#### Response

| Field   | Data Type | Description                               |
|---------|-----------|-------------------------------------------|
| id      | string    | The ID of the updated scoreboard.         |
| game    | string    | The updated name of the game.              |
| person  | string    | The name of the player.                    |

### HTTP DELETE `/scoreboard/:id`

Deletes a specific scoreboard by ID.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
