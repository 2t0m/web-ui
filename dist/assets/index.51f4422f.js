import{o as c,c as d,a as t,b as h,d as K,e as re,v as le,r as g,I as R,w as T,f as V,F as $,g as D,h as k,t as m,i as ce,j as p,k as _,l as ie,m as de,n as ue,p as q,q as G,s as Z,u as P,x as J,y as _e,z as he,A as pe,B as me,C as ge,D as ve}from"./vendor.7698a149.js";const fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}};fe();var W="/assets/spotdl.5dcb64c0.svg",v=(e,n)=>{const i=e.__vccOpts||e;for(const[o,s]of n)i[o]=s;return i};const we={components:{},setup(){return{}}},be={class:"p-10 footer bg-neutral text-neutral-content"},ye=t("div",null,[t("img",{src:W,width:"50",height:"50",viewBox:"0 0 24 24"}),t("p",null,[h("spotDL"),t("br"),h("Open Source Music Downloader")])],-1),$e=K('<div><span class="footer-title">Social</span><div class="grid grid-flow-col gap-4"><a href="https://github.com/spotDL" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://discord.gg/xCa23pwJWY" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a></div></div>',1),ke=[ye,$e];function xe(e,n,i,o,s,a){return c(),d("footer",be,ke)}var Se=v(we,[["render",xe]]);const f={PROTOCOL:window.location.protocol,WS_PROTOCOL:"ws:",BACKEND:window.location.hostname,PORT:window.location.port,WS_PORT:window.location.port,BASEURL:""};console.log("using env:",{});console.log("using config: ",f);const E=re.create({baseURL:`${f.PROTOCOL}//${f.BACKEND}:${f.PORT}${f.BASEURL}`}),C=le();console.log("session ID: ",C);const j=new WebSocket(`${f.WS_PROTOCOL}//${f.BACKEND}${f.PORT!==""?":"+f.PORT:""}${f.BASEURL}/api/ws?client_id=${C}`);j.onopen=e=>{console.log("websocket connection opened",e)};function De(e){return E.get("/api/songs/search",{params:{query:e}})}function Le(e){return E.get("/api/song/url",{params:{url:e}})}function Oe(e){return E.post("/api/download/url",null,{params:{url:e,client_id:C}})}function Re(e){return E.defaults.baseURL+"/api/download/file?file="+encodeURIComponent(e)+"&client_id="+encodeURIComponent(C)}function Ee(){return E.get("/api/settings")}function Ae(e){return E.post("/api/settings/update",e)}function Ue(e){return j.onmessage=e}function Te(e){return j.onerror=e}var x={search:De,open:Le,download:Oe,downloadFileURL:Re,getSettings:Ee,setSettings:Ae,ws_onmessage:Ue,ws_onerror:Te};const B=g({audio_providers:[""],lyrics_providers:[""]}),Ce={audio_providers:["youtube","youtube-music"],lyrics_providers:["genius","musixmatch","azlyrics"],format:["mp3","flac","ogg","opus","m4a"],output:"{artists} - {title}.{output-ext}"};x.getSettings().then(e=>{e.status===200?(console.log("Received settings:",e.data),B.value=e.data):console.log("Error loading settings")});function Be(){const e=g();function n(){console.log("Saving settings:",B.value),x.setSettings(B.value).then(i=>{i.status===200?(console.log("Saved!"),e.value=!0,setTimeout(()=>{e.value=null},2e3)):(console.log("Error saving settings.",i),e.value=!1,setTimeout(()=>{e.value=null},2e3))})}return{saveSettings:n,settings:B,settingsOptions:Ce,isSaved:e}}const Ie={components:{Icon:R},setup(){return{sm:Be()}}},Me=t("input",{type:"checkbox",id:"my-modal",class:"modal-toggle"},null,-1),Ne={class:"modal"},Ve={class:"modal-box relative"},qe=t("label",{for:"my-modal",class:"btn btn-sm btn-circle absolute right-2 top-2"},"\u2715",-1),Pe=t("h3",{class:"font-bold text-lg"},"Download Settings",-1),We={class:"flex flex-col justify-center my-4"},je={class:"form-control w-full"},Fe=t("label",{class:"label"},[t("span",{class:"label-text"},"Audio Provider")],-1),He=["selected"],Qe={class:"form-control w-full"},ze=t("label",{class:"label"},[t("span",{class:"label-text"},"Lyrics Provider")],-1),Ke=["selected"],Ge={class:"form-control w-full"},Ze=t("label",{class:"label"},[t("span",{class:"label-text"},"Output Format")],-1),Je=["selected"],Xe={key:0,class:"alert alert-success shadow-lg"},Ye=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"Changes saved")],-1),et=[Ye],tt={key:1,class:"alert alert-error shadow-lg"},ot=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"Error! Unable to save settings")],-1),st=[ot],nt={class:"modal-action"};function at(e,n,i,o,s,a){return c(),d($,null,[Me,t("div",Ne,[t("div",Ve,[qe,Pe,t("div",We,[t("div",je,[Fe,T(t("select",{class:"select w-full","onUpdate:modelValue":n[0]||(n[0]=r=>o.sm.settings.value.audio_providers[0]=r)},[(c(!0),d($,null,D(o.sm.settingsOptions.audio_providers,(r,l)=>{var u;return c(),d("option",{key:l,selected:r===((u=o.sm.settings.value.audio_providers)==null?void 0:u[0])},m(r),9,He)}),128))],512),[[V,o.sm.settings.value.audio_providers[0]]])]),t("div",Qe,[ze,T(t("select",{class:"select w-full","onUpdate:modelValue":n[1]||(n[1]=r=>o.sm.settings.value.lyrics_providers[0]=r)},[(c(!0),d($,null,D(o.sm.settingsOptions.lyrics_providers,(r,l)=>{var u;return c(),d("option",{key:l,selected:r===((u=o.sm.settings.value.lyrics_providers)==null?void 0:u[0])},m(r),9,Ke)}),128))],512),[[V,o.sm.settings.value.lyrics_providers[0]]])]),t("div",Ge,[Ze,T(t("select",{class:"select w-full","onUpdate:modelValue":n[2]||(n[2]=r=>o.sm.settings.value.format=r)},[(c(!0),d($,null,D(o.sm.settingsOptions.format,(r,l)=>(c(),d("option",{key:l,selected:r===o.sm.settings.value.format},m(r),9,Je))),128))],512),[[V,o.sm.settings.value.format]])])]),o.sm.isSaved.value===!0?(c(),d("div",Xe,et)):k("",!0),o.sm.isSaved.value===!1?(c(),d("div",tt,st)):k("",!0),t("div",nt,[t("label",{class:"btn",onClick:n[3]||(n[3]=r=>o.sm.saveSettings())},"Save")])])])],64)}var rt=v(Ie,[["render",at]]);const b=g(""),X=g("light"),Y=g("dark");function ee({useSystem:e=!0,initialTheme:n="",newLightAlias:i=null,newDarkAlias:o=null}={}){function s(y){X.value=y,w()}function a(y){Y.value=y,w()}function r(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function l(y){b.value=y,w()}function u(){b==="dark"?b.value="light":b==="light"&&(b.value="dark"),w()}function w(){document.documentElement.setAttribute("data-theme",b.value==="dark"?Y.value:X.value)}return b.value!=="light"&&b.value!=="dark"&&(e&&l(r()),(n==="light"||n==="dark")&&(b.value=n)),i&&s(i),o&&a(o),w(),{currentTheme:b,setLightAlias:s,setDarkAlias:a,getSystemTheme:r,setTheme:l,switchTheme:u}}const lt={name:"App",components:{Footer:Se,Settings:rt},setup(){const e=ee();return ce(()=>{e.setLightAlias("emerald"),e.setDarkAlias("forest")}),{themeMgr:e}}},ct={class:"bg-base-300 absolute w-full top-0"};function it(e,n,i,o,s,a){const r=p("router-view"),l=p("Footer"),u=p("Settings");return c(),d("div",ct,[_(r),_(l),_(u)])}var dt=v(lt,[["render",it]]);const te=g(""),F=g(),A=g(!1),I=g(!1),M=g("");function H(){function e(s){return n(s)||i(s)}function n(s){return!(s===""||s.includes("://open.spotify.com/playlist/")||s.includes("://open.spotify.com/album/")||s.includes("://open.spotify.com/show/")||s.includes("://open.spotify.com/artist/"))}function i(s){return!!s.includes("://open.spotify.com/track/")}function o(s){console.log("Searching for:",s),F.value=[],A.value=!0,te.value=s,I.value=!1,M.value="",x.search(s).then(a=>{console.log("Received Data:",a.data),a.status===200?(F.value=a.data,A.value=!1):(console.log("Error:",a),A.value=!1,I.value=!0,M.value=a.toString())}).catch(a=>{console.log("Other Error:",a.message),A.value=!1,I.value=!0,M.value=a.message})}return{searchTerm:te,isSearching:A,results:F,error:I,errorValue:M,searchFor:o,isValid:e,isValidSearch:n,isValidURL:i}}const L={QUEUED:"In Queue",DOWNLOADING:"Downloading...",DOWNLOADED:"Done",ERROR:"Error"},O=g([]);class ut{constructor(n){this.song=n,this.web_status=L.QUEUED,this.progress=0,this.message=null,this.web_download_url=null}setDownloading(){this.web_status=L.DOWNLOADING}setDownloaded(){this.web_status=L.DOWNLOADED}setError(){this.web_status=L.ERROR}setWebURL(n){this.web_download_url=n}isQueued(){return this.song.song_id!==void 0}isDownloading(){return this.web_status===L.DOWNLOADING}isDownloaded(){return this.web_status===L.DOWNLOADED}isErrored(){return this.web_status===L.ERROR}wsUpdate(n){this.progress=n.progress,this.message=n.message}}function N(){function e(s){return O.value.findIndex(a=>a.song.song_id===s.song_id)}function n(s){let a=new ut(s);O.value.push(a)}function i(s){console.log("removing",s,s.song_id),O.value=O.value.filter(a=>a.song.song_id!==s.song_id),console.log(O.value)}function o(s){return O.value[e(s)]}return{appendSong:n,removeSong:i,getBySong:o,downloadQueue:O}}const S=N();x.ws_onmessage(e=>{let n=JSON.parse(e.data);S.getBySong(n.song).wsUpdate(n)});x.ws_onerror(e=>{console.log("websocket error:",e)});function U(){function e(s){x.open(s).then(a=>{if(console.log("Received Response:",a),a.status===200){let r=a.data;console.log("Opened Song:",r),i(r)}else console.log("Error:",a)}).catch(a=>{console.log("Other Error:",a.message)})}function n(s){console.log("Downloading",s),S.getBySong(s).setDownloading(),x.download(s.url).then(a=>{if(console.log("Received Response:",a),a.status===200){let r=a.data;console.log("Download Complete:",r),S.getBySong(s).setWebURL(x.downloadFileURL(r)),S.getBySong(s).setDownloaded()}else console.log("Error:",a),S.getBySong(s).setError()}).catch(a=>{console.log("Other Error:",a.message),S.getBySong(s).setError()})}function i(s,a=!0){S.appendSong(s),a&&n(s)}function o(s){console.log("removing"),S.removeSong(s)}return{fromURL:e,download:n,queue:i,remove:o}}const _t={components:{Icon:R},setup(){const e=H(),n=U(),i=["All Eyes On Me - Bo Burnham","https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f","Lil Wayne","Drive - Miley Cyrus","Sofia - TMG","Lightning Crashes - Live"],o=g(i[0]),s=setInterval(()=>{i.push(i.shift()),o.value=i[0]},6e3);ie(()=>{clearInterval(s)});function a(l){if(e.isValidURL(l))n.fromURL(l),r({name:"Download"});else if(e.isValidSearch(l)){let u={name:"Search",params:{query:l}};e.isValidSearch(l)&&r(u)}else console.log("Invalid search term.")}function r(l){Q.push(l)}return{lookUp:a,searchTerm:e.searchTerm,isValidURL:e.isValidURL,placeHolder:o}}},ht={class:"flex flex-row items-center space-x-4 w-full"},pt=["placeholder"],mt=h(" \u200B ");function gt(e,n,i,o,s,a){const r=p("Icon");return c(),d("div",ht,[T(t("input",{type:"text",placeholder:o.placeHolder,class:"input input-bordered w-full text-base-content","onUpdate:modelValue":n[0]||(n[0]=l=>o.searchTerm=l),onKeyup:n[1]||(n[1]=ue(l=>o.lookUp(o.searchTerm),["enter"]))},null,40,pt),[[de,o.searchTerm]]),t("button",{class:"btn btn-square btn-primary",onClick:n[2]||(n[2]=l=>o.lookUp(o.searchTerm))},[mt,o.isValidURL(o.searchTerm)?(c(),q(r,{key:0,icon:"clarity:download-line",class:"h-6 w-6"})):(c(),q(r,{key:1,icon:"clarity:search-line",class:"h-6 w-6"}))])])}var oe=v(_t,[["render",gt]]);const vt={components:{Icon:R,SearchInput:oe},setup(){return{themeMgr:ee({newLightAlias:"spotdl-light",newDarkAlias:"spotdl-dark"})}}},ft=e=>(G("data-v-38c98700"),e=e(),Z(),e),wt={class:"hero min-h-screen"},bt={key:0,class:"flex justify-end absolute top-0 right-0"},yt={class:"swap swap-rotate"},$t=["checked"],kt=h(" \u200B "),xt=h(" \u200B "),St={for:"my-modal",class:"btn btn-square modal-button m-2"},Dt=h(" \u200B "),Lt={class:"block text-center justify-center hero-content"},Ot=K('<div class="bg-cover bg-no-repeat bg-center" data-v-38c98700><img src="'+W+'" class="mb-5 w-32 center" data-v-38c98700></div><div class="max-w-lg" data-v-38c98700><h1 class="mb-5 text-5xl font-bold text-base-content" data-v-38c98700>spotDL</h1><p class="mb-5 text-base-content" data-v-38c98700> Download your Spotify songs with embedded album art and metadata </p></div>',2),Rt={class:"alert alert-info shadow-lg my-4"},Et=ft(()=>t("span",null,[h("This web interface currently downloads only songs. "),t("br"),h(" Album, Artist, Playlist and Show links will not work.")],-1));function At(e,n,i,o,s,a){const r=p("Icon"),l=p("SearchInput");return c(),d("div",wt,[(c(),d("div",bt,[t("label",yt,[t("input",{type:"checkbox",onChange:n[0]||(n[0]=u=>o.themeMgr.setTheme(u.target.checked?"light":"dark")),checked:o.themeMgr.currentTheme.value==="dark"?!1:"checked"},null,40,$t),kt,_(r,{icon:"clarity:sun-line",class:"swap-on fill-current h-8 w-8 m-4"}),xt,_(r,{icon:"clarity:moon-line",class:"swap-off fill-current h-8 w-8 m-4"})]),t("label",St,[Dt,_(r,{icon:"clarity:settings-line",class:"h-6 w-6"})])])),t("div",Lt,[Ot,_(l),t("div",Rt,[t("div",null,[_(r,{icon:"clarity:info-circle-line",class:"swap-off fill-current h-6 w-6"}),Et])])])])}var Ut=v(vt,[["render",At],["__scopeId","data-v-38c98700"]]);const Tt={components:{Hero:Ut},setup(){return P(()=>{window.scroll(0,0)}),{}}};function Ct(e,n,i,o,s,a){const r=p("Hero");return c(),q(r)}var Bt=v(Tt,[["render",Ct]]);const It={components:{Icon:R,SearchInput:oe},setup(){const e=N(),n=U(),i=J();function o(s){Q.push(s)}return{goto:o,route:i,pt:e,dm:n}}},se=e=>(G("data-v-cad5f4cc"),e=e(),Z(),e),Mt={class:"navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-box",style:{width:"auto !important"}},Nt=se(()=>t("div",{class:"bg-cover bg-no-repeat bg-center"},[t("img",{src:W,class:"py-2 pr-2 w-10 center"})],-1)),Vt=se(()=>t("button",{class:"text-lg font-bold"},"spotDL",-1)),qt=[Nt,Vt],Pt={class:"hidden sm:flex px-2 mx-2 navbar-center w-96 space-x-4"},Wt={class:"navbar-end"},jt={for:"my-modal",class:"btn btn-square modal-button mx-2"},Ft=h(" \u200B "),Ht={class:"indicator"},Qt={key:0,class:"indicator-item indicator-top indicator-end badge badge-secondary",style:{top:"-5px",right:"-5px"}},zt=h(" \u200B "),Kt={class:"sm:hidden px-2 mx-2"};function Gt(e,n,i,o,s,a){const r=p("SearchInput"),l=p("Icon");return c(),d($,null,[t("div",Mt,[t("button",{class:"px-2 mx-2 navbar-start",onClick:n[0]||(n[0]=u=>o.goto({name:"Home"}))},qt),t("div",Pt,[_(r,{class:"w-full"})]),t("div",Wt,[t("label",jt,[Ft,_(l,{icon:"clarity:settings-line",class:"h-6 w-6"})]),t("div",Ht,[o.pt.downloadQueue.value.length>0?(c(),d("div",Qt,m(o.pt.downloadQueue.value.length),1)):k("",!0),t("a",{class:_e(["btn btn-square",o.route.name==="Download"?"btn-primary":"btn-ghost"]),onClick:n[1]||(n[1]=u=>o.goto({name:"Download"}))},[zt,_(l,{icon:"clarity:download-cloud-line",class:"h-6 w-6"})],2)])])]),t("div",Kt,[_(r,{class:"w-full"})])],64)}var ne=v(It,[["render",Gt],["__scopeId","data-v-cad5f4cc"]]);const Zt={components:{Icon:R},props:["data","error"],emits:["download"],setup(e,n){const i=H(),o=N(),s=U();return{data:e.data,error:e.error,errorValue:i.errorValue,loading:i.isSearching,download:a=>n.emit("download",a),dm:s,pt:o}}},Jt={class:"min-h-screen m-2"},Xt={key:0,class:"hero min-h-screen"},Yt={key:0,class:"btn btn-sm btn-ghost loading"},eo={key:1,class:"alert alert-error"},to={class:"flex-1"},oo=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 mx-2 stroke-current"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})],-1),so={class:"aspect-square md:max-h-fit"},no=["src"],ao={class:"card-body"},ro={class:"card-title"},lo={key:0,class:"badge mx-0.5 badge-error"},co={key:0},io=t("br",null,null,-1),uo=t("p",null,[t("br")],-1),_o={class:"card-actions absolute bottom-0 right-0 m-2"},ho=["href"],po=h(" \u200B "),mo={key:0,class:"btn btn-primary btn-square"},go=h(" \u200B "),vo=["onClick"],fo=h(" \u200B ");function wo(e,n,i,o,s,a){const r=p("Icon");return c(),d("div",Jt,[o.loading||o.error?(c(),d("div",Xt,[o.loading?(c(),d("button",Yt," LOADING ")):k("",!0),o.error?(c(),d("div",eo,[t("div",to,[oo,t("label",null,"Error: "+m(o.errorValue),1)])])):k("",!0)])):(c(!0),d($,{key:1},D(o.data,(l,u)=>{var w;return c(),d("div",{key:u,class:"card md:card-side card-bordered my-2 shadow-lg card-compact bg-base-100"},[t("figure",so,[t("img",{src:l.cover_url,class:"object-contain aspect-square md:max-h-44"},null,8,no)]),t("div",ao,[t("h2",ro,[h(m(l.name)+" ",1),l.explicit?(c(),d("div",lo," Explicit ")):k("",!0)]),t("h3",null,[(c(!0),d($,null,D(l.artists,(y,z)=>(c(),d("a",{key:z},[z!==0?(c(),d("a",co," \u2022 ")):k("",!0),h(" "+m(y),1)]))),128))]),t("h3",null,m(l.album_name),1),io,uo,t("div",_o,[t("a",{class:"btn btn-ghost btn-square",href:l.url,target:"_blank"},[po,_(r,{icon:"clarity:link-line",class:"h-6 w-6"})],8,ho),((w=o.pt.getBySong(l))==null?void 0:w.isQueued())?(c(),d("button",mo,[go,_(r,{icon:"clarity:check-line",class:"h-6 w-6"})])):(c(),d("button",{key:1,class:"btn btn-primary btn-square",onClick:y=>o.download(l)},[fo,_(r,{icon:"clarity:download-line",class:"h-6 w-6"})],8,vo))])])])}),128))])}var bo=v(Zt,[["render",wo]]);const yo={components:{Navbar:ne,SearchList:bo},setup(){P(()=>{window.scroll(0,0)});const e=J(),n=H(),i=U();return he(()=>e.params.query,()=>{e.params.query&&n.searchFor(e.params.query)},{deep:!0}),n.searchFor(e.params.query),{sm:n,dm:i}}};function $o(e,n,i,o,s,a){const r=p("Navbar"),l=p("SearchList");return c(),d("div",null,[_(r),_(l,{data:o.sm.results,error:o.sm.error,onDownload:n[0]||(n[0]=u=>o.dm.queue(u))},null,8,["data","error"])])}var ko=v(yo,[["render",$o]]);const xo={components:{Icon:R},props:{data:Object},setup(e,n){const i=N(),o=U();function s(a){const r=document.createElement("a");r.href=a,r.download=a.split("/").pop(),document.body.appendChild(r),r.click(),document.body.removeChild(r)}return{dm:o,pt:i,download:s}}},So={class:"min-h-screen m-2"},Do={key:0},Lo=t("div",{class:"alert shadow-lg"},[t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-info flex-shrink-0 w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("span",null,"No downloads are queued. Search for a song to begin.")])],-1),Oo=[Lo],Ro={key:1},Eo={class:"carousel carousel-end bg-base-200 rounded-box shadow-lg"},Ao=["src"],Uo={class:"card card-bordered my-2 shadow-lg card-compact bg-base-100"},To={class:"card-title"},Co={class:"stat-figure text-primary flex space-x-2 items-center"},Bo={key:0,class:"badge badge-error gap-2"},Io={class:"badge"},Mo=["onClick"],No=h(" \u200B "),Vo=["onClick"],qo=h(" \u200B "),Po={key:2,class:"btn btn-square btn-ghost loading"};function Wo(e,n,i,o,s,a){const r=p("Icon");return c(),d("div",So,[o.pt.downloadQueue.value.length===0?(c(),d("div",Do,Oo)):(c(),d("div",Ro,[t("div",Eo,[(c(!0),d($,null,D(o.pt.downloadQueue.value,(l,u)=>(c(),d("div",{key:u,class:"carousel-item h-48"},[t("img",{src:l.song.cover_url},null,8,Ao)]))),128))]),t("div",Uo,[(c(!0),d($,null,D(o.pt.downloadQueue.value,(l,u)=>(c(),d("div",{key:u,class:"card-body grid grid-rows-1"},[t("h2",To,m(l.song.name)+" - "+m(l.song.artist),1),t("p",null,m(l.song.album_name),1),t("div",Co,[l.isErrored()?(c(),d("div",Bo," error ")):k("",!0),t("span",Io,m(l.message||l.web_status),1),t("button",{class:"btn btn-error btn-outline btn-square",onClick:w=>o.dm.remove(l.song)},[No,_(r,{icon:"clarity:trash-line",class:"h-6 w-6"})],8,Mo),l.isDownloaded()?(c(),d("a",{key:1,class:"btn btn-square btn-ghost",href:"javascript:;",onClick:w=>o.download(l.web_download_url),download:""},[qo,_(r,{icon:"clarity:download-line",class:"h-6 w-6"})],8,Vo)):l.progress===0?(c(),d("button",Po," \u200B ")):(c(),d("div",{key:3,class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:pe(`--value: ${l.progress}; --size: 2.5rem`)},m(Math.round(l.progress))+"% ",5))])]))),128))])]))])}var jo=v(xo,[["render",Wo]]);const Fo={components:{Navbar:ne,DownloadList:jo},setup(){return P(()=>{window.scroll(0,0)}),{}}};function Ho(e,n,i,o,s,a){const r=p("Navbar"),l=p("DownloadList");return c(),d("div",null,[_(r),_(l)])}var Qo=v(Fo,[["render",Ho]]);const zo=[{path:"/",name:"Home",component:Bt},{path:"/search/:query",name:"Search",component:ko},{path:"/download",name:"Download",component:Qo}],Q=me({history:ge(f.BASEURL),routes:zo});const ae=ve(dt);ae.use(Q);ae.mount("#app");
