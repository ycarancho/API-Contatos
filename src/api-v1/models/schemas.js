
const pessoaSchema = {
    "type": "object",
    "properties": {
        "nome": {
            "type": "string",
            "description": "nome da pessoa"
        },
        "email": {
            "type": "string",
            "description": "email da pessoa"
        },
        "telefone": {
            "type": "string",
            "description": "telefone para contato"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string",
                "description": "tags do usuario"
            }
        }
    },
    "required": [
        "nome",
        "email"
    ],
    "example": {
        "id": 5,
        "nome": "John Doe",
        "email": "johndoe@empresa.com",
        "telefone": "31-9.9999-9999",
        "organizacao": null,
        "tags": [
            "cinema",
            "trabalho"
        ]
    }
}

export default {
    pessoaSchema
}