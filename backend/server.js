import express from 'express'

const app = express()
const port = 5000

const jokes = [
      {
        "category": "general",
        "setup": "Why did the scarecrow win an award?",
        "punchline": "Because he was outstanding in his field!"
      },
      {
        "category": "programming",
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs!"
      },
      {
        "category": "dad",
        "setup": "What did the ocean say to the beach?",
        "punchline": "Nothing, it just waved."
      },
      {
        "category": "animal",
        "setup": "Why did the chicken join a band?",
        "punchline": "Because it had the drumsticks!"
      },
      {
        "category": "knock-knock",
        "setup": "Knock, knock.",
        "punchline": "Who's there? Atch. Atch who? Bless you!"
      }
    ]
  
  

app.get('/',(req,res) => {
    res.send('Hello world')
});

app.get('/jokes',(req,res) => {
    res.json(jokes);
});

app.get('/contact',(req,res) => {
    res.send("Contact Number")
})


app.listen( port, () => {
    console.log(`The app is listening on port http://localhost:${port}`)
} )