var ae=Object.defineProperty;var P=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var R=(f,l,m)=>l in f?ae(f,l,{enumerable:!0,configurable:!0,writable:!0,value:m}):f[l]=m,M=(f,l)=>{for(var m in l||(l={}))oe.call(l,m)&&R(f,m,l[m]);if(P)for(var m of P(l))te.call(l,m)&&R(f,m,l[m]);return f};import{c as z}from"./api.c6d0d30d.js";import{d as K,r as ne,c as Q,t as H,L as se,h as r,i as c,j as x,k as e,w as a,q as A,v as D,l as o,Q as L,R as O,m as k,G as W,e as re,F as ue,U as ie,E as G}from"./index.db2b5b0c.js";import"./Api.b0f465a3.js";const de={class:"dialog-footer"},me=K({__name:"ConfigEdit",props:{visible:{type:Boolean},data:{type:[Boolean,Object]},title:{type:String}},emits:["update:visible","cancel","val-change"],setup(f,{emit:l}){const m=f,I=ne(null),i=Q({dvisible:!1,params:[],form:{id:null,name:"",key:"",params:"",value:"",remark:""},btnLoading:!1}),{dvisible:h,params:N,form:u,btnLoading:C}=H(i);se(m,_=>{i.dvisible=_.visible,_.data?(i.form=M({},_.data),i.form.params?i.params=JSON.parse(i.form.params):i.params=[]):(i.form={},i.params=[])});const E=()=>{i.params.push({name:"",model:"",placeholder:""})},S=_=>{i.params.splice(_,1)},B=()=>{l("update:visible",!1),l("cancel")},U=async()=>{I.value.validate(async _=>{_&&(i.params&&(i.form.params=JSON.stringify(i.params)),await z.save.request(i.form),l("val-change",i.form),B(),i.btnLoading=!0,setTimeout(()=>{i.btnLoading=!1},1e3))})};return(_,p)=>{const V=r("el-input"),w=r("el-form-item"),F=r("el-button"),t=r("el-row"),s=r("el-col"),g=r("el-divider"),$=r("el-form"),b=r("el-dialog");return c(),x("div",null,[e(b,{title:f.title,modelValue:o(h),"onUpdate:modelValue":p[4]||(p[4]=d=>W(h)?h.value=d:null),"show-close":!1,"before-close":B,width:"750px","destroy-on-close":!0},{footer:a(()=>[A("div",de,[e(F,{onClick:p[3]||(p[3]=d=>B())},{default:a(()=>[D("\u53D6 \u6D88")]),_:1}),e(F,{type:"primary",loading:o(C),onClick:U},{default:a(()=>[D("\u786E \u5B9A")]),_:1},8,["loading"])])]),default:a(()=>[e($,{ref_key:"configForm",ref:I,model:o(u),"label-width":"90px"},{default:a(()=>[e(w,{prop:"name",label:"\u914D\u7F6E\u9879:",required:""},{default:a(()=>[e(V,{modelValue:o(u).name,"onUpdate:modelValue":p[0]||(p[0]=d=>o(u).name=d)},null,8,["modelValue"])]),_:1}),e(w,{prop:"key",label:"\u914D\u7F6Ekey:",required:""},{default:a(()=>[e(V,{disabled:o(u).id!=null,modelValue:o(u).key,"onUpdate:modelValue":p[1]||(p[1]=d=>o(u).key=d)},null,8,["disabled","modelValue"])]),_:1}),e(t,{style:{"margin-left":"30px","margin-bottom":"5px"}},{default:a(()=>[e(F,{onClick:E,size:"small",type:"success"},{default:a(()=>[D("\u65B0\u589E\u914D\u7F6E\u9879")]),_:1})]),_:1}),(c(!0),x(L,null,O(o(N),(d,q)=>(c(),k(w,{key:d,prop:"params",label:`\u53C2\u6570${q+1}`},{default:a(()=>[e(t,null,{default:a(()=>[e(s,{span:5},{default:a(()=>[e(V,{modelValue:d.model,"onUpdate:modelValue":v=>d.model=v,placeholder:"model"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{span:1,direction:"vertical","border-style":"dashed"}),e(s,{span:4},{default:a(()=>[e(V,{modelValue:d.name,"onUpdate:modelValue":v=>d.name=v,placeholder:"\u5B57\u6BB5\u540D"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{span:1,direction:"vertical","border-style":"dashed"}),e(s,{span:4},{default:a(()=>[e(V,{modelValue:d.placeholder,"onUpdate:modelValue":v=>d.placeholder=v,placeholder:"\u5B57\u6BB5\u8BF4\u660E"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{span:1,direction:"vertical","border-style":"dashed"}),e(s,{span:4},{default:a(()=>[e(V,{modelValue:d.options,"onUpdate:modelValue":v=>d.options=v,placeholder:"\u53EF\u9009\u503C ,\u5206\u5272"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{span:1,direction:"vertical","border-style":"dashed"}),e(s,{span:2},{default:a(()=>[e(F,{onClick:v=>S(q),size:"small",type:"danger"},{default:a(()=>[D("\u5220\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["label"]))),128)),e(w,{label:"\u5907\u6CE8:"},{default:a(()=>[e(V,{modelValue:o(u).remark,"onUpdate:modelValue":p[2]||(p[2]=d=>o(u).remark=d),type:"textarea",rows:2},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}}),pe={class:"role-list"},ce=A("i",null,null,-1),fe={class:"dialog-footer"},ye=K({__name:"ConfigList",setup(f){const l=Q({query:{pageNum:1,pageSize:10,name:null},total:0,configs:[],chooseId:null,chooseData:null,paramsDialog:{visible:!1,config:null,params:{},paramsFormItem:[]},configEdit:{title:"\u914D\u7F6E\u4FEE\u6539",visible:!1,config:{}}}),{query:m,total:I,configs:i,chooseId:h,chooseData:N,paramsDialog:u,configEdit:C}=H(l);re(()=>{E()});const E=async()=>{let t=await z.list.request(l.query);l.configs=t.list,l.total=t.total},S=t=>{l.query.pageNum=t,E()},B=t=>{l.paramsDialog.config=t,t.params?(l.paramsDialog.paramsFormItem=JSON.parse(t.params),l.paramsDialog.paramsFormItem&&l.paramsDialog.paramsFormItem.length>0&&t.value&&(l.paramsDialog.params=JSON.parse(t.value))):l.paramsDialog.params=t.value,l.paramsDialog.visible=!0},U=()=>{l.paramsDialog.visible=!1,setTimeout(()=>{l.paramsDialog.config={},l.paramsDialog.params={},l.paramsDialog.paramsFormItem=[]},300)},_=async()=>{let t=l.paramsDialog.params;if(l.paramsDialog.paramsFormItem.length>0){for(let s in t)p(s,l.paramsDialog.paramsFormItem)||delete t[s];t=JSON.stringify(t)}await z.save.request({id:l.paramsDialog.config.id,key:l.paramsDialog.config.key,name:l.paramsDialog.config.name,value:t}),G.success("\u4FDD\u5B58\u6210\u529F"),U(),E()},p=(t,s)=>{for(let g of s)if(g.model==t)return!0;return!1},V=t=>{!t||(l.chooseId=t.id,l.chooseData=t)},w=()=>{G.success("\u4FDD\u5B58\u6210\u529F"),l.chooseId=null,l.chooseData=null,E()},F=t=>{t?l.configEdit.config=t:l.configEdit.config=!1,l.configEdit.visible=!0};return(t,s)=>{const g=r("el-button"),$=r("el-radio"),b=r("el-table-column"),d=r("el-link"),q=r("el-table"),v=r("el-pagination"),X=r("el-row"),Y=r("el-card"),J=r("el-input"),Z=r("el-option"),ee=r("el-select"),T=r("el-form-item"),j=r("el-form"),le=r("el-dialog");return c(),x("div",pe,[e(Y,null,{default:a(()=>[e(g,{type:"primary",icon:"plus",onClick:s[0]||(s[0]=n=>F(!1))},{default:a(()=>[D("\u6DFB\u52A0")]),_:1}),e(g,{disabled:o(h)==null,onClick:s[1]||(s[1]=n=>F(o(N))),type:"primary",icon:"edit"},{default:a(()=>[D("\u7F16\u8F91 ")]),_:1},8,["disabled"]),e(q,{data:o(i),onCurrentChange:V,ref:"table",style:{width:"100%"}},{default:a(()=>[e(b,{label:"\u9009\u62E9",width:"55px"},{default:a(n=>[e($,{modelValue:o(h),"onUpdate:modelValue":s[2]||(s[2]=y=>W(h)?h.value=y:null),label:n.row.id},{default:a(()=>[ce]),_:2},1032,["modelValue","label"])]),_:1}),e(b,{prop:"name",label:"\u914D\u7F6E\u9879"}),e(b,{prop:"key",label:"\u914D\u7F6Ekey"}),e(b,{prop:"value",label:"\u914D\u7F6E\u503C","min-width":"100px","show-overflow-tooltip":""}),e(b,{prop:"remark",label:"\u5907\u6CE8","min-width":"100px","show-overflow-tooltip":""}),e(b,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4","min-width":"100px"},{default:a(n=>[D(ue(o(ie)(n.row.createTime)),1)]),_:1}),e(b,{prop:"modifier",label:"\u4FEE\u6539\u8005","show-overflow-tooltip":""}),e(b,{label:"\u64CD\u4F5C","min-width":"50",fixed:"right"},{default:a(n=>[e(d,{disabled:n.row.status==-1,type:"warning",onClick:y=>B(n.row),plain:"",size:"small",underline:!1},{default:a(()=>[D("\u914D\u7F6E")]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"]),e(X,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:a(()=>[e(v,{style:{"text-align":"right"},onCurrentChange:S,total:o(I),layout:"prev, pager, next, total, jumper","current-page":o(m).pageNum,"onUpdate:current-page":s[3]||(s[3]=n=>o(m).pageNum=n),"page-size":o(m).pageSize},null,8,["total","current-page","page-size"])]),_:1})]),_:1}),e(le,{"before-close":U,title:"\u914D\u7F6E\u9879\u8BBE\u7F6E",modelValue:o(u).visible,"onUpdate:modelValue":s[7]||(s[7]=n=>o(u).visible=n),width:"500px"},{footer:a(()=>[A("span",fe,[e(g,{onClick:s[5]||(s[5]=n=>U())},{default:a(()=>[D("\u53D6 \u6D88")]),_:1}),e(g,{type:"primary",onClick:s[6]||(s[6]=n=>_())},{default:a(()=>[D("\u786E \u5B9A")]),_:1})])]),default:a(()=>[o(u).paramsFormItem.length>0?(c(),k(j,{key:0,ref:"paramsForm",model:o(u).params,"label-width":"90px"},{default:a(()=>[(c(!0),x(L,null,O(o(u).paramsFormItem,n=>(c(),k(T,{key:n.name,prop:n.model,label:n.name,required:""},{default:a(()=>[n.options?(c(),k(ee,{key:1,modelValue:o(u).params[n.model],"onUpdate:modelValue":y=>o(u).params[n.model]=y,placeholder:n.placeholder,filterable:"",autocomplete:"off",clearable:"",style:{width:"100%"}},{default:a(()=>[(c(!0),x(L,null,O(n.options.split(","),y=>(c(),k(Z,{key:y,label:y,value:y},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):(c(),k(J,{key:0,modelValue:o(u).params[n.model],"onUpdate:modelValue":y=>o(u).params[n.model]=y,placeholder:n.placeholder,autocomplete:"off",clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]),_:2},1032,["prop","label"]))),128))]),_:1},8,["model"])):(c(),k(j,{key:1,ref:"paramsForm","label-width":"90px"},{default:a(()=>[e(T,{label:"\u914D\u7F6E\u503C",required:""},{default:a(()=>[e(J,{modelValue:o(u).params,"onUpdate:modelValue":s[4]||(s[4]=n=>o(u).params=n),placeholder:o(u).config.remark,autocomplete:"off",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1},512))]),_:1},8,["modelValue"]),e(me,{title:o(C).title,visible:o(C).visible,"onUpdate:visible":s[8]||(s[8]=n=>o(C).visible=n),data:o(C).config,onValChange:w},null,8,["title","visible","data"])])}}});export{ye as default};
