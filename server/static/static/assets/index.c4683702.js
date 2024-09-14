import{d as S,S as $t,l as He}from"./SqlExecBox.5ac01baa.js";import{n as z,i as Ee,a as Rt}from"./assert.d82c837d.js";import{d as At,u as Mt,r as Kt,O as Ut,c as Ot,t as Wt,f as zt,e as Pt,L as jt,h,V as Ht,i as f,j as k,q as w,k as o,w as u,l as d,Q as O,R as W,m as N,G,F as Y,N as Qt,v as B,P as Gt,ab as Yt,s as I,I as Qe,E as $,W as Ge,ac as Zt}from"./index.cceca4f0.js";import{t as Jt}from"./api.de3df07a.js";import{W as Xt,e as Ye,S as el,K as Z,a as Ze,l as R}from"./MonacoEditor.df80dd66.js";import{language as oe}from"./mysql.b3be80b5.js";import"./Api.8b4735cf.js";const tl={class:"toolbar"},ll={style:{float:"left"}},al={style:{float:"right",color:"#8492a6","margin-left":"10px","font-size":"13px"}},nl={class:"toolbar"},ol={class:"fl"},sl={style:{float:"right"},class:"fl"},ul={class:"mt5 sqlEditor"},il={class:"mt5"},rl={key:1},dl=w("span",{style:{"font-size":"12px"}},"\u5BFC\u51FA",-1),cl={key:2},ml=w("span",{style:{"font-size":"12px"}},"\u63D0\u4EA4",-1),pl={key:3},bl=w("span",{style:{"font-size":"12px"}},"\u53D6\u6D88",-1),fl={class:"dialog-footer"},gl=At({__name:"SqlExec",setup(yl){const se=Mt(),ue=Kt(null),Ce=Ut("token"),ie=new Map,j=20,t=Ot({token:Ce,tags:[],dbs:[],databaseList:[],db:"",dbType:"",tables:[],dbId:null,tableName:"",tableMetadata:[],sqlName:"",sqlNames:[],activeName:"Query",nowTableName:"",dataTabs:{},dataTabsTableHeight:600,queryTab:{sql:"",label:"\u67E5\u8BE2",name:"Query",execRes:{data:[],tableColumn:[]},loading:!1,nowTableName:"",selectionDatas:[],updatedFields:[]},params:{pageNum:1,pageSize:100,tagPath:null},conditionDialog:{title:"",placeholder:"",columnRow:null,dataTab:null,visible:!1,condition:"=",value:null},genSqlDialog:{visible:!1,sql:""},monacoOptions:{editor:{},height:"",tableMaxHeight:250,dbTables:{}},updatedFields:{}}),{tags:Je,dbs:Xe,databaseList:et,db:re,dbId:J,tableName:de,tableMetadata:tt,sqlName:ce,sqlNames:lt,activeName:me,nowTableName:at,dataTabs:nt,dataTabsTableHeight:ot,queryTab:F,params:Te,conditionDialog:A,genSqlDialog:H,monacoOptions:_e}=Wt(t),st=zt(()=>se.state.themeConfig.themeConfig);let C={};self.MonacoEnvironment={getWorker(){return new Xt}};const ut=()=>{Ye.defineTheme("SolarizedLight",el),C=Ye.create(ue.value,{language:"sql",theme:st.value.editorTheme,automaticLayout:!0,folding:!1,roundedSelection:!1,matchBrackets:"near",linkedEditing:!0,cursorBlinking:"smooth",mouseWheelZoom:!0,overviewRulerBorder:!1,tabSize:2,fontWeight:"bold",minimap:{enabled:!1}}),C.addAction({id:"run-sql-action",label:"\u6267\u884CSQL",precondition:void 0,keybindingContext:void 0,keybindings:[Z.chord(Z.CtrlCmd|Ze.KeyR,0)],contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:async function(){try{await Ne()}catch(e){e.message&&$.error(e.message)}}}),C.addAction({id:"format-sql-action",label:"\u683C\u5F0F\u5316SQL",precondition:void 0,keybindingContext:void 0,keybindings:[Z.chord(Z.CtrlCmd|Z.Shift|Ze.KeyF,0)],contextMenuGroupId:"navigation",contextMenuOrder:2,run:async function(){try{await Oe()}catch(e){e.message&&$.error(e.message)}}}),self.completionItemProvider=R.registerCompletionItemProvider("sql",{triggerCharacters:["."],provideCompletionItems:async(e,l)=>{let a=e.getWordUntilPosition(l);const{lineNumber:s,column:i}=l,{startColumn:p,endColumn:m}=a;if(e.getLineContent(s).startsWith("--"))return{suggestions:[]};let r={startLineNumber:s,endLineNumber:s,startColumn:p,endColumn:m};const b=e.getValueInRange({startLineNumber:s,startColumn:0,endLineNumber:s,endColumn:i}),v=e.getValueInRange({startLineNumber:1,startColumn:0,endLineNumber:s,endColumn:i}),V=e.getValueInRange({startLineNumber:s,startColumn:i,endLineNumber:e.getLineCount(),endColumn:e.getLineMaxColumn(e.getLineCount())}),q=b.trim().split(/\s+/),M=q[q.length-1].toLowerCase();if(M.endsWith(".")){let g=M.substring(0,M.lastIndexOf("."));if(t.databaseList.indexOf(g)>-1){let y=await Be(g),x=[];for(let D of y){const{tableName:L,tableComment:U}=D;x.push({label:{label:L+(U?" - "+U:""),description:"table"},kind:R.CompletionItemKind.File,insertText:L,range:r})}return{suggestions:x}}let K=v.split(";")[v.split(";").length-1]+V.split(";")[0],E=it(K,t.db,g);if(E.tableName){let y=E.tableName,x=E.dbName,D=t.monacoOptions.dbTables[x],L=D?D[y]||[]:[];(!L||L.length===0)&&x&&(t.monacoOptions.dbTables[x]=await Se(x),D=t.monacoOptions.dbTables[x],L=D?D[y]||[]:[]);let U=[];return L.forEach((Q,n)=>{const ne=Q.split("  ")[0];U.push({label:{label:Q,description:"column"},kind:R.CompletionItemKind.Property,detail:"",insertText:ne+" ",range:r,sortText:100+n+""})}),{suggestions:U}}return{suggestions:[]}}let T=[];return oe.keywords.forEach(g=>{T.push({label:{label:g,description:"keyword"},kind:R.CompletionItemKind.Keyword,insertText:g,range:r})}),oe.operators.forEach(g=>{T.push({label:{label:g,description:"opt"},kind:R.CompletionItemKind.Operator,insertText:g,range:r})}),oe.builtinFunctions.forEach(g=>{T.push({label:{label:g,description:"func"},kind:R.CompletionItemKind.Function,insertText:g,range:r})}),oe.builtinVariables.forEach(g=>{T.push({label:{label:g,description:"var"},kind:R.CompletionItemKind.Variable,insertText:g,range:r})}),t.databaseList.forEach(g=>{T.push({label:{label:g,description:"schema"},kind:R.CompletionItemKind.Folder,insertText:g,range:r})}),t.tableMetadata.forEach(g=>{const{tableName:K,tableComment:E}=g;T.push({label:{label:K+" - "+E,description:"table"},kind:R.CompletionItemKind.File,detail:E,insertText:K+" ",range:r})}),{suggestions:T}}})},it=(e,l,a)=>{let s={},i={},p=e.match(/(join|from)\n*\s+\n*(\w*-?\w*\.?\w+)\s*(as)?\s*(\w*)\n*/gi);return p&&p.length>0&&p.forEach(m=>{let c=m.substring(5,m.length).replaceAll(/\s+/g," ").replaceAll(/\s+as\s+/gi," ").replaceAll(/\r\n/g," ").trim().split(/\s+/),r=c[0].split("."),b=r.length>1?r[1]:r[0],v=r.length>1?r[0]:l||"";c.length==2?s[c[1]]={tableName:b,dbName:v}:i={tableName:b,dbName:l}}),s[a]||i};Pt(()=>{var e;(e=self.completionItemProvider)==null||e.dispose(),ve(),ut(),window.onresize=()=>(()=>{ve()})()});const ve=()=>{t.monacoOptions.height=window.innerHeight-550+"px",t.dataTabsTableHeight=window.innerHeight-274},rt=()=>{document.onmousemove=e=>{e.preventDefault(),t.monacoOptions.height=`${ue.value.offsetHeight+e.movementY}px`,t.monacoOptions.tableMaxHeight-=e.movementY},document.onmouseup=()=>{document.onmousemove=null}},dt=()=>{t.dbs=[],t.dbId=null,t.db="",t.databaseList=[],te(),We()},ct=async()=>{t.tags=await Jt.getAccountTags.request(null)},Ne=async()=>{z(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");let e=Fe();z(e&&e.trim(),"\u8BF7\u9009\u4E2D\u9700\u8981\u6267\u884C\u7684sql"),e=e.replace(/(^\s*)/g,"");let l="",a=!0;if((e.startsWith("update")||e.startsWith("UPDATE")||e.startsWith("INSERT")||e.startsWith("insert")||e.startsWith("DELETE")||e.startsWith("delete"))&&(l=(await Ge.prompt("\u8BF7\u8F93\u5165\u5907\u6CE8","Tip",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputPattern:/^[\s\S]*.*[^\s][\s\S]*$/,inputErrorMessage:"\u8BF7\u8F93\u5165\u6267\u884C\u8BE5sql\u7684\u5907\u6CE8\u4FE1\u606F"})).value,l||(a=!1)),!!a)if(await we(e,l),e.startsWith("SELECT *")||e.startsWith("select *")||e.startsWith(`SELECT
  *`)){t.queryTab.selectionDatas=[];const s=e.split(/from/i)[1];if(s){const i=s.trim().split(" ")[0];t.queryTab.nowTableName=i,t.nowTableName=i}else t.queryTab.nowTableName="",t.nowTableName=""}else t.queryTab.nowTableName="",t.nowTableName=""},we=async(e,l)=>{try{t.queryTab.sql=e,t.queryTab.loading=!0;const a=await X(e,l);(!a.res||a.res.length===0)&&$.warning("\u6682\u65E0\u6570\u636E"),t.queryTab.execRes.data=a.res,t.queryTab.execRes.tableColumn=a.colNames,t.queryTab.loading=!1,le()}catch{t.queryTab.loading=!1}},mt=()=>{const e=t.queryTab.execRes.data;Ee(e.length>0,"\u6CA1\u6709\u6570\u636E\u53EF\u5BFC\u51FA");const l=t.queryTab.execRes.tableColumn,a=[l];for(let c of e){let r=[];for(let b of l)r.push(c[b]);a.push(r)}const s=a.map(c=>c.join(",")).join(`
`);let i=document.createElement("a"),p="\uFEFF",m=new Blob([p+s],{type:"text/plain;charset=utrf-8"});i.id="download-csv",i.setAttribute("href",URL.createObjectURL(m)),i.setAttribute("download",`\u67E5\u8BE2\u6570\u636E\u5BFC\u51FA-${Zt("yyyyMMddHHmmss",new Date)}.csv`),document.body.appendChild(i),i.click()},X=async(e,l="")=>await S.sqlExec.request({id:t.dbId,db:t.db,sql:"MAGIC"+btoa(encodeURIComponent(e.trim())),remark:l}),pt=e=>{const l=Object.keys(t.dataTabs);let a=t.activeName;l.forEach((s,i)=>{if(s===e){const p=l[i+1]||l[i-1]||t.queryTab.name;p&&(a=p)}}),t.activeName=a,delete t.dataTabs[e]},bt=e=>{const l=e.props.name;l!=t.queryTab.name?(t.tableName=l,t.nowTableName=l):t.nowTableName=t.queryTab.nowTableName},ft=e=>{if(!t.dbId)return $.error("\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),!1;$.success(`'${e.name}' \u6B63\u5728\u4E0A\u4F20\u6267\u884C, \u8BF7\u5173\u6CE8\u7ED3\u679C\u901A\u77E5`)},gt=e=>{e.code!==200&&$.error(e.msg)},yt=()=>`${Qt.baseApiUrl}dbs/${t.dbId}/exec-sql-file?db=${t.db}`,qe=(e,l,a="equal")=>{e=e+"";let s="";if(!l||!l.length||l.length===0||l===void 0||!e||!e.length||e.length===0||e===void 0)return;if(a==="equal"){for(let c=0;c<l.length;c++)if((l[c][e]+"").length>0){s=l[c][e]+"";break}}else{let c=0;for(let r=0;r<l.length;r++){if(l[r][e]===null)return;const b=l[r][e]+"",v=l[c][e]+"";b.length>v.length&&(c=r)}s=l[c][e]+""}const i=xe(s),p=xe(e)+43;return(i>p?i:p)+"px"},xe=e=>{let l=0;for(const a of e){if(l>500)break;if(a>="0"&&a<="9"||a>="a"&&a<="z"){l+=8.5;continue}if(a>="A"&&a<="Z"){l+=9;continue}a>="\u4E00"&&a<="\u9FA5"?l+=16:l+=8}return l>500&&(l=500),l},ht=(e,l)=>{let a=pe(e);if(!a)return"";const s=a.find(p=>p.columnName==l),i=s.columnComment;return`${s.columnType} ${i?" |  "+i:""}`},Fe=()=>{var a,s;let e="";if(!(C!=null&&C.getModel))return e;let l=C.getSelection();return l&&(e=(a=C.getModel())==null?void 0:a.getValueInRange(l)),e||((s=C.getModel())==null?void 0:s.getValue())},ke=e=>{t.db="";const l=t.dbs.find(a=>a.id==e);t.dbType=l.type,t.databaseList=l.database.split(" "),te()},De=async e=>{!e||(te(),t.tableMetadata=await Be(e),t.monacoOptions.dbTables[e]=await Se(e),$e())},Be=async e=>await S.tableMetadata.request({id:t.dbId,db:e}),Se=async e=>await S.hintTables.request({id:t.dbId,db:e}),Et=async(e,l=!0)=>{if(e==""||!l)return;t.nowTableName=e,t.activeName=e;let a=t.dataTabs[e];a||(a={label:e,name:e,datas:[],columnNames:[],pageNum:1,count:0},a.columnNames=await Ct(e),t.dataTabs[e]=a,P(e))},ee=async e=>{let l=pe(e);return l||(l=await S.columnMetadata.request({id:t.dbId,db:t.db,tableName:e}),ie.set(e,l),l)},pe=e=>ie.get(e),Ct=async e=>(await ee(e)).map(a=>a.columnName),Tt=(e,l)=>{const a=e[0];t.conditionDialog.title=`\u8BF7\u8F93\u5165 [${a.columnName}] \u7684\u503C`,t.conditionDialog.placeholder=`${a.columnType}  ${a.columnComment}`,t.conditionDialog.columnRow=a,t.conditionDialog.dataTab=l,t.conditionDialog.visible=!0},_t=()=>{const e=t.conditionDialog,l=t.conditionDialog.dataTab;let a=l.condition;a&&(a+=" AND ");const s=e.columnRow;a+=`${s.columnName} ${e.condition} `,l.condition=a+ae(s.columnType,e.value),Ie()},Ie=()=>{t.conditionDialog.visible=!1,t.conditionDialog.title="",t.conditionDialog.placeholder="",t.conditionDialog.value=null,t.conditionDialog.columnRow=null,t.conditionDialog.dataTab=null},P=async e=>{const l=t.dataTabs[e];l.condition="",l.pageNum=1,be(l).then(()=>{le()})},vt=async e=>{be(e)},Nt=async(e,l)=>{Rt(l,"\u6761\u4EF6\u4E0D\u80FD\u4E3A\u7A7A");const a=t.dataTabs[e];a.pageNum=1,be(a)},be=async e=>{e.loading=!0;try{if(e.count=await wt(e.name,e.condition),e.count>0){const l=await X(qt(e.name,e.condition,e.orderBy,e.pageNum));e.datas=l.res}else e.datas=[]}finally{e.loading=!1}},wt=async(e,l="")=>(await X(xt(e,l))).res[0].count,qt=(e,l="",a="",s=1)=>{const i=`SELECT * FROM ${e} ${l?"WHERE "+l:""} ${a||""}`;return t.dbType=="mysql"?`${i} LIMIT ${(s-1)*j}, ${j};`:t.dbType=="postgres"?`${i} OFFSET ${(s-1)*j} LIMIT ${j};`:i},xt=(e,l="")=>`SELECT COUNT(*) count FROM ${e} ${l?"WHERE "+l:""}`,Ve=()=>{z(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),X("COMMIT;"),$.success("COMMIT success")},Ft=async e=>{if(!t.nowTableName||!e.prop)return;const l=t.activeName,a=e.order=="descending"?"DESC":"ASC",s=`ORDER BY ${e.prop} ${a}`;t.dataTabs[t.activeName].orderBy=s,P(l)},kt=()=>{Le()},Le=()=>{z(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),S.getSql.request({id:t.dbId,type:1,name:t.sqlName,db:t.db}).then(e=>{fe(e?e.sql:"")})},fe=e=>{var l;(l=C.getModel())==null||l.setValue(e)},$e=()=>{S.getSqlNames.request({id:t.dbId,db:t.db}).then(e=>{e&&e.length>0?(t.sqlNames=e.map(l=>l.name),t.sqlName=t.sqlNames[0]):(t.sqlNames=["default"],t.sqlName="default"),Le()})},Re=async()=>{var l;const e=(l=C.getModel())==null?void 0:l.getValue();z(e,"sql\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),z(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93\u5B9E\u4F8B"),await S.saveSql.request({id:t.dbId,db:t.db,sql:e,type:1,name:t.sqlName}),$.success("\u4FDD\u5B58\u6210\u529F"),S.getSqlNames.request({id:t.dbId,db:t.db}).then(a=>{a&&(t.sqlNames=a.map(s=>s.name))})},Dt=async()=>{z(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");try{await Ge.confirm(`\u786E\u5B9A\u5220\u9664\u3010${t.sqlName}\u3011\u8BE5SQL\u6A21\u677F?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await S.deleteDbSql.request({id:t.dbId,name:t.sqlName,db:t.db}),$.success("\u5220\u9664\u6210\u529F"),$e()}catch{}},te=()=>{t.tableName="",t.nowTableName="",t.tableMetadata=[],t.dataTabs={},fe(""),t.sqlNames=[],t.sqlName="",t.activeName=t.queryTab.name,t.queryTab.execRes.data=[],t.queryTab.execRes.tableColumn=[],ie.clear()},Ae=e=>{ge()?t.queryTab.selectionDatas=e:t.dataTabs[t.activeName].selectionDatas=e},Me=async()=>{const e=ge(),l=e?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;Ee(l&&l.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u5220\u9664\u7684\u6570\u636E");const a=await ye(t.nowTableName),s=a.columnName,i=l.map(m=>`${ae(a.columnType,m[s])}`).join(","),p=`DELETE FROM ${t.nowTableName} WHERE ${s} IN (${i})`;he(p,null,()=>{e?(t.queryTab.execRes.data=t.queryTab.execRes.data.filter(m=>l.findIndex(c=>c[s]==m[s])==-1),t.queryTab.selectionDatas=[]):P(t.activeName)})},Bt=async()=>{const l=ge()?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;Ee(l&&l.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u751F\u6210insert\u8BED\u53E5\u7684\u6570\u636E");const a=t.nowTableName,s=await ee(a),i=[];for(let p of l){let m=[],c=[];for(let r of s){const b=r.columnName;m.push(b),c.push(St(p[b]))}i.push(`INSERT INTO ${a} (${m.join(", ")}) VALUES(${c.join(", ")})`)}t.genSqlDialog.sql=i.join(`;
`)+";",t.genSqlDialog.visible=!0},St=e=>e==null?"NULL":typeof e=="number"?e:`'${e}'`,ge=()=>t.activeName==t.queryTab.name,Ke=(e,l,a)=>{const s=l.property;if(!t.nowTableName||!s)return;let i=(e[s]||e[s]==0?e[s]:"")+"",p=a.children[0];if(p){let m=document.createElement("input");m.setAttribute("value",i),m.setAttribute("style","height:23px;text-align:center;border:none;"+p.getAttribute("style")),a.replaceChildren(m),m.focus(),m.addEventListener("blur",async()=>{if(e[s]=m.value,a.replaceChildren(p),m.value!==i){let c;t.activeName==="Query"?c=t.queryTab.updatedFields:c=t.updatedFields[t.nowTableName];const r=await ye(t.nowTableName),b=e[r.columnName],v=await ye(t.nowTableName,s),V={div:p,fieldName:l.rawColumnKey,row:e,fieldType:v.columnType,oldValue:i,newValue:m.value},q=c.filter(E=>E.primaryKey===b);let M=!1;q.length<=0?q[0]={primaryKey:b,primaryKeyName:r.columnName,primaryKeyType:r.columnType,fields:[V]}:(M=!0,q[0].fields.some(y=>(y.fieldName===V.fieldName&&(y.newValue=V.newValue),y.fieldName===V.fieldName))||q[0].fields.push(V));let T=q[0].fields;const g=T.filter(E=>(E.fieldName===l.rawColumnKey&&(E.newValue=m.value),E.fieldName===l.rawColumnKey));if((g.length>0&&g[0]||{}).oldValue===m.value){p.classList.remove("update_field_active");let E=[];c.forEach((y,x)=>{y.primaryKey===b&&(y.fields=y.fields&&y.fields.length>0?y.fields.filter(D=>D.fieldName!==l.rawColumnKey):[],y.fields.length<=0&&E.push(x))}),E.forEach(y=>delete c[y]),c=c.filter(y=>y)}else p.classList.add("update_field_active"),M?c.forEach((E,y,x)=>{E.primaryKey===b&&(x[y].fields=T)}):c.push({primaryKey:b,primaryKeyName:r.columnName,primaryKeyType:r.columnType,fields:T});t.activeName==="Query"?t.queryTab.updatedFields=c:t.updatedFields[t.nowTableName]=c}})}},Ue=()=>{let e,l=!1;if(t.activeName==="Query"?(l=!0,e=t.queryTab.updatedFields):e=t.updatedFields[t.nowTableName],e.length<=0)return;let a="",s=[];e.forEach(i=>{let p=`UPDATE ${t.nowTableName} SET `,m=i.primaryKey,c=i.primaryKeyType,r=i.primaryKeyName;i.fields.forEach(b=>{p+=` ${b.fieldName} = ${ae(b.fieldType,b.newValue)},`,s.push(b.div)}),p=p.substring(0,p.length-1),p+=` WHERE ${r} = ${ae(c,m)} ;`,a+=p}),he(a,()=>{},()=>{e=[],s.forEach(i=>{i.classList.remove("update_field_active")}),l?(t.queryTab.updatedFields=[],we(t.queryTab.sql)):(t.updatedFields[t.nowTableName]=[],P(t.nowTableName))})},le=()=>{var e;t.activeName==="Query"?(t.queryTab.updatedFields.forEach(l=>{l.fields.forEach(a=>{a.div.classList.remove("update_field_active"),a.row[a.fieldName]=a.oldValue})}),t.queryTab.updatedFields=[]):((e=t.updatedFields[t.nowTableName])==null||e.forEach(l=>{l.fields.forEach(a=>{a.div.classList.remove("update_field_active"),a.row[a.fieldName]=a.oldValue})}),t.updatedFields[t.nowTableName]=[])},ye=async(e,l="")=>{const a=await ee(e);return l?a.find(s=>s.columnName==l):a.find(i=>i.columnKey=="PRI")||a[0]},ae=(e,l)=>It(e)?l:`'${l}'`,It=e=>e.match(/int|double|float|nubmer|decimal/gi),he=(e,l=null,a=null)=>{$t({sql:e,dbId:t.dbId,db:t.db,runSuccessCallback:a,cancelCallback:l})},Vt=async()=>{const e=t.nowTableName,l=await ee(e);let a={};l.forEach(m=>{a[`${m.columnName}`]=`'${m.columnName}[${m.columnType}]${m.nullable=="YES"?"":"[not null]"}'`});let s=Object.keys(a).join(","),i=Object.values(a).join(","),p=`INSERT INTO ${t.nowTableName} (${s}) VALUES (${i});`;he(p,null,()=>{P(e)})},Oe=()=>{var a,s;let e=C.getSelection();if(!e)return;let l=(a=C.getModel())==null?void 0:a.getValueInRange(e);if(l){Lt(He.format(l),e);return}(s=C.getModel())==null||s.setValue(He.format(C.getValue()))},Lt=(e,l)=>{const a=C.getModel();if(!a)return;if(!l){a.setValue(e);return}const{startLineNumber:s,endLineNumber:i,startColumn:p,endColumn:m}=l,c=a.getValueInRange({startLineNumber:1,startColumn:0,endLineNumber:s,endColumn:p}),r=a.getValueInRange({startLineNumber:i,startColumn:m,endLineNumber:a.getLineCount(),endColumn:a.getLineMaxColumn(a.getLineCount())});C.setValue(c+e+r),C.focus(),C.setPosition({lineNumber:s,column:0})},We=async()=>{const e=await S.dbs.request(t.params);t.dbs=e.list},ze=async e=>{let l=Fe();l&&l.length>0&&t.dbId&&await Re();const{tagPath:a,dbId:s,db:i}=e.dbOptInfo;t.params.tagPath=a,await We(),ke(s),t.dbId=s,t.db=i,await De(i)};let Pe=se.state.sqlExecInfo;return Pe.dbOptInfo.tagPath&&ze(Pe),jt(se.state.sqlExecInfo,async e=>{await ze(e)}),(e,l)=>{const a=h("el-option"),s=h("el-select"),i=h("el-form-item"),p=h("el-form"),m=h("el-col"),c=h("el-row"),r=h("el-link"),b=h("el-divider"),v=h("el-tooltip"),V=h("el-upload"),q=h("el-button"),M=h("el-icon"),T=h("el-table-column"),g=h("el-table"),K=h("el-tab-pane"),E=h("el-popover"),y=h("el-input"),x=h("el-pagination"),D=h("el-tabs"),L=h("el-container"),U=h("el-dialog"),Q=Ht("loading");return f(),k("div",null,[w("div",tl,[o(c,{type:"flex",justify:"space-between"},{default:u(()=>[o(m,{span:24},{default:u(()=>[o(p,{class:"search-form","label-position":"right",inline:!0},{default:u(()=>[o(i,{label:"\u6807\u7B7E"},{default:u(()=>[o(s,{onChange:dt,onFocus:ct,modelValue:d(Te).tagPath,"onUpdate:modelValue":l[0]||(l[0]=n=>d(Te).tagPath=n),placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E",filterable:"",style:{width:"220px"}},{default:u(()=>[(f(!0),k(O,null,W(d(Je),n=>(f(),N(a,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"\u8D44\u6E90"},{default:u(()=>[o(s,{modelValue:d(J),"onUpdate:modelValue":l[1]||(l[1]=n=>G(J)?J.value=n:null),placeholder:"\u8BF7\u9009\u62E9\u8D44\u6E90\u5B9E\u4F8B",onChange:ke,filterable:"",style:{width:"220px"}},{default:u(()=>[(f(!0),k(O,null,W(d(Xe),n=>(f(),N(a,{key:n.id,label:`${n.name} [${n.tagPath}]`,value:n.id},{default:u(()=>[w("span",ll,Y(`${n.name} [${n.tagPath}]`),1),w("span",al,Y(`${n.host}:${n.port} ${n.type}`),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"\u6570\u636E\u5E93"},{default:u(()=>[o(s,{modelValue:d(re),"onUpdate:modelValue":l[2]||(l[2]=n=>G(re)?re.value=n:null),placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u5E93",onChange:De,onClear:te,clearable:"",filterable:"",style:{width:"150px"}},{default:u(()=>[(f(!0),k(O,null,W(d(et),n=>(f(),N(a,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,{"label-width":"20",label:"\u8868"},{default:u(()=>[o(s,{modelValue:d(de),"onUpdate:modelValue":l[3]||(l[3]=n=>G(de)?de.value=n:null),placeholder:"\u9009\u62E9\u8868\u67E5\u770B\u8868\u6570\u636E",onChange:Et,filterable:"",style:{width:"250px"}},{default:u(()=>[(f(!0),k(O,null,W(d(tt),n=>(f(),N(a,{key:n.tableName,label:n.tableName+(n.tableComment!=""?`\u3010${n.tableComment}\u3011`:""),value:n.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),o(L,{id:"data-exec",style:{border:"1px solid #eee","margin-top":"1px"}},{default:u(()=>[o(D,{onTabRemove:pt,onTabClick:bt,style:{width:"100%"},modelValue:d(me),"onUpdate:modelValue":l[5]||(l[5]=n=>G(me)?me.value=n:null)},{default:u(()=>[o(K,{label:d(F).label,name:d(F).name},{default:u(()=>[w("div",null,[w("div",null,[w("div",nl,[w("div",ol,[o(r,{onClick:Ne,underline:!1,class:"ml15",icon:"VideoPlay"}),o(b,{direction:"vertical","border-style":"dashed"}),o(v,{class:"box-item",effect:"dark",content:"format sql",placement:"top"},{default:u(()=>[o(r,{onClick:Oe,type:"primary",underline:!1,icon:"MagicStick"})]),_:1}),o(b,{direction:"vertical","border-style":"dashed"}),o(v,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:u(()=>[o(r,{onClick:Ve,type:"success",underline:!1,icon:"CircleCheck"})]),_:1}),o(b,{direction:"vertical","border-style":"dashed"}),o(V,{class:"sql-file-exec","before-upload":ft,"on-success":gt,headers:{Authorization:d(Ce)},data:{dbId:1},action:yt(),"show-file-list":!1,name:"file",multiple:"",limit:100},{default:u(()=>[o(v,{class:"box-item",effect:"dark",content:"SQL\u811A\u672C\u6267\u884C",placement:"top"},{default:u(()=>[o(r,{type:"success",underline:!1,icon:"Document"})]),_:1})]),_:1},8,["headers","action"])]),w("div",sl,[o(s,{modelValue:d(ce),"onUpdate:modelValue":l[4]||(l[4]=n=>G(ce)?ce.value=n:null),placeholder:"\u9009\u62E9or\u8F93\u5165SQL\u6A21\u677F\u540D",onChange:kt,filterable:"","allow-create":"","default-first-option":"",size:"small",class:"mr10"},{default:u(()=>[(f(!0),k(O,null,W(d(lt),n=>(f(),N(a,{key:n,label:n.database,value:n},{default:u(()=>[B(Y(n),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"]),o(q,{onClick:Re,type:"primary",icon:"document-add",plain:"",size:"small"},{default:u(()=>[B("\u4FDD\u5B58 ")]),_:1}),o(q,{onClick:Dt,type:"danger",icon:"delete",plain:"",size:"small"},{default:u(()=>[B("\u5220\u9664 ")]),_:1})])])]),w("div",ul,[w("div",{ref_key:"monacoTextarea",ref:ue,style:Gt({height:d(_e).height})},null,4)]),w("div",{class:"editor-move-resize",onMousedown:rt},[o(M,null,{default:u(()=>[o(d(Yt))]),_:1})],32),w("div",il,[o(c,null,{default:u(()=>[d(F).nowTableName?(f(),N(r,{key:0,onClick:Me,class:"ml5",type:"danger",icon:"delete",underline:!1})):I("",!0),d(F).execRes.data.length>0?(f(),k("span",rl,[o(b,{direction:"vertical","border-style":"dashed"}),o(r,{type:"success",underline:!1,onClick:mt},{default:u(()=>[dl]),_:1})])):I("",!0),d(F).updatedFields.length>0?(f(),k("span",cl,[o(b,{direction:"vertical","border-style":"dashed"}),o(r,{type:"success",underline:!1,onClick:Ue},{default:u(()=>[ml]),_:1})])):I("",!0),d(F).updatedFields.length>0?(f(),k("span",pl,[o(b,{direction:"vertical","border-style":"dashed"}),o(r,{type:"warning",underline:!1,onClick:le},{default:u(()=>[bl]),_:1})])):I("",!0)]),_:1}),Qe((f(),N(g,{onCellDblclick:Ke,onSelectionChange:Ae,data:d(F).execRes.data,"element-loading-text":"\u67E5\u8BE2\u4E2D...",size:"small","max-height":d(_e).tableMaxHeight,"empty-text":"tips: select *\u5F00\u5934\u7684\u5355\u8868\u67E5\u8BE2\u6216\u70B9\u51FB\u8868\u540D\u9ED8\u8BA4\u67E5\u8BE2\u7684\u6570\u636E,\u53EF\u53CC\u51FB\u6570\u636E\u5728\u7EBF\u4FEE\u6539",stripe:"",border:"",class:"mt5"},{default:u(()=>[d(F).execRes.tableColumn.length>0&&d(F).nowTableName?(f(),N(T,{key:0,type:"selection",width:"35"})):I("",!0),(f(!0),k(O,null,W(d(F).execRes.tableColumn,n=>(f(),N(T,{"min-width":"100",width:qe(n,d(F).execRes.data),align:"center",key:n,prop:n,label:n,"show-overflow-tooltip":""},null,8,["width","prop","label"]))),128))]),_:1},8,["data","max-height"])),[[Q,d(F).loading]])])])]),_:1},8,["label","name"]),(f(!0),k(O,null,W(d(nt),n=>(f(),N(K,{closable:"",key:n.name,label:n.label,name:n.name},{default:u(()=>[d(J)?(f(),N(c,{key:0},{default:u(()=>[o(m,{span:8},{default:u(()=>{var _,ne,je;return[o(r,{onClick:hl=>P(n.name),icon:"refresh",underline:!1,class:"ml5"},null,8,["onClick"]),o(b,{direction:"vertical","border-style":"dashed"}),o(r,{onClick:Vt,type:"primary",icon:"plus",underline:!1}),o(b,{direction:"vertical","border-style":"dashed"}),o(r,{onClick:Me,type:"danger",icon:"delete",underline:!1}),o(b,{direction:"vertical","border-style":"dashed"}),o(v,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:u(()=>[o(r,{onClick:Ve,type:"success",icon:"CircleCheck",underline:!1})]),_:1}),o(b,{direction:"vertical","border-style":"dashed"}),o(v,{class:"box-item",effect:"dark",content:"\u751F\u6210insert sql",placement:"top"},{default:u(()=>[o(r,{onClick:Bt,type:"success",underline:!1},{default:u(()=>[B("gi")]),_:1})]),_:1}),o(b,{direction:"vertical","border-style":"dashed"}),((_=t.updatedFields[t.nowTableName])==null?void 0:_.length)>0?(f(),N(v,{key:0,class:"box-item",effect:"dark",content:"\u63D0\u4EA4\u4FEE\u6539",placement:"top"},{default:u(()=>[o(r,{onClick:Ue,type:"success",underline:!1},{default:u(()=>[B("\u63D0\u4EA4")]),_:1})]),_:1})):I("",!0),((ne=t.updatedFields[t.nowTableName])==null?void 0:ne.length)>0?(f(),N(b,{key:1,direction:"vertical","border-style":"dashed"})):I("",!0),((je=t.updatedFields[t.nowTableName])==null?void 0:je.length)>0?(f(),N(v,{key:2,class:"box-item",effect:"dark",content:"\u53D6\u6D88\u4FEE\u6539",placement:"top"},{default:u(()=>[o(r,{onClick:le,type:"warning",underline:!1},{default:u(()=>[B("\u53D6\u6D88")]),_:1})]),_:1})):I("",!0)]}),_:2},1024),o(m,{span:16},{default:u(()=>[o(y,{modelValue:n.condition,"onUpdate:modelValue":_=>n.condition=_,placeholder:"\u82E5\u9700\u6761\u4EF6\u8FC7\u6EE4\uFF0C\u53EF\u9009\u62E9\u5217\u5E76\u70B9\u51FB\u5BF9\u5E94\u7684\u5B57\u6BB5\u5E76\u8F93\u5165\u9700\u8981\u8FC7\u6EE4\u7684\u5185\u5BB9\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u5373\u53EF",clearable:"",size:"small",style:{width:"100%"}},{prepend:u(()=>[o(E,{trigger:"click",width:320,placement:"right"},{reference:u(()=>[o(r,{type:"success",underline:!1},{default:u(()=>[B("\u9009\u62E9\u5217")]),_:1})]),default:u(()=>[o(g,{data:pe(n.name),"max-height":"500",size:"small",onRowClick:(..._)=>{Tt(_,n)},style:{cursor:"pointer"}},{default:u(()=>[o(T,{property:"columnName",label:"\u5217\u540D","show-overflow-tooltip":""}),o(T,{property:"columnComment",label:"\u5907\u6CE8","show-overflow-tooltip":""})]),_:2},1032,["data","onRowClick"])]),_:2},1024)]),append:u(()=>[o(q,{onClick:_=>Nt(n.name,n.condition),icon:"search",size:"small"},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):I("",!0),Qe((f(),N(g,{onCellDblclick:Ke,onSortChange:Ft,onSelectionChange:Ae,data:n.datas,size:"small","max-height":d(ot),"element-loading-text":"\u67E5\u8BE2\u4E2D...","empty-text":"\u6682\u65E0\u6570\u636E",stripe:"",border:"",class:"mt5"},{default:u(()=>[n.datas.length>0?(f(),N(T,{key:0,type:"selection",width:"35"})):I("",!0),(f(!0),k(O,null,W(n.columnNames,_=>(f(),N(T,{"min-width":"100",width:qe(_,n.datas),align:"center",key:_,prop:_,label:_,"show-overflow-tooltip":"",sortable:d(at)!=""?"custom":!1},{header:u(()=>[o(v,{"raw-content":"",placement:"top",effect:"customized"},{content:u(()=>[B(Y(ht(n.name,_)),1)]),default:u(()=>[B(" "+Y(_),1)]),_:2},1024)]),_:2},1032,["width","prop","label","sortable"]))),128))]),_:2},1032,["data","max-height"])),[[Q,n.loading]]),o(c,{type:"flex",class:"mt5",justify:"center"},{default:u(()=>[o(x,{small:"",total:n.count,onCurrentChange:_=>vt(n),layout:"prev, pager, next, total, jumper","current-page":n.pageNum,"onUpdate:current-page":_=>n.pageNum=_,"page-size":j},null,8,["total","onCurrentChange","current-page","onUpdate:current-page"])]),_:2},1024)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(U,{modelValue:d(A).visible,"onUpdate:modelValue":l[8]||(l[8]=n=>d(A).visible=n),title:d(A).title,width:"420px"},{footer:u(()=>[w("span",fl,[o(q,{onClick:Ie},{default:u(()=>[B("\u53D6\u6D88")]),_:1}),o(q,{type:"primary",onClick:_t},{default:u(()=>[B("\u786E\u5B9A")]),_:1})])]),default:u(()=>[o(c,null,{default:u(()=>[o(m,{span:5},{default:u(()=>[o(s,{modelValue:d(A).condition,"onUpdate:modelValue":l[6]||(l[6]=n=>d(A).condition=n)},{default:u(()=>[o(a,{label:"=",value:"="}),o(a,{label:"LIKE",value:"LIKE"}),o(a,{label:">",value:">"}),o(a,{label:">=",value:">="}),o(a,{label:"<",value:"<"}),o(a,{label:"<=",value:"<="})]),_:1},8,["modelValue"])]),_:1}),o(m,{span:19},{default:u(()=>[o(y,{modelValue:d(A).value,"onUpdate:modelValue":l[7]||(l[7]=n=>d(A).value=n),placeholder:d(A).placeholder},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"]),o(U,{onClose:l[10]||(l[10]=n=>d(H).visible=!1),modelValue:d(H).visible,"onUpdate:modelValue":l[11]||(l[11]=n=>d(H).visible=n),title:"SQL",width:"1000px"},{default:u(()=>[o(y,{modelValue:d(H).sql,"onUpdate:modelValue":l[9]||(l[9]=n=>d(H).sql=n),type:"textarea",rows:"20"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}});var ql=gl;export{ql as default};