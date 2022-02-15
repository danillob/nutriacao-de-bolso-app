require('dotenv').config();
  
module.exports = {
    dialect: 'postgres',
    host: 'ec2-3-91-128-147.compute-1.amazonaws.com',
    username: 'wvecavluwpdvqc',
    password: '5562b4625fbca0d044b389fefc865d00d3aa89fe04c9c2d73195ac79e5efd4ba',
    database: 'def9p2drcrdtn0',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false,
    storage: './__tests__/database.sqlite',
    define: {
        timestamps: true,
        underscored: true
    }
};
 
