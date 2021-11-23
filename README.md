<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.in">
    <img src="https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte-logo-dark.svg" alt="Logo" width="80">
  </a>

  <h3 align="center">backend-sample-app by dyte</h3>

  <p align="center">
    A NodeJS backend to interact with the Dyte REST API
    <br />
    <a href="https://docs.dyte.in"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.in">View Demo</a>
    ·
    <a href="https://github.com/dyte-in/backend-sample-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-in/backend-sample-app/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

This is a sample backend application which interacts with the REST API.

### Built With

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [Dyte Rest API](https://docs.dyte.io/api/)



<!-- GETTING STARTED -->
## Getting Started

Deploy directly to heroku using this button!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

To get a local copy up and running follow these simple steps.
### Prerequisites

This is an example of how to list things you need to use the software.
* npm
* NodeJS

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/dyte-in/backend-sample-app.git
```
2. Install NPM packages
```sh
npm install
```
3. Add a `.env` on the root of the repo, with the following variables:
  ```
PORT=3001
DYTE_API_BASE=https://api.cluster.dyte.in/v1
DYTE_API_KEY=<Your dyte api key>
DYTE_ORG_ID=<Your dyte org id>
```
4. To run the backend in dev mode (hot reload on changes), run:
```sh
npm run dev
```

To run the backend in production mode, run
```sh
npm run build
npm start
```

<!-- USAGE EXAMPLES -->
## Usage

The backend exposes an express API server with the following routes:

| Route               | Method | JSON Body Params                                                                                                                                                                                                                                           | Description                                                                                                                            |
|---------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| /meeting/create     | POST   | {<br>  title: string,<br>  presetName: string,<br>  authorization: {<br>    waitingRoom: boolean,<br>    closed: boolean<br>  }<br>}                                                                                                                       | Create a meeting. For more details, see<br>https://docs.dyte.io/api/#/operations/create_meeting                                        |
| /participant/create | POST   | {<br>  meetingId: string,<br>  clientSpecificId: string,<br>  userDetails: {<br>    name: string,<br>    picture: string<br>  },<br>  presetName?: string,<br>  roleName?: string,<br>}<br><br>Note: Pass only one of presetName<br>or roleName, NOT both. | Create a participant for a meeting. For more details, see<br>https://docs.dyte.io/api/#/operations/add_participant                     |
| /meetings           | GET    | N/A                                                                                                                                                                                                                                                        | Get the list of all meetings in the organization. For more<br>details, see<br>https://docs.dyte.io/api/#/operations/get_all_meetings   |
| /preset/get         | GET    | N/A                                                                                                                                                                                                                                                        | Get the list of all the presets in the organization. For<br>more details, see<br>https://docs.dyte.io/api/#/operations/get_all_presets |



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dyte-in/backend-sample-app/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
