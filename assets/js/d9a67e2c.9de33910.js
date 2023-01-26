(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9827],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),h=i,c=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(c,a(a({ref:t},d),{},{components:n})):r.createElement(c,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2042:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"configuring",title:"Experiment Configuration",sidebar_label:"Configuring",slug:"/configuring"},l="Configuring your experiment.",s={unversionedId:"workflow/configuring",id:"workflow/configuring",isDocsHomePage:!1,title:"Experiment Configuration",description:"From our perspective as experiment owners, experiments are composed of two time periods: the enrollment period and the observation window.",source:"@site/docs/workflow/configuring.md",sourceDirName:"workflow",slug:"/configuring",permalink:"/configuring",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/configuring.md",tags:[],version:"current",frontMatter:{id:"configuring",title:"Experiment Configuration",sidebar_label:"Configuring",slug:"/configuring"},sidebar:"sidebar",previous:{title:"Mobile Messaging",permalink:"/mobile-messaging"},next:{title:"Testing",permalink:"/testing"}},m=[{value:"The Enrollment Period",id:"the-enrollment-period",children:[{value:"General considerations",id:"general-considerations",children:[]},{value:"Recommendations",id:"recommendations",children:[]},{value:"Getting help",id:"getting-help",children:[]}]},{value:"The Observation Window",id:"the-observation-window",children:[{value:"Relationship with unenrollment and the end of the experiment.",id:"relationship-with-unenrollment-and-the-end-of-the-experiment",children:[]},{value:"Visual explanation",id:"visual-explanation",children:[]},{value:"Getting help",id:"getting-help-1",children:[]}]}],d={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-your-experiment"},"Configuring your experiment."),(0,o.kt)("p",null,"From our perspective as experiment owners, experiments are composed of two time periods: the enrollment period and the observation window."),(0,o.kt)("h2",{id:"the-enrollment-period"},"The Enrollment Period"),(0,o.kt)("p",null,"The enrollment period is the time during which the experiment recipe is live. Clients that sync during this time will see the recipe, and potentially enroll (see ",(0,o.kt)("a",{parentName:"p",href:"/bucketing"},"this page on bucketing")," for more details on the enrollment mechanism)."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mobile first run experiments are a very important-to-know exception to the enrollment period design."),(0,o.kt)("p",{parentName:"div"},"Please consult the ",(0,o.kt)("a",{parentName:"p",href:"/mobile-first-run-experiments"},"mobile first run experiments deep dive")," for more information."))),(0,o.kt)("h3",{id:"general-considerations"},"General considerations"),(0,o.kt)("p",null,"There are a few things that experiment owners should consider when choosing the length of the enrollment period."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Day-of-week bias. Different types of users use the browser on different days of the week. In order to ensure that the experiment results generalize to the complete population, it's recommended to enroll for units of whole weeks (7 days, 14 days, etc). Failing to do so could lead to results that are overly weighted by one type of user (weekday users, weekend users) such than the actual impact when we launch the treatment to all users might be quite different than the experiment results."),(0,o.kt)("li",{parentName:"ul"},"Partial filling on the first day. Launching experiments mid-day results in one day of partial enrollments, which if not accounted for can mean that the experiment was smaller than intended. Therefore, we generally recommend enrolling for an extra day to account for this.")),(0,o.kt)("p",null,"The exact choice of period length should consider the total volume of the experiment, the audience (namely, new vs existing user), and the business needs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Total volume: without increasing the enrollment proportion, larger experiments will need to enroll longer. Of course, in some situations we can increase the enrollment proportion to achieve a shorter enrollment period."),(0,o.kt)("li",{parentName:"ul"},"Audience:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Existing user experiments: generally, these experiments see the majority of their enrollments quickly, with enrollment volume rapidly falling off as only users who haven't synced are eligible to continue enrolling. It's not uncommon with an experiment like this to see 90% of the enrollments within the first week and 10% in the later weeks. In this case, it may not be possible to extend the enrollment period to achieve larger sizes so the only option would be increasing the enrollment fraction."),(0,o.kt)("li",{parentName:"ul"},"New user experiments: generally, these experiments see enrollment volume scaling linearly with period length. Letting these experiments enroll for 2 weeks will see double the enrollments of a 1-week variant."))),(0,o.kt)("li",{parentName:"ul"},"Business needs: varying business needs can necessitate varying designs.")),(0,o.kt)("h3",{id:"recommendations"},"Recommendations"),(0,o.kt)("p",null,"Putting this together, we generally recommend the following possible lengths for enrollment periods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8 days"),(0,o.kt)("li",{parentName:"ul"},"15 days"),(0,o.kt)("li",{parentName:"ul"},"22 days"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("h3",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Please bring questions about enrollment period and sizing either to ",(0,o.kt)("a",{parentName:"em",href:"https://mozilla-hub.atlassian.net/wiki/spaces/DATA/pages/6849684/Office+Hours"},"Data Science Office Hours")," or to ",(0,o.kt)("a",{parentName:"em",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter"))),(0,o.kt)("h2",{id:"the-observation-window"},"The Observation Window"),(0,o.kt)("p",null,"Once a client has enrolled in an experiment, their Observation Window has begun, during which time we can monitor their telemetry and compute metrics. The windows is usually expressed as the number of days since enrollment and ",(0,o.kt)("em",{parentName:"p"},"is the same for all clients, regardless of when they enroll"),"."),(0,o.kt)("p",null,"The observation window is an abstraction that represents the longest period of time we can observe any individual client for and can be calculated by differencing the enrollment period from the overall runtime for the experiment (observation window = total runtime - enrollment period)."),(0,o.kt)("h3",{id:"relationship-with-unenrollment-and-the-end-of-the-experiment"},"Relationship with unenrollment and the end of the experiment."),(0,o.kt)("p",null,"Clients can unenroll from experiments during the middle of the observation window for a variety of reasons (they've disabled Studies, they no longer meet the targeting, opt-ing out of that specific experiment, etc.). To avoid bias, results are calculated over all clients that ever enrolled (unenrolling from the experiment does not remove a client from the analysis). The only situation that ",(0,o.kt)("em",{parentName:"p"},"may")," exclude a client from analysis would be opt-ing out of telemetry."),(0,o.kt)("p",null,"Ending the experiment in Experimenter finalizes the total runtime of the experiment and enables us to determine how long the observation window can be. As a result, for most clients, the observation window ends before they're actually unenrolled from the experiment."),(0,o.kt)("h3",{id:"visual-explanation"},"Visual explanation"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enrollment &amp; Observation period workflow",src:n(787).Z})),(0,o.kt)("p",null,"The above visual explains how the system works for a hypothetical experiment that launched on 9/1, was ended on 9/25 (lasting a total of 24 days), and had an enrollment period of 8 days. This results in an observation window of 24-8=16 days."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For clients enrolling on day 1 (9/1), their observation window runs from 9/2 through 9/17."),(0,o.kt)("li",{parentName:"ul"},"For clients enrolling on day 2 (9/2), their observation windows runs from 9/3 through 9/18."),(0,o.kt)("li",{parentName:"ul"},"..."),(0,o.kt)("li",{parentName:"ul"},"For clients enrolling on day 8 (9/8), their observation windows runs from 9/9 through 9/24.")),(0,o.kt)("h4",{id:"relationship-with-analysis-windows"},"Relationship with Analysis Windows"),(0,o.kt)("p",null,"All experiment metrics are calculated over an Analysis Window which is a subset of the Observation Window. Analysis windows can be at a daily, weekly, or overall level. In this example, there are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 overall window, representing the 16 days after enrollment."),(0,o.kt)("li",{parentName:"ul"},"2 weekly windows. The first week (indexed as 0 in Jetstream and Partybal) is shown in magenta and the second (1st) week is shown in orange. There wasn't enough days to form a 3rd complete week, so metrics can only be calculated over weeks 0 or 1."),(0,o.kt)("li",{parentName:"ul"},"16 daily windows.")),(0,o.kt)("h3",{id:"getting-help-1"},"Getting help"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Please bring questions about observation windows and analysis to ",(0,o.kt)("a",{parentName:"em",href:"https://mozilla-hub.atlassian.net/wiki/spaces/DATA/pages/6849684/Office+Hours"},"Data Science Office Hours")," or to ",(0,o.kt)("a",{parentName:"em",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter"))))}u.isMDXComponent=!0},787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/enrollment_and_observation-e6f7c5815f16dd3ca1e39bad8dda01a4.png"}}]);