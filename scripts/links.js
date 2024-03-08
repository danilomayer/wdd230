const baseURL = "https://danilomayer.github.io/wdd230/";
const linksURL = "https://danilomayer.github.io/wdd230/data/links.json";
const ul = document.querySelector('ul');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //displayLinks(data);

    const displayLinks = (weeks) => {
        weeks.forEach((week) => {
            let card = document.createElement('li');
            let link = document.createElement('a');

            link.textContent = `${week.title}`;

            link.setAttribute('href', week.url);

            card.appendChild(link);

            ul.appendChild(card);
        });
    }
    displayLinks(data.weeks);
}

getLinks();