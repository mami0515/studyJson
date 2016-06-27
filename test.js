// Set Global YAHOO
YAHOO = typeof YAHOO === "undefined" ? {} : YAHOO;
YAHOO.JP = typeof YAHOO.JP === "undefined" ? {} : YAHOO.JP;
YAHOO.JP.idpf = typeof YAHOO.JP.idpf === "undefined" ? {} : YAHOO.JP.idpf;
var IDPF = YAHOO.JP.idpf;

/**
 * 汎用的な関数
 * @class Util
 * @namespace YAHOO.JP.idpf
 */
YAHOO.JP.idpf.Util = {
    /**
     * XMLHttpRequestオブジェクトを作成する
     * @method createXHR
     * @return {object} XMLHttpRequestオブジェクト
     */
    createXHR: function() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                return new ActiveXObject("MSXML2.XMLHTTP.6.0");
            } catch (e1) {
                try {
                    return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                } catch (e2) {
                    try {
                        return new ActiveXObject("MSXML2.XMLHTTP");
                    } catch (e3) {
                        return null;
                    }
                }
            }
        } else {
            return null;
        }
    }
};

document.getElementById("btn").addEventListener("click", function(e){
  var xhr = YAHOO.JP.idpf.Util.createXHR(),
      response;
  xhr.open("GET", "sample.php");
  xhr.setRequestHeader("Authorization", "Bearer xxxxxxxxxx");
  xhr.send(null);
  e.preventDefault();
  
  xhr.onreadystatechange = function(e){
    if(this.readyState === 4){
      if(this.status === 200){
        response = xhr.responseText.replace(/<!--.*-->/, "");
        response = JSON.parse(response);
        console.log(response.email);
        console.log(response.address.formatted);
        document.getElementById("email").value = response.email;
      }
    }
  };
});

//var xhr = 


