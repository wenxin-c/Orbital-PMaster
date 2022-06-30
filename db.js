const Pool = require("pg").Pool;

const devConfig = {
    user:"postgres",
    password:"000825",
    host:"localhost",
    database:"orbital",
    port:5432
};

const proConfig = {
    connectionString:process.env.DATABASE_URL //heroku addons

}
const pool = new Pool(
    process.env.NODE_ENV === "production"? proConfig:devConfig
);

module.exports=pool;