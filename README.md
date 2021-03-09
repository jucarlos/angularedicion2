

## Ejercicio de Angular - Edición 2

### Comandos de git.

( para ver como están los archivos)

``git status`` 

( añadir al escenario de git )

```git add .```  

( debería verse todo verde)

```git status ```

( para sacar la foto )

```git commit -m "Terminadas las rutas de la aplicación"``` 


( pues los logs)

```git log ```


Para recuperar del repositorio local algo borrado.

`git checkout -- .`


# TAREAS PARA EL MARTES.
- Repaso.

        ng new ejercicio
        definimos nuestra estructura.
        crearmos los componentes
            ng g c pages/directivas
            ng g c pages/temario
            ng g c pages/home --skip-test 
    
        Definimos las rutas de aplicación.

- Descargar el proyecto de git ( 2 formas )
    para clone: git clone [url] nombrecarpeta
- Instalar boostrap de otra forma.
- Instalar fontawesome
- Instalar sweetAlert
- Creado un servicio para obtener los temas de un sitio local
    1. Creado un servicio. ng g s services/temario
    2. En el componente que utilizará el servicio le hemos inyectado.
    3. El servicio tiene un método que devuelve datos de un sitio local.


- Crear un componente reutilizable

- Pipes
    1. Vamos a crear un componente página
    ng g c pages/pipes --skip-tests
    2. Actualizar el fichero de rutas de la aplicación.

    ¿Qué es esto de pipes?. Sirve para cambiar la forma de presentación de los datos. NO CAMBIA LOS DATOS.

    3. Haremos varios ejemplos
    4. Cambiar el idioma de la aplicación.
    5. Pipe propio.

    ng g p pipes/alreves
















