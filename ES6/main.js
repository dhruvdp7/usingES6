window.addEventListener('load', init);

function init() {
    btn = document.querySelector('.galbtn');
    btn.addEventListener('click', btnClick);
}

function btnClick() {
    fetch('https://randomuser.me/api/').then(response=>response.json()).then(data => {
       
        var card = document.createElement('div');
        var img = document.createElement('img');
        var details = document.createElement('div');
        var name = document.createElement('h4');
        var designation = document.createElement('p');


        img.setAttribute('src', data.results[0].picture.large);
        img.setAttribute('alt', 'image');
        name.innerText = data.results[0].name.first;
        designation.innerText = data.results[0].location.city;
        card.classList.add("page_main_gallery_images_card");
        details.classList.add("page_main_gallery_images_card_details");
        details.appendChild(name);
        details.appendChild(designation);
        card.appendChild(img);

        card.appendChild(details);
        gallery.appendChild(card);
    }).catch(err => console.log("error"));
}