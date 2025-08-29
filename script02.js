use("Escola");

//criar outra coleção com documento

// db.Produtos.insertMany([
//     {_id: 1, produto: "celular", preco: 1999, 
//         operadora: { tipo01:"vivo", tipo02: "claro", tipo03: "tim"}, qtda:30},

//     {_id: 2, produto: "roupa", preco: 300, 
//         operadora: { tipo01:"esporte", tipo02: "social", tipo03: "x"}, qtda:30},

//     {_id: 3, produto: "TV", preco: 150, 
//         operadora: { tipo01:"plasma", tipo02: "tubo", tipo03: "smart"}, qtda:30}
// ])

// tras tudo que tem operadora vivo e tudo mais que escrevi dentro da coleção
//console.log( db.Produtos.find({ "operadora.tipo01": "vivo"}}));

//tras apenas operadora tipo01 , e exclui as operadores tipo02 e tipo03
//logica de programação (comparação) ==
//console.log( db.Produtos.find({ "operadora.tipo01": "vivo"}, 
//{"operadora.tipo02" : 0, "operadora.tipo03" : 0}));

//OPERADORS DE CONSULTA
//Comparação
  // -> $eq = Igual a ; ==
  // -> $gt = Maior que; >
  // -> $gte = Maior ou igual; >=
  // -> $in = Esta contido em uma matriz (lista)
  // -> $lt = Menor que; <
  // -> $lte = Menor ou igual que; <=
  // -> $ne = Correponde todos os valores que não são iguais a valor de procura
  // -> $nin = valor não é correspondido dentro da matriz 

  //console.log(db.Produtos.find( {"operadora.tipo01": {$eq: "vivo"} } ) );

  //Busca de produtos maiores que tenham preco maior que 150
//console.log(db.Produtos.find( {"preco": { $gt: 150} }, { _id:1, produto:1} ) );

    //busca qtos registros de produtos tem que sejam maiores que 150
//console.log(db.Produtos.find( {"preco": { $gt: 150} },{ _id:1, produto:1} ).count() );

// console.log(db.Produtos.find( {"preco": { $gte: 150} },{ _id:1, produto:1} ) );

// console.log(db.Produtos.find({
//     preco: { $in: [ 100, 150, 300]}

// }))

// console.log(db.Produtos.find({
//     preco: { $lt: 151} }))

console.log(db.Produtos.find({
    preco: { $ne: 150} }))

