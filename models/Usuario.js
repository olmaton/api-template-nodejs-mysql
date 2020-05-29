const connection = require('./ConnectionDb')
const registrarUsuario = async()=>{
    let retorno = {status:false,message:"Sin respuesta."};
    try{
        await connection.query("START TRANSACTION");
        const [rows_] = await connection.query("insert into perfil(descripcion) values ('Administrador General');");
        //console.log(rows_);
        console.log(`última id perfil: ${rows_.insertId}`);

        const [rows_2] = await connection.query("insert into persona(nombres,apellidos) values ('Olmaton','Dev');");
        //console.log(rows_2);
        console.log(`última id persona: ${rows_2.insertId}`);

        const [rows] = await connection.query("insert into usuario (username,password,id_perfil,id_persona) values ('admin','admin',1,1);");
        //console.log(rows_2);
        console.log(`última id usuario: ${rows.insertId}`);  

        retorno ={status:true,"data": {"id":rows.insertId}};

        await connection.query("COMMIT");
        retorno.message = "Ok."
    }catch(e){ 
        retorno.message = "Error de servidor."
        console.log(`registrarUsuario: ${e.message}`);
        await connection.query("ROLLBACK");
    }
    
    return retorno;
}

module.exports = {
    registrarUsuario
}