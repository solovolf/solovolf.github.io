(function() {
    var showCategoryList = false
    var categoryWrap = document.querySelector('.category-wrap')
    var categoryContent = document.querySelector('.category-content')
    var contentEle = document.querySelector('.content')
    var headEle = document.querySelector('.head span')
    var searchWrap = document.querySelector('.search-wrap')
    var searchInput = document.querySelector('.search-wrap > input')

    function showOrHideCa() {
        if (!showCategoryList) {
            showCategoryList = true
            categoryWrap.classList.add('show')
        } else {
            showCategoryList = false
            categoryWrap.classList.remove('show')
        }
    }

    function hideCategoryWrap() {
        showCategoryList = false
        categoryWrap.classList.remove('show')
    }
    document.querySelector('.btn-category').addEventListener('click', function() {
        showOrHideCa()
    })

    categoryWrap.addEventListener('click', function(eve) {
        if (eve.target.className.indexOf('category-wrap') > -1) {
            hideCategoryWrap()
        }
    })

    var categoryListHtml = '<ul>'
    for (var i = 0; i < menuList.length; i++) {
        categoryListHtml += '<li data-src="' + menuList[i].type + '">' + menuList[i].name + '</li>'
    }
    categoryListHtml += '</ul>'
    categoryContent.innerHTML = categoryListHtml

    var contentHtml = ''

    var caliList = categoryContent.querySelectorAll('li')
    for (var i = 0; i < caliList.length; i++) {
        caliList[i].addEventListener('click', function(eve) {
            //点击后修改颜色
            var activeItem = categoryContent.querySelector('.active')
            if (activeItem) {
                activeItem.classList.remove('active')
            }
            eve.currentTarget.classList.add('active')
                //修改头部文字
            headEle.innerHTML = eve.currentTarget.innerHTML
                //生成页面内容
            contentHtml = ''
            var type = eve.currentTarget.dataset.src
            var articleArr = articleList[type]
            for (var i = 0; i < articleArr.length; i++) {
                contentHtml += '<a target="_blank" href="' + articleArr[i].url + '">' + articleArr[i].name + '</a><br>'
            }
            contentEle.innerHTML = contentHtml
            hideCategoryWrap()
        })
    }

    caliList[0].click()


    //查询交互
    document.querySelector('.btn-search').addEventListener('click', function() {
        if (searchWrap.classList.contains('show')) {
            searchWrap.classList.remove('show')
        } else {
            searchWrap.classList.add('show')
            searchInput.focus()
        }
    })

    searchWrap.onsubmit = function() {
        if(!searchInput.value){
            return
        }

        searchInput.blur()
        searchWrap.classList.remove('show')

        contentHtml = ''

        for (var iterator in articleList) {
            var item=articleList[iterator]
            for (var i = 0; i < item.length; i++) {
                if (item[i].name.indexOf(searchInput.value) > -1) {
                    contentHtml += '<a target="_blank" href="' + item[i].url + '">' + item[i].name + '</a><br>'
                }
            }
        }
        var regex=new RegExp(searchInput.value,'gi')
        contentHtml=contentHtml.replace(regex,'<span style="color:red;">'+searchInput.value+'</span>')
        contentEle.innerHTML = contentHtml
        headEle.innerHTML=searchInput.value
        searchInput.value=''

        return
    }
})()