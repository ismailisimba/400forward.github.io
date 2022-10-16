export {cosmetics as cosmetics};
const tmp = {};

class cosmetics {
    
    constructor(server){
     this.svGStuff = svGStuff;
     this.mobMenuClicks = mobMenuClicks;
     this.captcha = this.captcha; 
     this.serverC = server;
     tmp["s1"] = server;
     svGStuff();
     mobMenuClicks();
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
          let name = document.getElementById("contactname");
          let email = document.getElementById("contactemail");
          let message = document.getElementById("contactmessage");
          console.log(resObj)
          if(resObj.status==="pass"&&name.value.length>3&&email.value.length>6&&message.value.length>9){
        
            mom.innerHTML = "";
            mom.style.backgroundColor = "green";
            mom.style.color = "black";
            mom.innerHTML = "Success!"
        
            let tempyTimy = window.setTimeout(function(){
              sendAStrangersHail();
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
}

