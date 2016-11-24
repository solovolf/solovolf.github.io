(function () {
    //判断ie
    if (!document.addEventListener) {
        alert('此网页不支持低版本ie，请使用最新的chrome浏览器！')
        return;
    }

    var instance = new Vue({
        el: '.container',
        data: function () {
            return {
                menuList: menuList,
                artList: articleList.article
            }
        },
        methods:{
            changeArtList:function(msg,event){
                document.querySelector('.select').className='';
                event.currentTarget.className='select';
                this.artList=articleList[msg];
            },
            openUrl:function(msg,event){
                console.log(event.currentTarget.getAttribute("data-url"));
                window.open(msg)
            }
        }
    })
})()