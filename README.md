This full stack application is currently in its early development stages. Readme will be created and application will be deployed this coming week, stay tuned!

============================ Notes to the developers on this project >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Note from Gene:

Push to heroku with the following:

    git subtree push --prefix api heroku master

That way it will only send the back end and not the whole thing.

Current URLs:
Front: http://lazy-quicksand.surge.sh/
Back: https://radiant-taiga-58264.herokuapp.com/

Note from Steven:

For the authentification to any route
  - add the token from the redux store to props using a container (it is located under the "Token" key in the redux store )
  - make a fetch request and add the token to the request body like so:
    ```
    fetch("http://localhost:8000/api/tokentest", {
      method: "get",
      headers: new Headers({
        "x-access-token": this.props._token
      })
    }).then(data => {
      this.props.history.push("/profile");
    });
    ```
  - now in the route the request will have a decoded object with the email and passHash (check the console for the server for this)
  ^^ that can now be used for any database accessing via req.decoded.email and req.decoded.passHash

  feel free to slack me for any questions on this -> I can also set the authentification up for a route after you set up the route as well
  
============================ Notes to the developers on this project >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
