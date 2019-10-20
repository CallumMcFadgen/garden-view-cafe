# garden-view-cafe

WEB601 Project Milestone Two

This project is a web app designed for a fictional local cafe, "the Garden View Cafe" The project can be cloned from this repo and run on a local device, Git may need to be installed on that device to facilitate cloning and running.  Node.js will need to be installed and I would recomend using the VS Code text editor to view the code and run the Node.js commands.  

In order to run this application a database must be created on the local device in MySQL.  Please load the included database SQL file
into MySQL community server and once it has loaded use ctrl+a to select everything and then run using the lightning symbol in the top tool bar.
This will create the database and give it test data.

Open the project folder using VS Code and connect the database using the mysql extension

After a connection has been established check in the file garden-view-cafe\api\config
and ensure that the details there match the details of the local devices MySQL connection.

Now open two terminals in VS Code
In the first type 'npm start' - This will start the front end server and the application will open in a browser on the local device.
In the second terminal type 'npm test' to start the backend server that will give the application access to the database.

Please dont hesitate to get in contact with me if you have any issues

Callum





