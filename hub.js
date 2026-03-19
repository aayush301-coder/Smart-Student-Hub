let resources = [];

const form = document.getElementById("resources-form");
const titleInput = document.getElementById("title");
const linkInput = document.getElementById("link");
const categoryInput = document.getElementById("category");

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
    console.log(resources);
});