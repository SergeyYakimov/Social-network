(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(34),o=a(35),l=a(38),r=a(36),s=a(39),c=a(0),i=a.n(c),u=a(30),m=a(16),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),a}(i.a.Component);return Object(m.b)(p)(t)}},293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1WSuh",mainPhoto:"ProfileInfo_mainPhoto__8fTd2",contact:"ProfileInfo_contact__1-Eek"}},294:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__Wi19Q",posts:"MyPosts_posts__3YZyI"}},295:function(e,t,a){e.exports={item:"Post_item__3MIvJ"}},296:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),l=a(38),r=a(36),s=a(39),c=a(0),i=a.n(c),u=a(294),m=a.n(u),p=a(295),f=a.n(p),b=function(e){return i.a.createElement("div",{className:f.a.item},i.a.createElement("img",{src:"https://yt3.ggpht.com/a/AGF-l7-gRDVH6asZkW92cY1ONdIkDlpWPLSPoOlpSg=s900-mo-c-c0xffffffff-rj-k-no"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,e.like)))},d=a(87),E=a(127),h=a(64),v=a(25),O=Object(h.a)(30),P=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(b,{key:e.id,message:e.text,like:e.likeCount})}));i.a.createRef();return i.a.createElement("div",{className:m.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(g,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:m.a.posts},t))})),g=function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:v.b,name:"newPostText",placeholder:"Post message",validate:[h.b,O]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))};g=Object(E.a)({form:"ProfileAddNewPostForm"})(g);var k=P,j=a(93),y=a(16),S=Object(y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(k),_=a(94),A=a(293),w=a.n(A),I=a(63),M=function(e){var t=Object(c.useState)(!1),a=Object(_.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(_.a)(l,2),s=r[0],u=r[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status"),": ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s})))},N=a(48),F=a.n(N),x=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:F.a.summaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),":",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:w.a.contact},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))}))))})),T=a(116),C=a.n(T),J=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:w.a.contact},i.a.createElement("b",null,t),": ",a||"no")},B=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(J,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},D=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),u=Object(_.a)(s,2),m=u[0],p=u[1];if(!t)return i.a.createElement(I.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:w.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||C.a,className:w.a.mainPhoto}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),m?i.a.createElement(x,{profile:t,initialValues:t,onSubmit:function(e){r(e).then((function(){p(!1)}))}}):i.a.createElement(B,{goToEditMode:function(){p(!0)},profile:t,isOwner:o}),i.a.createElement(M,{status:a,updateStatus:n})))},U=function(e){return i.a.createElement("div",null,i.a.createElement(D,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(S,null))},V=a(8),W=a(30),L=a(291),z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(i.a.Component);t.default=Object(V.d)(Object(y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),W.g,L.a)(z)}}]);
//# sourceMappingURL=3.82c014c5.chunk.js.map