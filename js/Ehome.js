/**
 * Created by luqingying on 2018/4/24.
 */
function loginname(name) {
    var title = document.getElementById("login").getElementsByTagName("h1")[0];
    if(name == "yh")
        title.innerHTML = "Subscriber Login";
    else if(name == "zyz")
        title.innerHTML = "Volunteer Login";
    else if(name == "gzry")
        title.innerHTML = "Personnel Login";
}
function registername(name) {
    var registertitle = document.getElementById("register").getElementsByTagName("h1")[0];
    if(name == "yh")
        registertitle.innerHTML = "Subscriber Register";
    else if(name == "zyz")
        registertitle.innerHTML = "Volunteer Register";
}