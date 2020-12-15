# LAB 6

## Project: Basic Auth

### Author: Stacy Burris

### Links and Resources

+ [Pullrequest GitHub]()
+ [ci/cd]()
+ [Heroku]()

### Setup

`.env` requirements

+ Port - 3000
+ MONGODB_URI=mongodb://localhost:27017/test

### How to initialize/run application

+ `npm start` or `nodemon`

### Endpoint:

In Terminal

HTTP pie:

```
http POST :3000/signup
http POST :3000/signin
http POST :3000/signin -a stacy:cats
```

### Tests

+ Tests run through jest in the terminal

### UML

![signp/signin](assets/UML-signup-signin.png)
