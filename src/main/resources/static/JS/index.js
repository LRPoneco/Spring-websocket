function fasong(data){
    var str = document.getElementById("text");
    var div = document.getElementById("div");
    if(str.value!=""){
        var str0="";
        var count=0;
        var str1 = Array.from(data);
        for(var i=0;i<str1.length;i++){
            if(i>25){
                str0 +="<br/>"
                i=0;
            }
            if(count==str1.length){
                break;
            }
            str0+=str1[count];
            count++;
        }
        div.innerHTML +=
            "<div class='div'>"+
            "<ul class='right'>"+
            "<li class='cueright'><p>"+str0+"</p></li>"+
            "<li><img src='image/headg.png''></li>"+
            "</ul>"+
            "</div>";
    }
    div.scrollTop = div.scrollHeight;
    document.getElementById("text").value =""
}
function jieshou(data){
    var div = document.getElementById("div");
    var str0="";
    var count=0;
    var str1 = Array.from(data);
    for(var i=0;i<str1.length;i++){
        if(i>25){
            str0 +="<br/>"
            i=0;
        }
        if(count==str1.length){
            break;
        }
        str0+=str1[count];
        count++;
    }
    div.innerHTML +=
        "<div class=\"div\">\n" +
        "        <ul class=\"left\">\n" +
        "            <li><img src='image/headg.png'></li>\n" +
        "            <li class=\"cueleft\"><p>"+str0+"</p></li>\n" +
        "        </ul>\n" +
        "    </div>";
    document.getElementById("text").value =""
    div.scrollTop = div.scrollHeight;
}