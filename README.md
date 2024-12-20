# Netflix GPT

Netflix clone with GPT-3 integration.

Covered So far..

- Create React App using Vite
- Configured Tailwind CSS
- Header
- Routing of the App
- Login Form
- Sign Up Form
- Form Validation (For bigger form, we must use library like [Formik](https://formik.org/))
- useRef Hook
- Firebase Setup
- Deploying app to production
- Create Sign Up user Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- Bug Fix: Sign up user displayName and profile picture update
- Bug Fix: If the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Added hardcoded values to the constants file
- Registered TMDB API and Create an app & get the access Token
- Get the Data from TMDB now playing movies list API (`https://api.themoviedb.org/3/movie/now_playing`)
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Built Secondary Component
- Built Movie List
- Built Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies, useTopRatedMovies, useUpcomingMovies Custom hook
- GPT Search Page
- GPT Search Bar
- Added Multi-language feature

### Features

1. Login/Sign Up

   - Sign In /Sign up Form
   - Redirect to Browse Page
2. Browse (After authentication)

   - Header
   - Main Movie
     - Trailer in Background
     - Title & Description
     - Movie Suggestions
       - Movie List \* N
3. NetflixGPT

   - Search Bar
   - Movie Suggestions

### Firebase Deployement

1. Install firebase CLI => `npm install -g firebase-tools`
2. Firebase Login => `firebase login`
3. Initialize Firebase => `firebase init`, then select Hosting.

   ```
   ? Are you ready to proceed? Yes
   ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
   confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

   === Project Setup

   First, let's associate this project directory with a Firebase project.
   You can create multiple project aliases by running firebase use --add,
   but for now we'll just set up a default project.

   ? Please select an option: Use an existing project
   ? Select a default Firebase project for this directory: neflixgpt-aa358 (NeflixGPT)
   i  Using project neflixgpt-aa358 (NeflixGPT)

   === Hosting Setup

   Your public directory is the folder (relative to your project directory) that
   will contain Hosting assets to be uploaded with firebase deploy. If you
   have a build process for your assets, use your build's output directory.

   ? What do you want to use as your public directory? dist
   ? Configure as a single-page app (rewrite all urls to /index.html)? No
   ? Set up automatic builds and deploys with GitHub? No
   +  Wrote dist/404.html
   ? File dist/index.html already exists. Overwrite? Yes
   +  Wrote dist/index.html

   i  Writing configuration info to firebase.json...
   i  Writing project information to .firebaserc...

   +  Firebase initialization complete!
   PS C:\Users\Milind kumar\Desktop\Netflix-GPT> firebase deploy
   ```
4. Deploy command => `firebase deploy`

### Firebase is not Recognized as an Internal or External Command (Windows)

If you're encountering the "firebase is not recognized" error on Windows, it's likely due to Windows' default security settings that restrict script execution.

The below steps will help you modify the PowerShell execution policy to allow Firebase CLI commands to run properly. This is a common issue when first setting up Firebase tools, and the solution involves a few simple steps using PowerShell with administrator privileges.

1. Open powershell as administrator.
2. Run this command => `Get-ExecutionPolicy`
3. This will show you => `Restricted`
4. Now, run this command to change Execution Policy => `Set-ExecutionPolicy RemoteSigned `
   you will be asked the below, select: `Y `
   ```
   The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
   you to the security risks described in the about_Execution_Policies help topic at
   https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
   [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): Y
   ```
5. That's it, you will now be able to run `firebase login` command.
