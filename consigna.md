***Consigna***

Para la segunda entrega, se debe continuar el trabajo de la primera etapa.  El objetivo es agregar nueva funcionalidad detallada a continuación a una tabla dinámica. 
NOTA: En caso que la tabla ya existente no tenga sentido una carga dinámica de información se puede agregar un segunda tabla que tenga los requerimientos descritos a continuación.

Detalle de Requerimientos
Tabla dinámica por API REST
La tabla dinámica que exista en sus páginas tiene que estar sincronizada en todo momento con la información almacenada en un servicio web (API Rest). 

Agregar en su página el código necesario para crear la tabla y llenarla con la información que obtienen del servicio. Cada “fila de la tabla” estará entonces asociado a un “item” o “elemento” del servicio web consultado. A su vez se debe agregar un formulario para crear información, dicha tabla debe mantenerse actualizada cuando el usuario agregue/edite/borre información, además de mantener actualizados los datos en el servicio..

El servicio REST deben generarlo utilizando https://mockapi.io/, creando la API con la colección de datos que corresponden a cada trabajo. En la unidad de 3 de Moodle, está disponible el video donde se explica cómo crear un servicio en mockApi.




**Requerimientos Funcionales**

La tabla se debe cargar automáticamente al mostrarse en la página: Al entrar por el nav a la página que tiene la tabla, automáticamente debe mostrarse la tabla cargada sin que el usuario tenga que hacer ningún click adicional, con los mismos datos que inicialmente existan en el servicio Rest.

La información se carga a través de un formulario, que se debe implementar. Estos datos se deben agregar usando la API Rest. Es decir los datos que se agregan mediante el formulario deben actualizar el servicio y la tabla.

Permitir eliminar filas de la tabla de a una. Cada fila tiene que tener una forma de indicarle “Borrar” que elimine la fila que uno desea borrar y también se debe eliminar el elemento correspondiente del servicio.	
Permitir editar filas de la tabla individualmente de alguna forma. Cada fila tiene que tener una forma de indicarle “Editar” que permita editar los valores de esa fila y los actualice en el servicio.

Limitar tamaño de imágenes y peso del sitio. La carpeta completa del sitio no puede superar los 5 Mb.
