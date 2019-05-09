const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'assets/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo)
app.appendChild(container)


//create a request variable and assign a XMLHttpRequest object

var request = new XMLHttpRequest();

//open a new connection using the GET request on the URL endpoint

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {

	//access json data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {

		data.forEach(movie => {

			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const title = document.createElement('h1');
			title.setAttribute('class', 'title');
			title.textContent = movie.title;

			const desc = document.createElement('p');
			desc.setAttribute('class', 'desc');
			desc.textContent = movie.description.substring(0, 200);

			container.appendChild(card);
			card.appendChild(title);
			card.appendChild(desc);
			
			})

	}else {

			const errorMessage = document.createElement('marquee')
			errorMessage.textContent = `Gah, it's not working!`
			app.appendChild(errorMessage)

	}
}

// Send request
request.send()