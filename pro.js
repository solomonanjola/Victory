  $(document).ready(function(){
      $('.othw').hover(function(){
$('.othw i').css({"animation" : "spin 1s linear infinite "})

})
$('.othw').mouseout(function(){
$('.othw i').css({"animation" : "spine 0.6s linear "})

})
//Javacsript code for light mode dark mode in website
$('#sun').click(function(){
$('#moon').toggle()
$('#tty h6').css({"border-bottom-color":"white"})
$('#tty').css({"background-color":"rgb(46, 45, 45)"})
$('#sun').toggle()
$('#moon').css({"color":"black"})
$('body').css({"background-color":"black","transition":"2s","color":"white"})
$('header').css({"background-color":"white","color":"black","border-bottom":"2px solid white","transition":"2s"})
$('.oth').css({"border-left":"1px solid black","font-weight":"bolder","color":"black","transition":"2s"})
$('#sect').css({"background-image":"url('mounts.jpg')","background-repeat":"no-repeat","background-position":"center","background-size":"cover","transition":"2s"})
$('.othw,.othw i').css({"color":"rgb(218,165,92)","transition":"2s"})
$('.imen ,.imen2').css({"background-color":"whitesmoke","opacity":"0.8","color":"black","border-top":"4px solid goldenrod","border-bottom":"4px solid goldenrod","transition":"3s"})
$('#conty').css( {"background-image": "url('photo.jpeg')","transition":"4s"})
})
$('#moon').click(function(){
$('#moon').toggle()
$('#sun').toggle()
$('.imen ,.imen2').css({"background-color":"black","opacity":"0.8","color":"white","border-top":"4px solid goldenrod","border-bottom":"4px solid goldenrod","transition":"3s"})
$('#conty').css( {"background-image": "url('ani.jpg')","transition":"4s"})
$('body').css({"background-color":"white"})
$('body').css({"color":"black"})
$('#tty h6').css({"border-bottom-color":"black"})
$('#tty').css({"background-color":"rgb(245, 241, 241)"})
$('header').css({"background-color":"black","color":"white","transition":"2s","border-bottom":"none"})
$('.logo a h3 ,.logo a h3 i').css({"color":"rgb(250, 193, 48)"})
$('.oth').css({"border-left":"1px solid white","font-weight":"normal","color":"white","transition":"2s"})
$('#sect').css({"background-image":"url('photo.png')","background-repeat":"no-repeat","background-position":"center","background-size":"cover","transition":"2s"})

})
 $('.oths').click(function(){
$('.oths ul').toggle()
 })

    })
   