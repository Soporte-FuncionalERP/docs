"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6109],{2706:(a,e,o)=>{o.r(e),o.d(e,{default:()=>n});var r=o(8e3);const s=[(0,r.uE)('<p>En ADempiere un producto es un artículo, recurso o servicio que puede ser producido, vendido o comprado por la empresa. El registro de estos, permite a la empresa dar seguimiento a la entrada y salida de los productos. De igual forma, permite conocer y controlar su cantidad en existencia para proceder a la compra, venta o adquisición de los mismos.</p><p>El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para registrar en ADempiere un producto, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Producto <ul><li>Pestaña Reabastecer</li><li>Pestaña Compras</li><li>Pestaña Precio</li><li>Pestaña Conversión Unidad de Medida</li></ul></li></ul><h2 id="registro-de-producto" tabindex="-1"><a class="header-anchor" href="#registro-de-producto" aria-hidden="true">#</a> Registro de Producto</h2><p>En el menú de ADempiere, ubique y seleccione la carpeta <strong>Gestión de Materiales</strong>, luego seleccione la carpeta <strong>Reglas de Gestión de Materiales</strong> y finalmente seleccione la ventana <strong>Producto</strong>, adjunto imagen para referencia.</p><p><img src="/assets/img/docs/master-data/mad-master-image153.png" alt="Icono Guardar Cambios"></p><p>Imagen 1. Menú de ADempiere</p><p>En esta ventana se registran los datos principales que la empresa requiere conocer de los productos, con la finalidad de ser utilizada al momento de realizar alguna compra / venta con dicho producto. Cada uno de los campos con el símbolo (*) son obligatorios para el registro.</p><p>Podrá visualizar la ventana <strong>Producto</strong>, dónde debe seleccionar el icono <strong>Registro Nuevo</strong>, que se encuentra ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image154.png" alt="Icono Guardar Cambios"></p><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta registrando el producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image155.png" alt="Icono Guardar Cambios"></p><p>Imagen 3. Campo Organización</p><p>Warning</p><p>Para que el producto este disponible para todas las organizaciones, el mismo deberá estar registrado con la organización en (*) de lo contrario el producto solo estará disponible para una sola organización.</p><p>Introduzca en el campo <strong>Código</strong>, el código para el producto que esta registrando, este código es definido por un estándar de códificación establecido en ERPyA para la Codificación Estándar de Productos.</p><p><img src="/assets/img/docs/master-data/mad-master-image156.png" alt="Icono Guardar Cambios"></p><p>Imagen 4. Campo Código</p><p>Introduzca en el campo <strong>Nombre</strong>, el nombre del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image157.png" alt="Icono Guardar Cambios"></p><p>Imagen 5. Campo Nombre</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción correspondiente al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image158.png" alt="Icono Guardar Cambios"></p><p>Imagen 6. Campo Descripción</p><p>Introduzca en el campo <strong>Nota de Documento</strong>, cualquier información adicional que considere necesaria.</p><p><img src="/assets/img/docs/master-data/mad-master-image159.png" alt="Icono Guardar Cambios"></p><p>Imagen 7. Campo Nota de Documento</p><p>Introduzca en el campo <strong>UPC/EAN</strong>, el código de barras correspondiente al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image160.png" alt="Icono Guardar Cambios"></p><p>Imagen 8. Campo UPC/EAN</p><p>Introduzca en el campo <strong>UM Almacenamiento</strong>, la unidad de medida de almacenamiento del producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image161.png" alt="Icono Guardar Cambios"></p><p>Imagen 9. Campo UM Almacenamiento</p><p>Seleccione en el campo <strong>Categoría del Producto</strong>, la categoría a la cual pertenece el producto que esta registrando, la selección de este define el comportamiento del producto que se esta registrando, dicho comportamiento se encuentra explicado en el documento Categorías de Productos elaborado por ERPyA.</p><p><img src="/assets/img/docs/master-data/mad-master-image162.png" alt="Icono Guardar Cambios"></p><p>Imagen 10. Campo Categoría del Producto</p><p>Seleccione en el campo <strong>Grupo de Producto</strong>, el grupo al cual pertenece el producto que esta registrando, la selección de este define el comportamiento del producto que se esta registrando, dicho comportamiento se encuentra explicado en el documento Grupo de Productos elaborado por ERPyA.</p><p><img src="/assets/img/docs/master-data/mad-master-image163.png" alt="Icono Guardar Cambios"></p><p>Imagen 11. Campo Grupo de Producto</p><p>Seleccione en el campo <strong>Clase de Producto</strong>, la clase a la cual pertenece el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image164.png" alt="Icono Guardar Cambios"></p><p>Imagen 12. Campo Clase de Producto</p><p>Seleccione en el campo <strong>Clasificación de Producto</strong>, la clasificación a la cual pertenece el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image165.png" alt="Icono Guardar Cambios"></p><p>Imagen 13. Campo Clasificación de Producto</p><p>Seleccione en el campo <strong>Categoría del Impuesto</strong>, la agrupación de impuestos aplicale al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image166.png" alt="Icono Guardar Cambios"></p><p>Imagen 14. Campo Categoría del Impuesto</p><p>Seleccione en el campo <strong>Tipo de Impuesto</strong>, el tipo de impuesto aplicable al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image167.png" alt="Icono Guardar Cambios"></p><p>Imagen 15. Campo Tipo de Impuesto</p><p>Introduzca en el campo <strong>Grupo 1</strong>, el grupo al cual pertenece el producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image168.png" alt="Icono Guardar Cambios"></p><p>Imagen 16. Campo Grupo 1</p><p>Introduzca en el campo <strong>Grupo 2</strong>, el grupo adicional al cual pertenece el producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image169.png" alt="Icono Guardar Cambios"></p><p>Imagen 17. Campo Grupo 2</p><p>Seleccione en el campo <strong>Reconocimiento de Ingreso</strong>, como serán reconocidos los ingresos para el producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image170.png" alt="Icono Guardar Cambios"></p><p>Imagen 18. Campo Reconocimiento de Ingreso</p><p>Introduzca en el campo <strong>Línea de Producto</strong>, la clasificación para agrupar el producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image171.png" alt="Icono Guardar Cambios"></p><p>Imagen 19. Campo Línea de Producto</p><p>Seleccione en el campo <strong>UM</strong>, la unidad de medida del producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image172.png" alt="Icono Guardar Cambios"></p><p>Imagen 20. Campo UM</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente de compras del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image173.png" alt="Icono Guardar Cambios"></p><p>Imagen 21. Campo Agente Compañía</p><p>Seleccione en el campo <strong>Tipo de Producto</strong>, el tipo de producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image174.png" alt="Icono Guardar Cambios"></p><p>Imagen 22. Campo Tipo de Producto</p><p>Seleccione en <strong>Patrón de Correo</strong>, la plantilla utilizada para ser enviada a los socios del negocio con respecto al producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image175.png" alt="Icono Guardar Cambios"></p><p>Imagen 23. Campo Patrón de Correo</p><p>Introduzca en el campo <strong>Peso</strong>, el peso del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image176.png" alt="Icono Guardar Cambios"></p><p>Imagen 24. Campo Peso</p><p>Introduzca en el campo <strong>Volumen</strong>, el volumen del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image177.png" alt="Icono Guardar Cambios"></p><p>Imagen 25. Campo Volumen</p><p>Introduzca en el campo <strong>Peso Mínimo</strong>, el peso mínimo del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image178.png" alt="Icono Guardar Cambios"></p><p>Imagen 26. Campo Peso Mínimo</p><p>Introduzca en el campo <strong>Peso Máximo</strong>, el peso máximo del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image179.png" alt="Icono Guardar Cambios"></p><p>Imagen 27. Campo Peso Máximo</p><p>Seleccione el checklist <strong>Producto a Granel</strong>, para indicar que el producto que esta registrando es a granel.</p><p><img src="/assets/img/docs/master-data/mad-master-image180.png" alt="Icono Guardar Cambios"></p><p>Imagen 28. Campo Producto a Granel</p><p>Seleccione en el campo <strong>Categoría de Fletes</strong>, la categoría de fletes a aplicar al producto seleccionado.</p><p><img src="/assets/img/docs/master-data/mad-master-image181.png" alt="Icono Guardar Cambios"></p><p>Imagen 29. Campo Categoría de Fletes</p><p>Seleccione el checklist <strong>Entrega Directa</strong>, para indicar que los envíos del producto que esta registrando, se realizarán directamente al socio del negocio cliente.</p><p><img src="/assets/img/docs/master-data/mad-master-image182.png" alt="Icono Guardar Cambios"></p><p>Imagen 30. Campo Entrega Directa</p><p>Podrá apreciar el checklist <strong>Almacenado</strong>, indicando que la empresa almacena el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image183.png" alt="Icono Guardar Cambios"></p><p>Imagen 31. Campo Almacenado</p><p>Seleccione en el campo <strong>Ubicación</strong>, la ubicación de almacenamiento dentro de la empresa del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image184.png" alt="Icono Guardar Cambios"></p><p>Imagen 32. Campo Ubicación</p><p>Introduzca en el campo <strong>Ancho de Anaquel</strong>, el ancho requerido del anaquel para almacenar el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image185.png" alt="Icono Guardar Cambios"></p><p>Imagen 33. Campo Ancho de Anaquel</p><p>Introduzca en el campo <strong>Altura del Anaquel</strong>, la altura requerida del anaquel para almacenar el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image186.png" alt="Icono Guardar Cambios"></p><p>Imagen 34. Campora del Anaquel</p><p>Introduzca en el campo <strong>Profundidad del Anaquel</strong>, la profundidad requerida del anaquel para almacenar el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image187.png" alt="Icono Guardar Cambios"></p><p>Imagen 35. Campo Profundidad del Anaquel</p><p>Introduzca en el campo <strong>Unidades por Paquete</strong>, el número de unidades del producto que esta registrando que conforman un paquete.</p><p><img src="/assets/img/docs/master-data/mad-master-image188.png" alt="Icono Guardar Cambios"></p><p>Imagen 36. Campo Unidades por Paquete</p><p>Introduzca en el campo <strong>Unidades por Tarima</strong>,</p><p><img src="/assets/img/docs/master-data/mad-master-image189.png" alt="Icono Guardar Cambios"></p><p>Imagen 37. Campo Unidades por Tarima</p><p>Seleccione el checklist <strong>Descontinuado</strong>, para indicar que el producto no se encuentra disponible.</p><p><img src="/assets/img/docs/master-data/mad-master-image190.png" alt="Icono Guardar Cambios"></p><p>Imagen 38. Campo Descontinuado</p><p>Seleccione en el campo <strong>Tipo de Suscripción</strong>, el tipo de suscripción del producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image191.png" alt="Icono Guardar Cambios"></p><p>Imagen 39. Campo Tipo de Suscripción</p><p>Seleccione el checklist <strong>Excluir de Auto Entrega</strong>, para excluir el producto de la entrega automática.</p><p><img src="/assets/img/docs/master-data/mad-master-image192.png" alt="Icono Guardar Cambios"></p><p>Imagen 40. Campo Excluir de Auto Entrega</p><p>Introduzca en el campo <strong>Dirección Web Imagen</strong>, la url de la imagen del producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image193.png" alt="Icono Guardar Cambios"></p><p>Imagen 41. Campo Dirección Web Imagen</p><p>Introduzca en el campo <strong>Dirección Web Descripción</strong>, la url de la descripción del producto.</p><p><img src="/assets/img/docs/master-data/mad-master-image194.png" alt="Icono Guardar Cambios"></p><p>Imagen 42. Campo Dirección Web Descripción</p><p>Introduzca en el campo <strong>Días de Caducidad</strong>, el número de días límite de disponibilidad o garantía del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image195.png" alt="Icono Guardar Cambios"></p><p>Imagen 43. Campo Días de Caducidad</p><p>Introduzca en el campo <strong>Días Mínimos Caducidad</strong>, el número mínimo de días límite de disponibilidad o garantía del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image196.png" alt="Icono Guardar Cambios"></p><p>Imagen 44. Campo Días Mínimos Caducidad</p><p>Seleccione en el campo <strong>Conjunto de Atributos</strong>, el atributo del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image197.png" alt="Icono Guardar Cambios"></p><p>Imagen 45. Campo Conjunto de Atributos</p><p>Seleccione en el campo <strong>Instancia Conjunto de Atributos</strong>, el conjunto de atributos perteneciente al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image198.png" alt="Icono Guardar Cambios"></p><p>Imagen 46. Campo Instancia Conjunto de Atributo</p><p>Introduzca en el campo <strong>Código CPE</strong>, el código CPE perteneciente al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image199.png" alt="Icono Guardar Cambios"></p><p>Imagen 47. Campo Código CPE</p><p>Seleccione el icono <strong>Guardar Cambios</strong> en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image200.png" alt="Icono Guardar Cambios"></p><p>Imagen 48. Icono Guardar Cambios</p><h3 id="pestana-reabastecer" tabindex="-1"><a class="header-anchor" href="#pestana-reabastecer" aria-hidden="true">#</a> Pestaña Reabastecer</h3><p>Seleccione la pestaña <strong>Reabastecer</strong>, ubicada del lado izquierdo de la ventana <strong>Producto</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/master-data/mad-master-image201.png" alt="Icono Guardar Cambios"></p><p>Imagen 49. Pestaña Reabastecer</p><p>Seleccione en el campo <strong>Almacén</strong>, el almacén relacionado con el registro que se encuentra realizando.</p><p>Este campo identifica un punto único donde los productos son almacenados</p><p><img src="/assets/img/docs/master-data/mad-master-image202.png" alt="Icono Guardar Cambios"></p><p>Imagen 50. Campo Almacén</p><p>Seleccione en el campo <strong>Ubicación</strong>, la ubicación exacta en el almacén relacionada con el registro que se encuentra realizando.</p><p>Este campo indica en que parte del almacén se localiza el producto</p><p><img src="/assets/img/docs/master-data/mad-master-image203.png" alt="Icono Guardar Cambios"></p><p>Imagen 51. Campo Ubicación</p><p>Seleccione en el campo <strong>Tipo de Reabastecimiento</strong>, el tipo de reabastecimiento relacionado con el registro que se encuentra realizando.</p><p>Método para re-ordenar un producto. El tipo de reabastecimiento indica si este producto será manualmente reordenado; ordenado cuando la cantidad esté por debajo de la cantidad mínima u ordenado cuando esté debajo de la cantidad máxima.</p><p><img src="/assets/img/docs/master-data/mad-master-image204.png" alt="Icono Guardar Cambios"></p><p>Imagen 52. Campo Tipo de Reabastecimiento</p><p>Seleccione en el campo <strong>Nivel Mínimo</strong>, el nivel mínimo relacionado con el registro que se encuentra realizando.</p><p>Este campo indica la cantidad mínima de este producto a ser almacenada en inventario</p><p><img src="/assets/img/docs/master-data/mad-master-image205.png" alt="Icono Guardar Cambios"></p><p>Imagen 53. Campo Nivel Mínimo</p><p>Seleccione en el campo <strong>Nivel Máximo</strong>, el nivel máximo relacionado con el registro que se encuentra realizando.</p><p>Este campo indica la cantidad máxima de este producto a ser almacenada en inventario</p><p><img src="/assets/img/docs/master-data/mad-master-image206.png" alt="Icono Guardar Cambios"></p><p>Imagen 54. Campo Nivel Mínimo</p><p>Seleccione en el campo <strong>Almacén Fuente</strong>, el almacén fuente relacionado con el registro que se encuentra realizando.</p><p>Almacén opcional para reabastecimiento. Si se define, este almacén será seleccionado para reabastecimiento de producto</p><p><img src="/assets/img/docs/master-data/mad-master-image207.png" alt="Icono Guardar Cambios"></p><p>Imagen 55. Campo Almacén Fuente</p><p>Seleccione en el campo <strong>Tamaño Cantidad Lote</strong>, el almacén fuente relacionado con el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/master-data/mad-master-image208.png" alt="Icono Guardar Cambios"></p><p>Imagen 56. Campo Tamaño Cantidad Lote</p><p>Seleccione el icono <strong>Guardar Cambios</strong> en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image209.png" alt="Icono Guardar Cambios"></p><p>Imagen 57. Icono Guardar Cambios</p><h3 id="pestana-compras" tabindex="-1"><a class="header-anchor" href="#pestana-compras" aria-hidden="true">#</a> Pestaña Compras</h3><p>En esta ventana se registran los precios y reglas de compras por socios del negocio, con la finalidad de ser utilizada al momento de realizar alguna compra de dicho producto. Cada uno de los campos con el símbolo (*) son obligatorios para el registro.</p><p>Warning</p><p>Para el caso de la mercancía en consignación, esta pestaña no debe ser modificada por ningún motivo, ya que la información de la misma es cargada desde la última orden de compra procesada en la que se encuentre dicho producto.</p><p>Seleccione la pestaña <strong>Compras</strong>, ubicada del lado izquierdo de la ventana <strong>Producto</strong> y proceda al llenado de los campos correspondientes.</p><h3 id="pestana-compras-1" tabindex="-1"><a class="header-anchor" href="#pestana-compras-1" aria-hidden="true">#</a> Pestaña Compras</h3><p><img src="/assets/img/docs/master-data/mad-master-image210.png" alt="Icono Guardar Cambios"></p><p>Imagen 58. Pestaña Compras</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio proveedor del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image211.png" alt="Icono Guardar Cambios"></p><p>Imagen 59. Campo Socio del Negocio Proveedor</p><p>Introduzca en el campo <strong>UPC/EAN</strong>, el código de barras correspondiente al producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image212.png" alt="Icono Guardar Cambios"></p><p>Imagen 60. Campo UPC/EAN</p><p>Seleccione en el campo <strong>Moneda</strong>, la moneda utilizada para la compra del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image213.png" alt="Icono Guardar Cambios"></p><p>Imagen 61. Campo Moneda</p><p>Introduzca en el campo <strong>Precio de Lista</strong>, el precio del producto en la moneda seleccionada.</p><p><img src="/assets/img/docs/master-data/mad-master-image214.png" alt="Icono Guardar Cambios"></p><p>Imagen 62. Campo Precio de Lista</p><p>Seleccione en el campo <strong>Fecha de Efectividad del Precio</strong>, la fecha en la que el precio ingresado es válido.</p><p><img src="/assets/img/docs/master-data/mad-master-imag215.png" alt="Icono Guardar Cambios"></p><p>Imagen 63. Campo Fecha de Efectividad del Precio</p><p>Introduzca en el campo <strong>Precio OC</strong>, el precio unitario del producto para una orden de compra.</p><p><img src="/assets/img/docs/master-data/mad-master-image216.png" alt="Icono Guardar Cambios"></p><p>Imagen 64. Campo Precio OC</p><p>Seleccione en el campo <strong>UM</strong>, la unidad de medida para realizar la compra del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image217.png" alt="Icono Guardar Cambios"></p><p>Imagen 65. Campo UM</p><p>Introduzca en el campo <strong>Mínimo a Ordenar</strong>, la cantidad mínima a ordenar en la unidad de medida seleccionada del producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image218.png" alt="Icono Guardar Cambios"></p><p>Imagen 66. Campo Mínimo a Ordenar</p><p>Introduzca en el campo <strong>Múltiplo a Ordenar</strong>, el número de productos que contiene la unidad de medida seleccionada.</p><p><img src="/assets/img/docs/master-data/mad-master-image219.png" alt="Icono Guardar Cambios"></p><p>Imagen 67. Campo Múltiplo a Ordenar</p><p>Introduzca en el campo <strong>Tiempo de Entrega Prometido</strong>, el número de días existentes entre la fecha de la orden y la fecha prometida de la entrega.</p><p><img src="/assets/img/docs/master-data/mad-master-image220.png" alt="Icono Guardar Cambios"></p><p>Imagen 68. Campo Tiempo de Entrega Prometido</p><p>Introduzca en el campo <strong>Costo por Orden</strong>, el costo por la orden para el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image221.png" alt="Icono Guardar Cambios"></p><p>Imagen 69. Campo Costo por Orden</p><p>Seleccione el icono <strong>Guardar Cambios</strong> en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image222.png" alt="Icono Guardar Cambios"></p><p>Imagen 70. Icono Guardar Cambios</p><h3 id="pestana-precio" tabindex="-1"><a class="header-anchor" href="#pestana-precio" aria-hidden="true">#</a> Pestaña Precio</h3><p>En esta ventana se registran las listas de precios utilizadas por la empresa, con sus diferentes precios de lista, límite y estándar que poseen los productos, con la finalidad de ser utilizada al momento de realizar alguna compra / venta con los mismos. Cada uno de los campos con el símbolo (*) son obligatorios para el registro.</p><p>Seleccione la pestaña <strong>Precio</strong>, ubicada del lado izquierdo de la ventana <strong>Producto</strong> y proceda al llenado de los campos correspondientes.</p><h3 id="pestana-precio-1" tabindex="-1"><a class="header-anchor" href="#pestana-precio-1" aria-hidden="true">#</a> Pestaña Precio</h3><p><img src="/assets/img/docs/master-data/mad-master-image223.png" alt="Icono Guardar Cambios"></p><p>Imagen 71. Pestaña Precio</p><p>Seleccione en el campo <strong>Versión de Lista de Precios</strong>, la lista de precios que será utilizada para el producto que esta registrando.</p><p><img src="/assets/img/docs/master-data/mad-master-image224.png" alt="Icono Guardar Cambios"></p><p>Imagen 72. Campo Versión de Lista de Precios</p><p>Seleccione el icono <strong>Guardar Cambios</strong> en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image225.png" alt="Icono Guardar Cambios"></p><p>Imagen 73. Icono Guardar Cambios</p><h3 id="pestana-conversion-unidad-de-medida" tabindex="-1"><a class="header-anchor" href="#pestana-conversion-unidad-de-medida" aria-hidden="true">#</a> Pestaña Conversión Unidad de Medida</h3><p>En esta ventana se registran las conversiones de las diferentes unidades de medida utilizadas por la empresa, con la finalidad de aplicar dichas conversiones al momento de realizar alguna compra / venta de un producto. Cada uno de los campos con el símbolo (*) son obligatorios para el registro.</p><p>Seleccione la pestaña <strong>Conversión Unidad de Medida</strong>, ubicada del lado izquierdo de la ventana <strong>Producto</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/master-data/mad-master-image226.png" alt="Icono Guardar Cambios"></p><p>Imagen 74. Pestaña Conversión Unidad de Medida</p><p>Seleccione en el campo <strong>UM Destino</strong>, la unidad de medida a la cual será realizada la conversión.</p><p><img src="/assets/img/docs/master-data/mad-master-image227.png" alt="Icono Guardar Cambios"></p><p>Imagen 75. Campo UM Destino</p><p>Introduzca en el campo <strong>Factor de Destino a Base</strong>, el número de productos que contiene la unidad de medida seleccionada.</p><p><img src="/assets/img/docs/master-data/mad-master-image228.png" alt="Icono Guardar Cambios"></p><p>Imagen 76. Campo Factor de Destino a Base</p><p>Seleccione el icono <strong>Guardar Cambios</strong> en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/master-data/mad-master-image999.png" alt="Icono Guardar Cambios"></p><p>Imagen 77. Icono Guardar Cambios</p>',255)],t={},n=(0,o(3860).Z)(t,[["render",function(a,e){return(0,r.wg)(),(0,r.iD)("div",null,s)}]])},3450:(a,e,o)=>{o.r(e),o.d(e,{data:()=>r});const r=JSON.parse('{"key":"v-210e31df","path":"/docs/master-data/product.html","title":"Producto","lang":"en-US","frontmatter":{"title":"Producto","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"En ADempiere un producto es un artículo, recurso o servicio que puede ser producido, vendido o comprado por la empresa. El registro de estos, permite a la empresa dar seguimiento a","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/master-data/product.html"}],["meta",{"property":"og:title","content":"Producto"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-21T11:28:15.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-21T11:28:15.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Producto","slug":"registro-de-producto","children":[{"level":3,"title":"Pestaña Reabastecer","slug":"pestana-reabastecer","children":[]},{"level":3,"title":"Pestaña Compras","slug":"pestana-compras","children":[]},{"level":3,"title":"Pestaña Compras","slug":"pestana-compras-1","children":[]},{"level":3,"title":"Pestaña Precio","slug":"pestana-precio","children":[]},{"level":3,"title":"Pestaña Precio","slug":"pestana-precio-1","children":[]},{"level":3,"title":"Pestaña Conversión Unidad de Medida","slug":"pestana-conversion-unidad-de-medida","children":[]}]}],"git":{"createdTime":1678289058000,"updatedTime":1679398095000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4}]},"readingTime":{"minutes":10.6,"words":3180},"filePathRelative":"docs/master-data/product.md","localizedDate":"March 8, 2023"}')}}]);