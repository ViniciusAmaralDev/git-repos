# Git Repos

React native application to search github repositories and list them. You can also favorite your repositories and view them on a specific screen.

The application saves data locally, persisting even after closing.

The application also has translation into 3 languages: English, Portuguese and Spanish.

You can also switch between light, dark themes, or follow the device's default theme.

---

## Clone repository

##### HTTPS

```Bash
git clone https://github.com/ViniciusAmaralDev/git-repos.git
```

##### SSH

```Bash
git clone git@github.com:ViniciusAmaralDev/git-repos.git
```

---

## Environment variables

Create a `.env` file and paste the following:

> Only public repositories are returned by the github API. If you want it to also return private repositories, you need to implement authentication.

```Bash
GITHUB_API_URL=https://api.github.com/users
```

---

## Install dependecies

##### YARN

```Bash
yarn install
```

##### NPM

```Bash
npm install
```

---

## Pod Install
> Run only if you run the application in an iOS environment.

```Bash
npx pod-install
```

---

## Run server

##### YARN

```Bash
yarn start
```

##### NPM

```Bash
npm run start
```

---

## Run Application

##### YARN

```Bash
yarn android
```

```Bash
yarn ios
```

##### NPM

```Bash
npm run android
```

```Bash
npm run ios
```
