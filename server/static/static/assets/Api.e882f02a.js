import{S as r}from"./index.11f493b5.js";class s{constructor(t,e){this.url=t,this.method=e}setUrl(t){return this.url=t,this}setMethod(t){return this.method=t,this}getUrl(){return r.getApiUrl(this.url)}request(t=null,e=null){return r.send(this,t,e)}requestWithHeaders(t,e){return r.sendWithHeaders(this,t,e)}static create(t,e){return new s(t,e)}}export{s as A};
