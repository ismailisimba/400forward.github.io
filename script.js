const obj = {
    "params": [
        {
            "initVal": "initKey",
            "action": "login",
            "token": "letMeIn",
            "dataObj": {"name":"Kil",
                        "email":"Roy",
                        "message":"WasHere!",
                    "subject":"Vibes n Inshallah!"}
        }
    ]
  };
  
  var serverC = "";
  var animeC = "";
  
  
  const string1 = (()=>{
    const string = {"str":""};
    if(window.location.hostname.includes("ismailisimba.github.io")){
      string.str = "/home";
    }else if(window.location.hostname.includes("127.0.0.1")){
      string.str = "/fourhundrforw";
    }else{
      string.str = "";
    }
    
    return string.str;
  })();
  (async () => {
        
      
        //const anime = await import(string1+"/js/titleanimation.js");
        //const theme = await import(string1+"/js/themes.js");
        //const serve = await import(string1+"/js/server.js");
      
      //return {anime,theme,serve};
    })().then(()=>{
      //const themes = new theme.themes();
      //const server = new serve.server();
      
      if(window.location.pathname.includes("/pages/")){
        if(window.location.pathname.includes("rates")||window.location.pathname.includes("about")||window.location.pathname.includes("contact")){
            console.log("gothere")
            const form = document.getElementById("send");
            if (form.attachEvent) {
                form.attachEvent("submit", processForm);
            } else {
                form.addEventListener("submit", processForm);
                form.addEventListener("click", processForm)
            }
      
          
        }
      }else{
      }
    });
  
  
    const processForm = (e)=>{
      animeC.startload("sending...");
      e.preventDefault();
      e.stopPropagation();
      const form = e.composedPath()[2];
      const name = form[0].value;
      const number = form[1].value;
      const email = form[2].value;
      const websiteurl = form[3].value;
      const message = `Website : ${websiteurl}<br>${form[4].value}`;
  
      obj.params[0].dataObj = {name,email,number,message}
  
         serverC.startFetch(
            JSON.stringify(obj),
            ``,
            serverC.emailURL,
            "POST",
            animeC.stopload
            )
    
  
    }

    

document.getElementById("svg1").addEventListener("load", function() {
    var doc = this.getSVGDocument();
    var rect = doc.querySelectorAll("#TZ"); // suppose our image contains a <rect>
    rect.forEach(r=>{
        console.log(r.getAttribute("title"));
        r.setAttribute("fill", "green");
        //r.setAttribute("stroke", "black");
        r.classList.remove("st0");
        console.log(r);
    })
    //rect.setAttribute("fill", "red");
    //rect.setAttribute("stroke", "black");
    //rect.classList.remove("st0");
});