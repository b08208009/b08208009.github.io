
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

// 建立 Leaflet 地圖
var map = L.map('mapid');
  
// 設定經緯度座標
map.setView(new L.LatLng(25.0162862, 121.5359617), 13);

// 設定圖資來源
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
map.addLayer(osm);



function getRandom(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
};

function red(a,b){
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
    if (r == 3){
      document.getElementById("math").innerHTML = "小福 摩斯漢堡";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 摩斯漢堡<br>速食漢堡</p>")
      map.addLayer(l1);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小福 強尼健康食堂";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 強尼健康食堂<br>健身餐點</p>")
      map.addLayer(l1);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "小福 比司多早午餐";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 比司多早午餐<br>各式早午餐</p>")
      map.addLayer(l1);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "小福 懶得出門義麵坊";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 懶得出門意麵坊<br>義式美食</p>")
      map.addLayer(l1);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "小福 全家便利商店";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 全家便利商店<br>快速餐點</p>")
      map.addLayer(l1);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "稍飽";
      l1 =L.marker([25.02009,121.53820]).bindPopup("<p>醉月湖畔 稍飽<br>炙燒豬牛便當</p>")
      map.addLayer(l1);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "小福 福利社";
      l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 福利社<br>各式便當以及點心</p>")
      map.addLayer(l1);
    }
       
  }

  if (a == 100 & b == 2){
    r = getRandom(1,7);
    if (r == 1){
      document.getElementById("math").innerHTML = "大一女學生餐廳";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>大一女學生餐廳<br>自助餐、便利商店、燒臘、義式料理應有盡有</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "小木屋鬆餅";
      var l1 =L.marker([25.01552,121.53761]).bindPopup("<p>小木屋鬆餅<br>甜、鹹鬆餅與飲料</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "卓越聯合中心";
      var l1 =L.marker([25.01453,121.53795]).bindPopup("<p>卓越聯合中心<br>自助餐、麵點、速食、便利商店應有盡有</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小小福";
      var l1 =L.marker([25.01542,121.53721]).bindPopup("<p>小小福<br>素食、自助餐、早餐店應有盡有</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "Subway";
      var l1 =L.marker([25.01305,121.53650]).bindPopup("<p>Subway<br>潛艇堡、速食</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "7-11";
      var l1 =L.marker([25.01453,121.53795]).bindPopup("<p>7-11<br>快速餐點</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "全家便利商店";
      var l1 =L.marker([25.01305,121.53650]).bindPopup("<p>全家便利商店<br>快速餐點</p>").addTo(map);
    }
  }

  if (a == 100 & b == 3){
    r = getRandom(1,8);
    if (r == 1){
      document.getElementById("math").innerHTML = "社科院學生餐廳 穀果廚房";
      var l1 =L.marker([25.02070,121.54232]).bindPopup("<p>社科院學生餐廳 穀果廚房<br>早午餐、飲料</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "大李水餃";
      var l1 =L.marker([25.02205,121.54132]).bindPopup("<p>大李水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "李記水餃";
      var l1 =L.marker([25.02210,121.54277]).bindPopup("<p>李記水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "淺草日式飯糰";
      var l1 =L.marker([25.02205,121.54201]).bindPopup("<p>淺草日式飯糰<br>飯糰、味增湯</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "梧貳";
      var l1 =L.marker([25.02186,121.54276]).bindPopup("<p>梧貳<br>咖哩、蛋包飯</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "I'm pasta";
      var l1 =L.marker([25.02249,121.54277]).bindPopup("<p>I'm pasta<br>義式料理</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "巷仔口米粉湯";
      var l1 =L.marker([25.02262,121.54278]).bindPopup("<p>巷仔口米粉湯<br>米粉湯、麵食、小吃</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "馬祖麵館";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>馬祖麵館<br>炒飯、麵點</p>").addTo(map);
    }
  }

  if (a == 100 & b == 4){
    r = getRandom(1,7);
    if (r == 1){
      document.getElementById("math").innerHTML = "我家廚房";
      var l1 =L.marker([25.01587,121.54472]).bindPopup("<p>我家廚房<br>各式定食、自助餐</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第三餐廳";
      var l1 =L.marker([25.01207,121.54099]).bindPopup("<p>台灣科技大學學生餐廳第三餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第一餐廳";
      var l1 =L.marker([25.01381,121.54274]).bindPopup("<p>台灣科技大學學生餐廳第一餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "摩斯漢堡";
      var l1 =L.marker([25.01736,121.54502]).bindPopup("<p>摩斯漢堡<br>日式漢堡速食</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "7-11";
      var l1 =L.marker([25.01710,121.54477]).bindPopup("<p>7-11<br>快速餐點</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "男七學生餐廳";
      var l1 =L.marker([25.01491,121.54714]).bindPopup("<p>男七學生餐廳<br>自助餐、簡餐</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "男舍區外攤販";
      var l1 =L.marker([25.01632,121.54547]).bindPopup("<p>男舍區外攤販<br>簡餐、鹹酥雞、滷肉飯</p>").addTo(map);
    }
  }

  if (a == 500 & b == 1){
    r = getRandom(1,7);
    if (r == 1){
      document.getElementById("math").innerHTML = "第一學生活動中心";
      var l1 =L.marker([25.01801,121.54021]).bindPopup("<p>第一學生活動中心<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "女九餐廳";
      var l1 =L.marker([25.01942,121.53939]).bindPopup("<p>女九餐廳<br>自助餐、滷味、水餃應有盡有</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "小小福";
      var l1 =L.marker([25.01542,121.53721]).bindPopup("<p>小小福<br>素食、自助餐、早餐店應有盡有</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "大一女學生餐廳";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>大一女學生餐廳<br>自助餐、便利商店、燒臘、義式料理應有盡有</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "小木屋鬆餅";
      var l1 =L.marker([25.01552,121.53761]).bindPopup("<p>小木屋鬆餅<br>甜、鹹鬆餅與飲料</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "卓越聯合中心";
      var l1 =L.marker([25.01453,121.53795]).bindPopup("<p>卓越聯合中心<br>自助餐、麵點、速食、便利商店應有盡有</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "鳳城燒臘";
      var l1 =L.marker([25.02027,121.53381]).bindPopup("<p>鳳城燒臘<br>港式燒臘、炒飯面</p>").addTo(map);
    }
  }

  if (a == 500 & b == 2){
    r = getRandom(1,13);
    if (r == 1){
      document.getElementById("math").innerHTML = "小福 allpass食堂";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 allpass食堂<br>各式定食</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "小福 文湯武將";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 文湯武將<br>滷味</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "小福 摩斯漢堡";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 摩斯漢堡<br>速食漢堡</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小福 強尼健康食堂";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 強尼健康食堂<br>健身餐點</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "小福 比司多早午餐";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 比司多早午餐<br>各式早午餐</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "小福 懶得出門義麵坊";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 懶得出門意麵坊<br>義式美食</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "第一學生活動中心";
      var l1 =L.marker([25.01801,121.54021]).bindPopup("<p>第一學生活動中心<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第三餐廳";
      var l1 =L.marker([25.01207,121.54099]).bindPopup("<p>台灣科技大學學生餐廳第三餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第一餐廳";
      var l1 =L.marker([25.01381,121.54274]).bindPopup("<p>台灣科技大學學生餐廳第一餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "水源市場 大水源";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 大水源<br>各式便當</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "水源市場 狠臺";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 狠臺<br>各式炒飯、麵</p>").addTo(map);
    }
    if (r == 12){
      document.getElementById("math").innerHTML = "水源市場 竹之丼";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 竹之丼<br>各式日式定食便當</p>").addTo(map);
    }
    if (r == 13){
      document.getElementById("math").innerHTML = "水源市場 柯記";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 柯記<br>各式炒飯、麵、便當</p>").addTo(map);
    }
    if (r == 14){
      document.getElementById("math").innerHTML = "麥當勞 公館店";
      var l1 =L.marker([25.01419,121.53459]).bindPopup("<p>麥當勞(公館店)<br>速食</p>").addTo(map);
    }
  }

  if (a == 500 & b == 3){
    r = getRandom(1,8);
    if (r == 1){
      document.getElementById("math").innerHTML = "第一學生活動中心";
      var l1 =L.marker([25.01801,121.54021]).bindPopup("<p>第一學生活動中心<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "女九餐廳";
      var l1 =L.marker([25.01942,121.53939]).bindPopup("<p>女九餐廳<br>自助餐、滷味、水餃應有盡有</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "我家廚房";
      var l1 =L.marker([25.01587,121.54472]).bindPopup("<p>我家廚房<br>各式定食、自助餐</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小姐姐麻辣燙";
      var l1 =L.marker([25.02413,121.54282]).bindPopup("<p>小姐姐麻辣燙<br>各式滷味、麻辣燙</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "池先生";
      var l1 =L.marker([25.02230,121.54355]).bindPopup("<p>池先生<br>馬來西亞風味定食</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "麵工坊義大利麵";
      var l1 =L.marker([25.02447,121.54283]).bindPopup("<p>麵工坊義大利麵<br>義大利麵、飯</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "裸湯拉麵，雞白湯";
      var l1 =L.marker([25.02473,121.54281]).bindPopup("<p>裸湯拉麵，雞白湯<br>日式拉麵</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "稍飽";
      var l1 =L.marker([25.02009,121.53820]).bindPopup("<p>醉月湖畔 稍飽<br>炙燒豬牛便當</p>").addTo(map);
    }
  }

  if (a == 500 & b == 4){
    r = getRandom(1,12);
    if (r == 1){
      document.getElementById("math").innerHTML = "社科院學生餐廳 穀果廚房";
      var l1 =L.marker([25.02070,121.54232]).bindPopup("<p>社科院學生餐廳 穀果廚房<br>早午餐、飲料</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "大李水餃";
      var l1 =L.marker([25.02205,121.54132]).bindPopup("<p>大李水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "李記水餃";
      var l1 =L.marker([25.02210,121.54277]).bindPopup("<p>李記水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "淺草日式飯糰";
      var l1 =L.marker([25.02205,121.54201]).bindPopup("<p>淺草日式飯糰<br>飯糰、味增湯</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "梧貳";
      var l1 =L.marker([25.02186,121.54276]).bindPopup("<p>梧貳<br>咖哩、蛋包飯</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "I'm pasta";
      var l1 =L.marker([25.02249,121.54277]).bindPopup("<p>I'm pasta<br>義式料理</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "巷仔口米粉湯";
      var l1 =L.marker([25.02262,121.54278]).bindPopup("<p>巷仔口米粉湯<br>米粉湯、麵食、小吃</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "馬祖麵館";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>馬祖麵館<br>炒飯、麵點</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "第一學生活動中心";
      var l1 =L.marker([25.01801,121.54021]).bindPopup("<p>第一學生活動中心<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "女九餐廳";
      var l1 =L.marker([25.01942,121.53939]).bindPopup("<p>女九餐廳<br>自助餐、滷味、水餃應有盡有</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "好樹早午餐";
      var l1 =L.marker([25.01942,121.53939]).bindPopup("<p>好樹早午餐<br>早午餐、蛋餅</p>").addTo(map);
    }
    if (r == 12){
      document.getElementById("math").innerHTML = "十二雞";
      var l1 =L.marker([25.01942,121.53939]).bindPopup("<p>女九餐廳<br>雞湯、拉麵、飯類</p>").addTo(map);
    }
  }

  if (a == 1000 & b == 1){
    r = getRandom(1,8);
    if (r == 1){
      document.getElementById("math").innerHTML = "阿英滷肉飯";
      var l1 =L.marker([25.01967,121.53223]).bindPopup("<p>阿英滷肉飯<br>滷肉飯以及小菜</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "清化河粉";
      var l1 =L.marker([25.01977,121.53222]).bindPopup("<p>清化河粉<br>越式河粉及美食</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "唐老鴨小火鍋";
      var l1 =L.marker([25.01953,121.53337]).bindPopup("<p>唐老鴨小火鍋<br>鍋物</p>").addTo(map);
    }  
    if (r == 4){
      document.getElementById("math").innerHTML = "柒食貳";
      var l1 =L.marker([25.01975,121.53280]).bindPopup("<p>柒食貳<br>各式簡餐</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "pasta two go";
      var l1 =L.marker([25.01936,121.53362]).bindPopup("<p>pasta to go<br>義大利麵</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "麥當勞 新生店";
      var l1 =L.marker([25.01814,121.53334]).bindPopup("<p>麥當勞(新生店)<br>速食</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "阿里港";
      var l1 =L.marker([25.01828,121.53168]).bindPopup("<p>阿里港<br>各式傳統美食</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "肯德基";
      var l1 =L.marker([25.01717,121.53315]).bindPopup("<p>肯德基<br>速食</p>").addTo(map);
    }
  }


  if (a == 1000 & b == 2){
    r = getRandom(1,9)
    if (r == 1){
      document.getElementById("math").innerHTML = "大盛豬排";
      var l1 =L.marker([25.01449,121.53378]).bindPopup("<p>大盛豬排<br>日式炸豬排定食</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "韓天閣";
      var l1 =L.marker([25.01424,121.53408]).bindPopup("<p>韓天閣<br>各式日式韓式料理</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "Miss Energy";
      var l1 =L.marker([25.01476,121.53370]).bindPopup("<p>Miss Energy<br>減醣健康便當</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "藍家卦包";
      var l1 =L.marker([25.01568,121.53258]).bindPopup("<p>藍家卦包<br>各式台式小吃</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "Mr.拉麵";
      var l1 =L.marker([25.01568,121.53258]).bindPopup("<p>Mr.拉麵<br>日式拉麵定食</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "藍家卦包";
      var l1 =L.marker([25.01568,121.53258]).bindPopup("<p>藍家卦包<br>各式台式小吃</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "稍飽";
      var l1 =L.marker([25.02009,121.53820]).bindPopup("<p>醉月湖畔 稍飽<br>炙燒豬牛便當</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "我家廚房";
      var l1 =L.marker([25.01587,121.54472]).bindPopup("<p>我家廚房<br>各式定食、自助餐</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "JJ's poke";
      var l1 =L.marker([25.01346,121.53428]).bindPopup("<p>JJ's poke<br>夏威夷沙拉飯</p>").addTo(map);
    }

  }

  if (a == 1000 & b == 3){
    r = getRandom(1,10);
    if (r == 1){
      document.getElementById("math").innerHTML = "小福 allpass食堂";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 allpass食堂<br>各式定食</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "小福 文湯武將";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 文湯武將<br>滷味</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "小福 摩斯漢堡";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 摩斯漢堡<br>速食漢堡</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小福 強尼健康食堂";
      var l1 = L.marker([25.01860,121.53733]).bindPopup("<p>小福 強尼健康食堂<br>健身餐點</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "小福 比司多早午餐";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 比司多早午餐<br>各式早午餐</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "小福 懶得出門義麵坊";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 懶得出門意麵坊<br>義式美食</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第三餐廳";
      var l1 =L.marker([25.01207,121.54099]).bindPopup("<p>台灣科技大學學生餐廳第三餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "台灣科技大學學生餐廳第一餐廳";
      var l1 =L.marker([25.01381,121.54274]).bindPopup("<p>台灣科技大學學生餐廳第一餐廳<br>素食、自助餐、速食應有盡有</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "小木屋鬆餅";
      var l1 =L.marker([25.01552,121.53761]).bindPopup("<p>小木屋鬆餅<br>甜、鹹鬆餅與飲料</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "卓越聯合中心";
      var l1 =L.marker([25.01453,121.53795]).bindPopup("<p>卓越聯合中心<br>自助餐、麵點、速食、便利商店應有盡有</p>").addTo(map);
    }
  }

  if (a == 1000 & b == 4){
    r = getRandom(1,10);
    if (r == 1){
      document.getElementById("math").innerHTML = "小福 allpass食堂";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 allpass食堂<br>各式定食</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "小福 文湯武將";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 文湯武將<br>滷味</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "小福 強尼健康食堂";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 強尼健康食堂<br>健身餐點</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "小福 比司多早午餐";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 比司多早午餐<br>各式早午餐</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "小福 懶得出門義麵坊";
      var l1 =L.marker([25.01860,121.53733]).bindPopup("<p>小福 懶得出門意麵坊<br>義式美食</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "小木屋鬆餅";
      var l1 =L.marker([25.01552,121.53761]).bindPopup("<p>小木屋鬆餅<br>甜、鹹鬆餅與飲料</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "卓越聯合中心";
      var l1 =L.marker([25.01453,121.53795]).bindPopup("<p>卓越聯合中心<br>自助餐、麵點、速食、便利商店應有盡有</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "小姐姐麻辣燙";
      var l1 =L.marker([25.02413,121.54282]).bindPopup("<p>小姐姐麻辣燙<br>各式滷味、麻辣燙</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "麵工坊義大利麵";
      var l1 =L.marker([25.02447,121.54283]).bindPopup("<p>麵工坊義大利麵<br>義大利麵、飯</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "裸湯拉麵，雞白湯";
      var l1 =L.marker([25.02473,121.54281]).bindPopup("<p>裸湯拉麵，雞白湯<br>日式拉麵</p>").addTo(map);
    }
  }

  if (a == 2000 & b == 1){
    r = getRandom(1,17)
    if (r == 1){
      document.getElementById("math").innerHTML = "水源市場 大水源";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 大水源<br>各式便當</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "水源市場 狠臺";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 狠臺<br>各式炒飯、麵</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "水源市場 竹之丼";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 竹之丼<br>各式日式定食便當</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "水源市場 柯記";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 柯記<br>各式炒飯、麵、便當</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "泉記";
      var l1 =L.marker([25.01488,121.53282]).bindPopup("<p>泉記<br>各式港式炒燴</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "水源夜市";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源夜市<br>各式小吃</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "大盛豬排";
      var l1 =L.marker([25.01449,121.53378]).bindPopup("<p>大盛豬排<br>日式炸豬排定食</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "韓天閣";
      var l1 =L.marker([25.01424,121.53408]).bindPopup("<p>韓天閣<br>各式日式韓式料理</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "Miss Energy";
      var l1 =L.marker([25.01476,121.53370]).bindPopup("<p>Miss Energy<br>減醣健康便當</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "藍家卦包";
      var l1 =L.marker([25.01568,121.53258]).bindPopup("<p>藍家卦包<br>各式台式小吃</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "大李水餃";
      var l1 =L.marker([25.02205,121.54132]).bindPopup("<p>大李水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 12){
      document.getElementById("math").innerHTML = "李記水餃";
      var l1 =L.marker([25.02210,121.54277]).bindPopup("<p>李記水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 13){
      document.getElementById("math").innerHTML = "淺草日式飯糰";
      var l1 =L.marker([25.02205,121.54201]).bindPopup("<p>淺草日式飯糰<br>飯糰、味增湯</p>").addTo(map);
    }
    if (r == 14){
      document.getElementById("math").innerHTML = "梧貳";
      var l1 =L.marker([25.02186,121.54276]).bindPopup("<p>梧貳<br>咖哩、蛋包飯</p>").addTo(map);
    }
    if (r == 15){
      document.getElementById("math").innerHTML = "I'm pasta";
      var l1 =L.marker([25.02249,121.54277]).bindPopup("<p>I'm pasta<br>義式料理</p>").addTo(map);
    }
    if (r == 16){
      document.getElementById("math").innerHTML = "巷仔口米粉湯";
      var l1 =L.marker([25.02262,121.54278]).bindPopup("<p>巷仔口米粉湯<br>米粉湯、麵食、小吃</p>").addTo(map);
    }
    if (r == 17){
      document.getElementById("math").innerHTML = "馬祖麵館";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>馬祖麵館<br>炒飯、麵點</p>").addTo(map);
    }
  }

  if (a == 2000 & b == 2){
    r = getRandom(1,16);
    if (r == 1){
      document.getElementById("math").innerHTML = "阿英滷肉飯";
      var l1 =L.marker([25.01967,121.53223]).bindPopup("<p>阿英滷肉飯<br>滷肉飯以及小菜</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "清化河粉";
      var l1 =L.marker([25.01977,121.53222]).bindPopup("<p>清化河粉<br>越式河粉及美食</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "唐老鴨小火鍋";
      var l1 =L.marker([25.01953,121.53337]).bindPopup("<p>唐老鴨小火鍋<br>鍋物</p>").addTo(map);
    }  
    if (r == 4){
      document.getElementById("math").innerHTML = "柒食貳";
      var l1 =L.marker([25.01975,121.53280]).bindPopup("<p>柒食貳<br>各式簡餐</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "pasta two go";
      var l1 =L.marker([25.01936,121.53362]).bindPopup("<p>pasta to go<br>義大利麵</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "麥當勞 新生店";
      var l1 =L.marker([25.01814,121.53334]).bindPopup("<p>麥當勞(新生店)<br>速食</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "阿里港";
      var l1 =L.marker([25.01828,121.53168]).bindPopup("<p>阿里港<br>各式傳統美食</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "肯德基";
      var l1 = L.marker([25.01717,121.53315]).bindPopup("<p>肯德基<br>速食</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "Sukiya";
      var l1 =L.marker([25.01736,121.53196]).bindPopup("<p>Sukiya<br>日式便當速食</p>").addTo(map);
    }
    if (r == 10){
      document.getElementById("math").innerHTML = "大李水餃";
      var l1 =L.marker([25.02205,121.54132]).bindPopup("<p>大李水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "李記水餃";
      var l1 =L.marker([25.02210,121.54277]).bindPopup("<p>李記水餃<br>麵點、水餃</p>").addTo(map);
    }
    if (r == 12){
      document.getElementById("math").innerHTML = "淺草日式飯糰";
      var l1 = L.marker([25.02205,121.54201]).bindPopup("<p>淺草日式飯糰<br>飯糰、味增湯</p>").addTo(map);
    }
    if (r == 13){
      document.getElementById("math").innerHTML = "梧貳";
      var l1 =L.marker([25.02186,121.54276]).bindPopup("<p>梧貳<br>咖哩、蛋包飯</p>").addTo(map);
    }
    if (r == 14){
      document.getElementById("math").innerHTML = "I'm pasta";
      var l1 =L.marker([25.02249,121.54277]).bindPopup("<p>I'm pasta<br>義式料理</p>").addTo(map);
    }
    if (r == 15){
      document.getElementById("math").innerHTML = "巷仔口米粉湯";
      var l1 =L.marker([25.02262,121.54278]).bindPopup("<p>巷仔口米粉湯<br>米粉湯、麵食、小吃</p>").addTo(map);
    }
    if (r == 16){
      document.getElementById("math").innerHTML = "馬祖麵館";
      var l1 =L.marker([25.01526,121.53476]).bindPopup("<p>馬祖麵館<br>炒飯、麵點</p>").addTo(map);
    }
  }
  

  if (a == 2000 & b == 3){
    r = getRandom(1,11)
    if (r == 1){
      document.getElementById("math").innerHTML = "水源市場 大水源";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 大水源<br>各式便當</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "水源市場 狠臺";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 狠臺<br>各式炒飯、麵</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "水源市場 竹之丼";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 竹之丼<br>各式日式定食便當</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "水源市場 柯記";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 柯記<br>各式炒飯、麵、便當</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "泉記";
      var l1 =L.marker([25.01488,121.53282]).bindPopup("<p>泉記<br>各式港式炒燴</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "水源夜市";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源夜市<br>各式小吃</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "阿英滷肉飯";
      var l1 =L.marker([25.01967,121.53223]).bindPopup("<p>阿英滷肉飯<br>滷肉飯以及小菜</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "清化河粉";
      var l1 =L.marker([25.01977,121.53222]).bindPopup("<p>清化河粉<br>越式河粉及美食</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "唐老鴨小火鍋";
      var l1 =L.marker([25.01953,121.53337]).bindPopup("<p>唐老鴨小火鍋<br>鍋物</p>").addTo(map);
    }  
    if (r == 10){
      document.getElementById("math").innerHTML = "柒食貳";
      var l1 =L.marker([25.01975,121.53280]).bindPopup("<p>柒食貳<br>各式簡餐</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "pasta two go";
      var l1 =L.marker([25.01936,121.53362]).bindPopup("<p>pasta to go<br>義大利麵</p>").addTo(map);
    }
  }


  if (a == 2000 & b == 4){
    r = getRandom(1,10)
    if (r == 1){
      document.getElementById("math").innerHTML = "水源市場 大水源";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 大水源<br>各式便當</p>").addTo(map);
    }
    if (r == 2){
      document.getElementById("math").innerHTML = "水源市場 狠臺";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 狠臺<br>各式炒飯、麵</p>").addTo(map);
    }
    if (r == 3){
      document.getElementById("math").innerHTML = "水源市場 竹之丼";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 竹之丼<br>各式日式定食便當</p>").addTo(map);
    }
    if (r == 4){
      document.getElementById("math").innerHTML = "水源市場 柯記";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源市場 柯記<br>各式炒飯、麵、便當</p>").addTo(map);
    }
    if (r == 5){
      document.getElementById("math").innerHTML = "泉記";
      var l1 =L.marker([25.01488,121.53282]).bindPopup("<p>泉記<br>各式港式炒燴</p>").addTo(map);
    }
    if (r == 6){
      document.getElementById("math").innerHTML = "水源夜市";
      var l1 =L.marker([25.01363,121.53509]).bindPopup("<p>水源夜市<br>各式小吃</p>").addTo(map);
    }
    if (r == 7){
      document.getElementById("math").innerHTML = "阿英滷肉飯";
      var l1 =L.marker([25.01967,121.53223]).bindPopup("<p>阿英滷肉飯<br>滷肉飯以及小菜</p>").addTo(map);
    }
    if (r == 8){
      document.getElementById("math").innerHTML = "清化河粉";
      var l1 =L.marker([25.01977,121.53222]).bindPopup("<p>清化河粉<br>越式河粉及美食</p>").addTo(map);
    }
    if (r == 9){
      document.getElementById("math").innerHTML = "唐老鴨小火鍋";
      var l1 =L.marker([25.01953,121.53337]).bindPopup("<p>唐老鴨小火鍋<br>鍋物</p>").addTo(map);
    }  
    if (r == 10){
      document.getElementById("math").innerHTML = "柒食貳";
      var l1 =L.marker([25.01975,121.53280]).bindPopup("<p>柒食貳<br>各式簡餐</p>").addTo(map);
    }
    if (r == 11){
      document.getElementById("math").innerHTML = "pasta two go";
      var l1 =L.marker([25.01936,121.53362]).bindPopup("<p>pasta to go<br>義大利麵</p>").addTo(map);
    }
  } 
};

$("#re").click(function () {
  $("#math").empty();
});

