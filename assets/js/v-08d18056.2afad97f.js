"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[79632],{52742:(e,r,i)=>{i.r(r),i.d(r,{default:()=>t});var l=i(78e3);const a=[(0,l.uE)('<h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><ul><li>Ahora se puede ver el error que retorna la impresora fiscal o el servidor de impresora fiscal en ADempiere (Ventana <strong>Log de Impresora Fiscal</strong>)</li></ul><h2 id="correcciones" tabindex="-1"><a class="header-anchor" href="#correcciones" aria-hidden="true">#</a> Correcciones</h2><ul><li>Los documentos multi-moneda que no son de consignación ya no recalculan precio en función de documento de orden de compra</li></ul><h2 id="nota-critica" tabindex="-1"><a class="header-anchor" href="#nota-critica" aria-hidden="true">#</a> Nota Crítica</h2><ul><li><p>Se deben aplicar los siguientes XML&#39;s</p><ul><li>FiscalPrinter: 07010_Add_Log_for_Fiscal_Printer.xml</li></ul></li><li><p>Al montar la versión 1.2.6^ de FiscalPrinter es obligatorio tener la versión de liberación rs-2.2^ de FiscalPrinter-Listener, si no se tiene configurado el listener los documentos impresos no serán actualizados</p></li><li><p>A partir de esta versión se debe cambiar la configuración de los documentos fiscales:</p><ul><li>La configuración &quot;Imprimir Después de Completar&quot; se debe deshacer</li><li>La forma de imprimir un documento fiscal será a través del botón / proceso de &quot;Imprimir Factura En Impresora Fiscal&quot;</li><li>Desde el POS se usará el &quot;Manejador de Impresión de Tickets&quot; &quot;Print Ticket Handler&quot;</li></ul></li><li><p>Para los documentos de consignación:</p><ul><li>La conversión de moneda se hará únicamente para los documentos por pagar que contengan una moneda diferente a la orden de compra y que la orden de compra esté marcada como entrega directa</li><li>Todos los documentos de orden de compra de consignación deben tener obligatoriamente marcado en verdadero el campo <strong>&quot;Entrega Directa&quot;</strong></li></ul></li></ul><h2 id="informacion-de-interes" tabindex="-1"><a class="header-anchor" href="#informacion-de-interes" aria-hidden="true">#</a> Información de Interés</h2><p>Antes de aplicar esta versión se debe considerar tener los siguientes servicios</p><ul><li><p>FiscalPrinter:</p><ul><li>Se agrega soporte para registro de log de impresora fiscal</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Envío de log al recibir un documento y no encontrar impresora fiscal</li></ul></li><li><p>FiscalPrinter-Listener:</p><ul><li>Soporte para guardar el log de la impresora fiscal en ADempiere</li></ul></li><li><p>ConsignedMaterial:</p><ul><li>Corrige problema con documentos por pagar multi-moneda</li></ul></li></ul><h2 id="detalles-tecnicos" tabindex="-1"><a class="header-anchor" href="#detalles-tecnicos" aria-hidden="true">#</a> Detalles técnicos</h2><ul><li><p>FiscalPrinter:</p><ul><li>Add support to FiscalPrinter API 1.3.0 version</li><li>Add Log support for printer response</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Add support to send response to listener when a printer not found</li></ul></li><li><p>FiscalPrinter-Listener:</p><ul><li><p>Add support to FiscalPrinter API 1.3.0 version</p><ul><li>Add Log support for printer response</li></ul></li></ul></li><li><p>ConsignedMaterial:</p><ul><li>Fixed error with multi-currency for DropShip document</li></ul></li><li><p>CST-STD:</p><ul><li>Fixed error with default organization for Sales Order updated from POS</li></ul></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li><p>FiscalPrinter:</p><ul><li>Librería: org.erpya.adempiere.fiscal-printer.fiscal-printer-client</li><li>Versión: 1.3.0^</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Versión de Liberación: rs-3.8</li></ul></li><li><p>FiscalPrinter-Listener:</p><ul><li>Versión de Liberación: rs-3.0</li></ul></li><li><p>CST-STD:</p><ul><li>Versión de Liberación: rs-18.7</li></ul></li><li><p>ConsignedMaterial:</p><ul><li>Librería: org.erpya.adempiere.tools.consigned-material</li><li>Versión: 1.0.9</li></ul></li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><p>Antes de aplicar esta versión se debe aplicar los siguientes XML&#39;s</p><ul><li><p>Consigned-Material:</p><ul><li>07270_Fixed_duplicated_Purchase_Orders.xml</li></ul></li></ul>',16)],o={},t=(0,i(13860).Z)(o,[["render",function(e,r){return(0,l.wg)(),(0,l.iD)("div",null,a)}]])},52897:(e,r,i)=>{i.r(r),i.d(r,{data:()=>l});const l=JSON.parse('{"key":"v-08d18056","path":"/downloads/updates/rs-1.x/rs-14.x/rs-14.7.html","title":"rs-14.7","lang":"es-ES","frontmatter":{"title":"rs-14.7","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-14.7"],"article":false,"summary":"Mejoras Ahora se puede ver el error que retorna la impresora fiscal o el servidor de impresora fiscal en ADempiere (Ventana Log de Impresora Fiscal); Correcciones Los documentos mu","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-1.x/rs-14.x/rs-14.7.html"}],["meta",{"property":"og:title","content":"rs-14.7"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-12T20:26:48.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-14.7"}],["meta",{"property":"article:modified_time","content":"2023-06-12T20:26:48.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Mejoras","slug":"mejoras","children":[]},{"level":2,"title":"Correcciones","slug":"correcciones","children":[]},{"level":2,"title":"Nota Crítica","slug":"nota-critica","children":[]},{"level":2,"title":"Información de Interés","slug":"informacion-de-interes","children":[]},{"level":2,"title":"Detalles técnicos","slug":"detalles-tecnicos","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686601608000,"updatedTime":1686601608000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"downloads/updates/rs-1.x/rs-14.x/rs-14.7.md","localizedDate":"12 de junio de 2023"}')}}]);