if (self.CavalryLogger) { CavalryLogger.start_js(["Kypix"]); }

__d("TimelineProfilePictureLoggerEnums",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={actions:{EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}};}),null);
__d('FileUploadTarget',['AsyncUploadRequest','DragDropFileUpload','DragDropTarget','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';var k=function(l){this.$FileUploadTarget1=new (c('AsyncUploadRequest'))(j).setFiles({file:l}).setRelativeTo(i).setStatusElement(i).setAllowCrossOrigin(this.$FileUploadTarget2);this.$FileUploadTarget1.subscribe('complete',function(m,n){this.onCompleteCallback(n);this.$FileUploadTarget1=null;}.bind(this));this.$FileUploadTarget1.send();}.bind(this);this.dragDropTarget=new (c('DragDropTarget'))(i).setOnFilesDropCallback(function(l){l.length&&this.asyncProcess(l,function(m){m.length&&k(m);});}.bind(this));this.asyncProcess=function(l,m){m(l);};this.preprocess=function(l){return l;};this.onCompleteCallback=c('emptyFunction');}h.prototype.setAllowCrossOrigin=function(i){'use strict';this.$FileUploadTarget2=i;return this;};h.prototype.setPreprocessor=function(i){'use strict';this.preprocess=i;return this;};h.prototype.setAsyncProcessor=function(i){'use strict';this.asyncProcess=i;return this;};h.prototype.onComplete=function(i){'use strict';this.onCompleteCallback=i;return this;};h.prototype.abort=function(){'use strict';this.$FileUploadTarget1&&this.$FileUploadTarget1.abort();};h.prototype.activate=function(){'use strict';if(!c('DragDropFileUpload').isSupported())return this;this.dragDropTarget.setFileFilter(this.preprocess).enable();return this;};f.exports=h;}),null);
__d('SinglePictureUploadTarget',['fbt','Bootloader','Dialog','ErrorDialog','FileUploadTarget','emptyFunction','htmlSpecialChars'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){'use strict';this.fileUploadTarget=new (c('FileUploadTarget'))(j,k);this.preprocessCallback=c('emptyFunction');this.asyncPreprocessCallback=function(l,m){m(l);};this.oncompleteCallback=c('emptyFunction');this.afterSuccessCallback=c('emptyFunction');}i.prototype.setAllowCrossOrigin=function(j){'use strict';this.fileUploadTarget.setAllowCrossOrigin(j);return this;};i.prototype.setPreprocessCallback=function(j){'use strict';this.preprocessCallback=j;return this;};i.prototype.setAsyncPreprocessCallback=function(j){'use strict';this.asyncPreprocessCallback=j;return this;};i.prototype.setOncompleteCallback=function(j){'use strict';this.oncompleteCallback=j;return this;};i.prototype.setAfterSuccessCallback=function(j){'use strict';this.afterSuccessCallback=j;return this;};i.prototype.activate=function(){'use strict';var j=function n(o){return c('htmlSpecialChars')(o.name);},k=function(n){if(n.length>1){c('ErrorDialog').show(h._("Upload Error"),h._("You can only select 1 photo to upload to this album. Only the first photo you selected will be uploaded."));n=[n[0]];}var o=n[0];if(!o.type.match(/^image\//)){c('ErrorDialog').show(h._("Upload Error"),h._("We could not understand the contents of {filename}. Make sure it is a jpg, gif, or png formatted image.",[h.param('filename',j(o))]));return [];}this.preprocessCallback(n);return n;}.bind(this),l=function(n,o){var p=1024*1024*16,q=1024*1024*1,r=function(t){if(t.size>p){c('ErrorDialog').show(h._("Upload Error"),h._("{filename} is too large. Please resize your photo to under 8000x8000 pixels and try again.",[h.param('filename',j(n[0]))]));o([]);}else this.asyncPreprocessCallback([t],o);}.bind(this),s=n[0];if(s.size<q){r(s);}else c('Bootloader').loadModules(["ImageExif","ImageResizer"],function(t,u){if(!u.isSupported()){r(s);return;}var v=new u(s,null,null);v.subscribe('resized',function(w,x){if(x.size>s.size){r(s);}else r(x);}.bind(this));v.subscribe('error',function(){r(s);}.bind(this));t.readFromFile(s,function(w){w&&v.setOrientation(w.Orientation);v.resize();});},'SinglePictureUploadTarget');}.bind(this),m=function(n){var o=n[0];if(!o.getResponse())return;this.oncompleteCallback(o);var p=o.getResponse().getPayload();if(o.isSuccess()){this.afterSuccessCallback(p);}else if(p&&p.__dialog){var q=new (c('Dialog'))();q.$SinglePictureUploadTarget1(p.__dialog);q.setButtons(c('Dialog').OK).show();}else c('ErrorDialog').show(p.error.title,p.error.body);}.bind(this);return this.fileUploadTarget.onComplete(m).setPreprocessor(k).setAsyncProcessor(l).activate();};f.exports=i;}),null);
__d("XProfileIntroCardDismissSuggestedPhotosPromptAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile\/intro\/suggested_photos_prompt\/dismiss\/",{});}),null);
__d('ProfileIntroCardSuggestedPhotosPrompt',['csx','AsyncRequest','DOM','Event','XProfileIntroCardDismissSuggestedPhotosPromptAsyncController','tidyEvent'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){'use strict';var l=c('DOM').find(j,"._4oys");c('tidyEvent')(c('Event').listen(l,'click',function(m){c('DOM').replace(j,k);var n=c('XProfileIntroCardDismissSuggestedPhotosPromptAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).send();m.stop();}));}f.exports=i;}),null);
__d('ProfilePhotoActionLogger',['Banzai'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={EVENT_SELECT_METHOD:'select_method',EVENT_CAMERA_PERMISSION_PROVIDED:'permission_provided',EVENT_CAMERA_PERMISSION_DENIED:'permission_denied',EVENT_CAMERA_NO_WEBCAM:'permission_denied',EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:'unknown_mediastream_error',EVENT_CAMERA_TAKE_PHOTO:'take_photo',EVENT_CAMERA_RETAKE_PHOTO:'retake_photo',EVENT_CAMERA_UPLOAD_ATTEMPT:'upload_attempt',EVENT_CAMERA_UPLOAD_ERROR:'upload_error',EVENT_CAMERA_UPLOAD_SUCCESS:'upload_success',SOURCE_SUGGESTIONS:'suggestions',SOURCE_TIMELINE:'timeline',SOURCE_NUX:'nux',METHOD_EXISTING:'existing',METHOD_UPLOAD:'upload',METHOD_CAMERA:'camera',log:function i(j,k,l){c('Banzai').post('profile_photo_action',{event:j,source:k,method:l});}};f.exports=h;}),null);
__d('TimelineProfilePicConfig',['fbt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:h._("Your profile picture is still uploading, are you sure you want to leave?")};f.exports=i;}),null);
__d('ProfilePictureFlowLogging',['Arbiter','Banzai','Event','Parent','ProfilePhotoActionLogger','Run','TimelineProfilePicConfig','TimelineProfilePictureLoggerEnums','tidyEvent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('TimelineProfilePicConfig').loading,i=c('TimelineProfilePicConfig').success,j='data-action-type',k,l,m,n;function o(){n&&n.unsubscribe();n=null;}var p={action:c('TimelineProfilePictureLoggerEnums').actions,flow:c('TimelineProfilePictureLoggerEnums').flows,step:c('TimelineProfilePictureLoggerEnums').steps,log:function q(r){var s=r||p.step.INIT;c('Banzai').post('profile_pic_action',{action_type:k,flow_type:l,step_type:s});if(k===p.action.UPLOAD&&s===p.step.INIT)c('ProfilePhotoActionLogger').log(c('ProfilePhotoActionLogger').EVENT_SELECT_METHOD,m,c('ProfilePhotoActionLogger').METHOD_UPLOAD);l=null;if(r==='success'||r==='fail')k=null;return p;},setAction:function q(r){k=r;return p;},setFlowType:function q(r){l=r;return p;},setSource:function q(r){m=r;return p;},init:function q(r,s){if(s)m=s;if(!n){n=c('Arbiter').subscribe([h,i],function(t){p.log(t===h?c('TimelineProfilePictureLoggerEnums').steps.LOADING:c('TimelineProfilePictureLoggerEnums').steps.SUCCESS);});c('Run').onLeave(o);}c('tidyEvent')(c('Event').listen(r,'click',function(t){var u=c('Parent').byAttribute(t.getTarget(),j);if(!u)return;p.setAction(u.getAttribute(j)).log();}));},initMenuItems:function q(r,s,t){p.init(r.getRoot(),t);}};f.exports=p;}),null);
__d("XWorkNewsfeedNuxNextStepController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/work\/newsfeed_nux\/next_step\/",{});}),null);
__d('ProfilePicCropViewerInit',['Bootloader','CurrentCommunity','ProfilePictureFlowLogging','React','ServerRedirect','XWorkNewsfeedNuxNextStepController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='profile-picture-crop',i='loading',j=c('ProfilePictureFlowLogging').flow,k,l;function m(){l&&l.close();}function n(p,q,r){r=r||{};c('Bootloader').loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(s,t,u,v,w,x){m();var y=r.stickerID;k=h+':'+p+':'+q;if(y)k+=':'+y;var z=r.successCallback,aa=c('CurrentCommunity').getID()!=='0';if(!z&&(r.source==='atwork_nux'||r.source==='timeline'||r.source==='atwork_profile_nux')&&aa)z=function da(ea){var fa=c('XWorkNewsfeedNuxNextStepController').getURIBuilder().getURI();new v().setURI(fa).setData({current_step_id:1,skipped:false}).setHandler(function(){c('ServerRedirect').reloadPage();}).send();};l=s.render(c('React').createElement(t,{cancelCallback:r.cancelCallback,cropMode:r.cropMode,errorCallback:r.errorCallback,method:r.method,open:true,photoID:p,profileID:q,setid:k,source:r.source,successCallback:z,uploadRequest:r.uploadRequest,warnOnCancel:r.warnOnCancel}),function(){l=null;});if(u.hasBeenCreated(k)||p===i)return;var ba=x.getURIBuilder().setString('photo_id',p).setInt('profile_id',q).setString('set_id',k).setBool('will_load_more_photos',true);y&&ba.setInt('sticker_id',y);ba=ba.getURI();var ca=k;new v(ba).setErrorHandler(function(da){ca===k&&m();w.defaultErrorHandler(da);}).send();},'ProfilePicCropViewerInit');return true;}var o={close:m,getFlowType:function p(){return j.ZOOMCROP;},useCropViewer:function p(){return true;},loading:function p(q,r){n(i,q,r);},loadID:n};f.exports=o;}),null);
__d('ProfilePicUploadToCrop',['Arbiter','FileInputUploader','JpegResizer','PhotosMimeType','ProfilePicCropViewerInit','ProfilePictureFlowLogging','tidyEvent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return c('ProfilePicCropViewerInit').getFlowType();}function i(){c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.UPLOAD_SUCCESS);}function j(){c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_SKIPPED);}function k(l,m,n,o,p){var q=arguments.length<=5||arguments[5]===undefined?true:arguments[5],r=arguments.length<=6||arguments[6]===undefined?false:arguments[6],s=arguments[7];'use strict';this.$ProfilePicUploadToCrop5=l;this.$ProfilePicUploadToCrop1=m;this.$ProfilePicUploadToCrop4=o;this.$ProfilePicUploadToCrop2=p;this.$ProfilePicUploadToCrop3=null;this.$ProfilePicUploadToCrop6=r;this.$ProfilePicUploadToCrop7=s;if(c('JpegResizer').isSupported())this.$ProfilePicUploadToCrop3=new (c('JpegResizer'))(1);if(q)c('tidyEvent')(m.subscribe('change',function(){return this.uploadFile();}.bind(this)));}k.prototype.uploadFile=function(){'use strict';if(!this.$ProfilePicUploadToCrop1.getValue())return;var l=this.$ProfilePicUploadToCrop1.getInput();if(!l.name)l.name='photo';c('ProfilePictureFlowLogging').setAction(c('ProfilePictureFlowLogging').action.UPLOAD).setFlowType(h()).log(c('ProfilePictureFlowLogging').step.UPLOAD_SELECT);this.$ProfilePicUploadToCrop2=String(this.$ProfilePicUploadToCrop2);var m=new (c('FileInputUploader'))(l).setURI(this.$ProfilePicUploadToCrop5).setAllowCrossOrigin(true);c('ProfilePicCropViewerInit').loading(this.$ProfilePicUploadToCrop2,{uploadRequest:m});c('tidyEvent')([m.subscribe('success',function(n,o){if(this.$ProfilePicUploadToCrop6){this.uploadComplete();}else{this.$ProfilePicUploadToCrop1.clear();k.loadCropper(o.response.getPayload(),this.$ProfilePicUploadToCrop2,this.$ProfilePicUploadToCrop4);}}.bind(this)),m.subscribe('failure',function(){this.$ProfilePicUploadToCrop1.clear();c('ProfilePicCropViewerInit').close();c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.FAIL);}.bind(this))]);if(this.$ProfilePicUploadToCrop3)m.setUploadInParallel(true).setPreprocessHandler(this.$ProfilePicUploadToCrop8.bind(this));m.send();};k.prototype.$ProfilePicUploadToCrop8=function(l,m){'use strict';c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_BEGIN);var n=l.getFile();n=null;if(!n||!c('PhotosMimeType').isJpeg(n.type)){j();return m(l);}this.$ProfilePicUploadToCrop3&&this.$ProfilePicUploadToCrop3.resizeBlob(n,function(o,p,q){if(o){c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_FAIL);return m(l);}if(q){j();}else{l.setFile(p);c('ProfilePictureFlowLogging').setFlowType(h()).log(c('ProfilePictureFlowLogging').step.RESIZE_SUCCESS);}m(l);});};k.prototype.uploadComplete=function(){'use strict';c('Arbiter').inform(this.$ProfilePicUploadToCrop7,{afterUpload:function l(){c('ProfilePicCropViewerInit').close();}});};k.loadCropper=function(l,m,n){'use strict';i();c('ProfilePicCropViewerInit').loadID(l.fbid,m,{method:'upload',source:n,warnOnCancel:true});};f.exports=k;}),null);
__d('ProfilePicDragAndDropUpload',['ProfilePicCropViewerInit','ProfilePictureFlowLogging','ProfilePicUploadToCrop','SinglePictureUploadTarget'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j,k,l){var m=new (c('SinglePictureUploadTarget'))(j,k).setAllowCrossOrigin(true).setPreprocessCallback(function(){c('ProfilePictureFlowLogging').setFlowType(c('ProfilePicCropViewerInit').getFlowType()).log(c('ProfilePictureFlowLogging').step.DRAG_AND_DROP);c('ProfilePicCropViewerInit').loading(l,{uploadRequest:m});}).setAfterSuccessCallback(function(n){c('ProfilePicUploadToCrop').loadCropper(n,l,'timeline');}).activate();}};f.exports=h;}),null);
__d('TimelineCoverPhotoChangePrivacyDialog',['Arbiter','Event'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j,k,l){this._dialog=j;this._tooltipLink=l;this._closeButton=k;this._showDialog=false;this._tooltip=null;},registerDialogShow:function i(){this._showDialog=true;c('Arbiter').subscribe('CoverPhotoEdit',function(j,k){if(!this._showDialog)return;if(k.state==="open"){this._dialog&&this._dialog.show();if(this._tooltipLink){this._tooltip=this._tooltipLink.getAttribute('data-hover');this._tooltipLink.setAttribute('data-hover',null);}}else if(k.state==="closed")this.hideDialog();}.bind(this));c('Event').listen(this._closeButton,'click',this.hideDialog.bind(this));},hideDialog:function i(){this._dialog&&this._dialog.hide();if(this._tooltipLink)this._tooltipLink.setAttribute('data-hover',this._tooltip);this._showDialog=false;}};f.exports=h;}),null);
__d('ProfileWizardUIEvents',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={CUSTOM_HIDE_HANDLE:'ProfileWizardUIEvents/customHideHandle',CUSTOM_SHOW_HANDLE:'ProfileWizardUIEvents/customShowHandle',HIDE_POPUP:'ProfileWizardUIEvents/hidePopup',PROFILE_PIC_UPLOADED:'ProfileWizardUIEvents/profilePicUploaded',SHOW_POPUP:'ProfileWizardUIEvents/showPopup',STEP_COMPLETE:'ProfileWizardUIEvents/stepComplete',STEP_EDITED:'ProfileWizardUIEvents/stepEdited'};f.exports=h;}),null);
__d("XProfileWizardImpressionController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile\/wizard_impression\/{surface}\/",{error_code:{type:"Int"},step:{type:"Int",required:true},surface:{type:"Enum",required:true,enumType:1}});}),null);
__d('ProfileWizardUIManager',['invariant','Arbiter','AsyncRequest','ProfileWizardUIEvents','XProfileWizardImpressionController','destroyOnUnload'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1];'use strict';this.$ProfileWizardUIManager1=j;this.$ProfileWizardUIManager2=k||this.$ProfileWizardUIManager1[0];var l=c('Arbiter').subscribe(c('ProfileWizardUIEvents').STEP_COMPLETE,this.stepComplete.bind(this));if(k!=null)i.informShowPopupForStep(k);c('destroyOnUnload')(function(){return l.unsubscribe();});}i.prototype.stepComplete=function(j,k){'use strict';var l=this.getNextStepIndex(k.stepNumber);if(l){i.informShowPopupForStep(l);this.$ProfileWizardUIManager2=l;}};i.prototype.getCurrentStepIndex=function(){'use strict';return this.$ProfileWizardUIManager2;};i.prototype.getNextStepIndex=function(j){'use strict';var k=this.$ProfileWizardUIManager1.indexOf(j);!(k!==-1)?h(0):void 0;if(k<this.$ProfileWizardUIManager1.length-1)return this.$ProfileWizardUIManager1[k+1];return null;};i.prototype.hasNextStep=function(){'use strict';return !!this.getNextStepIndex(this.getCurrentStepIndex());};i.informShowPopupForStep=function(j){'use strict';c('Arbiter').inform(c('ProfileWizardUIEvents').SHOW_POPUP+j,{stepNumber:j},c('Arbiter').BEHAVIOR_PERSISTENT);};i.informHidePopupForStep=function(j){'use strict';c('Arbiter').inform(c('ProfileWizardUIEvents').HIDE_POPUP+j,{stepNumber:j},c('Arbiter').BEHAVIOR_PERSISTENT);};i.informStepComplete=function(j){'use strict';c('Arbiter').inform(c('ProfileWizardUIEvents').STEP_COMPLETE,{stepNumber:j});};i.informCustomShowHandler=function(j){'use strict';c('Arbiter').inform(c('ProfileWizardUIEvents').CUSTOM_SHOW_HANDLE+j,{stepNumber:j},c('Arbiter').BEHAVIOR_PERSISTENT);};i.informCustomHideHandler=function(j){'use strict';c('Arbiter').inform(c('ProfileWizardUIEvents').CUSTOM_HIDE_HANDLE+j,{stepNumber:j},c('Arbiter').BEHAVIOR_PERSISTENT);};i.subscribeShowPopupForStep=function(j,k,l){'use strict';return i.$ProfileWizardUIManager3(c('ProfileWizardUIEvents').SHOW_POPUP,j,l);};i.subscribeHidePopupForStep=function(j,k,l){'use strict';return i.$ProfileWizardUIManager3(c('ProfileWizardUIEvents').HIDE_POPUP,j,l);};i.subscribeCustomShowHandler=function(j,k){'use strict';return i.$ProfileWizardUIManager3(c('ProfileWizardUIEvents').CUSTOM_SHOW_HANDLE,j,k);};i.subscribeCustomHideHandler=function(j,k){'use strict';return i.$ProfileWizardUIManager3(c('ProfileWizardUIEvents').CUSTOM_HIDE_HANDLE,j,k);};i.$ProfileWizardUIManager3=function(event,j,k){'use strict';var l=c('Arbiter').subscribe(event+j,k);c('destroyOnUnload')(function(){return l.unsubscribe();});return l;};i.markStepImpression=function(j,k){'use strict';var l=c('XProfileWizardImpressionController').getURIBuilder().setInt('step',j).setEnum('surface',k).getURI();new (c('AsyncRequest'))().setURI(l).send();};i.init=function(j){var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1];'use strict';return new i(j,k);};f.exports=i;}),null);
__d("XTimelineCoverPhotoGalleryController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/timeline\/cover\/gallery\/",{});}),null);
__d('TimelineCoverPhotoNUX',['cx','AsyncRequest','CSS','ProfileWizardUIManager','XTimelineCoverPhotoGalleryController','$','destroyOnUnload'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='fbProfileCover',j="_3y4k",k={init:function l(m,n,o,p){this._dialog=n;this._coverPhotoContainer=c('$')(i);this._popover=m.getPopover();this._hasCoverPhoto=p;c('ProfileWizardUIManager').subscribeCustomShowHandler(o,function(){return this._showDialog();}.bind(this));c('ProfileWizardUIManager').subscribeCustomHideHandler(o,function(){return this._hideDialog();}.bind(this));this._popoverToken=this._popover.subscribeOnce('show',function(){if(this._hasCoverPhoto||this._showDialogCalled)return;this._popover.hideLayer();this._showDialog();}.bind(this));var q=this._dialog.subscribe('cancel',function(){c('CSS').removeClass(this._coverPhotoContainer,j);}.bind(this)),r=this._dialog.subscribe('confirm',function(){this._popover.showLayer();this._hideDialog();}.bind(this));c('destroyOnUnload')(function(){this._dialog.unsubscribe(q);this._dialog.unsubscribe(r);this._popover.unsubscribe(this._popoverToken);}.bind(this));},_hideDialog:function l(){this._dialog.hide();c('CSS').removeClass(this._coverPhotoContainer,j);},_showDialog:function l(){if(this._showDialogCalled)return;this._dialog.show();if(!this._hasCoverPhoto){c('CSS').addClass(this._coverPhotoContainer,j);new (c('AsyncRequest'))().setURI(c('XTimelineCoverPhotoGalleryController').getURIBuilder().getURI()).send();}this._showDialogCalled=true;}};f.exports=k;}),null);
__d('TimelineProfilePic',['Arbiter','CSS','Dialog','DOM','HTML','TimelineProfilePicConfig','Run','$','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;i.init=function(j,k){'use strict';i.destroyInstance();h=new i(j||'fbProfileCover',k||'.profilePicThumb');};function i(j,k){'use strict';this.$TimelineProfilePic1=c('$')(j);this.$TimelineProfilePic2=k;this.$TimelineProfilePic3=[c('Arbiter').subscribe(c('TimelineProfilePicConfig').loading,this.startLoading.bind(this)),c('Arbiter').subscribe(c('TimelineProfilePicConfig').success,this.onUploadSuccess.bind(this))];c('Run').onBeforeUnload(this.onBeforeUnload.bind(this));c('Run').onLeave(this.destroy.bind(this));}i.prototype.$TimelineProfilePic4=function(j){'use strict';this.$TimelineProfilePic5=j;c('CSS').conditionClass(this.$TimelineProfilePic1,'profilePicLoading',j);};i.prototype.destroy=function(){'use strict';this.$TimelineProfilePic3.forEach(function(j){j.unsubscribe();});this.$TimelineProfilePic3=[];h=null;};i.prototype.startLoading=function(j,k){'use strict';this.$TimelineProfilePic4(!!k.isLoading);};i.prototype.onUploadSuccess=function(j,k){'use strict';this.$TimelineProfilePic4(false);if(!k.newPic)return;var l=c('Dialog').getCurrent();if(l)l.hide();var m=k.newPic;c('DOM').replace(c('DOM').find(this.$TimelineProfilePic1,this.$TimelineProfilePic2),typeof m==='string'?c('HTML')(m):m);if(typeof k.profileId!==undefined&&typeof k.headerPicURL!==undefined){var n=c('ge')('profile_pic_header_'+k.profileId);if(n)n.src=k.headerPicURL;}var o=c('ge')('fbProfilePicSelector');if(o)c('CSS').removeClass(o,'fbTimelineNullProfilePicSelector');};i.prototype.onBeforeUnload=function(){'use strict';if(h===this&&this.$TimelineProfilePic5)return c('TimelineProfilePicConfig').leavingMessage;};i.destroyInstance=function(){'use strict';h&&h.destroy();};f.exports=i;}),null);
__d('timeline-cover-dragdrop-edit',['SinglePictureUploadTarget','TimelineCover'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function l(){var m=c('TimelineCover').getInstance();m.hideLoadingIndicator();},i=function l(m){var n=c('TimelineCover').getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},j=function l(m){c('TimelineCover').getInstance().showLoadingIndicator();},k=function l(m,n){new (c('SinglePictureUploadTarget'))(m,n).setAllowCrossOrigin(true).setPreprocessCallback(j).setOncompleteCallback(h).setAfterSuccessCallback(i).activate();};g.initialize_timeline_cover_drop_target=k;}),null);
__d("XProfileRefresherDialogImpressionController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile\/refresher\/dialog_impression\/",{});}),null);
__d('ProfileActionsUpdateInfoButton',['AsyncRequest','CSS','Event','XProfileRefresherDialogImpressionController','destroyOnUnload'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';var l;this.$ProfileActionsUpdateInfoButton1=c('Event').listen(i,'click',function(){j.hide();c('CSS').hide(k);this.$ProfileActionsUpdateInfoButton2();}.bind(this));j.subscribe('cancel',function(){return this.$ProfileActionsUpdateInfoButton2();}.bind(this));c('destroyOnUnload')(function(){return this.$ProfileActionsUpdateInfoButton3();}.bind(this));}h.prototype.$ProfileActionsUpdateInfoButton3=function(){'use strict';this.$ProfileActionsUpdateInfoButton1&&this.$ProfileActionsUpdateInfoButton1.remove();};h.prototype.$ProfileActionsUpdateInfoButton2=function(){'use strict';new (c('AsyncRequest'))().setURI(c('XProfileRefresherDialogImpressionController').getURIBuilder().getURI()).send();};f.exports=h;}),null);
__d('ProfileWizardStepFlyout',['DOMScroll','Event','ProfileWizardUIManager','destroyOnUnload'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';c('ProfileWizardUIManager').subscribeShowPopupForStep(j,k,function(){c('DOMScroll').scrollTo(i.getCausalElement(),500,false,false,20,function(){c('ProfileWizardUIManager').informCustomShowHandler(j);i.show();});});c('ProfileWizardUIManager').subscribeHidePopupForStep(j,k,function(){c('ProfileWizardUIManager').informCustomHideHandler(j);i.hide();});var l=c('Event').listen(i.getCausalElement(),'click',function(){return c('ProfileWizardUIManager').informHidePopupForStep(j);}),m=[i.subscribe('cancel',function(){c('ProfileWizardUIManager').informStepComplete(j);c('ProfileWizardUIManager').markStepImpression(j,k);}),i.subscribe('confirm',function(){i.hide();c('ProfileWizardUIManager').markStepImpression(j,k);})];c('destroyOnUnload')(function(){while(m.length)i.unsubscribe(m.pop());l.remove();});}f.exports=h;}),null);
__d('InfoReviewInstanceManager',['csx','DOM','Event','ReactDOM'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i="._5sf3",j=[],k=[],l={addInstanceRoot:function m(n,o){k.push(c('Event').listen(o,'click',function(p){var q=c('DOM').scry(o,i)[0];q&&c('DOM').remove(q);}));j.push(n);},cleanupInstances:function m(){var n=[];while(j.length){var o=j.pop();document.contains(o)?n.push(o):c('ReactDOM').unmountComponentAtNode(o);}while(k.length)k.pop().remove();j=n;}};f.exports=l;}),null);
__d('InfoReviewCloseButton',['DOM','Event','InfoReviewInstanceManager','Parent','$','tidyEvent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='fbTimelineUnit';function i(j,k){'use strict';this.$InfoReviewCloseButton1=j;this.$InfoReviewCloseButton2=k;this.$InfoReviewCloseButton3=c('Event').listen(this.$InfoReviewCloseButton1,'click',this.$InfoReviewCloseButton4.bind(this));c('tidyEvent')(this.$InfoReviewCloseButton3);}i.prototype.$InfoReviewCloseButton4=function(){'use strict';var j=c('$')(this.$InfoReviewCloseButton2);if(j.parentElement.children.length===1)j=c('Parent').byClass(j,h);c('DOM').remove(j)&&this.$InfoReviewCloseButton5();c('InfoReviewInstanceManager').cleanupInstances();};i.prototype.$InfoReviewCloseButton5=function(){'use strict';this.$InfoReviewCloseButton1=null;this.$InfoReviewCloseButton2=null;this.$InfoReviewCloseButton3&&this.$InfoReviewCloseButton3.remove();this.$InfoReviewCloseButton3=null;};f.exports=i;}),null);