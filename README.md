# TypoGrammar: An English Learning Hub

This is a React-based web application built with Vite to help users learn English grammar.

## Table of Contents

- [Running the Project Locally](#running-the-project-locally)
- [Building for Production](#building-for-production)
- [Deploying to Hostinger](#deploying-to-hostinger)

## Running the Project Locally

To run the application on your local machine for development and testing purposes, follow these steps:

1.  **Install Dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Start the Development Server:**
    Once the dependencies are installed, run:
    ```bash
    npm run dev
    ```
    This will start the Vite development server. You can view the application by navigating to the local URL provided in the terminal (usually `http://localhost:5173`).

## Building for Production

When you are ready to deploy the application, you need to create a production build. This process compiles and optimizes all the source files into a few static files that can be hosted anywhere.

1.  **Run the Build Command:**
    In your terminal, run the following command from the project root:
    ```bash
    npm run build
    ```

2.  **Find the Build Output:**
    This command will create a new directory named `dist` in your project root. This `dist` folder contains the `index.html` file and all the static CSS, JavaScript, and asset files needed for your application to run.

## Deploying to Hostinger

Hostinger is a great choice for hosting static sites like this one. The process involves uploading the contents of the `dist` folder to your hosting account's file manager.

### Step 1: Prepare the Files

It's much faster to upload a single compressed file than many small ones.

1.  Navigate into the `dist` folder that was created when you ran `npm run build`.
2.  Select **all the files and folders inside** `dist` (e.g., `index.html`, the `assets` folder, etc.).
3.  Compress (or "zip") these selected files into a single `.zip` archive. You can name it something like `website.zip`.

**Important:** Make sure you are zipping the *contents* of the `dist` folder, not the `dist` folder itself. This is a common mistake that causes the site to load at `yourdomain.com/dist/` instead of `yourdomain.com`.

### Step 2: Upload to Hostinger

1.  Log in to your Hostinger **hPanel**.
2.  Navigate to **Files** -> **File Manager** for your domain.
3.  Open the `public_html` directory. This is the root folder for your website.
4.  If there are any default files inside `public_html` (like `default.php`), you can delete them.
5.  Click the **Upload Files** icon (usually an upward-pointing arrow) and upload the `website.zip` file you created.
6.  Once the upload is complete, right-click on `website.zip` in the File Manager and select **Extract**.
7.  Set the extraction destination to `public_html` and confirm. All your files will be unzipped into the correct location.
8.  **Verify the `.htaccess` file is present** in `public_html` - this is critical for client-side routing to work correctly. The build process automatically includes this file from the `public/` folder.
9.  You can now delete the `website.zip` file from the server.

### Step 3: Visit Your Site

That's it! Your application is now live. Open your domain in a web browser to see it. If you see an old version, you may need to clear your browser's cache or perform a hard refresh (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac).

**Note:** This app uses client-side routing with BrowserRouter, which provides clean URLs without hash symbols. The `.htaccess` file ensures all routes are properly handled by redirecting requests to `index.html`.
````

## Google AdSense

To integrate Google AdSense into this Vite + React app:

- **Add your publisher ID:** Open `index.html` and replace `ca-pub-REPLACE_WITH_YOUR_CLIENT_ID` with your AdSense publisher ID.
- **Create ad units:** In your AdSense account create ad units and note their `ad slot` IDs.
- **Use the `GoogleAd` component:** Import and place `src/components/GoogleAd.tsx` where you want ads to appear.

Example usage in a React component:

```tsx
import GoogleAd from './components/GoogleAd'

function SomePage() {
    return (
        <div>
            <h1>Article title</h1>
            <p>Content...</p>
            <GoogleAd adSlot="6406598038" />
        </div>
    )
}
```

- **Testing locally:** To show test ads while developing, pass the prop `adTest="on"` to the `GoogleAd` component. Example: `<GoogleAd adSlot="1234567890" adTest="on" />`.
- **Important:** AdSense may not serve real ads on `localhost`. Use a deployed domain that you've added to your AdSense account for real ads.

If you'd like, I can insert example ad slots into specific pages — tell me which pages or components you prefer.

````