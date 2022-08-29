"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[235],{4235:(H,g,i)=>{i.r(g),i.d(g,{UserListModule:()=>j});var p=i(9808),h=i(1545),u=i(7850),a=i(4999),r=i(5620),d=i(3336),Z=i(1253),t=i(5e3),f=i(7322),C=i(7531),x=i(7423),l=i(2181),U=i(5245);function T(e,o){1&e&&(t.TgZ(0,"div",19)(1,"div",20)(2,"span",21),t._uU(3,"Loading..."),t.qZA()()())}function _(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Id "),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.id,". ")}}function v(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Name "),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function y(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Surname "),t.qZA())}function A(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.surname," ")}}function w(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," E-Mail "),t.qZA())}function N(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.email," ")}}function O(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Operations "),t.qZA())}const Y=function(e){return{element:e}};function D(e,o){if(1&e&&(t.TgZ(0,"td",23)(1,"button",24)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()()()),2&e){const n=o.$implicit;t.oxw();const s=t.MAs(30);t.xp6(1),t.Q6J("matMenuTriggerFor",s)("matMenuTriggerData",t.VKq(2,Y,n))}}function Q(e,o){1&e&&t._UZ(0,"tr",25)}function P(e,o){1&e&&t._UZ(0,"tr",26)}function R(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){t.oxw(2);const n=t.MAs(4);t.xp6(1),t.hij('No data matching the filter "',n.value,'"')}}function k(e,o){if(1&e&&(t.TgZ(0,"tr",27),t.YNc(1,R,2,1,"td",28),t.ALo(2,"async"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,!n.isLoading$))}}function J(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){const m=t.CHM(n).element;return t.oxw().onEditClick(m)}),t.TgZ(1,"span"),t._UZ(2,"i",31),t._uU(3," Edit "),t.qZA()(),t.TgZ(4,"button",32),t.NdJ("click",function(){const m=t.CHM(n).element;return t.oxw().onRemoveClick(m)}),t.TgZ(5,"span"),t._UZ(6,"i",33),t._uU(7," Remove "),t.qZA()()}}const S=function(e){return{"click-disabled":e}},F=function(){return[20,30,40]},$=[{path:"",component:(()=>{class e{constructor(n){this.store=n,this.displayedColumns=["id","name","surname","email","operations"],this.dataSource=new a.by,this.isLoading$=this.store.pipe((0,r.Ys)(d.aK)),this.error$=this.store.pipe((0,r.Ys)(d.Vm)),this.users$=this.store.pipe((0,r.Ys)(d.cn))}ngOnInit(){this.store.dispatch(Z.Rf())}ngAfterViewInit(){var n;null===(n=this.users$)||void 0===n||n.pipe().subscribe(s=>{this.dataSource=new a.by(s),this.dataSource.paginator=this.paginator})}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}onEditClick(n){console.log(n)}onRemoveClick(n){console.log(n)}ngOnDestroy(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-list"]],viewQuery:function(n,s){if(1&n&&t.Gf(u.NW,5),2&n){let c;t.iGM(c=t.CRH())&&(s.paginator=c.first)}},decls:32,vars:13,consts:[["appearance","standard"],["matInput","","placeholder","Ex. name",3,"keyup"],["input",""],["class","loading-spinner",4,"ngIf"],[2,"height","calc(100% - 123px)","overflow","auto",3,"ngClass"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","surname"],["matColumnDef","email"],["matColumnDef","operations"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["menu","matMenu"],["matMenuContent",""],[1,"loading-spinner"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","aria-label","operation-menu",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["class","mat-cell","colspan","4",4,"ngIf"],["colspan","4",1,"mat-cell"],["mat-menu-item","","disabled","",3,"click"],[1,"fa-solid","fa-pen-to-square",2,"margin-right","0.5rem"],["mat-menu-item","",3,"click"],[1,"fa-solid","fa-trash",2,"margin-right","0.5rem"]],template:function(n,s){1&n&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2,"Filter"),t.qZA(),t.TgZ(3,"input",1,2),t.NdJ("keyup",function(m){return s.applyFilter(m)}),t.qZA()(),t.YNc(5,T,4,0,"div",3),t.ALo(6,"async"),t.TgZ(7,"div",4),t.ALo(8,"async"),t.TgZ(9,"table",5),t.ynx(10,6),t.YNc(11,_,2,0,"th",7),t.YNc(12,L,2,1,"td",8),t.BQk(),t.ynx(13,9),t.YNc(14,v,2,0,"th",7),t.YNc(15,M,2,1,"td",8),t.BQk(),t.ynx(16,10),t.YNc(17,y,2,0,"th",7),t.YNc(18,A,2,1,"td",8),t.BQk(),t.ynx(19,11),t.YNc(20,w,2,0,"th",7),t.YNc(21,N,2,1,"td",8),t.BQk(),t.ynx(22,12),t.YNc(23,O,2,0,"th",7),t.YNc(24,D,4,4,"td",8),t.BQk(),t.YNc(25,Q,1,0,"tr",13),t.YNc(26,P,1,0,"tr",14),t.YNc(27,k,3,3,"tr",15),t.qZA()(),t._UZ(28,"mat-paginator",16),t.TgZ(29,"mat-menu",null,17),t.YNc(31,J,8,0,"ng-template",18),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,6,s.isLoading$)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,S,t.lcZ(8,8,s.isLoading$))),t.xp6(2),t.Q6J("dataSource",s.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(12,F)))},directives:[f.KE,f.hX,C.Nt,p.O5,p.mk,a.BZ,a.w1,a.fO,a.ge,a.Dz,a.ev,x.lW,l.p6,U.Hw,a.as,a.XQ,a.nj,a.Gk,a.Ee,u.NW,l.VK,l.KA,l.OP],pipes:[p.Ov],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:block;color:#565656!important;font-size:12px!important}table.mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:unset!important}.wrapper[_ngcontent-%COMP%]{height:100%;display:block}th[_ngcontent-%COMP%]{width:calc(25% - 53px)}th[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align-last:right}td[_ngcontent-%COMP%]{width:calc(25% - 53px)}th[_ngcontent-%COMP%]:last-child{text-align-last:right;width:28px!important}td[_ngcontent-%COMP%]:last-child{text-align:right;width:28px!important}th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child{width:100px!important}.mat-row.cdk-row.ng-star-inserted[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.Bz.forChild($)],h.Bz]}),e})();var B=i(6642),I=i(169),z=i(4950);let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[r.Aw.forFeature("users",z.LX),B.sQ.forFeature([I.z]),p.ez,b,a.p0,C.c,u.TU,f.lN,l.Tx,U.Ps,x.ot]]}),e})()}}]);