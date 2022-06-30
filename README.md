# Rest-API for test from Musala Soft
API-REST build for the Javascript Developer test of Musala Soft company.
## Authors

- [@lucasgio](https://www.github.com/lucasgio)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)



## Installation

Install my-project

```bash
  clone repository git clone https://github.com/lucasgio/node_api_rest_init.git
  cd my-project
  npm install  
```

## Tech Stack

**Server:** Node, Express, Dotenv


## API Reference

#### Get all getaway
#### Show a collection with all getaways

```http
  GET /api/v1/getaway
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `string`   | Limits the amount of resources displayed. |

####  Show one getaway
####  Displays a collection of the getaway given by parameter.

```http
  GET /api/v1/getaway/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |

#### Post getaway
#### Store in DB a getaway.

```http
  POST /api/v1/getaway
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serial_number`      | `string` | **Required**,**Unique**.   |
| `readable_name`      | `string` | **Required**.              |
| `ipv4_address`       | `string` | **Required**,**Unique**.   |
| `peripheral`         | `string` |

####  Add a periheral to a getaway
####  Adds a peripheral to a getaway. No more than 10 peripheral can be added per getaway.

```http
  PUT /api/v1/getaway/${id}
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `id`        | `string` | **Required**. Id of getaway       |
| `peripheral`| `string` | **Required**. Id of peripheral    |


####  Delete a periheral to a getaway
####  Delete a peripheral that is related to getaway

```http
  DELETE /api/v1/getaway/${id}
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `id`        | `string` | **Required**. Id of getaway       |
| `peripheral`| `string` | **Required**. Id of peripheral    |


#### Post peripheral
#### Store in DB a peripheral.

```http
  POST /api/v1/peripheral
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uid`     | `string` | **Required**,**Unique**.          |
| `vendor`  | `string` | **Required**.                     |
| `date`    | `string` |                                   |
| `status`  | `boolean`| **Required**.                     | 