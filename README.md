# TailorRestaurants
Tailor-Hub assignment Built with ```NextJS & ReactJS ```, styled with ```tailwind-css```,  and deployed in ```Vercel```.

## How it looks

🔗 [Live Demo]()


## 1- Download

```sh
git clone 

cd tailor-rest

place .env file with all environments variables required at root folder
```

## 2- Usage with CLI
```sh
npm run dev 
```
- [Open localhost:3000/](http://localhost:3000/)

### Client
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/" | Home page with SignUp link.
GET | "/restaurants" | Restaurant list page.
GET | "/restaurants/[id]" | Page with restaurant details.
GET | "/sign-in" | Login Page
GET | "/sign-up" | Signup Page

### API
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/api/restaurants" | List of all restaurants.
POST | "/api/restaurants" | Creates a restaurant.
GET | "/api/restaaurants/:id" | Retrieve details of a restaurant based on his id.
DELETE | "/api/delete/:id" | Deletes a restaurant based on his id.

## Author

**Adrian Martin**

* Website:  https://admartinbarcelo.netlify.app/
* LinkedIn: [@admartinbarcelo](https://www.linkedin.com/in/admartinbarcelo/)
