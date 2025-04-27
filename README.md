# Pfo2_PortafolioPersonal_ChoqueSabrina_ComisionD-

LinkPages: https://sabrinachoque.github.io/Pfo2_PortafolioPersonal_ChoqueSabrina_ComisionD-/


Funcionalidades:

1. Validación del formulario:
se validara que todos los campos esten completos antes de enviarlos.Si falta algun campo sin completar este mostrara un mensaje de alerta "Faltan campos para completar."

2. Modo Oscuro/Claro:
Se agregó un botón que permite alternar entre los modos claro y oscuro.  
La preferencia del usuario se guarda usando 'localStorage' para mantenerla en futuras visitas.

3. Pop-up de Confirmación de Envío:
Se mostrara un mensaje alerta "Formulario se envio con exito." para confirmar que el formulario fue enviado.

4. Ocultar y/o Mostrar Contenido:
Se agregó un botón que muestra u oculta la sección “Sobre Mí” al hacer clic.  
Se usa una clase CSS '.oculto' para cambiar la visibilidad desde JavaScript.

5. Galería de Imágenes:
Se creó una galería dinámica en la sección de películas favoritas.  
Cada tarjeta se genera automáticamente con JavaScript a partir de un array de objetos.

6. Creación de Contenido Dinámico:
Las tarjetas de películas se crean dinámicamente con JavaScript a partir de un array.  
Esto permite modificar o agregar películas fácilmente sin editar el HTML.

7. Filtros en el Contenido:
Se agregaron botones que permiten filtrar las películas según su categoría (stop-motion o fantasía).  
Al hacer clic, se actualiza la galería mostrando solo las películas de esa categoría.

8. Temporizador o Reloj:
Se agregó un temporizador que muestra el tiempo restante para la entrega del trabajo (5 de mayo).  
Cuando el tiempo se agota, aparece un mensaje informando que el plazo finalizó.

9. Contador de Visitas:
Se cuenta la cantidad de veces que se visitó la página desde el mismo navegador,  
utilizando 'localStorage'. El número aparece en el footer.

10. Animaciones Dinámicas:  
Al hacer clic en las tarjetas de películas, se activa una animación que las hace girar.  
Esta animación fue creada con CSS usando '@keyframe' y se activa con JavaScript.


Mejoras realizadas: 

En esta segunda parte del proyecto realicé varios cambios importantes para mejorar tanto la experiencia visual como la funcionalidad del sitio. Uno de los primeros fue agregar animaciones interactivas a las tarjetas de películas, las cuales giran al hacer clik, lo que le da dinamismo y una experiencia más atractiva para el usuario.

También incorporé un botón para cambiar entre modo claro y oscuro, lo que permite una mejor adaptación a la preferencia visual de cada persona. Esto lo hice guardando la selección en el almacenamiento local del navegador, para que se mantenga entre sesiones.

Además, trabajé en adaptar el diseño del sitio para que se vea correctamente en diferentes dispositivos como computadoras, tablets y celulares. Para lograrlo, usé Flexbox y media queries, reorganizando la estructura del menú y el botón "Cambiar Modo" cuando el ancho de la pantalla se reduce. Así se evita que los elementos se encimen y se mantiene todo visible y ordenado.

Otro punto clave fue la limpieza y organización del código. Reestructuré tanto HTML, CSS como JavaScript, eliminando estilos duplicados y funciones que ya no se usaban. Unifiqué los estilos de los botones en una sola clase llamada '.color-boton', para que todos tengan la misma apariencia y estilo.

También centré los títulos de sección para que se vean más equilibrados visualmente, y mejoré los contrastes de colores para que el contenido sea más legible. Por último, agregué comentarios claros en el código para facilitar la comprensión, pensando tanto en la evaluación del docente como en futuras revisiones personales.





