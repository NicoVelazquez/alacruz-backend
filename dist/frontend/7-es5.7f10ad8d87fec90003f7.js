function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var r=0;r<i.length;r++){var t=i[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,i,r){return i&&_defineProperties(n.prototype,i),r&&_defineProperties(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(n,i,r){"use strict";r.r(i),r.d(i,"AuthModule",(function(){return p}));var t=r("PCNd"),e=r("tyNb"),a=r("3Pt+"),s=r("fXoL"),o=r("IYfF"),u=r("ofXK");function l(n,i){1&n&&(s.Nb(0,"div",10),s.kc(1," Email or password invalid. "),s.Mb())}function c(n,i){1&n&&(s.Nb(0,"div",10),s.kc(1," Your session has expired. Please sign in again. "),s.Mb())}var d,f,m,b=[{path:"",component:(d=function(){function n(i,r,t,e){_classCallCheck(this,n),this.fb=i,this.authService=r,this.router=t,this.invalidEmailOrPassword=!1,this.invalidToken=!1,this.signInForm=i.group({email:new a.c(null,[a.k.required]),password:new a.c(null,[a.k.required])});var s=e.snapshot.queryParams;s.returnUrl&&(this.invalidToken=!0,this.returnUrl=s.returnUrl)}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.showPass=!1,this.signInForm.get("email").valueChanges.subscribe((function(){n.invalidEmailOrPassword=!1})),this.signInForm.get("password").valueChanges.subscribe((function(){n.invalidEmailOrPassword=!1}))}},{key:"showPassword",value:function(){this.showPass=!this.showPass}},{key:"signIn",value:function(){var n=this;this.authService.signIn(this.signInForm.value.email,this.signInForm.value.password).then((function(){if(n.signInForm.reset(),n.invalidToken)return n.router.navigate([n.returnUrl]);n.router.navigate([""])})).catch((function(i){"invalid credentials"===i?n.invalidEmailOrPassword=!0:console.log(i)}))}}]),n}(),d.\u0275fac=function(n){return new(n||d)(s.Kb(a.b),s.Kb(o.a),s.Kb(e.c),s.Kb(e.a))},d.\u0275cmp=s.Eb({type:d,selectors:[["app-sign-in"]],decls:12,vars:5,consts:[[1,"sign-in-container"],[1,"sign-in-form","uk-width-1-3@l","uk-width-2-5@m","uk-width-3-5@s",3,"formGroup"],[1,"uk-margin"],["type","text","formControlName","email","placeholder","Email","pattern","^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",1,"uk-input","uk-form-width-medium","uk-form-large","uk-width-1-1"],[1,"uk-margin","uk-margin-remove-bottom"],[1,"uk-inline","uk-width-1-1"],["uk-icon","icon: unlock",1,"uk-form-icon","uk-form-icon-flip",3,"click"],["id","password","formControlName","password","placeholder","Password (min. 8 characters)","pattern",".{8,}",1,"uk-input","uk-form-width-medium","uk-form-large","uk-width-1-1",3,"type"],["class","warning uk-margin-small-top",4,"ngIf"],[1,"uk-button","uk-button-primary","uk-width-1-1","uk-margin-small",3,"disabled","click"],[1,"warning","uk-margin-small-top"]],template:function(n,i){1&n&&(s.Nb(0,"div",0),s.Nb(1,"form",1),s.Nb(2,"div",2),s.Lb(3,"input",3),s.Mb(),s.Nb(4,"div",4),s.Nb(5,"div",5),s.Nb(6,"a",6),s.Vb("click",(function(){return i.showPassword()})),s.Mb(),s.Lb(7,"input",7),s.Mb(),s.Mb(),s.jc(8,l,2,0,"div",8),s.jc(9,c,2,0,"div",8),s.Nb(10,"button",9),s.Vb("click",(function(){return i.signIn()})),s.kc(11," Enter "),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.zb(1),s.ac("formGroup",i.signInForm),s.zb(6),s.bc("type",i.showPass?"text":"password"),s.zb(1),s.ac("ngIf",i.invalidEmailOrPassword),s.zb(1),s.ac("ngIf",i.invalidToken),s.zb(1),s.ac("disabled",i.signInForm.invalid))},directives:[a.l,a.h,a.e,a.a,a.g,a.d,a.i,u.j],styles:[".sign-in-form[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:25px}.warning[_ngcontent-%COMP%]{color:red;text-align:center}"]}),d)}],h=((m=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:m}),m.\u0275inj=s.Hb({factory:function(n){return new(n||m)},imports:[[e.f.forChild(b)],e.f]}),m),p=((f=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:f}),f.\u0275inj=s.Hb({factory:function(n){return new(n||f)},imports:[[t.a,h]]}),f)}}]);