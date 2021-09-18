<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Khoa Do's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"/>
        <link href="{{ '/css/landing.css' | url }}" rel="stylesheet"/>
    </head>
    <body>
        <main class="wrapper">
            <section id="hero" class="container hero row">
                <div class="hero-text col">
                    <div class="intro">
                        <div class="intro-text">
                            <p class="intro-text__subtitle">Hi, I am Khoa - a Frontend developer from <span role="img" aria-label="Vietnam">🇻🇳</span></p>
                            <h1 class="intro-text__title">
                                <!-- I craft Frontend app with Customer-Centric and made them scalable -->
                                I love crafting beautiful frontend apps then make them neat and stable!
                            </h1>
                        </div>
                        <nav class="find-me">
                            <ul class="social-media">
                                <li>Look for me at</li>
                                <li>
                                    <a href="https://www.linkedin.com/in/khoadodang/"><img src="./assets/img/linkedin.svg" alt="linkedin"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://stackoverflow.com/users/3550678/khoa"><img src="./assets/img/stackoverflow.svg" alt="stackoverflow"/>
                                    </a>
                                </li>
                                <li>
                                    <a href=""><img src="./assets/img/resume.svg" alt="resume"/>
                                    </a>
                                </li>
                            </ul>
                            <ul class="contact-me">
                                <li>or read</li>
                                <li class="btn-text">
                                    <a href="{{ 'blog' | url }}">My blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div style="position: relative; flex: 1; align-self: flex-start;">
                    <img class="hero-img-bg" src="assets/img/splash_2x.png" alt="splash art background"/>
                    <img class="hero-img" src="assets/img/kd_2x.png" alt="khoa portrait"/>
                </div>
            </section>
        </main>
    </body>
</html>
