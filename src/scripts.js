'use script';

const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  console.log(searchValue);
  fetch(`https://api.github.com/users/${searchValue}`)
  .then(data => data.json())
  .then((json =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${json.avatar_url}">
                <p> Имя: <span>${json.name}</span><p>
                <p> О себе: <span>${json.bio}</span><p>
                <p> Кол-во репозиториев: <span>${json.public_repos}</span><p>
            </div>`))
  );
});

const loadBtnNew = document.querySelector(".js-loadNew");
const resultsContainerNew = document.querySelector(".js-resultsNew");
const searchInputNew = document.querySelector(".js-inputNew");

loadBtnNew.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValueNew = searchInputNew.value.trim().toLowerCase();
  console.log(searchValueNew);
  
  axios.get(`https://jsonplaceholder.typicode.com/posts/${searchValueNew}`)
    .then(data => 
      (resultsContainerNew.innerHTML = `<div class="response-container">
                <p> user Id: <span>${data.data.userId}</span><p>
                <p> id: <span>${data.data.id}</span><p>
                <p> title: <span>${data.data.title}</span><p>
                <p> body: <span>${data.data.body}</span><p>
            </div>`));
});




