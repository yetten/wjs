/**
 * Created by Administrator on 2017/4/16.
 */
$(function () {
    /*
      1. 切换背景图片和添加新的img标签
    */
    $(window).on('resize', changeImg);
    function changeImg() {
        // 1.0 获取屏幕的宽度
        var screenW = $(window).width();

        // 1.1 设置临界值  true false
         var isShowBigImage = screenW > 790;

        // 1.3 获取所有的item
        var $itemEles = $('#wjs_carousel .item');

        // 1.4 遍历
        $itemEles.each(function (index, item) {
            var $item = $(item);
            // 1.4.1 获取attr
            var attr = isShowBigImage ? $item.data('lg-img'): $item.data('sm-img');
            // console.log(attr);
            var url = 'url(' + attr + ')';
            console.log(url);
            // 1.4.2 设置背景
            $item.css({
                backgroundImage:url
            });

            // 1.4.3 插入img标签
            if(!isShowBigImage){ // 显示小图的尺寸
                var $img = '<img src="'+ attr +'">';
                // 注意:先清除后插入
                $item.empty().append($img);
            }else {
                $item.empty();
            }
        });
    }


    /*
     2. 是否显示滚动条
     */
     $(window).on('resize', changeUlWidth);
    function changeUlWidth() {
        // 2.1 获取ul
        var $ul = $('#wjs_product .nav');
        
        // 2.2 要获取所有的li标签
         // $(selector, context)
        var $allLis = $('li[role="presentation"]', $ul);
        // alert($allLis.length);
        
        // 2.3 遍历
        var totalLiLength = 0;
        $allLis.each(function (index, item) {
            // 2.3.1 求出总宽度
            totalLiLength += $(item).width();
        });
        // alert(totalLiLength);

        // 2.4 获取父标签的宽度
        var parentEleW = $ul.parent().width();
        // console.log(parentEleW);

        // 2.5 判断
        if(totalLiLength >= parentEleW){ // 给ul设置宽度
           $ul.css({
               width: totalLiLength
           });
        }else {  // 清除ul的宽度
           $ul.removeAttr('style');
        }
    }
    $(window).trigger('resize');

    /*
      3. 工具提示
    */
    $('[data-toggle="tooltip"]').tooltip();
});
