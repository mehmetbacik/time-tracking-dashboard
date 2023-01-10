fetch("./assets/data/data.json").then(
    response => response.json()
).then(responseJson => console.log(responseJson)
)