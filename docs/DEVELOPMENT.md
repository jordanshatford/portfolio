# Jordan Shatford Portfolio

The frontend for this project is written using the popular javascript framework [Vue](https://vuejs.org/).

The frontend also utilizes other technologies like:
  - [SCSS](https://sass-lang.com/documentation/syntax)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [TypeScript](https://www.typescriptlang.org/)

## Developing
### Without Docker
To setup the frontend for local development you must first ensure that you have the following dependencies installed:
  - [NodeJS](https://nodejs.org/en/) (version v15 or above)
  - [PNPM](https://pnpm.io/)

Now you can install the project specific dependencies using:
```bash
pnpm install
```

```bash
# The Github Personal Access token for the project
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
VITE_GITHUB_PERSONAL_ACCESS_TOKEN=
# EmailJS related information
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_USER_ID=
VITE_EMAILJS_SERVICE_ID=
```
This can be done by filling out and copying the `example.env` file to a `.env` file.

Once the project dependencies are installed and environment variables specified you can start a development server using:
```bash
pnpm dev
```

### With Docker
To setup the frontend for local development you can also use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

You can run the application using the following command (after specify environment variables listed above):

```bash
docker-compose up --build
```

## Building
You can build a production version of the application using:

```bash
pnpm build
```

## Linting
You can lint the project using:

```bash
pnpm lint
```
