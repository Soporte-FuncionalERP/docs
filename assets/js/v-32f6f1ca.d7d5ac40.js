"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10581],{3398:(e,a,o)=>{o.r(a),o.d(a,{default:()=>c});var t=o(78e3);const r=(0,t.uE)('<h1 id="importacion" tabindex="-1"><a class="header-anchor" href="#importacion" aria-hidden="true">#</a> <strong>Importación</strong></h1><p>Dicha importación tiene como consecuencia para la empresa nacional la generación de gastos aduanales, sujetos al pago de tributos o al amparo de las franquicias correspondientes.</p><p><strong>Expediente de Importación</strong></p><p>El expediente de importación representa la agrupación fiscal para un proceso de importación y es quién da paso al proceso de importación.</p><ul><li>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Importación y Exportación</strong>&quot; y luego seleccione la ventana &quot;<strong>Expediente de Importación/Exportación</strong>&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/menu1.png" alt="Menu Import"></p><p>Imagen 1. Menú de ADempiere</p><ul><li>Seleccione el tipo de documento **&quot;Expediente de Importación&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/tipodocimport.png" alt="Tipo de Documento Import"></p><p>Imagen 2. Tipo de Documento</p><ul><li>Introduzca la fecha del expediente.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/fechadocimport.png" alt="Fecha de Documento Import"></p><p>Imagen 3. Fecha de Documento</p><ul><li>Introduzca el número del expediente asignado en el campo <strong>Número de Documento</strong>.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/ndocumentoimport.png" alt="Número de Documento Import"></p><p>Imagen 4. Fecha de Documento</p><ul><li>Introduzca la moneda en la cuál gestionará el expediente, es decir, la moneda de la compra de la mercancía.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/monedaimport.png" alt="Moneda de Documento Import"></p><p>Imagen 5. Moneda de Documento</p><p>Introduzca el tipo de conversión en la cuál gestionará el expediente, recuerde que generalmente es el tipo de cambio de curso legal.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/tipoconvimport.png" alt="Tipo de Cambio de Documento Import"></p><p>Imagen 6. Tipo de Cambio de Documento</p><div class="custom-container info"><p class="custom-container-title">Nota</p><p>El campo <strong>Moneda de Fiscal</strong> es la moneda de curso legal y es cargada automáticamente.</p></div><p>Vaya a la siguiente pestaña <strong>Tipo de Conversión Negociada</strong>, para establecer la tasa asignada al expediente de importación.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/pestanatcimport.png" alt="Pestaña Tasa de Conversión"></p><p>Imagen 7. Tipo de Cambio de Documento</p><p>Indique el monto de la tasa de cambio asignada al expediente de importación.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/tasacambioimport.png" alt="Tasa de Cambio de Documento Import"></p><p>Imagen 8. Tipo de Cambio de Documento</p><ul><li>Vea el expediente generado en el campo <strong>Expediente Generado</strong>, este registro es el valor utilizado para consultar los registros en reportes administrativos y contables.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/expgeneradoimport.png" alt="Expediente Generado"></p><p>Imagen 9. Tipo de Cambio de Documento</p><div class="custom-container info"><p class="custom-container-title">Nota</p><p>Tome en cuenta que esta &#39;&#39;tasa de cambio&#39;&#39; será tasa con la que cada documento imputado en la importación es convertido, es decir al establecer el expediente en un documento, automáticamente será establecida la tasa negociada.</p></div><ul><li>Proceda a completar el documento para que su expediente tenga validez en los documentos que fungen como costo CIF o costo FOB.</li></ul><p>A continuación se detalla los campos que son actualizados de manera automática:</p><ul><li><p><strong>Monto Base Ordenado:</strong> El campo aumenta al completar una orden de compra asociada al <strong>Expediente</strong>, al igual que actualiza la pestaña <strong>Ordenes Relacionadas</strong>.</p></li><li><p><strong>Cantidad de Ordenes:</strong> El campo aumenta al completar una orden de compra asociada al <strong>Expediente</strong>.</p></li><li><p><strong>Monto Neto Ordenado:</strong> El campo aumenta al completar una orden de compra asociada al <strong>Expediente</strong>.</p></li><li><p><strong>Impuesto Ordenado:</strong> El campo aumenta al completar una orden de compra asociada al <strong>Expediente</strong>, al igual que actualiza la pestaña <strong>Facturas Relacionadas</strong>.</p></li><li><p><strong>Cantidad de facturas:</strong> El campo aumenta al completar las facturas asociadas al <strong>Expediente</strong>.</p></li><li><p><strong>Monto Neto Facturado:</strong> El campo aumenta al completar las facturas asociadas al <strong>Expediente</strong>.</p></li><li><p><strong>Impuesto Facturado:</strong> El campo aumenta al completar las facturas asociadas al <strong>Expediente</strong>.</p></li><li><p><strong>Total del Impuesto:</strong> El campo aumenta al completar los pagos asociados al <strong>Expediente</strong>, al igual que actualiza la pestaña <strong>Pagos Relacionados</strong>.</p></li><li><p><strong>Cantidad de pagos:</strong> El campo aumenta al completar los pagos asociados al <strong>Expediente</strong></p></li><li><p><strong>Monto Pagado:</strong> El campo aumenta al completar los pagos asociados al <strong>Expediente</strong></p></li></ul><p><strong>Orden de Compra de Importación</strong></p><ul><li>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Compras</strong>&quot; y luego seleccione la ventana &quot;<strong>Órdenes de Compra</strong>&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/menu1.png" alt="Menú de ADempiere 1"></p><p>Imagen 10. Menú de ADempiere</p><ul><li>Realice el procedimiento regular para realizar una orden de compra, explicado en el material <strong>&#39;&#39;Orden de compra&#39;&#39;</strong>.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/orden1.png" alt="Orden de Compra sin Completar"></p><p>Imagen 11. Orden de Compra Importación sin Completar</p><ul><li>Asigne el expediente creado anteriormente en el campo <strong>Expediente Importación/Exportación</strong>.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/ocexpgeneradoimport.png" alt="Expediente de OC"></p><p>Imagen 12. Expediente de Importación</p><div class="custom-container info"><p class="custom-container-title">¡Importante!</p><p>Al colocar el expediente se establece el &#39;&#39;tipo de conversión negociado&#39;&#39; y el &#39;&#39;Expediente Generado&#39;&#39;.</p></div><ul><li>Seleccione la opción &quot;<strong>Completar</strong>&quot;, ubicada en la parte inferior derecha del documento.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/completar1.png" alt="Opción Completar 1"></p><p>Imagen 13. Opción Completar Documento</p><ul><li>Seleccione la acción &quot;<strong>Completar</strong>&quot; y la opción &quot;<strong>OK</strong>&quot; para completar el documento &quot;<strong>Orden de Compra</strong>&quot;.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/accion1.png" alt=" Acción Completar"></p><p>Imagen 14. Acción Completar</p><ul><li>Podrá visualizar en la parte inferior de la orden de compra, el campo en estado &quot;<strong>Completo</strong>&quot; y el resultado de la conversión configurada anteriormente.</li></ul><p><img src="/assets/img/docs/lve/procedures/import/resources/resultado1.png" alt="Orden de Compra Completa"></p><p>Imagen 15. Orden de Compra Completa</p><p><strong>Documento por Pagar de Mercancía</strong></p><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Compras</strong>&quot; y luego seleccione la ventana &quot;<strong>Documentos por Pagar</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/menu4.png" alt="Menú de ADempiere 4"></p><p>Imagen 16. Menú de ADempiere</p><p>Realice el procedimiento regular para realizar un documento por pagar desde una Orden de Compra, explicado en el material <strong>&#39;&#39;Documento por pagar&#39;&#39;</strong>.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/facturaimpor.png" alt="Factura de Importación"></p><p>Imagen 17. Factura de Cuentas por Pagar Importación</p><div class="custom-container info"><p class="custom-container-title">¡Importante!</p><p>Seleccione el tipo de documento: <strong>Factura de Cuentas por Pagar Importación</strong>, para que este documento afecte la base del IVA.</p></div><p>Asigne el expediente creaado anteriormente en el campo <strong>Expediente Importación/Exportación</strong>.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png" alt="Expediente Factura CXP"></p><p>Imagen 18. Expediente de Importación</p><div class="custom-container info"><p class="custom-container-title">Nota</p><p>Al crear desde la orden de compra establecerá el <strong>expediente de Importación</strong> asociado a la orden de compra, y establece el <strong>tipo de conversión negociado</strong>.</p></div><p>Vea el expediente creaado anteriormente en el campo <strong>Expediente Importación/Exportación</strong>.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png" alt="Expediente Factura CXP"></p><p>Imagen 18. Expediente de Importación</p><p><strong>Documento por Pagar de Costos CIF</strong></p><p>Ubique y seleccione en el menú de ADempiere, la carpeta &quot;<strong>Gestión de Compras</strong>&quot; y luego seleccione la ventana &quot;<strong>Documentos por Pagar</strong>&quot;.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/menu4.png" alt="Menú de ADempiere 4"></p><p>Imagen 19. Menú de ADempiere</p>',75),n=(0,t.Uk)("Realice el procedimiento regular para realizar un documento por pagar desde una Orden de Compra, explicado en el material "),p=(0,t.Uk)("Documento por pagar"),s=(0,t.uE)('<p><img src="/assets/img/docs/lve/procedures/import/resources/facturaimpor.png" alt="Factura de Importación"></p><p>Imagen 20. Factura de Cuentas por Pagar Importación</p><div class="custom-container info"><p class="custom-container-title">¡Importante!</p><p>Seleccione el tipo de documento: &#39;&#39;Facturas Gastos Internacionales Importación&#39;&#39;, para que este documento afecte la base del IVA.</p></div><p>Asigne el expediente creaado anteriormente en el campo <strong>Expediente Importación/Exportación</strong>.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png" alt="Expediente Factura CXP"></p><p>Imagen 21. Expediente de Importación</p><p>Asigne la factura relacionada o factura de la mercacía creada anteriormente en el campo <strong>Factura Relacionada</strong>.</p><p><img src="/assets/img/docs/lve/procedures/import/resources/facturarelacionimport.png" alt="Factura Relacionada"></p><p>Imagen 22. Factura Relacionada</p><div class="custom-container info"><p class="custom-container-title">Nota:</p><p>Al colocar el expediente se establece el <strong>tipo de conversión negociado</strong>.</p></div><p><strong>Cancelación de Factura</strong></p><p>Realice el procedimiento regular para realizar un documento de selección de pagos desde una factura de cuentas por pagar, explicado en el material <strong>&#39;&#39;Selección de pago&#39;&#39;</strong>, esto cancelará el pasivo con el proveedor de mercancía.</p>',12),i={},c=(0,o(13860).Z)(i,[["render",function(e,a){const o=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[r,(0,t._)("p",null,[n,(0,t.Wm)(o,{to:"/about/services/products/requisition-to-invoice.html"},{default:(0,t.w5)((()=>[p])),_:1})]),s])}]])},77633:(e,a,o)=>{o.r(a),o.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-32f6f1ca","path":"/docs/lve/procedures/import/import.html","title":"Importación","lang":"es-ES","frontmatter":{"title":"Importación","icon":"app","category":["Localización Venezuela"],"star":9,"sticky":9,"tag":["Procedimientos","Gestión de Importación"],"article":false,"summary":"Importación =============== Dicha importación tiene como consecuencia para la empresa nacional la generación de gastos aduanales, sujetos al pago de tributos o al amparo de las fra","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/lve/procedures/import/import.html"}],["meta",{"property":"og:title","content":"Importación"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-09-20T19:27:38.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Procedimientos"}],["meta",{"property":"article:tag","content":"Gestión de Importación"}],["meta",{"property":"article:modified_time","content":"2023-09-20T19:27:38.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1686950623000,"updatedTime":1695238058000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":2},{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1},{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.23,"words":1270},"filePathRelative":"docs/lve/procedures/import/import.md","localizedDate":"16 de junio de 2023"}')}}]);