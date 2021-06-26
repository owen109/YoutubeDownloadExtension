const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const fs = require('fs')
const path = require('path')

app.use(cors());
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server Works: ${PORT}`);
})

app.get('/download', async function(req,res){
    var URL = req.query.URL;
    var FORMAT = req.query.FORMAT;
    console.log(FORMAT);
    res.header('Content-Disposition', `attachment; filename="untitled.${FORMAT}"`);
    ytdl(URL,  { filter: (FORMAT == 'mp4' ? format => format.container === 'mp4' : 'audioonly') } ).pipe(res)
});
