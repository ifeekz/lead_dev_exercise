# SimpleBks

## Project Setup
* Open a terminal
* Clone the repository with this command `git clone https://github.com/ifeekz/lead_dev_exercise.git`
* Then change to the project directory `cd lead_dev_exercise`

### Backend
* Then change directory to `cd backend`
* Copy the `.env.example` file with this command:
    * Windows: `copy .env.example .env`
    * Linux/Mac: `cp .env.example .env`
* Edit the `.env` file to your MongoDb credential where you see YOUR_DB_USERNAME, YOUR_DB_PASSWORD, YOUR_DB_NAME for the DB username, password and database name respectively.
* Run `npm start` to start the backend server
* Note the backend url displayed on the terminal

### Frontend
* Open another terminal
* Then change directory to `cd path/to/lead_dev_exercise/frontend`
* Run `npm run dev` or `npm run start` to start the frontend server
* Launch the frontend url displayed on your terminal on any browser

### Mobile App (Flutter)
* Open a terminal
* Then change directory to `cd path/to/lead_dev_exercise/my_olist_orders`
* Run `flutter run lib/main.dart` or `npm run start` to run the mobile app