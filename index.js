const express = require('express');
const app = express();



app.get('/posts', (req , res) => {
    const posts = [
      {
        id: 1,
        title: "my 1st post",
        body: "this is my post number 1",
      },

      {
        id: 2,
        title: "my 2nd post",
        body: "this is my post number 2",
      },
    ];

    res.send(posts);
});

// app.post('/posts', (req , res) => {
// const postData = req.body;
// res.status(200).send({
//     message: 'Post created successfully'
// });
// });


app.listen(3000, () => {
    console.log('start server on port 3000')
})