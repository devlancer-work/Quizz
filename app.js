const bundle = [
    {
        id: 1,
        question: 'Who is the founder of Tesla Inc.?',
        opt1: 'Jeff Bezos',
        opt2: 'Elon Musk',
        opt3: 'Steve Jobs',
        opt4: 'Mark Zuckerberg',
        ans: 'Elon Musk'
    },
    {
        id: 2,
        question: 'Which country has the largest costline in the world?',
        opt1: 'America',
        opt2: 'Russia',
        opt3: 'Canada',
        opt4: 'China',
        ans: 'Canada'
    },
    {
        id: 3,
        question: 'Who painted the Mona Lisa?',
        opt1: 'Pablo Picasso',
        opt2: 'Leonardo da Vinci',
        opt3: 'Vincent van Gogh',
        opt4: 'Claude Monet',
        ans: 'Leonardo da Vinci'
    },
    {
        id: 4,
        question: 'Which planet is closet to the sun?',
        opt1: 'Earth',
        opt2: 'Mars',
        opt3: 'Venus',
        opt4: 'Mercury',
        ans: 'Mercury'
    },
    {
        id: 5,
        question: 'How many valves does the heart have?',
        opt1: 'Three',
        opt2: 'One',
        opt3: 'Four',
        opt4: 'Five',
        ans: 'Four'
    },
    {
        id: 6,
        question: 'How many bones does a shark have?',
        opt1: 'less than 100',
        opt2: 'More than 100',
        opt3: 'More than 500',
        opt4: 'None',
        ans: 'None'
    },
    {
        id: 7,
        question: 'What are the three water signs in astrology?',
        opt1: 'Tarus, Aries and Gemini',
        opt2: 'Cancer, Scorpio and Pisces',
        opt3: 'Pisces, Gemini and Aquarius',
        opt4: 'Libra, Cancer and Leo',
        ans: 'Cancer, Scorpio and Pisces'
    },
    {
        id: 8,
        question: 'What is the strongest muscle in the human body?',
        opt1: 'Biceps',
        opt2: 'Triceps',
        opt3: 'Deltoid',
        opt4: 'The Masseter',
        ans: 'The Masseter'
    },
    {
        id: 9,
        question: 'What is a baby rabbit called?',
        opt1: 'Calf',
        opt2: 'Fawn',
        opt3: 'Colt',
        opt4: 'A kit',
        ans: 'A kit'
    },
    {
        id: 10,
        question: 'How many sides does a heptadecagon have?',
        opt1: 'Eight',
        opt2: 'Twelve',
        opt3: 'Fifteen',
        opt4: 'Seventeen',
        ans: 'Seventeen'
    }
]



const mainQuestion = document.querySelector('.main-heading');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const submitBtn = document.querySelector('.submit-btn');
const options = document.querySelectorAll('.option');
const result = document.querySelector('.result');
const startBtn = document.querySelector('.start-btn');
const index = document.querySelector('.index');
const restartBtn = document.querySelector('.restart');
const correctAnswers = document.querySelector('.correct-answer');
const totalScore = document.querySelector('.total-score');
const loader = document.querySelector('.loader-bg');

let count = 0;
let marks = 0;
let flag = 0;
let click = 0;



window.addEventListener('DOMContentLoaded', function(){
    showContent();
});
function showContent(){
    mainQuestion.textContent = bundle[count].question;
    opt1.textContent = bundle[count].opt1;
    opt2.textContent = bundle[count].opt2;
    opt3.textContent = bundle[count].opt3;
    opt4.textContent = bundle[count].opt4;
}

startBtn.addEventListener('click', function(){
    index.classList.add('hide-index');
    loader.classList.add('play');
    setTimeout(function(){
        loader.classList.remove('play');
    }, 1500);
    
});

options.forEach(function(option){
    option.addEventListener('click', function(e){
        let answer = bundle[count].ans;
        let currentValue = e.target.textContent;
        click = 1;

        options.forEach(function(item){
            if(item !== option){
                item.classList.remove('select');
            }
        })
        option.classList.add('select');

        if(currentValue == answer){
            flag = 1;
        }else{
            flag = 0;
        }
    });
});

submitBtn.addEventListener('click', function(){

    if(click == 1){
        if(count == 9){
            if(flag == 1){
                marks = marks + 1;
            }
            loader.classList.add('play');
            setTimeout(function(){
                loader.classList.remove('play');
            }, 1500);
            result.classList.remove('hide-result');
            totalScore.textContent = marks * 2;
            correctAnswers.textContent = marks;
        }else{
            count = count + 1;
            showContent();
            click = 0;
            options.forEach(function(option){
                option.classList.remove('select');
            })
        }
        if(flag == 1){
            marks = marks + 1;
        }
    
        console.log(marks);
    }else {
        alert('Choose a option');
    }
});


restartBtn.addEventListener('click', function(){

    index.classList.remove('hide-index');
    result.classList.add('hide-result');
    loader.classList.add('play');
    setTimeout(function(){
        loader.classList.remove('play');
    }, 1500);
    options.forEach(function(option){
        option.classList.remove('select');
    });
    count = 0;
    marks = 0;
    flag = 0;
    click = 0;
    showContent(bundle);
    console.clear();
})








