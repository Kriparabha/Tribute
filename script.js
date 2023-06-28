// Reviews Data for manipulation
const reviews = [
  {
    author: 'Rashi Mani Talukdar',
    job: 'Dept. of CS(2022-2025)',
    text: 'The most student friendly teacher from our department was you. That  classes of yours with all sorts of random jokes and " back to the topic " dialogue is badly missed sir. All your efforts to just make us understand programming in the simplest way no other can do it for us now sir. The way you taught us no other can. In every class you asking us "what is the date", teaching us English as well , motivating us for new things',
    /* img: 'https://www.codewithharry.com/img/logo-blue.png'*/
    },
  {
    author: 'Harshajyoti Rabha',
    job: 'Dept. of CS(2021-2024)',
    text: 'Sir, you were the king of the lab and after you left, it feels like there is nothing left in the lab just an empty room devoid of your energy and light its a tragedy that good things and good people end early in this world but but we take solace in the knowledge that you have  moved on to another world you will always be remembered and revered,for the marks you made in our hearts and in the lab we shared ',
    /*img: 'https://yt3.ggpht.com/ytc/AKedOLRHjqTEyYUMkb1ir-TnxrZBo0EotyhtiSmpsY1jAw=s176-c-k-c0x00ffffff-no-rj-mo'*/
    },
  {
    author: 'Mrinmay Kachari',
    job: 'Dept. of CS(Class 12)',
    text: 'A teacher is regarded as the builder of a nation. A student comes across several teachers during college years. Each has a different style and approach to teaching, but your style was unique, sir.I badly miss the classes with your funny jokes and "jokes apart" dialogues. Your motivation gives me extra energy to study harder',
    /*img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'*/
    },
  {
    author: 'Dhanjyoti Nath',
    job: 'Dept of Cs(2019-2022)',
    text: 'The late Er. Subhomoy Dey Sir was known for his unique teaching style, which made complex concepts,seem simple and easy to understand. He had a natural ability to connect with students and make them feel at ease. His classes were never boring, and he always made sure that his students were engaged and enthusiastic about the subject',
    /*img: 'https://yt3.ggpht.com/omDV4RX5BjOw_R3J8L-qwETRq4qqy_uN5DTo58Trg1HW6TM2ejPGuVjtRjh2BrlGpeRLgaPAtA=s176-c-k-c0x00ffffff-no-rj-mo'*/
    }

]

// Creating variables to get elements from our DOM.
const mainImage = document.getElementById('img');
const myAuthor = document.getElementById('author');
const myJob = document.getElementById('job');
const myText = document.getElementById('text');
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const random = document.getElementById('randomBtn')

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener('click', function() {
  indexNum++;
  if (indexNum > length - 1) {
    indexNum = 0;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
  else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
})

// Code for listening previous button event
prev.addEventListener('click', function() {
  indexNum--;
  if (indexNum < 0) {
    indexNum = 3;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
  else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
})

// Code for listening random button event
random.addEventListener('click', function() {
  let num = Math.floor(3 * (Math.random()));

  mainImage.src = reviews[num].img;
  myAuthor.innerHTML = reviews[num].author;
  myJob.innerHTML = reviews[num].job;
  myText.innerHTML = reviews[num].text;
})