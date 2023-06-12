"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[48012],{88605:(e,i,r)=>{r.r(i),r.d(i,{default:()=>l});var a=r(78e3);const t=[(0,a.uE)('<h2 id="mejoras" tabindex="-1"><a class="header-anchor" href="#mejoras" aria-hidden="true">#</a> Mejoras</h2><pre><code>- Se disminuye el tiempo de espera entre ADempiere y el servidor de impresión fiscal\n- El envío del documento fiscal se convierte en un envío asíncrono\n- Se disminuye el consumo de memoria en espera de respuesta de impresora fiscal en ADempiere\n- Se elimina transacción bloqueante mientras se espera respuesta de documento\n</code></pre><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle técnico</h2><ul><li><p>FiscalPrinter-API:</p><ul><li>Se agrega soporte a envío de documentos a impresora sin espera prolongada (máximo 100 ms)</li><li>Se propaga error cuando no existe conexión con impresora</li></ul></li><li><p>FiscalPrinter:</p><ul><li>Se remueve el soporte a devolver datos de la impresión fiscal y el tiempo de espera prolongado</li><li>Se propaga error cuando no existe conexión con impresora</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Se agrega log al recibir documento desde un cliente</li></ul></li><li><p>FiscalPrinter-Listener:</p><ul><li>Soporte a la versión 1.3.3 de Fiscal Printer API</li></ul></li></ul><h2 id="nota-critica" tabindex="-1"><a class="header-anchor" href="#nota-critica" aria-hidden="true">#</a> Nota Crítica</h2><ul><li><p>Al montar la versión 1.2.6 de FiscalPrinter es obligatorio tener la versión de liberación rs-2.2 de FiscalPrinter-Listener, si no se tiene configurado el listener los documentos impresos no serán actualizados</p></li><li><p>A partir de esta versión se debe cambiar la configuración de los documentos fiscales:</p><ul><li>La configuración &quot;Imprimir Después de Completar&quot; se debe deshacer</li><li>La forma de imprimir un documento fiscal será a través del botón / proceso de &quot;Imprimir Factura En Impresora Fiscal&quot;</li><li>Desde el POS se usará el &quot;Manejador de Impresión de Tickets&quot; &quot;Print Ticket Handler&quot;</li></ul></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>Consigned-Material: 1.0.8</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><p>Antes de aplicar esta versión se debe consiferar tener los siguientes servicios</p><ul><li><p>FiscalPrinter:</p><ul><li>Se agrega propagación de error cuando no hay conexión al servidor de impresión fiscal</li></ul></li><li><p>FiscalPrinter-Server:</p><ul><li>Log al recibir un documento</li></ul></li><li><p>FiscalPrinter-Listener:</p><ul><li>Reconexión con el servidor</li></ul></li></ul>',11)],o={},l=(0,r(13860).Z)(o,[["render",function(e,i){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},43705:(e,i,r)=>{r.r(i),r.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-0c3b3194","path":"/downloads/updates/rs-1.x/rs-14.x/rs-14.6.html","title":"rs-14.6","lang":"es-ES","frontmatter":{"title":"rs-14.6","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-14.6"],"article":false,"summary":"Mejoras Se disminuye el tiempo de espera entre ADempiere y el servidor de impresión fiscal; El envío del documento fiscal se convierte en un envío asíncrono; Se disminuye el consum","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-1.x/rs-14.x/rs-14.6.html"}],["meta",{"property":"og:title","content":"rs-14.6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-12T20:26:48.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-14.6"}],["meta",{"property":"article:modified_time","content":"2023-06-12T20:26:48.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Mejoras","slug":"mejoras","children":[]},{"level":2,"title":"Detalle técnico","slug":"detalle-tecnico","children":[]},{"level":2,"title":"Nota Crítica","slug":"nota-critica","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686601608000,"updatedTime":1686601608000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"downloads/updates/rs-1.x/rs-14.x/rs-14.6.md","localizedDate":"12 de junio de 2023"}')}}]);