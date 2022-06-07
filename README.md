# FirstProjectCypress

/// <reference types="Cypress" /> (este comando arriba de cada test), me permite reconocer las palabras claves
* si por ejemplo en un solo archivo .js tengo dos test, es decir dos partes que empiecen con it(), y en uno de ellos pongo por ejemplo it. only(), esto quiere decir que este test solamente será el que se ejecute, y no el otro, es cuando solo quiero o necesito ejecutar un solo test y no ambos;

* Si cuando abro una web, no está haciendo foto en esa página, porque la página está diseñada así o porque hay frames en la web, lo que se hace es usar el comando así, una vez que se ejecuta el comando para abrir la web:
-cy.visit("https://www.webdriveruniversity.com")
- cy.document().should()('have.property', 'charset').and('eq', 'UTF-8') esto es que dentro del html, en la parte superior tengo un atributo que se llama charset, y que tiene el valor = UTF-8, y lo que hace es hacer foco sobre todo esa pantalla de la web


* Si quiero obtener el título de una página web, tengo el comando cy.title().should('include','nombre del título que está en el tag titulo'), y esto es un assert que debería dar true si el título es el correcto (con solo poner una parte del título, va a dar verdadero), pero también podría usar cy.title().should('have.text','nombre del título que está en el tag titulo'), en donde el título si o si tiene que coincidir.


* Si quiero hacer un assert de la url de la web, que estoy utilizando es con el comando cy.url(), y quedaría así cy.url().should('include','nombre de la url o parte del nombre')

* Si quiero ejecutar test usando comando en la consola, y no la UI. Esto se hace de la siguiente manera:
En la consola si veo que se siguen ejecutando test, hago ctrl+c, verificar que en la terminal de visual estudio, en la parte derecha la opción seleccionada sea Bash, y no powersell.
y en la consola hay que escribir el siguiente comando ./node_modules/.bin/cypress run (headless mode)
el comando anterior va ejecutar todos los test que tengamos en la suite, pero sin abrir el browser
y si quiero ejecutar el comando pero en no headless mode (aca se abre un browser por defecto es electron, mientras se corren los test), se hace lo siguiente:
./node_modules/.bin/cypress run --headed (NO headless mode)
y si quier ejecutar el comando anterior, pero ejecutando con el browser de Chrome, se hace lo siguiente:
./node_modules/.bin/cypress run --browser chrome
y si quiero ejecutar a través de comando pero en vez de hacer ejectuar todos los test, puedo hacer correr solo un test individual o una carpeta solamente y eso es através del siguiente comando:
./node_modules/.bin/cypress run --spec cypress/integration/miTests.spec.js 
(se pone el mismo comando y con los dos guiones medios --spec luego se pone la ruta del test que se quiere ejecutar con la barra invertida "/")
y si quisiera ejecutar una carpeta que contiene x test cases, se hace lo siguiente:
./node_modules/.bin/cypress run --spec cypress/integration/*   (se borra el test individual y se deja /*, para que ejecute todos los test que hay dentro de esa carpeta)

