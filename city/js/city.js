 
  	var jsonData = {
		"errorCode":0,
		"data":[
			{"cityId":2,"cityName":"北京"},
			{"cityId":20,"cityName":"上海"},
			{"cityId":39,"cityName":"广州"},
			{"cityId":52,"cityName":"深圳"},
			{"cityId":59,"cityName":"佛山"},
			{"cityId":66,"cityName":"天津"},
			{"cityId":84,"cityName":"南京"},
			{"cityId":97,"cityName":"杭州"},
			{"cityId":119,"cityName":"长沙"},
			{"cityId":130,"cityName":"海口"},
			{"cityId":135,"cityName":"三亚"},
			{"cityId":141,"cityName":"宁波市"},
			{"cityId":144,"cityName":"嘉兴"},
			{"cityId":145,"cityName":"湖州市"},
			{"cityId":146,"cityName":"绍兴"},
			{"cityId":147,"cityName":"金华市"},
			{"cityId":148,"cityName":"衢州市"},
			{"cityId":150,"cityName":"台州市"},
			{"cityId":162,"cityName":"南宁"},
			{"cityId":176,"cityName":"苏州"},
			{"cityId":203,"cityName":"郑州"},
			{"cityId":228,"cityName":"合肥"},
			{"cityId":239,"cityName":"济南"},
			{"cityId":250,"cityName":"青岛"},
			{"cityId":262,"cityName":"淄博"},
			{"cityId":395,"cityName":"湛江"},
			{"cityId":442,"cityName":"蚌埠市"},
			{"cityId":491,"cityName":"阜阳市"},
			{"cityId":506,"cityName":"六安市"},
			{"cityId":651,"cityName":"洛阳市"},
			{"cityId":707,"cityName":"焦作市"},
			{"cityId":725,"cityName":"许昌市"},
			{"cityId":908,"cityName":"柳州市"},
			{"cityId":961,"cityName":"贵港市"},
			{"cityId":1014,"cityName":"崇左市"},
			{"cityId":1074,"cityName":"常德市"},
			{"cityId":1139,"cityName":"湘西土家族苗族自治州"},
			{"cityId":1148,"cityName":"无锡市"},
			{"cityId":1157,"cityName":"徐州市"},
			{"cityId":1168,"cityName":"常州市"},
			{"cityId":1176,"cityName":"南通市"},
			{"cityId":1218,"cityName":"镇江市"},
			{"cityId":1225,"cityName":"泰州市"},
			{"cityId":1249,"cityName":"珠海市"},
			{"cityId":1253,"cityName":"汕头市"},
			{"cityId":1261,"cityName":"江门市"},
			{"cityId":1269,"cityName":"茂名市"},
			{"cityId":1275,"cityName":"肇庆市"},
			{"cityId":1284,"cityName":"惠州市"},
			{"cityId":1316,"cityName":"清远市"},
			{"cityId":1325,"cityName":"东莞市"},
			{"cityId":1357,"cityName":"中山市"},
			{"cityId":1400,"cityName":"呼和浩特市"},
			{"cityId":1551,"cityName":"石家庄市"},
			{"cityId":1574,"cityName":"唐山市"},
			{"cityId":1710,"cityName":"廊坊市"},
			{"cityId":2567,"cityName":"福州市"},
			{"cityId":2581,"cityName":"厦门市"},
			{"cityId":2607,"cityName":"泉州市"},
			{"cityId":2620,"cityName":"漳州市"},
			{"cityId":2651,"cityName":"宁德市"},
			{"cityId":2662,"cityName":"南昌市"},
			{"cityId":2683,"cityName":"九江市"},
			{"cityId":2723,"cityName":"吉安市"},
			{"cityId":2748,"cityName":"抚州市"},
			{"cityId":3108,"cityName":"武汉市"},
			{"cityId":3122,"cityName":"黄石市"},
			{"cityId":3129,"cityName":"十堰市"},
			{"cityId":3138,"cityName":"宜昌市"},
			{"cityId":3152,"cityName":"襄阳市"},
			{"cityId":3172,"cityName":"孝感市"},
			{"cityId":3766,"cityName":"成都市"},
			{"cityId":4421,"cityName":"兰州市"},
			{"cityId":4577,"cityName":"银川市"}
		]
	};
	var indexData = jsonData.data;
			/**
			 * 排序
			 * @param {Object} arr
			 * @param {Object} dataLeven
			 */
			function chineseLetter(arr,dataLeven) {
				var letter = 'abcdefghjklmnopqrstwxyz'.split('');
				var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
				/* 获取数组元素比较的值 */
			    function getValue (option) {
			    	if (!dataLeven) return option
			      	var data = option
			      	dataLeven.split('.').filter(function (item) {
			        	data = data[item]
			      	})
			      	return data + ''
			    };
			    /* 进行排序 */
			    arr.sort(function (item1, item2) {
			      	return getValue(item1).localeCompare(getValue(item2), 'zh-Hans-CN')
			    });
			    /* 判断需要排序的字符串是否含有中文字符 */
			   	if (/[\u4e00-\u9fff]/.test(getValue(arr[0])) && typeof arr[0] === 'object') pySegSort(0, 0)
			   	/* 给省列表中添加首字符 */
			   	function pySegSort (letterIndex, zhIndex) {
			   		var first = true; // 首次是否加 字母标识
			   		for (var i = zhIndex; i < arr.length; i++) {
			   			var item = arr[i];
			   			//是否有值 && 当前值大于等于本次字母的最小值 && (最后一位 || 当前值小于下次字母的最小值)
			   			var state = zh[letterIndex] && getValue(item).localeCompare(zh[letterIndex], 'zh') >= 0 && (letterIndex === letter.length - 1 || getValue(item).localeCompare(zh[letterIndex+1], 'zh') < 0);
			   			if (state) { // 满足条件，同一个首字母下的：例如 A 下的所有省份
			   				if (first) { //是否是第一次出现
			   					item.letter = letter[letterIndex].toUpperCase();
            					first = true;
            					//first = false;
			   				}else {
            					item.letter = ''
          					}
			   			} else { //递归调用 函数，进行下次字母下的排列
			   				letterIndex++
          					if (letterIndex < letter.length) {
            					pySegSort(letterIndex, i)
            					break
          					}
			   			}
			   		}
			   	}
			}
			var map = {},
    			dest = [];
    		/**
    		 * 分组
    		 * @param {Object} arr
    		 */
			function groupData(arr) {
				for(var i = 0; i < arr.length; i++){
				    var ai = arr[i];
				    if(!map[ai.letter]){
				        dest.push({
				            letter: ai.letter,
				            data: [ai]
				        });
				        map[ai.letter] = ai;
				    }else{
				        for(var j = 0; j < dest.length; j++){
				            var dj = dest[j];
				            if(dj.letter == ai.letter){
				                dj.data.push(ai);
				                break;
				            }
				        }
				    }
				}
			}
  var hotCity = [];
  
  function getHotCityData() {
  	for (var i = 0; i < 4; i++) {
  		var cityData = jsonData.data[i];
  		hotCity.push(cityData);
  	}
  	console.log("热门城市:"+hotCity);
  }
  $(function () {
  
      init();
  		
      // 选择城市
      $('body').on('click', '.city-list p', function () {
          var data = $(this).attr('value');
          console.log("选中的城市:"+data);
          //saveHistory(data);
      });
  
      $('.hot.hotCity').on('click', 'div', function () {
          var data = $(this).attr('value');
          console.log("选中的热门城市:"+data);
          //saveHistory(data);
      });
  
  })
  
  function init() {
  	getHotCityData();
      $('.city').html('');
      var hotHtml = '';
      hotHtml += '<div class="tips now" id="当前1">';
      hotHtml += '<i class="location-png"></i>'
      hotHtml += '<span>选择城市</span>'
      hotHtml += '</div>'
      hotHtml += '<div class="tips" id="当前1">当前定位</div>';
      hotHtml += '<div class="hot hotCity">';
      hotHtml += '<div value="" >深圳</div>'
      hotHtml += '</div>';
      hotHtml += '<div class="tips" id="热门1">热门城市</div>';
      hotHtml += '<div class="hot hotCity">';
      $.each(hotCity, function (i, item) {
          hotHtml += '<div value='+item.cityId+' >' + item.cityName + '</div>'
      })
      hotHtml += '</div>';
      $('.city').append(hotHtml);
      chineseLetter(indexData,'cityName');
      groupData(indexData);
      var html = '';
      $.each(dest, function (i, item) {
          html += '<div class="city-list"><span class="city-letter" id="' + item.letter + '">' + item.letter + '</span>';
          $.each(item.data, function (j, data) {
              html += '<p value='+data.cityId+'>' + data.cityName + '</p>';
          })
          html += '</div>';
      })
      $('.city').append(html);
  } 
  (function ($) {
  
      $('.letter').bind("touchstart touchmove", function (e) {
          var top = $(window).scrollTop();
          e.preventDefault();//阻止默认滚动
          var touch = e.touches[0];
          var ele = document.elementFromPoint(touch.pageX, touch.pageY - top);
  
          if (ele.tagName === 'A') {
              var s = $(ele).text();
              $(window).scrollTop($('#' + s + '1').offset().top)
              $("#showLetter span").html(s.substring(0, 1));
              $("#showLetter").show().delay(500).hide(0);
          }
      });
  
      $('.letter').bind("touchend", function (e) {
          $("#showLetter").hide(0);
      });
  
  })(Zepto); 
  