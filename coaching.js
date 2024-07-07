const coaches = [
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach B', gender: 'Female', yearsOfCoaching: 10, description: 'Veteran coach' },
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach B', gender: 'Female', yearsOfCoaching: 10, description: 'Veteran coach' },
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach B', gender: 'Female', yearsOfCoaching: 10, description: 'Veteran coach' },
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach B', gender: 'Female', yearsOfCoaching: 10, description: 'Veteran coach' },
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },


  ];

const lessons = [
    {name: 'Lesson A', coach:'coach A', level: 1, target: 1 ,description: 'Experienced coach' },
    {name: 'Lesson B', coach:'coach B', level: 2, target: 2 ,description: 'Experienced coach' }
]

function formLessons(){
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'card_coach';
        card.innerHTML = `
            <p style="font-size: 3vh; font-weight: bold; margin-left: 10%;">${lesson.name}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${lesson.coach}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">Level ${lesson.level} lesson</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${lesson.description}</p>
            <button class = "button_sub">Subscribe</button>
        `;
        cards.appendChild(card);
    });
}

function select(n){
    if (n == 1){
        document.getElementById("lessons_options").style.display = "none";
        document.getElementById("coaches_options").style.display = "block";
        formCoaches()
        
    }
    else{
        document.getElementById("coaches_options").style.display = "none";
        document.getElementById("lessons_options").style.display = "block";
        formLessons()
    }
}

function formCoaches(){
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    coaches.forEach(coach => {
        const card = document.createElement('div');
        card.className = 'card_coach';
        card.innerHTML = `
            <p style="font-size: 3vh; font-weight: bold; margin-left: 10%;">${coach.name}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.gender}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.yearsOfCoaching} Years of Coaching</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.description}</p>
            <button class = "button_sub" onClick = "toCommunicate()">Contact</button>
        `;
        cards.appendChild(card);
    });
}

function toCommunicate(){
    window.location.href = "./communicate.html";
}