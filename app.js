// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// Your code here
app.get('/artist/latest/albums', (req,res) => {
  try {
    const latestArtistAlbum = getAlbumsForLatestArtist();

    return res.status(200).json({latestArtistAlbum})
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
})

app.get('/artists/latest', (req,res)=> {
  try {
    
    const latestArtistData = getLatestArtist();

    return res.status(200).json({latestArtistData})
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
})

app.get('/artists',(req,res) => {
  try{
    const allArtists = getAllArtists();

  return res.status(200).json({allArtists})
}catch(error){
  console.log(error)

  return res.status(500).send(error)
}
})

app.post('/artists', (req,res)=> {
  try{
    const {name} = req.body;
  
  const addArtiste = addArtist(name);

  return res.status(201).json({addArtiste})
}catch(error){
  console.log(error)

  return res.status(500).send(error)
}
})




// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}