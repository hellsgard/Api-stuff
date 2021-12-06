"use strict"

const getOutput = document.querySelector("#getOutput");
const findUserId = document.querySelector("input#findUserId");

const getUserById = () => {
    axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then(res => {

        })

}

const getUsers = () => {

axios
    .get("https://reqres.in/api/users")
    .then(res => {
        const users = res.data.data;
        for (let user of users) {
            const userCol = document.createElement("div");
            userCol.classList.add("col");

            const userCard = document.createElement("div");
            userCard.classList.add("card");

            const userBody = document.createElement("div");
            userBody.classList.add("card");

            // const userContainer = document.createElement("div");

            const userId = document.createElement("h5");
            userId.classList.add("card-title");
            userId.innerText = `ID: ${user.id}` ;
            userBody.appendChild(userId);

            const userEmail = document.createElement("p");
            userEmail.classList.add("card-text");
            userEmail.innerText = `Email: ${user.email}`;
            userBody.appendChild(userEmail);

            const firstName = document.createElement("p");
            firstName.classList.add("card-text");
            firstName.innerText = `First name: ${user.first_name}`;
            userBody.appendChild(firstName);

            const lastName = document.createElement("p");
            lastName.classList.add("card-text");
            lastName.innerText = `Last name: ${user.last_name}`;
            userBody.appendChild(lastName);

            const avatar = document.createElement("img");
            avatar.src = user.avatar;
            avatar.classList.add("card-background")
            userBody.appendChild(avatar);

            const userDelete = document.createElement("button");
            userDelete.innerText = "DELETE USER";
            userDelete.classList.add("btn", "btn-danger");
            userDelete.addEventListener("click", () => {
                axios
                    .delete("https://reqres.in/users/${user.id}")
                    .then(res => getUsers())
            })

            userBody.appendChild(userDelete);
            userCol.appendChild(userCard);
            userCard.appendChild(userBody);
            getOutput.appendChild(userCol);
        }
        // const userTitle = document.createElement("h2");
        // userTitle.innerText = users;
        // getOutput.appendChild(users);
        
       
    })
}

getUsers();