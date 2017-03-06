$(function () {
    //disease add modal js
    $(".disease-add-type-btn").click(function (event) {
        event.preventDefault();
        var url = "/diseasetypeadd",
            dataArray = {
            diseaseType: $("#diseasetype").val()
        };
        $.post(url, dataArray,function (rs) {
            if(rs.stateCode == 200) {
                var html = '<li><input type="checkbox" value="0"/><span>'+rs.type+'</span></li>';
                $(".disease-type-ul ul").append(html);
                swal('添加成功！')
            }else{
                swal('操作失败，稍后再试！');
            }
        })
    })
    $('.localfile-upload-btn').on('click', function () {
        $('.local-file-upload-input').trigger('click');
    })
    $('.files-upload-btn').on('click', function(){
        $('.files-upload-form-btn').trigger('click');
    })
    $('#file-upload-form').on('submit', function (event) {
        event.preventDefault();
        $.ajax(this.action)
    })
})