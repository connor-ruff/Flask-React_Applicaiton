# Flask-React_Applicaiton

	- The app works as an independent python API back end that loads the information from the CSV and defines methods to access this information. 
	- The flask app itself has just one route, /foods/, which receives post requests from a separately-developed React application
	- In testing, I first ran the Flask app via:
			cd api
			python api.py
	- Then started up the React app through another terminal:
			cd ui
			npm start
	- Both of these ran on localhost (the React app on port 3000 and the flask api on port 5000)
	- Because of this, the React app currently is hard coded to make requests to: http://localhost:5000/foods/
	- This can be changed in the state definition of ui/src/App.js if needed
