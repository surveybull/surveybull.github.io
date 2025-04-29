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


## Steps  to deploy in survey bull landing website  

1. once all the changes are made. update all the changes in the master branch
   
2. (optional) run "npm run build && npm run preview" . this will show the preview replica that will be deployed

3. run "npm run deploy" (this will create at the dist file and automatically update it in the gh-pages branch)
   
4. perform the cname config 

note* we dont need to push or update anything in ghpages branch 
"npm run deploy" will handle and make changes to the ghpages