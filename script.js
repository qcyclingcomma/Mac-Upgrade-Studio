// 表單提交處理
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                device: document.getElementById('device').value,
                year: document.getElementById('year').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // 這裡可以添加表單提交的 AJAX 請求
            console.log('預約表單數據:', formData);
            
            // 顯示成功訊息
            alert('預約成功！我們將盡快與您聯絡。');
            bookingForm.reset();
        });
    }
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});