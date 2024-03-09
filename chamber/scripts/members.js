const url = "https://danilomayer.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(url);
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

            name.textContent = 'Company Name: ' `${company.name}`;
            address.textContent = 'Address: ' `${company.address}`;
            phone.textContent = 'Phone: ' `${company.phone}`;
            website.textContent = 'Website: ' `${company.website}`;
            membershipLevel.textContent = 'MembershipLevel: ' `${company.membershipLevel}`;

            image.setAttribute('href', company.image);
            image.setAttribute('alt', `Image of ${company.name}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '400');
            image.setAttribute('height', '450');

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(image);
            card.appendChild(membershipLevel);

            cards.appendChild(card);
        });
    }
    displayLinks(data.companies);
}

getMembers();