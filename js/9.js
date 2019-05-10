var provinceArr=['上海','江苏','河北'];
var cityArr=[['上海市'],
			['苏州市','南京市','扬州市'],
			['石家庄','秦皇岛','张家口']

];
var countryArr=[
				[['黄浦区','静安区','长宁区','浦东区']],
				[['虎丘区','吴中区','相城区','姑苏区','吴江区'],
				['玄武区','秦淮区','建交区','鼓楼区','浦口区'],
				['邗江区','广陵区','江都区']],
				[['长安区','桥西区','新华区','精进矿区'],
				['海港区','山海关区','北戴河区','抚宁区'],
				['强东区','桥西区','宣化区','下花园区']]

];
function createOption(obj,data){
	for(var i in data){
		var op=new Option(data[i],i);
		obj.options.add(op);
		}
	}
var province=document.getElementById('province');
createOption(province,provinceArr);
var city=document.getElementById('city');
province.onchange=function(){
	city.options.length=0;
	createOption(city,cityArr[province.value]);
	};
var country=document.getElementById('country')
city.onchange=function(){
	country.options.length=0;
	createOption(country,countryArr[province.value][city.value]);
	};
province.onchange=function(){
	city.options.length=0;
	createOption(city,cityArr[province.value]);
	if(province.value>=0){
		city.onchange();
		}else{country.options.length=0;}
	};
// JavaScript Document