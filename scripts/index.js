window.onload=function(){
	// 基础部分的数据存储  逻辑操作
	// 特定用途部分（必须能做到的事）
	// 能表达页面中的任何元素
	// 选取页面中的元素  获取元素信息  对元素进行操作
	// 和浏览器配合监测用户行为（事件）
// window下面的属性  ，在用时不用写window.
// 所有的页面元素对象都定义在window这个对象中
// 选取页面中的元素
// var el=document.getElementById("test");
//    console.log(el);
   var ee=document.getElementsByClassName("a");
    var color=[[-400,-400],[-200,-200],[0,0],[200,-200],[400,-400]];
    var index1=["1","5","10","6","2"];
    var color1=["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
    var timeid;
//    // ee 是一个类数组
   //   el.style.border="5px solid black";
   // 和浏览器配合通过对元素的属性进行操作改变元素的样式
   // 并不是所有的对象都有style属性
   // 对class中的某一元素设置样式  通过  ee[0]. ee[1].
   // 对数组中的所有元素操作      for(var i=0;i<ee.length;i++){ee[i].style.background="red"}
   // window.setInterval(a,1000);这个函数接受两个参数  ，第一个参数是一个回调函数，第二个参数是时间是，
   // 这个函数的功能是每隔s就自动帮我们调回一次传入的回调函数
   // 没有写返回值的函数的值是Undefined
   //  el.onclick=function(){console.log(this.innerHTML);};
    for(var c=0;c<ee.length;c++){
      
      ee[c].style.backgroundImage='url(./img/'+color1[c]+')';
      ee[c].style.backgroundSize="cover";
      ee[c].style.webkitTransform="translate3d("+color[c][0]+"px,0,"+color[c][1]+"px)";
       ee[c].style.zIndex=index1[c];
      
    }
   var d=function(){
   for(var c=0;c<ee.length;c++){
     ee[c].style.webkitTransform="translate3d("+color[c][0]+"px,0,"+color[c][1]+"px)";
      ee[c].style.zIndex=index1[c]; 
       ee[c].onmouseover=function(){
        if(this.style.zIndex=="10"){
          clearInterval(timeid);
        }
        
      }
      ee[c].onmouseout=function(){
        if(this.style.zIndex=="10"){
          clearInterval(timeid);
          timeid=setInterval(d,1000);
        }
      }

    }
     
       
    color.unshift(color.pop());
    color1.unshift(color1.pop());
    index1.unshift(index1.pop());

  }
  timeid=setInterval(d,1000);
 
 }