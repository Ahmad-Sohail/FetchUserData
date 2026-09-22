async function fetchData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const filterUsers = users.filter(({ company }) => {
        const user = company.catchPhrase.toLowerCase();
        const check = user.includes("group") || user.includes("service");

        return check;
    })

    const MappingUser = filterUsers.map(({ name, email, address: { city } }) => {
        return `User: ${name} | Email: ${email} | City: ${city}`
    })
    
    console.log(MappingUser);
}

fetchData();