!function(e,o){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?o(e,!0):function(e){if(!e.document)throw new Error("Okra requires a window with a document");return o(e)}:o(e)}("undefined"!=typeof window?window:this,function(t,e){var o={loader:null,iframe:null,baseUrl:"https://app.okra.ng",url:"",onSuccess:null,id:null,onClose:null,init:function(){var e=this;e.addOverlay(),e.setIframe(),e.listen()},buildWithShortUrl:function(e){var o=this;o.id="okra-iframe-"+Math.floor(1e4*Math.random()),o.url=o.baseUrl+"?ref="+e.short_url+"&isIframe=true&source=integration",o.onSuccess=e&&e.onSuccess,o.onClose=e&&e.onClose,o.onError=e&&e.onError,o.beforeClose=e&&e.beforeClose,o.init()},buildWithOptions:function(e){var o=this;o.id="okra-iframe-"+Math.floor(1e4*Math.random());var r={products:e.products||"",logo:e.logo||"",clientName:e.name||e.clientName||"",color:e.color||"",limit:e.limit||"",filter:e.filter||{industry_type:"all",banks:[]},isCorporate:e.isCorporate||!1,connectMessage:e.connectMessage||"",guarantors:e.guarantors&&e.guarantors||{status:!1,message:"",number:0},payment:e.payment||{},widget_success:e.widget_success||"",widget_failed:e.widget_failed||"",callback_url:e.callback_url||"",currency:e.currency||"",exp:e.exp||"",success_title:e.success_title||"",success_message:e.success_message||"",redirect_url:e.redirect_url||"",key:e.key||"",token:e.token||"",options:e.options||{},source:"integration",env:"production"===e.env?"production":"production-sandbox",record:e.record||e.record_id||""};o.url=o.baseUrl+"?&isIframe=true&withOptions=true",o.onSuccess=e&&e.onSuccess,o.onClose=e&&e.onClose,o.onError=e&&e.onError,o.beforeClose=e&&e.beforeClose,o.init(!0),o.sendObj(r)},sendObj:function(e){var o=this,r=document.getElementById(o.iframe.id);r.onload=function(){r.contentWindow.postMessage(e,o.url)}},listen:function(){var o=this,r=document.getElementById(o.iframe.id);t.addEventListener("message",function(e){e.origin.startsWith(o.baseUrl)&&(e&&e.data&&e.data.close?(t.removeEventListener("message",o.closeIframe(r)),o.onClose&&o.onClose()):e&&e.data&&e.data&&e.data.success?o.onSuccess&&o.onSuccess(e&&e.data):e&&e.data&&e.data&&e.data.error?o.onError&&o.onError(e&&e.data):e&&e.data&&e.data&&e.data.beforeClose&&o.beforeClose&&o.beforeClose(e&&e.data))})},addOverlay:function(){var e=document.createElement("div");e.id="okra-base-"+Math.floor(1e4*Math.random()),e.style.cssText="background-color: rgba(0, 0, 0, 0.9); position: fixed;width: 100%; height: 100%; top: 0; left: 0; z-index: 9999999; overflow: hidden;",this.loader=e,document.body.appendChild(e)},removeOverlay:function(){this.loader.id&&(document.querySelector("#"+this.loader.id).outerHTML="")},setIframe:function(){var e=document.createElement("iframe");e.setAttribute("frameBorder","0"),e.setAttribute("allowtransparency","true"),e.id=this.id,e.name="okra-popup-"+e.id,e.style.cssText="z-index: 9999999999999999999999;background: transparent; border: 0px none transparent;overflow-x: hidden;overflow-y: hidden;margin: 0;padding: 0;-webkit-tap-highlight-color: transparent;-webkit-touch-callout: none;position: fixed;left: 0;top: 0;width: 100%;height: 100%;",e.src=this.url,this.iframe=e,document.body.appendChild(e),this.removeOverlay()},closeIframe:function(e){var o;!e.outerHTML||(o=e.previousSibling)&&this.iframe&&(this.iframe="",o.parentElement.removeChild(e))}},r=t.Okra;return o.noConflict=function(e){return e&&t.Okra===o&&(t.Okra=r),o},void 0===e&&(t.Okra=o),o});