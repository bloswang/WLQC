/**
 * Created by zhangxin on 2018/5/16.
 */
(function (factory) {
    if(typeof define === 'function' && define.amd){
        define('regionCity', [], factory);
    }else{
        factory()
    }
})(function () {
    var regionCity = {"213000":{"213100":"西宁市"},"104000":{"104300":"嘉兴市","104400":"湖州市","104100":"杭州市","104200":"温州市","104700":"衢州市","104800":"舟山市","104500":"绍兴市","104600":"金华市","104900":"台州市"},"106000":{"106200":"三亚市","106100":"海口市","106300":"五指山市"},"102000":{"102200":"莆田市","102100":"福州市","102400":"泉州市","102300":"三明市","102600":"南平市","102500":"漳州市","102700":"龙岩市"},"209000":{"210000":"漯河市","209200":"开封市","209100":"郑州市","209400":"平顶山市","209300":"洛阳市","209600":"鹤壁市","209500":"安阳市","209800":"焦作市","209700":"新乡市","209900":"濮阳市","210400":"信阳市","210300":"商丘市","210200":"南阳市","210100":"三门峡市"},"211000":{"211100":"西安市","211500":"渭南市","211400":"咸阳市","211300":"宝鸡市","211200":"铜川市","211900":"商洛市","211800":"榆林市","211700":"汉中市","211600":"延安市"},"110000":{"110400":"兴仁县","110200":"六盘水市","110300":"遵义市","110100":"贵阳市"},"217000":{"217600":"淮北市","217700":"铜陵市","217400":"淮南市","218600":"宣城市","217500":"马鞍山市","218500":"池州市","217200":"芜湖市","218400":"六安市","217300":"蚌埠市","218300":"巢湖市","218200":"宿州市","217100":"合肥市","218100":"阜阳市","218000":"滁州市","217800":"安庆市","217900":"黄山市"},"100000":{"105000":"广东省","104000":"浙江省","106000":"海南省","107000":"广西壮族自治区","102000":"福建省","103000":"江苏省","101000":"上海市","110000":"贵州省","109000":"江西省","108000":"湖南省","114000":"云南省","111000":"重庆市","112000":"四川省","113000":"西藏自治区"},"207000":{"207900":"沧州市","208000":"廊坊市","208100":"衡水市","207100":"石家庄市","207200":"唐山市","207300":"秦皇岛市","207400":"邯郸市","207500":"邢台市","207600":"保定市","207700":"张家口市","207800":"承德市"},"215000":{"215300":"巴音郭楞蒙古自治州","215200":"克拉玛依市","215500":"石河子市","215400":"库尔勒市","215100":"乌鲁木齐市","215700":"图木舒克市","215600":"阿拉尔市","215800":"五家渠市"},"108000":{"108500":"邵阳市","108600":"岳阳市","108700":"常德市","108800":"张家界市","108100":"长沙市","109200":"怀化市","108200":"株洲市","109300":"娄底市","108300":"湘潭市","108400":"衡阳市","109000":"郴州市","109100":"永州市","108900":"益阳市"},"daqu":{"100000":"南区","200000":"北区"},"201000":{"201200":"齐齐哈尔市","202000":"牡丹江市","201100":"哈尔滨市","202100":"黑河市","201800":"佳木斯市","201700":"伊春市","201900":"七台河市","201400":"鹤岗市","201300":"鸡西市","201600":"大庆市","201500":"双鸭山市"},"203000":{"203900":"辽阳市","203700":"营口市","203800":"阜新市","203500":"丹东市","203600":"锦州市","203300":"抚顺市","203400":"本溪市","204400":"葫芦岛市","203100":"沈阳市","204300":"朝阳市","203200":"鞍山市","204200":"调兵山市","204100":"铁岭市","204000":"盘锦市"},"205000":"北京市","111000":"重庆市","113000":{"113200":"日喀则市","113100":"拉萨市"},"105000":{"106200":"汕尾市","105100":"广州市","106100":"梅州市","106000":"惠州市","107000":"云浮市","105400":"汕头市","106600":"东莞市","105500":"佛山市","106500":"清远市","105200":"韶关市","106400":"阳江市","105300":"珠海市","106300":"河源市","105800":"茂名市","105900":"肇庆市","106900":"揭阳市","105600":"江门市","106800":"潮州市","105700":"湛江市","106700":"中山市"},"212000":{"212100":"兰州市","212200":"嘉峪关市","212700":"定西市","212800":"陇南市","212300":"金昌市","212400":"白银市","212500":"天水市","212600":"庆阳市"},"107000":{"107300":"桂林市","107200":"柳州市","107100":"南宁市","107700":"钦州市","108100":"崇左市","107600":"防城港市","107500":"北海市","107400":"梧州市","107900":"玉林市","107800":"贵港市","108000":"来宾市"},"210000":{"211100":"莱芜市","211000":"日照市","210900":"威海市","210400":"东营市","210300":"枣庄市","211400":"聊城市","210200":"淄博市","211300":"德州市","210100":"济南市","211200":"临沂市","210800":"泰安市","210700":"济宁市","210600":"潍坊市","210500":"烟台市"},"103000":{"104000":"镇江市","103100":"南京市","103300":"徐州市","104100":"泰州市","103200":"无锡市","104200":"宿迁市","103500":"苏州市","103400":"常州市","103700":"连云港市","103600":"南通市","103900":"扬州市","103800":"盐城市"},"101000":"上海市","208000":{"208100":"太原市","208200":"大同市","208300":"阳泉市","208400":"长治市","208500":"晋城市","208600":"朔州市","208700":"晋中市","208800":"吕梁市"},"214000":{"214200":"石嘴山市","214100":"银川市","214400":"固原市","214300":"吴忠市","214500":"中卫市"},"216000":{"216500":"宜都市","216600":"襄樊市","216300":"十堰市","216400":"宜昌市","216100":"武汉市","217200":"咸宁市","216200":"黄石市","217000":"荆州市","217100":"黄冈市","216900":"孝感市","216700":"鄂州市","216800":"荆门市"},"109000":{"109600":"鹰潭市","109700":"赣州市","109800":"抚州市","109200":"景德镇市","109300":"萍乡市","109400":"九江市","109500":"新余市","109100":"南昌市"},"202000":{"202200":"吉林市","202300":"四平市","202100":"长春市","202800":"白城市","202600":"白山市","202700":"松原市","202400":"辽源市","202500":"通化市"},"200000":{"213000":"青海省","212000":"甘肃省","209000":"河南省","210000":"山东省","211000":"陕西省","208000":"山西省","214000":"宁夏回族自治区","217000":"安徽省","207000":"河北省","215000":"新疆维吾尔自治区","216000":"湖北省","201000":"黑龙江省","202000":"吉林省","203000":"辽宁省","204000":"内蒙古自治区","205000":"北京市","206000":"天津市"},"114000":{"114100":"昆明市","114200":"曲靖市","114300":"玉溪市","114400":"丽江市","114500":"临沧市"},"204000":{"204500":"通辽市","204400":"赤峰市","204300":"乌海市","204200":"包头市","204100":"呼和浩特市","205200":"二连浩特市","205100":"锡林郭勒盟","205000":"阿尔山市","204900":"乌兰察布市","204800":"巴彦淖尔市","204700":"呼伦贝尔市","204600":"鄂尔多斯市"},"206000":"天津市","112000":{"112900":"内江市","112800":"遂宁市","112700":"广元市","112600":"绵阳市","113700":"资阳市","112500":"德阳市","113600":"雅安市","112400":"泸州市","113500":"达州市","112300":"攀枝花市","113400":"广安市","112200":"自贡市","113300":"宜宾市","112100":"成都市","113200":"眉山市","113100":"南充市","113000":"乐山市"}};
    if(typeof window !== 'undefined') window.regionCity = regionCity;
    return regionCity;
});