//CSS
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                const style = document.createElement("style");
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert("CSS加载失败");
            }
        }
    };
    request.send();
};
//JS
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/2.js");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.head.appendChild(script);
            } else {
                alert("JS加载失败");
            }
        }
    };
    request.send();
};

//HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/3.htm");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                const div = document.createElement("div");
                div.innerHTML = request.response;
                document.head.appendChild(div);
            } else {
                alert("HTML加载失败");
            }
        }
    };
    request.send();
};
//XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/4.XML");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName("Warning")[0].textContent;
                console.log(text.trim());

            } else {
                alert("XML加载失败");
            }
        }
    };
    request.send();
};
//JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/5.JSON");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                console.log(typeof request.response);
                console.log(request.response);
                const bool = JSON.parse(request.response);
                console.log(typeof bool);
                console.log(bool);
            } else {
                alert("HTML加载失败");
            }
        }
    };
    request.send();
};

//分页
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/page${n+1}");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if(request.status >= 200 & request.status <300) {
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
            }
            n+1
        }
    };
    request.send();
};