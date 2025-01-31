# Tasty Ten

## Project Description

Tasty Ten is a React app that fetches data from an external API to display a list of 10 random favorite recipes. It combines front-end React functionality with backend API calls, making it a full-stack application in a simple project. With just one click, users can instantly get a curated list of recipes, making it perfect for busy consumers looking for quick meal ideas.

## API Reference

#### Get all items

```http
  GET /api/handleData
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

The API will feature the following endpoints:

| HTTP Method | Path            | Request Body (JSON) | Response Body (JSON)                 | Status Code | Result                       |
| ----------- | --------------- | ------------------- | ------------------------------------ | ----------- | ---------------------------- |
| GET         | /api/handleData |                     | An array of up to ten recipe objects | 200         | Gets up to 10 recipe objects |

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [Recipe API](https://www.api-ninjas.com/api/recipe)

## Appendix

Any additional information goes here

## Authors

- [@lizwade](https://github.com/lizwade)
- [@sergio](https://github.com/skudz96)
- [@shanti](https://github.com/codesungrape)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Demo

TBA

## 🚀 Deployment

### Locally (Development Mode)

To start the development server, run:

````sh
npm run dev


## 🛠 Installation

To install and run this project locally, follow these steps:

### 1. Clone the repository
```sh
git clone https://github.com/your-username/your-repo.git



cd my-project
npm install
npm run dev## 🛣️ Roadmap

### 📌 MVP 2

### 🎯 Upcoming Features
- **Favorite Recipes:**
  - Allow users to click on a recipe and add it to their favorites.
  - Create an API route to store favorite recipes in a database (MongoDB or SQL).
  - Develop a backend to handle these interactions securely.

- **Favorites Page:**
  - Build a separate page where users can view their saved recipes.
  - Fetch and render relevant data dynamically from the database.

- **Full CRUD Functionality:**
  - **Update:** Allow users to edit their saved recipes.
  - **Delete:** Enable users to remove recipes from their favorites.
  - Ensure backend API routes support these operations securely.

- **Backend Enhancements:**
  - Optimize database queries for performance.
  - Implement proper error handling and validation.
  - Secure API endpoints to prevent unauthorized access.

### 🔜 Future Enhancements
- Implement authentication (e.g., login/logout) for personalized user data.
- Add search and filter functionality for saved recipes.
- Improve UI/UX with animations and better responsiveness.
````
