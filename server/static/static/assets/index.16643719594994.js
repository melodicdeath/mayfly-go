var J=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var P=(e,o,n)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,k=(e,o)=>{for(var n in o||(o={}))X.call(o,n)&&P(e,n,o[n]);if(K)for(var n of K(o))Y.call(o,n)&&P(e,n,o[n]);return e},$=(e,o)=>Q(e,W(o));import{A as q,q as j,r as A,v as L,t as T,_ as U,b as i,d as h,e as C,g as l,w as r,h as w,B as y,E as N,i as _,z as B,G as z,D as H,H as Z,o as x,C as ee,x as V,k as I}from"./index.1664371959499.js";import{a as E,r as oe}from"./api.16643719594992.js";import{e as G}from"./enums.1664371959499.js";import"./Api.1664371959499.js";import"./Enum.1664371959499.js";const le=q({name:"RoleEdit",props:{visible:{type:Boolean},data:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:o}){const n=j(null),d=A({dvisible:!1,form:{id:null,name:"",status:1,remark:""},btnLoading:!1});L(e,t=>{d.dvisible=t.visible,t.data?d.form=k({},t.data):d.form={}});const g=()=>{o("update:visible",!1),o("cancel")},b=async()=>{n.value.validate(async t=>{t&&(await E.save.request(d.form),o("val-change",d.form),g(),d.btnLoading=!0,setTimeout(()=>{d.btnLoading=!1},1e3))})};return $(k({},T(d)),{roleForm:n,btnOk:b,cancel:g})}}),se={class:"role-dialog"},te={class:"dialog-footer"},ue=y("\u53D6 \u6D88"),re=y("\u786E \u5B9A");function ae(e,o,n,d,g,b){const t=i("el-input"),f=i("el-form-item"),c=i("el-form"),s=i("el-button"),p=i("el-dialog");return h(),C("div",se,[l(p,{title:e.title,modelValue:e.dvisible,"onUpdate:modelValue":o[4]||(o[4]=m=>e.dvisible=m),"show-close":!1,"before-close":e.cancel,width:"500px","destroy-on-close":!0},{footer:r(()=>[w("div",te,[l(s,{onClick:o[3]||(o[3]=m=>e.cancel())},{default:r(()=>[ue]),_:1}),l(s,{type:"primary",loading:e.btnLoading,onClick:e.btnOk},{default:r(()=>[re]),_:1},8,["loading","onClick"])])]),default:r(()=>[l(c,{ref:"roleForm",model:e.form,"label-width":"90px"},{default:r(()=>[l(f,{prop:"name",label:"\u89D2\u8272\u540D\u79F0:",required:""},{default:r(()=>[l(t,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=m=>e.form.name=m),"auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(f,{prop:"code",label:"\u89D2\u8272code:",required:""},{default:r(()=>[l(t,{disabled:e.form.id!=null,modelValue:e.form.code,"onUpdate:modelValue":o[1]||(o[1]=m=>e.form.code=m),placeholder:"COMMON\u5F00\u5934\u5219\u4E3A\u6240\u6709\u8D26\u53F7\u5171\u6709\u89D2\u8272","auto-complete":"off"},null,8,["disabled","modelValue"])]),_:1}),l(f,{label:"\u89D2\u8272\u63CF\u8FF0:"},{default:r(()=>[l(t,{modelValue:e.form.remark,"onUpdate:modelValue":o[2]||(o[2]=m=>e.form.remark=m),type:"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue","before-close"])])}var ne=U(le,[["render",ae]]);const ie=q({name:"ResourceEdit",props:{visible:{type:Boolean},title:{type:String},role:{type:Object},defaultCheckedKeys:{type:Array},resources:{type:Array}},setup(e,{emit:o}){const n=j(null),d=A({dialogVisible:!1,defaultProps:{children:"children",label:"name"}});L(()=>e.visible,c=>{d.dialogVisible=c});const g=c=>{let s=[];for(let p of c)b(p,s);return s},b=(c,s)=>{if(c.children!==null)for(let p of c.children)b(p,s);else s.push(c.id)},t=async()=>{let c=n.value.getCheckedKeys(),s=n.value.getHalfCheckedKeys(),p=[].concat(c,s).join(",");await E.saveResources.request({id:e.role.id,resourceIds:p}),N.success("\u4FDD\u5B58\u6210\u529F!"),o("cancel")},f=()=>{o("update:visible",!1),o("cancel")};return $(k({},T(d)),{enums:G,menuTree:n,btnOk:t,getAllLeafIds:g,cancel:f})}}),de={class:"custom-tree-node"},ce={key:0},pe={key:1,style:{color:"#67c23a"}},fe={class:"dialog-footer"},me=y("\u53D6 \u6D88"),ge=y("\u786E \u5B9A");function be(e,o,n,d,g,b){const t=i("el-tree"),f=i("el-button"),c=i("el-dialog");return h(),C("div",null,[l(c,{title:"\u5206\u914D\u201C"+e.role.name+"\u201D\u83DC\u5355&\u6743\u9650",modelValue:e.dialogVisible,"onUpdate:modelValue":o[0]||(o[0]=s=>e.dialogVisible=s),"before-close":e.cancel,"show-close":!1,width:"400px"},{footer:r(()=>[w("div",fe,[l(f,{onClick:e.cancel},{default:r(()=>[me]),_:1},8,["onClick"]),l(f,{type:"primary",onClick:e.btnOk},{default:r(()=>[ge]),_:1},8,["onClick"])])]),default:r(()=>[l(t,{style:{height:"50vh",overflow:"auto"},ref:"menuTree",data:e.resources,"show-checkbox":"","node-key":"id","default-checked-keys":e.defaultCheckedKeys,props:e.defaultProps},{default:r(({node:s,data:p})=>[w("span",de,[p.type==e.enums.ResourceTypeEnum.MENU.value?(h(),C("span",ce,_(s.label),1)):B("",!0),p.type==e.enums.ResourceTypeEnum.PERMISSION.value?(h(),C("span",pe,_(s.label),1)):B("",!0)])]),_:1},8,["data","default-checked-keys","props"])]),_:1},8,["title","modelValue","before-close"])])}var he=U(ie,[["render",be]]);const ye=q({name:"ShowResource",props:{visible:{type:Boolean},resources:{type:Array},title:{type:String}},setup(e,{emit:o}){const{proxy:n}=Z(),d=A({dialogVisible:!1,defaultProps:{children:"children",label:"name"}});L(()=>e.visible,t=>{d.dialogVisible=t});const g=t=>{z.alert('<strong style="margin-right: 18px">\u8D44\u6E90\u540D\u79F0:</strong>'+t.name+' <br/><strong style="margin-right: 18px">\u5206\u914D\u8D26\u53F7:</strong>'+t.creator+' <br/><strong style="margin-right: 18px">\u5206\u914D\u65F6\u95F4:</strong>'+n.$filters.dateFormat(t.createTime),"\u5206\u914D\u4FE1\u606F",{type:"info",dangerouslyUseHTMLString:!0,closeOnClickModal:!0,showConfirmButton:!1}).catch(()=>{})},b=()=>{o("update:visible",!1),o("update:resources",[])};return $(k({},T(d)),{enums:G,info:g,closeDialog:b})}}),ve={class:"custom-tree-node"},De={key:0},Ce={key:1,style:{color:"#67c23a"}};function Fe(e,o,n,d,g,b){const t=i("el-link"),f=i("el-tree"),c=i("el-dialog");return h(),C("div",null,[l(c,{onClose:e.closeDialog,title:e.title,"before-close":e.closeDialog,modelValue:e.dialogVisible,"onUpdate:modelValue":o[0]||(o[0]=s=>e.dialogVisible=s),width:"400px"},{default:r(()=>[l(f,{style:{height:"50vh",overflow:"auto"},data:e.resources,"node-key":"id",props:e.defaultProps},{default:r(({node:s,data:p})=>[w("span",ve,[p.type==e.enums.ResourceTypeEnum.MENU.value?(h(),C("span",De,_(s.label),1)):B("",!0),p.type==e.enums.ResourceTypeEnum.PERMISSION.value?(h(),C("span",Ce,_(s.label),1)):B("",!0),l(t,{onClick:H(m=>e.info(p),["prevent"]),style:{"margin-left":"25px"},icon:"el-icon-view",type:"info",underline:!1},null,8,["onClick"])])]),_:1},8,["data","props"])]),_:1},8,["onClose","title","before-close","modelValue"])])}var ke=U(ye,[["render",Fe]]);const Ee=q({name:"RoleList",components:{RoleEdit:ne,ResourceEdit:he,ShowResource:ke},setup(){const e=A({dialogFormVisible:!1,currentEditPermissions:!1,query:{pageNum:1,pageSize:10,name:null},total:0,roles:[],chooseId:null,chooseData:null,resourceDialog:{visible:!1,role:{},resources:[],defaultCheckedKeys:[]},roleEdit:{title:"\u89D2\u8272\u7F16\u8F91",visible:!1,role:{}},showResourceDialog:{visible:!1,resources:[],title:""}});x(()=>{o()});const o=async()=>{let u=await E.list.request(e.query);e.roles=u.list,e.total=u.total},n=u=>{e.query.pageNum=u,o()},d=u=>{!u||(e.chooseId=u.id,e.chooseData=u)},g=()=>{N.success("\u4FEE\u6539\u6210\u529F\uFF01"),e.chooseId=null,e.chooseData=null,o()},b=u=>{u?e.roleEdit.role=u:e.roleEdit.role=!1,e.roleEdit.visible=!0},t=async u=>{try{await z.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${u.name}] \u8BE5\u89D2\u8272\uFF0C\u4EE5\u53CA\u4E0E\u8BE5\u89D2\u8272\u6709\u5173\u7684\u8D26\u53F7\u89D2\u8272\u5173\u8054\u4FE1\u606F\u548C\u8D44\u6E90\u89D2\u8272\u5173\u8054\u4FE1\u606F, \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await E.del.request({id:u.id}),N.success("\u5220\u9664\u6210\u529F\uFF01"),o()}catch{}},f=async u=>{e.showResourceDialog.resources=await E.roleResources.request({id:u.id}),e.showResourceDialog.title='"'+u.name+'"\u7684\u83DC\u5355&\u6743\u9650',e.showResourceDialog.visible=!0},c=()=>{e.showResourceDialog.visible=!1,e.showResourceDialog.resources=[]},s=async u=>{let v=await oe.list.request(null);e.resourceDialog.resources=v;let D=await E.roleResourceIds.request({id:u.id}),M=D||[],R=[],F=p(e.resourceDialog.resources);for(let a of F)M.includes(a)&&R.push(a);e.resourceDialog.defaultCheckedKeys=R,e.resourceDialog.visible=!0,e.resourceDialog.role=u},p=u=>{let v=[];for(let D of u)m(D,v);return v},m=(u,v)=>{if(u.children!==null)for(let D of u.children)m(D,v);else v.push(u.id)},S=()=>{e.resourceDialog.visible=!1,setTimeout(()=>{e.resourceDialog.role={},e.resourceDialog.defaultCheckedKeys=[]},10)};return $(k({},T(e)),{search:o,handlePageChange:n,choose:d,roleEditChange:g,editRole:b,deleteRole:t,showResources:f,closeShowResourceDialog:c,editResource:s,cancelEditResources:S})}}),we={class:"role-list"},_e=y("\u6DFB\u52A0"),$e=y("\u7F16\u8F91"),Re=y("\u5206\u914D\u83DC\u5355&\u6743\u9650"),Ve=y("\u5220\u9664"),Ie={style:{float:"right"}},Be=w("i",null,null,-1),qe=y("\u83DC\u5355&\u6743\u9650");function Ae(e,o,n,d,g,b){const t=i("el-button"),f=i("el-input"),c=i("el-radio"),s=i("el-table-column"),p=i("el-link"),m=i("el-table"),S=i("el-pagination"),u=i("el-row"),v=i("el-card"),D=i("role-edit"),M=i("resource-edit"),R=i("show-resource"),F=ee("auth");return h(),C("div",we,[l(v,null,{default:r(()=>[V((h(),I(t,{type:"primary",icon:"plus",onClick:o[0]||(o[0]=a=>e.editRole(!1))},{default:r(()=>[_e]),_:1})),[[F,"role:add"]]),V((h(),I(t,{disabled:e.chooseId==null,onClick:o[1]||(o[1]=a=>e.editRole(e.chooseData)),type:"primary",icon:"edit"},{default:r(()=>[$e]),_:1},8,["disabled"])),[[F,"role:update"]]),V((h(),I(t,{disabled:e.chooseId==null,onClick:o[2]||(o[2]=a=>e.editResource(e.chooseData)),type:"success",icon:"setting"},{default:r(()=>[Re]),_:1},8,["disabled"])),[[F,"role:saveResources"]]),V((h(),I(t,{disabled:e.chooseId==null,onClick:o[3]||(o[3]=a=>e.deleteRole(e.chooseData)),type:"danger",icon:"delete"},{default:r(()=>[Ve]),_:1},8,["disabled"])),[[F,"role:del"]]),w("div",Ie,[l(f,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",class:"mr2",style:{width:"200px"},modelValue:e.query.name,"onUpdate:modelValue":o[4]||(o[4]=a=>e.query.name=a),onClear:e.search,clearable:""},null,8,["modelValue","onClear"]),l(t,{onClick:e.search,type:"success",icon:"search"},null,8,["onClick"])]),l(m,{data:e.roles,onCurrentChange:e.choose,ref:"table",style:{width:"100%"}},{default:r(()=>[l(s,{label:"\u9009\u62E9",width:"55px"},{default:r(a=>[l(c,{modelValue:e.chooseId,"onUpdate:modelValue":o[5]||(o[5]=O=>e.chooseId=O),label:a.row.id},{default:r(()=>[Be]),_:2},1032,["modelValue","label"])]),_:1}),l(s,{prop:"name",label:"\u89D2\u8272\u540D\u79F0"}),l(s,{prop:"code",label:"\u89D2\u8272code"}),l(s,{prop:"remark",label:"\u63CF\u8FF0","min-width":"160px","show-overflow-tooltip":""}),l(s,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"},{default:r(a=>[y(_(e.$filters.dateFormat(a.row.createTime)),1)]),_:1}),l(s,{prop:"updateTime",label:"\u4FEE\u6539\u65F6\u95F4"},{default:r(a=>[y(_(e.$filters.dateFormat(a.row.updateTime)),1)]),_:1}),l(s,{label:"\u67E5\u770B\u66F4\u591A","min-width":"80px"},{default:r(a=>[l(p,{onClick:H(O=>e.showResources(a.row),["prevent"]),type:"info"},{default:r(()=>[qe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onCurrentChange"]),l(u,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:r(()=>[l(S,{style:{"text-align":"right"},onCurrentChange:e.handlePageChange,total:e.total,layout:"prev, pager, next, total, jumper","current-page":e.query.pageNum,"onUpdate:current-page":o[6]||(o[6]=a=>e.query.pageNum=a),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1})]),_:1}),l(D,{title:e.roleEdit.title,visible:e.roleEdit.visible,"onUpdate:visible":o[7]||(o[7]=a=>e.roleEdit.visible=a),data:e.roleEdit.role,onValChange:e.roleEditChange},null,8,["title","visible","data","onValChange"]),l(M,{visible:e.resourceDialog.visible,"onUpdate:visible":o[8]||(o[8]=a=>e.resourceDialog.visible=a),role:e.resourceDialog.role,resources:e.resourceDialog.resources,defaultCheckedKeys:e.resourceDialog.defaultCheckedKeys,onCancel:o[9]||(o[9]=a=>e.cancelEditResources())},null,8,["visible","role","resources","defaultCheckedKeys"]),l(R,{visible:e.showResourceDialog.visible,"onUpdate:visible":o[10]||(o[10]=a=>e.showResourceDialog.visible=a),title:e.showResourceDialog.title,resources:e.showResourceDialog.resources,"onUpdate:resources":o[11]||(o[11]=a=>e.showResourceDialog.resources=a)},null,8,["visible","title","resources"])])}var Oe=U(Ee,[["render",Ae]]);export{Oe as default};