(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return x}));var o=n("PCNd"),i=n("tyNb"),s=n("bE4C"),r=n("xC8M"),c=n("fXoL"),a=n("mB2O"),u=n("BvJE"),d=n("ofXK");function l(t,e){if(1&t&&c.Lb(0,"img",5),2&t){const t=c.Xb();c.bc("src",null==t.product?null:t.product.imageUrl,c.hc),c.bc("alt",null==t.product?null:t.product.name)}}function p(t,e){1&t&&c.Lb(0,"img",6)}function g(t,e){1&t&&c.Lb(0,"img",7)}function b(t,e){if(1&t&&(c.Nb(0,"div",8),c.Nb(1,"div",9),c.Nb(2,"h3"),c.kc(3),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.Xb();c.zb(3),c.lc(null==t.product?null:t.product.name)}}let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-list-item"]],inputs:{product:"product",loading:"loading"},decls:5,vars:4,consts:[[1,"product","uk-card","uk-card-default","uk-card-body"],["class","image",3,"src","alt",4,"ngIf"],["class","image","src","./assets/images/noImageAvailable.png","alt","No image available",4,"ngIf"],["class","loading-image image","src","./assets/images/loading.svg","alt","Loading image",4,"ngIf"],["class","information",4,"ngIf"],[1,"image",3,"src","alt"],["src","./assets/images/noImageAvailable.png","alt","No image available",1,"image"],["src","./assets/images/loading.svg","alt","Loading image",1,"loading-image","image"],[1,"information"],[1,"name"]],template:function(t,e){1&t&&(c.Nb(0,"div",0),c.jc(1,l,1,2,"img",1),c.jc(2,p,1,0,"img",2),c.jc(3,g,1,0,"img",3),c.jc(4,b,4,1,"div",4),c.Mb()),2&t&&(c.zb(1),c.ac("ngIf",null==e.product?null:e.product.imageUrl),c.zb(1),c.ac("ngIf",!(null!=e.product&&e.product.imageUrl)),c.zb(1),c.ac("ngIf",e.loading),c.zb(1),c.ac("ngIf",null==e.product?null:e.product.name))},directives:[d.j],styles:[".product[_ngcontent-%COMP%]{padding:0;position:relative;display:flex;justify-content:center;overflow:hidden;align-items:flex-start}.product[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.information[_ngcontent-%COMP%]{position:absolute;bottom:5%;left:0;background:#acacac;padding:4px 15px 4px 30px;color:#fff;margin:0;font:14px Sans-Serif}.name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:chunkfive,serif;font-size:1.4rem;font-weight:600;margin:0 0 4px}.loading-image[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px}"]}),t})();function f(t,e){1&t&&c.Lb(0,"app-product-list-item",2),2&t&&c.ac("product",e.$implicit)}let h=(()=>{class t{constructor(){this.productsPerRow=2}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-list"]],inputs:{products:"products",productsPerRow:"productsPerRow"},decls:2,vars:4,consts:[["uk-grid",""],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(t,e){1&t&&(c.Nb(0,"div",0),c.jc(1,f,1,1,"app-product-list-item",1),c.Mb()),2&t&&(c.Bb("product-list-container uk-grid uk-grid-medium uk-grid-match uk-flex-center\n    uk-child-width-1-",e.productsPerRow,"@m uk-child-width-1-2@s"),c.zb(1),c.ac("ngForOf",e.products))},directives:[d.i,m],styles:[""]}),t})();var v=n("OlyB");function k(t,e){if(1&t&&(c.Nb(0,"li"),c.Lb(1,"img",14),c.Mb()),2&t){const t=e.$implicit;c.zb(1),c.bc("src",t.imageUrl,c.hc),c.bc("alt",t.name)}}const w=[{path:"",component:(()=>{class t{constructor(t,e){this.productService=t,this.bannerService=e,this.products=[new s.a("","./assets/images/product-loader.svg"),new s.a("","./assets/images/product-loader.svg"),new s.a("","./assets/images/product-loader.svg")],this.featuredProducts=[new s.a("","./assets/images/product-loader.svg"),new s.a("","./assets/images/product-loader.svg"),new s.a("","./assets/images/product-loader.svg")],this.banners=[new r.a("","./assets/images/banner-loader.svg")]}ngOnInit(){this.productService.getFeaturedProducts().then(t=>this.featuredProducts=t),this.productService.getRegularProducts().then(t=>this.products=t),this.bannerService.getAllBanners().then(t=>this.banners=t)}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(a.a),c.Kb(u.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-landing"]],decls:23,vars:5,consts:[[1,"home-container"],[1,"slideshow-container"],["tabindex","-1","uk-slideshow","autoplay: true; ratio: false",1,"slideshow","uk-position-relative","uk-visible-toggle","uk-light"],["uk-height-viewport","offset-top: true; offset-bottom: 30",1,"uk-slideshow-items"],[4,"ngFor","ngForOf"],["href","#","uk-slidenav-previous","","uk-slideshow-item","previous",1,"uk-position-center-left","uk-position-small","uk-hidden-hover"],["href","#","uk-slidenav-next","","uk-slideshow-item","next",1,"uk-position-center-right","uk-position-small","uk-hidden-hover"],[1,"uk-slideshow-nav","uk-dotnav","uk-flex-center","uk-margin"],[1,"home-body-container","uk-flex","uk-flex-center"],[1,"products-section","uk-width-4-5"],[1,"section-title","uk-text-center"],[1,"section-subtitle","uk-text-center"],[3,"products","productsPerRow"],[1,"home-body-container","uk-flex","uk-flex-center",2,"margin-top","30px"],["uk-cover","",3,"src","alt"]],template:function(t,e){1&t&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"ul",3),c.jc(4,k,2,2,"li",4),c.Mb(),c.Lb(5,"a",5),c.Lb(6,"a",6),c.Mb(),c.Lb(7,"ul",7),c.Mb(),c.Nb(8,"div",8),c.Nb(9,"div",9),c.Nb(10,"h2",10),c.kc(11,"Popular Products"),c.Mb(),c.Nb(12,"h3",11),c.kc(13,"Don't know them?"),c.Mb(),c.Lb(14,"app-product-list",12),c.Mb(),c.Mb(),c.Lb(15,"app-widgets"),c.Nb(16,"div",13),c.Nb(17,"div",9),c.Nb(18,"h2",10),c.kc(19,"Our Products"),c.Mb(),c.Nb(20,"h3",11),c.kc(21,"What are you waiting for?"),c.Mb(),c.Lb(22,"app-product-list",12),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.zb(4),c.ac("ngForOf",e.banners),c.zb(10),c.ac("products",e.featuredProducts)("productsPerRow",3),c.zb(8),c.ac("products",e.products)("productsPerRow",3))},directives:[d.i,h,v.a],styles:[".slideshow[_ngcontent-%COMP%]{width:100%}.products-section[_ngcontent-%COMP%]{padding-bottom:40px}.section-title[_ngcontent-%COMP%]{font-family:chunkfive,serif;color:#000;margin-bottom:0}.section-subtitle[_ngcontent-%COMP%]{font-family:lobster,serif;margin-top:0;color:#959595}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(w)],i.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[o.a,M]]}),t})()}}]);