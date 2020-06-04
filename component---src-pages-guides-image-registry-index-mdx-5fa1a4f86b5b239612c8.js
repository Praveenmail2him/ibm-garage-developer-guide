(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{IkQA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),s=a("013z"),n=a("T0C+");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var o,c={},l=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={_frontmatter:c},g=s.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(i.b)(g,r({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"The CI/CD pipeline stores container images in an image registry")),Object(i.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"}),"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage. When hosted in IBM Cloud, the ",Object(i.b)(n.a,{name:"env",mdxType:"Globals"})," uses the IBM Cloud Container Registry for storing container images."),Object(i.b)("h2",null,"What is the IBM Cloud Container Registry"),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/cloud/container-registry"}),"IBM Cloud Container Registry")," is a private, multitenant ",Object(i.b)("a",r({parentName:"p"},{href:"https://docs.docker.com/registry/"}),"Docker registry")," built into IBM Cloud for storing ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.opencontainers.org/about"}),"OCI images"),". Each IBM Cloud region hosts its own highly available registry. When deploying an application to a Kubernetes or OpenShift cluster, the cluster creates containers using the images in the registry. To package an application for deployment, the runtime must be built into an image that is stored in the registry. "),Object(i.b)("p",null,"In this standard Docker diagram, the acme.com domain is effectively an IBM Cloud region and the Docker private registry is the instance of IBM Cloud Container Registry in that region."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"770px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADOElEQVQoz1WT728adRzHTxfjP7BkT/wPTDTxif4LZg9MNPGBiZqYzW0xNdMZf8w2rG6u0EbXLE6bdq37kVlwwEppZUXKFThajqMcB9wv7jjujjs47uhKKe2AAl+/98x9kle++T55Je/PD+SuO4wMekcvIbB4UX5PVrWpiqJNVOTqhKxUf4SMy4o2br8ViFrVxxmWd0Q3oy50KzadSGAuNJ5wxrHt2QxZfBt56I8iAICXbaFWM+ZrVgfskCIwrT2r0WgwlmXypmlyNvDPt1r7dKFQbPhW1gBJUoAXJSBwPDB0HTyNRL98QdjrHs8GN0kwMxcYnvS7ZU3Tk1CEQ1EKgkM5LkgqjuMZaezGn6OFJ/HBpau/Dy4uBHs/+WOgiG1dQFrto1OMUH3FFiaJ4u2rv3rBuR/mQQTLVY467VTDNDNQlrEsi1BULcuWZJKli8wDz0r/cQjtOW/d7f3yyHe8tLoBSBw/j/y/yAI3M/coZLr+8JYjMbwgSWJWUVUCCtNNKORKUk7TDYKiKMH9txc88fuHOJEeqjzbV0scWAtvXrDjfjR83j1rC2G8KVnVRZoVsgWKzEVRlFVlmWk9288ftvfTNFemdgtiLk9RlbHrS2DeGwWXr82DscXgwBnAQAGLXULozgjw9b3W6TfPndnYSt+JxTElV2DJIidlDXNP4esWEOvNIUHxgn99i98I/0snsYTwlz/U94Wx/tStxd7McuD5QjAMcqnUeWQsxoOoZGhvvfHJabgyTk2rluwB8CVpN8uWa5+tE8BNK6PdLCM9RXcY/8oqH4lE5GWP58Tjdp8Eg6snpVymqwl25OjniOO3EPj0mzttO7JhNG7A5jN1o7Fz3DlIPl7HKl9Nu8F3M8sjTpDJzuHBdlmp4QSxK12ZugfuB+Kjb533RpeX1gbTgQSg4uhF5NXXP/4Qee39d22hrtdmYR/1umHQB61njC+Eqd+7Hra/vr7YDqNJRSoLoiRJJZahq95/YiC0nQezcx4wt4aOfMksyKfTX7ww5VJZ/gCuhgvigJcyuddsOrrHhxMH+01HOk38jG2nbqZw4ia8nGsljp0s5KlJSRQmKyzjUEXBVRTkd/4Dv+CA/7UzeJIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Docker Registry",title:"Docker Registry",src:"/static/706cf51080d513375556803907eae85d/e926f/docker-registry.png",srcSet:["/static/706cf51080d513375556803907eae85d/7fc1e/docker-registry.png 288w","/static/706cf51080d513375556803907eae85d/a5df1/docker-registry.png 576w","/static/706cf51080d513375556803907eae85d/e926f/docker-registry.png 770w"],sizes:"(max-width: 770px) 100vw, 770px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The diagram shows these components and their relationships:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Developer")," builds the image; ideally it is automated as part of a CI pipeline"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Docker private registry")," stores the image that was built"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"UAT"),", ",Object(i.b)("strong",{parentName:"li"},"Promote"),", and ",Object(i.b)("strong",{parentName:"li"},"Production")," are deployment environments, such as Kubernetes clusters or namespaces, that run the containers based on the image")),Object(i.b)("h3",null,"Accessing the registry"),Object(i.b)("p",null,"There are two ways to work with an ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry"}),"IBM Cloud registry"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Web UI"),": In the IBM Cloud console, navigate to either ",Object(i.b)("strong",{parentName:"li"},"Kubernetes")," or ",Object(i.b)("strong",{parentName:"li"},"OpenShift")," and then ",Object(i.b)("strong",{parentName:"li"},"Registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CLI"),": Use the ",Object(i.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_setup_cli_namespace"}),"container-registry CLI plug-in")," in the IBM Cloud CLI")),Object(i.b)("p",null,"Of the two approaches, the CLI is much more powerful. The console is mainly for looking at your registry."),Object(i.b)("p",null,"When you installed the ",Object(i.b)("a",r({parentName:"p"},{href:"/getting-started/prereqs"}),"prerequisites"),", part of installing the IBM Cloud CLI installed several other tools and plug-ins including the container-registry plug-in."),Object(i.b)("p",null,"To use the container-registry plug-in, or even to push an image into the registry using your local Docker install (another of the ",Object(i.b)("a",r({parentName:"p"},{href:"/getting-started/prereqs"}),"prerequisites"),"), you must first log into IBM Cloud and then log into the region’s IBM Cloud Container Registry:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ ibmcloud login\n\n$ ibmcloud cr login\n")),Object(i.b)("p",null,"The logins ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-iam"}),"determine the namespaces you can access"),". Other accounts for other tenants also have namespaces in the registry, but IBM Cloud doesn’t let you see them and prevents you from accessing their images."),Object(i.b)("h2",null,"Registry organization"),Object(i.b)("p",null,"Like the directories and file names in a file system, a Docker registry is a single collection of images that is cataloged with hierarchical names. A Docker registry such as Docker Hub (or, as we’ll see, a registry in IBM Cloud) stores an image with a hierarchical name: namespace, repository, and tag. This path is specified when tagging and pushing the image:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ docker tag <image> <namesapce>/<repo-name>:<tag>\n\n$ docker push <namesapce>/<repo-name>:<tag>\n")),Object(i.b)("p",null,"To tag and push an image to any registry other than Doker Hub, you have to specify its domain as part of the path:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ docker push <domain>/<namesapce>/<repo-name>:<tag>\n")),Object(i.b)("h3",null,"Registry organization in an IBM Cloud account"),Object(i.b)("p",null,"IBM’s registry organizes images in this same hierarchical structure."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Domain"),": ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_overview#registry_regions_local"}),"Each region")," in IBM Cloud (e.g. Dallas, London, Sydney, etc.) has its own multitenant registry instance with its own domain name (such as ",Object(i.b)("inlineCode",{parentName:"p"},"us.icr.io")," for Dallas/us-south). IBM provides its ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-public_images"}),"public images")," in a global registry (domain ",Object(i.b)("inlineCode",{parentName:"p"},"icr.io")," (no region))."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Namespace"),": A namespace is associated with an IBM Cloud account and groups the account’s images. Every user in the account can view and work with all images in the namespace, but users outside of the account cannot access images in the account’s namespaces. An account may use multiple namespaces to organize images for groupings such as development vs. production or approved vs. experimental. Each namespace must have a name that is unique within a region for all accounts (not just your account)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Repoitory"),": A repo is often thought of as the name of the image, but techincally the same image can have different names (but the same image ID). Within a registry, different images with the same name stored in the same namespace will be stored in the same repo as long as they have different tags."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tag"),": Optional; if a command does not specify it, the default tag is ",Object(i.b)("inlineCode",{parentName:"p"},"latest"),". Two different tags enable a namesapce to store two images with different image IDs but the same repository name. The tag typically specifies a different build of an image with a different image ID. Two builds usually package two different versions of an application’s code, but Docker does not enforce that. The two builds could just be the same Dockerfile run twice with the same inputs (and therefore equivalent), or two completely unrelated sets of software. But two builds usually run software that is similar but at least slightly different, such as a new version of an application’s code, but could be simply an alternative implementation of the code (such as for A/B testing)."),Object(i.b)("p",null,"Therefore, when ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-getting-started#gs_registry_images_pushing"}),"adding an image to a registry in IBM Cloud"),", the push command specifies the image’s hierarchical path like this:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker push <region>.icr.io/<my_namespace>/<image_repo>:<tag>\n")),Object(i.b)("p",null,"You can see this structure when you show the regestry using the CLI:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ ibmcloud cr image-list\nListing images...\n\nRepository                                                Tag        Digest          Namespace           Created        Size      Security status   \nus.icr.io/showcase-dev-iks/template-graphql-typescript    1.0.0      6b3575c122e9    showcase-dev-iks    6 hours ago    303 MB    5 Issues   \nus.icr.io/showcase-dev-iks/template-graphql-typescript    1.0.0-5    6b3575c122e9    showcase-dev-iks    6 hours ago    303 MB    5 Issues   \nus.icr.io/showcase-dev-iks/template-java-spring           1.0.0      24f3cdf69605    showcase-dev-iks    7 hours ago    213 MB    No Issues \nus.icr.io/showcase-dev-iks/template-java-spring           1.0.0-14   24f3cdf69605    showcase-dev-iks    7 hours ago    213 MB    No Issues\n")),Object(i.b)("p",null,"Notice the columns labeled ",Object(i.b)("em",{parentName:"p"},"Repository")," (which is domain/namespace/repo) and ",Object(i.b)("em",{parentName:"p"},"Tag"),"—those comprise the path for finding each image. And ",Object(i.b)("em",{parentName:"p"},"Namespace")," is specified again in its own column, which is useful for filtering searches."),Object(i.b)("p",null,"You can also see that the first two items in the list are not two separate images but really the same image with two tags: the image ID (a.k.a. digest) is the same, so the two tags are two different ways to look up the same image. Likewise, the last two images are really the same image with two tags."),Object(i.b)("p",null,"The registry in the IBM Cloud console shows the same images:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1141px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5ElEQVQY031Q2XLDIAz0//9gpw/pMbGDuS+DDTjeCidN38rMzgohpF0NXyOHNOGE9Qk+rnCEkAqWXP9FWivVF3zPEZ8swIQNAxMG06zAuIbUDrO04MrBhYy87c+P7YW8tbPRX9xgY4XyDxFDWFbcuCSFHmtpCMtGfEekxx4vuSE+FXW2NKjH3UV3Y+jOlUWmxj0/+JAwTR7Xm4BxAdr+wp/ch5S6v8C4otXEk2dpYMjZyBSpfaxgCL3hR8Hb+4UsawipYKzDVgqUsUgpo5/jOE7WlGNcgAsJ6zyEnjGqiLbvpLLiB56Bf3wF8FkxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Registry Console",title:"Registry Console",src:"/static/1b56b12fa78f4dfd20215937368ece2f/4e1f8/registry-console.png",srcSet:["/static/1b56b12fa78f4dfd20215937368ece2f/7fc1e/registry-console.png 288w","/static/1b56b12fa78f4dfd20215937368ece2f/a5df1/registry-console.png 576w","/static/1b56b12fa78f4dfd20215937368ece2f/4e1f8/registry-console.png 1141w"],sizes:"(max-width: 1141px) 100vw, 1141px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"It shows more clearly that each image has two tags, rather than being two different images."),Object(i.b)("h2",null,"IBM Cloud Container Registry features"),Object(i.b)("p",null,"IBM Cloud Container Registry is not only a Docker registry hosted in IBM Cloud, it adds several features to the registry service. The registry in each region is private, multitenant, and highly available—properties that a simple registry doesn’t have. Here are some other features and capabilities."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/va"}),Object(i.b)("strong",{parentName:"a"},"Vulnerability Advisor"))," scans images in the registry to search for known security issues and generates reports with advice on how to fix your images and better secure your environment. Lists of the vunerabilities scanned for are available in ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/va?topic=va-va_index#packages"}),"Vulnerable packages"),". An administrator can specify exemptions that should not be reported. ",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_release_notes#27jun2019"}),"Running containers are not scanned"),", just the images in the registry. In the image lists shown above, the ",Object(i.b)("em",{parentName:"p"},"Security status")," column shows the number of issues found; the report will explain them in greater detail. In the console, click on the number of issues for details."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_trustedcontent"}),Object(i.b)("strong",{parentName:"a"},"Trusted content technology")),": IBM Cloud Container Registry supports images signed using ",Object(i.b)("a",r({parentName:"p"},{href:"https://docs.docker.com/engine/security/trust/content_trust/"}),"Docker Content Trust (DCT)"),". The signature confirms who built the image, such as the CI tool. The push and pull commands maintain image signatures."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-security_enforce#security_enforce"}),Object(i.b)("strong",{parentName:"a"},"Container Image Security Enforcement"))," verifies container images before deploying them to a cluster. You can control where images are deployed from, enforce Vulnerability Advisor policies, and ensure that content trust is properly applied to the image. If an image does not meet your policy requirements, the pod is not deployed to your cluster or updated."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-iam"}),Object(i.b)("strong",{parentName:"a"},"User authorization")),": While all users in an account have access to that account’s namespaces in the registry, an account manager can use IAM to manage the access for different users. For example, a common customer concern is: “How can an administrator control which images can be downloaded from Docker Hub and deployed into production?” By using IAM to control access to the registry, a manager can disable the ability to push, build, or delete images, then create a policy to allow these actions and only assign it to certain trusted users such as the CI pipeline’s service ID. These privileged users should only add approved images into the registry, thereby limiting the containers that the developers can deploy. The managers can likewise limit what the CD pipeline can possibly deploy to production by creating a namespace that only includes images approved for production and restricing the CD pipeline to deploy from that namespace."),Object(i.b)("h2",null,"Image registry in the Pipeline"),Object(i.b)("p",null,"The CI and CD pipelines currently exchange two types of artifacts: Docker images and Helm charts. The CI pipeline (",Object(i.b)("a",r({parentName:"p"},{href:"/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",r({parentName:"p"},{href:"/guides/continuous-integration-tekton"}),"Tekton"),", etc.) builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Docker images"),": This Developer Tools Image Registry"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Helm charts"),": A ",Object(i.b)("a",r({parentName:"li"},{href:"/guides/artifact-management"}),"Helm repository in Artifactory"))),Object(i.b)("p",null,"In the CI pipeline, the ",Object(i.b)("em",{parentName:"p"},"Build image")," stage creates the Docker image and stores it in the registry. Then the ",Object(i.b)("em",{parentName:"p"},"Deploy to DEV env")," stage specifies the image’s path in the Helm chart’s values file, which the chart will use to deploy the app. Likewise, the CD pipeline specifies the image’s registry path in the values files for the other deployments. When the Helm chart runs, it and Kubernetes read the image from the registry and start the containers."),Object(i.b)("h2",null,"Give it a try"),Object(i.b)("p",null,"Let’s take a look at using the registry."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you haven’t already, ",Object(i.b)("a",r({parentName:"p"},{href:"/getting-started/deploy-app"}),"deploy your first app")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For example, deploy the ",Object(i.b)(n.a,{name:"template",mdxType:"Globals"})," named Typescript Microservice"),Object(i.b)("li",{parentName:"ul"},"I deployed my in a project named dev-guide-example-bw"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the IBM Cloud console, navigate to either ",Object(i.b)("strong",{parentName:"p"},"Kubernetes")," or ",Object(i.b)("strong",{parentName:"p"},"OpenShift")," and then ",Object(i.b)("strong",{parentName:"p"},"Registry")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It doesn’t matter whether you navigate via the Kubernetes panel or the OpenShift panel, the share the same registry"),Object(i.b)("li",{parentName:"ul"},"The registry is the IBM Cloud Container Registry for your region"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the registry, search for the image named for your project\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyElEQVQY032P2Y7DMAhF8/8/WXWkumkWL3h3It0Cjap5GM3DEfYFLjDF3HF/LNhcVEKs8IzEVMa/ZMZRw+1Jio8NkyTMa8dzYTjOq8W8ODXXpnp849+coDQQUte6SURKBT9mhpk3FjtKO1EZyVmfEfPAZiPkGkcFqyW9QN5msfou12A1dD7hZQp2R2wQsO6ONULrclZF5IGBkmry9yHyeQmWzaxL6MeJ3mXby1AarJMNGm+blT4ODC5Uxif+1mrratzYqHG+XYZvGW+BiKLSy/4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Registry Console Images",title:"Registry Console Images",src:"/static/21c28717686be8acf5cc8d48180c85ea/3cbba/console-image-list.png",srcSet:["/static/21c28717686be8acf5cc8d48180c85ea/7fc1e/console-image-list.png 288w","/static/21c28717686be8acf5cc8d48180c85ea/a5df1/console-image-list.png 576w","/static/21c28717686be8acf5cc8d48180c85ea/3cbba/console-image-list.png 1152w","/static/21c28717686be8acf5cc8d48180c85ea/77a69/console-image-list.png 1155w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the CLI, run the corresponding command"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ ibmcloud cr image-list | grep dev-guide-example-bw\nus.icr.io/mooc-team-one/dev-guide-example-bw                 1.0.0     a2138c3025ac   mooc-team-one    4 hours ago    286 MB   5 Issues\nus.icr.io/mooc-team-one/dev-guide-example-bw                 1.0.0-1   a2138c3025ac   mooc-team-one    4 hours ago    286 MB   5 Issues\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Back in the console, click on the image to see its details\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"866px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACHElEQVQ4y5VTyW4TQRCdn4ADhIDgQiSUsMhIBILgwncjgnDiPTFGHAKxY49nPOPZ982PqhpPCKeIlp+quqr6dfXUs/Lo5Xs8aX3E3uEn3N17jTtPW2RbYh+/+oDd50d4cPAOuy+OsHPwFg+pfmefLO05xme45v7+Ie49ewOlOxqjM/qOb/0xjk+HaPdG+Nwe4KQ/wtfTHo5PuvjS7qAzOMNw/IMwweB8IpbRPxujRxzd4blAAa2fFwayvGIX1WYD+snKiwJlWYq/kfjmH/9mrFlKlmeYTHS4bgTHdWGuLawtW+B4niAIQ8p5WNsOLALnTAbVGoQ4SVBVlVyuVNUGTpRDs2Lk1EyaZnTYRxjF+N/FXEoY5/h9pcGiDtk3bR8XUxWuHyNKCqg6dWF5iNMSQZRhtlhhvjQl5zghLmcaphTTDFtiQrhcWViZrhB6QYJfMxVXqiH+cmVjoa2lmPPsT+c6fPIDO8Dl1MDc8OFTLeeFcK6ZmKkrIVlo9e0NQZwWAvbrfXmdiyRX7xuryOE4RZblyPNCwIO7FdtvVpaVWD7PPELIwTRNEYYRtR7IRF3Pp+/oi/V8RlDHtuCaLM+vB1KW1GWS/SW0HVcmy6MvCOUWLIeioBhpkpE3ll7CuVqXDGoq2z6ZEzVhRMHs+oA84xb5NMJmjiS9QShCpmewcFVNx1JfYbHUBSxiiy4UURNs+gOwoFmzDakQUod/AJOVt9nq81DLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Registry Console Image Details",title:"Registry Console Image Details",src:"/static/05cc5bf9c179b667b6689cebd71ec8d4/dc769/console-image-details.png",srcSet:["/static/05cc5bf9c179b667b6689cebd71ec8d4/7fc1e/console-image-details.png 288w","/static/05cc5bf9c179b667b6689cebd71ec8d4/a5df1/console-image-details.png 576w","/static/05cc5bf9c179b667b6689cebd71ec8d4/dc769/console-image-details.png 866w"],sizes:"(max-width: 866px) 100vw, 866px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("strong",{parentName:"p"},"Security Status"),", click on ",Object(i.b)("strong",{parentName:"p"},"5 issues")," to see the issues that Vulnerability Advisor found in this image"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"What it found was configuration issues\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"786px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAu0lEQVQY012QMQ7CMAxFeziuxBE4AWdgZmbhAgzsjIAoaVpIoLRp0uRRF4QqLH3J/j/+tpM1bYvSJV3nSSkRY/xA8mk95f+5HxKZ9x7nAn2fSJERJIY60g+PZMg0pFHij/5pmSSbw5LFdkbjLaZV6PpISB1+2NoYQ1FWXJXmfMnHS7TW3I0lVwX5tUBXN1RR0jr3Mdyd1qz2c3zveH1NQ+zGLeVL7OPJbTCu7gYfAtZannU9moqZ6KLJsDcWWDRqkSpO4gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Registry Console Image Issues Overview",title:"Registry Console Image Issues Overview",src:"/static/1ff1aee2cbbf3aec4836f7712cbc25da/86c0d/console-image-issues-overview.png",srcSet:["/static/1ff1aee2cbbf3aec4836f7712cbc25da/7fc1e/console-image-issues-overview.png 288w","/static/1ff1aee2cbbf3aec4836f7712cbc25da/a5df1/console-image-issues-overview.png 576w","/static/1ff1aee2cbbf3aec4836f7712cbc25da/86c0d/console-image-issues-overview.png 786w"],sizes:"(max-width: 786px) 100vw, 786px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Scroll down to see the list of configuration issues\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABKklEQVQoz1WR607DMAyF9/4PiBACMQmNkjVJc780bQ+2uyHx45Ndxz4+SS8vb594fb/i43qDXiJmG6BtlNwIib4DlElYQkOuA6msf+S6Su3JJeaGkCqKHHTKGzzBwsYlWJ/hQqFaR8z/h5/iXGc4v+TS8fWtBG09CRaM7YC5GyhiUprqDilX+JgFF5JgXRQT3L+OHbWTwzEGQkyIKcGHKPlxHNhyQQh01Vnj+0fhNimJk7pjcU56GZ5LOaO1hn3fcel9hbELvZUTLLHRQfMBnuDabKz06Ee0i0cu9Vy87cQmjLGxw002OXIjkURyrejkdCExdjhrK2JP4VkbcpZRa0MlZxxPcRLkg0nN8h7cuDhPP6ii0TUKueABXspPw5xOzry1Lgu4f330/AKdwxpzNzuDFwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Registry Console Image Issues Config",title:"Registry Console Image Issues Config",src:"/static/68047791a01185dd643196ef317bd0da/3cbba/console-image-issues-config.png",srcSet:["/static/68047791a01185dd643196ef317bd0da/7fc1e/console-image-issues-config.png 288w","/static/68047791a01185dd643196ef317bd0da/a5df1/console-image-issues-config.png 576w","/static/68047791a01185dd643196ef317bd0da/3cbba/console-image-issues-config.png 1152w","/static/68047791a01185dd643196ef317bd0da/6d895/console-image-issues-config.png 1209w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"We’ve seen that the CI pipeline packages an app as a Docker image and stores it in the registry, and also builds a Helm chart that references the image in the registry so that the chart can deploy containers built from the image."),Object(i.b)("p",null,"In IBM Cloud, the registry is the IBM Cloud Container Registry. The registry displays all of the namespaces in your account but not those in other tenants’ accounts. In addition to basic registry functions, IBM Cloud adds additional features: private, multitenant, highly available, Vulnerability Advisor, Trusted content technology, Container Image Security Enforcement, and User authorization. Using the registry, you can see your list of images, details about the image, and details about any issues that Vulnerability Advisor found."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-image-registry-index-mdx-5fa1a4f86b5b239612c8.js.map