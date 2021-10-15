/*  Store '.accordion-1' & '.faq-card' in variables */
const questions = document.querySelectorAll('.accordion-q');
const faqCard = document.querySelector('.faq-card');

/*  Listen for a click on any of the questionss */
questions.forEach( (question) => {
  question.addEventListener('click', () => {
    /*  Within Listerner */
    const height = question.nextElementSibling.scrollHeight;

    /*  Get height of answer */
    /*  Check if quuestion has already been clicked close and return out of function */
    if(question.parentElement.classList.contains('active')) {
      question.parentElement.classList.remove('active');
      question.nextElementSibling.style.maxHeight = "0px";
      return;
    }

    /*  reset all questions/answeers back to inital state */
    questions.forEach( (q) => {
      q.parentElement.classList.remove('active');
      q.nextElementSibling.style.maxHeight = "0px";
    })

    /*  add active class to question seelected & apply height */
    question.parentElement.classList.add('active');
    question.nextElementSibling.style.maxHeight = `${height}px`;
  })
})
