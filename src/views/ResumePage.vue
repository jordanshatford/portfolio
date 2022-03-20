<template>
  <div class="resume container">
    <div class="section-title">
      <h2>Resume</h2>
      <p>My Experience</p>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">Summary</h3>
        <div class="resume-item pb-0">
          <h4>Alice Barkley</h4>
          <p>
            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing
            user-centered digital/print marketing material from initial concept to final, polished deliverable.
          </p>
          <div>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>
        </div>
        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
          <h4>Master of Fine Arts and Graphic Design</h4>
          <h5>2015 - 2016</h5>
          <p>Rochester Institute of Technology, Rochester, NY</p>
          <p>
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut
            dignissimos deleniti nerada porti sand markend
          </p>
        </div>
        <div class="resume-item">
          <h4>Bachelor of Fine Arts and Graphic Design</h4>
          <h5>2010 - 2014</h5>
          <p>Rochester Institute of Technology, Rochester, NY</p>
          <p>
            Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde
            vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
          <h4>Senior graphic design specialist</h4>
          <h5>2019 - Present</h5>
          <p>Experion, New York, NY</p>
          <div>
            <ul>
              <li>
                Lead in the design, development, and implementation of the graphic, layout, and production communication
                materials
              </li>
              <li>
                Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
              </li>
              <li>
                Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
              </li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>
        </div>
        <div class="resume-item">
          <h4>Graphic design specialist</h4>
          <h5>2017 - 2018</h5>
          <p>Stepping Stone Advertising, New York, NY</p>
          <div>
            <ul>
              <li>
                Developed numerous marketing programs (logos, brochures,infographics, presentations, and
                advertisements).
              </li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
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
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #18d26e;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.15);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #18d26e;
  border: 2px solid #18d26e;
}
</style>
