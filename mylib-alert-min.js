var API,global=this;if(API&&typeof API=="object"&&API.areFeatures&&API.areFeatures("attachListener","createElement","setElementText","setControlState")){API.attachDocumentReadyListener(function(){var U=API;var AN=U.isHostMethod;var AS=U.canAdjustStyle;var AL=U.cancelDefault;var u=U.createElement;var AC=U.showElement;var Ae=U.attachListener;var E=U.attachDocumentListener;var q=U.getEventTarget;var AW=U.getKeyboardKey;var S=U.attachDrag;var AP=U.detachDrag;var H=U.centerElement;var o=U.coverDocument;var AF=U.constrainPositionToViewport;var AO=U.maximizeElement;var AU=U.restoreElement;var Ab=U.setElementText;var Aj=U.setElementHtml;var R=U.setElementNodes;var w=U.positionElement;var Al=U.sizeElement;var Ac=U.fixElement;var Y=U.getChildren;var Ad=U.addClass;var Ak=U.removeClass;var As=U.hasClass;var AY=U.getElementPositionStyle;var AZ=U.getElementSizeStyle;var N=U.getElementParentElement;var Aq,n,Q,G;var Am,C=u("div");var An=u("div");var Ag=u("input");var d=u("fieldset");var k,At,AM,AK,Aa,AJ,v,AI,AV;var T=U.getBodyElement();var z,Z,V,AA;var s={};var B,Ah,j,AD,AX,AR,Ar;var M,r,I,AT,h,m,F,J,y,AH,c,AG,AB,X,a,Af,i,g,x;var A=U.setControlRole,Ap=U.setWaiProperty,D=U.removeWaiProperty;var t=U.disableControl,b=U.isControlDisabled,Ao=U.checkControl,f=U.isControlChecked;var W=function(Av,Au){return Av+(Au?" [Ctrl+"+Au+"]":"")};var p=function(Av,Au){t(Av,Au);if(typeof Av.title=="string"&&Av.title){Av.title=Av.title.replace(/\s+\(disabled\)/,"");if(Au||typeof Au=="undefined"){Av.title+=" (disabled)"}}};var L=function(Aw,Au){var Av=u("div");if(Av){Av.title=W(Aw,Au);Av.className=Aw.toLowerCase()+" captionbutton";if(A){A(Av,"button")}C.appendChild(Av)}return Av};var O=function(Au){var Av=u("input");if(Av){Av.className="commandbutton";Av.type="button";Av.value=Au;d.appendChild(Av)}return Av};if(S){AH=function(Au){((Au)?AP:S)(C,Aq)}}var K=function(Au){if(Au){Am.style.display="block";o(Am);Am.style.visibility="visible";if(Ad){Ad(Am,"drawn")}AC(Am)}else{if(Ak){Ak(Am,"drawn")}AC(Am,false,{removeOnHide:true})}};J=function(Au){if(Aq){if(Af){Aq.title="Double-click to "+(Au?"restore":"maximize")}else{if(AK){Aq.title=Au?"Double-click to restore":""}}}};y=function(Au){if(Ad){if(Au){Ak(AM,"maximizebutton");Ad(AM,"restorebutton")}else{Ak(AM,"restorebutton");Ad(AM,"maximizebutton")}}AM.title=W(!Au?"Maximize":"Restore",".");if(b(AM)){AM.title+=" (disabled)"}};F=function(Au){if(AK){p(AK,Au)}if(AM){p(AM,!Au&&!Af)}if(AM){if(Au){y(!z);if(a&&Aq){J(!z)}}else{y(z);if(a&&Aq){J(z)}}}};h=function(Av,Au){Av.style.visibility=(Au)?"hidden":""};m=function(Au){if(n){h(n,Au)}if(Q){h(Q,Au)}if(G){h(G,Au)}};c=function(Au){if(a){m(Au)}if(Aq){if(a){J(Au)}AH(Au)}if(AM){y(Au)}if(k){p(k,Au)}};if(AO){if(As){I=function(Au){return As(Au,"captionbutton")}}else{I=function(Au){return Au==AK||Au==AM||Au==Aa||Au==k}}AT=function(Au){var Aw,Ax,Av=Y(C);Aw=Av.length;while(Aw--){Ax=Av[Aw];if(!I(Ax)&&Ax!=Aq&&Ax!=At){Ax.style.display=(Au||(Ax==d&&!x))?"none":""}}};AG=function(Au,Av){if(Au){s.pos=AY(C);s.dim=AZ(C);if(Ad){Ak(C,"maximized");Ad(C,"minimized")}AH(false)}else{if(!z){if(k&&f(k)&&C.style.position!="fixed"){AF(s.pos)}w(C,s.pos[0],s.pos[1],V);Al(C,s.dim[0],s.dim[1],V)}if(Ak){Ak(C,"minimized")}AH(z)}AT(Au);if(!Au&&z){AU(C);AB(true)}if(Au){C.style.height=C.style.width=""}F(Au)};AB=function(Au){(Au?AO:AU)(C,V,function(){(Au?Ad:Ak)(C,"maximized")});c(Au);z=Au};X=function(){if(AK&&i&&b(AK)){AG(false)}else{AB(!z)}}}function e(){return !Ah||!Ah()}function l(){return !j||!j()}function AE(){return !AD||!AD()}function AQ(Au){switch(g){case"confirm":case"yesno":case"dialog":return(Au?e:l)();case"yesnocancel":if(typeof Au=="undefined"){return AE(M)}return(Au?e:l)()}}function Ai(){if(Am){K(false)}AC(C,false,Z)}function P(Aw){var Av,Au;if(AA){if(Aw){if(AX&&AX()===false){return false}}if(!AR){Ai();Av=true}else{Au=AR(C,Z);if(typeof Au=="undefined"){Ai();Av=true}else{Av=Au}}if(Av){AA=false}return !AA}return false}U.dismissAlert=P;U.getAlertElement=function(){return C};U.isAlertOpen=function(){return AA};U.focusAlert=r=function(){if(C.style.visibility=="visible"&&d.style.display!="none"){Ag.focus()}};U.setAlertDirty=function(Au,Av){if(g=="dialog"){if(typeof Av=="boolean"){Ag.value=Au?"Close":"OK";if(v){v.disabled=Au}}if(AV){AV.disabled=!Au}M=Au}};if(AC&&H&&Al&&U.getScrollPosition&&C&&Ag&&d&&An&&T&&AN(global,"setTimeout")){if(o){Am=u("div");Am.className="curtain";Am.style.display="none";Am.style.visibility="hidden"}if(Ap){An.id="mylibalertcontent"}if(AH){Aq=u("div");if(Aq){Aq.className="movehandle";C.appendChild(Aq);if(!U.absoluteElement){C.style.position="absolute"}AH(false);if(AB){AM=L("Maximize",".");if(AM){Ae(AM,"click",function(Au){if(!b(this)){X()}})}Ae(Aq,"dblclick",function(Au){if(Af||!b(AM)){X();return AL(Au)}})}At=u("div");if(At){At.className="icon";if(A){A(At,"button")}Ae(At,"dblclick",function(){if(!Aa||!b(Aa)){P(false)}});Ae(At,"click",function(){if(Ar){Ar()}});C.appendChild(At)}Aa=L("Close");if(Aa){Ae(Aa,"click",function(){if(!b(this)){P(false)}})}if(Y&&AS&&AS("display")&&AG){AK=L("Minimize",",");if(AK){Ae(AK,"click",function(){if(!b(this)){AG(true)}})}}if(Ac){k=L("Fix");Ao(k,false);if(k){Ae(k,"click",function(Au){if(!b(this)){if(!f(this)){Ao(this);if(Ad){Ad(C,"fixed")}this.title="Detach";Ac(C,true,V)}else{Ao(this,false);if(Ak){Ak(C,"fixed")}this.title="Fix";Ac(C,false,V)}}})}}if(Al){Q=u("div");if(Q){Q.className="sizehandleh";C.appendChild(Q);S(C,Q,{mode:"size",axes:"horizontal"})}G=u("div");if(G){G.className="sizehandlev";C.appendChild(G);S(C,G,{mode:"size",axes:"vertical"})}n=u("div");if(n){n.className="sizehandle";C.appendChild(n);S(C,n,{mode:"size"})}}}}An.className="content";C.appendChild(An);Ag.type="button";Ag.value="Close";Ag.className="commandbutton close";d.appendChild(Ag);AI=O("No");v=O("Cancel");AV=O("Apply");AJ=O("Help");C.appendChild(d);C.style.position="absolute";AC(C,false);w(C,0,0);Ae(Ag,"click",function(){if(!g||AQ(true)){P(M)}});if(Am){T.appendChild(Am);Ae(Am,"click",function(){r()})}T.appendChild(C);if(E&&AW){E("keyup",function(Aw){var Av,Au;if(AA&&!Aw.shiftKey&&!Aw.metaKey){Au=AW(Aw);switch(Au){case 27:if(!Aw.ctrlKey){if(!Aa||!b(Aa)||AQ()){P(false);return AL(Aw)}}break;case 13:if(!Aw.ctrlKey){Av=q(Aw);while(Av&&Av!=d){Av=N(Av)}if(Av&&!(/^textarea$/i).test(Av.tagName)&&!(/^commandbutton$/).test(Av.className)&&(!g||AQ(true))){P(M);return AL(Aw)}}break;default:if(AB&&a&&Aw.ctrlKey){switch(Au){case 190:if(i&&AK&&b(AK)){X()}else{if(Af){AB(!z)}}break;case 188:if(i&&AK&&!b(AK)){AG(true)}}}}}})}if(AJ){Ae(AJ,"click",function(){if(B){B()}})}if(v){Ae(v,"click",function(){if(AQ()){P(false)}})}if(AI){Ae(AI,"click",function(){if(AQ(false)){P(false)}})}if(AV){Ae(AV,"click",function(){if(!AX||!AX()){M=false;this.disabled=true;if(Ag.value=="Close"){Ag.value="OK";if(v){v.disabled=false}}}})}U.alert=function(Au,A5,A4,Az){var Aw,A2,A0,A1,A3,Av,Ax;A5=A5||{};Z=A5;V={duration:A5.duration,ease:A5.ease};g=A5.decision;x=A5.buttons!==false;A2=A5.captionButtons!==false;A0=A5.icon!==false;if(A){A(C,g=="dialog"?"dialog":"alertdialog");if(g=="dialog"){D(C,"described-by")}else{Ap(C,"described-by","mylibalertcontent")}}if(AJ){B=A5.onhelp;AJ.style.display=(B)?"":"none"}if(v){v.style.display=(g&&g!="yesno")?"":"none"}if(AI){AI.style.display=(g=="yesno"||g=="yesnocancel")?"":"none"}if(Aa){p(Aa,!!g&&g!="dialog")}if(At){At.title=g?"":"Double-click to close";if(A){A(At,g?"":"button")}At.style.visibility=(!A2||!A0||!Ad)?"hidden":""}Ah=A5.onpositive;AD=A5.onindeterminate;j=A5.onnegative;Ar=A5.oniconclick;M=false;Ag.value="OK";if(v){v.disabled=false}if(AV){AV.disabled=true;AX=A5.onsave;AV.style.display=(A5.onsave&&g=="dialog")?"":"none"}Ag.value=g?((g.indexOf("yes")!=-1)?"Yes":"OK"):"Close";if(Aq){A1=A5.title;A3=typeof A1=="string";if(A3){Aq.style.display="";Ab(Aq,A1)}else{Aq.style.display="none"}}if(d){d.style.display=x?"":"none"}AR=Az||A5.onclose;if(!A4){A4=A5.onopen}AC(C,false);if(!z&&A5.shrinkWrap!==false){C.style.height="";C.style.width=""}if(Am){K(A5.modal)}C.className=(A5.className||"alert")+" popup window";if(!AA){Av=C.style.left;Ax=C.style.top;C.style.left=C.style.top="0"}if(Aj&&A5.html){Aj(An,A5.html)}else{if(R&&A5.nodes){R(An,A5.nodes)}else{Ab(An,Au||"")}}a=A5.sizable!==false;Af=a&&A5.maximizable!==false;if(Ad){if(AB){Ak(C,"nomaxminbuttons");(a?Ad:Ak)(C,"maxminbuttons")}else{Ad(C,"nomaxminbuttons")}if(A2){(A0?Ad:Ak)(C,"iconic");Ak(C,"nocaptionbuttons")}else{Ad(C,"nocaptionbuttons")}if(Ac){Ad(C,"fixable")}}C.style.display="block";if(AT&&i&&AK&&b(AK)){AT(false);if(z){AU(C);if(Af){AO(C,null,function(){if(Ad){Ad(C,"maximized")}})}else{z=false}c(z)}F(false)}if(AM){if(a&&AB&&Af){p(AM,false)}else{p(AM);if(z){AU(C);z=false}}c(!!z)}if(a){i=A5.minimizable!==false}if(AK){if(a&&AG&&i){p(AK,false)}else{p(AK)}}if(m){m(!a||z)}if(AM){AM.style.visibility=(a&&A3&&A2)?"":"hidden"}if(AK){AK.style.visibility=(a&&A3&&A2)?"":"hidden"}if(Aa){Aa.style.visibility=(A3&&A2)?"":"hidden"}if(Al){if(A5.shrinkWrap!==false){if(!z){C.style.height="1px";Aw=C.offsetHeight;C.style.height=""}Aw=C.clientLeft}var Ay=AZ(C);if(Ay){Al(C,Ay[0],Ay[1])}}if(!AA){C.style.left=Av;C.style.top=Ax}if(AA||!A4||!A4(C,A5,z)){if(AA){if(!k||!f(k)){global.setTimeout(function(){H(C,{duration:A5.duration,ease:A5.ease,fps:A5.fps})},10)}AC(C)}else{if(!z){H(C)}else{AU(C);AO(C,null,function(){if(Ad){Ad(C,"maximized")}})}AC(C,true,A5)}}if(!AA&&Ag&&AN(Ag,"focus")){global.setTimeout(r,A5.duration||0)}AA=true}}T=U=null})}