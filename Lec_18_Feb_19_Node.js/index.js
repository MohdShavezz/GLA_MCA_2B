import http from 'http'


const users = [
    { id:2, name: 'doe', age: 21 },
    { id:1,name: 'tom', age: 22 }, 
    { id:3, name: 'riya', age: 20 },
]
const app = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    if (req.method === "GET" && req.url === '/users') { // GET http://localhost:5000/users
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(JSON.stringify(users))
    } else if (req.method === "POST" && req.url === '/users') { // POST http://localhost:5000/users + payload
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

    }else if(req.method==='DELETE' && req.url.includes('/users/')){ // DELETE http://localhost:5000/users/1
        const userId=+req.url.split('/')[2] //1
        // const ind= users.findIndex(val=>val.id===userId)
        // users.splice(ind,1)
        // OR 
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( users.filter(val=>val.id!==userId)));
       
    }else if(req.method==='PUT' && req.url.includes('/users/')){ // PUT http://localhost:5000/users/1 + payload
        const userId=+req.url.split('/')[2]
         let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();   // or chunk (if you want Buffer)
        });

        req.on('end', () => {
            let userObj = JSON.parse(body);
            const ind= users.findIndex(val=>val.id===userId)
            let newObj={id:userId,...users[ind],...userObj}
            users[ind]=newObj
            res.end(JSON.stringify(users));
        });
        
    }else if(req.method==='GET'&& req.url.includes('/users/')){ // GET http://localhost:5000/users/1
        const userId=+req.url.split('/')[2] //1
        const usr=users.find(ele=>ele.id===userId)
        if(!usr) res.end('user not found.')
        res.end(JSON.stringify(usr));
    }
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running on ', port)
})
