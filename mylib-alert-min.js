var API,global=this;if(API&&typeof API=="object"&&API.areFeatures&&API.areFeatures("attachListener","createElement","setElementText","setControlState")){API.attachDocumentReadyListener(function(){var f=API;var Ak=f.isHostMethod;var Aq=f.canAdjustStyle;var Ai=f.cancelDefault;var AN=f.createElement;var AW=f.showElement;var A4=f.attachListener;var G=f.attachDocumentListener;var AJ=f.getEventTarget,v=f.getEventTargetRelated;var Aw=f.getKeyboardKey;var d=f.attachDrag,y=f.attachDragToControl;var u=f.detachDragFromControl;var O=f.centerElement;var AH=f.coverDocument;var AZ=f.constrainPositionToViewport;var Al=f.maximizeElement;var As=f.restoreElement;var A1=f.setElementText;var A9=f.setElementHtml;var b=f.setElementNodes;var AR=f.positionElement;var BC=f.sizeElement;var A2=f.fixElement;var k=f.getChildren;var A3=f.addClass;var BA=f.removeClass;var BK=f.hasClass;var Ay=f.getElementPositionStyle;var Az=f.getElementSizeStyle;var V=f.getElementParentElement;var N=f.makeElementUnselectable;var An=f.callInContext;var BH,AF,Z,K;var BD,D=AN("div");var BE=AN("div");var A6=AN("input");var r=AN("fieldset");var AC,BL,Aj,Ah,A0,Ag,AQ,Af,Av;var e=f.getBodyElement();var F,l,g,L,AU;var AL={};var C,A7,AB,AX,Ax,Ap,i,BI,Au,Am,m,X,I,B,BB,BJ,AP,AO;var Q,Ae,a,AK,Ac,R,Ar,z,AE,J,S,AT,Ad,q,Aa,AV,j,n,A5,AA,x,AS;var A=f.setControlRole,BG=f.setWaiProperty,E=f.removeWaiProperty,t=f.setControlContent;var AM=f.disableControl,p=f.isControlDisabled,BF=f.checkControl,w=f.isControlChecked,AG=f.showControl;var H,c,Ab;var o=function(BP,BO,BN,BM){return An(BP,AO||API,BO||D,BN,BM)};var h=function(BN,BM){return BN+(BM?" [Ctrl+"+BM+"]":"")};var AI=function(BN,BM){AM(BN,BM)};var U=function(BO,BM){var BN=AN("div");if(BN){BN.title=h(BO,BM);BN.className=BO.toLowerCase()+" button captionbutton";if(A){A(BN,"button")}D.appendChild(BN)}return BN};var W=function(BM){var BN=AN("input");if(BN){BN.className="commandbutton button";BN.type="button";BN.value=BM;r.appendChild(BN);if(Ab){Ab(BN)}}return BN};if(y){Ad=function(BM){(BM?u:y)(D,BH,{ondragstart:I,ondrop:B})}}var T=function(BM){if(BM){BD.style.display="block";AH(BD);if(A3){if(L.ease){A3(BD,"ease");A3(BD,"in");BA(BD,"out")}else{BA(BD,"ease")}}if(A3){A3(BD,"drawn")}L.keyClassName="drawn";AG(BD,true,L)}else{if(BA){BA(BD,"drawn");if(l.ease){BA(BD,"in");A3(BD,"out")}}AW(BD,false,{removeOnHide:true});if(BA){BA(BD,"animated")}}};S=function(BM){if(BH){if(A5){BH.title="Double-click to "+(BM?"restore":"maximize")}else{if(Ah){BH.title=BM?"Double-click to restore":""}}}};AT=function(BM){if(A3){if(BM){BA(Aj,"maximizebutton");A3(Aj,"restorebutton")}else{BA(Aj,"restorebutton");A3(Aj,"maximizebutton")}}Aj.title=h(!BM?"Maximize":"Restore",".");if(p(Aj)){Aj.title+=" (disabled)"}};J=function(BM){if(Ah){AI(Ah,BM)}if(Aj){AI(Aj,!BM&&!A5)}if(Aj){if(BM){AT(!F);if(n&&BH){S(!F)}}else{AT(F);if(n&&BH){S(F)}}}};z=function(BN,BM){BN.style.visibility=(BM)?"hidden":""};AE=function(BM){if(AF){z(AF,BM)}if(Z){z(Z,BM)}if(K){z(K,BM)}};q=function(BM){if(n){AE(BM)}if(BH){if(n){S(BM)}Ad(BM)}if(Aj){AT(BM)}if(AC){AI(AC,BM)}};if(Al){if(BK){R=function(BM){return BK(BM,"captionbutton")}}else{R=function(BM){return BM==Ah||BM==Aj||BM==A0||BM==AC}}Ar=function(BM){var BO,BP,BN=k(D);BO=BN.length;while(BO--){BP=BN[BO];if(!R(BP)&&BP!=BH&&BP!=BL){BP.style.display=(BM||(BP==r&&!AS))?"none":""}}};var M=function(){if(AK){global.setTimeout(AK,10)}};Aa=function(BM,BN){if(BM){AL.pos=Ay(D);AL.dim=Az(D);if(A3){BA(D,"maximized");A3(D,"minimized")}if(BH){Ad(false)}if(BM&&BJ){o(BJ)}}else{if(!F){if(AC&&w(AC)){if(D.style.position!="fixed"){AZ(AL.pos)}}AR(D,AL.pos[0],AL.pos[1],g);BC(D,AL.dim[0],AL.dim[1],g,M);if(!BC.async){M()}}if(BA){BA(D,"minimized")}if(BH){Ad(F)}}Ar(BM);if(!BM&&F){As(D);AV(true)}if(BM){D.style.height=D.style.width=""}J(BM)};AV=function(BM){var BN=function(){if(A3){(BM?A3:BA)(D,"maximized")}if(AK){global.setTimeout(AK,10)}};(BM?Al:As)(D,g,BN);q(BM);if(BM&&BB){o(BB)}F=BM;if(!Al.async){BN()}};j=function(){var BM;if(Ah&&AA&&AL.dim&&p(Ah)){Aa(false);BM=true}else{if(F){AV(false);BM=true}else{BM=false}}if(BM&&AP){o(AP)}return BM};f.maximizeAlert=function(){if(!F){AV(true);return true}return false};f.restoreAlert=j;f.minimizeAlert=function(){if(Ah&&AA&&!p(Ah)){Aa(true);return true}return false}}function s(){return !A7||!o(A7)}function AD(){return !AB||!o(AB)}function AY(){return !AX||!o(AX)}function Ao(BM){switch(x){case"confirm":case"yesno":case"dialog":return(BM?s:AD)();case"yesnocancel":if(typeof BM=="undefined"){return AY()}return(BM?s:AD)()}}function A8(){if(BD){T(false)}AW(D,false,l)}function Y(BO){var BN,BM;if(AU){if(BO){if(Ax&&o(Ax)===false){return false}}if(Ap&&o(Ap)===false){return false}if(!i){A8();BN=true}else{BM=o(i,l);if(typeof BM=="undefined"){A8();BN=true}else{BN=BM}}if(BN){AU=false}return !AU}return false}if(AW&&O&&BC&&f.getScrollPosition&&D&&A6&&r&&BE&&e&&Ak(global,"setTimeout")){f.dismissAlert=Y;f.getAlertElement=function(){return D};f.isAlertOpen=function(){return AU};f.isAlertModal=function(){return AU&&!a};f.deactivateAlert=c=function(){if(A3){A3(D,"background")}if(Am){o(Am)}Ae=true};f.activateAlert=H=function(){if(BA){BA(D,"background")}if(Au){o(Au)}Ae=false};if(Ak(A6,"focus")){Ab=function(BM){A4(BM,"focus",function(BP){if(Ac){global.clearTimeout(Ac)}var BQ=v(BP);var BO=BQ;while(BQ&&BQ!=r){BQ=V(BQ)}var BN=true;if(!BQ&&m){BN=o(m,BM,BO)!==false}if(BN){H()}else{this.blur();return Ai(BP)}});A4(BM,"blur",function(BN){if(!a){Ac=global.setTimeout(function(){var BO=true;if(X){BO=o(X,BM,v(BN))!==false}if(BO){if(!Ah||!AA||!p(Ah)){c()}}else{this.focus();return Ai(BN)}},100)}})}}if(Ab){Ab(A6)}f.focusAlert=AK=function(){if(AU&&D.style.visibility=="visible"&&r.style.display!="none"){A6.focus()}if(H){H()}};var P=function(BM){if(!BM.disabled&&AQ.style.display!="none"){BM.blur()}};f.blurAlert=function(){if(D.style.visibility=="visible"&&r.style.display!="none"){A6.blur();if(AQ){P(AQ)}if(Af){P(Af)}if(Av){P(Av)}if(Ag){P(Ag)}}if(c){c()}};A4(D,"click",function(BN){var BM;if(Ac){global.clearTimeout(Ac);Ac=null}if(Ae){H();BM=true}var BO=AJ(BN);if(BM&&AK&&(BO==this||BO==BE||BO==r||BO==BL||BO==BH||BO==AF||BO==Z||BO==K)){AK()}});f.setAlertDirty=function(BM,BN){if(x=="dialog"){if(typeof BN=="boolean"){A6.value=BM?"Close":"OK";if(AQ){AQ.disabled=BM}}if(Av){Av.disabled=!BM}Q=BM}};f.isAlertModal=function(){return AU&&a};if(AH){BD=AN("div");BD.className="curtain";BD.style.display="none";BD.style.visibility="hidden"}if(BG){BE.id="mylibalertcontent"}if(Ad){BH=AN("div");if(BH){BH.className="movehandle";D.appendChild(BH);if(N){N(BH)}D.style.position="absolute";Ad(false);if(AV){Aj=U("Maximize",".");if(Aj){A4(Aj,"click",function(BM){if(A5||!p(this)){if(!j()){AV(true)}}})}A4(BH,"dblclick",function(BM){if(A5||!p(Aj)){if(!j()){AV(true)}return Ai(BM)}})}BL=AN("div");if(BL){BL.className="icon";if(A){A(BL,"button")}A4(BL,"dblclick",function(){if(!A0||!p(A0)){Y(false)}});A4(BL,"click",function(){if(BI){o(BI)}});D.appendChild(BL)}A0=U("Close");if(A0){A4(A0,"click",function(){if(!p(this)){Y(false)}})}if(k&&Aq&&Aq("display")&&Aa){Ah=U("Minimize",",");if(Ah){A4(Ah,"click",function(){if(!p(this)){Aa(true)}})}}if(A2){AC=U("Fix");if(AC){BF(AC,false);A4(AC,"click",function(BM){if(!p(this)){if(!w(this)){BF(this);if(A3){A3(D,"fixed")}this.title="Detach";A2(D,true,g)}else{BF(this,false);if(BA){BA(D,"fixed")}this.title="Fix";A2(D,false,g)}if(AA&&Ah&&p(Ah)&&AL.pos){AL.pos=Ay(D)}if(AK){global.setTimeout(AK,10)}}})}}if(BC){Z=AN("div");if(Z){Z.className="sizehandleh";D.appendChild(Z);d(D,Z,{mode:"size",axes:"horizontal"})}K=AN("div");if(K){K.className="sizehandlev";D.appendChild(K);d(D,K,{mode:"size",axes:"vertical"})}AF=AN("div");if(AF){AF.className="sizehandle";D.appendChild(AF);d(D,AF,{mode:"size"})}}}}BE.className="content";D.appendChild(BE);A6.type="button";A6.value="Close";A6.className="commandbutton close";r.appendChild(A6);Af=W("No");AQ=W("Cancel");Av=W("Apply");Ag=W("Help");D.appendChild(r);D.style.position="absolute";AW(D,false);AR(D,0,0);A4(A6,"click",function(){if(!x||Ao(true)){Y(Q)}});if(BD){e.appendChild(BD);if(AK){A4(BD,"click",function(){AK()})}}e.appendChild(D);if(G&&Aw){var At;G("keydown",function(BM){At=(AU&&!Ae)});G("keyup",function(BO){var BP,BN,BM;if(AU&&!BO.shiftKey&&!BO.metaKey&&(!Ae||At)){BN=Aw(BO);switch(BN){case 27:if(!BO.ctrlKey){if(!A0||!p(A0)||Ao()){Y(false);return Ai(BO)}}break;case 13:if(!BO.ctrlKey){BP=AJ(BO);BM=BP.tagName;if(BP.type=="text"&&/^input$/i.test(BM)){while(BP&&BP!=r){BP=V(BP)}if(BP&&(!x||Ao(true))){Y(Q);return Ai(BO)}}}break;default:if(AV&&n&&BO.ctrlKey){switch(BN){case 190:if(A5&&!j()){AV(true)}break;case 188:if(AA&&Ah&&!p(Ah)){Aa(true)}}}}At=false}})}if(Ag){A4(Ag,"click",function(){if(C){C()}})}if(AQ){A4(AQ,"click",function(){if(Ao()){Y(false)}})}if(Af){A4(Af,"click",function(){if(Ao(false)){Y(false)}})}if(Av){A4(Av,"click",function(){if(!Ax||o(Ax)!==false){Q=false;this.disabled=true;if(A6.value=="Close"){A6.value="OK";if(AQ){AQ.disabled=false}}}})}f.alert=function(BN,BY){var BP,BU,BS,BT,BW,BO,BQ;BY=BY||{};if(BY.effects&&typeof BY.duration=="undefined"){BY.duration=400}l=BY;g={duration:BY.duration,ease:BY.ease,fps:BY.fps};L=BY.curtain||{};x=BY.decision;AS=BY.buttons!==false;BU=BY.captionButtons!==false;BS=BY.icon!==false;if(A){A(D,x=="dialog"?"dialog":"alertdialog");if(x=="dialog"){E(D,"described-by")}else{BG(D,"described-by","mylibalertcontent")}}if(Ag){C=BY.onhelp;Ag.style.display=(C)?"":"none"}if(AQ){AQ.style.display=(x&&x!="yesno")?"":"none"}if(Af){Af.style.display=(x=="yesno"||x=="yesnocancel")?"":"none"}if(A0){AI(A0,!!x&&x!="dialog")}if(BL){BL.title=x?"":"Double-click to close";if(A){A(BL,x?"":"button")}BL.style.visibility=(!BU||!BS||!A3)?"hidden":""}A7=BY.onpositive;AX=BY.onindeterminate;AB=BY.onnegative;BI=BY.oniconclick;m=BY.onfocus;X=BY.onblur;Au=BY.onactivate;Am=BY.ondeactivate;BB=BY.onmaximize;BJ=BY.onminimize;AP=BY.restore;I=BY.ondragstart;B=BY.ondrop;AO=BY.callbackContext;Q=false;A6.value="OK";if(AQ){AQ.disabled=false}if(Av){Av.disabled=true;Ax=BY.onsave;Av.style.display=(BY.onsave&&x=="dialog")?"":"none"}A6.value=x?((x.indexOf("yes")!=-1)?"Yes":"OK"):"Close";if(BH){BT=BY.title;BW=typeof BT=="string";if(BW){BH.style.display="";A1(BH,BT)}else{BH.style.display="none"}}if(r){r.style.display=AS?"":"none"}Ap=BY.onclose;i=BY.onhide||arguments[3];var BV,BX=BY.onopen;if(!BV){BV=BY.onshow||arguments[2]}AW(D,false);if(!F&&BY.shrinkWrap!==false){D.style.height="";D.style.width=""}if(BD){var BM=a;a=BY.modal;if(!AU||a!=BM){T(BY.modal)}}D.className=(BY.className||"alert")+" popup window";if(!AU){BO=D.style.left;BQ=D.style.top;D.style.left=D.style.top="0"}BY.text=BN;t(BE,BY);n=BY.sizable!==false;A5=n&&BY.maximizable!==false;if(A3){if(AV){BA(D,"nomaxminbuttons");(n?A3:BA)(D,"maxminbuttons")}else{A3(D,"nomaxminbuttons")}if(BU){(BS?A3:BA)(D,"iconic");BA(D,"nocaptionbuttons")}else{A3(D,"nocaptionbuttons")}if(A2&&BY.fixable!==false){A3(D,"fixable")}}D.style.display="block";if(Ar&&AA&&Ah&&p(Ah)){Ar(false);if(F){As(D);if(A5){Al(D,null,function(){if(A3){A3(D,"maximized")}})}else{F=false}q(F)}J(false)}if(Aj){if(n&&AV&&A5){AI(Aj,false)}else{AI(Aj);if(F){As(D);F=false}}q(!!F)}if(n){AA=BY.minimizable!==false}if(Ah){if(n&&Aa&&AA){AI(Ah,false)}else{AI(Ah)}}if(AE){AE(!n||F)}if(AC){AC.style.visibility=(BY.fixable!==false&&BW&&BU)?"":"hidden"}if(Aj){Aj.style.visibility=(n&&BW&&BU)?"":"hidden"}if(Ah){Ah.style.visibility=(n&&BW&&BU)?"":"hidden"}if(A0){A0.style.visibility=(BW&&BU)?"":"hidden"}if(BC){if(BY.shrinkWrap!==false){if(!F){D.style.height="1px";BP=D.offsetHeight;D.style.height=""}BP=D.clientLeft}var BR=Az(D);if(BR){BC(D,BR[0],BR[1])}}if(!AU){D.style.left=BO;D.style.top=BQ}if(BX){o(BX)}Ae=BY.background;if(Ae){c()}if(AU||!BV||!o(BV,D,BY,F)){if(AU){if(!AC||!w(AC)){global.setTimeout(function(){O(D,{duration:BY.duration,ease:BY.ease,fps:BY.fps},function(){if(AK){AK()}})},10)}AW(D)}else{if(!F){O(D)}else{As(D);Al(D,null,function(){if(A3){A3(D,"maximized")}})}AW(D,true,BY)}}if(!AU&&A6&&Ak(A6,"focus")){global.setTimeout(AK,BY.duration||1)}AU=true}}e=f=null})}