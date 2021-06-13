//---------------------------------------------------Tested module 1------------------------------------
   
  // var Ainame=AI;
   //localStorage.setItem("name","AI");
   // var  Nameai=localStorage.name;
//-------------------------------------------------------------------------------------------------------
    var text,reply,a,b,c,d;
    var replydelay=800;


//-----------------------------------------------Name module----------------------------------------------
/*
          function nameInit(){
            if (Nameai==undefined) {
                 localStorage.setItem("name","AI");
                 Nameai=localStorage.name;
            }
            else{
             reply="hello";
             AIreply(reply);
            }
          }

          nameInit();  */
  //--------------------Speech recognition----------------------------------------------------------------
      try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

          var noteTextarea;

          var noteContent = '';
recognition.continuous = true;
recognition.onresult = function(event) {


  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent = transcript;
    text=noteContent;   
    creatingElement();                  //---Added2----  
  }
};


    
    //-----------------------------------------BUTTON-------------------------------------------------------
           
    function start_record() {
      if (noteContent.length) {
        noteContent += ' ';
      }
      document.getElementById("micoff").style.display="block";
      document.getElementById("hrf").style.display="none";
      recognition.start();
    }
    
    
    function pause_record(){
      
      document.getElementById("micoff").style.display="none";
      document.getElementById("hrf").style.display="block";
    
      recognition.stop();
      instructions.text('Voice recognition paused.');
    }
     
           
     //------------------------------------------------------------------------------------------------------

  //---------------------------End-------------------------------------------------------------------------
/*    changing the AI NAME function
    function changeAINAME(){  //function 6
            var changeAiname=prompt("Please enter your AI name here");
            localStorage.setItem("name",changeAiname);
             reply="Name changed sucessfully refresh the page to see it";
              AIreply(reply);
        }
        */
    /*   
          function changeuserNAME(){
                
          }     

    */    
  function chat(e){      //function 1
    if (e.keyCode == 13) {
    text=document.getElementById("in1").value;
    creatingElement();
    return false;
  }
  }
//--------------------------------Creating paragraph------------------------------------------------------- 
  
  
  function creatingElement() { //function 2
  var p=document.createElement("p");  //creating a new paragraph
  var node=document.createTextNode("Me:"+text);  //creating text node
   //adding the text to the paragraph
   p.appendChild(node);
   var div=document.getElementById("Textdemo");
   div.appendChild(p);  
   document.getElementById("in1").value="";
   sepratechat();//calling the sepratechat function
  }


//---------------------------------Answer---------------------------------------------------------------------  
  function sepratechat(){     //function 3
    b=text.toLowerCase();
    var randomnumber=Math.random();
    setTimeout(function()
    {
      document.getElementById("sectionM").style.display="none";
    if (b.includes("how are you") ||b.includes("how do you do")) {
      if (randomnumber<0.35) {
      reply="I am fine";
           AIreply(reply);
       }
       else if (randomnumber<0.55) {
             reply="very well...";
             AIreply(reply);
       }
       else if (randomnumber<0.80) {
        reply="Thank you for asking i am fine";
        AIreply(reply);
       }
       else{
        reply="fine";
        AIreply(reply);
       }
    }
    else if (b.includes("who are you") || b.includes("what can you do")) {
      reply="My name is veronica i am an Artificial intelligence i am design to Help you in various problem ";
      AIreply(reply);
      a="https://drive.google.com/uc?export=view&id=1Rp2lSnMZbpOVQOSzZsVloECFEoekC1mB";
      AI_image();
    }
    else if (b.includes("what is your name") ||b.includes("what's your name")) {
        reply="My name is veronica";
        AIreply(reply);

    }
     else if (b.includes("say hi") || b.includes("say hello")) {
        if (randomnumber<0.45) {
          reply="hello everyone";
          AIreply(reply);
        }
        else if (randomnumber<0.60){
                reply("hi everyone");
                AIreply(reply);
        }
        else{
          reply("hi everyone");
                AIreply(reply);
        }
    }

  /*  else if (b.includes("hello") ||b.includes("hi") ||b.includes("hey") && b.length<=5) {
      if (randomnumber<0.35) {
        reply="hello"; shivanshpatel.1999@gmail.com=>
        AIreply(reply);
      } */
      else if (b.includes("hello ") || b.includes("hi ") || b.includes("hey ")) {
      if (randomnumber<0.35) {
        reply="hello";
        AIreply(reply);
      }
      else if (randomnumber<0.55) {
        reply="hi";
        AIreply(reply);
      }
      else if (randomnumber<0.65) {
          greeting(new Date()); 
      }
    else if (randomnumber<0.80) {
      reply="hello how may i help you";
      AIreply(reply);
    }
    else if (randomnumber<0.90) {
      reply="hello bro";
      AIreply(reply);
    }
    else{
      reply="hi dude";
      AIreply(reply);
    } 
    }
    

  
    else if (b.includes("change name") ||b.includes("change your name")||b.includes("change ai name") ||b.includes("set your name") ) {
      reply="sorry you can not change my name";
      AIreply(reply);
    }
    else if (b.includes("created you") || b.includes("made you")) {
                     reply="Shivansh patel created Me";
                     AIreply(reply);
    }
    else if (b.includes("what is today") || b.includes("what's the day") || b.includes(" day")) {
         dayS();
    }
    else if (b.includes("what is date") || b.includes(" date") || b.includes("what is today's date")) {
      formatDate(new Date());
    }
          else if (b.includes("minute") && b.includes("timer")) {
         getnumberfor_timer(b);
  }
     else if (b.includes("second") && b.includes("timer")) {
           getnumberfor_timer(b);
      }
      else if (b.includes("hour") && b.includes("timer")) {
           getnumberfor_timer(b);
      } 
     else if (b.includes("stop") && b.includes("timer")) {
      a=1;
      timersecond(a);
     }
    else if (b.includes("what's the time") || b.includes("time")) {
      formatAMPM(new Date);
    }
    else if (b.includes("good morning") || b.includes("good afternoon") || b.includes("good evening") || b.includes("good night")) {
       greeting(new Date());      //use number and pass it  
    }
    else if (b.includes("+") || b.includes("addition") || b.includes("add")) {
          num_EX(b);
    }
    else if (b.includes("-") || b.includes("substract") || b.includes("substraction") || b.includes("subtract") || b.includes("subtraction") ) {
                 num_EX(b);
    }
     else if (b.includes("multiplication table")) {
                   num_EX(b);
    }
    else if ( b.includes("x") || b.includes("multiplication") || b.includes("multiply") || b.includes("multiplied")) {
                  num_EX(b);
    }
    else if (b.includes("/") || b.includes("divide") || b.includes("division")) {
               num_EX(b);
    }
     else if (b.includes("%") && b.includes("of")) {
              num_EX(b);
  }
    else if (b.includes("factorial")){
    num_EX(b);
   }
    else if (b.includes("thanks") || b.includes("thank you")) {
      reply="your welcome";
      AIreply(reply);
    }
    else if (b.includes("toss a coin") || b.includes("toss the coin") || b.includes("flip the coin")) {
      PROBABILITY.coinFLIP();
    }
    else if (b.includes("roll a dice") || b.includes("roll the dice")) {
      PROBABILITY.rolladice();
    }
     else if (b.includes("stop") && b.includes("listening")) {
      responsiveVoice.speak("ok microphone is turned off");
      pause_record();
    }
    else if (b.includes("stop") && b.includes("ok")) {
      reply="ok";
      AIreply(reply);
    }
    else if (b.includes("bye")) {
      reply="Bye see you soon";
      AIreply(reply);
    }
    else if (b.includes("what are you doing")) {
       if (randomnumber<0.35) {
        reply="currently i am helping you";
        AIreply(reply);
      }
      else if (randomnumber<0.55) {
        reply="nothing  you can ask your doubts";
        AIreply(reply);
      }
      else if (randomnumber<0.88){
        reply="just going to relax";
        AIreply(reply);
      }
      else{
        reply="just going to relax";
        AIreply(reply);
      }
    }
    else if (b.includes("open") && b.includes("youtube")) { //youtube
      responsiveVoice.speak("opening youtube");
  window.open('https://www.youtube.com/?gl=IN&tab=r1');
    }
     else if (b.includes("open") && b.includes("facebook")) {  //facebook
      responsiveVoice.speak("opening facebook");
  window.open(' https://www.facebook.com');
    }
     else if (b.includes("open") && b.includes("instagram")) { //instagram
      responsiveVoice.speak("opening instagram");
  window.open('https://www.instagram.com');
    }
    else if (b.includes("open") && b.includes("udemy")) { //udemy
      responsiveVoice.speak("opening udemy");
  window.open('https://www.udemy.com');
    }
    else if (b.includes("open") && b.includes("sololearn")) { //sololearn
      responsiveVoice.speak("opening sololearn");
  window.open('https://www.sololearn.com');
 }
 else if (b.includes("open") && b.includes("w3school")) { //w3school
      responsiveVoice.speak("opening w3school");
  window.open('https://www.w3schools.com');

    }
    else if (b.includes("open") && b.includes("twitter")){  //twitter
          responsiveVoice.speak("opening twitter");
      window.open('https://twitter.com');
    }
    else if (b.includes("open") && b.includes("github")){  //Github
          responsiveVoice.speak("opening github");
      window.open('https://github.com');
    }
     else if (b.includes("open") && b.includes("google map")){ // maps
      responsiveVoice.speak("opening google maps");
      window.open('https://www.google.co.in/maps');
    }

    else if (b.includes("open") && b.includes("keep")){  //google keep
      responsiveVoice.speak("opening google keep");
      window.open('https://keep.google.com'); 
    }
    else if (b.includes("open") && b.includes("news")){   //google news
      responsiveVoice.speak("opening google news");
      window.open('https://news.google.com'); 
    }
    else if (b.includes("open") && b.includes("photos")){   //google photos
      responsiveVoice.speak("opening google photos");
      window.open('https://photos.google.com/?tab=rq&pageId=none'); 
    }
     else if (b.includes("open") && b.includes("translate")){   //google translate
      responsiveVoice.speak("opening google translate");
      window.open('https://translate.google.co.in'); 
    }
     else if (b.includes("open") && b.includes("hackerrank")){   //hackerrank
      responsiveVoice.speak("opening Hackerrank");
      window.open('https://www.hackerrank.com/dashboard'); 
    }
     else if (b.includes("open") && b.includes("pinterest")){   //pinterest
      responsiveVoice.speak("opening pinterest");
      window.open('https://in.pinterest.com/?autologin=true'); 
    }
     else if (b.includes("open") && b.includes("calendar")){   //google calendar
      responsiveVoice.speak("opening google calendar");
      window.open('https://calendar.google.com/calendar'); 
    }

      else if (b.includes("open") && b.includes("money control")){   //money control
      responsiveVoice.speak("opening money control");
      window.open('https://www.moneycontrol.com/'); 
    }

       else if (b.includes("open") && b.includes("grow")){   //grow
      responsiveVoice.speak("opening groww");
      window.open('https://groww.in/dashboard/explore/mutual-funds'); 
    }

          else if (b.includes("open") && b.includes("whatsapp")){   //whatsapp
      responsiveVoice.speak("opening whatsapp");
      window.open('https://web.whatsapp.com/'); 
    }

    else if (b.includes("what do you eat") || b.includes("what you eat")) {
      reply="I think electricity";
      AIreply(reply);
    }
    else if (b.includes("where") && b.includes("are") && b.includes("you") ) {
      reply="inside your device";
      AIreply(reply);
    }
    else if (b.includes("dark") && b.includes("mode") && b.includes("on")) {
         reply="setting dark theme";
    AIreply(reply);
    document.getElementById("dark").style.backgroundColor="#100e17";
    }
   else if ( b.includes("set the dark theme") ||b.includes("set dark theme") ||b.includes("enable dark theme") ||b.includes("enable dark mode")) {  //dark theme or night mode
    reply="setting dark theme";
    AIreply(reply);
    document.getElementById("dark").style.backgroundColor="#100e17";
   }
   else if (b.includes("dark mode off") || b.includes("disable dark theme") ||b.includes("disable dark mode")) {  //disabling dark theme
    reply="removing dark theme";
    AIreply(reply);
    document.getElementById("dark").style.backgroundColor="#1E5E98";
   }
   else if (b.includes("your") && b.includes("latest") && b.includes("update")) {
  reply="our latest update is here now you dont need to scroll AutoScroll feature is here and you can search youtube directly by veronica";
      AIreply(reply);
   }
   else if (b.includes("your age")) {
      reply="i was born in 11th of june 2019";
      AIreply(reply);
   } 
   else if (b.includes("my location") || b.includes("my current location") || b.includes("where i am now")) {
    reply="your current location as shown in map";
    AIreply(reply);
    showPosition();
   }
    else if (b.includes("joke")) {
      if (randomnumber<0.35) {
      reply="sorry i dont know any jokes but i will learn in future";
      AIreply(reply);
    }
    else {
      reply="sorry but i dont like jokes";
      AIreply(reply);
    }
    }
        
    else if (b.includes("are you hearing me") || b.includes("are you listening me")) {
      reply="yes";
      AIreply(reply);
    }

    else if (b.includes("corona virus cases in india") || b.includes("corona virus updates") || b.includes("coronavirus updates") || b.includes("corona virus update") || b.includes("coronavirus update") || b.includes("coronavirus cases") || b.includes("covid19 cases") || b.includes("covid-19 cases") || b.includes("corona cases")) 
    {
        getCovidapi(b);
    }
    else if (b.includes("what's the weather in ") || b.includes("what is the weather in ")) {
          getTheWeather(b);
      }

      else if (b.includes("search on youtube") || b.includes("youtube search") || b.includes("search in youtube")) {
        if (b.includes("search on youtube")) {
               let rep=b;
        let repd=rep.replace("search on youtube","");
          responsiveVoice.speak("ok searching on youtube");
        window.open('https://www.youtube.com/results?search_query='+repd);
        }
      else if (b.includes("search in youtube")) {
                   let rep=b;
        let repd=rep.replace("search in youtube","");
          responsiveVoice.speak("ok searching on youtube");
        window.open('https://www.youtube.com/results?search_query='+repd);
      }
     else if (b.includes("youtube search")) {
              let rep=b;
        let repd=rep.replace("youtube search","");
          responsiveVoice.speak("ok searching on youtube");
        window.open('https://www.youtube.com/results?search_query='+repd);
     }
      }

    else if (b.includes("pause the audio") || b.includes("pause audio") || b.includes("pause music") || b.includes("pause the music") || b.includes("stop the music") || b.includes("stop music") || b.includes("stop audio") || b.includes("stop the audio")) {
                   pauseaudio();
    }
   /*
   else if (b.includes("close") && ("tab")) { 
            this.window.close();
   } */
       else{
        responsiveVoice.speak("this came from search result");
         window.open('http://google.com/search?q='+b);
    }
  },replydelay);
  }
  
  /*
  function Ai_name(){  //function 5  
      c=Nameai.localeCompare("AI");  
        if (c<1) {  
            reply="my name is currently not set but you can set my name ";
      AIreply(reply);
          }
        else{
            reply="my name is "+Nameai;
          AIreply(reply);
        }
     }*/

  function AIreply(a) {       //function 4
  var p=document.createElement("p");  //creating a new paragraph
  var node=document.createTextNode("Veronica"+":"+a);  //creating text node
  responsiveVoice.speak(a); //speak function
   //adding the text to the paragraph
   p.appendChild(node);
   var div=document.getElementById("Textdemo");
   div.appendChild(p);  
  }
  //--------------------------------image node for AI-------------------------------------------------
   function AI_image(){  //function 
    var new_img=document.createElement("img");
     new_img.setAttribute('src',a);
     new_img.setAttribute('height', '250');
     new_img.setAttribute('width', '330');
      div=document.getElementById("Textdemo");
      div.appendChild(new_img);

   }
  //---------------------------------image node ------------------------------------------------------

   function greeting_img(){  //function 20
    var new_img=document.createElement("img");
     new_img.setAttribute('src',a);
     new_img.setAttribute('height', '180');
     new_img.setAttribute('width', '230');
      div=document.getElementById("Textdemo");
      div.appendChild(new_img);

        greeting2(new Date());
   }

  //--------------------------------------------------------------------------------------------------
  function greeting(date){   //function 7
     //var jsdate= new Date();
         let randomnumber=Math.random();
         var hour=date.getHours();
    if (hour>4 && hour<12) {
        if (randomnumber<0.35) {
          a="https://drive.google.com/uc?export=view&id=12N1682lQ2VoAbUhma2euUJdzhx8vMoxs";
          greeting_img();
        }
        else if (randomnumber<0.60) {
          a="https://drive.google.com/uc?export=view&id=1j2TmCzWIjNp2WcRuJG9A9f62q6BFGmq3";
          greeting_img();
        }
        else if (randomnumber<0.70) {
          a="https://drive.google.com/uc?export=view&id=1WHr-wPmzRvk6DPQeNQuKVNXUgJLrRVDb";
          greeting_img();
        }
          else{
            a="https://drive.google.com/uc?export=view&id=1DgkJ2nkf4iZhFNyqh1ERdJ3i1Mb2SGj1";
            greeting_img();
          }
        }
    else if(hour>12 && hour<17){
       a="https://drive.google.com/uc?export=view&id=1YUf5sSHt0tOdrqxdV1Xb1ft0Zupgd9TN";
        greeting_img();
    }
    else if ( hour>17 && hour<21) {
      a="https://drive.google.com/uc?export=view&id=1TeqjtNUNATCWz47vkNRGhLcso57c47Bu";
      greeting_img();
      
    }
    else if (hour>21 || hour<4) {
      if (randomnumber<0.35) {
         a="https://drive.google.com/uc?export=view&id=1KPaUNPe3R-bGM03OStTzH32ZYg0uM-rx"
         greeting_img();
      }
      else if (randomnumber<0.60) {
          a="https://drive.google.com/uc?export=view&id=17Q_PGg7RI4ZYMKk_eHAsUDYUShOs0qot";
          greeting_img();
      }
      else if (randomnumber<0.80) {
          a="https://drive.google.com/uc?export=view&id=1ISxaQ8zNh_pbNOhksoeXxKjAbjLe5gOj";
          greeting_img();
      }
  
      else{
        a="https://drive.google.com/uc?export=view&id=1PDpbXrWxOWC29DHHNMYyA46RGgOIBZlp";
        greeting_img();
      }
   }
    }

  function greeting2(date){   //function 20.1
     //var jsdate= new Date();
       hour=date.getHours();
    if (hour>4 && hour<12) {
        //   document.getElementById("text2").innerHTML="Good morning";
       reply="good morning";
       AIreply(reply);
    }
    else if(hour>12 && hour<17){
     // document.getElementById("text2").innerHTML="Good afternoon";
       reply="good afternoon";
        AIreply(reply);
    }
    else if ( hour>17 && hour<21) {
    //  document.getElementById("text2").innerHTML="Good evening";
      reply="good evening";
       AIreply(reply);
    }
    else if (hour>21 || hour<4) {
     reply="good night";
     AIreply(reply);
   }
   else{
    reply="hello";
    AIreply(reply);
   }
    }
    //--------------------------------------------concept redesign 1---------------------------------------
        function num_EX(b){
               //function 12
    "Use strict";
   var phrase=b;
  //  phrase="first number is 32 and second number is 100";
  var reg=/\d+\.*\d*/g;
  var result=phrase.match(reg);
//  document.getElementById("output").innerHTML=result;      printing the result
  var num1=Number(result[0]);
  var num2=Number(result[1]);
 // document.getElementById("output2").innerHTML=num1;
 // document.getElementById("output3").innerHTML=num2;
     if (b.includes("+") || b.includes("addition") || b.includes("add")) {
            add(num1,num2);
    }
    else if (b.includes("-") || b.includes("substract") || b.includes("substraction") || b.includes("subtract") || b.includes("subtraction")) {
                substract(num1,num2);
    }
     else if (b.includes("multiplication table")) {
                 reply="here is the multiplication table of "+num1;
                   AIreply(reply);
                   printTable(num1);
    }
    else if ( b.includes("x") || b.includes("multiplication") || b.includes("multiply") || b.includes("multiplied")) {
                 multiplication(num1,num2);
    }
    else if (b.includes("/") || b.includes("divide") || b.includes("division")) {
              division(num1,num2);
    }
     else if (b.includes("%") && b.includes("of")) {
    percent(num1,num2);
  }
  else if (b.includes("factorial")){
    let n=num1;
    let fact=1,i;
    for(i=1;i<=n;i++)
    {
      fact=fact*i;
    }
    reply="factorial of "+n+" is "+fact;
    AIreply(reply);
   }
    else{
      reply="Error 404";
      AIreply(reply);
    }
  }

 
       function add(a,b){ //function 19
       let c=a+b;
       reply="addition of "+a+" and "+b+" is "+c;
       AIreply(reply);
       }

       function substract(a,b){  //function 14
        let c=a-b;
         reply="substraction of "+a+" and "+b+" is "+c;
       AIreply(reply);
       }

       function multiplication(a,b){  //function 15
         let c=a*b;
         reply="multiplication of "+a+" and "+b+" is "+c;
       AIreply(reply);
       }

       function division(a,b){ //function 16
         let c=a/b;
         c=c.toFixed(2); //limiting the number to certain range
         reply="division of "+a+" and "+b+" is "+c;
       AIreply(reply);
       }
       
      function percent(a,b) {

    let c=a/100;
    let d=b*c;
    reply=a+"% of "+b+" is "+d;
    AIreply(reply);
  }
//-----------------------------------------------------------------------------------------------------------
    //---------------------------------previous functions ------------------------------------------
    /*function TIME() {
  document.getElementById("hi").innerHTML="hello everyone";
} */
function formatAMPM(date) {  //function 8
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
 // responsiveVoice.speak('The time is'+ strTime);
  reply='The time is '+ strTime;
  AIreply(reply);
}

function formatDate(date) {   //function 9
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
 // responsiveVoice.speak('The Date is'+ day + ' ' + monthNames[monthIndex] + ' ' + year);
  reply='The Date is '+ day + ' ' + monthNames[monthIndex] + ' ' + year;
  AIreply(reply);
}

function dayS(){     //function 10
  var Daynames=[
     "Sunday","Monday", "Tuesday","Wednesday","Thrusday","Friday",
     "Saturday"
  ];
  var d= new Date();
  var dayindex=d.getDay();
  //dayindex-1;
  //  responsiveVoice.speak('The Day is'+ Daynames[dayindex-1]);
    reply="The Day is "+ Daynames[dayindex];
    AIreply(reply);
}
/*
function calculate(b){ //function 11
  //var toDo =  document.getElementById('calc').value;
  var toDo=b;
  try{
  var result = eval(toDo);
  responsiveVoice.speak("The result of "  + toDo + " is  " + result + ".");
  }
  catch(err){
       responsiveVoice.speak("I dont know i think your input is wrong");
  }
  
} */

//-----------------------------------------------PROBABILITY-------------------------------------------------
      var PROBABILITY={  //function 21     
             
      };
     PROBABILITY.coinFLIP=function(){
                 let coin=Math.ceil(Math.random()*2)
                  if (coin==1) {
                    reply="Its head";
                    AIreply(reply);
                 }
                 else if (coin==2) {
                  reply="Its tail";
                    AIreply(reply);
                 }
                else{
                  reply="you want to toss";
                  AIreply(reply);
                }
             };
    PROBABILITY.rolladice=function(){
      let dice=Math.ceil(Math.random()*6)
              reply="number is "+dice;
              shownumber(dice);
              AIreply(reply);
    };


   function shownumber(num)
   {
    if (num == 1) {
     a="https://drive.google.com/uc?export=download&id=1Ys_c5BJsGlUYcRyY89H0MBahINndclGg";
     dice_img();
    }
    else if (num == 2) {
     a="https://drive.google.com/uc?export=download&id=1w12ScqiQ1Sp1DOjifJEuvFeyoNRD22hu";
     dice_img();
    }
    else if (num == 3) {
      a="https://drive.google.com/uc?export=download&id=18Wo1tPQ7ohOwlj10BsMopKWDXq7P5ntN";
     dice_img(); 
    }
    else if (num == 4) {
       a="https://drive.google.com/uc?export=download&id=1eDyLMnbOS7lqOuLKt92NVlztAuKjJaoy";
     dice_img();
    }
    else if (num == 5) {
       a="https://drive.google.com/uc?export=download&id=1xicbLP20Mi-XuRUW3BufP5-DkZnikhWP";
     dice_img();
    }
    else if (num == 6) {
       a="https://drive.google.com/uc?export=download&id=1L2H4iaSim_BDPZnRu3ZhNEGu3JhhCfMg";
     dice_img();
    }
   }

     function dice_img(){  //function 20
    var new_img=document.createElement("img");
     new_img.setAttribute('src',a);
     new_img.setAttribute('height', '70');
     new_img.setAttribute('width', '75');
      div=document.getElementById("Textdemo");
      div.appendChild(new_img);
   }
//--------------------------------------------multiplication table-----------------------------------------
  function printTable(num) {
    var input = num;
    if(!isNaN(input)) {
        var table="";
        var number="";
        for(i=1;i<=10;i++) {
            number = input * i;
            table +=  input + " * " + i + " = " + number+"  ";
        }
     //   document.getElementById("txt1").innerHTML = table;
        //-------------------------------------------------------
        let p=document.createElement("p");  //creating a new paragraph
  let node=document.createTextNode(table);  //creating text node
   p.appendChild(node);
   let div=document.getElementById("Textdemo");
   div.appendChild(p); 
    }
    else {
       responsiveVoice.speak("Please Enter a valid Number");
    }
}
//--------------------------------------TIMER-----------------------------------------------------
  function getnumberfor_timer(b){  //function 27
    "Use strict";
   let phrase=b;
  //  phrase="first number is 32 and second number is 100";
  let reg=/\d+/g;
  let result=phrase.match(reg);
  let num1=parseInt(result[0]);
  //let num2=parseInt(result[1]);
// responsiveVoice.speak("here is the multiplication table of "+num1);
 if (b.includes("minute")) {
   timerminute(num1);
 }
  else if (num1==1 & b.includes("hour"))
 {
  num1=59;
  timerminute(num1);
 }
 else if (num1==1) {
  num1=59;
  timersecond(num1);
 }
else if (b.includes("hour")) {
  num1=num1*60;
  timerhour(num1);
}
 else{
    timersecond(num1);
 } 

  }
   
 function timerminute(a) {
  let x=a;
  let w=60;
  //var x=3;
    let fiveMinutes = w * x;
        display = document.querySelector('#some_div');
    startTimer(fiveMinutes, display);
     document.getElementById("some_div").style.display="block";
     responsiveVoice.speak("OK timer is set for "+x+"minutes");
};
function timersecond(a) {
  let w=a;
  //var x=3;
    let fiveMinutes = w;
        display = document.querySelector('#some_div');
    startTimer(fiveMinutes, display);
     document.getElementById("some_div").style.display="block";
     responsiveVoice.speak("OK timer is set for "+w+" second");
};
 function timerhour(a) {
  let x=a;
  let w=60;
  let c=x/60;
  //var x=3;
    let fiveMinutes = w * x;
        display = document.querySelector('#some_div');
    startTimer(fiveMinutes, display);
     document.getElementById("some_div").style.display="block";
     responsiveVoice.speak("OK timer is set for "+c+" hours");
};

            
         function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
  let T= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
             document.getElementById("some_div").style.display="none";
            clearTimeout(T);
            timeoutaudio();
        }
    }, 1000);
}
/*
function sayhi(){
  responsiveVoice.speak("Time out Time out");
}*/


//---------------------------------------------------maps-------------------------------------------
function showPosition(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else{
        alert("Sorry, your browser does not support geolocation.");
    }
}
 
// Define callback function for successful attempt
function showMap(position){
    // Get location data
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var latlong = new google.maps.LatLng(lat, long);
    
    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}
    }
    document.getElementById("sectionM").style.display="block";
    var map = new google.maps.Map(document.getElementById("sectionM"), myOptions);
    var marker = new google.maps.Marker({position:latlong, map:map, title:"You are here!"});

}
 
// Define callback function for failed attempt
function showError(error){
    if(error.code == 1){
        alert("You've decided not to share your position, but it's OK. We won't ask you again.");
    } else if(error.code == 2){
        alert("The network is down or the positioning service can't be reached.");
    } else if(error.code == 3){
        alert("The attempt timed out before it could get the location data.");
    } else{
        alert("Geolocation failed due to unknown error.");
    }
}

//----------------------------------------------------------------------------------------------------

/*  function AIreply(a) {       //function 4
  var p=document.createElement("p");  //creating a new paragraph
  var node=document.createTextNode(Nameai+":"+a);  //creating text node
  responsiveVoice.speak(a); //speak function
   //adding the text to the paragraph
   p.appendChild(node);
   var div=document.getElementById("Textdemo");
   div.appendChild(p);  
  } 
  */

  //---------------------------------------------------------------------------------------------
                             //weather
 const getTheWeather = (speech) => {
  
 let n;
 
 if (speech.includes("what's the weather in ")) {
      n=4;
 }
 else if (speech.includes("what is the weather in ")) {
    n=5;
 }
 else
 {
    AIreply("Please try to say what's the weather in and then city name or what is the weather in and then city name");
 }


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[n]}&units=metric&appid=bdf930e0a615fa7b9e374e0dd0fdbf8b`) 
  .then(function(response){
    return response.json();
  })
  .then(function(weather){
   let val=Math.floor(Math.random() * 2 + 1)

    if (val==2) {
        a="https://res.cloudinary.com/du4mbzbao/image/upload/v1619183955/Veronica/weather_pagaie.png";
        covid19_img(a);      
    }
    else
    {
       a="https://res.cloudinary.com/du4mbzbao/image/upload/v1619183955/Veronica/cloudy_fjturp.png";
       covid19_img(a);
    }

    if (weather.cod === '404') {
      utterThis =`I cannot find the weather for ${speech.split(' ')[n]}`;
      AIreply(utterThis);
    }
    utterThis =`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`;
    AIreply(utterThis);
  });
};

//--------------------------------------------------------------------------------------------------
//                       ****** AutoScroll *******

         function scrollDiv()
        {
    if(document.getElementById("Textdemo").scrollTop<(document.getElementById("Textdemo").scrollHeight-document.getElementById("Textdemo").offsetHeight)){-1
    document.getElementById("Textdemo").scrollTop=document.getElementById("Textdemo").scrollTop+1
    }
   // else{
     //   document.getElementById("sp").scrollTop=0;
   // }
        }

    setInterval(scrollDiv,30);



//-------------------------------------------------------------------------------------------------
                      // Timeout Audio //


     var to;
    function timeoutaudio()
    {
      to=document.createElement("Audio");
      to.src="https://drive.google.com/uc?export=download&id=1kYugwTdcYMWinMNmaIp6Z5Bm8P9CLCym";
      to.play();
    }

    function pauseaudio()
    {
      to.pause();
    }



 //-----------------------------------------------------------------------------------------------

  //----------------------- corona virus Api ------------------------------------
 
  async function getCovidapi(b) {
   const jsondata=await fetch('https://api.covid19api.com/summary');
    const jsdata=await jsondata.json();
    //  console.log(jsdata);
    //  console.log(jsdata.statewise[1]);
   // console.log(jsdata.Countries[76]);
    const country_name=jsdata.Countries[76];
   
     //Generate a random number for image
     let val=Math.floor(Math.random() * 2 + 1)
  
     if (val==2) {
     a="https://res.cloudinary.com/du4mbzbao/image/upload/v1619151593/Veronica/Pngtree_covid_19_text_and_virus_5340176_t13wkl.png"; 
     covid19_img(a);
   }
    else
    {
      a="https://res.cloudinary.com/du4mbzbao/image/upload/v1619152935/Veronica/Pngtree_red_covid-19_bacteria_isolated_on_5340587_nq3cnw.png";
      covid19_img(a);
    } 
//--------------------------outputing cases ---------------------------------------
    if (b.includes("corona virus cases in india") || b.includes("coronavirus cases") || b.includes("covid19 cases")) {
      const a=`in ${country_name.Country} there is ${country_name.NewConfirmed} new confirmed cases on ${country_name.Date}`;
      AIreply(a);
    }
    else
    {
       const a=`New confirmed cases is ${country_name.NewConfirmed}
        New Death is ${country_name.NewDeaths}
        New Recovered is ${country_name.NewRecovered}
        Total confirmed is ${country_name.TotalConfirmed}
        Total Death is ${country_name.TotalDeaths}
        Total Recovered is ${country_name.TotalRecovered}
       `;
       AIreply(a);
    }
  }



  function covid19_img(a){  //function 
    var new_img=document.createElement("img");
     new_img.setAttribute('src',a);
     new_img.setAttribute('height', '150');
     new_img.setAttribute('width', '170');
      div=document.getElementById("Textdemo");
      div.appendChild(new_img);

   }
 //-----------------------------------------------------------------------------