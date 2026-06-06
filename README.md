RECUPERATORIO TRABAJO PRACTICO 3 - PARTE 2

Cruz Benavidez Rita Melina

TP3 - PARTE 1

Se retoma desde la parte 1 en la cual se planteo la estructura inicial y fundamentos de `React` en Gestión de Proyectos HTML/CSS estático del TP1 utilizando `Vite` como entorno de desarrollo.
La idea principal es que la interfaz muestre siempre el estado actual de los datos sin necesidad de recargar la pagina.

Se realiza un punto de montaje, en index.html se define el contenedor `<div id="root">` donde React va a insertar todo el contenido dinamicamente.Este contenedor es vinculado con el componente `<App />` a traves de `main.jsx` usando `createRoot` y lo envuelve en `StrictMode` para que durante el desarrollo se notifique si algo no esta bien implementado.

`App.jsx` funciona como el componente principal que ensambla la estructura visual. Desde alli se llama a `Header`, `Nav`, `ListaProyectos` y `Footer`.Se separa cada parte en su propio componente para respetar el principio de responsabilidad unica y facilitar el mantenimiento.

`proyectoServices.js` esta implementado como una funcion autoejecutable, lo que significa que el arreglo de proyectos queda encapsulado y no es accesible desde afuera directamente.Solo se puede interactuar con los datos a traves de las funciones que el modulo expone.Cuando `obtenerProyectos` retorna datos, usa el `Spread Operator` para devolver una copia y no la referencia original, evitando que el arreglo pueda ser modificado desde afuera del servicio.
En `ListaProyectos.jsx` es donde se conecta la logica del servicio con lo que ve el usuario. Se uso `useState` para mantener el estado de la lista y del formulario.El `.map()` recorre el arreglo y genera una `card` por proyecto de forma automatica. Cuando el usuario elimina un proyecto o busca uno, se llama a la funcion `set` correspondiente y React vuelve a renderizar solo lo que cambio, sin recargar la pagina.El boton de `agregar` queda deshabilitado mientras los campos esten vacios, lo que evita agregar proyectos incompletos.

TP3 - PARTE 2

En esta etapa se utilizo la comunicacion entre componentes a traves de `props` y la simplificacion del codigo aplicando la `desestructuracion` de objetos.

`proyectoServices.js`
Para cumplir con los requerimientos de informacion extendida, se actualizo la estructura de los datos iniciales incorporando la descripcion del proyecto, la lista de recursos (PDF, Drive, GitHub) y la informacion del equipo de trabajo con nombres y roles.Se incorporo la funcion `obtenerProyectoPorId`, que utiliza el metodo `.find()` para recuperar el objeto correspondiente desde el arreglo encapsulado en la funcion autoejecutable.Esto permite que el componente de detalle reciba siempre el proyecto seleccionado.

Se crearon `componentes de presentacion`:
`Proyectocard.jsx`
Este componente funciona como una interfaz reutilizable encargada de representar la informacion resumida de cada proyecto.
Se aplica la desestructuracion de las propiedades (id, titulo, categoria, estado) directamente desde el objeto recibido por props, evitando el acceso repetitivo mediante notacion de punto.
El uso de expresiones con llaves y `operadores ternarios` permite asignar clases CSS condicionales segun el estado del proyecto, garantizando una estilizacion reactiva.
Se implementan eventos personalizados mediante props (`onEliminar`, `onVerdetalle`) , que al activarse notifican al componente padre para que ejecute la logica de actualizacion de estado, siguiendo el flujo de React.

`Detalleproyecto.jsx`
Se encarga de procesar y visualizar la informacion extendida exigida.Recibe por props el objeto proyecto completo y aplica desestructuracion para acceder a los campos: titulo, categoria, estado, descripcion, recursos y equipo.
Se utiliza `.map()` para transformar los arreglos de recursos y equipo en elementos visuales dinamicamente, ya que estos arreglos pueden tener distinta cantidad de elementos segun cada proyecto.
Cada elemento generado por .map() recibe una `key` con su indice como valor para que cuando algo cambie no tenga que volver a presentar toda la lista sino solo el elemento que se modifico.
Recibe la funcion `onVolver` desde `ListaProyectos` y la conecta directamente al boton `Volver`. Cuando el usuario lo toca, se pone `proyectoSeleccionado` en null y retorna al listado.

`ListaProyectos.jsx`
Gestiona el estado local y la comunicacion entre la capa de servicios y los componentes de presentacion.
El formulario se representa con un unico objeto de estado `nuevoProyecto`, incluye los campos simples y tambien los arreglos de recursos y equipo con un elemento vacio inicial cada uno. Se aplico desestructuracion sobre este objeto para acceder a las propiedades de forma directa.
Se implemento `handleChange` que utiliza `propiedades computadas` ([name]: value) para actualizar el estado de forma dinamica. Esto permite que una sola funcion controle todos los campos simples del formulario.

`handleActualizar`:Cuando el usuario escribe en un campo de un recurso o integrante ya existente, esta funcion recorre la lista con `.map()` y cuando llega al elemento que se modifico lo reemplaza por una copia actualizada usando `spread`.Los demas elementos quedan igual.No se toca el estado directamente sino que se genera una lista nueva con el cambio aplicado.

`handleAgregarRI`: Cuando el usuario toca `Agregar Recurso` o `Agregar Integrante`, esta funcion agarra la lista actual y le suma un objeto vacio al final usando spread. El resultado es una lista nueva con una fila mas para completar.La misma funcion sirve para recursos y para equipo, porque recibe el nombre de la lista como parametro y con eso accede a nuevoProyecto[tipo].

El `.map()` llama al componente `<Proyectocard />` pasandole el objeto proyecto y las funciones necesarias como props.`Proyectocard` se encarga unicamente de mostrar la informacion y los botones.Cuando el usuario toca `Eliminar` o `Ver Detalle`, el hijo llama a la funcion que recibio por props con el id correspondiente, y es el padre quien ejecuta la logica y actualiza su propio estado.
Cuando el usuario selecciona `Ver Detalle`, se llama a `obtenerProyectoPorId` con el id del proyecto, se guarda el objeto completo en `proyectoSeleccionado` y automaticamente aparece la vista de detalle en lugar del listado.

El boton `Agregar Proyecto` esta bloqueado hasta que el usuario complete titulo, categoria, estado, cargue al menos un recurso con URL y tenga al menos un integrante con nombre y rol. Esto se verifica con `.some()` que revisa si algun elemento cumple la condicion.Cuando se guarda, `.filter()` no envia las filas que quedaron vacias al servicio.