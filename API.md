#   GENERAL
    use postman or curl for test

# Get calls by company name
    GET localhost:3000/calls?company=%company name%

    REQUIRED PARAMS: company

    RETURN VALUE: array calls
    STATUS: 200
    BODY EXAMPLE: 
    {
        "calls": [
            {
                "qId": "002",
                "clientName": "ВТБ",
                "recipientNumber": "79458885546",
                "recipientName": "Петр Петров"
            },
            {
                "qId": "004",
                "clientName": "ВТБ",
                "recipientNumber": "+78139456534",
                "recipientName": "Семен Семенов"
            }
        ]
    }

    ERROR VALUE:
    STATUS: 400
    BODY:
    {
        "error": "validation error, reason: missing company param"
    }

    ERROR VALUE
    STATUS: 500
    BODY: nothing


# Delete call by qId
    DELETE localhost:3000/calls/:qId

    REQUIRED PARAMS: qId

    RETURN VALUE: nothing
    STATUS: 200

    ERROR VALUE example
    STATUS 400
    BODY EXAMPLE:
    {
        "error": "validation error, reason: delete call by qId error, reason: row with qid fdg not found"
    }

    ERROR VALUE
    STATUS: 500
    BODY: nothing

