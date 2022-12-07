import{l as x,b as N}from"./api.c6d0d30d.js";import{d as B,c as z,t as A,e as S,h as o,i as c,j as f,k as e,w as a,q as U,l,Q as j,R as I,m,v as _,F as T,U as L,s as w}from"./index.db2b5b0c.js";import"./Api.b0f465a3.js";const P={class:"role-list"},R={style:{float:"right"}},J=B({__name:"SyslogList",setup(M){const r=z({query:{type:null,creatorId:null,pageNum:1,pageSize:10,name:null},total:0,logs:[],accounts:[]}),{query:n,total:F,logs:b,accounts:h}=A(r);S(()=>{i()});const i=async()=>{let s=await x.list.request(r.query);r.logs=s.list,r.total=s.total},C=s=>{r.query.pageNum=s,i()},v=s=>{N.list.request({username:s}).then(u=>{r.accounts=u.list})};return(s,u)=>{const d=o("el-option"),g=o("el-select"),D=o("el-button"),p=o("el-table-column"),y=o("el-tag"),E=o("el-table"),V=o("el-pagination"),k=o("el-row"),q=o("el-card");return c(),f("div",P,[e(q,null,{default:a(()=>[U("div",R,[e(g,{remote:"","remote-method":v,modelValue:l(n).creatorId,"onUpdate:modelValue":u[0]||(u[0]=t=>l(n).creatorId=t),filterable:"",placeholder:"\u8BF7\u8F93\u5165\u5E76\u9009\u62E9\u8D26\u53F7",clearable:"",class:"mr5"},{default:a(()=>[(c(!0),f(j,null,I(l(h),t=>(c(),m(d,{key:t.id,label:t.username,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(g,{modelValue:l(n).type,"onUpdate:modelValue":u[1]||(u[1]=t=>l(n).type=t),filterable:"",placeholder:"\u8BF7\u9009\u62E9\u64CD\u4F5C\u7ED3\u679C",clearable:"",class:"mr5"},{default:a(()=>[e(d,{label:"\u6210\u529F",value:1}),e(d,{label:"\u5931\u8D25",value:2})]),_:1},8,["modelValue"]),e(D,{onClick:i,type:"success",icon:"search"})]),e(E,{data:l(b),style:{width:"100%"}},{default:a(()=>[e(p,{prop:"creator",label:"\u64CD\u4F5C\u4EBA","min-width":"100","show-overflow-tooltip":""}),e(p,{prop:"createTime",label:"\u64CD\u4F5C\u65F6\u95F4","min-width":"160"},{default:a(t=>[_(T(l(L)(t.row.createTime)),1)]),_:1}),e(p,{prop:"type",label:"\u7ED3\u679C","min-width":"65"},{default:a(t=>[t.row.type==1?(c(),m(y,{key:0,type:"success",size:"small"},{default:a(()=>[_("\u6210\u529F")]),_:1})):w("",!0),t.row.type==2?(c(),m(y,{key:1,type:"danger",size:"small"},{default:a(()=>[_("\u5931\u8D25")]),_:1})):w("",!0)]),_:1}),e(p,{prop:"description",label:"\u63CF\u8FF0","min-width":"160","show-overflow-tooltip":""}),e(p,{prop:"reqParam",label:"\u64CD\u4F5C\u4FE1\u606F","min-width":"300","show-overflow-tooltip":""}),e(p,{prop:"resp",label:"\u54CD\u5E94\u4FE1\u606F","min-width":"200","show-overflow-tooltip":""})]),_:1},8,["data"]),e(k,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:a(()=>[e(V,{style:{"text-align":"right"},onCurrentChange:C,total:l(F),layout:"prev, pager, next, total, jumper","current-page":l(n).pageNum,"onUpdate:current-page":u[2]||(u[2]=t=>l(n).pageNum=t),"page-size":l(n).pageSize},null,8,["total","current-page","page-size"])]),_:1})]),_:1})])}}});export{J as default};
