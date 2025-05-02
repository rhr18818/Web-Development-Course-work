fetch('https://api.github.com/users/rhr18818')
    .then(res => res.json()) //// return res.json by default
    .then(data => {
        console.log(data);
    })