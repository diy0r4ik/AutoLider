// let wrapper = document.querySelector(".wrapper");


// // fetch("https://jsonplaceholder.typicode.com/users")
// // .then((res) => res.json())
// // .then((users) =>  console.log(users))


// fetch("#A")
// .then((res) => res.json())
// .then((A) => console.log(A),

//         A.Search.forEach(element => {
//             console.log(element);
//             wrapper.innerHTML +=`
//             <div class="card">
//             <div class="img">
//             <p>${element.name}</p>
//             </div>
//                 <h2>${element.Title}</h2>
//                 <p>${element.Year}</p>
//             </div>
//             `
//             ;
//         })
// );
for(var i=1;i<=Math.ceil(A.length/9);i++){
document.querySelector('.pages11').innerHTML +=`
<li class="page-item"><a onclick='my(${i})' class="page-link" href="#">${i}</a></li>`
}
 var e=1
plus12=()=>{
if(Math.ceil(A.length/9)>=e+1){
  e++
}
my(e)
}

minus12=()=>{
  if(0<e-1){
  e--
  } 
  my(e)
}

function my(x){
    document.querySelector('.cards12').innerHTML=" " 
    for(var j=x*9-9;j<x*9;j++){
        document.querySelector('.cards12').innerHTML+= ` 
        <div class="card">
        <div class="item-1">
            <a href="#"><img style="min-height:285px" src="${A[j].img}" alt="Image2" class="img-fluid img-fluid1"></a>
            <div class="item-1-contents">
              <div class="text-center">
              <h3><a href="#">${A[j].name}</a></h3>
              <div class="rating">
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
              </div>
              <div class="rent-price"><span>${A[j].sena}</span></div>
              </div>
              <ul class="specs">
                <li>
                  <span>Расход:</span>
                  <span class="spec">${A[j].door}</span>
                </li>
                <li>
                  <span>Пробег:</span>
                  <span class="spec">${A[j].seat}</span>
                </li>
                <li>
                  <span>Объём двигателя</span>
                  <span class="spec">${A[j].transmision}</span>
                </li>
                <li>
                  <span>Выпуск</span>
                  <span class="spec">${A[j].age}</span>
                </li>
              </ul>
              <div class="d-flex action">
                <a href="contact.html" class="btn btn-primary">Купить сейчас</a>
              </div>
            </div>
          </div>
      </div>
        `
    }
}
my(1)