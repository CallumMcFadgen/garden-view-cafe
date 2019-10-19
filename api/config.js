// Set the port for the development server
const APIServerPort = 4200;


// Set the access details for the development server (these details may need to be changed to 
// match the local devices MySQL community server configuration, such as username and password)
const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P@ssword1',
    database: 'gvc_db',
    insecureAuth: true 
};


// Export modules
module.exports = {
    database,
    APIServerPort
}