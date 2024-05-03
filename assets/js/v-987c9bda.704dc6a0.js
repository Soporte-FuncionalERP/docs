"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50069],{13602:(e,i,o)=>{o.r(i),o.d(i,{default:()=>a});var n=o(26440);const t=[(0,n.uE)('<p><strong>Fecha de Liberación:</strong> 2021-09-14</p><h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><ul><li>Se agrega soporte a productos que se manejan según su peso como embutidos</li></ul><h2 id="correcciones" tabindex="-1"><a class="header-anchor" href="#correcciones" aria-hidden="true">#</a> Correcciones</h2><ul><li><p>Error reportado donde al procesar una orden de venta tipo POS existe un problema con SQL: org.adempiere.exceptions.AdempiereException: org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = &#39;Y&#39; AND IsSimulation=&#39;N&#39;AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = &#39;Y&#39; AND IsSimulation=&#39;N&#39;AND DocStatus IN (?,?)) org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = &#39;Y&#39; AND IsSimulation=&#39;N&#39;AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = &#39;Y&#39; AND IsSimulation=&#39;N&#39;AND DocStatus IN (?,?))<br> org.compiere.model.ModelValidationEngine</p></li><li><p>Corrección de unidad de medida en Orden de Salida / Recibo Express: Colocaba la unidad de medida del documento de orden pero las cantidadesen la unidad de medida del producto</p></li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>adempiere-gRPC-Server: Fixed error with Point of Sales flagged as Shared POS visible for any organization</p></li><li><p>LVE: Corrección de error con SQL al validar si un documento está generado en retenciones de cuentas por cobrar</p></li><li><p>CST-STD: Fixed error with converted value for Outbound Order</p></li><li><p>Warehouse-Management-System-Improvements: Add support to Product Managed by Weight and print picking list based on document type</p><ul><li>Add IsManagedByWeight flag for Product</li><li>Add IsCloseRelatedOrders flag for Document Type</li></ul></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-25.4</li><li>Consigned-Material: 1.2.4</li><li>Exchange-Operation-System: 1.1.7</li><li>Cash-Management: 1.0.4</li><li>Currency-Convert-Documents: 1.0.5</li><li>Farmer-Assistance-Program: 1.1.6</li><li>RethinkDB-Replicator-Client: 1.1.2</li><li>Third-Party-Access: 1.0.2</li><li>FiscalPrinter: 1.3.2</li><li>Sales-Force-Management: 1.0.2</li><li>Delivery-Management-Service: 1.0.1</li><li>Travel-Agency-Management: 1.0.8</li><li>Withholding: 1.0.9</li><li>Additional-Reports: 1.0.3</li><li>Migration-Tools: 1.0.3</li><li>LVE: 1.3.9</li><li>Performance-Analysis: 1.0.2</li><li>Queue-Manager: 1.0.4</li><li>Notification-Queue: 1.0.4</li><li>Point-Of-Sales-Improvements: 1.1.5</li><li>Kafka-Replicator-Client: 1.0.6</li><li>Core-Tools: 1.1.1</li><li>Get-Weight:1.0.8</li><li>Record-Weight: 1.0.3</li><li>Raw-Material-Receipt: 1.0.9</li><li>Additional-Reports: 1.0.7</li><li>adempiere-gRPC-Server: rt-23.3</li><li>Material-Management-Improvements: 1.0.0</li><li>Warehouse-Management-System-Improvements: 1.0.6</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar los XML&#39;s:</p><ul><li><p>Warehouse-Management-System-Improvements:</p><ul><li>09350_Add_IsPrintPickList_flag_for_Document_Type_of_Outbound.xml</li><li>09360_Add_ProductIsManagedByWeight_message.xml</li></ul></li></ul></li><li><p>Verificar exista el mensaje <strong>ProductIsManagedByWeight</strong></p></li><li><p>Verificar que la columna <strong>IsPrintPickList</strong> se encuentre sincronizada en la tabla <strong>C_DocType</strong></p></li><li><p>Verificar proceso de despacho de producto a granel al establecer las cantidades desde el registro de peso, esto debe funcionar sin problemas después del cambio</p></li></ul>',11)],r={},a=(0,o(71212).Z)(r,[["render",function(e,i){return(0,n.wg)(),(0,n.iD)("div",null,t)}]])},50991:(e,i,o)=>{o.r(i),o.d(i,{data:()=>n});const n=JSON.parse('{"key":"v-987c9bda","path":"/downloads/updates/rs-2.x/rs-27.x/rs-27.4.html","title":"rs-27.4","lang":"es-ES","frontmatter":{"title":"rs-27.4","icon":"app","category":"Actualizaciones","star":9,"sticky":9,"article":false,"description":"Fecha de Liberación: 2021-09-14 Mejoras Se agrega soporte a productos que se manejan según su peso como embutidos Correcciones Error reportado donde al procesar una orden de venta tipo POS existe un problema con SQL: org.adempiere.exceptions.AdempiereException: org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.compiere.model.ModelValidationEngine Corrección de unidad de medida en Orden de Salida / Recibo Express: Colocaba la unidad de medida del documento de orden pero las cantidadesen la unidad de medida del producto","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-2.x/rs-27.x/rs-27.4.html"}],["meta",{"property":"og:title","content":"rs-27.4"}],["meta",{"property":"og:description","content":"Fecha de Liberación: 2021-09-14 Mejoras Se agrega soporte a productos que se manejan según su peso como embutidos Correcciones Error reportado donde al procesar una orden de venta tipo POS existe un problema con SQL: org.adempiere.exceptions.AdempiereException: org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.compiere.model.ModelValidationEngine Corrección de unidad de medida en Orden de Salida / Recibo Express: Colocaba la unidad de medida del documento de orden pero las cantidadesen la unidad de medida del producto"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-06-09T21:08:14.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-06-09T21:08:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"rs-27.4\\",\\"description\\":\\"Fecha de Liberación: 2021-09-14 Mejoras Se agrega soporte a productos que se manejan según su peso como embutidos Correcciones Error reportado donde al procesar una orden de venta tipo POS existe un problema con SQL: org.adempiere.exceptions.AdempiereException: org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.compiere.model.ModelValidationEngine Corrección de unidad de medida en Orden de Salida / Recibo Express: Colocaba la unidad de medida del documento de orden pero las cantidadesen la unidad de medida del producto\\"}"]]},"headers":[{"level":2,"title":"Mejoras","slug":"mejoras","link":"#mejoras","children":[]},{"level":2,"title":"Correcciones","slug":"correcciones","link":"#correcciones","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","link":"#detalle-tecnico","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","link":"#soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","link":"#requerimientos","children":[]}],"git":{"createdTime":1686344894000,"updatedTime":1686344894000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.59,"words":477},"filePathRelative":"downloads/updates/rs-2.x/rs-27.x/rs-27.4.md","localizedDate":"9 de junio de 2023","excerpt":"<p><strong>Fecha de Liberación:</strong> 2021-09-14</p>\\n<h2> Mejoras</h2>\\n<ul>\\n<li>Se agrega soporte a productos que se manejan según su peso como embutidos</li>\\n</ul>\\n<h2> Correcciones</h2>\\n<ul>\\n<li>\\n<p>Error reportado donde al procesar una orden de venta tipo POS existe un problema con SQL: org.adempiere.exceptions.AdempiereException: org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?)) org.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))NullPointerExceptionorg.adempiere.exceptions.DBException: org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block, SQL=SELECT 1 FROM WH_Withholding WHERE (SourceInvoice_ID = ? AND WH_Definition_ID = ? AND WH_Setting_ID = ? AND Processed = \'Y\' AND IsSimulation=\'N\'AND DocStatus IN (?,?))<br>\\norg.compiere.model.ModelValidationEngine</p>\\n</li>\\n<li>\\n<p>Corrección de unidad de medida en Orden de Salida / Recibo Express: Colocaba la unidad de medida del documento de orden pero las cantidadesen la unidad de medida del producto</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);