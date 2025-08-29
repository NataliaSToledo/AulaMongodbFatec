// Qual comando para criar o banco
//use("Escola");

//qual o comando para coleção
//db.createCollection ("Alunos");

//inserir registro (documento)
//db.Alunos.insertOne({ nome:"Ricardo", idade: 30, endereco: " x " });

// //db.Alunos.insertMany([
//     {nome:"Maria", idade: 42, endereco:"A"},
//     {nome:"Isaac", idade: 30, endereco:"B"},
//     {nome:"Angelica", idade: 22, endereco:"C"},
//     {nome:"Angelica", idade: 348, endereco:"C", email: "ang@x.com"},
// ]);

// exibir documentos (Registro)
//console.log(db.Alunos.find({}));

//fazer um filtro (no sql - select * from tabela where coluna)
//console.log(db.Alunos.find({nome: 'Ricardo'} ) );

//fazer um filtro (no sql - select nome idade from alunos where nome: Ricardo) qdo coloco id 0 não tras a informação, e 1 tras a informação
//console.log(db.Alunos.find({ nome: 'Ricardo'}, { _id:0, nome:1, idade:1} ) );

//contar qto registros tem
//console.log(db.Alunos.find({ nome: 'Ricardo'}, { _id:0, nome:1, idade:1} ) );

// delete documentos
console.log( db.Alunos.countDocuments({}));
console.log(db.Alunos.deleteOne({nome:"Ricardo"}));
console.log( db.Alunos.countDocuments({}));
console.log( db.Alunos.find({}));
