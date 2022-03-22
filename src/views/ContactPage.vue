<template>
  <div class="contact container">
    <div class="section-title">
      <h2>Contact</h2>
      <p>Contact Me</p>
    </div>
    <div class="row mt-2">
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="info-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
              fill="currentColor"
            />
          </svg>
          <h3>My Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>
      <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-share-alt"></i>
          <h3>Social Profiles</h3>
          <div class="social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-4 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-envelope"></i>
          <h3>Email Me</h3>
          <p>contact@example.com</p>
        </div>
      </div>
      <div class="col-md-6 mt-4 d-flex align-items-stretch">
        <div class="info-box">
          <i class="bx bx-phone-call"></i>
          <h3>Call Me</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>
    </div>
    <form role="form" class="php-email-form mt-4">
      <div class="row">
        <div class="col-md-6 form-group">
          <v-input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required></v-input>
        </div>
        <div class="col-md-6 form-group mt-3 mt-md-0">
          <v-input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          ></v-input>
        </div>
      </div>
      <div class="form-group mt-3">
        <v-input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required></v-input>
      </div>
      <div class="form-group mt-3">
        <v-textarea name="message" rows="5" placeholder="Message" required></v-textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><v-button type="submit">Send Message</v-button></div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

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
  color: #fff;
}
.contact .info-box {
  color: #444444;
  padding: 20px;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
}
.contact .info-box svg {
  font-size: 24px;
  color: #18d26e;
  border-radius: 50%;
  padding: 14px;
  float: left;
  background: rgba(255, 255, 255, 0.1);
}
.contact .info-box h3 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  margin: 10px 0 8px 68px;
}
.contact .info-box p {
  padding: 0;
  color: #fff;
  line-height: 24px;
  font-size: 14px;
  margin: 0 0 0 68px;
}
.contact .info-box .social-links {
  margin: 5px 0 0 68px;
  display: flex;
}
.contact .info-box .social-links a {
  font-size: 18px;
  display: inline-block;
  color: #fff;
  line-height: 1;
  margin-right: 12px;
  transition: 0.3s;
}
.contact .info-box .social-links a:hover {
  color: #18d26e;
}
.contact .php-email-form {
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
}
.contact .php-email-form .error-message {
  display: none;
  background: rgba(255, 255, 255, 0.08);
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  background: rgba(255, 255, 255, 0.08);
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: rgba(255, 255, 255, 0.08);
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
