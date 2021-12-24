'use strict'

const faqHeading = document.querySelectorAll('.faqHeading')
const questionBlock = document.querySelectorAll('.questionBlock')

faqHeading.forEach( (eachQuestion, i) => {

    eachQuestion.addEventListener('click', () => {

        questionBlock.forEach( (eachAnswer) => {
            eachAnswer.classList.remove('active')
        })

        questionBlock[i].classList.add('active')

    })
})