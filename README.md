# Learn Prompting


https://promptdev.ai/

This website is a free, open-source guide on prompt engineering. Contributions are welcome!
Harsh criticism is welcome too!

## Contribution Guidelines

We welcome contributions in any form.

We are actively looking for:

- content suggestions
- content/art contributions
- typos :)



## Local Development

First, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [node](https://nodejs.org/en/download/).

Make sure you are using Node 18.0.0 or higher (`node -v`). Then, run the following commands in a terminal:
```
# download the website code with git
git clone https://github.com/prompteng/prompt_engineering.git
# enter the project directory
cd prompt_engineering
# install node modules
npm i
# run the website locally
npm start
```

If you get an error related to the node version, you probably are using an older version of node.

Make sure the newer version appears higher in your path than any older versions. 

Alternatively, you can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install the latest version of node. Install nvm, then do the following:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install-latest-npm
```


`npm start` starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Cite

Use the provided Github citation in this repository.
