var x = document.getElementById("btdn")
x.onclick = function()
{
    var a = document.getElementById('tk').value
    var b = document.getElementById('mk').value
    if ((a == '') && (b == '')) alert('Vui lòng nhập thông tin')
    if ((a == 'admin') && (b == 'admin123')) 
    {
        alert('Đăng nhập thành công')
        document.location.href = '/html/trangchu.html'
    }
}
