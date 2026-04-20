# 🍽️ Recipe Management System

A full-stack web application that allows users to search, filter, and explore recipes using an external API. It includes personalization based on user preferences and allergies, along with a review and rating system.

## 🚀 Features
- User Registration & Login  
- Recipe Search using API  
- Filtering (diet, cuisine, meal type, cooking time)  
- Personalization (preferences & allergies)  
- Review & Rating system  

## 🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express.js  
Database: MySQL  

## 📂 Project Structure
recipe-management-system/
├── backend/
├── frontend/
├── database/

## ⚙️ Setup
1. Clone repository  
git clone https://github.com/Jaydip-2005/Hyscalar-Assignment

2. Install dependencies  
cd backend  
npm install  

3. Setup MySQL database (import schema.sql)  

4. Add API key in backend/controllers/recipeController.js  

5. Run server  
node server.js  

6. Open frontend/index.html using Live Server  

## 🔗 API Endpoints
POST /api/users/register  
POST /api/users/login  
GET /api/recipes  
POST /api/reviews  
GET /api/reviews/:recipeId 

## 👨‍💻 Author
Jaydip Mishra
