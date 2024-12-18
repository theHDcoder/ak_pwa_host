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
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <a class="sidebar-link active" href="/ak_pwa_host/home.php"><i class="fa-solid fa-house"></i><span>Home</span></a>
        <a href="/ak_pwa_host/aboutus.php"
          ><i class="fa-regular fa-address-card"></i><span>ABOUT US</span></a
        >
        <a class="sidebar-link"  href="#"><i class="fa-solid fa-calendar-days"></i><span>AGENDA</span></a>
        <a href="#"><i class="fa-solid fa-handshake"></i><span>SPEAKERS</span></a>
        <a class="sidebar-link"  href="#"><i class="fa-solid fa-image"></i><span>BLOG</span></a>
        <a class="sidebar-link" href="/ak_pwa_host/contactus.php"><i class="fa-solid fa-address-book"></i></i> <span>CONTACT US</span></a>
        <a class="sidebar-link" href="#"
          ><i class="fas fa-sign-out-alt"></i> <span>SIGN OUT</span></a
        >
      </div>
      <div class="headerbar">
        <button class="openbtn" onclick="openNav()">
          <label for="check">
            <i class="fa-solid fa-bars"></i>
          </label>
        </button>
      </div>
      <div class="content" style="color: aliceblue">
        <h2>Welcome Home</h2>
        <p>
          Click on the hamburger menu/bar icon to open the sidebar, and push
          this content to the right.
        </p>
      </div>
    </main>

    <script>
      function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
      }
      const links = document.querySelectorAll('.sidebar-link');


    </script>
  </body>
</html>
