var arrow = document.getElementById("arrow");
var main = document.getElementById('main');
var sidesec = document.getElementById('sidesec');
var prevdone = true;
arrow.onclick = slider;

function slider() {
    if (prevdone == false) {
        var posarrow = 32;
        var widthmain = 68;
        var leftmain = 32;
        var widthsec = 25;

        var id = setInterval(frame, 30);

        function frame() {
            if (widthmain == 93 && posarrow == 7 && leftmain == 7 && widthsec == 0)
                clearInterval(id);
            else {
                posarrow--;
                widthmain++;
                leftmain--;
                widthsec--;

                arrow.style.left = posarrow + '%';
                main.style.width = widthmain + '%';
                main.style.left = leftmain + '%';
                sidesec.style.width = widthsec + '%';
            }

        }
        arrow.src = 'images/arrow2.png';
        prevdone = true;
    } else if (prevdone == true) {
        var posarrow = 7;
        var widthmain = 93;
        var leftmain = 7;
        var widthsec = 0;

        var id = setInterval(frame, 30);

        function frame() {
            if (widthmain == 68 && widthsec == 25 && posarrow == 32 && leftmain == 32)
                clearInterval(id);
            else {
                posarrow++;
                widthmain--;
                leftmain++;
                widthsec++;

                arrow.style.left = posarrow + '%';
                main.style.width = widthmain + '%';
                main.style.left = leftmain + '%';
                sidesec.style.width = widthsec + '%';
            }

        }
        arrow.src = 'images/arrow.png';
        prevdone = false;

    }
}

var love = document.getElementById('iconlove');
var mood = document.getElementById('iconmood');
var party = document.getElementById('iconparty');
var patriotic = document.getElementById('iconpatriotic');
var devotional = document.getElementById('icondevotional');
var heartbreak = document.getElementById('iconheartbreak');

love.onclick = function() {
    document.getElementById('img11').src = 'songimg/l1.jpg';
    document.getElementById('img12').src = 'songimg/l2.jpg';
    document.getElementById('img13').src = 'songimg/l3.jpg';
    document.getElementById('img14').src = 'songimg/l4.jpg';
    document.getElementById('img15').src = 'songimg/l5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "gray";
    mood.style.backgroundColor = "#3a3535";
    party.style.backgroundColor = "#3a3535";
    patriotic.style.backgroundColor = "#3a3535";
    devotional.style.backgroundColor = "#3a3535";
    heartbreak.style.backgroundColor = "#3a3535";
}
mood.onclick = function() {
    document.getElementById('img11').src = 'songimg/m1.jpg';
    document.getElementById('img12').src = 'songimg/m2.jpg';
    document.getElementById('img13').src = 'songimg/m3.jpg';
    document.getElementById('img14').src = 'songimg/m4.jpg';
    document.getElementById('img15').src = 'songimg/m5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "#3a3535";
    mood.style.backgroundColor = "gray";
    party.style.backgroundColor = "#3a3535";
    patriotic.style.backgroundColor = "#3a3535";
    devotional.style.backgroundColor = "#3a3535";
    heartbreak.style.backgroundColor = "#3a3535";
}
party.onclick = function() {
    document.getElementById('img11').src = 'songimg/par1.jpg';
    document.getElementById('img12').src = 'songimg/par2.jpg';
    document.getElementById('img13').src = 'songimg/par3.jpg';
    document.getElementById('img14').src = 'songimg/par4.jpg';
    document.getElementById('img15').src = 'songimg/par5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "#3a3535";
    mood.style.backgroundColor = "#3a3535";
    party.style.backgroundColor = "gray";
    patriotic.style.backgroundColor = "#3a3535";
    devotional.style.backgroundColor = "#3a3535";
    heartbreak.style.backgroundColor = "#3a3535";
}
patriotic.onclick = function() {
    document.getElementById('img11').src = 'songimg/pat1.jpg';
    document.getElementById('img12').src = 'songimg/pat2.jpg';
    document.getElementById('img13').src = 'songimg/pat3.jpg';
    document.getElementById('img14').src = 'songimg/pat4.jpg';
    document.getElementById('img15').src = 'songimg/pat5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "#3a3535";
    mood.style.backgroundColor = "#3a3535";
    party.style.backgroundColor = "#3a3535";
    patriotic.style.backgroundColor = "gray";
    devotional.style.backgroundColor = "#3a3535";
    heartbreak.style.backgroundColor = "#3a3535";
}
devotional.onclick = function() {
    document.getElementById('img11').src = 'songimg/d1.jpg';
    document.getElementById('img12').src = 'songimg/d2.jpg';
    document.getElementById('img13').src = 'songimg/d3.jpg';
    document.getElementById('img14').src = 'songimg/d4.jpg';
    document.getElementById('img15').src = 'songimg/d5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "#3a3535";
    mood.style.backgroundColor = "#3a3535";
    party.style.backgroundColor = "#3a3535";
    patriotic.style.backgroundColor = "#3a3535";
    devotional.style.backgroundColor = "gray";
    heartbreak.style.backgroundColor = "#3a3535";
}
heartbreak.onclick = function() {
    document.getElementById('img11').src = 'songimg/h1.jpg';
    document.getElementById('img12').src = 'songimg/h2.jpg';
    document.getElementById('img13').src = 'songimg/h3.jpg';
    document.getElementById('img14').src = 'songimg/h4.jpg';
    document.getElementById('img15').src = 'songimg/h5.jpg';
    if (prevdone == true)
        slider();
    love.style.backgroundColor = "#3a3535";
    mood.style.backgroundColor = "#3a3535";
    party.style.backgroundColor = "#3a3535";
    patriotic.style.backgroundColor = "#3a3535";
    devotional.style.backgroundColor = "#3a3535";
    heartbreak.style.backgroundColor = "gray";
}
var audio = document.getElementById('audio');
var linkimg1 = document.getElementById("img11");
var songname = document.getElementById('songname');
var marquee = document.getElementById('marquee');
linkimg1.onclick = function() {
    document.getElementById('mainimg').src = linkimg1.src;
    var source = (linkimg1.src).replace(".jpg", ".mp3");
    var final = source.replace("songimg", "songs");
    audio.setAttribute('src', final);
    audio.autoplay = true;
    var filename = linkimg1.src.replace(/^.*[\\\/]/, '');
    if (filename == "l1.jpg") {
        songname.innerHTML = "Baari";
        marquee.innerHTML = "Bilal Saeed, Momina Mustehsan"
    }
    if (filename == "m1.jpg") {
        songname.innerHTML = "Nachan Nu Jee Karda";
        marquee.innerHTML = "Nikhita Gandhi, Romy, Angrezi Medium";
    }
    if (filename == "par1.jpg") {
        songname.innerHTML = "Tamma Tamma Again";
        marquee.innerHTML = "Bappi Lahiri, Badshah, Anuradha, Badrinath Ki Dulhaniya";
    }
    if (filename == "pat1.jpg") {
        songname.innerHTML = "Maa Tujhe Salaam";
        marquee.innerHTML = "Shankar Mahadevan , Maa Tujhe Salaam";
    }
    if (filename == "d1.jpg") {
        songname.innerHTML = "Namo Namo";
        marquee.innerHTML = "Amit Trivedi, Kedarnath";
    }
    if (filename == "h1.jpg") {
        songname.innerHTML = "Khuda Jaane";
        marquee.innerHTML = "KK, Shilpa Rao, Bachna Ae Haseeno";
    }

}

var linkimg2 = document.getElementById("img12");
linkimg2.onclick = function() {
    document.getElementById('mainimg').src = linkimg2.src;
    var source = (linkimg2.src).replace(".jpg", ".mp3");
    var final = source.replace("songimg", "songs");
    audio.setAttribute('src', final);
    audio.autoplay = true;
    var filename = linkimg2.src.replace(/^.*[\\\/]/, '');
    if (filename == "l2.jpg") {
        songname.innerHTML = "Tujhe Kitna Chahne Lage";
        marquee.innerHTML = "Jubin Nautiyal,Kabir Singh";
    }
    if (filename == "m2.jpg") {
        songname.innerHTML = "Illegal Weapon 2";
        marquee.innerHTML = "Jasmine Sandlas, Street Dancer";
    }
    if (filename == "par2.jpg") {
        songname.innerHTML = "Abhi Toh Party Shuru Hui Hai";
        marquee.innerHTML = "Baadshah, Aastha Gill, Khoobsoorat";
    }
    if (filename == "pat2.jpg") {
        songname.innerHTML = "Sandese Aate Hai";
        marquee.innerHTML = "Roop Kumar Rathod, Sonu Nigam, Border";
    }
    if (filename == "d2.jpg") {
        songname.innerHTML = "Chalo Bulawa Aaya Hai";
        marquee.innerHTML = "Mahendra kapoor, Narendra Chanchal, Asha Bhosle";
    }
    if (filename == "h2.jpg") {
        songname.innerHTML = "Laare";
        marquee.innerHTML = "Maninder Buttar, Laare";
    }

}
var linkimg3 = document.getElementById("img13");
linkimg3.onclick = function() {
    document.getElementById('mainimg').src = linkimg3.src;
    var source = (linkimg3.src).replace(".jpg", ".mp3");
    var final = source.replace("songimg", "songs");
    audio.setAttribute('src', final);
    audio.autoplay = true;
    var filename = linkimg3.src.replace(/^.*[\\\/]/, '');
    if (filename == "l3.jpg") {
        songname.innerHTML = "Pal Pal Dil Ke pass";
        marquee.innerHTML = "Arijit Singh, Pal Pal Dil Ke Pass";
    }
    if (filename == "m3.jpg") {
        songname.innerHTML = "Kala Chashma";
        marquee.innerHTML = "Baadshah, Neha kakkar, Baar Baar Dekho";
    }
    if (filename == "par3.jpg") {
        songname.innerHTML = "Nachange Saari Raat";
        marquee.innerHTML = "Ankit Tiwari, Mee bros, Junooniyat";
    }
    if (filename == "pat3.jpg") {
        songname.innerHTML = "India Waale";
        marquee.innerHTML = "Vishal Dadlani, Neeti Mohan, KK, Happy New Year";
    }
    if (filename == "d3.jpg") {
        songname.innerHTML = "Madhuban Me Radhika Naache Re";
        marquee.innerHTML = "Naushad, Kohinoor(1960)";
    }
    if (filename == "h3.jpg") {
        songname.innerHTML = "Heer";
        marquee.innerHTML = "Harshdeep Kaur, Jab Tak Hai Jaan";
    }

}
var linkimg4 = document.getElementById("img14");
linkimg4.onclick = function() {
    document.getElementById('mainimg').src = linkimg4.src;
    var source = (linkimg4.src).replace(".jpg", ".mp3");
    var final = source.replace("songimg", "songs");
    audio.setAttribute('src', final);
    audio.autoplay = true;
    var filename = linkimg4.src.replace(/^.*[\\\/]/, '');
    if (filename == "l4.jpg") {
        songname.innerHTML = "The Humma Song";
        marquee.innerHTML = "Tanishk Bagchi, Jubin Nautiyal, Ok Jaanu";
    }
    if (filename == "m4.jpg") {
        songname.innerHTML = "Dilliwali Girlfriend";
        marquee.innerHTML = "Arijit Singh, Sunidhi Chauhan, Yeh Jawani Hai Deewani";
    }
    if (filename == "par4.jpg") {
        songname.innerHTML = "Genda Phool";
        marquee.innerHTML = "Baadshah,Payal Dev";
    }
    if (filename == "pat4.jpg") {
        songname.innerHTML = "Bharat Humko";
        marquee.innerHTML = "Hariharan, Roja";
    }
    if (filename == "d4.jpg") {
        songname.innerHTML = "Govinda Aala Re";
        marquee.innerHTML = "Sajid-Wajid, Wajid Ali, Rangrezz";
    }
    if (filename == "h4.jpg") {
        songname.innerHTML = "Vaaste";
        marquee.innerHTML = "Dhvani Bhanushali, Vaaste";
    }

}
var linkimg5 = document.getElementById("img15");
linkimg5.onclick = function() {
    document.getElementById('mainimg').src = linkimg5.src;
    var source = (linkimg5.src).replace(".jpg", ".mp3");
    var final = source.replace("songimg", "songs");
    audio.setAttribute('src', final);
    audio.autoplay = true;
    var filename = linkimg5.src.replace(/^.*[\\\/]/, '');
    if (filename == "l5.jpg") {
        songname.innerHTML = "Sun Sathiya";
        marquee.innerHTML = "Divya Kumar,Priya Saraiya, ABCD 2";
    }
    if (filename == "m5.jpg") {
        songname.innerHTML = "London Thumakda";
        marquee.innerHTML = "Neha Kakkar, Sonu Kakkar, Queen";
    }
    if (filename == "par5.jpg") {
        songname.innerHTML = "Loca";
        marquee.innerHTML = "Honey Singh, Loca";
    }
    if (filename == "pat5.jpg") {
        songname.innerHTML = "Jai Ho";
        marquee.innerHTML = "A.R. Rehman, Vijay Prakash, Jai Ho";
    }
    if (filename == "d5.jpg") {
        songname.innerHTML = "Yahsomati Maiya Se Bole Nandlala";
        marquee.innerHTML = "Manna Dey, Lata Mangesgkar, Satyam Shivam Sundaram";
    }
    if (filename == "h5.jpg") {
        songname.innerHTML = "Bekhayali";
        marquee.innerHTML = "Sachet Tandon, Kabir Singh";
    }

}
var myVar;

function myfunction() {
    myVar = setTimeout(showpage, 4000);
}

function showpage() {
    document.getElementById("mydiv").style.visibility = "visible";
    document.getElementById("container11").style.display = "none";
}