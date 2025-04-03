const express = require('express');
// Ensure you have node-fetch installed
const app = express();
app.use(cors());
app.get('/search', async (req, res) => {
  try {
    // Extract the 'name' parameter from the route
    const { name } = req.query;

    // Replace colons with an empty string in the 'name' parameter
    fetch(`https://we-movies-3qlw.onrender.com/v1/movies/search/Name/${name.split(":").join("")}`).then(e=>{
        return e.json();
      }).then(e=>{
        // console.log(e)
   res.status(200).send(e)
  
        }).catch(e=>{
            res.status(500).send(e)
          })
  } catch (error) {
    // Handle any errors that occur during the fetch
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});
app.get('/getdownload', async (req, res) => {
  try {
    // Extract the 'name' parameter from the route
    const { id } = req.query;

    // Replace colons with an empty string in the 'name' parameter
    fetch(`https://we-movies-3qlw.onrender.com/v1/info/downloads/hd/${id}`).then(e=>{
        return e.json();
    }).then(e=>{
      // console.log(e)
      res.status(200).send(e)
    })
  } catch (error) {
    // Handle any errors that occur during the fetch
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});
app.get('/download', async (req, res) => {
  try {
    // Extract the 'name' parameter from the route
    const { id, quality } = req.query;

    // Replace colons with an empty string in the 'name' parameter
    fetch(`https://we-movies-3qlw.onrender.com/v1/download/direct/source/${quality}/0/${id}?cat=--hmp4.htm`, {headers:{
        'Accept':'application/json'
        } }).then(src=>{
        
          return src.json();
        })
        .then(e=>{
            res.status(200).send(e)
      
         
        })
  } catch (error) {
    // Handle any errors that occur during the fetch
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});




// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
