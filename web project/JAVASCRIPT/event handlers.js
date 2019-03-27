function checkpasswords () {
    var v = document.getElementById("password1");
    var b = document.getElementById("password2");
     if(v.value == b.value) {

            return true;
  }else{
      alert("passwords are not the same");
    return false;
      }
  }
/* for later when events page alfo is done
function differentactivities(){
    var dom = document.getElementById("differentactivities");
    if(dom.checked == true){

    }
}*/
/*
function gettime(that){
  var x= new Date();
  that.value=x;
}
function checktime(that){
  var y= new Date();
  that.value=y;
  var z=y-x;
  alert("duration"+z);
}
*/
//function to get the time, to put on sign up
function gettime(){
  today=new Date();
  start= today.getTime();
  alert("Time started "+start);
}

//function to get the time, to put after sign up
function checktime(){
var end=today.getTime();
var elapse= end-start;
alert("Time elapsed since sign up ="+elapse);
}

/*
function test(){
  alert("test");
}
*/


function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
By Wee Family  psweesam@singnet.com.sg
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

function calc() {
first = document.loveform.name1.value.toUpperCase();
firstlength = document.loveform.name1.value.length;
second = document.loveform.name2.value.toUpperCase();
secondlength = document.loveform.name2.value.length;
var LoveCount=0;

for (Count=0; Count < firstlength; Count++) {



letter1=first.substring(Count,Count+1);

if (letter1=='L') LoveCount+=2;
if (letter1=='O') LoveCount+=2;
if (letter1=='V') LoveCount+=2;
if (letter1=='E') LoveCount+=2;
if (letter1=='Y') LoveCount+=3;
if (letter1=='O') LoveCount+=1;
if (letter1=='U') LoveCount+=3;
}


for (Count=0; Count < secondlength; Count++) {
letter2=second.substring(Count,Count+1);
if (letter2=='L') LoveCount+=2;
if (letter2=='O') LoveCount+=2;
if (letter2=='V') LoveCount+=2;
if (letter2=='E') LoveCount+=2;
if (letter2=='Y') LoveCount+=3;
if (letter2=='O') LoveCount+=1;
if (letter2=='U') LoveCount+=3;
}

amount=0;

if (LoveCount> 0) amount=  5-((firstlength+secondlength)/2)
if (LoveCount> 2) amount= 10-((firstlength+secondlength)/2)
if (LoveCount> 4) amount= 20-((firstlength+secondlength)/2)
if (LoveCount> 6) amount= 30-((firstlength+secondlength)/2)
if (LoveCount> 8) amount= 40-((firstlength+secondlength)/2)

if (LoveCount>10) amount= 50-((firstlength+secondlength)/2)

if (LoveCount>12) amount= 60-((firstlength+secondlength)/2)
if (LoveCount>14) amount= 70-((firstlength+secondlength)/2)
if (LoveCount>16) amount= 80-((firstlength+secondlength)/2)
if (LoveCount>18) amount= 90-((firstlength+secondlength)/2)
if (LoveCount>20) amount=100-((firstlength+secondlength)/2)
if (LoveCount>22) amount=110-((firstlength+secondlength)/2)
if (firstlength==0 || secondlength==0) amount= "Err";
if (amount < 0) amount= 0;
if (amount >99) amount=99;

document.loveform.output.value=amount+"%";



}
