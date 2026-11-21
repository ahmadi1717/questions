// const questions = [
//     {hint:"زبان نشانه‌گذاری که برای ساختاردهی صفحات وب استفاده می‌شود؟" , answer: "HTML" , options: ["CSS" , "HTML" , "JavaScript" , "PHP"] , score: 1} ,

//     {hint:"زبانی که برای استایل‌دهی به صفحات وب استفاده می‌شود؟" , answer: "CSS" , options: ["HTML" , "Python" , "CSS" , "Java"] , score: 0.75} ,

//     {hint:"زبانی که باعث زنده شدن صفحات وب می‌شود؟" , answer: "JAVASCRIPT" , options: ["Java" , "TypeScript" , "JavaScript" , "C++"] , score: 1.75} ,

//     {hint:"کتابخانه محبوب جاوااسکریپت برای ساخت رابط کاربری؟" , answer: "REACT" , options: ["Vue" , "Angular" , "jQuery" , "React"] , score: 1.5} ,

//     {hint:"ابزاری برای مدیریت و نسخه‌بندی کدها؟" , answer: "GIT" , options: ["Git" , "Node.js" , "npm" , "Docker"] , score: 0.5} ,

//     {hint:"زبان برنامه‌نویسی که روی جاوااسکریپت ساخته شده است؟" , answer: "TYPESCRIPT" , options: ["Python" , "TypeScript" , "Java" , "Kotlin"] , score: 1.25} ,
 
//     {hint:"سیستمی که برای طراحی ریسپانسیو استفاده می‌شود؟" , answer: "BOOTSTRAP" , options: ["Laravel" , "Django" , "Bootstrap" , "Express"] , score: 1} ,
    
//     {hint:"فرمت محبوب برای تصاویر وکتوری در وب؟" , answer: "SVG" , options: ["JPG", "PNG", "GIF", "SVG"] , score: 0.75} ,

//     {hint:"ابزاری برای بسته‌بندی ماژول‌های جاوااسکریپت؟" , answer: "WEBPACK" , options: ["Webpack", "Git", "Babel", "Vite"] , score: 1} ,

//     {hint: "سرویسی برای میزبانی کد و همکاری تیمی؟" , answer: "GITHUB" , options: ["GitLab", "GitHub", "Bitbucket", "CodePen"] , score: 0.5}
// ];

const questions = [
    {hint:"فرمانده سپاه استان همدان؟" , answer: "سردار زارع کمالی" , options: ["سردار بهاریان" , "سردار راستی" , "سردار زارع کمالی" , "سردار ابوحمزه"] , score: 2} ,    // 3

    {hint:"تعداد نظامیان تیپ 32؟" , answer: "350 نفر" , options: ["350 نفر" , "280 نفر" , "370 نفر" , "300 نفر"] , score: 6} ,  // 1

    {hint:"در چه ماه و سالی منطقه ازگله تحویل تیپ 32 شد؟" , answer: "فروردین-1404" , options: ["خرداد-1404" , "اسفند-1403" , "فروردین-1404" , "اردیبهشت-1404"] , score: 7} ,  // 4

    {hint:"جانشین گردان ادوات تیپ 32؟" , answer: "حجت کرمی" , options: ["محسن چهاردولی" , "حسن قربانی" , "حجت کرمی" , "هیچ کدام"] , score: 6} , // 3

    {hint:"نام مسئول قضایی سپاه همدان؟" , answer: "سرهنگ مرادی" , options: ["سرگرد عشقی" , "سرهنگ مرادی" , "سرهنگ محمودی" , "سرهنگ آقامحمدی"] , score: 2} ,  // 2

    {hint:"با وجود درگیری و توهین در تیپ 32، سه ماه بعد ترفیع جایگاه یافت؟" , answer: "دیگه گذشته، بیخیال" , options: ["سرگرد احمدی" , "سروان جلالی" , "ستوانسوم حمیدی" , "دیگه گذشته، بیخیال"] , score: 6} ,  // 4
 
    {hint:"معاون هماهنگ کننده تیپ 32؟" , answer: "سرهنگ مرادی وحدتی" , options: ["سرهنگ مرادی وحدتی" , "سرگرد صادقی منش" , "سرهنگ ترکمنی" , "هیچ کدام"] , score: 2} ,  // 1
    
    {hint:"تیپ 32، منطقه ازگله را از چه یگانی تحویل گرفت؟" , answer: "تیپ دزفول" , options: ["تیپ اراک", "تیپ دزفول", "تیپ ایلام", "تیپ جوانرود"] , score: 4} ,  // 2

    {hint:"سردار راستی در چند سالگی سردار شد؟" , answer: "44 سالگی" , options: ["47 سالگی", "50 سالگی", "44 سالگی", "42 سالگی"] , score: 5} ,  // 3

    {hint: "تعداد شهدای مدافع حرم ملایر؟" , answer: "3 نفر" , options: ["3 نفر", "4 نفر", "1 نفر", "هیچ کدام"] , score: 4},  // 1

    {hint: "مسئول دژبانی تیپ 32؟" , answer: "سرهنگ رحیمی" , options: ["سرهنگ کرمی", "سرهنگ رحیمی", "سرگرد یوسفی", "سرهنگ برزین"] , score: 5} , // 2

    {hint: "تعداد سربازان فراری تیپ 32 در حال حاضر؟" , answer: "75 نفر" , options: ["40 نفر", "52 نفر", "75 نفر", "66 نفر"] , score: 8} , // 3

    {hint: "نام سه فرماندهٔ اخیر گردان ادوات تیپ 32؟" , answer: "چهاردولی-بیابادی-وفایی" , options: ["وفایی-کرمی-چهاردولی", "چهاردولی-بیابادی-کرمی", "بیابادی-وفایی-قربانی", "چهاردولی-بیابادی-وفایی"] , score: 7} , // 4

    {hint: "تعداد گردان های امام حسین(ع) تیپ 32؟" , answer: "یازده" , options: ["نه", "دوازده", "ده", "یازده"] , score: 8} , // 4

    {hint: "در سال 1396 حین درگیری در منطقه ازگله به شهادت رسید؟" , answer: "شهید احمد شوهانی" , options: ["شهید احمد شوهانی", "شهید محمدحسین بشیری", "شهید سیدمیلاد مصطفوی", "شهید احمدرضا احمدی"] , score: 5} , // 1

    {hint: "حقوق یک نظامی ساده با سابقهٔ 4 سال؟" , answer: "21,700,000" , options: ["25,200,000", "27,650,000", "21,700,000", "23,400,000"] , score: 6} , // 3

    {hint: "چرا حین استخدامی سپاه، برخی افراد در گزینش پارتی بازی می کنند؟" , answer: "حواسشون نیست" , options: ["شاید فکر می کنند پارتی بازی نیست", "حواسشون نیست", "از جایگاهشون سوءاستفاده می کنند", "برای رضای خدا این کار را می کنند"] , score: 7} , // 2

    {hint: "جانشین فرماندهان سپاه استانی و تیپ 32؟" , answer: "سرهنگ کریمی-سرهنگ روهینا" , options: ["سرهنگ کریمی-سرهنگ روهینا", "سرهنگ مرادی-سرهنگ کاظمی" , "سرهنگ روهینا-سرهنگ مختاری", "هیچ کدام"] , score: 2} , // 1

    {hint: "دانشگاه نیروی زمینی سپاه در اصفهان؟" , answer: "دانشگاه امیرالمؤمنین(ع)" , options: ["دانشگاه امام حسین(ع)", "دانشگاه علویون", "دانشگاه امام علی(ع)", "دانشگاه امیرالمؤمنین(ع)"] , score: 3} ,  // 4

    {hint: "تعداد گردان های پیاده مستقر در تیپ؟" , answer: "سه" , options: ["دو", "سه", "یک", "صفر"] , score: 5}   // 2

];

const questionTime = 20;

const questionText = document.querySelector('#question-text');
const questionNumber = document.querySelector('#question-number');
const optionsContainer = document.querySelector('#options');
const scoreContainer = document.querySelector('#score');
const questionCounter = document.querySelector('#question-counter');
const questionProgress = document.querySelector('#question-progress');
const questionProgressTrack = document.querySelector('#progressbar');
const timerText = document.querySelector('#timer-text');
const timerProgress = document.querySelector('#timer-progress');
const footerContainer = document.querySelector('#footer-container');

const modal = document.querySelector('#modal-screen');
const modalResultsContainer = document.querySelector('#modal-results');
const modalRestartBtn = document.querySelector('#modal-restart');

const resultItems = [
    {id:'correct-count' , title:'پاسخ صحیح' , icon:'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' ,
    color: {bg:'bg-emerald-100' , icon:'text-emerald-600' , text:'text-emerald-700'}} ,

    {id:'wrong-count' , title:'پاسخ اشتباه' , icon:'m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' ,
    color: {bg:'bg-rose-100' , icon:'text-rose-600' , text:'text-rose-700'}} ,

    {id:'unanswered-count' , title:'بدون پاسخ' , icon:'M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z' ,
    color: {bg:'bg-orange-100' , icon:'text-orange-600' , text:'text-orange-700'}} ,

    {id:'final-score' , title:'امتیاز نهایی' , icon: 'M8 21h8m-4-4v4m-7-16h14v4a7 7 0 0 1-14 0V5Zm0 2H3v2a5 5 0 0 0 5 5m8-7h5v2a5 5 0 0 1-5 5' ,
    color: {bg:'bg-sky-100' , icon:'text-sky-600' , text:'text-sky-700'}}
];


const userAnswers = questions.map(() => ({                                   // وضعیت هر سؤال مستقل نگهداری می‌شود تا امتیاز دوباره محاسبه نشود.
    selectedOption: null, 
    isCorrect: null,
    isAnswered: false,
    isTimedOut: false
}));

let score = 0;
const updateScore = () => {
    scoreContainer.innerHTML = score;
};

let timerTimeout = null;
let timerAnimationFrame = null;
const clearQuestionTimer = () => {
    clearTimeout(timerTimeout);
    cancelAnimationFrame(timerAnimationFrame);
    timerTimeout = null;
    timerAnimationFrame = null;
};

const updateTimer = (seconds) => {
    const safeSeconds = Math.max(0, seconds);
    const percentage = (safeSeconds / questionTime) * 100;
    const secondTime = Math.floor(safeSeconds);

    timerText.innerHTML = `${secondTime < 10 ? `0${secondTime}` : secondTime} ثانیه`;
    timerProgress.style.width = `${percentage}%`;
    timerProgress.classList.toggle('is-low', safeSeconds <= 5);
};

const stopTimer = () => {
    clearQuestionTimer();
};

let questionStartedAt = 0;
let remainingTime = questionTime;
let isQuizFinished = false;
const startTimer = () => {
    clearQuestionTimer();

    const answerState = userAnswers[currentIndex];

    if (answerState.isAnswered || answerState.isTimedOut || isQuizFinished) return;

    remainingTime = questionTime;
    questionStartedAt = performance.now();

    updateTimer(remainingTime);

    const animateTimer = () => {
        const elapsedSeconds = (performance.now() - questionStartedAt) / 1000;

        remainingTime = Math.max(0, questionTime - elapsedSeconds);

        updateTimer(remainingTime);

        if (remainingTime > 0) {
            timerAnimationFrame = requestAnimationFrame(animateTimer);
        }
    };

    timerAnimationFrame = requestAnimationFrame(animateTimer);

    timerTimeout = setTimeout(() => {
        clearQuestionTimer();
        handleTimeExpired();
    }, questionTime * 1000);
};

const buttons = [
    {id: 'prev' , iconClass: 'fa-chevron-right -mt-0.5' , title: 'قبلی'} ,
    {id: 'reset' , iconClass: 'fa-rotate' , title: 'تلاش مجدد'} ,
    {id: 'next' , iconClass: 'fa-chevron-left -mt-0.5' , title: 'بعدی'}
];

const showFooter = () => {
    buttons.forEach((item) => {
        footerContainer.insertAdjacentHTML('beforeend',
           `<button type="button" id="${item.id}" class="action-btn flex-row-custom gap-1.5 lg:gap-2 px-1 py-2 rounded-md font-semibold text-nowrap ${item.id !== 'reset' ? 'text-slate-700 bg-slate-200 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-60' : 'text-white bg-cyan-600 transition hover:bg-cyan-700'} ${item.id === 'next' ? 'hidden' : ''}" ${item.id === 'prev' ? 'disabled' : ''}>
                ${item.id === 'prev' ?
                    `<i class="fa-solid ${item.iconClass} fa-3" aria-hidden="true"></i>
                    <p class="">${item.title}</p>` :
                    `<p class="">${item.title}</p>
                    <i class="fa-solid ${item.iconClass}" aria-hidden="true"></i>`
                }
            </button>`
        );
    });
};


showFooter();

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const resetBtn = document.querySelector('#reset');


let currentIndex = 0;
let maxIndex = 0;
const updateButtons = () => {
    prevBtn.disabled = currentIndex === 0 || isQuizFinished;
    nextBtn.classList.toggle('hidden' , currentIndex >= maxIndex || isQuizFinished);
};

const updateProgress = () => {
    const percentage = ((currentIndex + 1) / questions.length) * 100;

    questionProgress.style.width = `${percentage}%`;

    questionProgressTrack.setAttribute('aria-valuenow', String(Math.round(percentage)));
};

const renderOptions = () => {
    const question = questions[currentIndex];
    const answerState = userAnswers[currentIndex];

    optionsContainer.innerHTML = '';

    question.options.forEach((option, optionIndex) => {
        const shouldRevealAnswer = answerState.isAnswered || answerState.isTimedOut;
        let result = shouldRevealAnswer && (option.toLowerCase() === question.answer.toLowerCase());

        let styleColor = '';
        if(shouldRevealAnswer) {
            if(result) styleColor = 'is-correct';

            else if(optionIndex === answerState.selectedOption) {
                styleColor = 'is-wrong';
            } 
        }

        optionsContainer.insertAdjacentHTML('beforeend' ,
           `<button type="button" onclick="selectAnswer(${optionIndex})" class="option-btn ps-1.5 pe-2.5 md:pe-3 lg:pe-3.5 xl:pe-4 py-1.75 w-full text-sm sm:text-base xl:border-2 ${styleColor} ${shouldRevealAnswer ? 'pointer-events-none opacity-70' : ''}">
                <span class="option-number text-[13px] sm:text-sm md:text-[15px] lg:text-base"> ${optionIndex + 1} </span>
                <span class="flex-1 leading-7 lg:text-[17px]"> ${option} </span>
                ${result ? '<i class="fa-solid fa-check text-sm sm:text-[15px] lg:text-base xl:text-[17px]"> </i>' : ''}
            </button>`
        )
    })
};

const renderQuestion = ({restartClock = true} = {}) => {
    const question = questions[currentIndex];
    const answerState = userAnswers[currentIndex];

    maxIndex = Math.max(maxIndex , currentIndex);

    questionNumber.innerHTML = `${currentIndex + 1}.`;
    questionText.innerHTML = question.hint;
    questionCounter.innerHTML = `سؤال ${currentIndex + 1} از ${questions.length}`;
    renderOptions();
    updateScore();
    updateButtons();
    updateProgress();

    if (answerState.isAnswered || answerState.isTimedOut) {
        stopTimer();
        updateTimer(0);
    } 
    else if (restartClock) {
        startTimer();
    }
};

let answerAdvanceTimeout = null;
const goToNextQuestion = () => {
    if(currentIndex >= maxIndex || isQuizFinished) return;
    clearTimeout(answerAdvanceTimeout);
    currentIndex++;
    renderQuestion();
};

const selectAnswer = (optionIndex) => {
    const answerState = userAnswers[currentIndex];
    if (answerState.isAnswered || isQuizFinished) return;

    stopTimer();

    const selectedOption = questions[currentIndex].options[optionIndex];
    const isCorrect = selectedOption.toLowerCase() === questions[currentIndex].answer.toLowerCase();

    answerState.selectedOption = optionIndex;
    answerState.isCorrect = isCorrect;
    answerState.isAnswered = true;
    answerState.isTimedOut = false;

    if (isCorrect) score += questions[currentIndex].score;

    renderOptions();
    updateScore();
    updateButtons();
    updateProgress();

    const answeredQuestionIndex = currentIndex;
    answerAdvanceTimeout = setTimeout(() => {
        if (currentIndex !== answeredQuestionIndex || isQuizFinished) return;

        if (currentIndex === questions.length - 1) {
            finishQuiz();
            return;
        }

        currentIndex++;
        renderQuestion();
    }, 800);
};

const handleTimeExpired = () => {
    const answerState = userAnswers[currentIndex];
    if (answerState.isAnswered || isQuizFinished) return;
    answerState.isTimedOut = true;

    renderOptions();
    updateProgress();

    const expiredQuestionIndex = currentIndex;

    answerAdvanceTimeout = setTimeout(() =>{
        if (currentIndex !== expiredQuestionIndex || isQuizFinished) return;

        if (currentIndex === questions.length - 1) {
            finishQuiz();
            return;
        }

        currentIndex++;
        renderQuestion();
    }, 1000) 
};

const goToPreviousQuestion = () => {
    if (currentIndex === 0 || isQuizFinished) return;
    clearTimeout(answerAdvanceTimeout);
    stopTimer();
    currentIndex--;
    renderQuestion();
};

const showModalResults = () => {
    const resultRows = [resultItems.slice(0, 2) , resultItems.slice(2, 4)];

    resultRows.forEach((row) => {
        modalResultsContainer.insertAdjacentHTML('beforeend', 
           `<div class="w-full min-w-0 h-fit flex-row-custom gap-2.5 2xs:gap-3">

            </div>`
        );

        const rowContainer = modalResultsContainer.lastElementChild;                 // انتخاب آخرین ردیف برای قرار دادن آیتم ها

        row.forEach((item) => {
            rowContainer.insertAdjacentHTML('beforeend', 
               `<div class="min-w-0 flex-row-custom flex-1 gap-1.5 xs:gap-3 md:gap-4 lg:gap-5 xl:gap-9 rounded-xl ${item.color.bg} px-2 lg:px-3 lg:px-3 py-2.5 lg:py-3 xl:py-3.5">
                    <span class="w-25.5 flex justify-start items-center gap-1 text-slate-600">
                        <svg class="w-4.5 h-4.5 md:w-5 md:h-5 xl:w-5.5 xl:h-5.5 shrink-0 ${item.color.icon} " fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="${item.icon}"/>
                        </svg>
                        <p class="text-sm lg:font-bold xl:text-[15px]"> ${item.title} : </p>
                    </span>
                    <strong id="${item.id}" class="text-sm xl:text-[15px] lg:font-bold ${item.color.text}"> </strong>
                </div>`
            );
        });
    });
};

const finishQuiz = () => {
    stopTimer();
    isQuizFinished = true;

    const correctCount = userAnswers.filter((answer) => answer.isCorrect === true).length;
    const wrongCount = userAnswers.filter((answer) => answer.isAnswered && answer.isCorrect === false).length;
    const unansweredCount = userAnswers.filter((answer) => !answer.isAnswered).length;
    const maxScore = questions.reduce((total, question) => total + question.score, 0);

    document.querySelector('#correct-count').innerHTML = correctCount;
    document.querySelector('#wrong-count').innerHTML = wrongCount;
    document.querySelector('#unanswered-count').innerHTML = unansweredCount;
    document.querySelector('#final-score').innerHTML = score;
    document.querySelector('#max-score').innerHTML = maxScore;

    modal.classList.remove('hidden');
    modalRestartBtn.focus();
    updateButtons();
};

const restartQuiz = () => {
    stopTimer();
    currentIndex = 0;
    score = 0;
    isQuizFinished = false;

    userAnswers.forEach((answer) => {
        answer.selectedOption = null;
        answer.isCorrect = null;
        answer.isAnswered = false;
        answer.isTimedOut = false;
    });

    modal.classList.add('hidden');
    renderQuestion();

    maxIndex = 0;
    clearTimeout(answerAdvanceTimeout);
};


prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
resetBtn.addEventListener('click', restartQuiz);
modalRestartBtn.addEventListener('click', restartQuiz);
window.addEventListener('load' , () => {
    renderQuestion();
    showModalResults();
})
