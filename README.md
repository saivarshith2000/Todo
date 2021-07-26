# Todo
A simple todo SPA written in React using Chakra-UI and react-query

# Running
    python3 -m venv venv (recommended to use a virtual env)
    source venv/bin/activate
    cd server
    pip install -r requirements.txt
    ./manage migrate
    ./manage runserver


# Modifying the React client
The react client is located in the `client` directory  
Modify the `src/api.js` file so that the axios instance uses the `baseURL_DEV` instead of 'baseURL'  
Once you are done with the modifications, change it back to use `baseURL` and run `npm run build` to build the production client  
Copy this client to templates folder of the server by running `rm server/templates/* && cp client/build/* server/templates/`  
