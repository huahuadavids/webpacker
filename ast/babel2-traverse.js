let data = {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "sum",
            "range": [
              4,
              7
            ]
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "range": [
                  10,
                  11
                ]
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "range": [
                  14,
                  15
                ]
              },
              "range": [
                10,
                15
              ]
            },
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "range": [
                18,
                19
              ]
            },
            "range": [
              10,
              19
            ]
          },
          "range": [
            4,
            19
          ]
        }
      ],
      "kind": "let",
      "range": [
        0,
        19
      ]
    }
  ],
  "sourceType": "module",
  "range": [
    0,
    19
  ]
}