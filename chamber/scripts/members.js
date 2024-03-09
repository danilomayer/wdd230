const baseURL = "https://danilomayer.github.io/wdd230/chamber/data/members.json";
const membersURL = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.table(data.companies);

    const displayLinks = (companies) => {
        companies.forEach((company) => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let image = document.createElement('img');
            let membershipLevel = document.createElement('p');

            link.textContent = `${company.title}`;

            link.setAttribute('href', company.url);

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(image);
            card.appendChild(membershipLevel);

            ul.appendChild(card);
        });
    }
    displayLinks(data.companies);
}

getMembers();