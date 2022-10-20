export {cosmetics as cosmetics};
const tmp = {};

class cosmetics {
    
    constructor(server){
     this.svGStuff = svGStuff;
     this.mobMenuClicks = mobMenuClicks;
     this.captcha = this.captcha;
     this.homeAni = homeAni;
     this.intersectAnime = intersectAnime; 
     this.serverC = server;
     tmp["s1"] = server;
     svGStuff();
     mobMenuClicks();
     homeAni();
     intersectAnime();
     this.captcha()
        
    }


    captcha(){
        const ele = document.querySelectorAll(".simplecaptchamom")[0];
        if(ele!==null&&ele!==undefined&&ele.nodeType){
            fetcher({},"first",firstDisp);
        }else{
            console.log("no captcha on this page")
        }
    
    
        async function fetcher(data,action,funcAft){

            tmp.s1.startFetch(
                JSON.stringify(data),
                `?paraOne=${action}`,
                tmp.s1.captchaURL,
                "POST",
                funcAft
                )
            
            }
    
    function firstDisp(resObj){
        resObj = JSON.parse(resObj);
    
        let captchaItemsCont = document.querySelectorAll(".captchaitems");
        
        let img1 = captchaItemsCont[0].querySelectorAll("img")[0];
        img1.src = `data:image/jpeg;base64,${resObj.ghh.l11}`;
        
        let img2 = captchaItemsCont[2].querySelectorAll("img")[0];
        img2.src = `data:image/jpeg;base64,${resObj.ghh.l12}`;
        
        captchaItemsCont[4].value = "?";
        
        captchaItemsCont[4].addEventListener("input",checkAnswer)
        
        if(resObj.symbol===0){
          captchaItemsCont[1].innerHTML = "+";
        }else{
          captchaItemsCont[1].innerHTML = "+";
        }
        captchaItemsCont[3].innerHTML = "=";
        
          tmp["cloudCaptcha"] = resObj;
        }
        
        
        function checkAnswer(){
          let val = this;
          val.removeEventListener("input",checkAnswer);
        
          let timeOutkk = window.setTimeout(function(){
        
            val = val.value;
            let objee = {};
                objee["one"] = val;
                objee["two"] = tmp.cloudCaptcha.ghh.eqid;
        
              if(val.length>=1){
               console.log(objee);
                fetcher(objee,"second",funcToHook);
              }
        
              window.clearTimeout(timeOutkk);
        
          },1000);
         
         
        }
        
        function funcToHook(resObj){
            resObj=JSON.parse(resObj);
          let mom = document.querySelectorAll(".simplecaptchamom")[0];
          let name = document.getElementById("contactname").value;
          let email = document.getElementById("contactemail").value;
          let message = document.getElementById("contactmessage").value;
          console.log(resObj)
          if(resObj.status==="pass"&&name.length>3&&email.length>6&&message.length>9){
        
            mom.innerHTML = "";
            mom.style.backgroundColor = "green";
            mom.style.color = "black";
            mom.innerHTML = "Success!"
        
            let tempyTimy = window.setTimeout(function(){
                    //animeC.startload("sending...");
                    //e.preventDefault();
                    //e.stopPropagation();
                   // const form = e.composedPath()[2];
                    //const name = form[0].value;
                    //const number = form[1].value;
                    //const email = form[2].value;
                    //const websiteurl = form[3].value;
                    //const message = `Website : ${websiteurl}<br>${form[4].value}`;
                    obj.params[0].dataObj = {name,email,message}
                
                       tmp.s1.startFetch(
                          JSON.stringify(obj),
                          `?paraOne=400email`,
                          tmp.s1.emailURL,
                          "POST",
                          ()=>{
                            alert("Email Sent!");
                            window.location.reload();
                          }
                          )
                  
                
                  
              window.clearTimeout(tempyTimy);
            },690);
          }else{
           let ans = mom.querySelectorAll("textarea")[0];
           ans.value = "X!";
           fetcher({},"first",firstDisp);
          }
          
        }
    }
}



const svGStuff = () => {
    const svGG = document.getElementById("svg1");
    if(svGG!==null && svGG.nodeType){
        svGG.addEventListener("load", function() {
            var doc = this.getSVGDocument();
            var rect = doc.querySelectorAll("#TZ"); // suppose our image contains a <rect>
            rect.forEach(r=>{
                //console.log(r.getAttribute("title"));
                r.setAttribute("fill", "green");
                //r.setAttribute("stroke", "black");
                r.classList.remove("st0");
                //console.log(r);
            })
            //rect.setAttribute("fill", "red");
            //rect.setAttribute("stroke", "black");
            //rect.classList.remove("st0");
        });
    } 
    
}

const mobMenuClicks = () =>{
    const mobButt = document.querySelectorAll(".mobimg")[0];
    const logo = document.getElementById("logo");
    const y = document.getElementById("y");
    mobButt.addEventListener("click",(e)=>{
        const stat = e.target.getAttribute("alt");
        console.log(stat);
        if(stat==="closed"){
            e.target.src = "./images/menuopen.webp";
            e.target.setAttribute("alt","open");
            const temp = document.querySelectorAll(".menu1")[0];
            temp.style.transform = `translateY(0)`;
            console.log(temp);
        }else{
            e.target.src = "./images/menuclose.webp";
            const temp = document.querySelectorAll(".menu1")[0];
            temp.style.transform = `translateY(-100%)`;
            e.target.setAttribute("alt","closed");
        }
    })
    logo.addEventListener("click",(e)=>{
      if(window.location.pathname.includes("pages")){
        window.location.href = "../";
      }else{
        window.location.href = "./";
      }
    })
    y.addEventListener("click",(e)=>{
      if(window.location.pathname.includes("pages")){
        window.location.href = "../#newy";
      }else{
        window.location.href = "./#newy";
      }
    })
}

const homeAni = ()=>{
  if(window.location.pathname.includes("pages")){
    console.log("Not home page.");
  }else{
    console.log("Run Animation...");
    document.querySelectorAll("#svg1")[0].addEventListener("load",homeAni);
    const doc = document.querySelectorAll("#svg1")[0].getSVGDocument().querySelectorAll("path");
    tmp["counterT"] = 0;
    const inTerv = window.setInterval(()=>{
      if(tmp.counterT>60){
        tmp.counterT = 0;
        resetSVGit(doc);
      }else{
        var r = doc[tmp.counterT]; // suppose our image contains a <rect>
        loadSVGit(r);
        tmp.counterT++;
      }

    },1692)
  }

}


const loadSVGit =(r)=> {
  r.setAttribute("fill", "#a2a9ad");
  r.setAttribute("stroke", "#fff");
   r.classList.remove("st0");
  //r2.setAttribute("fill", "#fff");
  }


  const resetSVGit =(d)=> {
   d.forEach(r=>{
    r.setAttribute("fill", "#fff");
    r.setAttribute("stroke", "#fff");
    r.classList.add("st0");
   })
  }


  const intersectAnime = () =>{
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.169
    }
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = `translateX(0px)`;
        }
      });
    }
    let observer = new IntersectionObserver(intersectionCallback, options);
    let target = document.querySelectorAll('.childdivimg');
    target.forEach(t=>{
      observer.observe(t);

    })   
  }

