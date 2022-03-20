<template>
  <div class="portfolio services container">
    <div class="section-title">
      <h2>Portfolio</h2>
      <p>My Projects</p>
    </div>
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="icon-box">
          <div class="icon"><i class="bx bxl-dribbble"></i></div>
          <h4><a href="">Lorem Ipsum</a></h4>
          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-file"></i></div>
          <h4><a href="">Sed ut perspiciatis</a></h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-tachometer"></i></div>
          <h4><a href="">Magni Dolores</a></h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-world"></i></div>
          <h4><a href="">Nemo Enim</a></h4>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-slideshow"></i></div>
          <h4><a href="">Dele cardo</a></h4>
          <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-arch"></i></div>
          <h4><a href="">Divera don</a></h4>
          <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
section .container {
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
}
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #4ceb95;
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: -15px 0 15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #fff;
}
.services .icon-box {
  text-align: center;
  background: rgba(204, 204, 204, 0.1);
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
}
.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #18d26e;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
}
.services .icon-box .icon i {
  color: #fff;
  font-size: 28px;
}
.services .icon-box .icon::before {
  position: absolute;
  content: "";
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
}
.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}
.services .icon-box h4 a {
  color: #fff;
}
.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.services .icon-box:hover {
  background: #18d26e;
  border-color: #18d26e;
}
.services .icon-box:hover .icon {
  background: #fff;
}
.services .icon-box:hover .icon i {
  color: #18d26e;
}
.services .icon-box:hover .icon::before {
  background: #35e888;
}
.services .icon-box:hover h4 a,
.services .icon-box:hover p {
  color: #fff;
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
}
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}
.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px 10px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 3px 10px 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
}
.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  background: #18d26e;
}
.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}
</style>
