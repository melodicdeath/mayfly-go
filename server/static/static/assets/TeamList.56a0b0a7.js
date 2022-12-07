import{d as ge,r as R,c as fe,t as _e,e as be,h as d,V as De,i as p,j as P,k as t,w as u,I as w,m as _,v as i,l as a,q as m,G as he,F as V,U as L,a1 as G,s as we,Q as ye,R as Fe,E as C,W as Te}from"./index.db2b5b0c.js";import{t as g}from"./api.1d0361cc.js";import{b as ve}from"./api.c6d0d30d.js";import{n as Ve}from"./assert.d82c837d.js";import"./Api.b0f465a3.js";const Ce={class:"role-list"},ke={style:{float:"right"}},Ee=m("i",null,null,-1),Me={class:"dialog-footer"},xe={class:"custom-tree-node"},Be={style:{"font-size":"13px"}},Ie=m("span",{style:{color:"#3c8dbc"}},"\u3010",-1),qe=m("span",{style:{color:"#3c8dbc"}},"\u3011",-1),Ae={class:"dialog-footer"},ze={class:"toolbar"},$e={style:{float:"right"}},Ue=m("i",null,null,-1),Ne={class:"dialog-footer"},Qe=ge({__name:"TeamList",setup(Se){const x=R(null),Q=R(null),o=fe({currentEditPermissions:!1,addTeamDialog:{title:"\u65B0\u589E\u56E2\u961F",visible:!1,form:{id:0,name:"",remark:""}},query:{pageNum:1,pageSize:10,name:null},total:0,data:[],chooseId:0,chooseData:null,showMemDialog:{visible:!1,chooseId:0,chooseData:null,query:{pageSize:10,pageNum:1,teamId:null,username:null},members:{list:[],total:null},title:"",addVisible:!1,memForm:{accountIds:[],teamId:0},accounts:Array()},showTagDialog:{title:"\u9879\u76EE\u4FE1\u606F",visible:!1,tags:[],teamId:0,tagTreeTeams:[],props:{value:"id",label:"codePath",children:"children"}}}),{query:y,addTeamDialog:b,total:W,data:H,chooseId:F,chooseData:z,showMemDialog:n,showTagDialog:f}=_e(o);be(()=>{D()});const D=async()=>{let s=await g.getTeams.request(o.query);o.data=s.list,o.total=s.total},J=s=>{o.query.pageNum=s,D()},K=s=>{!s||(o.chooseId=s.id,o.chooseData=s)},$=s=>{s&&(o.addTeamDialog.form.id=s.id,o.addTeamDialog.form.name=s.name,o.addTeamDialog.form.remark=s.remark,o.addTeamDialog.title=`\u4FEE\u6539 [${s.codePath}] \u4FE1\u606F`),o.addTeamDialog.visible=!0},O=async()=>{x.value.validate(async s=>{if(s){const l=o.addTeamDialog.form;await g.saveTeam.request(l),C.success("\u4FDD\u5B58\u6210\u529F"),D(),B()}})},B=()=>{o.addTeamDialog.visible=!1,o.addTeamDialog.form={},x.value.resetFields()},X=s=>{Te.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${s.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await g.delTeam.request({id:s.id}),C.success("\u5220\u9664\u6210\u529F\uFF01"),D()})},Y=async s=>{o.showMemDialog.query.teamId=s.id,await T(),o.showMemDialog.title=`[${s.name}] \u6210\u5458\u4FE1\u606F`,o.showMemDialog.visible=!0},Z=s=>{s&&ve.list.request({username:s}).then(l=>{o.showMemDialog.accounts=l.list})},ee=s=>{!s||(o.showMemDialog.chooseData=s,o.showMemDialog.chooseId=s.id)},le=async()=>{await g.delTeamMem.request(o.showMemDialog.chooseData),C.success("\u79FB\u9664\u6210\u529F"),T()},T=async()=>{const s=await g.getTeamMem.request(o.showMemDialog.query);o.showMemDialog.members.list=s.list,o.showMemDialog.members.total=s.total},ae=()=>{o.showMemDialog.addVisible=!0},te=async()=>{const s=o.showMemDialog.memForm;s.teamId=o.chooseId,Ve(s.accountIds,"\u8BF7\u5148\u9009\u62E9\u8D26\u53F7"),await g.saveTeamMem.request(s),C.success("\u4FDD\u5B58\u6210\u529F"),T(),I()},I=()=>{o.showMemDialog.memForm={},o.showMemDialog.addVisible=!1,o.showMemDialog.chooseData=null,o.showMemDialog.chooseId=0},oe=async s=>{o.showTagDialog.tags=await g.getTagTrees.request(null),o.showTagDialog.tagTreeTeams=await g.getTeamTagIds.request({teamId:s.id}),o.showTagDialog.title=`[${s.name}] \u56E2\u961F\u6807\u7B7E\u4FE1\u606F`,o.showTagDialog.teamId=s.id,o.showTagDialog.visible=!0},q=()=>{o.showTagDialog.visible=!1,setTimeout(()=>{o.showTagDialog.tagTreeTeams=[]},500)},se=async()=>{await g.saveTeamTags.request({teamId:o.showTagDialog.teamId,tagIds:o.showTagDialog.tagTreeTeams}),C.success("\u4FDD\u5B58\u6210\u529F"),q()},ue=()=>{};return(s,l)=>{const r=d("el-button"),k=d("el-input"),U=d("el-radio"),c=d("el-table-column"),N=d("el-link"),ne=d("el-divider"),S=d("el-table"),j=d("el-pagination"),ie=d("el-row"),de=d("el-card"),E=d("el-form-item"),A=d("el-form"),M=d("el-dialog"),re=d("el-tag"),me=d("el-tree-select"),ce=d("el-option"),pe=d("el-select"),h=De("auth");return p(),P("div",Ce,[t(de,null,{default:u(()=>[w((p(),_(r,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>$(!1))},{default:u(()=>[i("\u6DFB\u52A0")]),_:1})),[[h,"team:save"]]),w((p(),_(r,{disabled:!a(F),onClick:l[1]||(l[1]=e=>$(a(z))),type:"primary",icon:"edit"},{default:u(()=>[i("\u7F16\u8F91")]),_:1},8,["disabled"])),[[h,"team:save"]]),w((p(),_(r,{disabled:!a(F),onClick:l[2]||(l[2]=e=>X(a(z))),type:"danger",icon:"delete"},{default:u(()=>[i("\u5220\u9664")]),_:1},8,["disabled"])),[[h,"team:del"]]),m("div",ke,[t(k,{placeholder:"\u8BF7\u8F93\u5165\u56E2\u961F\u540D\u79F0",class:"mr2",style:{width:"200px"},modelValue:a(y).name,"onUpdate:modelValue":l[3]||(l[3]=e=>a(y).name=e),onClear:D,clearable:""},null,8,["modelValue"]),t(r,{onClick:D,type:"success",icon:"search"})]),t(S,{data:a(H),onCurrentChange:K,ref:"table",style:{width:"100%"}},{default:u(()=>[t(c,{label:"\u9009\u62E9",width:"55px"},{default:u(e=>[t(U,{modelValue:a(F),"onUpdate:modelValue":l[4]||(l[4]=v=>he(F)?F.value=v:null),label:e.row.id},{default:u(()=>[Ee]),_:2},1032,["modelValue","label"])]),_:1}),t(c,{prop:"name",label:"\u56E2\u961F\u540D\u79F0"}),t(c,{prop:"remark",label:"\u5907\u6CE8","min-width":"160px","show-overflow-tooltip":""}),t(c,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"},{default:u(e=>[i(V(a(L)(e.row.createTime)),1)]),_:1}),t(c,{prop:"creator",label:"\u521B\u5EFA\u8005"}),t(c,{label:"\u64CD\u4F5C","min-width":"80px"},{default:u(e=>[t(N,{onClick:G(v=>Y(e.row),["prevent"]),underline:!1,type:"primary"},{default:u(()=>[i("\u6210\u5458")]),_:2},1032,["onClick"]),t(ne,{direction:"vertical","border-style":"dashed"}),t(N,{onClick:G(v=>oe(e.row),["prevent"]),underline:!1,type:"success"},{default:u(()=>[i("\u6807\u7B7E")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(ie,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:u(()=>[t(j,{style:{"text-align":"right"},onCurrentChange:J,total:a(W),layout:"prev, pager, next, total, jumper","current-page":a(y).pageNum,"onUpdate:current-page":l[5]||(l[5]=e=>a(y).pageNum=e),"page-size":a(y).pageSize},null,8,["total","current-page","page-size"])]),_:1})]),_:1}),t(M,{width:"400px",title:"\u56E2\u961F\u7F16\u8F91","before-close":B,modelValue:a(b).visible,"onUpdate:modelValue":l[9]||(l[9]=e=>a(b).visible=e)},{footer:u(()=>[m("div",Me,[t(r,{onClick:l[8]||(l[8]=e=>B())},{default:u(()=>[i("\u53D6 \u6D88")]),_:1}),t(r,{onClick:O,type:"primary"},{default:u(()=>[i("\u786E \u5B9A")]),_:1})])]),default:u(()=>[t(A,{ref_key:"teamForm",ref:x,model:a(b).form,"label-width":"70px"},{default:u(()=>[t(E,{prop:"name",label:"\u56E2\u961F\u540D:",required:""},{default:u(()=>[t(k,{modelValue:a(b).form.name,"onUpdate:modelValue":l[6]||(l[6]=e=>a(b).form.name=e),"auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(E,{label:"\u5907\u6CE8:"},{default:u(()=>[t(k,{modelValue:a(b).form.remark,"onUpdate:modelValue":l[7]||(l[7]=e=>a(b).form.remark=e),"auto-complete":"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(M,{width:"500px",title:a(f).title,"before-close":q,modelValue:a(f).visible,"onUpdate:modelValue":l[13]||(l[13]=e=>a(f).visible=e)},{footer:u(()=>[m("div",Ae,[t(r,{onClick:l[11]||(l[11]=e=>q())},{default:u(()=>[i("\u53D6 \u6D88")]),_:1}),w((p(),_(r,{onClick:l[12]||(l[12]=e=>se()),type:"primary"},{default:u(()=>[i("\u786E \u5B9A")]),_:1})),[[h,"team:tag:save"]])])]),default:u(()=>[t(A,{"label-width":"70px"},{default:u(()=>[t(E,{prop:"project",label:"\u6807\u7B7E:"},{default:u(()=>[t(me,{ref_key:"tagTreeRef",ref:Q,style:{width:"100%"},modelValue:a(f).tagTreeTeams,"onUpdate:modelValue":l[10]||(l[10]=e=>a(f).tagTreeTeams=e),data:a(f).tags,"default-expanded-keys":a(f).tagTreeTeams,multiple:"","render-after-expand":!0,"show-checkbox":"","check-strictly":"","node-key":"id",props:a(f).props,onCheck:ue},{default:u(({data:e})=>[m("span",xe,[m("span",Be,[i(V(e.code)+" ",1),Ie,i(" "+V(e.name)+" ",1),qe,e.children!==null?(p(),_(re,{key:0,size:"small"},{default:u(()=>[i(V(e.children.length),1)]),_:2},1024)):we("",!0)])])]),_:1},8,["modelValue","data","default-expanded-keys","props"])]),_:1})]),_:1})]),_:1},8,["title","modelValue"]),t(M,{width:"700px",title:a(n).title,modelValue:a(n).visible,"onUpdate:modelValue":l[21]||(l[21]=e=>a(n).visible=e)},{default:u(()=>[m("div",ze,[w((p(),_(r,{onClick:l[14]||(l[14]=e=>ae()),type:"primary",icon:"plus",size:"small"},{default:u(()=>[i("\u6DFB\u52A0")]),_:1})),[[h,"team:member:save"]]),w((p(),_(r,{onClick:le,disabled:a(n).chooseId==null,type:"danger",icon:"delete",size:"small"},{default:u(()=>[i("\u79FB\u9664")]),_:1},8,["disabled"])),[[h,"team:member:del"]]),m("div",$e,[t(k,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",class:"mr2",style:{width:"150px"},modelValue:a(n).query.username,"onUpdate:modelValue":l[15]||(l[15]=e=>a(n).query.username=e),size:"small",onClear:D,clearable:""},null,8,["modelValue"]),t(r,{onClick:T,type:"success",icon:"search",size:"small"})])]),t(S,{onCurrentChange:ee,border:"",data:a(n).members.list,size:"small"},{default:u(()=>[t(c,{label:"\u9009\u62E9",width:"50px"},{default:u(e=>[t(U,{modelValue:a(n).chooseId,"onUpdate:modelValue":l[16]||(l[16]=v=>a(n).chooseId=v),label:e.row.id},{default:u(()=>[Ue]),_:2},1032,["modelValue","label"])]),_:1}),t(c,{property:"name",label:"\u59D3\u540D",width:"115"}),t(c,{property:"username",label:"\u8D26\u53F7",width:"135"}),t(c,{property:"createTime",label:"\u52A0\u5165\u65F6\u95F4"},{default:u(e=>[i(V(a(L)(e.row.createTime)),1)]),_:1}),t(c,{property:"creator",label:"\u5206\u914D\u8005",width:"135"})]),_:1},8,["data"]),t(j,{size:"small",onCurrentChange:T,style:{"text-align":"center"},background:"",layout:"prev, pager, next, total, jumper",total:a(n).members.total,"current-page":a(n).query.pageNum,"onUpdate:current-page":l[17]||(l[17]=e=>a(n).query.pageNum=e),"page-size":a(n).query.pageSize},null,8,["total","current-page","page-size"]),t(M,{width:"400px",title:"\u6DFB\u52A0\u6210\u5458","before-close":I,modelValue:a(n).addVisible,"onUpdate:modelValue":l[20]||(l[20]=e=>a(n).addVisible=e)},{footer:u(()=>[m("div",Ne,[t(r,{onClick:l[19]||(l[19]=e=>I())},{default:u(()=>[i("\u53D6 \u6D88")]),_:1}),t(r,{onClick:te,type:"primary"},{default:u(()=>[i("\u786E \u5B9A")]),_:1})])]),default:u(()=>[t(A,{model:a(n).memForm,"label-width":"70px"},{default:u(()=>[t(E,{label:"\u8D26\u53F7:"},{default:u(()=>[t(pe,{style:{width:"100%"},remote:"","remote-method":Z,modelValue:a(n).memForm.accountIds,"onUpdate:modelValue":l[18]||(l[18]=e=>a(n).memForm.accountIds=e),filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u6A21\u7CCA\u641C\u7D22\u5E76\u9009\u62E9"},{default:u(()=>[(p(!0),P(ye,null,Fe(a(n).accounts,e=>(p(),_(ce,{key:e.id,label:`${e.username} [${e.name}]`,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),_:1},8,["title","modelValue"])])}}});export{Qe as default};
