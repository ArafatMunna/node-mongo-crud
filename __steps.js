/* 
    1. Create a node server with 5 steps
    1.1 Create Folder
    1.2 npm init -y
    1.3 npm i express cors mongodb
    1.4 start-dev: nodemon index.js in script
    1.5 create index.js
    1.6 use 5 steps to create a node server
    ------------------------------------------
    Create Atlas Account
    ------------------------------------------
    1. sign up. google access
    2. Create cluster
    3. Create user dbuser1 and password
    4. Network Access --> ip address: allow all
    5. database > Connect > code copy paste ibn index.js
    -------------------------------------------
    CRUD Operation
    -------------------------------------------
    1. node mongodb CRUD > Fundamentals
    2. Create async run function
    -----------------------------------------------------------
    Integrate sending data from client to server (POST/Create)
    -----------------------------------------------------------
    1. Client Side: create form
    2. on submit get form data create user object
    3. on server: create user POST method to receive data on backend
    4. on client side: set fetch with POST, headers, body
    5. Make sure you return a json from the POST API
    ------------------------------------------------
    Load Data to the client side (GET/Read)
    ------------------------------------------------
    1. create get API on he server
    2. create a query object
    3. collection.find(query)
    4. cursor.toArray()
    5. return the result  
    6. from client useEffect and display like you have done before
    -------------------------------------------------
    DELETE
    -------------------------------------------------

*/
