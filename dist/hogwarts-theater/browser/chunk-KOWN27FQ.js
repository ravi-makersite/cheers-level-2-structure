import{a as N,c as A}from"./chunk-IJFCQZRN.js";import{Eb as B,Fb as q,Hb as U,Ka as S,L as y,Ma as u,Oa as _,P as C,Pa as w,Qa as O,Ra as M,Sa as o,Ta as i,U as b,Ua as m,V as l,Va as j,Wa as E,Xa as a,Ya as R,Z as k,Za as f,_ as x,cb as P,fa as D,g as h,la as d,ma as I,wa as c,xa as p,xb as F,zb as T}from"./chunk-RZEEZU5S.js";function g(t){t||(D(g),t=l(d));let e=new h(n=>t.onDestroy(n.next.bind(n)));return n=>n.pipe(y(e))}var H=(()=>{let e=class e{constructor(r){this.httpClient=r}getCocktailById(r){return this.httpClient.get("/cocktails/"+r)}};e.\u0275fac=function(s){return new(s||e)(b(q))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function L(t,e){if(t&1&&(o(0,"li"),a(1),i()),t&2){let n=e.$implicit;c(),f("",n," | \xA0")}}function V(t,e){if(t&1&&(o(0,"div",1)(1,"div"),m(2,"img",2),i(),o(3,"div",3)(4,"div",4)(5,"h3"),a(6),i(),m(7,"span",5),i(),o(8,"div",6)(9,"div"),a(10," Type: "),i(),o(11,"div",7),m(12,"span",8),i()(),o(13,"div",9)(14,"div"),a(15," Ingredients: "),i(),o(16,"div",7),O(17,L,2,1,"li",null,w),i()(),o(19,"div",10)(20,"div"),a(21," Instructions: "),i(),o(22,"div",7),a(23),i()()()()),t&2){let n=E();c(2),u("ngSrc",n.cocktailDetails.imageUrl),c(4),R(n.cocktailDetails.name),c(),u("favouriteChange",n.cocktailDetails),c(5),u("alcaholic",n.cocktailDetails.isAlcoholic),c(5),M(n.cocktailDetails.ingredients),c(6),f(" ",n.cocktailDetails.instructions," ")}}function G(t,e){t&1&&(o(0,"div"),a(1," Record Not Found "),i())}var ve=(()=>{let e=class e{constructor(r,s){this.cocktailDetailSerivce=r,this.location=s,this.cocktailId=I(),this.destroyRef=l(d)}ngOnInit(){this.getCocktailData()}getCocktailData(){this.cocktailDetailSerivce.getCocktailById(this.cocktailId()).pipe(g(this.destroyRef)).subscribe(r=>{this.cocktailDetails=r})}};e.\u0275fac=function(s){return new(s||e)(p(H),p(F))},e.\u0275cmp=x({type:e,selectors:[["app-cocktail-details"]],inputs:{cocktailId:[k.SignalBased,"cocktailId"]},standalone:!0,features:[P],decls:5,vars:1,consts:[[3,"click"],[1,"details-container"],["height","300","width","350","priority","",3,"ngSrc"],[1,"cocktail-details"],[1,"name-section"],[1,"icon-star","left-margin",3,"favouriteChange"],[1,"type-section"],[1,"left-margin"],[3,"alcaholic"],[1,"ingredients-section"],[1,"instructions"]],template:function(s,v){s&1&&(o(0,"section")(1,"button",0),j("click",function(){return v.location.back()}),a(2," Back Button "),i(),S(3,V,24,5,"div",1)(4,G,2,0),i()),s&2&&(c(3),_(3,v.cocktailDetails?3:4))},dependencies:[U,B,N,A,T],styles:[".icon-star[_ngcontent-%COMP%]{height:1.5em;width:1.5em}h3[_ngcontent-%COMP%]{margin-left:0}.section[_ngcontent-%COMP%]{padding:0 25px}.details-container[_ngcontent-%COMP%]{display:flex}.cocktail-details[_ngcontent-%COMP%]{padding:0 25px}.ingredients-section[_ngcontent-%COMP%]{display:flex}.name-section[_ngcontent-%COMP%]{display:flex;align-items:center}.left-margin[_ngcontent-%COMP%]{margin-left:5rem}.type-section[_ngcontent-%COMP%]{display:flex}.type-section[_ngcontent-%COMP%]   .left-margin[_ngcontent-%COMP%]{margin-left:7rem}.instructions[_ngcontent-%COMP%]{display:flex}"]});let t=e;return t})();export{ve as CocktailDetailsComponent};