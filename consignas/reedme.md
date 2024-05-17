***CONSIGNAS:***

1. El sitio debe ser Responsive. Diseñado e implementado como “mobile first” es requisito indispensable. 
    A. Como mínimo se debe soportar celular y escritorio.
    B. El menú debe ser responsive. En la vista de celular debe estar oculto y 
    poder desplegarse o similar.
    C. La tabla es tolerable que no sea responsive.
    D. Se puede usar Flexbox o GRID, o ambos.

2. Se debe utilizar HTML semántica
3. Se debe crear un formulario de contacto con un captcha para comprobar que el usuario es un humano.
4. Se debe incluir un screenshot (captura de pantalla) del sitio web en la raíz del sitio.

***DETALLES DE REQUERIMIENTOS***

El sitio web debe tener como mínimo:

1. tres archivos HTML (3 páginas contando el Home) ***done***
2. una barra o menú de navegación, que permita navegar entre las páginas del sitio ***done***
3. una lista ordenada o desordenada (diferente a la de navegación) ***done***
4. una tabla ***done***
5. un formulario de contacto ***done***
6. una imágen ***done***
7. validación por Javascript del formulario con un captcha

*OPCIONALES*

1. Los datos a introducir en el captcha en Javascript se generan al azar como texto o como imágenes
2. Modo Oscuro / Modo Claro, debe existir la posibilidad de cambiar los colores del sitio para ver con distinto color de fondo/letra.

***CONSIDERACIONES IMPORTANTES***

1. Identidad visual unificada: Al navegar  el sitio web el usuario debe percibir que siempre se encuentra en el mismo sitio. Utilizar una misma línea gráfica, en general mismo header, etc.

2. Tamaño del sitio total comprimido menor a 5Mb: por restricciones de conectividad y de Moodle el sitio debe ser lo más liviano posible, esto se logra usando imágenes que no sean demasiado pesadas y no subiendo videos.

3. No está permitido usar:
    A. Bootstrap, Tailwind u otro framework responsive
    B. Frameworks o librerias JS.

4. *VALIDACION JAVASCRIPT DEL FORMULARIO:* El formulario debe tener un campo tipo captcha para comprobar que el usuario es un humano. Para esto la página debe mostrar un texto o número (o algo similar) y pedir introducirlo en el formulario. En caso que no coincida con el valor mostrado por pantalla se debe rechazar mostrando un mensaje que no existe coincidencia.
    A. El formulario no debe enviarse a ningún lugar
    B. El resultado del captcha *(correcto/incorrecto)* debe verse en el sitio web *(no usar alert)*
    C. *NO* es usar el captcha de Google o Recaptcha, es simularlo de una forma sencilla.

