
module.exports = {
    host : 'localhost',
    port : '3306',
    username : 'root',
    password : 'root',
    database : 'sunset',
    dialect : 'mysql',
    pool : {
        min : 1,
        max : 20,
        idle : 10000
    }
}

// module.exports = {
//     host : '192.168.0.148',
//     port : '3306',
//     username : 'root',
//     password : '',
//     database : 'db_manage',
//     dialect : 'mysql',
//     pool : {
//         min : 1,
//         max : 20,
//         idle : 10000
//     }
// }

// module.exports = {
//     host : 'localhost',
//     port : '3306',
//     username : 'root',
//     password : '',
//     database : 'db_manage',
//     dialect : 'mysql',
//     pool : {
//         min : 1,
//         max : 20,
//         idle : 10000
//     }
// }