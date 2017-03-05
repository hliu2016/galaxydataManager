$(function () {
    $(".disease-add-type-btn").click(function (event) {
        event.preventDefault();
        var url = "/diseasetypeadd",
            dataArray = {
            diseaseType: $("#diseasetype").val()
        };
        $.post(url, dataArray,function (rs) {
            if(rs.stateCode == 200) {
                var html = '<li><input type="checkbox" value="0"/><span>'+rs.type+'</span></li>';
                $(".disease-type ul").append(html);
                alert('添加成功！')
            }else{
                alert('操作失败，稍后再试！');
            }
        })
    })
})