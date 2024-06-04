const database = 'BD3-NoSQL-Produtos';

/* Acessa o Banco de Dados*/
use(database);

/* Insere um Documento de Dados de Produtos na Collection */
db['bd3-nosql-atv7'].insertMany(
  [
    {
      "cod_Produto":1,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":2,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":3,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":4,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":5,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":6,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":7,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":8,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":9,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
    {
      "cod_Produto":10,
      "nome_Produto": "Produto Capilar",
      "desc_Produto": "Prevenção de Queda Capilonica",
      "valor":10.50,
    },
  ]
);