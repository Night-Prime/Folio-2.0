const { JSDOM } = require("jsdom");
const { expect } = require("chai");
const { beforeEach, afterEach } = require("mocha");

describe("My Test Script should work", function () {
  let dom;
  beforeEach(() => {
    dom = new JSDOM(`
<html>
<body>
<div id="preloader"></div>
      <main class="container">
       <section id="top"></section>
       <section class="her"><button id="scrollButton"></button></section>
        <section class="intro">
            <div class="text-reveal-inner"></div>
        </section>
      </main>
</body>
</html>
`);
    // Set global.window and global.document here
    global.window = dom.window;
    global.document = dom.window.document;
    require("../script/script");
  });

  it('should add the "scrolled" class to the navbar on scroll', function () {
    const navbar = document.getElementById("top");
    window.dispatchEvent(new Event("scroll", { bubbles: true }));

    // Simulate the scroll by changing the scrollY value
    window.scrollY = 1024;

    // Trigger the scroll event manually
    window.dispatchEvent(new Event("scroll", { bubbles: true }));

    expect(navbar.classList.contains("scrolled")).to.be.true;
  });

  afterEach(function () {
    // Clean up after tests
    global.window = undefined;
    global.document = undefined;
  });
});
