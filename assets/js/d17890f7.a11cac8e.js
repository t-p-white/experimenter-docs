(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9074],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4130:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"testing",title:"Testing Jetstream Configs"},s="Testing Jetstream Configs",l={unversionedId:"jetstream/testing",id:"jetstream/testing",isDocsHomePage:!1,title:"Testing Jetstream Configs",description:"Validation via Continuous Integration (CI)",source:"@site/docs/jetstream/testing.md",sourceDirName:"jetstream",slug:"/jetstream/testing",permalink:"/jetstream/testing",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/testing.md",tags:[],version:"current",frontMatter:{id:"testing",title:"Testing Jetstream Configs"},sidebar:"sidebar",previous:{title:"Troubleshooting Jetstream",permalink:"/jetstream/troubleshooting"},next:{title:"Bucketing",permalink:"/bucketing"}},p=[{value:"Validation via Continuous Integration (CI)",id:"validation-via-continuous-integration-ci",children:[]},{value:"Local validation",id:"local-validation",children:[]},{value:"Jetstream previews",id:"jetstream-previews",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-jetstream-configs"},"Testing Jetstream Configs"),(0,o.kt)("h2",{id:"validation-via-continuous-integration-ci"},"Validation via Continuous Integration (CI)"),(0,o.kt)("p",null,"Configurations for Jetstream experiments get added by opening a pull-request in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/metric-hub/tree/main/jetstream"},"metric-hub")," repository. Continuous Integration (CI) automatically runs checks to validate that the syntax and SQL definitions of the new or updated configuration files is correct. These checks only run for pull-requests that are opened from a branch that was pushed to the metric-hub repository. For pull-requests based on forks only some checks will run."),(0,o.kt)("p",null,"Pull-requests that pass the CI validation can be automatically merged without requiring an external review."),(0,o.kt)("h2",{id:"local-validation"},"Local validation"),(0,o.kt)("p",null,"To locally iterate and validate Jetstream configurations, the Jetstream tooling needs to be installed: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install mozilla-jetstream\n")),(0,o.kt)("p",null,"Once installed, local config files can be valided using the ",(0,o.kt)("inlineCode",{parentName:"p"},"jetstream validate_config")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jetstream validate_config /local/path/to/config/file.toml\n")),(0,o.kt)("p",null,"In case changes have been made to outcomes, defaults or metric definitions it is possible to specify a local metric-hub directory to be used for validation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jetstream validate_config /local/path/to/config/file.toml --config_repos=/path/to/metric-hub\n")),(0,o.kt)("h2",{id:"jetstream-previews"},"Jetstream previews"),(0,o.kt)("p",null,"When iterating on configurations, it is sometimes useful to get a preview of what computed data on the final dashboard would look like. Previews are computed on a data sample in order to reduce cost and speed up the analysis. Preview data should not be used to draw any conclusions on the outcome of an experiment. It should only be used to validate configurations."),(0,o.kt)("p",null,"To generate previews, install the Jetstream CLI tooling locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install mozilla-jetstream\n")),(0,o.kt)("p",null,"Authenticate to GCP:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud auth login --update-adc\n")),(0,o.kt)("p",null,"And set the project to ",(0,o.kt)("inlineCode",{parentName:"p"},"mozdata")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud config set project mozdata\n")),(0,o.kt)("p",null,"This is the default project where preview data will be temporarily be stored in. It is also possible to set this project to a personal sandbox project, or any other project with write permissions."),(0,o.kt)("p",null,"Preview data can be generated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"jetstream preview")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jetstream preview --help                  \nUsage: jetstream preview [OPTIONS]\n\n  Create a preview for a specific experiment based on a subset of data.\n\nOptions:\n  --project_id, --project-id TEXT\n                                  Project to write to (default: mozdata)\n  --dataset_id, --dataset-id TEXT\n                                  Dataset to write to (default: tmp)\n  --start_date, --start-date YYYY-MM-DD\n                                  Date for which project should be started to\n                                  get analyzed. Default: current date - 3 days\n  --end_date, --end-date YYYY-MM-DD\n                                  Date for which project should be stop to get\n                                  analyzed. Default: current date\n  --num-days, --num-days INTEGER  Number of days for which the project be\n                                  analyzed. Default: 3\n  --experiment_slug, --experiment-slug TEXT\n                                  Experimenter or Normandy slug of the\n                                  experiment to (re)run analysis for\n  --config_file, --config-file FILENAME\n  --config_repos, --config-repos TEXT\n                                  URLs to public repos with configs\n  --private_config_repos, --private-config-repos TEXT\n                                  URLs to private repos with configs\n  --analysis_periods, --analysis-periods ANALYSISPERIOD\n                                  Analysis periods to run analysis for.\n  --sql-output-dir, --sql_output_dir OUTDIR\n                                  Write generated SQL to given directory\n  --platform TEXT                 Platform/app to run analysis for. If not\n                                  specified, use Experimenter API to determine\n                                  plaftorm  [required]\n  --generate-population, --generate_population\n                                  Generate a random population sample based on\n                                  the provided population size. Useful if\n                                  enrollment hasn't happened yet\n  --population-sample-size, --population_sample_size INTEGER\n                                  Generated population sample size. Only used\n                                  when `--generate-population` is specified.\n                                  Use floats to specify population sizes in\n                                  percent, e.g 0.01 == 1% of clients\n  --enrollment_period, --enrollment-period INTEGER\n                                  Numer of days used as enrollment period when\n                                  generating population.\n  --help                          Show this message and exit.\n")),(0,o.kt)("p",null,"By default the preview runs Hetstream on a 3 day analysis window on a population sample of 1%.\nThese default parameters can be overwritten when invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"jetstream preview"),"."),(0,o.kt)("p",null,"The resulting data artifacts get written into the ",(0,o.kt)("inlineCode",{parentName:"p"},"mozdata.tmp")," dataset by default, which is configured to delete data after 7 days. Anyone at Mozilla has permissions to write to this dataset."),(0,o.kt)("p",null,"To generate a preview on a 10% sample for an existing experiment on Firefox iOS run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jetstream preview \\\n  --experiment_slug=ios-search-bar-placement-impact-assessment \\\n  --start_date=2022-08-01 \\\n  --platform=firefox_ios \\\n  --population-sample-size=10\n")),(0,o.kt)("p",null,"Jetstream Preview fetches experiment information from the Experimenter API.\nIn some cases a preview might need to be generated for experiments that haven't been launched yet or that haven't seen any enrollments. For these experiments a random population sample can be generated when specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"--generate-population")," that will be considered as the clients that enrolled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jetstream preview \\\n  --config_file=/path/to/local/config.toml \\\n  --start_date=2023-01-01 \\\n  --platform=firefox_deskop \\\n  --generate-population \\\n  --population-sample-size=1\n")),(0,o.kt)("p",null,"Once preview data has been computed, a link to a Looker dashboard will be printed where data for each metric and statistic is visualized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A preview is available at: https://mozilla.cloud.looker.com/dashboards/experimentation::jetstream_preview?Project='mozdata'&Dataset='tmp'&Slug='ios_search_bar_placement_impact_assessment'\n")),(0,o.kt)("img",{src:"/img/jetstream/jetstream-preview.png",alt:"Jetstream Preview Looker Dashboard",className:"img-sm"}),(0,o.kt)("p",null,"The dashboard shows the computed statistics for each metric in a graph, raw results as they show up in the BigQuery table as well as logs that were written during the analysis. Some additional metadata about the experiment is shown at the top. Also a cost estimate is provided. The estimate is based on the sampled data, as well as a subset of analyses periods and days. The final cost will be much higher."),(0,o.kt)("p",null,"The preview data gets written into the ",(0,o.kt)("inlineCode",{parentName:"p"},"tmp")," dataset in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mozdata")," project by default. Data written to this dataset gets automatically removed after 7 days."))}c.isMDXComponent=!0}}]);