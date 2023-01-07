const express = require('express')
const app = express()
const port = 122

app.get('/', (req,res) => {
	const searchString = req.query.seach
	const markup = `
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
	
    	<h1>IS MY CHANNEL MONETIZED?</h1>
	<form action = "/my" method = "get"> 
	
		
		<label for="name">Enter your you tube username:</label>

		<input type="text" id="search" name="search" />
	
		<class="button">
  		<input type="submit" value = "Submit"/>	
	
	</form> 

  </body>
</html>
res.send(markup)







})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})