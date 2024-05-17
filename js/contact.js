function contactus(){
    const input=document.getElementById("no");
    const input1=document.getElementById("no1");
    const input2=document.getElementById("no2");
    if(input == " "||input1 == " "||input2 == " "){
        alert("Fill the complete form!")
    }
    else{
        alert("THANK YOU! We will contact you soon. \nWe'll provide information through mail.");
    }

    input.value=' ';
    input1.value=' ';
    input2.value=' ';
}
function about(){
    document.getElementById("about").style.color="";
    document.getElementById("time").style.color="White";
    document.getElementById("home").style.color="white";

  }
  function time(){
    document.getElementById("about").style.color="white";
    document.getElementById("time").style.color="";
    document.getElementById("home").style.color="white";

  }
  function home(){
    document.getElementById("about").style.color="white";
    document.getElementById("time").style.color="white";
    document.getElementById("home").style.color="";
  }