if (self.CavalryLogger) { CavalryLogger.start_js(["Lo7eG"]); }

__d('BuddyListNubLoader',['Arbiter','ChatOptions','ChatSidebarStore','KeyEventController','PresencePrivacy','JSResource','SidebarType','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){return c('ChatSidebarStore').isEnabled()&&!c('ChatOptions').getSetting('hide_buddylist')&&!c('ifRequired')('ChannelConnection',function(j){return j.disconnected();})&&!c('PresencePrivacy').isUserOffline();}function i(j,k,l,m){this.$BuddyListNubLoader1=j;this.$BuddyListNubLoader2=k;this.$BuddyListNubLoader3=l;this.$BuddyListNubLoader4=m;this.$BuddyListNubLoader5=null;c('ifRequired')('ChatSidebar',c('emptyFunction'),function(){if(h()){this.show();}else this.load();}.bind(this));c('Arbiter').subscribe('chat/option-changed',function(n,o){if(this.$BuddyListNubLoader7())if(o.name==='hide_buddylist'&&!o.value)this.show();}.bind(this));c('KeyEventController').registerKey('q',function(event){if(this.$BuddyListNubLoader7()){this.show();event.prevent();}}.bind(this));c('ChatSidebarStore').addListener(function(){if(c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST)if(h()){this.show();}else this.load();}.bind(this));if(c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST)if(h()){this.show();}else this.load();}i.prototype.load=function(){if(!this.$BuddyListNubLoader6){this.$BuddyListNubLoader6=c('JSResource')('BuddyListNub').__setRef('BuddyListNubLoader').load();this.$BuddyListNubLoader6.done(function(j){this.$BuddyListNubLoader5=new j(this.$BuddyListNubLoader1,this.$BuddyListNubLoader2,this.$BuddyListNubLoader3,this.$BuddyListNubLoader4);}.bind(this));}return this.$BuddyListNubLoader6;};i.prototype.show=function(){return this.load().then(function(j){this.$BuddyListNubLoader5&&this.$BuddyListNubLoader5.onButtonClick();this.$BuddyListNubLoader5&&this.$BuddyListNubLoader5.show();}.bind(this));};i.prototype.$BuddyListNubLoader7=function(){return !this.$BuddyListNubLoader5&&!this.$BuddyListNubLoader6;};f.exports=i;}),null);
__d('legacy:dom-html',['HTML'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.HTML=c('HTML');}),3);