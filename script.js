document.getElementById("svg1").addEventListener("load", function() {
    var doc = this.getSVGDocument();
    var rect = doc.querySelectorAll("path"); // suppose our image contains a <rect>
    rect.forEach(r=>{
        console.log(r.getAttribute("title"));
    })
    //rect.setAttribute("fill", "red");
    //rect.setAttribute("stroke", "black");
    //rect.classList.remove("st0");
});