<<<<<<<< HEAD:server/static/static/assets/MongoList.69e8ae0b.js
var he=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Z=(h,a,f)=>a in h?he(h,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):h[a]=f,K=(h,a)=>{for(var f in a||(a={}))ve.call(a,f)&&Z(h,f,a[f]);if(Y)for(var f of Y(a))ye.call(a,f)&&Z(h,f,a[f]);return h};import{m as F}from"./api.d20d68e1.js";import{t as Ce}from"./api.5d8c0e7b.js";import{m as we,_ as Fe}from"./TagSelect.abf2040a.js";import{d as te,r as Ee,c as ae,t as oe,L as Se,h as d,i as S,j as $,k as l,w as t,q,v as n,l as e,m as O,s as ee,Q as ne,R as ie,G as se,E as M,e as Ve,F as g,U as ze,W as Be,a4 as le,a5 as ke}from"./index.fc8fd637.js";import{f as D}from"./format.7a25bed6.js";import"./Api.6aea0f9f.js";const xe={class:"dialog-footer"},Ie=te({__name:"MongoEdit",props:{visible:{type:Boolean},mongo:{type:[Boolean,Object]},title:{type:String}},emits:["update:visible","cancel","val-change"],setup(h,{emit:a}){const f=h,N={tagId:[{required:!0,message:"\u8BF7\u9009\u62E9\u6807\u7B7E",trigger:["change","blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["change","blur"]}],uri:[{required:!0,message:"\u8BF7\u8F93\u5165mongo uri",trigger:["change","blur"]}]},U=Ee(null),p=ae({dialogVisible:!1,sshTunnelMachineList:[],form:{id:null,name:null,uri:null,enableSshTunnel:-1,sshTunnelMachineId:null,tagId:null,tagPath:null},btnLoading:!1}),{dialogVisible:C,sshTunnelMachineList:V,form:i,btnLoading:b}=oe(p);Se(f,async y=>{p.dialogVisible=y.visible,p.dialogVisible&&(y.mongo?p.form=K({},y.mongo):p.form={db:0},w())});const w=async()=>{if(p.form.enableSshTunnel==1&&p.sshTunnelMachineList.length==0){const y=await we.list.request({pageNum:1,pageSize:100});p.sshTunnelMachineList=y.list}},L=async()=>{U.value.validate(async y=>{if(y){const c=K({},p.form);F.saveMongo.request(c).then(()=>{M.success("\u4FDD\u5B58\u6210\u529F"),a("val-change",p.form),p.btnLoading=!0,setTimeout(()=>{p.btnLoading=!1},1e3),I()})}else return M.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},I=()=>{a("update:visible",!1),a("cancel")};return(y,c)=>{const B=d("el-form-item"),k=d("el-input"),j=d("el-checkbox"),A=d("el-col"),P=d("el-option"),R=d("el-select"),H=d("el-form"),E=d("el-button"),G=d("el-dialog");return S(),$("div",null,[l(G,{title:h.title,modelValue:e(C),"onUpdate:modelValue":c[7]||(c[7]=r=>se(C)?C.value=r:null),"before-close":I,"close-on-click-modal":!1,width:"38%","destroy-on-close":!0},{footer:t(()=>[q("div",xe,[l(E,{onClick:c[6]||(c[6]=r=>I())},{default:t(()=>[n("\u53D6 \u6D88")]),_:1}),l(E,{type:"primary",loading:e(b),onClick:L},{default:t(()=>[n("\u786E \u5B9A")]),_:1},8,["loading"])])]),default:t(()=>[l(H,{model:e(i),ref_key:"mongoForm",ref:U,rules:N,"label-width":"85px"},{default:t(()=>[l(B,{prop:"tagId",label:"\u6807\u7B7E:",required:""},{default:t(()=>[l(Fe,{"tag-id":e(i).tagId,"onUpdate:tag-id":c[0]||(c[0]=r=>e(i).tagId=r),"tag-path":e(i).tagPath,"onUpdate:tag-path":c[1]||(c[1]=r=>e(i).tagPath=r),style:{width:"100%"}},null,8,["tag-id","tag-path"])]),_:1}),l(B,{prop:"name",label:"\u540D\u79F0",required:""},{default:t(()=>[l(k,{modelValue:e(i).name,"onUpdate:modelValue":c[2]||(c[2]=r=>e(i).name=r),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0","auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(B,{prop:"uri",label:"uri",required:""},{default:t(()=>[l(k,{type:"textarea",rows:2,modelValue:e(i).uri,"onUpdate:modelValue":c[3]||(c[3]=r=>e(i).uri=r),modelModifiers:{trim:!0},placeholder:"\u5F62\u5982 mongodb://username:password@host1:port1","auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(B,{prop:"enableSshTunnel",label:"SSH\u96A7\u9053:"},{default:t(()=>[l(A,{span:3},{default:t(()=>[l(j,{onChange:w,modelValue:e(i).enableSshTunnel,"onUpdate:modelValue":c[4]||(c[4]=r=>e(i).enableSshTunnel=r),"true-label":1,"false-label":-1},null,8,["modelValue"])]),_:1}),e(i).enableSshTunnel==1?(S(),O(A,{key:0,span:2},{default:t(()=>[n(" \u673A\u5668: ")]),_:1})):ee("",!0),e(i).enableSshTunnel==1?(S(),O(A,{key:1,span:19},{default:t(()=>[l(R,{style:{width:"100%"},modelValue:e(i).sshTunnelMachineId,"onUpdate:modelValue":c[5]||(c[5]=r=>e(i).sshTunnelMachineId=r),placeholder:"\u8BF7\u9009\u62E9SSH\u96A7\u9053\u673A\u5668"},{default:t(()=>[(S(!0),$(ne,null,ie(e(V),r=>(S(),O(P,{key:r.id,label:`${r.ip}:${r.port} [${r.name}]`,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):ee("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}}),Ae={style:{float:"right"}},Te=q("i",null,null,-1),je=te({__name:"MongoList",setup(h){const a=ae({tags:[],dbOps:{dbId:0,db:""},list:[],total:0,currentId:null,currentData:null,query:{pageNum:1,pageSize:10,tagPath:null},mongoEditDialog:{visible:!1,data:null,title:"\u65B0\u589Emongo"},databaseDialog:{visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},collectionsDialog:{database:"",visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},createCollectionDialog:{visible:!1,form:{name:""}}}),{tags:f,list:N,total:U,currentId:p,query:C,mongoEditDialog:V,databaseDialog:i,collectionsDialog:b,createCollectionDialog:w}=oe(a);Ve(async()=>{E()});const L=s=>{a.query.pageNum=s,E()},I=s=>{!s||(a.currentId=s.id,a.currentData=s)},y=async s=>{a.dbOps.dbId=s,a.databaseDialog.data=(await F.databases.request({id:s})).Databases,a.databaseDialog.title="\u6570\u636E\u5E93\u5217\u8868",a.databaseDialog.visible=!0},c=async s=>{a.databaseDialog.statsDialog.data=await F.runCommand.request({id:a.currentId,database:s,command:{dbStats:1}}),a.databaseDialog.statsDialog.title=`'${s}' stats`,a.databaseDialog.statsDialog.visible=!0},B=async s=>{a.collectionsDialog.database=s,a.collectionsDialog.data=[],k(s),a.collectionsDialog.title=`'${s}' \u96C6\u5408`,a.collectionsDialog.visible=!0},k=async s=>{const u=await F.collections.request({id:a.currentId,database:s}),v=[];for(let Q of u)v.push({name:Q});a.collectionsDialog.data=v},j=async s=>{a.collectionsDialog.statsDialog.data=await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{collStats:s}}),a.collectionsDialog.statsDialog.title=`'${s}' stats`,a.collectionsDialog.statsDialog.visible=!0},A=async s=>{await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{drop:s}}),M.success("\u96C6\u5408\u5220\u9664\u6210\u529F"),k(a.collectionsDialog.database)},P=()=>{a.createCollectionDialog.visible=!0},R=async()=>{const s=a.createCollectionDialog.form;await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{create:s.name}}),M.success("\u96C6\u5408\u521B\u5EFA\u6210\u529F"),a.createCollectionDialog.visible=!1,a.createCollectionDialog.form={},k(a.collectionsDialog.database)},H=async()=>{try{await Be.confirm("\u786E\u5B9A\u5220\u9664\u8BE5mongo?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await F.deleteMongo.request({id:a.currentId}),M.success("\u5220\u9664\u6210\u529F"),a.currentData=null,a.currentId=null,E()}catch{}},E=async()=>{const s=await F.mongoList.request(a.query);a.list=s.list,a.total=s.total},G=async()=>{a.tags=await Ce.getAccountTags.request(null)},r=async(s=!1)=>{s?(a.mongoEditDialog.data=null,a.mongoEditDialog.title="\u65B0\u589Emongo"):(a.mongoEditDialog.data=a.currentData,a.mongoEditDialog.title="\u4FEE\u6539mongo"),a.mongoEditDialog.visible=!0},ue=()=>{a.currentId=null,a.currentData=null,E()},de=s=>{a.dbOps.db=s.Name;debugger;let u={tagPath:a.currentData.tagPath,dbId:a.dbOps.dbId,db:a.dbOps.db};a.databaseDialog.visible=!1,le.state.mongoDbOptInfo.dbOptInfo.db!==s.Name&&le.dispatch("mongoDbOptInfo/setMongoDbOptInfo",u),ke.push({name:"MongoDataOp"})};return(s,u)=>{const v=d("el-button"),Q=d("el-option"),re=d("el-select"),ge=d("el-radio"),_=d("el-table-column"),x=d("el-link"),W=d("el-table"),ce=d("el-pagination"),me=d("el-row"),pe=d("el-card"),J=d("el-divider"),m=d("el-descriptions-item"),X=d("el-descriptions"),T=d("el-dialog"),be=d("el-popconfirm"),fe=d("el-input"),_e=d("el-form-item"),De=d("el-form");return S(),$("div",null,[l(pe,null,{default:t(()=>[l(v,{type:"primary",icon:"plus",onClick:u[0]||(u[0]=o=>r(!0)),plain:""},{default:t(()=>[n("\u6DFB\u52A0")]),_:1}),l(v,{type:"primary",icon:"edit",disabled:e(p)==null,onClick:u[1]||(u[1]=o=>r(!1)),plain:""},{default:t(()=>[n("\u7F16\u8F91 ")]),_:1},8,["disabled"]),l(v,{type:"danger",icon:"delete",disabled:e(p)==null,onClick:H,plain:""},{default:t(()=>[n("\u5220\u9664 ")]),_:1},8,["disabled"]),q("div",Ae,[l(re,{onFocus:G,modelValue:e(C).tagPath,"onUpdate:modelValue":u[2]||(u[2]=o=>e(C).tagPath=o),placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E",filterable:"",clearable:""},{default:t(()=>[(S(!0),$(ne,null,ie(e(f),o=>(S(),O(Q,{key:o,label:o,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(v,{class:"ml5",onClick:E,type:"success",icon:"search"})]),l(W,{data:e(N),style:{width:"100%"},onCurrentChange:I,stripe:""},{default:t(()=>[l(_,{label:"\u9009\u62E9",width:"60px"},{default:t(o=>[l(ge,{modelValue:e(p),"onUpdate:modelValue":u[3]||(u[3]=z=>se(p)?p.value=z:null),label:o.row.id},{default:t(()=>[Te]),_:2},1032,["modelValue","label"])]),_:1}),l(_,{prop:"tagPath",label:"\u6807\u7B7E\u8DEF\u5F84","min-width":"150","show-overflow-tooltip":""}),l(_,{prop:"name",label:"\u540D\u79F0",width:""}),l(_,{prop:"uri",label:"\u8FDE\u63A5uri","min-width":"150","show-overflow-tooltip":""},{default:t(o=>[n(g(o.row.uri.split("@")[1]),1)]),_:1}),l(_,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"150"},{default:t(o=>[n(g(e(ze)(o.row.createTime)),1)]),_:1}),l(_,{prop:"creator",label:"\u521B\u5EFA\u4EBA"}),l(_,{label:"\u64CD\u4F5C",width:""},{default:t(o=>[l(x,{type:"primary",onClick:z=>y(o.row.id),plain:"",size:"small",underline:!1},{default:t(()=>[n("\u6570\u636E\u5E93")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(me,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:t(()=>[l(ce,{style:{"text-align":"right"},onCurrentChange:L,total:e(U),layout:"prev, pager, next, total, jumper","current-page":e(C).pageNum,"onUpdate:current-page":u[4]||(u[4]=o=>e(C).pageNum=o),"page-size":e(C).pageSize},null,8,["total","current-page","page-size"])]),_:1})]),_:1}),l(T,{width:"800px",title:e(i).title,modelValue:e(i).visible,"onUpdate:modelValue":u[6]||(u[6]=o=>e(i).visible=o)},{default:t(()=>[l(W,{data:e(i).data,size:"small"},{default:t(()=>[l(_,{"min-width":"130",property:"Name",label:"\u5E93\u540D"}),l(_,{"min-width":"90",property:"SizeOnDisk",label:"size"},{default:t(o=>[n(g(e(D)(o.row.SizeOnDisk)),1)]),_:1}),l(_,{"min-width":"80",property:"Empty",label:"\u662F\u5426\u4E3A\u7A7A"}),l(_,{"min-width":"150",label:"\u64CD\u4F5C"},{default:t(o=>[l(x,{type:"success",onClick:z=>c(o.row.Name),plain:"",size:"small",underline:!1},{default:t(()=>[n("stats")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(x,{type:"primary",onClick:z=>B(o.row.Name),plain:"",size:"small",underline:!1},{default:t(()=>[n("\u96C6\u5408")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(x,{type:"primary",onClick:z=>de(o.row),plain:"",size:"small",underline:!1},{default:t(()=>[n(" \u6570\u636E\u64CD\u4F5C")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(T,{width:"700px",title:e(i).statsDialog.title,modelValue:e(i).statsDialog.visible,"onUpdate:modelValue":u[5]||(u[5]=o=>e(i).statsDialog.visible=o)},{default:t(()=>[l(X,{title:"\u5E93\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:t(()=>[l(m,{label:"db","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.db),1)]),_:1}),l(m,{label:"collections","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.collections),1)]),_:1}),l(m,{label:"objects","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.objects),1)]),_:1}),l(m,{label:"indexes","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.indexes),1)]),_:1}),l(m,{label:"avgObjSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.avgObjSize)),1)]),_:1}),l(m,{label:"dataSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.dataSize)),1)]),_:1}),l(m,{label:"totalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.totalSize)),1)]),_:1}),l(m,{label:"storageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.storageSize)),1)]),_:1}),l(m,{label:"fsTotalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.fsTotalSize)),1)]),_:1}),l(m,{label:"fsUsedSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.fsUsedSize)),1)]),_:1}),l(m,{label:"indexSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.indexSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(T,{width:"600px",title:e(b).title,modelValue:e(b).visible,"onUpdate:modelValue":u[8]||(u[8]=o=>e(b).visible=o)},{default:t(()=>[q("div",null,[l(v,{onClick:P,type:"primary",icon:"plus",size:"small"},{default:t(()=>[n("\u65B0\u5EFA")]),_:1})]),l(W,{border:"",stripe:"",data:e(b).data,size:"small"},{default:t(()=>[l(_,{prop:"name",label:"\u540D\u79F0","show-overflow-tooltip":""}),l(_,{"min-width":"80",label:"\u64CD\u4F5C"},{default:t(o=>[l(x,{type:"success",onClick:z=>j(o.row.name),plain:"",size:"small",underline:!1},{default:t(()=>[n("stats")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(be,{onConfirm:z=>A(o.row.name),title:"\u786E\u5B9A\u5220\u9664\u8BE5\u96C6\u5408?"},{reference:t(()=>[l(x,{type:"danger",plain:"",size:"small",underline:!1},{default:t(()=>[n("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),l(T,{width:"700px",title:e(b).statsDialog.title,modelValue:e(b).statsDialog.visible,"onUpdate:modelValue":u[7]||(u[7]=o=>e(b).statsDialog.visible=o)},{default:t(()=>[l(X,{title:"\u96C6\u5408\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:t(()=>[l(m,{label:"ns","label-align":"right",span:2,align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.ns),1)]),_:1}),l(m,{label:"count","label-align":"right",align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.count),1)]),_:1}),l(m,{label:"avgObjSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.avgObjSize)),1)]),_:1}),l(m,{label:"nindexes","label-align":"right",align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.nindexes),1)]),_:1}),l(m,{label:"size","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.size)),1)]),_:1}),l(m,{label:"totalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.totalSize)),1)]),_:1}),l(m,{label:"storageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.storageSize)),1)]),_:1}),l(m,{label:"freeStorageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.freeStorageSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(T,{width:"400px",title:"\u65B0\u5EFA\u96C6\u5408",modelValue:e(w).visible,"onUpdate:modelValue":u[11]||(u[11]=o=>e(w).visible=o),"destroy-on-close":!0},{footer:t(()=>[q("div",null,[l(v,{onClick:u[10]||(u[10]=o=>e(w).visible=!1)},{default:t(()=>[n("\u53D6 \u6D88")]),_:1}),l(v,{onClick:R,type:"primary"},{default:t(()=>[n("\u786E \u5B9A")]),_:1})])]),default:t(()=>[l(De,{model:e(w).form,"label-width":"70px"},{default:t(()=>[l(_e,{prop:"name",label:"\u96C6\u5408\u540D",required:""},{default:t(()=>[l(fe,{modelValue:e(w).form.name,"onUpdate:modelValue":u[9]||(u[9]=o=>e(w).form.name=o),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(Ie,{onValChange:ue,title:e(V).title,visible:e(V).visible,"onUpdate:visible":u[12]||(u[12]=o=>e(V).visible=o),mongo:e(V).data,"onUpdate:mongo":u[13]||(u[13]=o=>e(V).data=o)},null,8,["title","visible","mongo"])])}}});export{je as default};
========
var he=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Z=(h,a,f)=>a in h?he(h,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):h[a]=f,K=(h,a)=>{for(var f in a||(a={}))ve.call(a,f)&&Z(h,f,a[f]);if(Y)for(var f of Y(a))ye.call(a,f)&&Z(h,f,a[f]);return h};import{m as F}from"./api.97cf6fac.js";import{t as Ce}from"./api.1d0361cc.js";import{m as we,_ as Fe}from"./TagSelect.67390cfb.js";import{d as te,r as Ee,c as ae,t as oe,L as Se,h as d,i as S,j as $,k as l,w as t,q,v as n,l as e,m as O,s as ee,Q as ne,R as ie,G as se,E as M,e as Ve,F as g,U as ze,W as Be,a4 as le,a5 as ke}from"./index.db2b5b0c.js";import{f as D}from"./format.fd72f709.js";import"./Api.b0f465a3.js";const xe={class:"dialog-footer"},Ie=te({__name:"MongoEdit",props:{visible:{type:Boolean},mongo:{type:[Boolean,Object]},title:{type:String}},emits:["update:visible","cancel","val-change"],setup(h,{emit:a}){const f=h,N={tagId:[{required:!0,message:"\u8BF7\u9009\u62E9\u6807\u7B7E",trigger:["change","blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["change","blur"]}],uri:[{required:!0,message:"\u8BF7\u8F93\u5165mongo uri",trigger:["change","blur"]}]},U=Ee(null),p=ae({dialogVisible:!1,sshTunnelMachineList:[],form:{id:null,name:null,uri:null,enableSshTunnel:-1,sshTunnelMachineId:null,tagId:null,tagPath:null},btnLoading:!1}),{dialogVisible:C,sshTunnelMachineList:V,form:i,btnLoading:b}=oe(p);Se(f,async y=>{p.dialogVisible=y.visible,p.dialogVisible&&(y.mongo?p.form=K({},y.mongo):p.form={db:0},w())});const w=async()=>{if(p.form.enableSshTunnel==1&&p.sshTunnelMachineList.length==0){const y=await we.list.request({pageNum:1,pageSize:100});p.sshTunnelMachineList=y.list}},L=async()=>{U.value.validate(async y=>{if(y){const c=K({},p.form);F.saveMongo.request(c).then(()=>{M.success("\u4FDD\u5B58\u6210\u529F"),a("val-change",p.form),p.btnLoading=!0,setTimeout(()=>{p.btnLoading=!1},1e3),I()})}else return M.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},I=()=>{a("update:visible",!1),a("cancel")};return(y,c)=>{const B=d("el-form-item"),k=d("el-input"),j=d("el-checkbox"),A=d("el-col"),P=d("el-option"),R=d("el-select"),H=d("el-form"),E=d("el-button"),G=d("el-dialog");return S(),$("div",null,[l(G,{title:h.title,modelValue:e(C),"onUpdate:modelValue":c[7]||(c[7]=r=>se(C)?C.value=r:null),"before-close":I,"close-on-click-modal":!1,width:"38%","destroy-on-close":!0},{footer:t(()=>[q("div",xe,[l(E,{onClick:c[6]||(c[6]=r=>I())},{default:t(()=>[n("\u53D6 \u6D88")]),_:1}),l(E,{type:"primary",loading:e(b),onClick:L},{default:t(()=>[n("\u786E \u5B9A")]),_:1},8,["loading"])])]),default:t(()=>[l(H,{model:e(i),ref_key:"mongoForm",ref:U,rules:N,"label-width":"85px"},{default:t(()=>[l(B,{prop:"tagId",label:"\u6807\u7B7E:",required:""},{default:t(()=>[l(Fe,{"tag-id":e(i).tagId,"onUpdate:tag-id":c[0]||(c[0]=r=>e(i).tagId=r),"tag-path":e(i).tagPath,"onUpdate:tag-path":c[1]||(c[1]=r=>e(i).tagPath=r),style:{width:"100%"}},null,8,["tag-id","tag-path"])]),_:1}),l(B,{prop:"name",label:"\u540D\u79F0",required:""},{default:t(()=>[l(k,{modelValue:e(i).name,"onUpdate:modelValue":c[2]||(c[2]=r=>e(i).name=r),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0","auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(B,{prop:"uri",label:"uri",required:""},{default:t(()=>[l(k,{type:"textarea",rows:2,modelValue:e(i).uri,"onUpdate:modelValue":c[3]||(c[3]=r=>e(i).uri=r),modelModifiers:{trim:!0},placeholder:"\u5F62\u5982 mongodb://username:password@host1:port1","auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(B,{prop:"enableSshTunnel",label:"SSH\u96A7\u9053:"},{default:t(()=>[l(A,{span:3},{default:t(()=>[l(j,{onChange:w,modelValue:e(i).enableSshTunnel,"onUpdate:modelValue":c[4]||(c[4]=r=>e(i).enableSshTunnel=r),"true-label":1,"false-label":-1},null,8,["modelValue"])]),_:1}),e(i).enableSshTunnel==1?(S(),O(A,{key:0,span:2},{default:t(()=>[n(" \u673A\u5668: ")]),_:1})):ee("",!0),e(i).enableSshTunnel==1?(S(),O(A,{key:1,span:19},{default:t(()=>[l(R,{style:{width:"100%"},modelValue:e(i).sshTunnelMachineId,"onUpdate:modelValue":c[5]||(c[5]=r=>e(i).sshTunnelMachineId=r),placeholder:"\u8BF7\u9009\u62E9SSH\u96A7\u9053\u673A\u5668"},{default:t(()=>[(S(!0),$(ne,null,ie(e(V),r=>(S(),O(P,{key:r.id,label:`${r.ip}:${r.port} [${r.name}]`,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):ee("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}}),Ae={style:{float:"right"}},Te=q("i",null,null,-1),je=te({__name:"MongoList",setup(h){const a=ae({tags:[],dbOps:{dbId:0,db:""},list:[],total:0,currentId:null,currentData:null,query:{pageNum:1,pageSize:10,tagPath:null},mongoEditDialog:{visible:!1,data:null,title:"\u65B0\u589Emongo"},databaseDialog:{visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},collectionsDialog:{database:"",visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},createCollectionDialog:{visible:!1,form:{name:""}}}),{tags:f,list:N,total:U,currentId:p,query:C,mongoEditDialog:V,databaseDialog:i,collectionsDialog:b,createCollectionDialog:w}=oe(a);Ve(async()=>{E()});const L=s=>{a.query.pageNum=s,E()},I=s=>{!s||(a.currentId=s.id,a.currentData=s)},y=async s=>{a.dbOps.dbId=s,a.databaseDialog.data=(await F.databases.request({id:s})).Databases,a.databaseDialog.title="\u6570\u636E\u5E93\u5217\u8868",a.databaseDialog.visible=!0},c=async s=>{a.databaseDialog.statsDialog.data=await F.runCommand.request({id:a.currentId,database:s,command:{dbStats:1}}),a.databaseDialog.statsDialog.title=`'${s}' stats`,a.databaseDialog.statsDialog.visible=!0},B=async s=>{a.collectionsDialog.database=s,a.collectionsDialog.data=[],k(s),a.collectionsDialog.title=`'${s}' \u96C6\u5408`,a.collectionsDialog.visible=!0},k=async s=>{const u=await F.collections.request({id:a.currentId,database:s}),v=[];for(let Q of u)v.push({name:Q});a.collectionsDialog.data=v},j=async s=>{a.collectionsDialog.statsDialog.data=await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{collStats:s}}),a.collectionsDialog.statsDialog.title=`'${s}' stats`,a.collectionsDialog.statsDialog.visible=!0},A=async s=>{await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{drop:s}}),M.success("\u96C6\u5408\u5220\u9664\u6210\u529F"),k(a.collectionsDialog.database)},P=()=>{a.createCollectionDialog.visible=!0},R=async()=>{const s=a.createCollectionDialog.form;await F.runCommand.request({id:a.currentId,database:a.collectionsDialog.database,command:{create:s.name}}),M.success("\u96C6\u5408\u521B\u5EFA\u6210\u529F"),a.createCollectionDialog.visible=!1,a.createCollectionDialog.form={},k(a.collectionsDialog.database)},H=async()=>{try{await Be.confirm("\u786E\u5B9A\u5220\u9664\u8BE5mongo?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await F.deleteMongo.request({id:a.currentId}),M.success("\u5220\u9664\u6210\u529F"),a.currentData=null,a.currentId=null,E()}catch{}},E=async()=>{const s=await F.mongoList.request(a.query);a.list=s.list,a.total=s.total},G=async()=>{a.tags=await Ce.getAccountTags.request(null)},r=async(s=!1)=>{s?(a.mongoEditDialog.data=null,a.mongoEditDialog.title="\u65B0\u589Emongo"):(a.mongoEditDialog.data=a.currentData,a.mongoEditDialog.title="\u4FEE\u6539mongo"),a.mongoEditDialog.visible=!0},ue=()=>{a.currentId=null,a.currentData=null,E()},de=s=>{a.dbOps.db=s.Name;debugger;let u={tagPath:a.currentData.tagPath,dbId:a.dbOps.dbId,db:a.dbOps.db};a.databaseDialog.visible=!1,le.state.mongoDbOptInfo.dbOptInfo.db!==s.Name&&le.dispatch("mongoDbOptInfo/setMongoDbOptInfo",u),ke.push({name:"MongoDataOp"})};return(s,u)=>{const v=d("el-button"),Q=d("el-option"),re=d("el-select"),ge=d("el-radio"),_=d("el-table-column"),x=d("el-link"),W=d("el-table"),ce=d("el-pagination"),me=d("el-row"),pe=d("el-card"),J=d("el-divider"),m=d("el-descriptions-item"),X=d("el-descriptions"),T=d("el-dialog"),be=d("el-popconfirm"),fe=d("el-input"),_e=d("el-form-item"),De=d("el-form");return S(),$("div",null,[l(pe,null,{default:t(()=>[l(v,{type:"primary",icon:"plus",onClick:u[0]||(u[0]=o=>r(!0)),plain:""},{default:t(()=>[n("\u6DFB\u52A0")]),_:1}),l(v,{type:"primary",icon:"edit",disabled:e(p)==null,onClick:u[1]||(u[1]=o=>r(!1)),plain:""},{default:t(()=>[n("\u7F16\u8F91 ")]),_:1},8,["disabled"]),l(v,{type:"danger",icon:"delete",disabled:e(p)==null,onClick:H,plain:""},{default:t(()=>[n("\u5220\u9664 ")]),_:1},8,["disabled"]),q("div",Ae,[l(re,{onFocus:G,modelValue:e(C).tagPath,"onUpdate:modelValue":u[2]||(u[2]=o=>e(C).tagPath=o),placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E",filterable:"",clearable:""},{default:t(()=>[(S(!0),$(ne,null,ie(e(f),o=>(S(),O(Q,{key:o,label:o,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(v,{class:"ml5",onClick:E,type:"success",icon:"search"})]),l(W,{data:e(N),style:{width:"100%"},onCurrentChange:I,stripe:""},{default:t(()=>[l(_,{label:"\u9009\u62E9",width:"60px"},{default:t(o=>[l(ge,{modelValue:e(p),"onUpdate:modelValue":u[3]||(u[3]=z=>se(p)?p.value=z:null),label:o.row.id},{default:t(()=>[Te]),_:2},1032,["modelValue","label"])]),_:1}),l(_,{prop:"tagPath",label:"\u6807\u7B7E\u8DEF\u5F84","min-width":"150","show-overflow-tooltip":""}),l(_,{prop:"name",label:"\u540D\u79F0",width:""}),l(_,{prop:"uri",label:"\u8FDE\u63A5uri","min-width":"150","show-overflow-tooltip":""},{default:t(o=>[n(g(o.row.uri.split("@")[1]),1)]),_:1}),l(_,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"150"},{default:t(o=>[n(g(e(ze)(o.row.createTime)),1)]),_:1}),l(_,{prop:"creator",label:"\u521B\u5EFA\u4EBA"}),l(_,{label:"\u64CD\u4F5C",width:""},{default:t(o=>[l(x,{type:"primary",onClick:z=>y(o.row.id),plain:"",size:"small",underline:!1},{default:t(()=>[n("\u6570\u636E\u5E93")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(me,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:t(()=>[l(ce,{style:{"text-align":"right"},onCurrentChange:L,total:e(U),layout:"prev, pager, next, total, jumper","current-page":e(C).pageNum,"onUpdate:current-page":u[4]||(u[4]=o=>e(C).pageNum=o),"page-size":e(C).pageSize},null,8,["total","current-page","page-size"])]),_:1})]),_:1}),l(T,{width:"800px",title:e(i).title,modelValue:e(i).visible,"onUpdate:modelValue":u[6]||(u[6]=o=>e(i).visible=o)},{default:t(()=>[l(W,{data:e(i).data,size:"small"},{default:t(()=>[l(_,{"min-width":"130",property:"Name",label:"\u5E93\u540D"}),l(_,{"min-width":"90",property:"SizeOnDisk",label:"size"},{default:t(o=>[n(g(e(D)(o.row.SizeOnDisk)),1)]),_:1}),l(_,{"min-width":"80",property:"Empty",label:"\u662F\u5426\u4E3A\u7A7A"}),l(_,{"min-width":"150",label:"\u64CD\u4F5C"},{default:t(o=>[l(x,{type:"success",onClick:z=>c(o.row.Name),plain:"",size:"small",underline:!1},{default:t(()=>[n("stats")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(x,{type:"primary",onClick:z=>B(o.row.Name),plain:"",size:"small",underline:!1},{default:t(()=>[n("\u96C6\u5408")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(x,{type:"primary",onClick:z=>de(o.row),plain:"",size:"small",underline:!1},{default:t(()=>[n(" \u6570\u636E\u64CD\u4F5C")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(T,{width:"700px",title:e(i).statsDialog.title,modelValue:e(i).statsDialog.visible,"onUpdate:modelValue":u[5]||(u[5]=o=>e(i).statsDialog.visible=o)},{default:t(()=>[l(X,{title:"\u5E93\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:t(()=>[l(m,{label:"db","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.db),1)]),_:1}),l(m,{label:"collections","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.collections),1)]),_:1}),l(m,{label:"objects","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.objects),1)]),_:1}),l(m,{label:"indexes","label-align":"right",align:"center"},{default:t(()=>[n(g(e(i).statsDialog.data.indexes),1)]),_:1}),l(m,{label:"avgObjSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.avgObjSize)),1)]),_:1}),l(m,{label:"dataSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.dataSize)),1)]),_:1}),l(m,{label:"totalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.totalSize)),1)]),_:1}),l(m,{label:"storageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.storageSize)),1)]),_:1}),l(m,{label:"fsTotalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.fsTotalSize)),1)]),_:1}),l(m,{label:"fsUsedSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.fsUsedSize)),1)]),_:1}),l(m,{label:"indexSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(i).statsDialog.data.indexSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(T,{width:"600px",title:e(b).title,modelValue:e(b).visible,"onUpdate:modelValue":u[8]||(u[8]=o=>e(b).visible=o)},{default:t(()=>[q("div",null,[l(v,{onClick:P,type:"primary",icon:"plus",size:"small"},{default:t(()=>[n("\u65B0\u5EFA")]),_:1})]),l(W,{border:"",stripe:"",data:e(b).data,size:"small"},{default:t(()=>[l(_,{prop:"name",label:"\u540D\u79F0","show-overflow-tooltip":""}),l(_,{"min-width":"80",label:"\u64CD\u4F5C"},{default:t(o=>[l(x,{type:"success",onClick:z=>j(o.row.name),plain:"",size:"small",underline:!1},{default:t(()=>[n("stats")]),_:2},1032,["onClick"]),l(J,{direction:"vertical","border-style":"dashed"}),l(be,{onConfirm:z=>A(o.row.name),title:"\u786E\u5B9A\u5220\u9664\u8BE5\u96C6\u5408?"},{reference:t(()=>[l(x,{type:"danger",plain:"",size:"small",underline:!1},{default:t(()=>[n("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),l(T,{width:"700px",title:e(b).statsDialog.title,modelValue:e(b).statsDialog.visible,"onUpdate:modelValue":u[7]||(u[7]=o=>e(b).statsDialog.visible=o)},{default:t(()=>[l(X,{title:"\u96C6\u5408\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:t(()=>[l(m,{label:"ns","label-align":"right",span:2,align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.ns),1)]),_:1}),l(m,{label:"count","label-align":"right",align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.count),1)]),_:1}),l(m,{label:"avgObjSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.avgObjSize)),1)]),_:1}),l(m,{label:"nindexes","label-align":"right",align:"center"},{default:t(()=>[n(g(e(b).statsDialog.data.nindexes),1)]),_:1}),l(m,{label:"size","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.size)),1)]),_:1}),l(m,{label:"totalSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.totalSize)),1)]),_:1}),l(m,{label:"storageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.storageSize)),1)]),_:1}),l(m,{label:"freeStorageSize","label-align":"right",align:"center"},{default:t(()=>[n(g(e(D)(e(b).statsDialog.data.freeStorageSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(T,{width:"400px",title:"\u65B0\u5EFA\u96C6\u5408",modelValue:e(w).visible,"onUpdate:modelValue":u[11]||(u[11]=o=>e(w).visible=o),"destroy-on-close":!0},{footer:t(()=>[q("div",null,[l(v,{onClick:u[10]||(u[10]=o=>e(w).visible=!1)},{default:t(()=>[n("\u53D6 \u6D88")]),_:1}),l(v,{onClick:R,type:"primary"},{default:t(()=>[n("\u786E \u5B9A")]),_:1})])]),default:t(()=>[l(De,{model:e(w).form,"label-width":"70px"},{default:t(()=>[l(_e,{prop:"name",label:"\u96C6\u5408\u540D",required:""},{default:t(()=>[l(fe,{modelValue:e(w).form.name,"onUpdate:modelValue":u[9]||(u[9]=o=>e(w).form.name=o),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(Ie,{onValChange:ue,title:e(V).title,visible:e(V).visible,"onUpdate:visible":u[12]||(u[12]=o=>e(V).visible=o),mongo:e(V).data,"onUpdate:mongo":u[13]||(u[13]=o=>e(V).data=o)},null,8,["title","visible","mongo"])])}}});export{je as default};
>>>>>>>> 804fd3b (1.加密sql传输):server/static/static/assets/MongoList.1d41e14c.js
