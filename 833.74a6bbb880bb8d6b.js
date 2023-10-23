"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[833],{5833:(Q,h,r)=>{r.r(h),r.d(h,{SeguridadModule:()=>I});var b=r(6895),v=r(1635),l=r(4006),m=r(4949),c=r(5412),t=r(4650),d=r(9549),C=r(4144),p=r(4859);let x=(()=>{class s{constructor(e,o,i){this.data=e,this.dialogRef=o,this.fb=i}ngOnInit(){this.initForm()}save(){this.groupForm.valid&&this.dialogRef.close(this.groupForm.value)}initForm(){this.groupForm=this.fb.group({name:["",l.kI.required],permissions:[[]]}),this.data.group&&this.groupForm.patchValue(this.data.group)}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(c.WI),t.Y36(c.so),t.Y36(l.qu))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-group-form"]],decls:10,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"flex","flex-col"],["appearance","outline","floatLabel","auto"],["formControlName","name","matInput","","type","text"],["type","submit",1,"bg-gray-700","flex","justify-center","items-center","text-white","active:bg-red-700","font-bold","uppercase","text-xs","px-4","py-2","rounded","shadow","hover:shadow-md","outline-none","focus:outline-none","mr-1","ease-linear","transition-all","duration-150"],["mat-dialog-close","","mat-stroked-button","",1,"mt-3"]],template:function(o,i){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.save()}),t.TgZ(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"input",3),t.qZA(),t.TgZ(6,"button",4),t._uU(7," Guardar "),t.qZA(),t.TgZ(8,"button",5),t._uU(9," Cancelar "),t.qZA()()()),2&o&&t.Q6J("formGroup",i.groupForm)},dependencies:[d.KE,d.hX,C.Nt,c.ZT,p.lW,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:["input[_ngcontent-%COMP%]{box-shadow:none!important}"]})}return s})();var Z=r(8372),S=r(7009),y=r(529);let F=(()=>{class s{constructor(){this.getQueryParams=e=>{let o=new y.LE;if(e){if(Object.keys(e).length>0)for(const i in e)o=o.set(i,e[i]);return o}},this.getBody=e=>{const o=new FormData;if(e){if(Object.keys(e).length>0)for(const i in e)(null!==e[i]||void 0!==e[i])&&o.append(i,e[i]);return o}}}getDirtyValues(e){const o={};return Object.keys(e.controls).forEach(i=>{const n=e.controls[i];n.dirty&&(o[i]=n.controls?this.getDirtyValues(n):n.value)}),o}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),G=(()=>{class s{constructor(e,o){this.httpClient=e,this.utilService=o}getAll(e={}){const o=this.utilService.getQueryParams(e);return this.httpClient.get("https://localhost:3000/v1/permiso/",{params:o})}static#t=this.\u0275fac=function(o){return new(o||s)(t.LFG(y.eN),t.LFG(F))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var J=r(7392),g=r(3546),f=r(4633),_=r(6709),w=r(266);const U=["permissionsSelected"];function P(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"mat-list-option",21),t.NdJ("click",function(){const n=t.CHM(e).index,a=t.oxw();return t.KtG(a.selectGroup(n))}),t.TgZ(1,"div",22)(2,"h3"),t._uU(3),t.qZA(),t.TgZ(4,"div",23)(5,"button",24),t.NdJ("click",function(i){const a=t.CHM(e).$implicit,O=t.oxw();return i.stopPropagation(),t.KtG(O.delete(a))}),t.TgZ(6,"mat-icon"),t._uU(7,"delete"),t.qZA()()()()()}if(2&s){const e=u.$implicit,o=u.index,i=t.oxw();t.ekj("selectedGroup",i.selectedIndex===o),t.xp6(3),t.Oqu(e.name)}}function k(s,u){if(1&s&&(t.TgZ(0,"mat-list-option",25),t._uU(1),t.qZA()),2&s){const e=u.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.nombre)}}const N=[{path:"seguridad",component:(()=>{class s{constructor(e,o,i){this.dialog=e,this.snackBar=o,this.permissionService=i,this.selectedIndex=0,this.permissionFilterControl=new l.NI(""),this.changed=!1}ngOnInit(){this.loadGroups(),this.loadPermissions(),this.listenFilter()}selectGroup(e){this.changed?this.dialog.open(m.$,{data:{title:"Confirmaci\xf3n",msg:"Hay cambios sin guardar. Al cambiar de grupo perder\xe1 los cambios realizados. \xbfDesea continuar?"}}).afterClosed().subscribe(i=>{i&&(this.selectedIndex=e,this.selectedGroup=this.groups[e],this.selectedPermissions=this.selectedGroup.permissions.map(n=>n.id),this.changed=!1)}):(this.selectedIndex=e,this.selectedGroup=this.groups[e],this.selectedPermissions=this.selectedGroup.permissions.map(o=>o.id),console.log(this.selectedPermissions))}changeSelection(){this.changed=!0}saveChanges(){this.changed&&this.dialog.open(m.$,{data:{title:"Confirmaci\xf3n",msg:"\xbfEst\xe1 seguro que desea guardar los cambios realizados?"}}).afterClosed().subscribe(o=>{})}newGroup(){this.dialog.open(x).afterClosed().subscribe(o=>{})}toggleSelectAll(e){this.changed=!0,e?this.permissionsSelected.selectAll():this.permissionsSelected.deselectAll()}restore(){this.selectedPermissions=this.selectedGroup.permissions.map(e=>e.id),this.changed=!1}loadGroups(){}loadPermissions(){this.permissionService.getAll().subscribe(e=>{this.permissions=e.results,this.filteredPermissions=this.permissions})}listenFilter(){this.permissionFilterControl.valueChanges.pipe((0,Z.b)(500)).subscribe(e=>{this.filteredPermissions=e?this.permissions.filter(o=>o.nombre.toLowerCase().includes(e.toLowerCase())):this.permissions})}edit(e){this.dialog.open(x,{data:{group:e}}).afterClosed().subscribe(i=>{})}delete(e){this.dialog.open(m.$,{data:{title:"Confirmaci\xf3n",msg:"\xbfEst\xe1 seguro que desea eliminar este grupo?"}}).afterClosed().subscribe(i=>{})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(c.uw),t.Y36(S.ux),t.Y36(G))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-seguridad"]],viewQuery:function(o,i){if(1&o&&t.Gf(U,5),2&o){let n;t.iGM(n=t.CRH())&&(i.permissionsSelected=n.first)}},decls:41,vars:8,consts:[[1,"flex","flex-wrap","w-full","flex-col","justify-center"],[1,"w-full","pb-4"],[1,"flex","gap-6"],["color","primary","mat-stroked-button","",1,"my-2","my-md-0","mr-md-3",3,"disabled","click"],["color","primary","mat-raised-button","",3,"disabled","click"],[1,"flex","gap-6","w-full"],[1,"w-6/12"],["type","button",1,"bg-gray-700","flex","justify-center","items-center","text-white","active:bg-red-700","font-bold","uppercase","text-xs","px-4","py-2","rounded","shadow","hover:shadow-md","outline-none","focus:outline-none","mr-1","ease-linear","transition-all","duration-150",3,"click"],[2,"max-height","600px","overflow","auto",3,"multiple"],["mat-subheader",""],[3,"selectedGroup","click",4,"ngFor","ngForOf"],[1,"permission-card"],[1,"flex","w-full","items-center","justify-between"],["color","primary",2,"margin-left","-16px",3,"change"],["all",""],[1,"text-muted","font-weight-bold"],["appearance","fill","floatLabel","auto"],["matInput","","type","text",3,"formControl"],[2,"max-height","600px","overflow","auto",3,"ngModel","selectionChange","ngModelChange"],["permissionsSelected",""],["checkboxPosition","before","color","primary",3,"value",4,"ngFor","ngForOf"],[3,"click"],[1,"flex","w-full","justify-between","items-center"],[1,"flex"],["color","warn","mat-icon-button","","matTooltip","Eliminar",1,"float-right",3,"click"],["checkboxPosition","before","color","primary",3,"value"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return i.restore()}),t.TgZ(4,"mat-icon"),t._uU(5,"undo"),t.qZA(),t._uU(6," Reestablecer "),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return i.saveChanges()}),t.TgZ(8,"mat-icon"),t._uU(9,"save"),t.qZA(),t._uU(10," Guardar Cambios "),t.qZA()(),t.TgZ(11,"div")(12,"div",5)(13,"div",6)(14,"mat-card")(15,"mat-card-content")(16,"button",7),t.NdJ("click",function(){return i.newGroup()}),t.TgZ(17,"mat-icon"),t._uU(18,"add"),t.qZA(),t._uU(19," Nuevo grupo "),t.qZA(),t.TgZ(20,"mat-selection-list",8)(21,"div",9),t._uU(22,"Grupos"),t.qZA(),t.YNc(23,P,8,3,"mat-list-option",10),t.qZA()()()(),t.TgZ(24,"div",6)(25,"mat-card",11)(26,"mat-card-header")(27,"div",12)(28,"mat-checkbox",13,14),t.NdJ("change",function(a){return i.toggleSelectAll(a)}),t._uU(30),t.qZA(),t.TgZ(31,"div",15),t._uU(32," Permisos "),t.qZA(),t.TgZ(33,"mat-form-field",16)(34,"mat-label"),t._uU(35,"Filtrar"),t.qZA(),t._UZ(36,"input",17),t.qZA()()(),t.TgZ(37,"mat-card-content")(38,"mat-selection-list",18,19),t.NdJ("selectionChange",function(){return i.changeSelection()})("ngModelChange",function(a){return i.selectedPermissions=a}),t.YNc(40,k,2,2,"mat-list-option",20),t.qZA()()()()()()()()),2&o){const n=t.MAs(29);t.xp6(3),t.Q6J("disabled",!i.changed||null),t.xp6(4),t.Q6J("disabled",!i.changed||null),t.xp6(13),t.Q6J("multiple",!1),t.xp6(3),t.Q6J("ngForOf",i.groups),t.xp6(7),t.hij("",n.checked?"Deseleccionar ":"Seleccionar "," todos "),t.xp6(6),t.Q6J("formControl",i.permissionFilterControl),t.xp6(2),t.Q6J("ngModel",i.selectedPermissions),t.xp6(2),t.Q6J("ngForOf",i.filteredPermissions)}},dependencies:[b.sg,d.KE,d.hX,J.Hw,g.a8,g.dn,g.dk,f.Ub,f.vS,f.gs,C.Nt,_.oG,w.gM,p.lW,p.RK,l.Fj,l.JJ,l.On,l.oH]})}return s})()},{path:"",redirectTo:"seguridad",pathMatch:"full"}];let M=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(N),v.Bz]})}return s})();var j=r(1254);let I=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[b.ez,j.q,l.u5,l.UX,M]})}return s})()}}]);