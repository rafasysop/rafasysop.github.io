const fecharVideo = event => {
    console.log(event.target.parentNode.previousElementSibling)
    document.body.removeChild(event.target.parentNode.previousElementSibling);
    document.body.removeChild(event.target.parentNode);
    localStorage.setItem('movie', 1);
};

const chamaMovie = () => {
    const bodyContainer = document.body;
    const fundo = document.createElement('div');
    fundo.classList.add('fundo');
   


    const movie = document.createElement('section');
    movie.classList.add('movie');

    const buttonFechar = document.createElement('section');
    buttonFechar.innerHTML = 'FECHAR';
    buttonFechar.classList.add('fechar-movie');
    buttonFechar.addEventListener('click', fecharVideo);

    const src = document.createElement('div');
    src.classList.add('src');

    const videoTag = document.createElement('video');
    videoTag.classList.add('videoplay');
    videoTag.controls = true;
    videoTag.autoplay = true;
    videoTag.muted = true;
    setTimeout(() => {videoTag.classList.add('disp')}, 500);

    
    videoTag.innerHTML = 'Your browser does not support the video tag.'
    videoTag.src = './movies/01.mp4';
    videoTag.type = 'video/mp4';
    bodyContainer.appendChild(fundo);
    movie.appendChild(buttonFechar);
    src.appendChild(videoTag)
    movie.appendChild(src);  
    bodyContainer.appendChild(movie);
    setTimeout(() => {videoTag.muted = false}, 3500)
}

const chhamaZap = () => {
    window.open('https://api.whatsapp.com/send?phone=5583998877125&text=Ol%C3%A1%20venho%20do%20site%2C%20gostaria%20de%20saber%20da%20agenda%20dos%20passeios...', '_blank');
};


localStorage.getItem('movie') ? '' : chamaMovie();

document.querySelector('.btn').addEventListener('click', chamaMovie);

document.querySelector('#whatsapp').addEventListener('click', chhamaZap);

// bodyContainer.appendChild(movie);`
//     <div class="fundo"></div>
//     <section class="movie">
//         <button class="fechar-movie">X</button>
//         <div class="src">
//         <video src="" width="100%" height="100%" autoplay></video> 
//         </div>
//     </section>
//     `;