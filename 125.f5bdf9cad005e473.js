"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[125],{7125:(G,p,o)=>{o.r(p),o.d(p,{ImagesModule:()=>R});var d=o(6895),f=o(1635),e=o(4650);const M=["video"],S=["canvas"];function T(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.rotateVideoInput(!0))}),e.qZA()}}class u{constructor(s,t,a){this._mimeType=null,this._imageAsBase64=null,this._imageAsDataUrl=null,this._imageData=null,this._mimeType=t,this._imageAsDataUrl=s,this._imageData=a}static getDataFromDataUrl(s,t){return s.replace(`data:${t};base64,`,"")}get imageAsBase64(){return this._imageAsBase64?this._imageAsBase64:this._imageAsBase64=u.getDataFromDataUrl(this._imageAsDataUrl,this._mimeType)}get imageAsDataUrl(){return this._imageAsDataUrl}get imageData(){return this._imageData}}class v{static getAvailableVideoInputs(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?new Promise((s,t)=>{navigator.mediaDevices.enumerateDevices().then(a=>{s(a.filter(n=>"videoinput"===n.kind))}).catch(a=>{t(a.message||a)})}):Promise.reject("enumerateDevices() not supported.")}}let b=(()=>{class i{constructor(){this.width=640,this.height=480,this.videoOptions=i.DEFAULT_VIDEO_OPTIONS,this.allowCameraSwitch=!0,this.captureImageData=!1,this.imageType=i.DEFAULT_IMAGE_TYPE,this.imageQuality=i.DEFAULT_IMAGE_QUALITY,this.imageCapture=new e.vpe,this.initError=new e.vpe,this.imageClick=new e.vpe,this.cameraSwitched=new e.vpe,this.availableVideoInputs=[],this.videoInitialized=!1,this.activeVideoInputIndex=-1,this.mediaStream=null,this.activeVideoSettings=null}set trigger(t){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.triggerSubscription=t.subscribe(()=>{this.takeSnapshot()})}set switchCamera(t){this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe(),this.switchCameraSubscription=t.subscribe(a=>{"string"==typeof a?this.switchToVideoInput(a):this.rotateVideoInput(!1!==a)})}static getMediaConstraintsForDevice(t,a){const n=a||this.DEFAULT_VIDEO_OPTIONS;return t&&(n.deviceId={exact:t}),n}static getDeviceIdFromMediaStreamTrack(t){if(t.getSettings&&t.getSettings()&&t.getSettings().deviceId)return t.getSettings().deviceId;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().deviceId){const a=t.getConstraints().deviceId;return i.getValueFromConstrainDOMString(a)}}static getFacingModeFromMediaStreamTrack(t){if(t){if(t.getSettings&&t.getSettings()&&t.getSettings().facingMode)return t.getSettings().facingMode;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().facingMode){const a=t.getConstraints().facingMode;return i.getValueFromConstrainDOMString(a)}}}static isUserFacing(t){const a=i.getFacingModeFromMediaStreamTrack(t);return!!a&&"user"===a.toLowerCase()}static getValueFromConstrainDOMString(t){if(t){if(t instanceof String)return String(t);if(Array.isArray(t)&&Array(t).length>0)return String(t[0]);if("object"==typeof t){if(t.exact)return String(t.exact);if(t.ideal)return String(t.ideal)}}return null}ngAfterViewInit(){this.detectAvailableDevices().then(()=>{this.switchToVideoInput(null)}).catch(t=>{this.initError.next({message:t}),this.switchToVideoInput(null)})}ngOnDestroy(){this.stopMediaTracks(),this.unsubscribeFromSubscriptions()}takeSnapshot(){const t=this.nativeVideoElement,a={width:this.width,height:this.height};t.videoWidth&&(a.width=t.videoWidth,a.height=t.videoHeight);const n=this.canvas.nativeElement;n.width=a.width,n.height=a.height;const r=n.getContext("2d");r.drawImage(t,0,0);const c=this.imageType?this.imageType:i.DEFAULT_IMAGE_TYPE,h=n.toDataURL(c,this.imageQuality?this.imageQuality:i.DEFAULT_IMAGE_QUALITY);let I=null;this.captureImageData&&(I=r.getImageData(0,0,n.width,n.height)),this.imageCapture.next(new u(h,c,I))}rotateVideoInput(t){this.availableVideoInputs&&this.availableVideoInputs.length>1&&this.switchToVideoInput(this.availableVideoInputs[(this.activeVideoInputIndex+(t?1:this.availableVideoInputs.length-1))%this.availableVideoInputs.length].deviceId)}switchToVideoInput(t){this.videoInitialized=!1,this.stopMediaTracks(),this.initWebcam(t,this.videoOptions)}videoResize(){}get videoWidth(){const t=this.getVideoAspectRatio();return Math.min(this.width,this.height*t)}get videoHeight(){const t=this.getVideoAspectRatio();return Math.min(this.height,this.width/t)}get videoStyleClasses(){let t="";return this.isMirrorImage()&&(t+="mirrored "),t.trim()}get nativeVideoElement(){return this.video.nativeElement}getVideoAspectRatio(){const t=this.nativeVideoElement;return t.videoWidth&&t.videoWidth>0&&t.videoHeight&&t.videoHeight>0?t.videoWidth/t.videoHeight:this.width/this.height}initWebcam(t,a){const n=this.nativeVideoElement;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const r=i.getMediaConstraintsForDevice(t,a);navigator.mediaDevices.getUserMedia({video:r}).then(c=>{this.mediaStream=c,n.srcObject=c,n.play(),this.activeVideoSettings=c.getVideoTracks()[0].getSettings();const g=i.getDeviceIdFromMediaStreamTrack(c.getVideoTracks()[0]);this.cameraSwitched.next(g),this.detectAvailableDevices().then(()=>{this.activeVideoInputIndex=g?this.availableVideoInputs.findIndex(h=>h.deviceId===g):-1,this.videoInitialized=!0}).catch(()=>{this.activeVideoInputIndex=-1,this.videoInitialized=!0})}).catch(c=>{this.initError.next({message:c.message,mediaStreamError:c})})}else this.initError.next({message:"Cannot read UserMedia from MediaDevices."})}getActiveVideoTrack(){return this.mediaStream?this.mediaStream.getVideoTracks()[0]:null}isMirrorImage(){if(!this.getActiveVideoTrack())return!1;{let t="auto";switch(this.mirrorImage&&("string"==typeof this.mirrorImage?t=String(this.mirrorImage).toLowerCase():this.mirrorImage.x&&(t=this.mirrorImage.x.toLowerCase())),t){case"always":return!0;case"never":return!1}}return i.isUserFacing(this.getActiveVideoTrack())}stopMediaTracks(){this.mediaStream&&this.mediaStream.getTracks&&(this.nativeVideoElement.pause(),this.mediaStream.getTracks().forEach(t=>t.stop()))}unsubscribeFromSubscriptions(){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe()}detectAvailableDevices(){return new Promise((t,a)=>{v.getAvailableVideoInputs().then(n=>{this.availableVideoInputs=n,t(n)}).catch(n=>{this.availableVideoInputs=[],a(n)})})}}return i.DEFAULT_VIDEO_OPTIONS={facingMode:"environment"},i.DEFAULT_IMAGE_TYPE="image/jpeg",i.DEFAULT_IMAGE_QUALITY=.92,i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["webcam"]],viewQuery:function(t,a){if(1&t&&(e.Gf(M,7),e.Gf(S,7)),2&t){let n;e.iGM(n=e.CRH())&&(a.video=n.first),e.iGM(n=e.CRH())&&(a.canvas=n.first)}},inputs:{width:"width",height:"height",videoOptions:"videoOptions",allowCameraSwitch:"allowCameraSwitch",mirrorImage:"mirrorImage",captureImageData:"captureImageData",imageType:"imageType",imageQuality:"imageQuality",trigger:"trigger",switchCamera:"switchCamera"},outputs:{imageCapture:"imageCapture",initError:"initError",imageClick:"imageClick",cameraSwitched:"cameraSwitched"},decls:6,vars:7,consts:[[1,"webcam-wrapper",3,"click"],["autoplay","","muted","","playsinline","",3,"width","height","resize"],["video",""],["class","camera-switch",3,"click",4,"ngIf"],[3,"width","height"],["canvas",""],[1,"camera-switch",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return a.imageClick.next()}),e.TgZ(1,"video",1,2),e.NdJ("resize",function(){return a.videoResize()}),e.qZA(),e.YNc(3,T,1,0,"div",3),e._UZ(4,"canvas",4,5),e.qZA()),2&t&&(e.xp6(1),e.Tol(a.videoStyleClasses),e.Q6J("width",a.videoWidth)("height",a.videoHeight),e.xp6(2),e.Q6J("ngIf",a.allowCameraSwitch&&a.availableVideoInputs.length>1&&a.videoInitialized),e.xp6(1),e.Q6J("width",a.width)("height",a.height))},dependencies:[d.O5],styles:[".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:#0000002e}"]}),i})(),D=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez]]}),i})();var w=o(7579),y=o(7392),m=o(5412),x=o(266),A=o(4859);function _(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"webcam",20),e.NdJ("imageCapture",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleImage(n))})("cameraSwitched",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.cameraSwitched(n))})("initError",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleInitError(n))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("trigger",t.triggerObservable)("switchCamera",t.nextWebcamObservable)("imageQuality",1)}}function E(i,s){if(1&i&&e._UZ(0,"img",21),2&i){const t=e.oxw();e.Q6J("src",t.imagenWebcam.imageAsDataUrl,e.LSH)}}function V(i,s){1&i&&e._UZ(0,"img",22)}function Z(i,s){1&i&&(e.TgZ(0,"h4"),e._uU(1,"Messages:"),e.qZA())}function N(i,s){if(1&i&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&i){const t=s.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,t))}}let F=(()=>{class i{constructor(){this.title="camaraapp",this.mostrarWebcam=!0,this.permitirCambioCamara=!0,this.multiplesCamarasDisponibles=!1,this.opcionesVideo={},this.errors=[],this.trigger=new w.x,this.siguienteWebcam=new w.x}ngOnInit(){v.getAvailableVideoInputs().then(t=>{this.multiplesCamarasDisponibles=t&&t.length>1})}triggerCaptura(){this.trigger.next()}toggleWebcam(){this.mostrarWebcam=!this.mostrarWebcam}handleInitError(t){this.errors.push(t)}showNextWebcam(t){this.siguienteWebcam.next(t)}handleImage(t){console.info("Imagen de la webcam recibida: ",t),this.imagenWebcam=t}cameraSwitched(t){console.log("Dispositivo Actual: "+t),this.dispositivoId=t}get triggerObservable(){return this.trigger.asObservable()}get nextWebcamObservable(){return this.siguienteWebcam.asObservable()}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-capture-modal"]],decls:38,vars:7,consts:[[1,"p-4","bg-gray-100"],[1,"text-center","text-3xl","font-bold","text-gray-500"],[1,"mat-typography","h-full","max-h-[60vh]"],[1,"flex","flex-col","gap-3","items-center","h-full"],[1,"flex","w-full","gap-8","justify-around","pt-2","flex-col","lg:flex-row"],[1,"text-center"],[1,"w-full","h-full","lg:w-[30rem]","lg:h-[20rem]","2xl:w-[35rem]","2xl:h-[25rem]"],[1,"w-full","h-full","object-cover"],[3,"trigger","switchCamera","imageQuality","imageCapture","cameraSwitched","initError",4,"ngIf"],[1,"flex","md:flex-col","gap-6","flex-row","items-center","h-full","justify-center"],["mat-mini-fab","","color","primary","matTooltip","Capturar",3,"click"],["mat-mini-fab","","color","primary","matTooltip","Cambiar Webcam",3,"click"],["mat-mini-fab","","color","primary","matTooltip","Siguiente Webcam",3,"disabled","click"],["class","w-full h-full object-cover",3,"src",4,"ngIf","ngIfElse"],["base",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["align","end",1,"p-3"],["mat-button","","mat-dialog-close",""],["mat-button","","mat-raised-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"],[3,"trigger","switchCamera","imageQuality","imageCapture","cameraSwitched","initError"],[1,"w-full","h-full","object-cover",3,"src"],["src","./assets/OIP.png",1,"w-full","h-full","object-contain"]],template:function(a,n){if(1&a&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2,"Capturar imagen"),e.qZA()(),e._UZ(3,"hr"),e.TgZ(4,"mat-dialog-content",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"h2"),e._uU(9,"C\xe1mara"),e.qZA(),e.TgZ(10,"div",6)(11,"div",7),e.YNc(12,_,1,3,"webcam",8),e.qZA()()(),e.TgZ(13,"div",9)(14,"button",10),e.NdJ("click",function(){return n.triggerCaptura()}),e.TgZ(15,"mat-icon"),e._uU(16,"camera_alt"),e.qZA()(),e.TgZ(17,"button",11),e.NdJ("click",function(){return n.toggleWebcam()}),e.TgZ(18,"mat-icon"),e._uU(19,"shuffle"),e.qZA()(),e.TgZ(20,"button",12),e.NdJ("click",function(){return n.showNextWebcam(!0)}),e.TgZ(21,"mat-icon"),e._uU(22,"skip_next"),e.qZA()()(),e.TgZ(23,"div",5)(24,"h2"),e._uU(25,"Imagen"),e.qZA(),e.TgZ(26,"div",6),e.YNc(27,E,1,1,"img",13),e.YNc(28,V,1,0,"ng-template",null,14,e.W1O),e.qZA()()(),e.TgZ(30,"div"),e.YNc(31,Z,2,0,"h4",15),e.YNc(32,N,4,3,"ul",16),e.qZA()()(),e.TgZ(33,"mat-dialog-actions",17)(34,"button",18),e._uU(35,"Cancel"),e.qZA(),e.TgZ(36,"button",19),e._uU(37,"Guardar"),e.qZA()()),2&a){const r=e.MAs(29);e.xp6(12),e.Q6J("ngIf",n.mostrarWebcam),e.xp6(8),e.Q6J("disabled",!n.multiplesCamarasDisponibles),e.xp6(7),e.Q6J("ngIf",n.imagenWebcam)("ngIfElse",r),e.xp6(4),e.Q6J("ngIf",n.errors.length>0),e.xp6(1),e.Q6J("ngForOf",n.errors),e.xp6(4),e.Q6J("mat-dialog-close",!0)}},dependencies:[d.sg,d.O5,y.Hw,m.ZT,m.xY,m.H8,x.gM,A.lW,A.nh,b,d.Ts]})}return i})();const l={icon:"",fns:()=>{},isModalFunction:!1,componentModal:"",modalMetadata:{width:"100%"}};let U=(()=>{class i{constructor(){}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var J=o(5482),O=o(2518);const Q=[{path:"captacion",component:(()=>{class i{constructor(t,a){this.captureService=t,this.dialog=a,this.dataTest=[{headerName:"No. Carn\xe9",dataKeyName:"ci",tooltipMsg:"",iconData:l},{headerName:"Nombres",dataKeyName:"name",tooltipMsg:"",iconData:l},{headerName:"Apellidos",dataKeyName:"apellidos",tooltipMsg:"",iconData:l},{headerName:"Fecha Nacimiento",dataKeyName:"date",tooltipMsg:"",iconData:l},{headerName:"Sexo",dataKeyName:"sexo",tooltipMsg:"",iconData:l},{headerName:"Rol Universitario",dataKeyName:"rol",tooltipMsg:"",iconData:l},{headerName:"\xc1rea",dataKeyName:"area",tooltipMsg:"",iconData:l},{headerName:"Residente",dataKeyName:"residente",tooltipMsg:"",iconData:l},{headerName:"Acci\xf3n",dataKeyName:"action",tooltipMsg:"Capturar imagen",isIcon:!0,iconData:{icon:"camera_alt",fns:()=>{},isModalFunction:!0,componentModal:F,modalMetadata:{width:"80vw"}}}],this.elemtData=[{ci:"9547158555",name:"Juan",apellidos:"Perez Soto",date:"12/12/1990",sexo:"Masculino",rol:"Estudiante",area:"Facultad 2",residente:"Si"},{ci:"8745158555",name:"Camilo",apellidos:"Torres Quintana",date:"12/12/1990",sexo:"Masculino",rol:"Trabajdor",area:"Facultad 1",residente:"Si"},{ci:"0214755575",name:"Jose Juan",apellidos:"Manuel Sanchez",date:"12/12/1990",sexo:"Masculino",rol:"Estudiante",area:"Facultad 2",residente:"Si"}]}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(U),e.Y36(m.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-captation"]],decls:5,vars:2,consts:[[1,"flex","flex-wrap","w-full","flex-col","justify-center"],[1,"w-full","px-4"],[1,"mt-6","mb-3","border-b-1","border-gray-200"],[3,"dataSource","dataColum"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-card-filter")(3,"hr",2)(4,"app-card-mat-table",3),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("dataSource",n.elemtData)("dataColum",n.dataTest))},dependencies:[J.d,O.q],encapsulation:2})}return i})()},{path:"",redirectTo:"captacion",pathMatch:"full"}];let k=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[f.Bz.forChild(Q),f.Bz]})}return i})();var W=o(8108),C=o(4006),z=o(1254);let R=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[d.ez,k,W.m,C.u5,C.UX,z.q,D]})}return i})()}}]);