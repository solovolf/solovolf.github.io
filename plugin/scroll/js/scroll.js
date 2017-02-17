/*
两个参数
一个是需要下拉刷新的元素的id
另一个是下拉刷新的间隔
下拉刷新的间隔可以传正负数
负数代表距离拉到底部还剩多少px时刷新
正数代表距离拉到超出底部多少px时刷新
第二个参数不传默认为0
其他单数根据需求拓展

注意：scroll难写的原因是本身需要与不同级别的元素混合在一起
    所以使用时如有几点需要注意
    1：最好滚动元素是body的直系子元素
    2：如果不是，请给scroll的父元素设置固定高度再overflow:auto
*/

(function(){
    window.ScrollRefresh=function(eleId,arg){
        try{
            this.ele=document.getElementById(eleId)
            if(this.ele==null){
                throw '找不到元素'
            }
        }catch(e){
            console.error(e)
        }
        // this.scrollDisabled=(arg&&arg.scrollDisabled)?arg.scrollDisabled:false
        this.scrollDisabled=false
        this.scrollDistance=(arg&&arg.scrollDistance)?arg.scrollDistance:0
        //是否滑动到底部
        this.isBottom=false
        //手指点击时的Y坐标点
        this.yPoint=0
        //父元素的显示高度
        this.parentNodeHeight=0
        this.parentNode=this.ele.parentNode
        if(this.parentNode.tagName==='BODY'){
            this.parentNodeHeight=document.documentElement.clientHeight
        }else{
            this.parentNodeHeight=this.parentNode.clientHeight
        }
    }

    ScrollRefresh.prototype.pullUpEvent=function(callBack){
        var _this=this

        this.ele.addEventListener('touchstart',function(eve){
            // if(_this.scrollDisabled)
            //     return
            // _this.scrollDisabled=true
            // var ele=_this.ele
            // _this.yPoint=eve.touches[0].pageY
            eve.preventDefault();
        })

        this.ele.addEventListener('touchend',touchendFunc)
        //适配部分安卓机型舞法匹配touchend问题
        this.ele.addEventListener('touchcancel',touchendFunc)
        function touchendFunc(eve){
            eve.stopPropagation()
            if(_this.scrollDisabled)
                return

            var ele=_this.ele
            // var moveYPoint=eve.touches[0].pageY
            // document.getElementById('pageY').innerHTML=_this.ele.scrollTop

            //判断是否下拉到底
            var scrollHeight=_this.ele.scrollHeight
            var scrollTop=_this.parentNode.scrollTop
            var offsetTop=_this.ele.offsetTop

            // document.getElementById('msg').innerHTML=scrollHeight+offsetTop-scrollTop;

            if(scrollHeight+offsetTop-scrollTop<=_this.parentNodeHeight-_this.scrollDistance){
                if(typeof callBack === 'function'){
                    callBack(_this)
                }
                _this.scrollDisabled=true
            }
        }
    }
})()