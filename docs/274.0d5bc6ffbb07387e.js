"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[274],{1274:(N,m,e)=>{e.r(m),e.d(m,{LoginModule:()=>J});var u=e(9808),d=e(1545),v=e(5861),t=e(5e3),p=e(5620),f=e(6540),r=e(3075),g=e(7322),h=e(7531),c=e(7423);function x(o,a){1&o&&(t.TgZ(0,"span",18),t._uU(1,"Password or email address is incorrect."),t.qZA())}function M(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(n),t.oxw().onNextClick()}),t._uU(1,"Next"),t.qZA()}if(2&o){t.oxw();const n=t.MAs(11);t.Q6J("disabled",!n.valid)}}function C(o,a){1&o&&(t.TgZ(0,"div",20)(1,"span",21),t._uU(2,"Loading..."),t.qZA()())}const L=[{path:"",component:(()=>{class o{constructor(n,i,l,s){this.store=n,this._router=i,this._route=l,this._authService=s,this.isLoading=!1,this.error=!1,this.loginModel={email:"ahmet@ahmet.com",password:"Ahmet123"}}ngOnInit(){const n=this._route.snapshot.queryParamMap.get("email");n&&(this.loginModel.email=n)}onCreateAccountClick(){this._router.navigateByUrl("/register").then()}onNextClick(){var n=this;return(0,v.Z)(function*(){n.isLoading=!0,n.error=void 0,0==(yield n._authService.login(n.loginModel))&&(n.error=!0),n.isLoading=!1})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.yh),t.Y36(d.F0),t.Y36(d.gz),t.Y36(f.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:35,vars:11,consts:[[1,"container","login-box-frame"],[1,"row"],[1,"col-12","text-center"],[1,"form"],["form","ngForm"],[1,"row","mt-3"],[1,"col"],["appearance","outline"],["pattern","[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}","autocomplete","off","name","mail","matInput","","type","email",3,"ngModel","required","ngModelChange"],["autocomplete","off","name","name","type","password","matInput","",3,"ngModel","required","ngModelChange"],["class","text-danger",4,"ngIf"],[1,"bottom-section"],[1,"row","flex-center-vertical"],[1,"col-6"],["mat-button","","color","primary",3,"click"],[1,"col-6",2,"text-align","right"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["class","spinner-border text-primary","role","status",4,"ngIf"],[1,"text-danger"],["mat-raised-button","","color","primary",3,"disabled","click"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3," To Do List "),t.qZA(),t.TgZ(4,"div",2)(5,"h1"),t._uU(6,"Sign in"),t.qZA()(),t.TgZ(7,"div",2)(8,"h2"),t._uU(9," Use your To Do List Account"),t.qZA()()(),t.TgZ(10,"form",3,4)(12,"div",5)(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),t._uU(16,"E-Mail"),t.qZA(),t.TgZ(17,"input",8),t.NdJ("ngModelChange",function(s){return i.loginModel.email=s}),t.qZA()()()(),t.TgZ(18,"div",1)(19,"div",6)(20,"mat-form-field",7)(21,"mat-label"),t._uU(22,"Password"),t.qZA(),t.TgZ(23,"input",9),t.NdJ("ngModelChange",function(s){return i.loginModel.password=s}),t.qZA()()()(),t.TgZ(24,"div",1)(25,"div",6),t.YNc(26,x,2,0,"span",10),t.qZA()()(),t.TgZ(27,"div",11)(28,"div",12)(29,"div",13)(30,"button",14),t.NdJ("click",function(){return i.onCreateAccountClick()}),t._uU(31,"Create account"),t.qZA()(),t.TgZ(32,"div",15),t.YNc(33,M,2,1,"button",16),t.YNc(34,C,3,0,"div",17),t.qZA()()()()),2&n&&(t.xp6(14),t.ekj("mat-form-field-invalid",i.error),t.xp6(3),t.Q6J("ngModel",i.loginModel.email)("required",!0),t.xp6(3),t.ekj("mat-form-field-invalid",i.error),t.xp6(3),t.Q6J("ngModel",i.loginModel.password)("required",!0),t.xp6(3),t.Q6J("ngIf",i.error),t.xp6(7),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},directives:[r._Y,r.JL,r.F,g.KE,g.hX,h.Nt,r.Fj,r.c5,r.JJ,r.On,r.Q7,u.O5,c.lW],styles:["[_nghost-%COMP%]{height:100%;width:100%;background-color:#fff;display:flex;align-items:center;justify-content:center}.login-box-frame[_ngcontent-%COMP%]{height:calc(100% - 25rem);width:calc(100% - 40rem);min-height:500px;min-width:450px;max-width:470px;max-height:520px;border:1px solid #dadce0;border-radius:8px;padding:48px 40px 36px;position:relative}h1[_ngcontent-%COMP%]{color:#202124;padding-bottom:0;padding-top:16px;font-family:Google Sans,Noto Sans Myanmar UI,arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3333;margin-bottom:0;margin-top:0;word-break:break-word}h2[_ngcontent-%COMP%]{color:#202124;font-size:16px;font-weight:400;letter-spacing:.1px;line-height:1.5;padding-bottom:0;padding-top:8px}.mat-raised-button[_ngcontent-%COMP%]{min-width:80px!important}.bottom-section[_ngcontent-%COMP%]{position:absolute;bottom:48px;right:40px;left:26px}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),o})();var y=e(6642),A=e(169),T=e(4950),b=e(4107);let J=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[f.e],imports:[[p.Aw.forFeature("user",T.LX),y.sQ.forFeature([A.z]),u.ez,Z,r.u5,h.c,g.lN,c.ot,c.ot,b.LD]]}),o})()}}]);