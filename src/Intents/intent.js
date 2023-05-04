export const intent=[
    {
        generateToken: "true",
        procedure: {
          identification: "12548",
          name: "Licencia de conducir",
          paymentChannel: [
            "gire",
            "decidir",
            "erecauda"
          ],
          expirationDate: "2021-07-30T09:30:00Z",
          comments: "mariamargarita.com.ar",
          publicBody: {
            identification: "4006",
            taxCondition: "4"
          },
          price: {
            description: "Valor del tramite",
            tax: 0.21,
            amount: {
              currency: "ARS",
              amount: 555,
              taxInclude: 'true'
            }
          },
          isBillable: true
        },
        taxPayer: {
          name: "MARIA MARGARITA",
          surname: "SALAS BARRAGAN",
          businessName: "MARIA SALAS",
          identification: {
            type: "CUIT",
            number: "27958079341"
          },
          address: {
            streetName: "CALIFORNIA",
            streetNumber: "2085",
            floor: "2",
            apartment: "0",
            locality: "BARRACAS",
            province: "Capital Federal",
            postalCode: "1104"
          },
          contacts: {
            email: "maria@gmail.com",
            phone: {
              areaCode: "11",
              number: "55556666"
            }
          },
          taxCondition: "5"
        },
        back_urls: {
          success: "https://www.exito.com",
          failure: "https://www.error.com",
          pending: "https://www.pendiente.com"
        },
        context: "aplicacion"
      }
]