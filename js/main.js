

function runAPI(){
    const url = 'https://randomuser.me/api/'
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          document.querySelector('#country'). innerText = data.results[0].location.country
          document.querySelector('#photo').src = data.results[0].picture.large
          document.querySelector('#dob'). innerText = `DOB: ${data.results[0].dob.date}`
          document.querySelector('#name'). innerText = `Name: ${data.results[0].name.first} ${data.results[0].name.last}`
          document.querySelector('#street'). innerText = `Address: ${data.results[0].location.street.number} ${data.results[0].location.street.name}`
          document.querySelector('#city'). innerText = `${data.results[0].location.city}, ${data.results[0].location.state} ${data.results[0].location.postcode}`
          document.querySelector('#gender'). innerText = `Gender: ${data.results[0].gender}`
          let country = data.results[0].nat
          document.querySelector('#flag').src = `https://www.countryflags.io/${country}/shiny/64.png`

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    };
    
    runAPI()

