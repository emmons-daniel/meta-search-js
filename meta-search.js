

 var ltext1, ltext2, ltext3;
 var trig1, trig2, trig3, trig4, trig5;
 var s45 = "default";
 var sT1, sT2, sT3, sT4, nTest=0;
 var axel = Math.round(Math.random() * 1000000);var ord = axel;



function GetCookie(Name) {
   var search = Name + "=";
   var sRet;
   if (document.cookie.length > 0) { // if there are any cookies
      offset = document.cookie.indexOf(search);
      if (offset != -1) { // if cookie exists
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if (end == -1)
            end = document.cookie.length
         sRet = unescape(document.cookie.substring(offset, end));
         if (sRet[0] == "u" ) {sRet = "";}
         return sRet;
      }
      return "";
   }
   return "";
}



function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}


  var oldRand = 13;



 
//     All Rights Reserved. Copyright 1996-2002, Aquinas Software, Inc.
//     Aquinas Software, Inc. 




function FrameIt(form) {
var nOld = (parent.frames.length-1)/2;
var nTest2 = 0;

var nChosen = 1;

//if (form.R1[1].checked)
//  { nChosen=2; }

nTest = TheTrinity(form);


var expdate = new Date ();
expdate.setTime (expdate.getTime() + ( 90 * 24 * 60 * 60 * 1000));
SetCookie ("tempvar", nChosen, expdate);
for (var i=5; i < form.elements.length; i++)
{ if(form.elements[i].checked)
   { 
// alert(form.elements[i].name) ;
     ;
}
; //.value
}
if ( nTest == 0 )
 {  alert("Check at least one engine."); }

else if (nChosen == 1)
  {
    if (nTest == 1)
      {
        //OpenWindsBig(sT1);

        top.location.href = sT1;
        }
    else if (nTest == 2)
      { OpenWindsBig(sT1); OpenWindsBig(sT2); }
    else if (nTest == 3)
      { OpenWindsBig(sT1); OpenWindsBig(sT2);
        OpenWindsBig(sT3); }
    else if (nTest == 4)
      { OpenWindsBig(sT1); OpenWindsBig(sT2);
        OpenWindsBig(sT3); OpenWindsBig(sT4); }
    else if (nTest == 5)
      { OpenWindsBig(sT1); OpenWindsBig(sT2);
        OpenWindsBig(sT3); OpenWindsBig(sT4); 
        OpenWindsBig(sT5); }    
else if (nTest == 6)
      { OpenWindsBig(sT1); OpenWindsBig(sT2);
        OpenWindsBig(sT3); OpenWindsBig(sT4); 
        OpenWindsBig(sT5); OpenWindsBig(sT6); }      }

return (false);

}



function TheTrinity(form) {
  var sRet;
  nTest=0;
  var sThe;
  sThe = form.search.value;

 

 if (form.news.checked ) {
    sThe = ConvertString(sThe);
    sRet = "http://www.surfy.com/cgi-bin/search?key="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }




 if (form.twitter.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://twitter.com/search?q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }


if (form.facebook.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.facebook.com/search/top/?epa=SEARCH_BOX&g="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

if (form.pinterest.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.pinterest.com/search/pins/?rs=typed&q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }


 if (form.reddit.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.reddit.com/search?q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }
 

 if (form.airbnb.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.airbnb.com/s/"+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.booking.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.booking.com/searchresults.en-gb.html?ss="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.orbitz.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.orbitz.com/Hotel-Search?startDate=&endDate=&rooms=1&_xpid=11905%7C1&adults=2&destination="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.expedia.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.expedia.com/Hotel-Search?destination="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }
 
 





 

 if (form.bing.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://www.bing.com/search?q=" + sRet ;
    AddNewString(nTest, sRet);    nTest++;    }


 if (form.google.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://www.google.com/search?q=" + sRet;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.duck.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://duckduckgo.com/?q=test" + sRet ;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.yahoo.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://search.yahoo.com/search?fr=yfp-t&fp=1&toggle=1&cop=mss&ei=UTF-8&p=" + sRet ;
    AddNewString(nTest, sRet);    nTest++;    }

 

 if (form.googleimages.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.google.com/search?safe=off&source=lnms&tbm=isch&sa=X&q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

   

 if (form.youtube.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.youtube.com/results?search_query="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.bingimages.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.bing.com/images/search?FORM=HDRSC2&q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }


 if (form.videos.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.bing.com/videos/search?FORM=HDRSC3&q="+sThe;
    AddNewString(nTest, sRet);    nTest++;    }





 if (form.dictionary.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://www.merriam-webster.com/dictionary/"+sRet;
    AddNewString(nTest, sRet);    nTest++;    }

 if (form.ebay.checked ) {
    sRet = ConvertString(sThe);
    sRet = "http://search.ebay.com/search/search.dll?&query="+sRet;
    AddNewString(nTest, sRet);    nTest++;    }




if (form.walmart.checked)
   {
    sThe = ConvertString(sThe);
    sRet = "http://s.walmart.com/catalog/search.gsp?search_constraint=0&search_query="+sThe;
    AddNewString(nTest, sRet);    nTest++;
    }

 

 if (form.ali.checked ) {
    sRet = ConvertString(sThe);
    sRet = "https://www.aliexpress.com/af/golf.html?SearchText=="+sRet;
    AddNewString(nTest, sRet);    nTest++;    }


if (form.amazon.checked)
   {
    sThe = ConvertString(sThe);
    sRet = "http://www.amazon.com/exec/obidos/external-search/?mode=blended&tag=surfy-20&keyword=";
    sRet += sThe;
    AddNewString(nTest, sRet);    nTest++;
    } 

 
 


 if (form.bible.checked) {
   sThe = ConvertString(sThe);
   sRet = "http://www.biblegateway.com/cgi-bin/bible?version=NASB&rpp=25";
   sRet += "&search="+sThe
   AddNewString(nTest, sRet);  nTest++;  }

 
 if (form.stock.checked ) {
    sThe = ConvertString(sThe);
    sRet = "https://www.tradingview.com/symbols/"+sThe;
   AddNewString(nTest, sRet);    nTest++;    }

 if (form.encyc.checked ) {
    sThe = ConvertString(sThe);
    sRet = "http://www.bartleby.com/cgi-bin/texis/webinator/sitesearch?FILTER=col65&query="+sThe;
   AddNewString(nTest, sRet);    nTest++;    }


 

 if (nTest > 6)
    nTest = 6;
 return(nTest);
}

function AddNewString(nGospel, sGospel) {
 if (nGospel == 0)  { sT1 = sGospel; }
 else if (nGospel == 1)  { sT2 = sGospel; }
 else if (nGospel == 2) { sT3 = sGospel; }
 else if (nGospel == 3) { sT4 = sGospel; }
 else if (nGospel == 4) { sT5 = sGospel; }
 else if (nGospel == 5) { sT6 = sGospel; }
}

function WhichString(n) {
 var sRet;
 if (nGospel == 1)  { sRet = sT1; }
 else if (nGospel == 2) { sRet = sT2; }
 else if (nGospel == 3) { sRet = sT3; }
 else if (nGospel == 4) { sRet = sT4; }
 else if (nGospel == 5) { sRet = sT5; }
 else if (nGospel == 6) { sRet = sT6; } 
return (sRet);
}



function ConvertIt(s3, s4, s5) {
 var nLen= s3.length;
 for( i=0; i <= nLen; i++)
    {
    if (s3.substring(i,i+1)== s4)
      {
      s3 = s3.substring(0,i) + s5 + s3.substring(i+1,nLen);
     }
    }
return(s3);
}




function OpenWindsBig(sUrl) {
  var qWin;
  var sName;
  oldRand = GetRandom(1, 12000, oldRand);
  sName = "wind" + oldRand;
  qWin=open(sUrl,sName,'toolbar=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,location=yes,resizable=yes,copyhistory=no,width=640,height=480');
}

function JSclock() {

   var time = new Date() ;
   var realtime = new Date();

    if (realtime.getHours()==0 && realtime.getMinutes()==0)
        { trig1=0;trig2=0;trig3=0;trig4=0;trig5=0; }

  t2 = parseInt(realtime.getHours());
  m2 = parseInt(realtime.getMinutes());

  taa = parseInt(GetCookie("time1"));
  maa = parseInt(GetCookie("min1"));
  if (  trig1==0 && taa == t2 && maa == m2 ) 
     { OpenWindsBig( document.wild.text1.value ); trig1 = 1; }

 taa = parseInt(GetCookie("time2"));
  maa = parseInt(GetCookie("min2"));
  if (  trig2==0 && taa == t2 && maa == m2 ) 
     { OpenWindsBig( document.wild.text2.value ); trig2 = 1; }

 taa = parseInt(GetCookie("time3"));
  maa = parseInt(GetCookie("min3"));
  if (  trig3==0 && taa == t2 && maa == m2 ) 
     { OpenWindsBig( document.wild.text3.value ); trig3 = 1; }

 taa = parseInt(GetCookie("time4"));
  maa = parseInt(GetCookie("min4"));
  if (  trig4==0 && taa == t2 && maa == m2 ) 
     { OpenWindsBig( document.wild.text4.value ); trig4 = 1; }

 taa = parseInt(GetCookie("time5"));
  maa = parseInt(GetCookie("min5"));
  if (  trig5==0 && taa == t2 && maa == m2 ) 
     { OpenWindsBig( document.wild.text5.value ); trig5 = 1; }



    if ( t2 ==0 && m2 == 0)
        id = setTimeout("JSclock()",61000);  // in millisecs, reduce later
    else
        id = setTimeout("JSclock()",15000);
}


function SetCookie(name, value)
 {
  var days=120;
  var expdate = new Date();
  expdate.setTime(expdate.getTime() + days *24*60*60*1000);
  document.cookie = name + "=" + escape(value) + ";expires="  +  expdate.toGMTString();
}

function ConvertString(s)
{
 var s2 = ConvertIt(s,"+","%2b");
 s2 = ConvertIt(s,"&","%26");
 s2 = ConvertIt(s2," ","+");
 return s2;
}



function GetRandom(min, max, seed) {
  var s, m;
  today = new Date();
  s = today.getSeconds();
  m = today.getMinutes();
  var y;
  y = Math.round((2345*seed*(s*139+m*3) % (198))/203*(max-min))+min ;
  return(y);
}

