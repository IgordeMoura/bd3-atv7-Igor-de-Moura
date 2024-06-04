const database = 'BD3-NoSQL-Produtos';

/* Acessa o Banco de Dados*/
use(database);

/* Insere um Documento de Dados de Produtos na Collection */
db['bd3-nosql-atv7'].insertMany(
  [
    {
      "cod_Produto": 1,
      "nome_Produto": "Notebook Gamer",
      "desc_Produto": "Alto desempenho",
      "valor": 181.66
    },
    {
      "cod_Produto": 2,
      "nome_Produto": "Smartphone",
      "desc_Produto": "Celular",
      "valor": 800.35
    },
    {
      "cod_Produto": 3,
      "nome_Produto": "Fone de Ouvido Bluetooth",
      "desc_Produto": "Som de qualidade",
      "valor": 718.78
    },
    {
      "cod_Produto": 4,
      "nome_Produto": "Cafeteira Elétrica",
      "desc_Produto": "Café expresso",
      "valor": 733.48
    },
    {
      "cod_Produto": 5,
      "nome_Produto": "Bicicleta",
      "desc_Produto": "Atividades ao ar livre",
      "valor": 900.3
    },
    {
      "cod_Produto": 6,
      "nome_Produto": "Geladeira",
      "desc_Produto": "Refrigeração eficiente",
      "valor": 382.11
    },
    {
      "cod_Produto": 7,
      "nome_Produto": "Micro-ondas",
      "desc_Produto": "Esquente alimentos",
      "valor": 490.32
    },
    {
      "cod_Produto": 8,
      "nome_Produto": "TV 4K",
      "desc_Produto": "Imagem em alta definição",
      "valor": 456.83
    },
    {
      "cod_Produto": 9,
      "nome_Produto": "Videogame",
      "desc_Produto": "Jogo imersivo",
      "valor": 269.8
    },
    {
      "cod_Produto": 10,
      "nome_Produto": "Relógio",
      "desc_Produto": "Horário",
      "valor": 637.9
    }
  ]  
);