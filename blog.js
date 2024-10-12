// Javascript for Faqs section

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})