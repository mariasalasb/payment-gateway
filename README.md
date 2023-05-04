# FE de PDT para TAD

Proyecto creado con [React App](https://github.com/facebook/create-react-app).

## Cómo ejecutar

Clonar el proyecto 

En una terminal, pararse sobre la carpeta del proyecto y ejecutar

### `npm install`

y luego

### `npm start`

De no abrirse automaticamente en el navegador, acceder a http://localhost:3000

## Funcionamiento 

### Pruebas

En esta versión se puede visualizar el componente de confirmación del pago sin completar los formularios de tarjeta de crédito/homebanking, haciendo click en el botón confirmar/pagar se puede avanzar.

### Edición de datos

En su primer versión los componentes toman los datos del trámite de intent.js.

Algunas pruebas interesantes a ejecutar son:

* Cambiar a 'false' el procedure.price.amount.taxInclude para visualizar en la ruta */* el monto IVA y su sumatoria con el precio del trámite.


## Próximas mejoras 

* Bloquear el acceso a métodos de pago una vez el estado *confirmed* pase a *display:block* con un mensaje que indique que el pago ya fue realizado.

*  Validar que formularios de pago están completos antes de permitir confirmar.

*  Componente Form que reciba {item} para unificar homebankingform y creditcardform.

* Mejorar el componente SecondContainer/PaymentMethods para que haga el map correctamente según la cantidad de medios de pago disponibles.

* Integrar con librería que permita definir valores permitidos según el tipo de input  y campos obligatorios.

* Integrar con firebase y tomar los datos de ahí y no de intent.js.

* Impacto en intent.js/firebase al editar datos personales.

* Integración con canales de pago en ambiente de sandbox.

## Dependencias utilizadas

Navegacion [React-router-dom](https://reactrouter.com/web/guides/quick-start).