import { fetchUserDate, fetchRepositoris } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, cleanReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaltUser = {
  avatar_url: "https://avatars.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defaltUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserDate(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositoris(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);
