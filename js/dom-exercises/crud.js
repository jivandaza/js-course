const $table = document.querySelector(".crud-table");
const $form = document.querySelector(".crud-form");
const $crudTitle = document.querySelector(".crud-title");
const $template = document.getElementById("crud-template").content;
const $fragment = document.createDocumentFragment();
const baseURL = "http://localhost:3000/users";
let usersJson;

const showUsers = () =>
  fetch(baseURL)
    .then((res) => res.json())
    .then((json) => {
      usersJson = json;
      json.forEach((user) => {
        let $userRow = $template.cloneNode(true);
        $userRow.querySelector(".name").innerText = user.name;
        $userRow.querySelector(".username").innerText = user.username;
        $userRow.querySelector(".email").innerText = user.email;
        $userRow.querySelector(".delete").onclick = (e) => removeUser(user.id);
        $userRow.querySelector(".edit").onclick = (e) => enableEdit(user.id);
        $fragment.appendChild($userRow);
      });
      $table.querySelector("tbody").appendChild($fragment);
    });

const removeUser = (id) =>
  fetch(`${baseURL}/${id}`, { method: "DELETE" }).then((res) => {
    if (res.ok) showUsers();
  });

const addUser = (user) => {
  fetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    console.log("Added new user:", user);
    if (res.ok) showUsers();
  });
};

const enableEdit = (id) => {
  let editButton = $form.elements["edit"];
  let newEdit = $form.elements["edit"].cloneNode(true);
  $crudTitle.innerText = "Edit user";
  $form.elements["submit"].classList.add("not-visible");
  $form.replaceChild(newEdit, editButton);
  $form.elements["edit"].classList.remove("not-visible");
  $form.elements["name"].value = usersJson.find((user) => user.id === id).name;
  $form.elements["username"].value = usersJson.find(
    (user) => user.id === id
  ).username;
  $form.elements["email"].value = usersJson.find(
    (user) => user.id === id
  ).email;
  $form.elements["edit"].addEventListener("click", (e) => {
    const user = {
      name: $form.elements["name"].value,
      username: $form.elements["username"].value,
      email: $form.elements["email"].value,
    };
    editUser(id, user);
    $crudTitle.innerText = "Add user";
  });
};

const editUser = (id, user) => {
  fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    console.log("User has been edited:", user);
    if (res.ok) showUsers();
  });
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser({
    name: $form.elements["name"].value,
    username: $form.elements["username"].value,
    email: $form.elements["email"].value,
  });
});

showUsers();
