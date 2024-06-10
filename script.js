"use strict";
const item_atual = document.querySelector("#item_atual");
const menu_icon = document.getElementsByTagName('span')[0];
const secoes = document.getElementById('iopcoes');
const secoes_menu = document.getElementById('secoes');
const setaDireita = document.getElementById('setaDireita');
const setaEsquerda = document.getElementById('setaEsquerda');
const nome = document.getElementById('nome');
const description = document.getElementById('description');
let urls_especias = [
    "https://img.freepik.com/fotos-premium/cafe-espresso-em-copo-na-mesa-coffee-moment_756535-4160.jpg?w=740", 
    "https://www.thedailymeal.com/img/gallery/the-classic-mocha-is-a-coffee-shop-staple-but-what-is-it/intro-1686048648.webp", 
    "https://as1.ftcdn.net/v2/jpg/08/37/54/68/1000_F_837546850_Wctv8hCoMnT8E0ehJpkwNyKShENxJb0N.jpg"
]

let urls = urls_especias

let urls_gelada = [
    "https://www.publicdomainpictures.net/pictures/200000/velka/iced-coffee-inside.jpg",
    "https://images.pexels.com/photos/15086187/pexels-photo-15086187/free-photo-of-close-up-of-a-glass-with-iced-caramel-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://tse1.mm.bing.net/th?id=OIP.e79GeTXW2YHtSw6v-0jh1QHaE8&pid=Api&P=0&h=180"
]

let urls_n_cof = [
    "http://4.bp.blogspot.com/-GNhDlq5wDeE/Tdv3HDusOcI/AAAAAAAAC2g/xZU-7qZtMqc/s1600/cupcake-xicara.JPG",
    "https://www.publicdomainpictures.net/pictures/270000/nahled/herbal-tea-15362018502YT.jpg",
    "https://foto.wuestenigel.com/wp-content/uploads/api/a-glass-of-fresh-orange-juice-with-fruit-oranges.jpeg"
]

let cont = 0;

item_atual.addEventListener('mouseover', (evt)=>{
    let imag = document.querySelector('div#item_atual > img');
    imag.classList.add('destaque');
});

item_atual.addEventListener('mouseout', (evt)=>{
    let imag = document.querySelector('div#item_atual > img');
    imag.classList.remove('destaque');
});

secoes.addEventListener('change', ()=>{
    let imag = document.querySelector('div#item_atual > img');
    if(secoes.value == 'Bebidas Geladas'){
        urls = urls_gelada
        nome.innerText = 'Iced Coffee'
        imag.src = 'https://www.publicdomainpictures.net/pictures/200000/velka/iced-coffee-inside.jpg'
        description.innerHTML = 'Café gelado clássico, preparado com café fresco e servido com gelo. Refrescante e perfeito para os amantes de café em dias quentes.'
    }else if(secoes.value == 'Bebidas Não-cafeinadas'){
        urls = urls_n_cof
        nome.innerText =  'Hot Chocolate'
        imag.src = 'http://4.bp.blogspot.com/-GNhDlq5wDeE/Tdv3HDusOcI/AAAAAAAAC2g/xZU-7qZtMqc/s1600/cupcake-xicara.JPG'
        description.innerHTML = "Leite quente misturado com chocolate derretido, criando uma bebida cremosa e reconfortante, finalizada com chantilly para um toque extra de indulgência."
    }else{
        urls = urls_especias
        nome.innerText =  'Espresso'
        imag.src = "https://img.freepik.com/fotos-premium/cafe-espresso-em-copo-na-mesa-coffee-moment_756535-4160.jpg?w=740"
        description.innerHTML = "Nosso espresso possui um sabor robusto e intenso, com notas de chocolate amargo, nozes e caramelo, acompanhado de uma agradável acidez e amargor suave. A crema, camada dourada no topo, adiciona uma textura aveludada e retém os aromas, proporcionando uma experiência sensorial rica e completa."
    }
});

menu_icon.addEventListener('click', ()=>{
    secoes_menu.classList.toggle('invisivel')
    if(menu_icon.innerText == 'menu'){
        menu_icon.innerText = 'close'
    }else{
        menu_icon.innerText = 'menu'
    }
});

setaDireita.addEventListener('click', ()=>{
    let imag = document.querySelector('div#item_atual > img');
    if(cont == urls.length - 1){
        cont = 0
        imag.setAttribute('src', urls[cont]);
        nome.innerText = 'Espresso';
        description.innerText = "Nosso espresso possui um sabor robusto e intenso, com notas de chocolate amargo, nozes e caramelo, acompanhado de uma agradável acidez e amargor suave. A crema, camada dourada no topo, adiciona uma textura aveludada e retém os aromas, proporcionando uma experiência sensorial rica e completa";
        if(secoes.value == 'Bebidas Geladas'){
            nome.innerHTML = "Iced Coffee"
            description.innerHTML = "Café gelado clássico, preparado com café fresco e servido com gelo. Refrescante e perfeito para os amantes de café em dias quentes."
        }else if(secoes.value == 'Bebidas Não-cafeinadas'){
            nome.innerHTML = "Hot Chocolate"
            description.innerHTML = "Leite quente misturado com chocolate derretido, criando uma bebida cremosa e reconfortante, finalizada com chantilly para um toque extra de indulgência."
        }
    }else{
        cont+=1
        if(cont == 1){
            nome.innerHTML = "Mocha"
            description.innerText = "O mocha apresenta um sabor rico e cremoso, combinando a intensidade do espresso com a doçura do chocolate. Notas de cacau profundo e uma cremosidade suave se destacam, enquanto o aroma é uma tentadora mistura de café e chocolate."
            if(secoes.value == 'Bebidas Geladas'){
                nome.innerHTML = "Iced Caramel Macchiato"
                description.innerHTML = "Camadas de espresso gelado, leite cremoso e gelo, finalizadas com uma generosa calda de caramelo. Uma combinação deliciosa de sabores para um toque doce e sofisticado."
            }else if(secoes.value == 'Bebidas Não-cafeinadas'){
                nome.innerHTML = "chá de camomila"
                description.innerHTML = "Infusão suave de flores de camomila, conhecida por suas propriedades calmantes. Perfeito para relaxar e descontrair em qualquer momento do dia."
            }
        }else{
            nome.innerHTML = "Affogato"
            description.innerText = "O affogato oferece um delicioso contraste de sabores, combinando a cremosidade doce do gelato de baunilha com a intensidade robusta do espresso. O aroma é uma irresistível mistura de café recém-preparado e baunilha."
            if(secoes.value == 'Bebidas Geladas'){
                nome.innerHTML = "Cold Brew"
                description.innerHTML = "Café preparado a frio por 12 horas, resultando em uma bebida suave e refrescante, servida com gelo. Ideal para quem busca um sabor mais intenso e menos amargor."
            }else if(secoes.value == 'Bebidas Não-cafeinadas'){
                nome.innerHTML = "Orange Juice"
                description.innerHTML = "Suco de laranja fresco, espremido na hora para oferecer um sabor vibrante e cítrico. Uma opção saudável e refrescante para começar bem o dia."
            }
        }
        imag.setAttribute('src', urls[cont])
    }
});

setaEsquerda.addEventListener('click', ()=>{
    let imag = document.querySelector('div#item_atual > img');
    if(cont == 0){
        cont = urls.length - 1
        imag.setAttribute('src', urls[cont]);
        nome.innerText = 'Affogato';
        description.innerText = "O affogato oferece um delicioso contraste de sabores, combinando a cremosidade doce do gelato de baunilha com a intensidade robusta do espresso. O aroma é uma irresistível mistura de café recém-preparado e baunilha.";
        if(secoes.value == 'Bebidas Geladas'){
            nome.innerHTML = "Cold Brew"
            description.innerHTML = "Café preparado a frio por 12 horas, resultando em uma bebida suave e refrescante, servida com gelo. Ideal para quem busca um sabor mais intenso e menos amargor."
        }else if(secoes.value == 'Bebidas Não-cafeinadas'){
            nome.innerHTML = "Orange Juice"
            description.innerHTML = "Suco de laranja fresco, espremido na hora para oferecer um sabor vibrante e cítrico. Uma opção saudável e refrescante para começar bem o dia."
        }
    }else{
        cont-=1
        if(cont == 1){
            nome.innerHTML = "Mocha"
            description.innerText = "O mocha apresenta um sabor rico e cremoso, combinando a intensidade do espresso com a doçura do chocolate. Notas de cacau profundo e uma cremosidade suave se destacam, enquanto o aroma é uma tentadora mistura de café e chocolate."
            if(secoes.value == 'Bebidas Geladas'){
                nome.innerHTML = "Iced Caramel Macchiato"
                description.innerHTML = "Camadas de espresso gelado, leite cremoso e gelo, finalizadas com uma generosa calda de caramelo. Uma combinação deliciosa de sabores para um toque doce e sofisticado."
            }else if(secoes.value == 'Bebidas Não-cafeinadas'){
                nome.innerHTML = "chá de camomila"
                description.innerHTML = "Infusão suave de flores de camomila, conhecida por suas propriedades calmantes. Perfeito para relaxar e descontrair em qualquer momento do dia."
            }
        }else{
            nome.innerHTML = "Espresso"
            description.innerText = "Nosso espresso possui um sabor robusto e intenso, com notas de chocolate amargo, nozes e caramelo, acompanhado de uma agradável acidez e amargor suave. A crema, camada dourada no topo, adiciona uma textura aveludada e retém os aromas, proporcionando uma experiência sensorial rica e completa"
            if(secoes.value == 'Bebidas Geladas'){
                nome.innerHTML = "Iced Coffee"
                description.innerHTML = "Café gelado clássico, preparado com café fresco e servido com gelo. Refrescante e perfeito para os amantes de café em dias quentes."
            }else if(secoes.value == 'Bebidas Não-cafeinadas'){
                nome.innerHTML = "Hot Chocolate"
                description.innerHTML = "Leite quente misturado com chocolate derretido, criando uma bebida cremosa e reconfortante, finalizada com chantilly para um toque extra de indulgência."
            }
        }
        imag.setAttribute('src', urls[cont])
    }
})

