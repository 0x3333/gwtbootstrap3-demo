function Vgc(){}
function Kgc(a,b,c){phb.call(this,a,b,c,(WWb(),VWb))}
function chc(a){var b;if(!a.g){b=new Tgc(new Vgc);a.g=b}return a.g}
function bhc(a){var b;if(!a.f){b=new Kgc(ygb(Vhb(a.a)),chc(a),ahc(a));Qgb((Whb(a.a),b),fib(Whb(a.a)));a.f=b}return a.f}
function Tgc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;Jhb(this,(a=new kCb,ovb(a,(b=new Vxb(zvc),ovb(b,(c=new fBb,c.a='Project Setup',eBb(c),c.b='basic setup and using custom themes',eBb(c),c)),ovb(b,(d=new nBb,ovb(d,(i=new zBb,yBb(i,(j=new Qyb(3),ICb(j.c,Avc),j)),i)),ovb(d,(k=new qBb,ovb(k,new Ezb((n=new Vnb,On(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new QW(Tn(n.a))).a)),ovb(k,(o=new Xlc,bCb(o,(p=new Vnb,On(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new QW(Tn(p.a))).a),lZ(o._,Dvc,true),o)),k)),d)),ovb(b,(e=new nBb,ovb(e,(q=new zBb,yBb(q,(r=new Qyb(3),ICb(r.c,'Bootstrap2 Look-a-like Setup'),r)),q)),ovb(e,(s=new qBb,ovb(s,new Ezb((t=new Vnb,On(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new QW(Tn(t.a))).a)),ovb(s,(u=new Xlc,bCb(u,(v=new Vnb,On(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new QW(Tn(v.a))).a),lZ(u._,Dvc,true),u)),s)),e)),ovb(b,(f=new nBb,ovb(f,(w=new zBb,yBb(w,(x=new Qyb(3),ICb(x.c,'Custom Theme'),x)),w)),ovb(f,(y=new qBb,ovb(y,new Ezb((z=new Vnb,On(z.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new QW(Tn(z.a))).a)),ovb(y,(A=new Xlc,bCb(A,(B=new Vnb,On(B.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new QW(Tn(B.a))).a),lZ(A._,Dvc,true),A)),y)),f)),ovb(b,(g=new nBb,ovb(g,(C=new zBb,yBb(C,(D=new Qyb(3),ICb(D.c,'Support for IE8'),D)),C)),ovb(g,(E=new qBb,ovb(E,new Ezb((F=new Vnb,On(F.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new QW(Tn(F.a))).a)),ovb(E,(G=new Xlc,bCb(G,(H=new Vnb,On(H.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new QW(Tn(H.a))).a),lZ(G._,Dvc,true),G)),E)),g)),b)),a))}
HV(1265,526,Opc,Kgc);HV(1268,531,Ppc,Tgc);HV(1269,1,{},Vgc);HV(1276,1,qqc);_.vb=function shc(){yjb(this.b,bhc(this.a.a))};var YR=qmb(Xuc,'SetupPresenter',1265),$R=qmb(Xuc,'SetupView',1268),ZR=qmb(Xuc,'SetupView_BinderImpl',1269);uqc(um)(35);