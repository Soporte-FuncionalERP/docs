"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[55692],{26674:(e,o,a)=>{a.r(o),a.d(o,{default:()=>t});var n=a(78e3);const r=[(0,n.uE)('<h2 id="configuracion-esencial-de-la-retencion-de-iva" tabindex="-1"><a class="header-anchor" href="#configuracion-esencial-de-la-retencion-de-iva" aria-hidden="true">#</a> Configuración Esencial de la Retención de IVA</h2><p>La configuración esencial de las retenciones en ADempiere, permite que sea ejecutada la estimación de la retención a un socio del negocio proveedor al completar el documento de cuentas por pagar en ADempiere, la misma consta de dos procesos explicados a continuación.</p><p><strong>Configuración de la Tasa de Impuesto</strong></p><p>La aplicación de retención de IVA en un documento de cuentas por pagar parte de la selección de IVA en el campo &quot;<strong>Impuesto</strong>&quot;, el mismo debe ser configurado desde la ventana &quot;<strong>Tasa de Impuesto</strong>&quot;, o acercando dicho campo en la línea de la factura. Para que se ejecute la estimación de la retención, es necesario configurar la tasa de impuesto.</p><p>Ubique en el menú de ADempiere la carpeta &quot;<strong>Análisis de Desempeño</strong>&quot;, luego seleccione la carpeta &quot;<strong>Reglas Contables</strong>&quot;, por último seleccione la ventana &quot;<strong>Tasa de Impuesto</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/menutasa.png" alt="Menú de ADempiere1"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá apreciar la ventana &quot;<strong>Tasa de Impuesto</strong>&quot; con los diferentes registros de impuesto de IVA y sus diferentes porcentajes de retención.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/ventanatasa.png" alt="Ventana Tasa de Impuesto"></p><p>Imagen 2. Ventana Tasa de Impuesto</p><p>Ubique el impuesto a aplicar al documento por pagar, para este ejemplo el impuesto es &quot;<strong>IVA 16% (Ingreso)</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/registrotasa.png" alt="Registro de Impuesto de IVA"></p><p>Imagen 3. Registro de Impuesto de IVA</p><p>Tilde el checklist &quot;<strong>Retención Aplicada</strong>&quot;, para que ejecute la estimación de retención al completar el documento por pagar.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/tildartasa.png" alt="Checklist Retención Aplicada"></p><p>Imagen 4. Checklist Retención Aplicada</p><p>Seleccione el icono &quot;<strong>Guardar</strong>&quot; en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/guardartasa.png" alt="Icono Guardar"></p><p>Imagen 5. Icono Guardar</p><p>Este proceso debe ser realizado cada vez que se vaya a aplicar un impuesto de IVA diferente en cada documento por pagar.</p><h2 id="configuracion-del-socio-de-negocio" tabindex="-1"><a class="header-anchor" href="#configuracion-del-socio-de-negocio" aria-hidden="true">#</a> Configuración del Socio de Negocio</h2><p>ADempiere permite seleccionar por socio del negocio el porcentaje de IVA a aplicar en los documentos de compra/venta del mismo, a continuación se explica el procedimiento para seleccionar el IVA en un socio del negocio determinado.</p><p>Ubique en el menú de ADempiere la carpeta &quot;<strong>Relación con Socios del Negocio</strong>&quot;, luego seleccione la carpeta &quot;<strong>Reglas de Socios del Negocio</strong>&quot;, por último seleccione la ventana &quot;<strong>Socio del Negocio</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/menu.png" alt="Menú de ADempiere2"></p><p>Imagen 6. Menú de ADempiere</p><p>Ubique el socio del negocio proveedor al cual se le va a configurar la retención de IVA, para este ejemplo el socio del negocio proveedor es &quot;<strong>Standard Standard</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/socio.png" alt="Socio del Negocio"></p><p>Imagen 7. Socio del Negocio</p><p>En la ventana principal &quot;<strong>Socio del Negocio</strong>&quot;, verifique que en el campo &quot;<strong>Tipo de Persona</strong>&quot; se encuentre seleccionado el tipo de socio del negocio al que se le aplicará la retención de IVA, en este campo debe indicar si el socio es persona jurídica domiciliada, persona jurídica no constituída domiciliada, persona jurídica no domiciliada, persona natural no residente, o persona natural residente.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/tipoperso.png" alt="Campo Tipo de Persona"></p><p>Imagen 8. Campo Tipo de Persona</p><p>Seleccione la pestaña &quot;<strong>Proveedor</strong>&quot; para configurar la retención de IVA a aplicar al socio del negocio.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/proveedor.png" alt="Pestaña Proveedor"></p><p>Imagen 9. Pestaña Proveedor</p><p>Ubique en la parte inferior del documento los checklist para definir las retenciones a aplicar a un socio del negocio proveedor.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/retenciones.png" alt="Retenciones"></p><p>Imagen 10. Retenciones</p><p>Al tildar el checklist en los campos de retenciones ubicados en la parte inferior del documento, significa para ADempiere que no se aplicará dicha retención seleccionada al socio del negocio.</p><p>Para realizar este ejemplo de la retención de IVA y observar el comportamiento de los checklist en ADempiere, se tildan los checklist referentes a retención de ISLR y municipal.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/check.png" alt="Checklist Retenciones"></p><p>Imagen 11. Checklist Retenciones</p><p>Seleccione en el campo &quot;<strong>Retención de IVA Aplicada</strong>&quot;, el porcentaje de IVA a retener al socio del negocio proveedor, para este ejemplo el porcentaje a retener es cien por ciento (100%).</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/selecporcentaje.png" alt="Campo Retención de IVA Aplicada"></p><p>Imagen 12. Campo Retención de IVA Aplicada</p><p>Solo debe tildar la retención que no se aplicará al socio del negocio proveedor que esta configurando y guarde los cambios realizados en el socio del negocio con ayuda del icono &quot;<strong>Guardar Cambios</strong>&quot; de la barra de herramientas de ADempiere.</p><h2 id="ejecucion-de-la-estimacion-de-retenciones" tabindex="-1"><a class="header-anchor" href="#ejecucion-de-la-estimacion-de-retenciones" aria-hidden="true">#</a> Ejecución de la Estimación de Retenciones</h2><p>Ubique la factura ya realizada al socio del negocio, la misma debe estar en estado &quot;<strong>Completo</strong>&quot;, para este ejemplo se utiliza la factura número &quot;<strong>1000154</strong>&quot; del socio del negocio proveedor &quot;<strong>Standard Standard</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/factura.png" alt="Factura Aplicada al Socio del Negocio"></p><p>Imagen 13. Factura Aplicada al Socio del Negocio</p><p>En la barra de herramientas seleccione el icono &quot;<strong>Visualiza Detalle</strong>&quot; para apreciar donde es usado el documento, en este caso la factura.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/visudetalle.png" alt="Icono Visualiza Detalle"></p><p>Imagen 14. Icono Visualiza Detalle</p><p>Podrá apreciar el menú desplegado por el icono &quot;<strong>Visualiza Detalle</strong>&quot;, el mismo muestra los documentos donde es utilizada la factura.</p><p><a href="/assets/img/docs/lve/procedures/withholding-management/resources/submenu.png">Menú del Icono Visualiza Detalle</a></p><p>Imagen 15. Menú del Icono Visualiza Detalle</p><p>La opción &quot;<strong>Socio del Negocio</strong>&quot; muestra el documento del socio del negocio utilizado en la factura número &quot;<strong>1000154</strong>&quot; seleccionada para el ejemplo, puede ser utilizada para corroborar que las retenciones aplicadas a la factura sean las mismas configuradas para el socio del negocio.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/opcionsocio.png" alt="Opción Socio del Negocio"></p><p>Imagen 16. Opción Socio del Negocio</p><p>La opción &quot;<strong>Retención Generada</strong>&quot; muestra el documento de retención aplicado a la factura número &quot;<strong>1000154</strong>&quot; seleccionada para el ejemplo.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/retencion.png" alt="Opción Retención Generada"></p><p>Imagen 17. Opción Retención Generada</p><p>La opción &quot;<strong>Log de Retención</strong>&quot; muestra el log de la retención no aplicada a la factura número &quot;<strong>1000154</strong>&quot; seleccionada para el ejemplo.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/log.png" alt="Opción Log de Retención"></p><p>Imagen 18. Opción Log de Retención</p><p>ADempiere le genera al usuario por medio del icono &quot;<strong>Visualiza Detalle</strong>&quot;, las alertas donde indica cuales fueron las retenciones aplicadas (<strong>Retención Generada</strong>) y cuales retenciones no fueron aplicadas (<strong>Log</strong>) según la configuración que tiene un socio del negocio determinado.</p><h2 id="generar-retencion-de-iva-fiscal" tabindex="-1"><a class="header-anchor" href="#generar-retencion-de-iva-fiscal" aria-hidden="true">#</a> Generar Retención de IVA Fiscal</h2><p>Ubique la carpeta &quot;<strong>Manejo de Retenciones</strong>&quot; en el menú de ADempiere, luego seleccione la ventana de busqueda inteligente &quot;<strong>Generar Retenciones</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/menugenerar.png" alt="Menú de ADempiere3"></p><p>Imagen 19. Menú de ADempiere</p><p>Podrá apreciar la ventana de busqueda inteligente con diferentes campos para filtrar la busqueda.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/ventana.png" alt="Ventana de Busqueda Inteligente"></p><p>Imagen 20. Ventana de Busqueda Inteligente</p><p>Seleccione en el campo &quot;<strong>Socio del Negocio</strong>&quot;, el socio del negocio relacionado a la retención que requiere generar. Para este ejemplo utilizaremos el socio del negocio &quot;<strong>Standard Standard</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/selecsocio.png" alt="Filtrar por Socio del Negocio"></p><p>Imagen 21. Filtrar por Socio del Negocio</p><p>En el campo &quot;<strong>Organización</strong>&quot;, la organización relacionada a la retención que requiere generar.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/filtrarorg.png" alt="filtrar por organización"></p><p>Imagen 22. Campo Organización de la Retención</p><p>Seleccione en el campo &quot;<strong>F. Documento</strong>&quot;, el rango de fecha en la cual fue generado el documento por pagar relacionado a la retención que requiere generar.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/filtrarfechadoc.png" alt="filtrar por fecha del documento"></p><p>Imagen 23. Campo Fecha del Documento de la Retención</p><p>Seleccione en el campo &quot;<strong>Retención</strong>&quot;, el tipo de retención por el cual requiere filtrar la información.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/filtrarretencion.png" alt="filtrar por retención"></p><p>Imagen 24. Campo Retención</p><p>Seleccione en el campo &quot;<strong>Moneda Hacia</strong>&quot;, la moneda a la cual requiere convertir el monto de la retención.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/monedahacia.png" alt="campo moneda hacia"></p><p>Imagen 25. Campo Moneda Hacia</p><p>Seleccione en el campo &quot;<strong>Factura Fuente</strong>&quot;, la factura por la cual requiere filtrar la información para generar la retención.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/filtrarfactfuente.png" alt="filtrar por factura fuente"></p><p>Imagen 26. Campo Factura Fuente</p><p>Seleccione en el campo &quot;<strong>Tipo de Retención</strong>&quot;, el tipo de retención por el cual requiere filtrar la búsqueda.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/filtrartiporetencion.png" alt="filtrar por tipo de retención"></p><p>Imagen 27. Campo Tipo de Retención</p><ul><li>El campo cuenta con tres opciones que son &quot;<strong>IM_Retencion de Impuesto Municipal</strong>, &quot;<strong>ISLR_Retención de I.S.L.R.</strong>&quot; y &quot;<strong>I.V.A_Retención de I.V.A.</strong>&quot;. Recuerde que la selección de este campo va a depender de la retención que se va a aplicar a la factura de cuentas por pagar.</li></ul><p>Seleccione en el campo &quot;<strong>Moneda</strong>&quot;, la moneda del documento y desde la cual se requiere convertir el monto de la retención.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/moneda.png" alt="campo moneda"></p><p>Imagen 28. Campo Moneda</p><p>Seleccione la opción &quot;<strong>Comenzar Busqueda</strong>&quot; para buscar por los campos introducidos.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/opcioncomenzar.png" alt="Opción Comenzar Busqueda"></p><p>Imagen 29. Opción Comenzar Busqueda</p><p>Podrá apreciar las retenciones que el socio del negocio seleccionado tiene en los diferentes documentos.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/socioretenciones.png" alt="Retenciones del Socio del Negocio"></p><p>Imagen 30. Retenciones del Socio del Negocio</p><p>Seleccione la retención a generar y la opción &quot;<strong>OK</strong>&quot; para generar la retención al socio del negocio seleccionado.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/ok.png" alt="Selección de Retención y Opción OK"></p><p>Imagen 31. Selección de Retención y Opción OK</p><p>Podrá apreciar que el proceso se realizó correctamente con el mensaje &quot;<strong>OK</strong>&quot; mostrado por ADempiere al final de la ventana de busqueda inteligente.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/final.png" alt="Mensaje OK"></p><p>Imagen 32. Mensaje OK</p><h1 id="imprimir-documento-de-la-retencion-aplicada-al-socio-del-negocio" tabindex="-1"><a class="header-anchor" href="#imprimir-documento-de-la-retencion-aplicada-al-socio-del-negocio" aria-hidden="true">#</a> <strong>Imprimir Documento de la Retención Aplicada al Socio del Negocio</strong></h1><p>Ubique en el menú de ADempiere la carpeta &quot;<strong>Gestión de Compras</strong>&quot; y luego seleccione la ventana &quot;<strong>Documentos por Pagar</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/menudoc.png" alt="Menú de ADempiere4"></p><p>Imagen 33. Menú de ADempiere</p><p>Podrá apreciar la ventana &quot;<strong>Documentos por Pagar</strong>&quot; donde se encuentran todos los registros que posee la misma.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/ventanadoc.png" alt="Ventana Documentos por Pagar"></p><p>Imagen 34. Ventana Documentos por Pagar</p><p>Seleccione el icono &quot;<strong>Encontrar Registro</strong>&quot; en la barra de herramientas de ADempiere, para realizar una busqueda avanzada del documento de retención generado.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/iconobuscar.png" alt="Icono Encontrar Registro"></p><p>Imagen 35. Icono Encontrar Registro</p><p>Seleccione la pestaña &quot;<strong>Avanzado</strong>&quot; para filtrar la busqueda por &quot;<strong>Socio del Negocio</strong>&quot;, &quot;<strong>Tipo de Documento de Retención de Cuentas por Pagar</strong>&quot; y &quot;<strong>Fecha de la Retención</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/buscador.png" alt="Buscador Avanzado"></p><p>Imagen 36. Buscador Avanzado</p><p>Seleccione el icono &quot;<strong>Nuevo</strong>&quot; para generar el número de filas de busqueda que se necesitan, para este ejemplo se necesitan tres (3) filas.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/nuevo.png" alt="Icono Nuevo"></p><p>Imagen 37. Icono Nuevo</p><p>Seleccione en la primera fila la opción &quot;<strong>Socio del Negocio</strong>&quot; y introduzca el nombre del socio del negocio en la columna &quot;<strong>Valor Consulta</strong>&quot;, para este ejemplo el socio del negocio es &quot;<strong>Standard Standard</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/nomsocio.png" alt="Selección Socio del Negocio"></p><p>Imagen 38. Selección Socio del Negocio</p><p>Seleccione en la segunda fila la opción &quot;<strong>Tipo de Documento Destino</strong>&quot; y seleccione en la columna &quot;<strong>Valor Consulta</strong>&quot; el tipo de documento destino, para este ejemplo el tipo de documento destino es &quot;<strong>Retención de IVA Cuentas por Pagar</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/docdestino.png" alt="Selección Tipo de Documento Destino"></p><p>Imagen 39. Selección Tipo de Documento Destino</p><p>Seleccione en la tercera fila la opción &quot;<strong>Fecha Contable</strong>&quot; y seleccione en la columna &quot;<strong>Valor Consulta</strong>&quot; la fecha en la que se realizo la retención, para este ejemplo la fecha es &quot;<strong>11/11/2020</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/fecha.png" alt="Selección Fecha Contable"></p><p>Imagen 40. Selección Fecha Contable</p><p>Seleccione la opción &quot;<strong>OK</strong>&quot; para realizar la busqueda filtrada por los campos seleccionados.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/opcionok.png" alt="Opción OK"></p><p>Imagen 41. Opción OK</p><p>Seleccione en la barra de herramientas de ADempiere el icono &quot;<strong>Imprimir</strong>&quot;, para imprimir el documento de retención buscado.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/imprimir.png" alt="Opción Imprimir"></p><p>Imagen 42. Opción Imprimir</p><p>Podrá apreciar el documento de retención de la siguiente manera.</p><p><img src="/assets/img/docs/lve/procedures/withholding-management/resources/doc.png" alt="Documento de Retención"></p><p>Imagen 43. Documento de Retención</p>',143)],i={},t=(0,a(13860).Z)(i,[["render",function(e,o){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},72292:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-61c3fedc","path":"/docs/lve/procedures/withholding-management/withholding-iva/withholding-iva.html","title":"Configuración Esencial de la Retención de IVA","lang":"es-ES","frontmatter":{"title":"Configuración Esencial de la Retención de IVA","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Retenciones"],"article":false,"summary":"Configuración Esencial de la Retención de IVA La configuración esencial de las retenciones en ADempiere, permite que sea ejecutada la estimación de la retención a un socio del nego","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/withholding-management/withholding-iva/withholding-iva.html"}],["meta",{"property":"og:title","content":"Configuración Esencial de la Retención de IVA"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-02T14:35:53.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Retenciones"}],["meta",{"property":"article:modified_time","content":"2023-08-02T14:35:53.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Configuración Esencial de la Retención de IVA","slug":"configuracion-esencial-de-la-retencion-de-iva","children":[]},{"level":2,"title":"Configuración del Socio de Negocio","slug":"configuracion-del-socio-de-negocio","children":[]},{"level":2,"title":"Ejecución de la Estimación de Retenciones","slug":"ejecucion-de-la-estimacion-de-retenciones","children":[]},{"level":2,"title":"Generar Retención de IVA Fiscal","slug":"generar-retencion-de-iva-fiscal","children":[]}],"git":{"createdTime":1687290742000,"updatedTime":1690986953000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.14,"words":2142},"filePathRelative":"docs/lve/procedures/withholding-management/withholding-iva/withholding-iva.md","localizedDate":"20 de junio de 2023"}')}}]);