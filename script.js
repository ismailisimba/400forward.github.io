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
        
      
        const cosm = await import(string1+"/js/cosmetics.js");
        const serve = await import(string1+"/js/server.js");
      
      return {cosm,serve};
    })().then(({cosm,serve})=>{
     
    const server = new serve.server();
    const cosmetics = new cosm.cosmetics(server);
      
      if(window.location.pathname.includes("/pages/")){
        if(window.location.pathname.includes("rates")||window.location.pathname.includes("about")||window.location.pathname.includes("contact")){
            console.log("gothere")
            const form = document.getElementById("send");
            console.log(form);
            if (form!==null&&form.attachEvent) {
                form.attachEvent("submit", processForm);
            } else if(form!==null){
                form.addEventListener("submit", processForm);
                form.addEventListener("click", processForm)
            }else{

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
      //const name = form[0].value;
      //const number = form[1].value;
      //const email = form[2].value;
      //const websiteurl = form[3].value;
      //const message = `Website : ${websiteurl}<br>${form[4].value}`;
  
      //obj.params[0].dataObj = {name,email,number,message}
  
         serverC.startFetch(
            JSON.stringify(obj),
            ``,
            serverC.emailURL,
            "POST",
            animeC.stopload
            )
    
  
    }

    

