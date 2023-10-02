const candidatos = [
  {
    image:"https://ts2.mm.bing.net/th?q=chainsaw%20man%20makima%20fanart",
    name:"Thales Rosário",
    profession:"Programador",
    birth:"10/11/2003",
    phone:"(27) 99917-8693",
    email:"thales2rosario@gmail.com"
  },
  {
    image:"https://proyectando.com.ar/wp-content/uploads/2023/01/Thomas-Brodie-Sangster-Wiki-biografia-edad-altura-fortuna-novia.jpg",
    name:"Lucas Fredriksson",
    profession:"Empresário",
    birth:"16/05/1995",
    phone:"(54) 99886-5589",
    email:" luke9fredriksson@gmail.com"
  },
  {
 image:"https://www.cdz.com.br/forum/uploads/monthly_2021_09/Seiya.png.fca742dfb00a95978905abed6168d407.png",
    name:"Izumi Miyamura",
    profession:"Ator",
    birth:"16/11/1996",
    phone:"(11) 99817-8653",
    email:" izumimiyamura234@gmail.com"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/pt/thumb/5/5a/Dino_Thunder_Kira_2004.jpg/200px-Dino_Thunder_Kira_2004.jpg",
    name:"Kira Ford",
    profession:"Cantora",
    birth:"27/06/1984",
    phone:"(51) 99156-1785",
    email:" kiraford35@gmail.com"
    
  },

  
];

const image = document.querySelector("img");
const nome = document.querySelector("#nome");
const profissao = document.querySelector("#profissao");
const nascimento = document.querySelector("#nascimento");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");


const modalNewCandidato = document.querySelector("#modal");
const overFlow = document.querySelector("#overflow");


const inputImage = document.querySelector("#input-image");
const inputName = document.querySelector("#input-name");
const inputProfession = document.querySelector("#input-profession");
const inputDate = document.querySelector("#input-date");
const inputTel = document.querySelector("#input-tel");
const inputEmail = document.querySelector("#input-email");


let choice = 0

function changePerfil(indice) {
  
   image.src = candidatos[indice].image;
   nome.innerText = candidatos[indice].name;
   profissao.innerText = candidatos[indice].profession;
   nascimento.innerText = candidatos[indice].birth;
   telefone.innerText = candidatos[indice].phone;
   email.innerText = candidatos[indice].email;
  
}


function nextPerfil() {
    if (choice === candidatos.length - 1) {
        choice = 0
    } else {
        choice++
    }
    changePerfil(choice)
}

function beforePerfil() {
    if (choice === 0) {
        choice = 2
    } else {
        choice--
    }
    changePerfil(choice)
}

function closeModal() {
    modalNewCandidato.style.display = "none";
    overFlow.style.display = "none";
}

function openModal() {
    modalNewCandidato.style.display = "block";
    overFlow.style.display = "block";
}

function addNewCandidato() {
  
    const newCandidato = {
      
    image:inputImage.value,
    name:inputName.value,
    profession:inputProfession.value,
    birth:inputDate.value,
    phone:inputTel.value,
    email:inputEmail.value,
  
  }
  
  candidatos.push(newCandidato);
  
  closeModal()
  
}

