//科別
$("#division1").change(function(){
    switch (parseInt($(this).val())){
        default:
        case 0:
        $("#division2").addClass('no-select');
        $("#division2 option").remove();
        var array = [ "不分科" ];
        $.each(array, function(i, val) {
          $("#division2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 1:
        $("#division2").removeClass('no-select');
        $("#division2 option").remove();
        var array = [ "家醫", "小兒", "婦產", "牙科", "眼科", "腸胃", "神經", "精神", "耳鼻喉", "骨科復健" ];
        $.each(array, function(i, val) {
          $("#division2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 2:
        $("#division2").removeClass('no-select');
        $("#division2 option").remove();
        var array = [ "神經", "整型", "骨科", "胸腔", "直腸", "小兒", "口腔顏面" ];
        $.each(array, function(i, val) {
          $("#division2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 3:
        $("#division2").removeClass('no-select');
        $("#division2 option").remove();
        var array = [ "一般內科", "中醫婦科", "中醫兒科", "骨傷科", "針灸" ];
        $.each(array, function(i, val) {
          $("#division2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
    }
});

//區域
$("#area1").change(function(){
    switch (parseInt($(this).val())){
        default:
        case 0:
        $("#area2").addClass('no-select');
        $("#area2 option").remove();
        var array = [ "不分區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 1:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 2:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 3:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "八里區", "淡水區", "三芝區", "石門區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 4:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "竹圍區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 5:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "東區", "北區", "香山區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 6:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "穹林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 7:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "竹南鎮", "頭份市", "三灣鄉", "南庄鄉", "獅潭鄉", "後龍鎮", "通霄鎮", "苑裡鎮", "苗栗市", "造橋鄉", "頭屋鄉", "公館鄉", "大湖鄉", "泰安鄉", "銅鑼鄉", "三義鄉", "西湖鄉", "卓蘭鎮" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 8:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 9:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "彰化市", "芬園鄉", "花壇鄉", "秀水鄉", "鹿港鎮", "福興鄉", "線西鄉", "和美鎮", "伸港鄉", "員林市", "社頭鄉", "永靖鄉", "埔心鄉", "溪湖鎮", "大村鄉", "埔鹽鄉", "田中鎮", "北斗鎮", "田尾鄉", "埤頭鄉", "溪洲鄉", "竹塘鄉", "二林鎮", "大城鄉", "芳苑鄉", "二水鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 10:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "南投市", "中寮鄉", "草屯鎮", "國姓鄉", "埔里鎮", "仁愛鄉", "名間鄉", "集集鎮", "水里鄉", "魚池鄉", "信義鄉", "竹山鎮", "鹿谷鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 11:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "斗南鎮", "大埤鄉", "虎尾鎮", "土庫鎮", "褒忠鄉", "東勢鄉", "臺西鄉", "崙背鄉", "麥寮鄉", "斗六市", "林內鄉", "古坑鄉", "莿桐鄉", "西螺鎮", "二崙鄉", "北港鎮", "水林鄉", "口湖鄉", "四湖鄉", "元長鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 12:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "東區", "西區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 13:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "番路鄉", "梅山鄉", "竹崎鄉", "阿里山鄉", "中埔鄉", "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市", "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮", "溪口鄉", "義竹鄉", "布袋鎮" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 14:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 15:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "新興區", "前金區", "苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","東沙群島","南沙群島","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","衫林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 16:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "屏東市", "山地門鄉", "霧臺鄉", "瑪家鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "長治鄉", "麟洛鄉", "竹田鄉", "內埔鄉", "萬丹鄉", "潮州鎮", "泰武鄉", "來義鄉", "萬巒鄉", "崁頂鄉", "新埤鄉", "南州鄉", "林邊鄉", "東港鎮", "琉球鄉", "佳冬鄉", "新園鄉", "枋寮鄉", "枋山鄉", "春日鄉", "獅子鄉", "車城鄉", "牡丹鄉", "恆春鎮", "滿州鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 17:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "台東市", "蘭嶼鄉", "延平鄉", "卑南鄉", "鹿野鄉", "關山鎮", "海端鄉", "池上鄉", "東河鄉", "成功鎮", "長濱鄉", "太麻里鄉", "金峰鄉", "大武鄉", "達仁鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 18:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "花蓮市", "新城鄉", "秀林鄉", "吉安鄉", "壽豐鄉", "鳳林鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "玉里鎮", "卓溪鄉", "富里鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 19:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉", "釣魚台" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 20:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 21:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
        case 22:
        $("#area2").removeClass('no-select');
        $("#area2 option").remove();
        var array = [ "南竿鄉", "北竿鄉", "莒光鄉", "東引鄉" ];
        $.each(array, function(i, val) {
          $("#area2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });
        break;
    }
});

//Search Btn
(function( $ ) {
    $.fn.startLoading = function() {
        return this.each(function() {
            $(this).attr("disabled", true).addClass("disabled");

            $icon = $(this).find('i');
            $icon.data('loader-icons', $icon.attr('class'))
            $icon.removeAttr('class');
            $icon.addClass("spinner-border");
            //$icon.addClass("fa").addClass("fa-spin").addClass("fa-spinner");
        });
    }
    $.fn.stopLoading = function() {
        return this.each(function() {
            $(this).removeAttr("disabled").removeClass("disabled");
            
            $icon = $(this).find('i');
            $icon.removeAttr('class');
            $icon.attr('class', $icon.data('loader-icons'));
        });
    } 
}( jQuery ));

$("#button-keyword").on("click", function(ev) {
    ev.preventDefault();
      $(this).startLoading();
      setTimeout(function(){
        $("#button-keyword").stopLoading(); 
      }, 3000);
});