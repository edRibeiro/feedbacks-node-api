# feedbacks-node-api

## Steps

## Download & Build on local

## From github

### 1) Clone the repository

```
//on local
git clone https://github.com/edRibeiro/feedbacks-node-api
cd feedbacks-node-api
```

### 2) Config envarioment variables and database connection

```
cp .env.example .env
```

### 3) Install node packages and verify routes locally

```
npm install or yarn
npm run seeder or yarn seeder
Ctrl + c
npm run start or yarn start
```

Open your local browser and verify the feedbacks-node-api is working by accessing:  
`http://localhost:3001/api/v1/`  
`http://localhost:3001/api/v1/auth/login`  
`http://localhost:3001/api/v1/users`  
`http://localhost:3001/api/v1/users/profile`  
`http://localhost:3001/api/v1/feedbacks`  
`http://localhost:3001/api/v1/feedbacks/617ff0a37b77e7c04e90933a`
