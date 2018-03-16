
   
$(document).ready(function(){
   
    $(".bt1").click(function(){
        var topPos = Math.random() * 300;
        var colortxt = getRandomColor();
        var txtsize = Math.random() * 16 + 15;
        var bt = $("<p></p>").text($("#txt").val());
        $(bt).css({
            "color":colortxt,
            "top":+topPos+"px",
            "font-size":+txtsize+"px"
         });
         var addToWall = $(".wall").append(bt);
         $("#txt").val("");
         var wid = $(".wall").find("p").width();
         $(".wall p").animate({left:'-'+wid+"px"},30000,function(){
             $(this).remove();
         });
             
    });

    $(".bt2").click(function(){
        $(".wall p").remove();
    });
}); 

function getRandomColor(){
    return '#'+(function(h){
        return new Array(7-h.length).join("0")+h
      })((Math.random()*0x1000000<<0).toString(16))
 }
// $(document).ready(function(){  
    
//       $("#bt").click(function(){  
//           var msgtxt=$("#txt").val();  
//           var colortxt = getReandomColor();  
//           var topPos = generateMixed(3);  
//           if (topPos > 300)  
//           {  
//               topPos = 30;  
//           }  
//           var newtxt = '<p style="top:'+topPos+'px; color:'+colortxt+'">'+$("#txt").val()+'</p>';  
//           $(".wall").prepend(newtxt);  
//           var addTextW = $(".wall").find("p").width();  
//           $(".wall p").animate({left: '-'+addTextW+"px"}, 30000,function(){  
//               $(this).hide();  
//           });  
//       });  
    
//   });  
//   //随机获取颜色值  
//       function getReandomColor(){  
//           return '#'+(function(h){  
//           return new Array(7-h.length).join("0")+h  
//           })((Math.random()*0x1000000<<0).toString(16))  
//       }  
    
//   //生成随机数据。n表示位数    
//       var jschars = ['0','1','2','3','4','5','6','7','8','9'];    
//       function generateMixed(n) {    
//           var res = "";    
//           for(var i = 0; i < n ; i ++) {    
//               var id = Math.ceil(Math.random()*9);    
//               res += jschars[id];    
//           }    
//           return res;    
//       }   
 
  
   
   



