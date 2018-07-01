<?php get_header(); ?>
    <div id="loader_box">
        <div id="loader_main">
           <p id="loader_text">バナナって美味しいよね？</p>
        </div>
        <div class="loading_bar">
           <span></span>
       </div>
    </div>
    <div id="loading_line_box">
        <div id="loading_line_inner">
            <div class="loading_line_yellow"></div>
            <div class="loading_line_white"></div>   
        </div>
    </div>
    <div id="wrapper">
        <!-- /header/ -->
      <div id="n_header">
          <div id="n_btn">
             <div class="n_btn_bg opa"></div>
             <div class="n_btn_inner">
                <div>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>
             </div>
          </div>
      </div>      
        <!-- /Menu/ -->
      <div id="menu" class="menu_close non">
        <div class="menu_inner opa">
             <div class="menu_bg"></div>
             <div class="menu_block">
                <a href="#intro" class="menu_list">
                  <div>
                     <p>バナナの魅力</p>
                  </div>
                </a>
                <a href="#nutrition" class="menu_list">
                  <div>
                     <p>バナナの栄養素</p>
                  </div>
                </a>
                <a href="#movie" class="menu_list">
                  <div>
                     <p>バナナの正しいむき方</p>
                  </div>
                </a>
                <a href="#shop" class="menu_list">
                  <div>
                     <p>バナナ専門店の紹介</p>
                  </div>
                </a>
           </div>
           <div class="menu_sns opa">
               <ul class="sns_list">
                    <li style="list-style: none;">
                      <a href="https://www.facebook.com/yumegori/" target="_blank">      
                       <img src="<?php echo get_template_directory_uri(); ?>/images/icon-facebook.png" alt="">
                      </a> 
                    </li> 
                    <li style="list-style: none;">
                      <a href="https://twitter.com/yumegori1228/" target="_blank">  
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon-twiter.png" alt="">
                      </a>    
                    </li> 
                    <li style="list-style: none;">
                      <a href="https://www.instagram.com/bananabananu/" target="_blank">  
                       <img src="<?php echo get_template_directory_uri(); ?>/images/icon-instagram.png" alt="">
                      </a> 
                    </li> 
               </ul>
           </div>       
        </div>      
      </div>
      <!-- /CONTENTS/ -->
      <div id="top" class="contents">
          <!-- /HOME/ -->
         <div id="home" class="content_inner">
            <!-- /MAIN/ -->
            <div class="contents_main base_h">
               <div class="contents_main_inner">
                  <div class="contents_main_left">
                      <a href="#" class="contents_main_logo">
                         <img src="<?php echo get_template_directory_uri(); ?>/images/slogo_banana_top.png" alt="" class="pc_disp_logo">
                         <img src="<?php echo get_template_directory_uri(); ?>/images/slogo_banana_top_tab.png" alt="" class="tab_disp_logo">
                         <img src="<?php echo get_template_directory_uri(); ?>/images/slogo_banana_top_sp.png" alt="" class="sp_disp_logo">
                      </a>
                      <div class="contents_main_title">
                          <img src="<?php echo get_template_directory_uri(); ?>/images/title_pc.svg" alt="" class="pc_disp_title">
                          <img src="<?php echo get_template_directory_uri(); ?>/images/title_sp.svg" alt="" class="sp_disp_title">
                      </div>
                      
                  </div>
                  <div class="contents_main_right">
                      <div id="slider-wrap">
                         <ul id="slider">
                            <li class="slider_element"><img src="<?php echo get_template_directory_uri(); ?>/images/banana_slide1.jpg" alt=""></li>
                            <li class="slider_element"><img src="<?php echo get_template_directory_uri(); ?>/images/banana_slide2.jpg" alt=""></li>
                            <li class="slider_element"><img src="<?php echo get_template_directory_uri(); ?>/images/banana_slide3.jpg" alt=""></li>
                            <li class="slider_element"><img src="<?php echo get_template_directory_uri(); ?>/images/banana_slide4.jpg" alt=""></li>
                         </ul>
                      </div>
                  </div>
               </div>
            </div>
            <!-- /Detail/ -->
            <div class="contents_detail">
               <div class="contents_detail_inner">
                  <!-- /intro/ -->
                   <section id="intro">
                      <div class="intro_inner clearfix">
                         <div class="intro_box01 clearfix">
                             <div class="intro_textBox01">
                                <h2 class="intro_title01 fade-in-right" id="introJS01">
                                芳醇な香りとしっとりとした甘さ<br>
                                デザートには必要不可欠なフルーツ
                                </h2>
                                <div class="intro_txt01 fade-in-right" id="introJS02">
                                    <p>ほとんどのスーパーで見かけることができるバナナ。<br class="pc_Paragraph">
                                       だれもが魅了される香りと甘さは、シリアルやミックスジュース、クレープやケーキなど至るところで使われています。</p>
                                </div>    
                             </div>
                             <div class="intro_img01">
                                 <img src="<?php echo get_template_directory_uri(); ?>/images/intro_img01.jpg" alt="">
                             </div>
                         </div>         
                         <div class="intro_box02">
                             <div class="intro_img02">
                                 <img src="<?php echo get_template_directory_uri(); ?>/images/intro_img06.jpg" alt="" class="pc_disp_img">
                                 <img src="<?php echo get_template_directory_uri(); ?>/images/intro_img06_sp.jpg" alt="" class="sp_disp_img">
                                 <div id="length_txt" class="fade-in-right"><p>The best fruits for sweets and breakfasts</p></div>
                             </div>
                             <div class="intro_textBox02 fade-in-right" id="introJS03">
                                <div class="intro_txt02">
                                    <p>デザートだけではなく朝食にも最適な果物。時間がない朝でもバナナ１本食べておけば頭とカラダを動かすのに十分なエネルギーを補充できます。</p>
                                </div>
                             </div>
                         </div>
                         <div class="intro_box03">
                             <div class="intro_img03" id="introJS04">
                                 <img src="<?php echo get_template_directory_uri(); ?>/images/intro_img03.jpg" alt="" class="pc_disp_img">
                                 <img src="<?php echo get_template_directory_uri(); ?>/images/intro_img03_sp.jpg" alt="" class="sp_disp_img">
                             </div>
                             <div class="intro_textBox03">
                                 <h2 class="intro_title03 fade-in-left" id="introJS05">
                                   食べてるバナナの8割以上は<br>
                                   ジャイアントキャベンディッシュ
                                </h2>
                                <div class="intro_txt03 fade-in-left" id="introJS06">
                                    <p>日本で出回っているバナナの多くはジャイアントキャベンディッシュという品種。滑らかでさっぱりとした甘さを持っていて、日持ちがすることで日本では特に好まれている。実は高級バナナとられる「高原バナナ」や「甘熟王」もジャイアントキャベンディッシュ。</p>
                                </div>    
                             </div>
                         </div>
                       </div>
                    </section>
                    <!-- /nutrition/ -->
                    <section id="nutrition" class="js-elem">
                       <div class="nutrition_inner">
                          <div class="nutrition_box">
                              <h2 class="nutrition_title">
                                バナナの豊富な栄養素とは？    
                              </h2>
                              <div class="nutrition_txt">
                                  <p>1本あたり約86kcalと低カロリーかつ栄養バランスがとれたバナナ。<br class="sp_Paragraph">
                                     バナナに含まれる糖類はすぐにエネルギーに変わるため朝食のときや運動後におススメ。</p>
                              </div>
                          </div>
                          <div class="nutrition_imag" id="introJS07">
                              <img src="<?php echo get_template_directory_uri(); ?>/images/nutrition_banana01.png" alt="">    
                          </div>
                          <div class="nutrition_deco">
                              <p><span>N</span>utrition</p>
                          </div>
                          <div class="nutrition_deco2" id="introJS08">
                              <img src="<?php echo get_template_directory_uri(); ?>/images/sweet.png" alt="">
                          </div>
                          <div class="movie_deco">
                              <p><span>M</span>ethod</p>
                          </div>
                       </div>
                    </section>
                    <!-- /movie/ -->
                    <section id="movie" class="js-elem">
                       <div class="movie_inner fade-in-up">
                          <div class="movie_title_box">
                             <h2 class="movie_title">バナナの正しいむき方</h2>
                          </div>      
                          <div class="movie_main clearfix">
                              <div class="movie_txtBox">
                                 <div class="movie_txt">
                                    <p>バナナを美味しく食べるむき方を紹介しています。正しくバナナをむけば果肉を傷つけることがありません。見た目や味を損なうことなく美味しく召しあがることができます。
                                    </p>
                                    <div class="movie_button">
                                       <a href="<?php echo home_url();?>/movie/">watch more</a>
                                    </div>
                                 </div>
                                 
                              </div>
                              <div class="movie_area">
                                   <div class="youtube_bg">
                                       <img src="<?php echo get_template_directory_uri(); ?>/images/youtube-bg30.jpg" alt="">
                                   </div>       
                                   <div class="youtube_box">    
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WCAq8UhZH_w?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                   </div>
                              </div>       
                          </div>
                       </div>
                    </section>
                    <!-- /shop/ -->
                    <section id="shop" class="js-elem">
                        <div class="shop_inner fade-in-up">
                            <div class="shop_title_box">
                             <h2 class="shop_title">バナナ専門店</h2>
                            </div>      
                            <div class="shop_txt">
                                <p>バナナを食べたくていても立ってもいれれないことは良くあること。<br class="sp_Paragraph">
                                  美味しいバナナが食べられるお店を厳選して紹介しています。</p>
                            </div>
                            <div id="googleMap">
                                <?php echo do_shortcode('[google_map_easy id="1"]')?>
                                <div class="shop_deco">
                                  <p><span>S</span>pecialty</p>
                                </div>
                            </div>
                            <div id="shop_main">
                                <div class="shop_main_inner clearfix">
                                    <div class="shop_box">
                                        <a href="http://umeda-banana.com/" class="shopLink" target="_blank">
                                          <div class="shop_imag">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/shop-umedabanana.jpg" alt="">
                                          </div>
                                          <div class="shopHover-box">
                                            <div class="shopHover-tet">詳しく見る</div>
                                          </div>
                                        </a>
                                        <div class="shop_name">
                                           <h2 class="shop_name_title">
                                               <a href="http://umeda-banana.com/" target="_blank">梅田のバナナ</a>
                                           </h2>
                                        </div>   
                                    </div>
                                    <div class="shop_box">
                                        <a href="https://page.line.me/sonna877/" class="shopLink" target="_blank">
                                          <div class="shop_imag">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/shop-sonnabanana.jpg" alt="">
                                          </div>
                                          <div class="shopHover-box">
                                            <div class="shopHover-tet">詳しく見る</div>
                                          </div>
                                        </a>
                                        <div class="shop_name">
                                           <h2 class="shop_name_title">
                                               <a href="https://page.line.me/sonna877/" target="_blank">SONNA BANANA</a>
                                            </h2>
                                        </div>   
                                    </div>
                                    <div class="shop_box">
                                        <a href="https://www.instagram.com/cramsbanana/" class="shopLink" target="_blank">
                                          <div class="shop_imag">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/shop-cramsbanana.jpg" alt="">
                                          </div>
                                          <div class="shopHover-box">
                                            <div class="shopHover-tet">詳しく見る</div>
                                          </div>
                                        </a>
                                        <div class="shop_name">
                                            <h2 class="shop_name_title">
                                               <a href="https://www.instagram.com/cramsbanana/" target="_blank">CRAMS BANANA</a>
                                            </h2>
                                        </div>   
                                    </div>
                                    <div class="shop_box">
                                        <a href="https://www.tokyobanana.jp/" class="shopLink" target="_blank">
                                          <div class="shop_imag">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/shop-tokyobanana.jpg" alt="">
                                          </div>
                                          <div class="shopHover-box">
                                            <div class="shopHover-tet">詳しく見る</div>
                                          </div>
                                        </a>
                                        <div class="shop_name">
                                           <h2 class="shop_name_title">
                                               <a href="https://www.tokyobanana.jp/" target="_blank">東京バナナ</a>
                                            </h2>
                                        </div>   
                                    </div>
                                    <div class="shop_box">
                                        <a href="https://tabelog.com/chiba/A1207/A120704/12037333/" class="shopLink" target="_blank">
                                          <div class="shop_imag">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/shop-satoubanana.jpg" alt="">
                                          </div>
                                          <div class="shopHover-box">
                                            <div class="shopHover-tet">詳しく見る</div>
                                          </div>
                                        </a>
                                        <div class="shop_name">
                                           <h2 class="shop_name_title">
                                                <a href="https://tabelog.com/chiba/A1207/A120704/12037333/" target="_blank">佐藤のバナナ</a>
                                           </h2>
                                        </div>   
                                    </div>
                                </div>
                                <div id="shop_button"><span>read more</span></div>  
                            </div>
                        </div>
                    </section>
                    <!-- /instagram/ -->
                    <section id="insta">
                        <div class="insta_inner">
                            <div class="insta_title_box">
                             <h2 class="insta_title" id="introJS09">Instagram</h2>
                            </div>      
                            <div class="insta_main">
                                <ul class="clearfix">
                                    <li class="fade-in-left03">
                                       <a href="https://www.instagram.com/p/Bj3kXRwHi5d/" class="instaLink" target="_blank"> 
                                        <div class="insta-img">
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-pink.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>    
                                    </li>
                                    <li class="fade-in-left02">
                                       <a href="https://www.instagram.com/p/Bj3kj6gn1Ec/" class="instaLink" target="_blank">     
                                        <div class="insta-img">
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-cereal.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>    
                                    </li>
                                    <li class="fade-in-left01">
                                       <a href="https://www.instagram.com/p/Bj3kqYYHG2c/" class="instaLink" target="_blank">     
                                        <div class="insta-img"> 
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-morning.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>    
                                    </li>
                                    <li class="fade-in-right01">
                                       <a href="https://www.instagram.com/p/Bj3ku15nSiI/" class="instaLink" target="_blank"> 
                                        <div class="insta-img">
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-blueberry.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>    
                                    </li>
                                    <li class="fade-in-right02">
                                       <a href="https://www.instagram.com/p/Bj3kxgWnOog/" class="instaLink" target="_blank"> 
                                        <div class="insta-img">
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-blue.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>
                                    </li>
                                    <li class="fade-in-right03">
                                       <a href="https://www.instagram.com/p/Bj3k0yIni2k/" class="instaLink" target="_blank"> 
                                        <div class="insta-img">
                                          <img src="<?php echo get_template_directory_uri(); ?>/images/insta-desert.jpg" alt="">
                                        </div>
                                        <div class="insta-inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/link-icon.png" alt="">
                                        </div>
                                       </a>    
                                    </li>
                                </ul>
                                <a href="https://www.instagram.com/bananabananu/" class="insta_logo" target="_blank">
                                   <img src="<?php echo get_template_directory_uri(); ?>/images/insta_icon.svg" alt="">
                                </a>
                                  
                            </div>    
                        </div>
                    </section>
                    <!-- /contact/ -->
                    <section id="contact">
                        <div class="contact_inner">
                           <a href="https://www.facebook.com/yumegori/" target="_blank">
                           <div id="contact_button">
                               <p>CONTACT</p>
                           </div>
                           </a>
                        </div>
                    </section>
               </div> 
            </div>
         </div> 
      </div>
      <!-- /footer/ -->
      <footer id="common_footer" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
           <div class="footer_inner">
              <div class="footer_deco">
                 <img src="<?php echo get_template_directory_uri(); ?>/images/footer-bg-rd.png" alt="">
              </div>
                 <div class="copy">
                   <p>©BANANA All Rights Reserved</p>
                 </div>
                 <div class="sns_footer">
                    <ul>
                         <li><a href="https://www.facebook.com/yumegori/" target="_blank">Facebook</a></li>
                         <li><a href="https://twitter.com/yumegori1228/" target="_blank">Twitter</a></li>
                         <li><a href="https://www.instagram.com/bananabananu/" target="_blank">Instagram</a></li>
                    </ul>       
                 </div>
           </div>
      </footer>
    </div>  
<?php wp_footer(); ?>
</body>
</html>