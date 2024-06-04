

/* Acessa o Banco de Dados e Seleciona produtos acima de 100 reais*/
use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$gt:700}});

/* Acessa o Banco de Dados e Seleciona produtos abaixo de 450 reais*/
use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$lt:450}});

/* Acessa o Banco de Dados e Seleciona produtos maior ou igual a 500 reais e menor ou igual a 950 reais*/
use('BD3-NoSQL-Produtos');
db['bd3-nosql-atv7'].find({valor:{$gte:500, $lte:950}});