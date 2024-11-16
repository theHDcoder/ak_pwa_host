<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="manifest" href="manifest.json" />
    <!-- ios support -->
    <link rel="apple-touch-icon" href="images/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-128x128.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-152x152.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-384x384.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-512x512.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
    <meta name="theme-color" content="#db4938" />
    <title>Event PWA App</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <main>
      <p>from php</p>
      <h2 style="margin-top: 100px">LOGIN PAGE</h2>
      <hr />
      <div class="userinput" style="margin-top: 10vw">
        <label for="first"> Name: </label>
        <input
          style="font-size: 1rem; height: 3rem"
          type="text"
          id="first"
          name="first"
          required
        />
        <br />
        <br />

        <label for="email"> Email: </label>
        <input
          style="font-size: 1rem; height: 3rem"
          type="email"
          id="email"
          name="email"
          required
        />
        <br />
        <br />
        <button
          type="submit"
          style="font-size: 2rem; cursor: pointer"
          onclick="myFunction()"
        >
          Submit
        </button>
      </div>
    </main>

    <script>
      function myFunction() {
        window.location.href = "/ak_pwa_host/home.html";
      }
    </script>
  </body>
</html>
