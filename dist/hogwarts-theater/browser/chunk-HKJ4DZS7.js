import{c as me,f as ye}from"./chunk-DJYH7P6Y.js";import{a as ve,b as _e,c as Ce}from"./chunk-IJFCQZRN.js";import{$ as j,$a as ae,Aa as U,Ea as R,Eb as pe,Fa as V,Hb as ge,Ma as h,Na as ne,O as T,Pa as re,Q as G,Qa as F,Ra as w,S as g,Sa as u,Ta as a,Ua as v,Va as oe,Xa as _,Z as m,Za as H,_ as A,_a as se,a as c,aa as y,ab as le,b as p,bb as L,cb as I,db as ue,fb as de,ga as ee,ha as te,kb as ce,m as K,ma as ie,mb as he,na as B,nb as fe,oa as E,pb as W,r as J,wa as l,x as Q,xa as s,zb as S}from"./chunk-RZEEZU5S.js";var We=t=>[t];function $e(t,e){if(t&1&&(u(0,"span"),_(1),a()),t&2){let i=e.$implicit;l(),H("",i," | \xA0")}}var De=(()=>{let e=class e{constructor(){this.cockTail=ie.required()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-cocktail-data"]],inputs:{cockTail:[m.SignalBased,"cockTail"]},standalone:!0,features:[I],decls:13,vars:7,consts:[[1,"image"],["height","147","width","156","priority","",3,"ngSrc"],[1,"data"],[1,"header"],[3,"routerLink"],[1,"icon-star",3,"favouriteChange"],[3,"alcaholic"]],template:function(r,o){r&1&&(u(0,"article")(1,"div",0),v(2,"img",1),a(),u(3,"div",2)(4,"div",3)(5,"h3",4),_(6),a(),v(7,"span",5),a(),u(8,"div"),v(9,"span",6),a(),u(10,"div"),F(11,$e,2,1,"span",null,re),a()()()),r&2&&(l(2),h("ngSrc",o.cockTail().imageUrl),l(3),h("routerLink",ue(5,We,"/cocktails/"+o.cockTail().id)),l(),H(" ",o.cockTail().name," "),l(),h("favouriteChange",o.cockTail()),l(2),h("alcaholic",o.cockTail().isAlcoholic),l(2),w(o.cockTail().ingredients))},dependencies:[pe,ve,Ce,S,ye,me],styles:["article[_ngcontent-%COMP%]{display:flex;width:430px;cursor:pointer;border:1px solid black;margin:12px;border-radius:10px;overflow:hidden}article[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:147px;width:156px}article[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{width:calc(100% - 157px);padding:0 12px 12px}article[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:inline-block}article[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{text-decoration:underline}article[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-flow:row;align-items:baseline}.icon-star[_ngcontent-%COMP%]{height:1.5em;width:1.5em}"]});let t=e;return t})();var Se=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(s(U),s(B))},e.\u0275dir=y({type:e});let t=e;return t})(),qe=(()=>{let e=class e extends Se{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=te(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[V]});let t=e;return t})(),Oe=new g("");var ze={provide:Oe,useExisting:T(()=>P),multi:!0};function Ze(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Xe=new g(""),P=(()=>{let e=class e extends Se{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ze())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(s(U),s(B),s(Xe,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&oe("input",function(d){return o._handleInput(d.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(d){return o._compositionEnd(d.target.value)})},features:[L([ze]),V]});let t=e;return t})();var Ye=new g(""),Ke=new g("");function Ne(t){return t!=null}function ke(t){return de(t)?K(t):t}function Pe(t){let e={};return t.forEach(i=>{e=i!=null?c(c({},e),i):e}),Object.keys(e).length===0?null:e}function xe(t,e){return e.map(i=>i(t))}function Je(t){return!t.validate}function Te(t){return t.map(e=>Je(e)?e:i=>e.validate(i))}function Qe(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(i){return Pe(xe(i,e))}}function Ge(t){return t!=null?Qe(Te(t)):null}function et(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(i){let n=xe(i,e).map(ke);return Q(n).pipe(J(Pe))}}function je(t){return t!=null?et(Te(t)):null}function be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function tt(t){return t._rawValidators}function it(t){return t._rawAsyncValidators}function $(t){return t?Array.isArray(t)?t:[t]:[]}function N(t,e){return Array.isArray(t)?t.includes(e):t===e}function Me(t,e){let i=$(e);return $(t).forEach(r=>{N(i,r)||i.push(r)}),i}function Ae(t,e){return $(e).filter(i=>!N(t,i))}var k=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ge(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},q=class extends k{get formDirective(){return null}get path(){return null}},M=class extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qt=p(c({},nt),{"[class.ng-submitted]":"isSubmitted"}),Be=(()=>{let e=class e extends z{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(M,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ne("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})();var D="VALID",O="INVALID",C="PENDING",b="DISABLED";function rt(t){return(x(t)?t.validators:t)||null}function ot(t){return Array.isArray(t)?Ge(t):t||null}function st(t,e){return(x(e)?e.asyncValidators:t)||null}function at(t){return Array.isArray(t)?je(t):t||null}function x(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Z=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===O}get pending(){return this.status==C}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(n=>{n.disable(p(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(c({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(p(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(c({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let i=ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(O)?O:D}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){x(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}};var Ue=new g("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function lt(t,e){return[...e.path,t]}function ut(t,e,i=X){ct(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ht(t,e),pt(t,e),ft(t,e),dt(t,e)}function Ee(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function dt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ct(t,e){let i=tt(t);e.validator!==null?t.setValidators(be(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=it(t);e.asyncValidator!==null?t.setAsyncValidators(be(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ee(e._rawValidators,r),Ee(e._rawAsyncValidators,r)}function ht(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Re(t,e)})}function ft(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Re(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Re(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function pt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function gt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function mt(t){return Object.getPrototypeOf(t.constructor)===qe}function yt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===P?i=o:mt(o)?n=o:r=o}),r||n||i||null}function Fe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function we(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var vt=class extends Z{constructor(e=null,i,n){super(rt(i),st(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(i)&&(i.nonNullable||i.initialValueIsDefault)&&(we(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){we(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var _t={provide:M,useExisting:T(()=>Y)},Ie=Promise.resolve(),Y=(()=>{let e=class e extends M{constructor(n,r,o,f,d,Le){super(),this._changeDetectorRef=d,this.callSetDisabledState=Le,this.control=new vt,this._registered=!1,this.name="",this.update=new E,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=yt(this,f)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),gt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ut(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ie.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&he(r);Ie.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?lt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(s(q,9),s(Ye,10),s(Ke,10),s(Oe,10),s(ce,8),s(Ue,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[m.None,"disabled","isDisabled"],model:[m.None,"ngModel","model"],options:[m.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[L([_t]),V,ee]});let t=e;return t})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=G({});let t=e;return t})();var He=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ue,useValue:n.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=G({imports:[Ct]});let t=e;return t})();var Dt=(t,e)=>e.id;function bt(t,e){if(t&1&&v(0,"app-cocktail-data",5),t&2){let i=e.$implicit;h("cockTail",i)}}var ui=(()=>{let e=class e{constructor(n){this.cocktailService=n,this.cocktails=R([]),this.search=R(""),this.filteredCocktails=fe(()=>this.search()?this.cocktails().filter(r=>r.name.toLowerCase().includes(this.search().toLowerCase())):this.cocktails())}ngOnInit(){this.cocktailService.getCocktails().subscribe(n=>{this.cocktails.set(n)})}};e.\u0275fac=function(r){return new(r||e)(s(_e))},e.\u0275cmp=A({type:e,selectors:[["app-cocktails"]],standalone:!0,features:[I],decls:13,vars:1,consts:[[1,"header-section"],[1,"filters-container"],[1,"input-container"],[3,"ngModelChange","ngModel"],[1,"cocktail-container"],[3,"cockTail"]],template:function(r,o){r&1&&(u(0,"main")(1,"section",0)(2,"h5"),_(3," Filters "),a(),u(4,"div",1)(5,"div"),_(6," Cocktail Name "),a(),u(7,"div",2)(8,"input",3),le("ngModelChange",function(d){return ae(o.search,d)||(o.search=d),d}),a()()()(),u(9,"section")(10,"div",4),F(11,bt,1,1,"app-cocktail-data",5,Dt),a()()()),r&2&&(l(8),se("ngModel",o.search),l(3),w(o.filteredCocktails()))},dependencies:[ge,S,De,He,P,Be,Y],styles:[".cocktail-container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;height:100%}.header-section[_ngcontent-%COMP%]{background:#d3d3d3;margin-top:-.8rem;padding:13px}.filters-container[_ngcontent-%COMP%]{display:flex;margin:10px;justify-content:start;align-items:baseline}.input-container[_ngcontent-%COMP%]{margin-left:10px}"]});let t=e;return t})();export{ui as CocktailsComponent};