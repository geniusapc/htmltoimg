const express = require("express");
const nodeHtmlToImage = require("node-html-to-image");

const app = express();

const html = `<!doctype html>
<html ⚡4email>
<head>
  <meta charset="utf-8">
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
  <style amp4email-boilerplate>body{visibility:hidden}</style>
  <style amp-custom>
    .carousel-preview {
      	margin-top: 15px;
         text-align: center;
    }
  </style>
</head>
<body>
   <amp-carousel id="carousel-with-preview"
    width="450"
    height="300"
    layout="responsive"
    type="slides">
    <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image1.jpg"
      width="450"
      height="300"
      layout="responsive"
      alt="apples"></amp-img>
    <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image2.jpg"
      width="450"
      height="300"
      layout="responsive"
      alt="lemons"></amp-img>
    <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image3.jpg"
      width="450"
      height="300"
      layout="responsive"
      alt="blueberries"></amp-img>
  </amp-carousel>
  <div class="carousel-preview">
    <button on="tap:carousel-with-preview.goToSlide(index=0)">
      <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image1.jpg"
        width="60"
        height="40"
        alt="apples"></amp-img>
    </button>
    <button on="tap:carousel-with-preview.goToSlide(index=1)">
      <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image2.jpg"
        width="60"
        height="40"
        alt="lemons"></amp-img>
    </button>
    <button on="tap:carousel-with-preview.goToSlide(index=2)">
      <amp-img src="https://ampproject-b5f4c.firebaseapp.com/examples/images/image3.jpg"
        width="60"
        height="40"
        alt="blueberries"></amp-img>
    </button>
  </div>
</body>
</html>`;

const convertHtmlToPng = async (html) => {
  const result = await nodeHtmlToImage({ html });
  return result;
};

app.get("/", async (req, res, next) => {
  return res.send("ok");
});
app.get("/png", async (req, res, next) => {
  try {
    const result = await convertHtmlToPng(html);
    return res.setHeader("content-type", "image/png").send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(8081, () => console.log("port 8081"));
