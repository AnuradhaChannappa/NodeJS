const routesHandler = (req, resp) => {


const url = req.url;
  const method = req.method;

  if( url === '/'){
      resp.setHeader('Content-Type','html');
      resp.write('<html>');
      resp.write('<head><title>Welcome to Assignment 1 !!</title></head>');
      resp.write('<body><h1>Hello How are you .. Please regiser yourself !</h1> <form action="/create-user" method="POST"><input name="userName"></input><button type="submit">Create user</button>  </form></body>');
      return resp.end();
  }

  if( url === '/users'){
    resp.setHeader('Content-Type','html');
    resp.write('<html>');
    resp.write('<head><title>User list</title></head>');
    resp.write('<body><ul> <li> Anu </li> <li>Manu </li> <li> Tanu </li></ul></body>');
    return resp.end();
}

if( url === '/create-user' && method === 'POST'){

  const body = [];
  req.on('data', (chunks) => {
    body.push(chunks);
  
  });
  req.on('end', err => {
    let userNameEntered =  Buffer.concat(body).toString();
    userNameEntered = userNameEntered.split('=')[1];
    console.log('The user to register :', userNameEntered);
    resp.statusCode = 302;
    resp.setHeader('Location','/users');
    return resp.end();
  });
  
}
}
module.exports = routesHandler;