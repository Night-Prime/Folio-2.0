// DOMContentLoaded is the event or lifecycle that renders the HTML to the browser
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("top");
  if (navbar) {
    const scrollOffset = window.innerHeight;
    window.addEventListener("scroll", () => {
      if (window.scrollY + 20 > scrollOffset) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  } else {
    console.log("Navbar element not found.");
  }

  // Displaying the pre-loader screen before showing the main page
  const showPreloader = () => {
    const preloader = document.getElementById("preloader");
    const mainContainer = document.querySelector(".container");
    mainContainer.appendChild(preloader);
    preloader.style.display = "none";
  };
  setTimeout(showPreloader, 4000);

  // scrollDown to the next div function
  const scrollButton = document.getElementById("scrollButton");
  const introSection = document.querySelector(".intro");

  scrollButton.addEventListener("mouseover", () => {
    introSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const revealElements = document.querySelectorAll(".text-reveal-inner");
  // observer to trigger reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
});
