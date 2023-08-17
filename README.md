# Youtube Clone Web App

This is a YouTube clone app built with React and the YouTube v3 Rapid API. It allows users to search for videos, display and play the videos.

## Installation

1. Clone the repository to your local machine:

   `git clone https://github.com/aa98-45556443355666/youtube_clone_web_app.git`

2. Navigate to the project directory:

   `cd youtube_clone_web_app`

3. Install the dependencies using npm:

   `npm install`

4. Set up your Rapid API key:

   - Sign up for an account at Rapid API.

   - Create a new project and subscribe to the YouTube v3 API.

   - Obtain your API key from the project dashboard.

   - Create a .env file in the root directory of the project.

   - Add the following line to the .env file, replacing <YOUR_API_KEY> with your actual API key:

     `REACT_APP_RAPID_API_KEY=<YOUR_API_KEY>`

5. Start the development server:

   `npm start`
   The app should now be running on http://localhost:3000.

## Usage

- Enter a search term in the search bar and press Enter or click on the search button.
- The app will retrieve videos related to the search term using the YouTube v3 API.
- Click on a video thumbnail to watch it in the player.
- Scroll down to see  video description also.
- This app gives 40 as maxResults in a page.