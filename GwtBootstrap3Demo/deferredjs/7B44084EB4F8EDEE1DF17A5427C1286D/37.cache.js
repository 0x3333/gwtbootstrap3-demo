function Lmc(){}
function Amc(a,b,c){Lkb.call(this,a,b,c,(V$b(),U$b))}
function Umc(a){var b;if(!a.g){b=new Jmc(new Lmc);a.g=b}return a.g}
function Tmc(a){var b;if(!a.f){b=new Amc(Ujb(plb(a.a)),Umc(a),Smc(a));kkb((qlb(a.a),b),Blb(qlb(a.a)));a.f=b}return a.f}
function Jmc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;dlb(this,(a=new aGb,Myb(a,(b=new zBb(iEc),Myb(b,(c=new NEb,c.a='Project Setup',MEb(c),c.b='basic setup and using custom themes',MEb(c),c)),Myb(b,(d=new dFb,Myb(d,(i=new pFb,oFb(i,(j=new wCb(3),j.b=jEc,uCb(j),j)),i)),Myb(d,(k=new gFb,Myb(k,new jDb((n=new yrb,Yn(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new f$(bo(n.a))).a)),Myb(k,(o=new Csc,TFb(o,(p=new yrb,Yn(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new f$(bo(p.a))).a),D0(o.$,mEc,true),o)),k)),d)),Myb(b,(e=new dFb,Myb(e,(q=new pFb,oFb(q,(r=new wCb(3),r.b='Bootstrap2 Look-a-like Setup',uCb(r),r)),q)),Myb(e,(s=new gFb,Myb(s,new jDb((t=new yrb,Yn(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new f$(bo(t.a))).a)),Myb(s,(u=new Csc,TFb(u,(v=new yrb,Yn(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new f$(bo(v.a))).a),D0(u.$,mEc,true),u)),s)),e)),Myb(b,(f=new dFb,Myb(f,(w=new pFb,oFb(w,(x=new wCb(3),x.b='Custom Theme',uCb(x),x)),w)),Myb(f,(y=new gFb,Myb(y,new jDb((z=new yrb,Yn(z.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new f$(bo(z.a))).a)),Myb(y,(A=new Csc,TFb(A,(B=new yrb,Yn(B.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new f$(bo(B.a))).a),D0(A.$,mEc,true),A)),y)),f)),Myb(b,(g=new dFb,Myb(g,(C=new pFb,oFb(C,(D=new wCb(3),D.b='Support for IE8',uCb(D),D)),C)),Myb(g,(E=new gFb,Myb(E,new jDb((F=new yrb,Yn(F.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new f$(bo(F.a))).a)),Myb(E,(G=new Csc,TFb(G,(H=new yrb,Yn(H.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new f$(bo(H.a))).a),D0(G.$,mEc,true),G)),E)),g)),b)),a))}
YY(1306,528,oyc,Amc);YY(1309,533,pyc,Jmc);YY(1310,1,{},Lmc);YY(1317,1,Qyc);_.vb=function inc(){Umb(this.b,Tmc(this.a.a))};var tU=Opb(EDc,'SetupPresenter',1306),vU=Opb(EDc,'SetupView',1309),uU=Opb(EDc,'SetupView_BinderImpl',1310);Xyc(Em)(37);