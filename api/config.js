const APIServerPort = 4200;

const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P@ssword1',
    database: 'gvc_db',
    insecureAuth: true 
};

module.exports = {
    database,
    APIServerPort
}