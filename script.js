const fs = require('fs');
const https = require('https');
const fakeJsonApi = 'https://jsonplaceholder.typicode.com/posts';

https.get(fakeJsonApi, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFile('./result/posts.json', data, err =>{
      if(err) throw err;
      console.log('file written successfully');
    })
  })
  
}).on('error', (error) =>{
  console.log(error)
})