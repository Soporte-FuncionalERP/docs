"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30841],{69445:(e,i,a)=>{a.r(i),a.d(i,{default:()=>n});var l=a(78e3);const t=[(0,l.uE)('<h2 id="cambios-menores" tabindex="-1"><a class="header-anchor" href="#cambios-menores" aria-hidden="true">#</a> Cambios menores</h2><pre><code>- Se remueve configuración financiera para uso basado en core de ADempiere\n- Se elimina validación de tipo de documento en pagos\n</code></pre><h2 id="detalles-tecnicos" tabindex="-1"><a class="header-anchor" href="#detalles-tecnicos" aria-hidden="true">#</a> Detalles Técnicos</h2><ul><li>CST-STD: Just a little change that set client from role when a token is generated from a role. This prevent a &quot;Token Not Found&quot; message</li><li>Cash-Management: Remove Functionality Setup Implementation for replace by core setup</li><li>Consigned-Material: Remove: Functionality Setup Implementation for replace by core setup</li><li>Currency-Convert-Documents: Functionality Setup Implementation for replace by core setup</li><li>Farmer-Assistance-Program: Functionality Setup Implementation for replace by core setup</li><li>RethinkDB-Replicator-Client: Functionality Setup Implementation for replace by core setup</li><li>Third-Party-Access: Add Deploy for Third Party Access</li><li>Exchange-Operation-System: Rename validators from org.spin.model.validator.ConversionRate to org.spin.eos.model.validator.ConversionRate and org.spin.model.validator.ExchangeOperationSystem to org.spin.eos.model.validator.ExchangeOperationSystem</li><li>FiscalPrinter: Add Deploy for Fiscal Printer</li><li>RawMaterialReceipt: Add Deploy for Raw Material Receipt</li><li>Sales-Force-Management: Add Deploy for Sales force Managhement</li><li>Delivery-Management-Service: Add Deploy for Delivery Management Service</li><li>Travel-Agency-Management: Add Deploy for Travel Agency Management</li><li>Withholding: Add Deploy for Withholding engine</li><li>LVE: Se agrega configuración para LVE</li></ul><h2 id="nota-critica" tabindex="-1"><a class="header-anchor" href="#nota-critica" aria-hidden="true">#</a> Nota Crítica</h2><ul><li><p>Se deben aplicar los siguientes XML&#39;s:</p><ul><li><p>ADempiereBase:</p><ul><li>06730_Add_references_to_Financial_Management.xml</li><li>06870_Add_Third_Party_Access_Token_Generator.xml</li><li>07250_Fixed_translation_for_summary_menu.xml</li></ul></li><li><p>Consigned-Material: 07120_Add_Setup_for_consigned_Material.xml</p></li><li><p>Exchange-Operation-System: 07290_Add_Setup_for_Exchange_Operation_System.xml</p></li><li><p>Cash-Management: 06940_Add_Functionality_Setup.xml</p></li><li><p>Currency-Convert-Documents: 004_Add_Setup_for_Currency_Type_by_Document.xml</p></li><li><p>Farmer-Assistance-Program: 06940_Add_Functionality_setup.xml</p></li><li><p>RethinkDB-Replicator-Client: 06940_Add_Setup_for_Queue.xml</p></li><li><p>Third-Party-Access: 05860_Add_Setup_for_Third_Party_Access.xml</p></li><li><p>FiscalPrinter: 07020_Add_Setup_for_fiscal_Printer.xml</p></li><li><p>RawMaterialReceipt: 06500_Add_Setup_for_Raw_Material_Receipt.xml</p></li><li><p>Sales-Force-Management: 06530_Add_Setup_for_Sales_force_Management.xml</p></li><li><p>Delivery-Management-Service: 06410_Add_Setup_for_Delivery_Management_Service.xml</p></li><li><p>Travel-Agency-Management: 05830_Add_Setup_for_Travel_Agency_Management.xml</p></li><li><p>Withholding: 042_Add_Setup_for_Withholding.xml</p></li><li><p>LVE: 098_Se_agrega_Configuracion_para_LVE.xml</p></li></ul></li><li><p>Antes de actualizar el binario de ADempiere se debe eliminar el validador de modelo de los siguientes proyectos:</p><ul><li>Consigned-Material</li><li>Exchange-Operation-System</li><li>Cash-Management</li><li>Currency-Convert-Documents</li><li>Farmer-Assistance-Program</li><li>RethinkDB-Replicator-Client</li><li>Third-Party-Access</li><li>FiscalPrinter</li><li>RawMaterialReceipt</li><li>Sales-Force-Management</li><li>Delivery-Management-Service</li><li>Travel-Agency-Management</li><li>Withholding</li><li>LVE</li></ul></li><li><p>Después de Eliminar los validadores de modelo se deben aplicar los setup&#39;s de cada una de las funcionalidades</p></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li><p>ADempiereBase:</p><ul><li>Versión de Liberación: 3.9.3-rs-4.0</li></ul></li><li><p>CST-STD</p><ul><li>Versión de Liberación: rs-19.2</li></ul></li><li><p>Consigned-Material: 1.1.1</p></li><li><p>Exchange-Operation-System: 1.1.3</p></li><li><p>Cash-Management: 1.0.4</p></li><li><p>Currency-Convert-Documents: 1.0.3</p></li><li><p>Farmer-Assistance-Program: 1.0.3</p></li><li><p>RethinkDB-Replicator-Client: 1.0.7</p></li><li><p>Third-Party-Access: 1.0.1</p></li><li><p>FiscalPrinter: 1.3.1</p></li><li><p>RawMaterialReceipt: 1.0.4</p></li><li><p>Sales-Force-Management: 1.0.2</p></li><li><p>Delivery-Management-Service: 1.0.1</p></li><li><p>Travel-Agency-Management: 1.0.5</p></li><li><p>Withholding: 1.0.5</p></li><li><p>LVE: 1.2.3</p></li></ul>',8)],r={},n=(0,a(13860).Z)(r,[["render",function(e,i){return(0,l.wg)(),(0,l.iD)("div",null,t)}]])},35575:(e,i,a)=>{a.r(i),a.d(i,{data:()=>l});const l=JSON.parse('{"key":"v-41a09955","path":"/downloads/updates/rs-1.x/rs-15.x/rs-15.5.html","title":"rs-15.5","lang":"es-ES","frontmatter":{"title":"rs-15.5","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-15.5"],"article":false,"summary":"Cambios menores Se remueve configuración financiera para uso basado en core de ADempiere; Se elimina validación de tipo de documento en pagos; Detalles Técnicos CST-STD: Just a lit","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-1.x/rs-15.x/rs-15.5.html"}],["meta",{"property":"og:title","content":"rs-15.5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-12T20:26:48.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-15.5"}],["meta",{"property":"article:modified_time","content":"2023-06-12T20:26:48.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Cambios menores","slug":"cambios-menores","children":[]},{"level":2,"title":"Detalles Técnicos","slug":"detalles-tecnicos","children":[]},{"level":2,"title":"Nota Crítica","slug":"nota-critica","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]}],"git":{"createdTime":1686601608000,"updatedTime":1686601608000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"downloads/updates/rs-1.x/rs-15.x/rs-15.5.md","localizedDate":"12 de junio de 2023"}')}}]);