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
      string.str = "/400forward.github.io/";
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
      

    });
  
  


    

