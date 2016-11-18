if (self.CavalryLogger) { CavalryLogger.start_js(["DMDFh"]); }

__d("ModuleDependencies",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m,n){var o=c.__debug.modulesMap[n],p=c.__debug.deps;if(m[n])return;m[n]=true;if(!o){p[n]&&(l[n]=true);return;}if(!o.dependencies||!o.dependencies.length){if(o.waiting)l[n]=true;return;}o.dependencies.forEach(function(q){h(l,m,q);});}function i(l){if(c.__debug){var m={};h(m,{},l);var n=Object.keys(m);n.sort();return n;}return null;}function j(){var l={loading:{},missing:[]};if(!c.__debug)return l;var m={},n=c.__debug.getModules(),o=c.__debug.deps;for(var p in n){var q=n[p];if(q.waiting){var r={};h(r,{},q.id);delete r[q.id];l.loading[q.id]=Object.keys(r);l.loading[q.id].sort();l.loading[q.id].forEach(function(s){if(!(s in n)&&o[s])m[s]=1;});}}l.missing=Object.keys(m);l.missing.sort();return l;}var k={setRequireDebug:function l(m){c.__debug=m;},getMissing:i,getNotLoadedModules:j};f.exports=k;}),null);
__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k){if(!k||!k.length)return 0;return k.reduce(function(l,m){return l+m;})/k.length;}function i(k){if(!k)return [];var l=[];for(var m in k)l.push(k[m]);return l;}var j={init:function k(){c('ErrorUtils').addListener(function(l){if(l.name!=='ModuleError')return;var m=c('ModuleDependencies').getNotLoadedModules(),n=Object.keys(m.loading),o=i(c('Bootloader').getLoadingUrls()),p=i(c('Bootloader').getLoadedUrlTimes()),q={};m.missing.forEach(function(t){q[t]=1;});var r={};n.forEach(function(t){r[t]=1;});var s=new (c('BanzaiScuba'))('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});s.addNormal('message',l.message).addInteger('missing_count',m.missing.length).addInteger('loading_count',n.length).addInteger('error_url_count',c('Bootloader').getErrorUrls().length).addTagset('missing_modules',q).addTagset('loading_modules',r).addInteger('mean_url_loading_time',Math.floor(h(o))).addInteger('mean_url_loaded_time',Math.floor(h(p))).post();},true);}};f.exports=j;}),null);
__d('ResetScrollOnUnload',['Run'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={disableScrollRestoration:function i(){c('Run').onUnload(function(){window.history.scrollRestoration='manual';});},init:function i(j){c('Run').onUnload(function(){window.history.scrollRestoration='manual';j.style.opacity='0';window.scrollTo(0,0);});}};f.exports=h;}),null);
__d('AccessibilityWebAssistiveTechTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$AccessibilityWebAssistiveTechTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.setIndicatedBrowsers=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.indicated_browsers=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setIsVirtualCursorAction=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.is_virtual_cursor_action=j;return this;};h.prototype.setVC=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={indicated_browsers:true,is_virtual_cursor_action:true,vc:true};f.exports=h;}),null);
__d('AccessibilityWebVirtualCursorClickLogger',['AccessibilityWebAssistiveTechTypedLogger','VirtualCursorStatus'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j){j.forEach(function(k){c('VirtualCursorStatus').add(k,this._log);}.bind(this),this);},_log:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2];if(j)new (c('AccessibilityWebAssistiveTechTypedLogger'))().setIndicatedBrowsers(k).setIsVirtualCursorAction(l).log();}};f.exports=h;}),null);
__d('BootloaderEventsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$BootloaderEventsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$BootloaderEventsTypedLogger1=babelHelpers['extends']({},this.$BootloaderEventsTypedLogger1,j);return this;};h.prototype.setAllResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.all_resources_count=j;return this;};h.prototype.setAllResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.all_resources_downloaded=j;return this;};h.prototype.setAsyncResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.async_resources_count=j;return this;};h.prototype.setAsyncResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.async_resources_downloaded=j;return this;};h.prototype.setBlEndpointMode=function(j){this.$BootloaderEventsTypedLogger1.bl_endpoint_mode=j;return this;};h.prototype.setBlSampleRate=function(j){this.$BootloaderEventsTypedLogger1.bl_sample_rate=j;return this;};h.prototype.setBlockingResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.blocking_resources_count=j;return this;};h.prototype.setBlockingResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.blocking_resources_downloaded=j;return this;};h.prototype.setCavalryBlCohort=function(j){this.$BootloaderEventsTypedLogger1.cavalry_bl_cohort=j;return this;};h.prototype.setCavalryCohort=function(j){this.$BootloaderEventsTypedLogger1.cavalry_cohort=j;return this;};h.prototype.setComponents=function(j){this.$BootloaderEventsTypedLogger1.components=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setDuration=function(j){this.$BootloaderEventsTypedLogger1.duration=j;return this;};h.prototype.setErrCount=function(j){this.$BootloaderEventsTypedLogger1.err_count=j;return this;};h.prototype.setFirstIdenticalRequest=function(j){this.$BootloaderEventsTypedLogger1.first_identical_request=j;return this;};h.prototype.setHasNewComponent=function(j){this.$BootloaderEventsTypedLogger1.has_new_component=j;return this;};h.prototype.setIsEmployee=function(j){this.$BootloaderEventsTypedLogger1.is_employee=j;return this;};h.prototype.setMsSinceNavstart=function(j){this.$BootloaderEventsTypedLogger1.ms_since_navstart=j;return this;};h.prototype.setPkgCohort=function(j){this.$BootloaderEventsTypedLogger1.pkg_cohort=j;return this;};h.prototype.setRef=function(j){this.$BootloaderEventsTypedLogger1.ref=j;return this;};h.prototype.setRequestPath=function(j){this.$BootloaderEventsTypedLogger1.request_path=j;return this;};h.prototype.setRetries=function(j){this.$BootloaderEventsTypedLogger1.retries=j;return this;};h.prototype.setSvnRev=function(j){this.$BootloaderEventsTypedLogger1.svn_rev=j;return this;};h.prototype.setTimesliceContext=function(j){this.$BootloaderEventsTypedLogger1.timeslice_context=j;return this;};h.prototype.setVC=function(j){this.$BootloaderEventsTypedLogger1.vc=j;return this;};h.prototype.setWeight=function(j){this.$BootloaderEventsTypedLogger1.weight=j;return this;};var i={all_resources_count:true,all_resources_downloaded:true,async_resources_count:true,async_resources_downloaded:true,bl_endpoint_mode:true,bl_sample_rate:true,blocking_resources_count:true,blocking_resources_downloaded:true,cavalry_bl_cohort:true,cavalry_cohort:true,components:true,duration:true,err_count:true,first_identical_request:true,has_new_component:true,is_employee:true,ms_since_navstart:true,pkg_cohort:true,ref:true,request_path:true,retries:true,svn_rev:true,timeslice_context:true,vc:true,weight:true};f.exports=h;}),null);
__d('performanceNavigationStart',['performance'],(function a(b,c,d,e,f,g){var h;if(c.__markCompiled)c.__markCompiled();var i=void 0;if(c('performance').now){if(c('performance').timing&&c('performance').timing.navigationStart){i=function j(){return c('performance').timing.navigationStart;};}else if(typeof window._cstart==='number'){i=function j(){return window._cstart;};}else (function(){var j=Date.now();i=function k(){return j;};})();}else i=function j(){return 0;};f.exports=i;}),null);
__d('BootloaderLoggerUtil',['Arbiter','Bootloader','BootloaderEventsTypedLogger','CurrentUser','ScriptPath','SiteData','performanceNavigationStart'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i={initLogging:function j(k){if(h)return;h=c('Arbiter').subscribe(c('Bootloader').Events.BOOTLOAD,function(l,m){var n=m.start_time,o=babelHelpers.objectWithoutProperties(m,['start_time']),p=Math.round(n-c('performanceNavigationStart')());new (c('BootloaderEventsTypedLogger'))().setMsSinceNavstart(p).setCavalryCohort(k.cavalry_cohort).setPkgCohort(c('SiteData').pkg_cohort).setWeight(k.sample_rate).setIsEmployee(c('CurrentUser').isEmployee()).setSvnRev(c('SiteData').revision).setBlEndpointMode(c('SiteData').be_mode).setRequestPath(c('ScriptPath').getScriptPath()).setCavalryBlCohort(k.cavalry_bl_cohort).setBlSampleRate(k.bl_sample_rate).updateData(o).log();});}};f.exports=i;}),null);
__d('FormTypeABTester',['Base64','Event'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=16,k=32,l=65,m=90,n=48,o=57,p=58,q=63,r=91,s=94,t=0,u=0,v=0,w=0,x=[],y=null,z=[],aa=[],ba=[],ca=[];for(var da=0;da<10;da++){z.push(0);aa.push(0);}for(var ea=0;ea<10;ea++){aa.push(0);ba.push(0);ca.push(0);}var fa=function ia(ja){var ka=window.event?Date.now():ja.timeStamp,la=window.event?window.event.keyCode:ja.which;la%=128;if(la>=l&&la<=m||la==k){t++;}else if(la>=n&&la<=o){u++;}else if(la>=p&&la<=q||la>=r&&la<=s){v++;}else w++;x[la]=ka;if(y){var ma=ka-y;if(ma>=0&&(la>=l&&la<=m||la==k))if(ma<400){aa[Math.floor(ma/20)]++;}else if(ma<1000){ba[Math.floor((ma-400)/60)]++;}else if(ma<3000)ca[Math.floor((ma-1000)/200)]++;}y=ka;},ga=function ia(ja){var ka=window.event?Date.now():ja.timeStamp,la=window.event?window.event.keyCode:ja.which,ma=ka-x[la%128];if(ma>=50&&ma<250)z[Math.floor((ma-50)/20)]++;},ha=function ia(ja){var ka=Math.max.apply(Math,ja),la=[];ja.forEach(function(ma){la.push(Math.floor(ma*63/(ka||1)));});return la;};this.getDataVect=function(){var ia=aa.concat(ba,ca);return ha(ia).concat(ha(z),[t/2,u/2,v/2,w/2]);};this.getData=function(){return c('Base64').encodeNums(this.getDataVect());};c('Event').listen(i,{keyup:ga.bind(this),keydown:fa.bind(this)});}f.exports=h;}),null);
__d('FourOhFourJSTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig',this.$FourOhFourJSTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig',this.$FourOhFourJSTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$FourOhFourJSTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$FourOhFourJSTypedLogger1=babelHelpers['extends']({},this.$FourOhFourJSTypedLogger1,j);return this;};h.prototype.setFbid=function(j){this.$FourOhFourJSTypedLogger1.fbid=j;return this;};h.prototype.setOriginalURI=function(j){this.$FourOhFourJSTypedLogger1.original_uri=j;return this;};h.prototype.setScriptPath=function(j){this.$FourOhFourJSTypedLogger1.script_path=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$FourOhFourJSTypedLogger1=babelHelpers['extends']({},this.$FourOhFourJSTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={fbid:true,original_uri:true,script_path:true};f.exports=h;}),null);
__d("XConsentCookieController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/cookie\/consent\/",{pv:{type:"Enum",enumType:0}});}),null);
__d('DeferredCookie',['AsyncRequest','Cookie','Map','XConsentCookieController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new (c('Map'))(),i={shouldAddDefaultListener:true,defaultHandler:null,autoFlushCookies:false,sentConsentToServer:false,addToQueue:function j(k,l,m,n,o,p,q){if(this.autoFlushCookies){if(p){c('Cookie').setIfFirstPartyContext(k,l,m,n,o);}else c('Cookie').set(k,l,m,n,o);return;}if(h.has(k))return;h.set(k,{name:k,value:l,nMilliSecs:m,path:n,secure:o,firstPartyOnly:p});if(q)this.addDefaultInteractionListener();},flushAllCookies:function j(){h.forEach(function(l,m){if(l.firstPartyOnly){c('Cookie').setIfFirstPartyContext(l.name,l.value,l.nMilliSecs,l.path,l.secure);}else c('Cookie').set(l.name,l.value,l.nMilliSecs,l.path,l.secure);});this.autoFlushCookies=true;h=new (c('Map'))();if(!this.sentConsentToServer){this.sentConsentToServer=true;var k=c('XConsentCookieController').getURIBuilder().setEnum('pv',this.getNoticePolicyVersion()).getURI();new (c('AsyncRequest'))().setURI(k).send();}this.removeDefaultInteractionListener();},getNoticePolicyVersion:function j(){try{var l=document.getElementById('cpn-pv-link');if(!l)return '1';return l.getAttribute('data-pv');}catch(k){return '1';}},removeDefaultInteractionListener:function j(){if(this.defaultHandler){if(window.removeEventListener){window.removeEventListener('click',this.defaultHandler,true);}else if(document.detachEvent)document.detachEvent('onclick',this.defaultHandler);this.defaultHandler=null;}},addDefaultInteractionListener:function j(){if(this.shouldAddDefaultListener){this.shouldAddDefaultListener=false;this.defaultHandler=this.baseInteractionHandler.bind(this);if(window.addEventListener){window.addEventListener('click',this.defaultHandler,true);}else if(document.attachEvent)document.attachEvent('onclick',this.defaultHandler);}},baseInteractionHandler:function j(){this.flushAllCookies();}};f.exports=i;}),null);
__d('LoginFormController',['Event','ge','Button','Cookie','DeferredCookie','FormTypeABTester'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.init=function(h,i,j,k){if(k)var l=new (c('FormTypeABTester'))(h);c('Event').listen(h,'submit',function(){if(k&&h.ab_test_data)h.ab_test_data.value=l.getData();if(window.__cookieReload)window.clearInterval(window.__cookieReload);c('Button').setEnabled(i,false);setTimeout(c('Button').setEnabled.bind(null,i,true),15000);c('DeferredCookie').flushAllCookies();});var m=c('ge')('lgnjs');if(m){var n=Math.floor(Date.now()/1000);m.value=n;}var o=parseInt(c('Cookie').get('m_ts'),10),p=j!=null;if(o>n-60)p=false;if(p){var q,r=function s(){if(c('Cookie').get('c_user')!=null){window.clearInterval(q);c('Cookie').set('m_ts',Math.floor(Date.now()/1000),null,'/',false);window.location.href=j;}};q=window.setInterval(r,1000);r();}};}),null);
__d('FourOhFourJSLogger',['FourOhFourJSTypedLogger','ScriptPath'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={log:function i(){window.onload=function(){var j=new (c('FourOhFourJSTypedLogger'))();j.setOriginalURI(window.location.href);j.setScriptPath(c('ScriptPath').getScriptPath());j.logVital();};}};f.exports=h;}),null);
__d("ScreenDimensionsAutoSet",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){if(!window.btoa)return '';var j={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(j));}var i={setInputValue:function j(k){k.value=h();}};f.exports=i;}),null);
__d('StringTransformations',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={unicodeEscape:function h(i){return i.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(j){var k=j.charCodeAt().toString(16);return '\\u'+('0000'+k.toUpperCase()).slice(-4);});},unicodeUnescape:function h(i){return i.replace(/(\\u[0-9A-Fa-f]{4})/g,function(j){return String.fromCharCode(parseInt(j.slice(2),16));});}};}),null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=2,i=h*32,j,k,l,m,n,o,p,q,r,s={},t;function u(){return {timeoutDelayMap:s,nextDelay:t,timeoutInSeconds:l};}function v(){if(j){var da=Date.now();if(da>n)p=Math.min(i,Math.ceil(da/1000-m));var ea=aa();if(ea)j(ea,t);}z();}function w(){x();k=c('setTimeoutAcrossTransitions')(v,l*1000);}function x(){if(k){clearTimeout(k);k=null;}}function y(da){m=da;n=m*1000;o=[1];for(var ea=1;ea<h;ea++)o.push(0);p=1;q+=1;r+=1;var fa=r.toString()+'_delay';t=s[fa];if(t===undefined)t=s.delay;var ga=r.toString()+'_timeout',ha=s[ga];if(ha===undefined)ha=s.timeout;ha=Math.min(ha,i);l=ha||i;w();}function z(){x();o=null;}function aa(){if(!o)return null;return {tos_id:c('pageID'),start_time:m,tos_array:o.slice(0),tos_len:p,tos_seq:r,tos_cum:q};}function ba(da){if(da>=n&&da-n<1000)return;ca(Math.floor(da/1000));}function ca(da){var ea=da-m;if(ea<0||ea>=i)v();if(!o){y(da);}else{o[ea>>5]|=1<<(ea&31);p=ea+1;q+=1;n=da*1000;}}f.exports={init:function da(ea,fa,ga){q=0;r=-1;j=ea;if(typeof fa=='object'&&fa!==null){s=fa;}else s={};if(!ga)ga=Date.now();y(Math.floor(ga/1000));c('Banzai').subscribe(c('Banzai').SHUTDOWN,v);},update:function da(ea){ba(ea);},get:function da(){return aa();},ship:function da(){v();},reset:function da(){z();},testState:function da(){return u();}};}),null);
__d('TimeSpentBitArrayLogger',['Arbiter','Banzai','BanzaiODS','TimeSpentArray','TimeSpentConfig','TimeSpentImmediateActiveSecondsLogger','UserActivity','isInIframe'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:c('Banzai').BASIC.delay,retry:true};function i(j,k){c('Arbiter').inform('timespent/tosbitdataposted',babelHelpers['extends']({},j));if(typeof k=='number'){h.delay=k;}else h.delay=c('Banzai').BASIC.delay;c('Banzai').post('time_spent_bit_array',babelHelpers['extends']({},j),h);h.delay=c('TimeSpentConfig').delay;}f.exports={init:function j(k){if(c('isInIframe')())return;c('UserActivity').subscribe(function(m,n){var o=n.last_inform;c('TimeSpentArray').update(o);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(o);});var l=Date.now();c('TimeSpentArray').init(i,c('TimeSpentConfig'),l);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(l);c('BanzaiODS').bumpEntityKey('ms.time_spent.qa.www','time_spent.bits.js_initialized');}};}),null);
/**
 * @providesModule sha256
 * @preserve-header
 *
 * Copyright (c) 2003, Christoph Bichlmeier
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */__d("sha256",["str2rstr"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();var h=c('str2rstr');function i(ga,ha){return ((ha>>>ga)|(ha<<(32-ga)));}function j(ga,ha,ia){return ((ga&ha)^(~ga&ia));}function k(ga,ha,ia){return ((ga&ha)^(ga&ia)^(ha&ia));}function l(ga){return (i(2,ga)^i(13,ga)^i(22,ga));}function m(ga){return (i(6,ga)^i(11,ga)^i(25,ga));}function n(ga){return (i(7,ga)^i(18,ga)^(ga>>>3));}function o(ga){return (i(17,ga)^i(19,ga)^(ga>>>10));}function p(ga,ha){return (ga[ha&15]+=o(ga[(ha+14)&15])+ga[(ha+9)&15]+n(ga[(ha+1)&15]));}var q=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),r=new Array(8),s=new Array(2),t=new Array(64),u=new Array(16),v="0123456789abcdef";function w(ga,ha){var ia=(ga&65535)+(ha&65535),ja=(ga>>16)+(ha>>16)+(ia>>16);return (ja<<16)|(ia&65535);}function x(){s[0]=s[1]=0;r[0]=1779033703;r[1]=3144134277;r[2]=1013904242;r[3]=2773480762;r[4]=1359893119;r[5]=2600822924;r[6]=528734635;r[7]=1541459225;}function y(){var ga,ha,ia,ja,ka,la,ma,na,oa,pa;ga=r[0];ha=r[1];ia=r[2];ja=r[3];ka=r[4];la=r[5];ma=r[6];na=r[7];for(var qa=0;qa<16;qa++)u[qa]=((t[(qa<<2)+3])|(t[(qa<<2)+2]<<8)|(t[(qa<<2)+1]<<16)|(t[qa<<2]<<24));for(var ra=0;ra<64;ra++){oa=na+m(ka)+j(ka,la,ma)+q[ra];if(ra<16){oa+=u[ra];}else oa+=p(u,ra);pa=l(ga)+k(ga,ha,ia);na=ma;ma=la;la=ka;ka=w(ja,oa);ja=ia;ia=ha;ha=ga;ga=w(oa,pa);}r[0]+=ga;r[1]+=ha;r[2]+=ia;r[3]+=ja;r[4]+=ka;r[5]+=la;r[6]+=ma;r[7]+=na;}function z(ga,ha){var ia,ja,ka=0;ja=((s[0]>>3)&63);var la=(ha&63);if((s[0]+=(ha<<3))<(ha<<3))s[1]++;s[1]+=(ha>>29);for(ia=0;ia+63<ha;ia+=64){for(var ma=ja;ma<64;ma++)t[ma]=ga.charCodeAt(ka++);y();ja=0;}for(var ma=0;ma<la;ma++)t[ma]=ga.charCodeAt(ka++);}function aa(){var ga=((s[0]>>3)&63);t[ga++]=128;if(ga<=56){for(var ha=ga;ha<56;ha++)t[ha]=0;}else{for(var ha=ga;ha<64;ha++)t[ha]=0;y();for(var ha=0;ha<56;ha++)t[ha]=0;}t[56]=(s[1]>>>24)&255;t[57]=(s[1]>>>16)&255;t[58]=(s[1]>>>8)&255;t[59]=s[1]&255;t[60]=(s[0]>>>24)&255;t[61]=(s[0]>>>16)&255;t[62]=(s[0]>>>8)&255;t[63]=s[0]&255;y();}function ba(){var ga=0,ha=new Array(32);for(var ia=0;ia<8;ia++){ha[ga++]=((r[ia]>>>24)&255);ha[ga++]=((r[ia]>>>16)&255);ha[ga++]=((r[ia]>>>8)&255);ha[ga++]=(r[ia]&255);}return ha;}function ca(){var ga=new String();for(var ha=0;ha<8;ha++)for(var ia=28;ia>=0;ia-=4)ga+=v.charAt((r[ha]>>>ia)&15);return ga;}function da(ga){var ha=0;for(var ia=0;ia<8;ia++)for(var ja=28;ja>=0;ja-=4)ga[ha++]=v.charCodeAt((r[ia]>>>ja)&15);}function ea(ga,ha){x();z(ga,ga.length);aa();if(ha){da(ha);}else return ca();}function fa(ga,ha,ia){if(ga===null||ga===undefined)return null;ha=(typeof ha=='undefined')?true:ha;if(ha)ga=h(ga);return ea(ga,ia);}f.exports=fa;}),null);
__d('QuickSandHeader',['sha256','Int64'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$QuickSandHeader1=1<<j;this.$QuickSandHeader2=this.$QuickSandHeader1/2;this.$QuickSandHeader3=c('Int64').fromInt(this.$QuickSandHeader2-1);this.$QuickSandHeader4=[];this.$QuickSandHeader5=0;this.$QuickSandHeader6=0;this.$QuickSandHeader7=0;this.$QuickSandHeader8=0;var k=c('sha256')(i),l=this.$QuickSandHeader9(this.$QuickSandHeader10(k)),m=this.$QuickSandHeader9(this.$QuickSandHeader10(k).slice(8));this.$QuickSandHeader4.push(l.xor(c('Int64').fromString('736f6d6570736575',16)));this.$QuickSandHeader4.push(m.xor(c('Int64').fromString('646f72616e646f6d',16)));this.$QuickSandHeader4.push(l.xor(c('Int64').fromString('6c7967656e657261',16)));this.$QuickSandHeader4.push(m.xor(c('Int64').fromString('7465646279746573',16)));}h.prototype.sipEdge=function(i){'use strict';return [this.sipNode(i,0),this.sipNode(i,1)];};h.prototype.sipNode=function(i,j){'use strict';return this.$QuickSandHeader11(2*i+j).and(this.$QuickSandHeader3).toInt();};h.prototype.getSize=function(){'use strict';return this.$QuickSandHeader1;};h.prototype.getHalfSize=function(){'use strict';return this.$QuickSandHeader2;};h.prototype.$QuickSandHeader12=function(i,j){'use strict';return i.shiftLeft(j).or(i.shiftRightUnsigned(64-j));};h.prototype.$QuickSandHeader9=function(i){'use strict';var j=new (c('Int64').fromInt)(i[0]),k=c('Int64').fromInt(i[1]).shiftLeft(8),l=c('Int64').fromInt(i[2]).shiftLeft(16),m=c('Int64').fromInt(i[3]).shiftLeft(24),n=c('Int64').fromInt(i[4]).shiftLeft(32),o=c('Int64').fromInt(i[5]).shiftLeft(40),p=c('Int64').fromInt(i[6]).shiftLeft(48),q=c('Int64').fromInt(i[7]).shiftLeft(56);return j.or(k).or(l).or(m).or(n).or(o).or(p).or(q);};h.prototype.$QuickSandHeader13=function(){'use strict';this.$QuickSandHeader5=this.$QuickSandHeader5.add(this.$QuickSandHeader6);this.$QuickSandHeader7=this.$QuickSandHeader7.add(this.$QuickSandHeader8);this.$QuickSandHeader6=this.$QuickSandHeader12(this.$QuickSandHeader6,13);this.$QuickSandHeader8=this.$QuickSandHeader12(this.$QuickSandHeader8,16);this.$QuickSandHeader6=this.$QuickSandHeader6.xor(this.$QuickSandHeader5);this.$QuickSandHeader8=this.$QuickSandHeader8.xor(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeader12(this.$QuickSandHeader5,32);this.$QuickSandHeader7=this.$QuickSandHeader7.add(this.$QuickSandHeader6);this.$QuickSandHeader5=this.$QuickSandHeader5.add(this.$QuickSandHeader8);this.$QuickSandHeader6=this.$QuickSandHeader12(this.$QuickSandHeader6,17);this.$QuickSandHeader8=this.$QuickSandHeader12(this.$QuickSandHeader8,21);this.$QuickSandHeader6=this.$QuickSandHeader6.xor(this.$QuickSandHeader7);this.$QuickSandHeader8=this.$QuickSandHeader8.xor(this.$QuickSandHeader5);this.$QuickSandHeader7=this.$QuickSandHeader12(this.$QuickSandHeader7,32);};h.prototype.$QuickSandHeader10=function(i){'use strict';for(var j=[],k=0;k<i.length;k+=2)j.push(parseInt(i.substr(k,2),16));return j;};h.prototype.$QuickSandHeader11=function(i){'use strict';var j=c('Int64').fromInt(i);this.$QuickSandHeader5=this.$QuickSandHeader4[0];this.$QuickSandHeader6=this.$QuickSandHeader4[1];this.$QuickSandHeader7=this.$QuickSandHeader4[2];this.$QuickSandHeader8=this.$QuickSandHeader4[3].xor(j);for(var k=0;k<2;k++)this.$QuickSandHeader13();this.$QuickSandHeader5=this.$QuickSandHeader5.xor(j);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(c('Int64').fromString('ff',16));for(k=0;k<4;k++)this.$QuickSandHeader13();return this.$QuickSandHeader5.xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7).xor(this.$QuickSandHeader8);};f.exports=h;}),null);
__d('QuickSandSolver',['AsyncRequest','Base64','Form','QuickSandHeader','sha256'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={solveAndEncode:function i(j,k,l,m,n,o){var p=JSON.stringify([this.solve(j,k,l,m,n),o]);return c('Base64').encode(p);},solveAndUpdateForm:function i(j,k,l,m,n,o,p){var q=this.solveAndEncode(j,k,l,m,n,p),r=document.getElementById(o);c('Form').createHiddenInputs({qsstamp:q},r);},solveAndSendRequestBack:function i(j,k){var l=this.solveAndEncode(k.__iterations,k.__header,k.__graphSizeShift,k.__proofSize,k.__edgePercentage,k.__blob);j.data.qsstamp=l;j.send();},solveAndCallAsyncController:function i(j,k,l,m,n,o){var p=this.solveAndEncode(j,k,l,m,n,o);new (c('AsyncRequest'))().setURI('/qs/').setData({qsstamp:p}).send();},solve:function i(j,k,l,m,n){var o=[],p=k;for(var q=0;q<j;q++){o.push(h.solveOneIteration(p,l,m,n));p=h.hashList(o[q]);}return o;},solveOneIteration:function i(j,k,l,m){var n=8192,o=new (c('QuickSandHeader'))(j,k),p=m*o.getSize()/100,q=[],r=[],s=[];for(var t=0;t<p;t++){var u=o.sipEdge(t),v=u[0],w=u[1];v+=1;w+=1+o.getHalfSize();var x=q[v],y=q[w];if(x==w||y==v)continue;r[0]=v;s[0]=w;var z=h.path(x,r,q,n),aa=h.path(y,s,q,n);if(r[z]==s[aa]){var ba=Math.min(z,aa);for(z-=ba,aa-=ba;r[z]!=s[aa];z++,aa++);var ca=z+aa+1;if(ca==l)return h.recoverSolution(z,aa,r,s,o,l,p);continue;}if(z<aa){while(z--)q[r[z+1]]=r[z];q[v]=w;}else{while(aa--)q[s[aa+1]]=s[aa];q[w]=v;}}return [];},path:function i(j,k,l,m){var n=0;for(n=0;j;j=l[j]){if(++n>=m){while(n--&&k[n]!=j);if(n<0){throw "Maximum path length was exceeded";}else throw "Illegal cycle has occurred";}k[n]=j;}return n;},recoverSolution:function i(j,k,l,m,n,o,p){var q=function w(){};q.prototype.add=function(w){this[w]=true;};q.prototype.remove=function(w){delete this[w];};var r=[],s=new q();s.add([l[0],m[0]]);while(j--)s.add([l[j+1&~1],l[j|1]]);while(k--)s.add([m[k|1],m[k+1&~1]]);var t=0;for(var u=0;u<p;u++){var v=[1+n.sipNode(u,0),1+n.getHalfSize()+n.sipNode(u,1)];if(v in s){r[t++]=u;s.remove(v);}}return r;},hashList:function i(j){var k=j.join('-');return c('sha256')(k);}};f.exports=h;}),null);
__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getClickPointInfo:function j(k){var l=null,m=c('collectDataAttributes')(k,['ft'],['href','data-click']),n=m.normal.href;if(!n||n==='#')return false;var o=m.normal['data-click'];if(l===null&&o)l={click:o};var p=m.ft.tn;if(l===null&&p)l={tn:p};if(l===null&&k.getAttribute){var q=k.getAttribute('class');if(q)l={'class':q};}return l;}};function i(event){var j=event.target||event.srcElement,k=h.getClickPointInfo(j);if(k!==false)c('ScriptPath').setClickPointInfo(k);}c('Event').listen(document.documentElement,{click:i});f.exports=h;}),null);
__d("XWebStorageLoggingAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});}),null);
__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=300000,i=false;function j(o){var p={};for(var q in o){var r=o.getItem(q),s=c('StringTransformations').unicodeEscape(q);if(typeof r==='string')p[s]=r.length;}return p;}function k(o){var p=c('WebStorage').getLocalStorage();if(!p||!o.keys)return;n._getLocalStorageKeys().forEach(function(q){if(c('arrayContains')(o.keys,q))p.removeItem(q);});}function l(o){var p=c('WebStorage').getLocalStorage();if(p)n._getLocalStorageKeys().forEach(function(q){if(!o.some(function(r){return new RegExp(r).test(q);}))p.removeItem(q);});}function m(){if(c('UserActivity').isActive(h)){c('setTimeoutAcrossTransitions')(m,h);}else n.cleanNow();}var n={registerLogoutForm:function o(p,q){c('Event').listen(p,'submit',function(r){n.cleanOnLogout(q);});},schedule:function o(){if(i)return;i=true;m();},cleanNow:function o(){var p=Date.now(),q={},r=c('WebStorage').getLocalStorage();if(r)q.local_storage=j(r);var s=c('WebStorage').getSessionStorage();if(s)q.session_storage=j(s);var t=!c('isEmpty')(q),u=Date.now();q.logtime=u-p;if(t){var v=c('XWebStorageLoggingAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(v).setData(q).setHandler(function(w){var x=w.getPayload();if(x.keys)x.keys=x.keys.map(c('StringTransformations').unicodeUnescape);k(x);}).send();}},cleanOnLogout:function o(p){if(p)l(p);var q=c('WebStorage').getSessionStorage();if(q)q.clear();},_getLocalStorageKeys:function o(){var p=c('WebStorage').getLocalStorage();return p?Object.keys(p):[];}};f.exports=n;}),null);
__d('ScriptPathLogger',['Banzai','ScriptPath','TimeSpentPageTransitionCause','URI','isInIframe'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='script_path_change',i={scriptPath:null,categoryToken:null,extraData:{}},j=false,k='imp_id';function l(v){var w=c('URI').getNextURI?c('URI').getNextURI():new (c('URI'))(window.location.href),x=w.getQueryData(),y=w.getPath();if(y.endsWith('/'))y=y.substr(0,y.length-1);var z=m(y,x);if(z){v.content_id=z;return;}var aa=n(y);if(aa!==''){v.dest_topic_feed=aa;return;}if(o(y)){var ba=x.queue_id;if(ba)v.dest_srt_queue_id=ba;return;}}function m(v,w){if(w.story_fbid)return w.story_fbid;if(w.fbid)return w.fbid;if(w.view==='permalink'&&w.id)return w.id;var x=/\/(posts|videos|notes|groups\/.*\/permalink)\//,y=/^[0-9]+$/;if(x.test(v)){var z=v.split('/'),aa=z[z.length-1];if(y.test(aa))return aa;}return '';}function n(v){if(!v||v.search('/feed/topics/')==-1)return '';var w=v.split('/');return w[w.length-1];}function o(v){return !!v&&v.search('/intern/review/')!==-1;}function p(v,w,x,y){if(!j||c('isInIframe')())return;var z=c('Banzai').isEnabled('vital_navigations'),aa=z?c('Banzai').VITAL:c('Banzai').BASIC;if(z){y=y||{};y.via_banzai_vital='1';}var ba={source_path:v.scriptPath,source_token:v.categoryToken,dest_path:w.scriptPath,dest_token:w.categoryToken,impression_id:w.extraData?w.extraData.imp_id:null,cause:x};l(ba);if(y){if(y.snowlift_photo_id){ba.content_id=y.snowlift_photo_id;delete y.snowlift_photo_id;}ba.extra_data=y;}if(v.scriptPath===null)ba.referrer=document.referrer;var ca=c('ScriptPath').getClickPointInfo();if(ca)ba.click_point_info=ca;if(v.extraData)for(var da in v.extraData)if(da!=k)ba['source_'+da]=v.extraData[da];if(w.extraData)for(var ea in w.extraData)if(ea!=k)ba['dest_'+ea]=w.extraData[ea];if(v.topViewEndpoint)ba.source_endpoint=v.topViewEndpoint;if(w.topViewEndpoint)ba.dest_endpoint=w.topViewEndpoint;if(v.restored)ba.source_restored=true;c('Banzai').post(h,ba,aa);c('ScriptPath').setClickPointInfo(null);}function q(){p(c('ScriptPath').getSourcePageInfo()||i,c('ScriptPath').getPageInfo()||i,c('TimeSpentPageTransitionCause').PAGE_LOAD);}function r(v,w,x){p(v,w,c('TimeSpentPageTransitionCause').TRANSITION,x);}function s(){p(c('ScriptPath').getPageInfo()||i,i,c('TimeSpentPageTransitionCause').PAGE_UNLOAD);c('ScriptPath').shutdown();}var t=c('ScriptPath').subscribe(function(v){if(j){var w=v.source,x=v.dest,y=v.cause,z=v.extraData;if(y){p(w||i,x||i,y,z);}else if(w){r(w,x||i,z);}else q();}});c('Banzai').subscribe(c('Banzai').SHUTDOWN,s);var u={startLogging:function v(){j=true;if(c('ScriptPath').getPageInfo())q();},stopLogging:function v(){j=false;t.remove();},BANZAI_LOGGING_ROUTE:h};f.exports=u;}),null);