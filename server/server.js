let express = require('express');
let app = express();

app.use(express.static('server/public')); // where we want our static content 

const port = 5000; // don't use 5432 (it's the default port for the database)...but any number between 1000 - 99999

app.listen(port, function () {  // Start our server
    console.log(`Server listening on port ${port}`);
}); 





console.log('Hello from the server');
