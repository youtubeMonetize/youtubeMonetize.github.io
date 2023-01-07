const express = require('express')
const app = express()
const PORT = 122


app.get('/', (req, res) => {
const searchString = req.query.search;
const markup =  `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Is Monetize?</title>
	<style>
	form{
	margin: 0 auto;
	width: 500px;
	padding: 1em;
	border: 1px solid #ccc
	border-radius: 1em;
	}
	h1{
	margin: 0 auto;
	width: 600px;
	padding: 1em;
	border: 1px solid #ccc
	border-radius: 1em;
	}
	button{
	margin-left: 0.5em;
	
	}
	
	

	</style>
  </head>
  <body>
	<link rel="stylesheet" href="styles.css">
    	<h1>IS MY CHANNEL MONETIZED?</h1>
	${searchString ? '<h2> You searched for: ' + searchString + ' </h2>': ''}
	<form action = "/" method = "get"> 
	
		
		<label for="name">Enter your you tube username:</label>

		<input type="text" id="name" name="user_name" />
	
		<class="button">
  		<button type="submit">Enter</button>	
	
	</form> 

  </body>
</html>
res. send(markup)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})