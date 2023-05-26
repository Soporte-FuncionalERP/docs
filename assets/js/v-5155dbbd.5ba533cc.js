"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8170],{4190:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});var n=s(8e3);const o=[(0,n.uE)('<p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para definir la comisión de ventas en cualquier organización y realizar un cálculo exitoso de las mismas en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><ul><li>Definición de Comisiones <ul><li>Pestaña Comisión</li><li>Pestaña Línea de Comisión</li><li>Pestaña Representantes de Ventas</li></ul></li><li>Cálculo de Comisiones de Ventas <ul><li>Pestaña Ejecución de Comisión</li><li>Pestaña Total Comisión</li><li>Pestaña Detalle de Comisión</li></ul></li></ul><h2 id="definicion-de-comisiones" tabindex="-1"><a class="header-anchor" href="#definicion-de-comisiones" aria-hidden="true">#</a> Definición de Comisiones</h2><p>Una comisión es un porcentaje o cantidad de dinero que es cobrado por la venta de productos o servicios, las mismas estan sujetas a reglas o condiciones establecidas por la empresa a los vendedores. Las comisiones son pagadas a los vendedores para motivarlos a vender más productos o servicios.</p><p>La definición de comisiones es una configuración que la empresa realiza en ADempiere para indicar cuando pagar una comisión y a quien pagarsela. La forma de pago de las comisiones depende de lo establecido en el grupo de comisión, la base para el cálculo, la moneda y el tipo de frecuencia para el pago.</p><p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente con respecto al procedimiento a seguir para realizar una definición de comisiones en la versión 3.9.2 de ADempiere, en la localización Venezuela.</p><p>Para explicar el procedimiento detalladamente, se presentará un ejemplo en el cual se definen dos (2) comisiones, comisiones internas y externas, donde las internas se refiere a las comisiones para los trabajadores que laboran dentro de la empresa y externas a las comisiones para los trabajadores que laboran fuera de la empresa. El ejemplo contempla diferentes montos de comisión y apuntando a un mismo grupo de comisión (1000000_Comisión de Venta_M). A continuación es mostrado el procedimiento de la definición de comisiones de vendedores internos de la empresa, debe realizarce el mismo procedimiento para la definición de comisiones de vendedores externos.</p><h2 id="pestana-comision" tabindex="-1"><a class="header-anchor" href="#pestana-comision" aria-hidden="true">#</a> Pestaña Comisión</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Reglas de Ventas y Mercadotecnia</strong>, por último seleccione la ventana <strong>Definición de Comisiones</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image479.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Definición de Comisiones</strong>, donde debe seleccionar el icono <strong>Registro Nuevo</strong> en la barra de herramientas de ADempiere y proceder al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image480.png" alt="Campo"></p><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando la definición de comisión.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image481.png" alt="Campo"></p><p>Imagen 3. Campo Organización</p><p>Introduzca en el campo <strong>Nombre</strong>, el nombre que corresponde a la definición de comisión que esta realizando. Para ejemplificar el caso planteado anteriormente, es ingresado el nombre <strong>Comisión de Venta Internos</strong></p><p><img src="/assets/img/docs/sales-management/sam-sales-image482.png" alt="Campo"></p><p>Imagen 4. Campo Nombre</p><p>Seleccione en el campo <strong>Grupo de Comisión</strong>, el grupo de comisión creado según el tipo de frecuencia. El mismo define el tipo de frecuencia a utilizar para el cálculo de la comisión.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image483.png" alt="Campo"></p><p>Imagen 5. Campo Grupo de Comisión</p><p>Seleccione en el campo <strong>Moneda</strong>, la moneda a ser utilizada para calcular las comisiones correspondientes a la definición de comisión que esta realizando.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image484.png" alt="Campo"></p><p>Imagen 6. Campo Moneda</p><p>El campo <strong>Base del Cálculo</strong> indica la regla que será tomada en cuenta para el calcular las comisiones al vendedor, el mismo contiene precargadas las siguientes opciones:</p><p>Comisión Personalizada: El vendedor comisiona según las reglas o condiciones establecidas en la empresa.</p><p>Factura: El vendedor comisiona por las facturas que tenga una orden de venta que tenga el vendedor asignado.</p><p>Orden: El vendedor comisiona por las órdenes de venta que tenga el vendedor asignado.</p><p>Pronóstico vs Factura: El vendedor comisiona por porcentaje, el mismo depende del estimado de ventas que tiene el vendedor y de las ventas que haya realizado.</p><p>Pronóstico vs Orden: El vendedor comisiona por porcentaje, el mismo depende del estimado de órdenes que tiene el vendedor y de las órdenes que tenga asignadas el vendedor.</p><p>Recaudo: El vendedor comisiona si todas sus facturas estan cobradas.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image485.png" alt="Campo"></p><p>Imagen 7. Campo Base del Cálculo</p><p>El campo **Tipo de Frecuencia se usa para definir las fechas de inicio y fin del cálculo. Es decir, cada cuanto tiempo comisionará el vendedor:</p><p>Anualmente: Cada año (365 días).</p><p>Mensualmente: Cada mes (La cantidad de días puede variar según el mes).</p><p>Semanalmente: Cada semana (7 días).</p><p>Trimestralmente: Cada tres meses (90 días).</p><p><img src="/assets/img/docs/sales-management/sam-sales-image486.png" alt="Campo"></p><p>Imagen 8. Campo Tipo de Frecuencia</p><p>Note</p><p>Si la ventana <strong>Grupo de Comisión</strong> tiene un tipo de frecuencia asignado y la ventana <strong>Definición de Comisión</strong> tiene otro diferente, ADempiere realiza la validación para el cálculo de comisión tomando en cuenta el valor ingresado en el campo <strong>Tipo de Frecuencia</strong> de la ventana <strong>Definición de Comisión</strong>.</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo correspondiente al registro de definición de comisión que esta realizando.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image487.png" alt="Campo"></p><p>Imagen 9. Campo Cargo</p><p>Si el checklist <strong>Pagado Totalmente</strong> se encuentra tildado el vendedor comisiona por las facturas pagadas en su totalidad, de lo contrario comisiona por los pagos parciales de las facturas.</p><p>Si el checklist <strong>Calcular con Término de Pago</strong> se encuentra tildado la comisión es calculada en base al término de pago que tenga la factura.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image488.png" alt="Campo"></p><p>Imagen 10. Checklist Calcular con Término de Pago</p><p>Si el checklist <strong>Permitir Devoluciones</strong> se encuentra tildado la comisión es calculada en base a la nota de crédito que contiene asociada la factura.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image489.png" alt="Campo"></p><p>Imagen 11. Checklist Permitir Devoluciones</p><p>Si el checklist <strong>Lista Detalle</strong> se encuentra tildado permite que los detalles de las comisiones sean mostrados en la ventana <strong>Cálculo de Comisiones</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image490.png" alt="Campo"></p><p>Imagen 12. Checklist Lista Detalle</p><p>El campo <strong>Última Fecha de Ejecución</strong> se refiere a la fecha en la cual el proceso fue corrido por última vez.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image491.png" alt="Campo"></p><p>Imagen 13. Campo Última Fecha de Ejecución</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><h2 id="pestana-linea-de-comision" tabindex="-1"><a class="header-anchor" href="#pestana-linea-de-comision" aria-hidden="true">#</a> Pestaña Línea de Comisión</h2><p>Seleccione la pestaña <strong>Línea de Comisión</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image492.png" alt="Campo"></p><p>Imagen 14. Pestaña Línea de Comisión</p><p>El grupo de campos <strong>Referencia</strong> contiene campos que permiten establecer reglas o condiciones para el cálculo de las comisiones de los vendedores que se registran en la pestaña <strong>Representantes de Ventas</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image493.png" alt="Campo"></p><p>Imagen 15. Grupo de Campos <strong>Referencia</strong></p><p>Al tildar el checklist <strong>Comisión sólo en Órdenes Específicas</strong>, el vendedor comisiona sólo por la órdenes o facturas que tiene asignadas.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image494.png" alt="Campo"></p><p>Imagen 16. Checklist Comisión sólo en Órdenes Específicas</p><p>Los campos <strong>Organización</strong>, <strong>Grupo de Socio del Negocio</strong>, <strong>Socio del Negocio</strong>, <strong>Categoría del Producto</strong>, <strong>Clase de Producto</strong>, <strong>Clasificación de Producto</strong>, <strong>Grupo de Producto</strong>, <strong>Producto</strong>, <strong>Región de Ventas</strong>, <strong>Regla de Pago</strong>, <strong>Término de Pago</strong>, <strong>Proyecto</strong>, <strong>Campaña</strong>, <strong>Canal</strong>, <strong>Cumplimiento Mínimo (%)</strong>, <strong>Cumplimiento Máximo</strong> y <strong>Procentaje Máximo</strong> pueden ser utilizados para indicar la regla de que los vendedores que se registran en la pestaña <strong>Representantes de Ventas</strong>, sólo comisionarán por las ventas que cumplan con lo seleccionado o ingresado en dichos campos.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image495.png" alt="Campo"></p><p>Imagen 17. Campo Producto</p><p>Si el checklist <strong>Es Porcentaje</strong> se encuentra tildado, indica que la comisión es expresada en porcentaje. En caso contrario, indica que la comisión es expresada en cantidad.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image496.png" alt="Campo"></p><p>Imagen 18. Checklist Es Procentaje</p><p>En el campo <strong>Multiplicador</strong> se introduce el monto de la comisión en porcentaje.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image497.png" alt="Campo"></p><p>Imagen 19. Campo Multiplicador</p><p>En el campo <strong>Cantidad Multiplicadora</strong> se introduce el monto de la comisión en cantidad.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image498.png" alt="Campo"></p><p>Imagen 20. Campo Cantidad Multiplicadora</p><p>Si el checklist <strong>Sólo Positivos</strong> se encuentra tildado, indica que no se toman en cuenta las notas de crédito para el cálculo de las comisiones.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image499.png" alt="Campo"></p><p>Imagen 21. Checklist Sólo Positivos</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><h2 id="pestana-representantes-de-ventas" tabindex="-1"><a class="header-anchor" href="#pestana-representantes-de-ventas" aria-hidden="true">#</a> Pestaña Representantes de Ventas</h2><p>Seleccione la pestaña <strong>Representantes de Ventas</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image500.png" alt="Campo"></p><p>Imagen 22. Pestaña Representantes de Ventas</p><p>Campo <strong>Socio del Negocio</strong>: Se debe seleccionar el vendedor que corresponde a la definición de comisión que esta configurando.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image501.png" alt="Campo"></p><p>Imagen 23. Campo Socio del Negocio</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere. Para realizar otro registro de vendedor debe seleccionar el icono <strong>Registro Nuevo</strong> y proceder al llenado de los campos correspondientes.</p><h2 id="calculo-de-comisiones-de-ventas" tabindex="-1"><a class="header-anchor" href="#calculo-de-comisiones-de-ventas" aria-hidden="true">#</a> Cálculo de Comisiones de Ventas</h2><p>El cálculo de las comisiones tiene como requerimiento principal tener configurada una definición de comisiones. Dicho cálculo de comisión toma en cuenta el tipo de frecuencia que tiene seleccionada la definición de comisión, así el grupo de comisión de la misma contenga otro tipo de frecuencia diferente.</p><p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente con respecto al procedimiento a seguir para realizar el cálculo de comisiones en la versión 3.9.2 de ADempiere, en la localización Venezuela.</p><p>Continuando con el ejemplo planteado en el documento Definición de Comisiones, se realiza de la siguiente manera el cálculo de las comisiones de los vendedores internos. Es necesario repetir el procedimiento para calcular las comisiones de los vendedores externos.</p><h2 id="pestana-ejecucion-de-comision" tabindex="-1"><a class="header-anchor" href="#pestana-ejecucion-de-comision" aria-hidden="true">#</a> Pestaña Ejecución de Comisión</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Reglas de Ventas y Mercadotecnia</strong>, por último seleccione la ventana <strong>Cálculo de Comisiones</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image502.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Cálculo de Comisiones</strong>, donde debe seleccionar el icono <strong>Registro Nuevo</strong> ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image503.png" alt="Campo"></p><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el documento <strong>Cálculo de Comisiones*</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image504.png" alt="Campo"></p><p>Imagen 3. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image505.png" alt="Campo"></p><p>Imagen 4. Campo Tipo de Documento</p><p>Seleccione en el campo <strong>F. Documento</strong>, la fecha en la cual esta realizando el documento <strong>Cálculo de Comisiones</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image506.png" alt="Campo"></p><p>Imagen 5. Campo Fecha del Documento</p><p>Seleccione en el campo <strong>Grupo de Comisión</strong>, el grupo de comisión utilizado para la definición de comisiones.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image507.png" alt="Campo"></p><p>Imagen 6. Campo Grupo de Comisión</p><p>Seleccione en el campo <strong>Comisión</strong>, la definición de comisión correspondiente al cálculo de comisiones que esta realizando.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image508.png" alt="Campo"></p><p>Imagen 7. Campo Comisión</p><p>Introduzca en el campo <strong>Fecha de Inicio</strong>, la fecha establecida para comenzar a realizar el cálculo de comisiones.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image509.png" alt="Campo"></p><p>Imagen 8. Campo Fecha de Inicio</p><p>Introduzca en el campo <strong>Fecha Final</strong>, la fecha establecida para finalizar el cálculo de comisiones que esta realizando.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image510.png" alt="Campo"></p><p>Imagen 9. Campo Fecha Final</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><h2 id="pestana-total-comision" tabindex="-1"><a class="header-anchor" href="#pestana-total-comision" aria-hidden="true">#</a> Pestaña Total Comisión</h2><p>Seleccione la pestaña <strong>Total Comisión</strong> para visualizar el total general de las comisiones.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image511.png" alt="Campo"></p><p>Imagen 10. Pestaña Total Comisión</p><p>Note</p><p>Esta pestaña es de sólo lectura, el contenido de sus campos se agrega de forma automática según lo configurado en la definición de comisiones.</p><h2 id="pestana-detalle-de-comision" tabindex="-1"><a class="header-anchor" href="#pestana-detalle-de-comision" aria-hidden="true">#</a> Pestaña Detalle de Comisión</h2><p>Seleccione la pestaña <strong>Detalle de Comisión</strong> para visualizar el total de la comisiones por cada venta.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image512.png" alt="Campo"></p><p>Imagen 11. Pestaña Detalle de Comisión</p><p>Note</p><p>Esta pestaña es de sólo lectura, el contenido de sus campos se agrega de forma automática según lo configurado en la definición de comisiones.</p>',144)],i={},t=(0,s(3860).Z)(i,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,o)}]])},8003:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-5155dbbd","path":"/docs/sales-management/sales.html","title":"Comisión de Ventas","lang":"es-ES","frontmatter":{"title":"Comisión de Ventas","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para definir la comisión de ventas en cualquier","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/sales-management/sales.html"}],["meta",{"property":"og:title","content":"Comisión de Ventas"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Definición de Comisiones","slug":"definicion-de-comisiones","children":[]},{"level":2,"title":"Pestaña Comisión","slug":"pestana-comision","children":[]},{"level":2,"title":"Pestaña Línea de Comisión","slug":"pestana-linea-de-comision","children":[]},{"level":2,"title":"Pestaña Representantes de Ventas","slug":"pestana-representantes-de-ventas","children":[]},{"level":2,"title":"Cálculo de Comisiones de Ventas","slug":"calculo-de-comisiones-de-ventas","children":[]},{"level":2,"title":"Pestaña Ejecución de Comisión","slug":"pestana-ejecucion-de-comision","children":[]},{"level":2,"title":"Pestaña Total Comisión","slug":"pestana-total-comision","children":[]},{"level":2,"title":"Pestaña Detalle de Comisión","slug":"pestana-detalle-de-comision","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":7.2,"words":2161},"filePathRelative":"docs/sales-management/sales.md","localizedDate":"8 de marzo de 2023"}')}}]);