/*
 * 上传图片
 * fname是后台参数
 * url1：图片上传的java方法路劲
 * url2：图片文件读取的java方法路劲
 */
function changeImgFileUp(url1,url2) {
    $.ajaxFileUpload({
        url:path+url1,
        dataType: 'json',
        fileElementId: 'change_img',//input[type=file]的id
        secureuri:false,  
        success:function(data, status){
            if(data!=null){
                var fname = data.fname;
                $("#head_imgurl").attr("src", url2+"?fname="+fname);
                $("#cpath_1").val(data.path+data.fname);
                $("#upload_btn").css("display","inline-block");
            }

        },
        error: function (data, status, e) {  
            alert(e);  
        }  
    });

}
/*
 * 保存图片（保存到数据库中）
 * id、path、time_stamp、sig 后台的一些参数
 */
function saveHeadImg(url){
    var realcode = getCookie("member");//获取会员id,向后台传的参数
    var cpath1 = $("#cpath_1").val();
    $.ajax({
        url:path+url,
        type: "get",
        data:{'id':realcode,'path':cpath1,'time_stamp':getTimestamp(),'sig':getSig('portraitModification')},//{'后台的参数':前端向后台传的参数，根据项目方法不同而不同}
        dataType: 'jsonp',
        jsonp : "callback",
        cache: false,
        success:function(d){
            alert("上传成功~"); 
            $("#upload_btn").css("display","none");
        },
        error: function(e){
            alert(e);
        }
    });
}



 function imgFileClick(){
        $("#change_img").click();
 }
// $("#file_onchange").click(imgFileClick());
//选项卡--互动，关注，收藏，时光轴，发布
 function setTab(name,cursel,n){
        for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className=(i==cursel)?"hover":"";
        con.style.display=(i==cursel)?"block":"none";
    }
}

/*头像上传*/
// var file=document.getElementById("file_change");
// var change_img=document.getElementById("change_img");
// var capth_1=document.getElementById("capth_1");

/*上传头像*/
