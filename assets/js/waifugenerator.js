$(document).ready(function() { var images = [
   'https://crossface.cf/waifus/1.png', 
   'https://crossface.cf/waifus/2.png', 
   'https://crossface.cf/waifus/4.png',
   'https://crossface.cf/waifus/5.png',
   'https://crossface.cf/waifus/7.png',
   'https://crossface.cf/waifus/8.png',
   'https://crossface.cf/waifus/9.png',
   'https://crossface.cf/waifus/10.png',
   'https://crossface.cf/waifus/11.png',
   'https://crossface.cf/waifus/12.png',
   'https://crossface.cf/waifus/13.png',
   'https://crossface.cf/waifus/14.png',
   'https://crossface.cf/waifus/16.png',
   'https://crossface.cf/waifus/17.png',
   'https://crossface.cf/waifus/18.png',
   'https://crossface.cf/waifus/19.png',
   'https://crossface.cf/waifus/20.png',
   'https://crossface.cf/waifus/21.png',
   'https://crossface.cf/waifus/22.png',
   'https://crossface.cf/waifus/24.png',
   'https://crossface.cf/waifus/26.png',
   'https://crossface.cf/waifus/27.png',
   'https://crossface.cf/waifus/28.png',
   'https://crossface.cf/waifus/29.png',
  'https://crossface.cf/waifus/32.png',
   'https://crossface.cf/waifus/33.png',
   'https://crossface.cf/waifus/34.png',
   'https://crossface.cf/waifus/35.png',
   'https://crossface.cf/waifus/36.png',
   'https://crossface.cf/waifus/37.png',
   'https://crossface.cf/waifus/38.png',
   'https://crossface.cf/waifus/39.png',
   'https://crossface.cf/waifus/40.png',
   'https://crossface.cf/waifus/41.png',
   'https://crossface.cf/waifus/42.png',
   'https://crossface.cf/waifus/43.png',

];

if($(".antiwaifu").prop('checked') == false){
  
  
   $('head').append('<style type="text/css">#waifu{background-image:url(' +
       images[Math.floor(Math.random() * images.length)]
       + ');background-repeat:no-repeat;background-size:20%;background-position:center;float:right;position:fixed;min-width:100%;top:0;bottom:-20px;right:-20px;opacity:0.7;z-index:-1;}');
   $('body').append('<div id="waifu"> </div>');
}
});