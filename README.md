# Ravn-Challenge-Backend-Joel
Ravn challenge for backend engineer
## Description

Simple API endpoint that optionally accepts an author’s name and returns a JSON.

## Table of Contents

- [Before Install](#before-install)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Challenge Resolution](#challenge-resolution)

## Before Install

Make sure you have NodeJS, npm, Docker and docker-compose installed.

Before install our project, the env variable for port must be set.


| Environment Variable Key  | Environment Variable Value         |
| ------------------------- | ---------------------------------- |
| PORT                      | 3700                               |


## Installation

#### Local

```bash
$ npm i
```

#### Docker

```bash
$ docker-compose build -t ravn_challenge .
```

## Running the app

Make sure the env variables are correct.

#### Local

```bash
# production
$ npm run start

# development
$ npm run dev
```

#### Docker

```bash
$ docker-compose up
```

## Developer

<table>
   <tr>
      <td align="center">
         <a href="https://github.com/jo3l17">
        <h2>
            <sub>Joel Valdez</sub>
        </h2>
         </a>
      </td>
   </tr>
</table>

## API Documentation

Swagger documentation can be found at /api/v1/docs.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Challenge Resolution

### Part 1: SQL

1. Who are the first 10 authors ordered by date_of_birth?

```
SELECT * FROM authors ORDER BY date_of_birth LIMIT 10;
```

2. What is the sales total for the author named “Lorelai Gilmore”?

```
SELECT count(*) as "Sales" FROM authors a
JOIN books b ON b.author_id = a.id
JOIN sale_items s ON s.book_id = b.id
WHERE a.name = "Lorelai Gilmore"
GROUP BY a.id;
```

3. What are the top 10 performing authors, ranked by sales revenue?

```
SELECT a.name as "Author", count(*) as "Sales" FROM authors a
JOIN books b ON b.author_id = a.id
JOIN sale_items s ON s.book_id = b.id
GROUP BY a.id
ORDER BY sales DESC
LIMIT 10;
```

### Part 2: Basic API Endpoint

The endpoint can be found in `/api/authors/best/:limit`. The API was developed in NodeJS using express.

### Part 3: API Performance

The code has been audited and using typescript, every variable uses a type.

### Part 4: Build Docker Container and steps to deploy.

Provide a written step-by-step guide on how you would build the docker image and deploy this to GCP Kubernetes Engine.

#### Building the Docker Image:
```
docker build -t ravn-challenge .
```

- `-t ravn-challenge` defines the tag of the container.
- `.` is the location of the Dockerfile.

#### Deploying to GCP Kubernetes Engine:

First, you have to install docker desktop and enable kubernetes, in the configuration.\
Download and install `kubectl` for windows in this <a href="https://dl.k8s.io/release/v1.21.0/bin/windows/amd64/kubectl.exe">link</a>
Download the latest release v1.21.0.

Download and install `minikube` for windows in this 
<a href="https://minikube.sigs.k8s.io/docs/start/">link</a>.

then run the following on a command prompt:

```
kubectl apply -f ravn_challenge_deployment.yaml
```

this will deploy the application to kubernetes, then run the command:

```
kubectl get pods
```

to check the deployment.

you can delete the current deployment using this command:

```
kubectl delete -f ravn_challenge_deployment.yaml
```