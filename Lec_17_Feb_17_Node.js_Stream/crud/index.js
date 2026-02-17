import http from 'http'


const users = [
    { name: 'tom', age: 22 },
    { name: 'doe', age: 21 },
    { name: 'riya', age: 20 },
]
const app = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    if (req.method === "GET" && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(JSON.stringify(users))
    }else if (req.method === "POST" && req.url === '/users') {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();   // or chunk (if you want Buffer)
    });

    req.on('end', () => {
        console.log('Body received:', body);
        let user;
        user = JSON.parse(body);
        users.push(user);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    });

    return;  
}
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running on ', port)
})
