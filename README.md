## Steps to deploy on server 

1. Build the project
```shell
npm run build
``` 

2. Create Nginx file and configure the paths

```shell
root <path to dist folder>
index index.html
```

3. nginx start

```shell
sudo service nginx start
```

## Step to deploy on gh-pages 

1. push all the latest changes to main branch 

2. run the deployment 

```shell 
npm run deploy
```

3. within 10 min the page will show up 