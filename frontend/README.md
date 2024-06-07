#**VeggieLink**  
VeggieLink is an e-commerce platform for buying fresh fruits and vegetables online.

###**Features**  
Browse through a variety of fruits and vegetables.  
Add items to cart and proceed to checkout.  
Add items to favorites for quick access.  
View order history.  
Rate and review products.  

###**Technologies Used**  
React: Frontend library for building user interfaces.  
React Router: For routing within the application.  
Tailwind CSS: Utility-first CSS framework for styling.  
axios: Promise-based HTTP client for making requests to the server.  
Node.js: JavaScript runtime environment.  
Express: Web application framework for Node.js for building the server-side logic.  
MongoDB: NoSQL database for storing product details, user data, and orders.  
jsonwebtoken: For user authentication and authorization.  
bcrypt: For hashing user passwords.  

###**Getting Started**  
Prerequisites  
Node.js installed on your machine  
MongoDB Atlas account (or local MongoDB server)  

###**Installation**  

###Clone the repository:   

git clone https://github.com/yourusername/VeggieLink.git  

####Navigate to the project directory:  

cd VeggieLink  

####Install dependencies:  

npm install  
Set up environment variables:  

####Create a .env file in the root directory and add the following variables:  

PORT=5000  
MONGODB_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret 

####Start the server:  

npm run dev  
Navigate to http://localhost:5000 in your browser.  
