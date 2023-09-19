"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83773],{76883:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});var i=r(78e3);const n=[(0,i.uE)('<h2 id="¿que-es-un-punto-de-venta" tabindex="-1"><a class="header-anchor" href="#¿que-es-un-punto-de-venta" aria-hidden="true">#</a> ¿Qué es un Punto de Venta?</h2><p>Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ADempiere para tiendas es tu herramienta inteligente y agil para conectar todas las transacciones de ventas que mantienen a tu negocio. <img src="https://github.com/erpcya/docs/assets/9578152/7861fef2-2a3d-4c3e-a8e1-706aadca2411" alt="POS (1)"></p><h2 id="¿que-beneficio-traera-a-tu-empresa" tabindex="-1"><a class="header-anchor" href="#¿que-beneficio-traera-a-tu-empresa" aria-hidden="true">#</a> ¿Qué Beneficio Traerá a Tu Empresa?</h2><ul><li>Operación agil y eficiente</li><li>Rapidez y seguridad</li><li>Gestión multimonedas</li><li>Gestión Tributaria</li><li>Reportes Variados de Cierres</li><li>Ofrecer más opciones de pago</li><li>Obtener datos precisos de tus ventas</li><li>Mejorar la experiencia del cliente</li></ul><h2 id="¿que-ofrece-adempiere" tabindex="-1"><a class="header-anchor" href="#¿que-ofrece-adempiere" aria-hidden="true">#</a> ¿Qué ofrece ADempiere?</h2><p>ADempiere ofrece una herramienta con la que tendrás acceso a tu tienda desde cualquier lugar.</p><ul><li>Controla las ventas de tus empleados.</li><li>Además de informes en tiempo real, consulta informes diarios, semanales o mensuales.</li><li>Consulta tus pedidos recibidos y por recibir.</li><li>¿Quieres ver cómo va tu negocio? ¡Hazlo desde cualquier lugar!</li><li>Generar una factura de forma directa en cualquier moneda.</li><li>Cobrar en diferentes metodos de pagos.</li><li>Generación de IGTF.</li><li>Carga de Comprobante de IVA.</li><li>Devoluciones Totales y Parciales.</li><li>Arqueo de Cajas.</li></ul><p>El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una venta en ADempiere mediante su punto de venta, en su versión 3.9.4 para la localización Venezuela.</p><h2 id="¿que-consideraciones-debe-tomar-en-cuenta" tabindex="-1"><a class="header-anchor" href="#¿que-consideraciones-debe-tomar-en-cuenta" aria-hidden="true">#</a> ¿Qué Consideraciones Debe Tomar en Cuenta?</h2><ul><li>El asesor debe estar configurado en el terminal. <ul><li>Debe tener acceso a la organización.</li><li>Debe tener acceso al terminal.</li></ul></li><li>El Cajero debe estar configurado en el terminal. <ul><li>Debe tener acceso a la organización.</li><li>Debe tener acceso al terminal.</li></ul></li><li>La tasa del día debe ser creada con antelación.</li><li>El arqueo de caja del día anterior debe haberlo completado.</li><li>El Cajero debe aperturar la caja con el dinero asignado como fondo de caja.</li></ul><h3 id="gestion-de-asesor" tabindex="-1"><a class="header-anchor" href="#gestion-de-asesor" aria-hidden="true">#</a> Gestión de Asesor</h3><h4 id="seleccion-de-terminal-asignado" tabindex="-1"><a class="header-anchor" href="#seleccion-de-terminal-asignado" aria-hidden="true">#</a> Selección de Terminal Asignado</h4><h4 id="crear-cliente" tabindex="-1"><a class="header-anchor" href="#crear-cliente" aria-hidden="true">#</a> Crear Cliente</h4><h4 id="registro-de-nuevo-pedido" tabindex="-1"><a class="header-anchor" href="#registro-de-nuevo-pedido" aria-hidden="true">#</a> Registro de Nuevo Pedido</h4><h4 id="consulta-de-producto" tabindex="-1"><a class="header-anchor" href="#consulta-de-producto" aria-hidden="true">#</a> Consulta de Producto</h4><h3 id="gestion-de-cajero" tabindex="-1"><a class="header-anchor" href="#gestion-de-cajero" aria-hidden="true">#</a> Gestión de Cajero</h3><h4 id="seleccion-de-terminal-asignado-1" tabindex="-1"><a class="header-anchor" href="#seleccion-de-terminal-asignado-1" aria-hidden="true">#</a> Selección de Terminal Asignado</h4><h4 id="apertura-de-caja" tabindex="-1"><a class="header-anchor" href="#apertura-de-caja" aria-hidden="true">#</a> Apertura de Caja</h4><h5 id="apertura-desde-un-fondo-de-caja" tabindex="-1"><a class="header-anchor" href="#apertura-desde-un-fondo-de-caja" aria-hidden="true">#</a> Apertura Desde un Fondo de Caja</h5><h5 id="crear-fondo-de-caja" tabindex="-1"><a class="header-anchor" href="#crear-fondo-de-caja" aria-hidden="true">#</a> Crear Fondo de Caja</h5><h4 id="seleccion-de-pedido" tabindex="-1"><a class="header-anchor" href="#seleccion-de-pedido" aria-hidden="true">#</a> Selección de Pedido</h4><h4 id="cambios-de-atributos" tabindex="-1"><a class="header-anchor" href="#cambios-de-atributos" aria-hidden="true">#</a> Cambios de Atributos</h4><h4 id="cobranza" tabindex="-1"><a class="header-anchor" href="#cobranza" aria-hidden="true">#</a> Cobranza</h4><h5 id="efectivo" tabindex="-1"><a class="header-anchor" href="#efectivo" aria-hidden="true">#</a> Efectivo</h5><h5 id="transferencia" tabindex="-1"><a class="header-anchor" href="#transferencia" aria-hidden="true">#</a> Transferencia</h5><h5 id="tarjeta-de-credito" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-credito" aria-hidden="true">#</a> Tarjeta de Crédito</h5><h5 id="tarjeta-de-debito" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-debito" aria-hidden="true">#</a> Tarjeta de Débito</h5><h5 id="pago-movil" tabindex="-1"><a class="header-anchor" href="#pago-movil" aria-hidden="true">#</a> Pago Móvil</h5><h5 id="tarjeta-de-credito-1" tabindex="-1"><a class="header-anchor" href="#tarjeta-de-credito-1" aria-hidden="true">#</a> Tarjeta de Crédito</h5><h5 id="zelle" tabindex="-1"><a class="header-anchor" href="#zelle" aria-hidden="true">#</a> Zelle</h5><h5 id="credito" tabindex="-1"><a class="header-anchor" href="#credito" aria-hidden="true">#</a> Crédito</h5><h4 id="generacion-de-igtf" tabindex="-1"><a class="header-anchor" href="#generacion-de-igtf" aria-hidden="true">#</a> Generación de IGTF</h4><h4 id="carga-de-comprobante-de-iva" tabindex="-1"><a class="header-anchor" href="#carga-de-comprobante-de-iva" aria-hidden="true">#</a> Carga de Comprobante de IVA</h4><h4 id="consultas-de-ventas" tabindex="-1"><a class="header-anchor" href="#consultas-de-ventas" aria-hidden="true">#</a> Consultas de Ventas</h4><h5 id="por-facturar" tabindex="-1"><a class="header-anchor" href="#por-facturar" aria-hidden="true">#</a> Por Facturar</h5><h5 id="ventas-de-pasillo" tabindex="-1"><a class="header-anchor" href="#ventas-de-pasillo" aria-hidden="true">#</a> Ventas de Pasillo</h5><h5 id="a-credito" tabindex="-1"><a class="header-anchor" href="#a-credito" aria-hidden="true">#</a> A Crédito</h5><h5 id="por-entregar" tabindex="-1"><a class="header-anchor" href="#por-entregar" aria-hidden="true">#</a> Por Entregar</h5><h5 id="solo-completas" tabindex="-1"><a class="header-anchor" href="#solo-completas" aria-hidden="true">#</a> Solo Completas</h5><h5 id="propuestas" tabindex="-1"><a class="header-anchor" href="#propuestas" aria-hidden="true">#</a> Propuestas</h5><h5 id="anuladas" tabindex="-1"><a class="header-anchor" href="#anuladas" aria-hidden="true">#</a> Anuladas</h5><h5 id="cerradas" tabindex="-1"><a class="header-anchor" href="#cerradas" aria-hidden="true">#</a> Cerradas</h5><h5 id="devoluciones" tabindex="-1"><a class="header-anchor" href="#devoluciones" aria-hidden="true">#</a> Devoluciones</h5><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Orden de Ventas</strong>, por último seleccione la ventana <strong>Punto de Venta</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image304.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Punto de Venta</strong> en ADempiere.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image305.png" alt="Campo"></p><p>Imagen 2. Ventana Punto de Venta</p><p>Seleccione el icono <strong>Nueva Orden</strong>, ubicado en la barra de herramientas superior derecha.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image306.png" alt="Campo"></p><p>Imagen 3. Icono Registro Nueva Orden</p><p>Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:</p><p>Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image307.png" alt="Campo"></p><p>Imagen 4. Búsqueda de Cliente</p><p>Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image308.png" alt="Campo"></p><p>Imagen 4. Nuevo Cliente</p><p>Seleccione la opción <strong>Crear Nuevo Socio de Negocio</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image309.png" alt="Campo"></p><p>Imagen 5. Opción Nuevo Cliente</p><p>A continuación Seleccione la opción <strong>Crear Nuevo Socio de Negocio</strong>, y se desplegará la siguiente ventana.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image310.png" alt="Campo"></p><p>Imagen 6. Ventana Crear Socio de Negocio</p><p>A continuación indique el código del cliente (Cédula/RIF) en el campo <strong>Código</strong>.</p><p><img src="/assets/img/docs/sales-management/sam-sales-image311.png" alt="Campo"></p><p>Imagen 7. Código Socio de Negocio</p><p>Warning</p><p>ADempiere actualiza de modo automático el campo <strong>Número Identificación</strong>, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).</p><p>A continuación indique el nombre o razón social del cliente en el campo <strong>Nombre</strong>.</p><p>|Nombre Cliente|</p><p><img src="/assets/img/docs/sales-management/sam-sales-image312.png" alt="Campo"></p><p>Imagen 7. Nombre Socio de Negocio</p>',74)],t={},o=(0,r(13860).Z)(t,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,n)}]])},52655:(e,a,r)=>{r.r(a),r.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-366101b9","path":"/docs/sales-management/point.html","title":"Punto de Venta","lang":"es-ES","frontmatter":{"title":"Punto de Venta","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"¿Qué es un Punto de Venta? Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/sales-management/point.html"}],["meta",{"property":"og:title","content":"Punto de Venta"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-09-19T16:22:08.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-09-19T16:22:08.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"¿Qué es un Punto de Venta?","slug":"¿que-es-un-punto-de-venta","children":[]},{"level":2,"title":"¿Qué Beneficio Traerá a Tu Empresa?","slug":"¿que-beneficio-traera-a-tu-empresa","children":[]},{"level":2,"title":"¿Qué ofrece ADempiere?","slug":"¿que-ofrece-adempiere","children":[]},{"level":2,"title":"¿Qué Consideraciones Debe Tomar en Cuenta?","slug":"¿que-consideraciones-debe-tomar-en-cuenta","children":[{"level":3,"title":"Gestión de Asesor","slug":"gestion-de-asesor","children":[]},{"level":3,"title":"Gestión de Cajero","slug":"gestion-de-cajero","children":[]}]}],"git":{"createdTime":1678314887000,"updatedTime":1695140528000,"contributors":[{"name":"Waditza","email":"wdtz@users.noreply.github.com","commits":5},{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":2.33,"words":699},"filePathRelative":"docs/sales-management/point.md","localizedDate":"8 de marzo de 2023"}')}}]);