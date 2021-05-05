# b08208009.github.io
# https://b08208009.github.io/index.html
在此次實習中，我先觀摩別人如何排版，並在自己的摸索下逐漸改良排版，由上而下逐一做成現在的網站。首先，放上一張地圖背景圖片彰顯自身背景，接著，運用div將文字框與圖片框分開，並追加圖片輪播功能，並將照片的角落變成圓形，使得網頁更生動。
再來，運用div排版將四個主題分別安插在四個角落以利閱讀；接下來運用文字框與圖片巧妙結合的圖卡，說明我做過或是現在進行式的計畫與活動，並附有檔案跟連結供瀏覽者觀看或造訪目標網站。
最後，使用聯絡欄功能與footer放上以己的連絡方式與馬上互動，並放上NAVbar，點擊上方字塊，即可以跳到想去的地方，如果點擊名字，則可以跳回最上方，就這樣，完成一個接近完整的個人申請網站!

使用templete：
# https://getbootstrap.com/docs/5.0/getting-started/introduction/ 運用裡面功能的navbar、圖片輪播
# https://chiayi-lin.github.io/ 運用原本的圖卡的功能，但是我簡化成圖片、文字的圖卡，沒有使用原本的animation
# https://github.com/JerryLin-0906/Self-introduction/blob/master/index.html 運用footer與下方contact me的聯絡欄功能，並參考他的排版並加以改良成現在的樣子。
# 其他排版皆是以自己寫成，若略顯陽春敬請見諒！！


<!-- Footer --> 我有自己改掉一些地方

        <footer class="page-footer font-small stylish-color-dark pt-4"style="background-color: #343a40;position: relative">

          <!-- Footer Links -->
          <div class="container text-center text-md-left">

            <!-- Grid row -->
            <div class="row">

              <!-- Grid column -->
              <div class="col mx-auto">

                <!-- Content -->
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4"style="font-size: x-large;color: white">Learn More</h5>
                <p style="font-size: medium;color: white">Here are the contact information,<br> feel free to contact me if you have any questions.</p>

              </div>
              <!-- Grid column -->

              <hr class="clearfix w-100 d-md-none">

              <!-- Grid column -->
              <div class="col mx-auto">

                <!-- Links -->
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4"style="font-size: larger;color: white">Contact Information</h5>

                <ul class="list-unstyled">
                  <li>
                    <a style="font-size: large;color: white">email :</a>
                    <a href="https://mail.google.com"target="_blank">b08209009@g.ntu.edu.tw</a>
                  </li>
                  <li>
                    <a style="font-size: large;color: white"target="_blank">phone-number :</a>
                    <a href="#!">097X-XXX-740</a>
                  </li>
                  <li>
                    <a style="font-size: large;color: white"target="_blank">Address :</a>
                    <a href="https://www.google.com.tw/maps/place/402%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8D%97%E5%8D%80/@24.1199677,120.6469267,14z/data=\
                    !3m1!4b1!4m5!3m4!1s0x34693c55c1ad4d61:0x43c53b130c5be0ba!8m2!3d24.1196339!4d120.6602534?hl=zh-TW"target="_blank">Taichung City 402, Taiwan</a>
                  </li>
                  <li>
                    <a style="font-size: large;color: white"target="_blank">GitHub :</a>
                    <a href="https://github.com/JerryLin-0906"target="_blank">JerryLin-0906</a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <hr style="background-color: white;width: 500px">

          <!-- Social buttons -->
            <div style="height:50px"align="center">
                <a class="footericon" style="background-image: url(white-facebook1.png);margin-right: 5px"href="https://www.facebook.com/profile.php?id=100005833354974"target="_blank"></a>
                <a class="footericon" style="background-image: url(white-instagram.png);background-size: 35px;margin-left: 5px"href="https://www.instagram.com/jerrylin_0906/?hl=zh-tw"target="_blank"></a>
            </div>

          <!-- Copyright -->
          <div class="footer-copyright text-center py-3"style="color: white">© 2020 Copyright:
            <a href="index.html"> Jui-Jiun Lin</a>
              made with the help of bootstrap4
          </div>

        </footer>



<div class="row">
                <div class="col twocol"style="padding-left: 10vw">
                    <div style="background-image: url(myphoto4.jpg);background-repeat: no-repeat;display: -ms-flex;background-size: 500px;height: 556px"></div>
                </div>

                <div class="col twocol" style="padding-left: 5vw">
                    <form action="mailto:b08209009@g.ntu.edu.tw" method="post" enctype="text/plain" style="padding-right: 10vw;padding-bottom: 50px;display: flex;flex-wrap: wrap;flex-direction: column">
                          <div class="form-group">
                              <input class="form-control" placeholder="Your name" id="name">
                          </div>
                          <div class="form-group">
                              <input class="form-control" placeholder="Your email" id="email">
                          </div>
                          <div class="form-group">
                              <input class="form-control" placeholder="Subject" id="subject">
                          </div>
                          <div class="form-group"style="vertical-align: text-top">
                              <textarea class="form-control" placeholder="Message" id="message"style="height: 250px;vertical-align: text-top"></textarea>
                          </div>
                          <div class="form-group">
                              <input type="submit" class="send btn" value="Send">
                              <input class="send btn" type="reset" value="Reset">
                          </div>


                    </form>
                </div>
            </div>
        </div>




<div class="col-md-6 col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                    <div class="blog-entry justify-content-end">
                        <div class="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style="background-image: url(images/project-1.png);">
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://github.com/ChiaYi-LIN/Computer-Programming/tree/main/Final%20Project" target="_blank">2D Game Design</a></h3>
                                <span>C++ Program</span>
                            </div>
                        </div>
                        <div class="text mt-3 float-right d-block">
                            <h3 class="heading"><a href="https://github.com/ChiaYi-LIN/Computer-Programming/tree/main/Final%20Project" target="_blank">Space Guardian</a></h3>
                            <p>An object-oriented programming (OOP) project with unique interface design using SDL library in C++.</p>
                        </div>
                    </div>
                </div>
