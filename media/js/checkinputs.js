/**
 * Created by WangJian on 2014/11/15.
 */

function checkbyobj(obj){
    var flag=true;
    for(var p in obj){
        var e = document.getElementById(p);
        if(e==null){
            continue;
        }
        if(e.value==""){
            e.style.border = "solid 1px red";
            flag = false;
        }else {
            e.style.border = null;
            if(obj[p]==e.value){
                e.style.color = "black";
            }else{
                e.style.color="red";
                flag = false;
            }
        }
    }
    return flag;
}

function putyz(yzid,yzsrc){
    $("#"+yzid).html("<img src='"+yzsrc+"'/>");
    return true;
}

function checkAnswer(title,url){
    art.dialog.open(url,{
        id:'',
        title:title,
        width:800,
        height:650,
        lock:true
    });
}