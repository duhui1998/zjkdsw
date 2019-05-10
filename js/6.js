
window.onload=function(){
    var oDiv=document.getElementById('main');
    //获取一组元素
    var oLi=oDiv.getElementsByTagName('li');
    var oTxt=oDiv.getElementsByTagName('div')[0];
    var arr=[
    '1月汉堡',
    '2月鸡米花',
    '3月可乐',
    '这是小薯条',
    '5月有优惠',
    '6月有特价',
    '7月送礼品',
    '8月送小鸡腿',
    '9月满50赠奶茶',
    '10月满100抽奖',
    '11月买一赠一（部分）',
    '12月打8折'
    ];
    //获得每一个li
    for(var i=0;i<oLi.length;i++){

        oLi[i].index=i;
        oLi[i].onmouseover=function(){
            //给每一个li设置样式为空
            for(var i=0;i<oLi.length;i++)
            {
               oLi[i].className=''; 
            }
            //当前li样式为.active
            this.className='active';
            //给div添加Html
            oTxt.innerHTML='<h2>'+(this.index+1)+'月</h2><p>'+arr[this.index]+'</p>';
        };
    }
    };