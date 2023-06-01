// main.js...

// 1. GET request using fetch()
fetch("http://99.79.77.144:3000/api/agents")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
    const filterAgent = json.filter((user) => {
        return user.rating >= 95;
    })
  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>first_name</th><th>last_name</th><th>email</th><th>region</th><th>rating</th><th>fee</th></tr>`;

    // 3. Loop through each data and add a table row
    filterAgent.forEach((user) => {
      li += `<tr>
        <td>${user.first_name}</td>
        <td>${user.last_name} </td>
        <td>${user.email}</td>
        <td>${user.region}</td>
        <td>${user.rating}</td>
        <td>${user.fee}</td>
      </tr>`;
    });


    
    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;

  });

