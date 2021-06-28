# b08208009.github.io
# https://b08208009.github.io/final/%E6%9C%9F%E6%9C%AB%E5%91%88%E7%8F%BE.html

# 雲端影片連結
# https://drive.google.com/file/d/1J5MvWR2lLRF4C4YqUKzaT3gJ2qVgn-Qk/view?usp=sharing

在期末報告中，我從我最需要的部分發想要做什麼的主題，對我來說，我擁有一群選擇困難症的朋友，每次去吃飯的時候，總是要決定半小時以上，
真的是非常令人煩躁，為了解決這個麻煩的問題，我選擇做正餐產生器的網頁做為我的期末呈現。

衡量過我的程式功力之後，我決定用if-else函數與隨機整數產生器的整合作為抽籤器的基礎，並搭配上Javascript函式庫中Leaflet的互動式地圖功能，
顯示出餐廳所在位置與資訊，最後在寫出移除結果的函式(等等會呈現在下面)

關於篩選條件的部分，我選擇用所在位置與最大願意步行距離作為篩選條件，畢竟大家是不知道要吃什麼才會求助於程式的力量。我將台大分為四大區域：
新體區域(新生南路)、公館區域(羅斯福路)、長興基隆路區域(基隆路)與法社科院區域(辛亥路)，並以這些的區域中心對應最佳步行距離篩選出各家餐廳。

整個網頁以橘色系作為呈現，以明亮的感覺帶出整個溫馨可愛的感覺，同時帶出簡約時尚的感覺。可以透過點擊當中的按鈕，移動至網頁的不同地方，
點擊完篩選條件後，將會跳出文字的篩選結果以及在互動式地圖(openstreetmap，免費)點出餐廳的位置，之後可以藉由消除結果把不滿意的餐廳消除掉！！！
在整個網站最後面留有聯絡資訊，歡迎大家聯絡我指正並改進網頁的缺失。

另外，餐廳的抽籤選擇以我比較常去的店家作為呈現，若是大家有想要加入的店家可以告訴我！！


參考資訊：
# https://www.w3schools.com/  w3cschool
# https://getbootstrap.com/   bootstrap
# https://ithelp.ithome.com.tw/articles/10201574。 參考leaflet的使用方法
# https://leafletjs.com/ 參考leaflet的使用方法
# https://ithelp.ithome.com.tw/articles/10197920  參考產生整數亂數的的方法
# 其他排版與程式皆是以自己寫成，若略顯陽春敬請見諒！！

function goToAnchor(anchor) {                            ##產生隨機亂數
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}                                                        


// 建立 Leaflet 地圖                                      ##產生基本地圖(使用openstreetmap，免費)
var map = L.map('mapid');
  
// 設定經緯度座標
map.setView(new L.LatLng(25.0162862, 121.5359617), 13);

// 設定圖資來源
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
map.addLayer(osm);



$("#re").click(function () {
  $("#math").empty();
});                                                        ##消除結果



function red(a,b){                                         ##隨機抽取(只顯示一部份程式碼，其餘結構差不多)
  if (a == 100 & b == 1){
    r = getRandom(1,9);
    if (r == 1){
      document.getElementById("math").innerHTML = "小福 allpass食堂";
      l1 = L.marker([25.01860,121.53733]).bindPopup("<p>小福 allpass食堂<br>各式定食</p>");
      map.addLayer(l1);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "小福 文湯武將";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 文湯武將<br>滷味</p>");
      map.addLayer(l1);
    }
    }
    
    

