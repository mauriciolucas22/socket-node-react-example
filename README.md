
# Socket.io with ReactJS and NodeJS

  

## Install dependencies

  

> **$** yarn install

  

**or**

  

> **$** npm install

  ##
- make sure that the url to connect to mongodb is correct in the server / index.js file
- mongoose.connect ('mongodb://localhost:**PORT**/socket');
> for use docker run: docker container run -d -P mongo
> get port with: docker port <_ID_>

**Run server**

> **$** node server/index.js

  

**inside he client execute**

  

> **$** yarn start


## Now use insomnia with method post and json

> {
	"content": "Jesus loves you!",
	"avatar_url": "https://avatars1.githubusercontent.com/u/20993303?s=460&v=4"
}
