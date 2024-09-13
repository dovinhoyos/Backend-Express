const Backend = require('../src/config/server');
 const pool = require('../src/config/database');


 Backend.listen(Backend.get("port"), ()=>{
    console.log('Puerto se esta ejecutando en:', Backend.get("port"));
    
 })