# U-Buy-It

 <img src="https://img.shields.io/badge/License-MIT License-blue">

## Description

An express application to handle the backend for shoping website. This express application stores Tags for products,
Products, and Category information in SQL and can be updated using the express routes.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Clone the repo and run **npm i** or **yarn** to install the required dependencies. (It is assumed that you already have
a flavor of SQL installed on your computer.) The next step is to create a .env file in the root of this project and
include the following variables

``` 
DB_NAME='ecommerce_db' 
DB_USER='YOUR SQL USERNAME HERE'
DB_PW='YOUR SQL PASSWORD HERE'
 ``` 

Then in your flavor of SQL run ```source db/schema.sql``` at the root of the project to prepare the database

Then run ***npm run seed*** or ***yarn seed*** to set up the example tables.

## Usage

Click [here](https://watch.screencastify.com/v/S8saOBcpCunOH2vuYZWp)
To view a video on how to access each route, and start up the server.

After installing the repo as described above you can start using ***npm run start*** or ***yarn start*** the server
which is defaulted to run on localhost:3001.

## Credits

dotEnv, express, mysql2, sequelize, nodemon

## License

MIT License

Copyright (c) 2022 Ryan Moon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Features

* Manage the products of a store
* Manage the Tags associated with products of a store
* Manage the Category of products of a store

## Contributing

IF you would like to contribute to this project you can fork this repo and submit a pull request with a description of
the feature you are attempting to add.

## Tests

This project does not include tests

## Questions

Find me on github here: [here](http://github.com/Moonryc)

If you have any additional question feel free to email me at [rycmoon@gmail.com](mailto:rycmoon@gmail.com)
