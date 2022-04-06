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
- [Support](#support)
- [License](#license)
- [About](#about)

<!-- ABOUT THE PROJECT -->

## About The Project

This is a sample backend application which interacts with the REST API.

### Built With

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Dyte Rest API](https://docs.dyte.io/api/)

<!-- GETTING STARTED -->

## Getting Started

Deploy directly to heroku using this button!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
- NodeJS

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

| Route               | Method | JSON Body Params                                                                                                                                                                                                                               | Description                                                                                                                            |
| ------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| /meeting/create     | POST   | <pre>{<br>&nbsp;&nbsp;title: string,<br>&nbsp;&nbsp;presetName: string,<br>&nbsp;&nbsp;authorization: {<br>&nbsp;&nbsp;&nbsp;&nbsp;waitingRoom: boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;closed: boolean<br>&nbsp;&nbsp;}<br>}</pre>                                 | Create a meeting. For more details, see<br>https://docs.dyte.io/api/#/operations/createMeeting                                          |
| /participant/create | POST   | <pre>{<br>&nbsp;&nbsp;meetingId: string,<br>&nbsp;&nbsp;clientSpecificId: string,<br>&nbsp;&nbsp;userDetails: {<br>&nbsp;&nbsp;&nbsp;&nbsp;name: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;picture: string<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;presetName?: string,<br>&nbsp;&nbsp;roleName?: string<br>}</pre> <br> <i>Note: Pass only one of presetName or roleName, NOT both.</i> | Create a participant for a meeting. For more details, see<br>https://docs.dyte.io/api/#/operations/addParticipant                      |
| /meetings           | GET    | N/A                                                                                                                                                                                                                                            | Get the list of all meetings in the organization. For more<br>details, see<br>https://docs.dyte.io/api/#/operations/getAllMeetings     |
| /preset/get         | GET    | N/A                                                                                                                                                                                                                                            | Get the list of all the presets in the organization. For<br>more details, see<br>https://docs.dyte.io/api/#/operations/getAllPresets   |

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/dyte-in/backend-sample-app/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Sincere thanks to all our contributors. Thank you, [contributors](https://github.com/dyte-in/backend-sample-app/graphs/contributors)!

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) and code of conduct at [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) while contributing to the project :smile:.

## Support

Contributions, issues, and feature requests are welcome!
Give a ⭐️ if you like this project!

<!-- LICENSE -->

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

## About

`backend-sample-app` is created & maintained by Dyte, Inc. You can find us on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at `dev [at] dyte.io`.
The names and logos for Dyte are trademarks of Dyte, Inc.
We love open source software! See [our other projects](https://github.com/dyte-in) and [our products](https://dyte.io).
