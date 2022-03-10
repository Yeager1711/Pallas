const showBtn = document.querySelector('.show-btn');
const model = document.querySelector('.model-booking');
boxContainer = model.querySelector('.booking-container')
const closeBtn = document.getElementById('#btn-close');

showBtn.onclick = () =>{
    model.classList.add('active');
}

document.querySelector('#btn-close').onclick = () =>{
    model.classList.remove('active');
}

model.onclick = () =>{
    model.classList.remove('active');
}

// fix sự kiện nổi bọt bong bóng nước
boxContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})