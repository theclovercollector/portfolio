$(function(){
    $('.card').mouseenter(function(){
        var playingcard = $(window).scrollTop()
        if(playingcard >= 3700){
            $('.flip .card').addClass('zzang')
        }
    })
    $('.card').mouseleave(function(){
        var playingcard = $(window).scrollTop()
        if(playingcard >= 3700){
            $('.flip .card').removeClass('zzang')
        }
    })




    gsap.to('.sc_intro .scroll_bar',{
        scrollTrigger:{
            trigger:".scroll_bar",
            start:"top 30%",
            end:"bottom top",
            // markers:true,
            scrub:0.5,
        },
        yPercent:-50,

    
        
    })
    const beauty2 = gsap.timeline({
        scrollTrigger:{
          trigger:".sc_new",
          start:'top top',
          end:'+=200%',
          // markers:true,
          scrub:0.3,
          pin:true,
        }
      });


    beauty2.to('.motion',{'visibility':'hidden'})
    .to('.du_ori',{'visibility':'visible'},0)
    .to('.du',{'visibility':'visible'},0.1)
    .to('.du1',{rotation:30},0.1)
    .to('.du2',{rotation:60},0.1)
    .to('.du3',{rotation:90},0.1)
    .to('.du4',{rotation:120},0.1)
    .to('.du5',{rotation:150},0.1)
    .to('.du6',{rotation:180},0.1)
    .to('.du7',{rotation:210},0.1)
    .to('.du8',{rotation:240},0.1)
    .to('.du9',{rotation:270},0.1)
    .to('.du10',{rotation:300},0.1)
    .to('.du11',{rotation:330},0.1)
    .addLabel('m1')
    .to('.duouther img',{y:'20vw'},'m1')
    .to('.duouther img',{opacity:0},'m1')


// WORK PARTICLE
const workParticle = gsap.timeline();
workParticle
    .addLabel('a')
    .from(".sc-work .particle",{xPercent:-30, yPercent:-40,rotate:15},'a')
ScrollTrigger.create({
    animation: workParticle,
    trigger: ".sc-work .particle-wrap",
    start: "top 100%",
    end: "top 35%",
    scrub: true,
    pin: false,
    markers: false
});

// 커서 이동시 이미지박스 함께 이동
document.addEventListener('mousemove',(e) => { 
    cursorImgBox.style.top = `${e.clientY}px`
    cursorImgBox.style.left = `${e.clientX}px`
    cursorImgBox.animate({
        top : `${e.clientY}px`, left : `${e.clientX}px`
    },2000)
});

// 프로젝트 호버시 마우스 이미지 변경
let cursorImgBox = document.querySelector('.cursor .img-box');
let workLinks = document.querySelectorAll('.work-item a:first-child');

workLinks.forEach(i=>{
    imageUrl = $(i).attr('data-img');
    let cursorImg = document.querySelector(`${imageUrl}`);

    i.addEventListener('mouseover',()=>{ 
        cursorImgBox.classList.add('on');
        cursorImg.classList.add('on');

        // cursorImg.style.backgroundImage = "url("+imageUrl+")"
    });
    i.addEventListener('mouseout',()=>{ 
        cursorImgBox.classList.remove('on');
        cursorImg.classList.remove('on');
    });
})



    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.saveStyles(".mobile, .desktop");
    ScrollTrigger.matchMedia({
        "(min-width: 1023px)": function() {
            //about
            let sections = gsap.utils.toArray(".about-item");

            gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            delay: 2000,
            scrollTrigger: {
                trigger: ".sc-about .about-list",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // end: () => "+=" + document.querySelector(".sc-about .inner").offsetWidth
                
            }
            });
        },
        "all": function() {
             //visual
            gsap.to('.icon',0.7, {opacity:0})

            var word = new TimelineMax()
            .addLabel('b')
            .to('.word',0.7, {visibility:'visible'},'b')
            .to('.word',0.7, {opacity:1},'b')

            .addLabel('a')
            .to('.word',0.7, {opacity:0},'a')
            .to('.icon',0.7, {opacity:1},'a')

            .repeat(-1);

            gsap.to('.icon2',0.9, {opacity:0})

            var word2 = new TimelineMax()
            .addLabel('b')
            .to('.word2',0.7, {visibility:'visible',delay:0.5},'b')
            .to('.word2',0.7, {opacity:1,delay:0.5},'b')

            .addLabel('a')
            .to('.word2',0.7, {opacity:0,delay:0.5},'a')
            .to('.icon2',0.7, {opacity:1,delay:0.5},'a')

            .repeat(-1);

            var circle = new TimelineMax()

            .to('.circle',0.5, {width:'20vw',delay:1})
            .to('.circle',0.5, {width:'5vw',delay:2})
            .repeat(-1)
        }
    })
    
  


    gsap.to('.sc-natural .title',{
        scrollTrigger:{
            trigger:'.sc-natural',
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // markers:true,
        },
        xPercent:-30,
    })




    //project hover
    $('.project-item .item-inner').hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
    })



    //footer
    $('.link-mail').hover(function(){
        $(this).addClass('on')
    }, function(){
        $(this).removeClass('on')
    })

    var textWrapper = document.querySelector('.ml12');
    var textWrapper2 = document.querySelector('.ml12-2');
    var textWrapper3 = document.querySelector('.ml12-3');
    var textWrapper4 = document.querySelector('.ml12-4');

    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })

    .add({
        targets: '.ml12-2 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-2 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })
    .add({
        targets: '.ml12-3 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-3 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })
    .add({
        targets: '.ml12-4 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-4 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });

    
    // 스크롤 footer 도달시 header 색상 바꾸기
    $(window).on('scroll', function () {
        
        var here = $(".footer").offset().top;
        var here2 = $(".about").offset().top;
        var here3 = $(".sc-project").offset().top;
        var height = $(document).scrollTop();

        if(here2> height){
            $('.logo a').css('color', 'black')
            $('.menu-item a').css('color', 'black')
        }
        if(here2 <= height){
            $('.logo a').css('color', 'white')
            $('.menu-item a').css('color', 'white')
        } 
        if(here3 <= height){
            $('.logo a').css('color', 'black')
            $('.menu-item a').css('color', 'black')
        }
        height += 1;
        if (here <= height) {
            $('.logo a').css('color', 'white')
            $('.menu-item a').css('color', 'white')
        }
    })

    //aos
    AOS.init();

    //works hover event
    $('.works-item.left').hover(function(){
        $('.about').css('background-color', '#00ff04')
    }, function(){
        $('.about').css('background-color', '#000')
    })
    $('.works-item.right').hover(function(){
        $('.about').css('background-color', '#DC143C')
    }, function(){
        $('.about').css('background-color', '#000')
    })

    const leftMotion = gsap.timeline({})
    leftMotion.addLabel('label')
    .to('.loading_page strong',{xPercent:-35,delay:1,duration:0.1},'label')
    .to('.loading_page .txt01',{opacity:0,delay:1},'label')
    .to('.loading_page .txt02',{opacity:0,delay:1.3},'label')
    .to('.loading_page .txt03',{opacity:0,delay:1.6},'label')
    .to('.loading_page .txt04',{opacity:0,delay:2.8},'label')
    .to('.loading_page',{yPercent:-100,delay:3,ease: Power4.easeIn},'label')
    .fromTo('.sc_intro h2',{
        yPercent:100,
        opacity:0
        
    },{
        yPercent:0,
        opacity:1,
        
    })
    
})

// 마우스 커서 
const cursor = document.querySelector('.cursor'); 

// 커서 이동
document.addEventListener('mousemove',(e) => { 
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
    cursor.animate({
        top : `${e.clientY}px`, left : `${e.clientX}px`
    },1000)

// 마우스 클릭
document.addEventListener('mousedown',()=>{ 
    cursor.classList.add('clicked'); 
});
document.addEventListener('mouseup',()=>{ 
    cursor.classList.remove('clicked'); 
});
// 링크 hover
let links = document.querySelectorAll('a');
links.forEach(i=>{
    i.addEventListener('mouseover',()=>{ 
        cursor.classList.add('pointer'); 
    });
    i.addEventListener('mouseout',()=>{ 
        cursor.classList.remove('pointer'); 
    });
})
// 버튼 hover
let btns = document.querySelectorAll('button');
btns.forEach(i=>{
    i.addEventListener('mouseover',()=>{ 
        cursor.classList.add('pointer'); 
    });
    i.addEventListener('mouseout',()=>{ 
        cursor.classList.remove('pointer'); 
    });
})
})