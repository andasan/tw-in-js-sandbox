
# Animal Kingdom (WIP)

A full-stack project for testing tw-in-js



## Run Locally

Clone the project

```bash
  git clone https://github.com/andasan/tw-in-js-sandbox.git
```

Go to the project directory

```bash
  cd tw-in-js-sandbox
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

---

If you prefer to Dockerize,

Replace the client/package.json `"proxy": "http://localhost:6000",` to `"proxy": "http://server:6000",`


```bash
docker-compose up
```
    
## API Reference

#### Get animal

```http
  GET /api?${q}
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `q`       | `string` | **Required**. query string of animal to fetch |


## Tech Stack

**Client:** React, React-Debounce, tw-in-js/Twind

**Server:** Node, Express, Chance

