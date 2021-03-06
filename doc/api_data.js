define({ "api": [
  {
    "type": "delete",
    "url": "/maes/{id}",
    "title": "",
    "group": "Maes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Mãe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Mensagem de sucesso ao deletar a mãe</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{ \n   message: \"Mãe removida com sucesso!\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "DeleteMaesId"
  },
  {
    "type": "get",
    "url": "/maes",
    "title": "",
    "group": "Maes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Lista de Maes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{  {\n   \"nome\": \"Juliana Thamires dos Santos Martins Rangel Ribeiro\",\n    \"email\": \"julianathmartins@gmail.com\",\n   \"endereco\": \"Rua Jose Maria Lisboa\",\n    \"dataNascimento\": \"1987-07-02T03:00:00.000Z\",\n    \"estadoCivil\": \"Casada\",\n    \"telefone\": 989812920,\n    \"habitos\": \"vegetariana\",\n    \"disponivel\": true,\n    \"filhos\": [\n        {\n            \"nome\": \"Gael\",\n            \"idade\": \"2 anos e 4 meses\"\n   \n               }\n            }]\n\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "GetMaes"
  },
  {
    "type": "get",
    "url": "/maes/{disponibilidade}",
    "title": "",
    "group": "Maes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disponibilidade",
            "description": "<p>Disponibilidade da Mãe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Lista de Maes Disponiveis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{  {\n   \"nome\": \"Juliana Thamires dos Santos Martins Rangel Ribeiro\",\n    \"email\": \"julianathmartins@gmail.com\",\n   \"endereco\": \"Rua Jose Maria Lisboa\",\n    \"dataNascimento\": \"1987-07-02T03:00:00.000Z\",\n    \"estadoCivil\": \"Casada\",\n    \"telefone\": 989812920,\n    \"habitos\": \"vegetariana\",\n    \"disponivel\": true,\n    \"filhos\": [\n        {\n            \"nome\": \"Gael\",\n            \"idade\": \"2 anos e 4 meses\"\n   \n               }\n            }]\n\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "GetMaesDisponibilidade"
  },
  {
    "type": "get",
    "url": "/maes/{nome}",
    "title": "",
    "group": "Maes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da mãe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>Mãe especifica por nome</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{  {\n   \"nome\": \"Juliana Thamires dos Santos Martins Rangel Ribeiro\",\n    \"email\": \"julianathmartins@gmail.com\",\n   \"endereco\": \"Rua Jose Maria Lisboa\",\n    \"dataNascimento\": \"1987-07-02T03:00:00.000Z\",\n    \"estadoCivil\": \"Casada\",\n    \"telefone\": 989812920,\n    \"habitos\": \"vegetariana\",\n    \"disponivel\": true,\n    \"filhos\": [\n        {\n            \"nome\": \"Gael\",\n            \"idade\": \"2 anos e 4 meses\"\n   \n               }\n            }]\n\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "GetMaesNome"
  },
  {
    "type": "post",
    "url": "/maes/{mae}",
    "title": "",
    "group": "Maes",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endere",
            "description": "<p>ço Endereço da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data Nascimento da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado Civil da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "habitos",
            "description": "<p>Habitos da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "disponivel",
            "description": "<p>Diponibilidade da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "filhos",
            "description": "<p>filhos da Mãe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>mensagem de sucesso ao incluir uma mãe</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 201 Created\n\n  { \n     status: true, \n     message: ' Mãe incluida com sucesso' \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "PostMaesMae"
  },
  {
    "type": "put",
    "url": "/maes/{filhos}",
    "title": "",
    "group": "Maes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filhos",
            "description": "<p>Filhos da Mãe</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endere",
            "description": "<p>ço Endereço da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data Nascimento da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado Civil da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "habitos",
            "description": "<p>Habitos da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "disponivel",
            "description": "<p>Diponibilidade da Mãe</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "filhos",
            "description": "<p>filhos da Mãe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "maes",
            "description": "<p>mensagem de sucesso ao incluir filhos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 201 Created\n\n  { \n     status: true, \n     message: ' Filhos atualizados com sucesso' \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/maesRoute.js",
    "groupTitle": "Maes",
    "name": "PutMaesFilhos"
  }
] });
