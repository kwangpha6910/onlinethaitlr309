// ควบคุมการทำงานของ Hamburger Menu สำหรับ Responsive Design บนมือถือ
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // สลับคลาส active เพื่อแสดง/ซ่อนเมนู
    navLinks.classList.toggle("active");
    
    // ทำ Animation ให้กับปุ่ม Hamburger (เปลี่ยนเป็นรูป X)
    hamburger.classList.toggle("toggle");
});

// ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์ (สำหรับหน้าจอเล็ก)
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("toggle");
    });
});