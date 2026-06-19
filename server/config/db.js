require("dotenv").config();

const sql = require("mssql");      //Importer la bibliotheque mssql

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
};

const connectDB = async() => {
    try {
        await sql.connect(config);
        console.log("SQL Server connected");
    } catch(err) {
        console.log("Erreur connexion SQL Server", err);
    }
};

module.exports = {connectDB, sql};