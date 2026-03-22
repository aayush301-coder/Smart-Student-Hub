let resources = [];

const form = document.getElementById("resources-form");
const titleInput = document.getElementById("title");
const linkInput = document.getElementById("link");
const categoryInput = document.getElementById("category");
const container = document.getElementById("resources-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const resource = {
        id: Date.now(),
        title: titleInput.value,
        link: linkInput.value,
        category: categoryInput.value,
        important:false
    };

    resources.push(resource);

    titleInput.value = "";
    linkInput.value = "";
    categoryInput.value = "";

    renderResources();
});

function renderResources() {
    container.innerHTML = "";
    resources.forEach(function(item) {
        const div = document.createElement("div");
        div.classList.add("resource-card");
        div.innerHTML = `
            <h3>${item.title}</h3>
            <a href="${item.link}" target="_blank">Open</a>
            <p>${item.category}</p>
        `;

        container.appendChild(div);
    });
}