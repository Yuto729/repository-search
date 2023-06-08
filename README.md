# Github Searcher

## Overview

"Github Searcher" is an application that allows users to enter a keyword and username in the browser, performs a search via the Github API in the backend, and displays up to 50 results. The frontend is implemented with TypeScript and Next.js, and the backend is implemented with FastAPI.

## Usage

1. Access the application from your browser.
2. Enter a keyword and username in the search bar.
3. Clicking the search button will search for the corresponding information via the Github API and display up to 50 results.

## Environment Setup

### Prerequisites

- Node.js v14.x or later installed
- Python 3.8 or later installed

### Setup Steps

1. Clone or download this repository.

    ```
    git clone https://github.com/yourusername/github-searcher.git
    cd github-searcher
    ```

2. Install the necessary packages.

    Frontend:

    ```
    cd frontend
    npm install
    ```

    Backend:

    ```
    cd backend
    pip install -r requirements.txt
    ```

3. Launch each server.

    Frontend:

    ```
    cd frontend
    npm run dev
    ```

    Backend:

    ```
    cd backend
    uvicorn main:app --reload
    ```

Now, the frontend can be accessed at `http://localhost:3000`, and the backend at `http://localhost:8000`.

## Contributing

1. Fork the repo (https://github.com/yourusername/github-searcher/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the terms of the MIT license. See the `LICENSE` file for details.

## Contact

If you have any issues or suggestions for improvement, please let us know via Github issues.
