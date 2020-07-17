# WGTWO API docs

## TODO
- [ ] Make changing the snippet config update the snippets
    What is it that you want to do?
        Update any instance of bash and kotlin auth snippets based on the selected tab (role)
            /s/Basic/Bearer
            /s/OperatorToken/BearerToken 
        Set any ${ACCESS_TOKEN} -> access_token from storage
        Set any ${USER_TOKEN} -> user_token from storage
        Keep the _replace this_ styling for access/user tokens
- [ ] Make changing the role visible in the fixed button
- [ ] Make the default snippet the selected role
- [ ] Make the operator tab the default if no data on the article is available
- [ ] Make the role not available warning show conditionally
- [ ] Make the modal open after 6 seconds if no choice has been made
- [ ] Make changing the role persistent
- [ ] Add roles to articles and propagate that to the relevant vue classes (if missing assume the article is for operators)
- [ ] Grey out menu links based on the same logic as the not-available-warning


## Contributing
Check out [CONTRIBUTING.md](CONTRIBUTING.md) and add your content to [docs/](docs/)

## Examples of usage
Code-snippets repositories:
* https://github.com/working-group-two/wgtwo-kotlin-code-snippets

## Run project
1. `npm install`
2. `npm run develop`

## Building
`npm run build`

## Workflow

`npm run develop` will watch for changes and automatically refresh the site content.
If you add a new markdown file or Vue component, you might have to restart the process.
