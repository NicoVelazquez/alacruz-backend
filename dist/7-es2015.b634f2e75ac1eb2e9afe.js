(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(i,n,t){"use strict";t.r(n),t.d(n,"AuthModule",(function(){return h}));var r=t("PCNd"),s=t("tyNb"),a=t("3Pt+"),o=t("fXoL"),e=t("IYfF"),u=t("ofXK");function l(i,n){1&i&&(o.Nb(0,"div",10),o.jc(1," Email or password invalid. "),o.Mb())}function c(i,n){1&i&&(o.Nb(0,"div",10),o.jc(1," Your session has expired. Please sign in again. "),o.Mb())}const d=[{path:"",component:(()=>{class i{constructor(i,n,t,r){this.fb=i,this.authService=n,this.router=t,this.invalidEmailOrPassword=!1,this.invalidToken=!1,this.signInForm=i.group({email:new a.c(null,[a.k.required]),password:new a.c(null,[a.k.required])});const s=r.snapshot.queryParams;s.returnUrl&&(this.invalidToken=!0,this.returnUrl=s.returnUrl)}ngOnInit(){this.showPass=!1,this.signInForm.get("email").valueChanges.subscribe(()=>{this.invalidEmailOrPassword=!1}),this.signInForm.get("password").valueChanges.subscribe(()=>{this.invalidEmailOrPassword=!1})}showPassword(){this.showPass=!this.showPass}signIn(){this.authService.signIn(this.signInForm.value.email,this.signInForm.value.password).then(()=>{if(this.signInForm.reset(),this.invalidToken)return this.router.navigate([this.returnUrl]);this.router.navigate([""])}).catch(i=>{"invalid credentials"===i?this.invalidEmailOrPassword=!0:console.log(i)})}}return i.\u0275fac=function(n){return new(n||i)(o.Kb(a.b),o.Kb(e.a),o.Kb(s.c),o.Kb(s.a))},i.\u0275cmp=o.Eb({type:i,selectors:[["app-sign-in"]],decls:12,vars:5,consts:[[1,"sign-in-container"],[1,"sign-in-form","uk-width-1-3@l","uk-width-2-5@m","uk-width-3-5@s",3,"formGroup"],[1,"uk-margin"],["type","text","formControlName","email","placeholder","Email","pattern","^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",1,"uk-input","uk-form-width-medium","uk-form-large","uk-width-1-1"],[1,"uk-margin","uk-margin-remove-bottom"],[1,"uk-inline","uk-width-1-1"],["uk-icon","icon: unlock",1,"uk-form-icon","uk-form-icon-flip",3,"click"],["id","password","formControlName","password","placeholder","Password (min. 8 characters)","pattern",".{8,}",1,"uk-input","uk-form-width-medium","uk-form-large","uk-width-1-1",3,"type"],["class","warning uk-margin-small-top",4,"ngIf"],[1,"uk-button","uk-button-primary","uk-width-1-1","uk-margin-small",3,"disabled","click"],[1,"warning","uk-margin-small-top"]],template:function(i,n){1&i&&(o.Nb(0,"div",0),o.Nb(1,"form",1),o.Nb(2,"div",2),o.Lb(3,"input",3),o.Mb(),o.Nb(4,"div",4),o.Nb(5,"div",5),o.Nb(6,"a",6),o.Vb("click",(function(){return n.showPassword()})),o.Mb(),o.Lb(7,"input",7),o.Mb(),o.Mb(),o.ic(8,l,2,0,"div",8),o.ic(9,c,2,0,"div",8),o.Nb(10,"button",9),o.Vb("click",(function(){return n.signIn()})),o.jc(11," Enter "),o.Mb(),o.Mb(),o.Mb()),2&i&&(o.zb(1),o.ac("formGroup",n.signInForm),o.zb(6),o.bc("type",n.showPass?"text":"password"),o.zb(1),o.ac("ngIf",n.invalidEmailOrPassword),o.zb(1),o.ac("ngIf",n.invalidToken),o.zb(1),o.ac("disabled",n.signInForm.invalid))},directives:[a.l,a.h,a.e,a.a,a.g,a.d,a.i,u.i],styles:[".sign-in-form[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:25px}.warning[_ngcontent-%COMP%]{color:red;text-align:center}"]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=o.Ib({type:i}),i.\u0275inj=o.Hb({factory:function(n){return new(n||i)},imports:[[s.f.forChild(d)],s.f]}),i})(),h=(()=>{class i{}return i.\u0275mod=o.Ib({type:i}),i.\u0275inj=o.Hb({factory:function(n){return new(n||i)},imports:[[r.a,m]]}),i})()}}]);