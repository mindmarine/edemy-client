Step by step

# Setup
- Create folder for project
- Create server and client folders inside the above folder
- go inside the `client` folder an run `npm init`
- install Next.js, react and react dom. `npm install next react react-dom`
- add next.js scripts within package.json 
``` 
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
```
- then create new folder `pages` and _app.js file within it
Next.js uses the App component to initialize pages
This app component runs before any pages gets ready for users to see
This is a perfect place to add bootstrap css
IMPORTANT - RESTART THE SERVER
- install bootstrap `npm install bootstrap` or `npm i bootstrap`
- install Ant Design `npm i antd`. Ant Design helps create react components and styling. Ant Design is similar to Material UI
- index.js create jumbotron `className="jumbotron text-center bg-primary square"`
note: https://getbootstrap.com/docs/4.0/components/jumbotron/
Jumbotron
    - Lightweight, flexible component for showcasing hero unit style content.
    - A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
- creating pages login.js and register.js. In Next.js the name of the file determine the route that will be available
- Navigation component is available for the entire app. A new folder `components`. Inside components create TopNav.js. Inside the main app we include the TopNav like this
    - import TopNav from "../components/TopNav";
    - <TopNav />
- And Design Menu and Menu Icons
```js
 <Menu mode="horizontal"> // mode makes the menu go horizontal
      <Item icon={<AppstoreOutlined />}> // Appstore icon
        <Link href="/"> // Link component from Next.js uses href
          <a>App</a> // anchor tag with the App Component
        </Link>
      </Item>
    </Menu>
```
- install Ant Design Icons `npm i @ant-design/icons`
- import And Design
- https://ant.design/components/icon/#header
```js
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
```
- Add user's name, email and password to register.js. Then send to backend to save in the database
- `import { useState } from "react"`
- define state
  ```js
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ```
- register form
  ```js
        <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
      </div>
  ```
- handle submit... For now we just console.log as we do not have a backend yet
```js
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password })
```

# Client Files
├── .next
├── components
│   ├── TopNav.js
├── node_modules
├── pages
│   ├── _app.js_
│   ├── index.js
│   ├── login.js
│   ├── register.js
├── public
│   ├── css
│   │   ├── style.css
├── 2CLIENTSETUP.md
├── package.json
├── package-lock.json
└── .gitignore

###
…or push an existing repository from the command line
git remote add origin git@github.com:mindmarine/edemy-client.git
git branch -M main
git push -u origin main