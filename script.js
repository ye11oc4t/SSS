// script.js
document.addEventListener('DOMContentLoaded', function() {
    const securityButton = document.getElementById('securityButton');
    
    securityButton.addEventListener('click', function() {
        // 버튼을 클릭하면 "https://security.seoul.kr"로 현재 창에서 이동
        window.location.href = 'https://dreamhack.io/';
    });
});
