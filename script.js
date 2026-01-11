// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgba(30, 60, 114, 0.95), rgba(42, 82, 152, 0.95))';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 视频演示播放功能
const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // 这里可以添加视频播放逻辑
        // 例如，替换为实际的视频播放器
        videoPlaceholder.innerHTML = '<div style="font-size: 2rem; color: white; opacity: 0.9;">视频播放中...</div>';
        
        // 模拟视频播放结束后恢复
        setTimeout(() => {
            videoPlaceholder.innerHTML = '<div class="video-icon">▶️</div><p>点击播放视频演示</p>';
        }, 3000);
    });
}

// 元素进入视口时的动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为需要动画的元素添加观察
const animatedElements = document.querySelectorAll('.feature-card, .team-card, .overview-description, .scenario-item, .interaction-description, .interaction-diagram, .video-placeholder, .demo-description');


animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 初始化时检查元素是否已经在视口中
window.addEventListener('load', () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// 添加模拟数据可视化效果（可选）
function addSimulatorEffects() {
    const simulatorPreview = document.querySelector('.simulator-preview');
    if (simulatorPreview) {
        // 可以在这里添加Canvas动画或其他效果
        // 例如，模拟飞行仪表的简单动画
        simulatorPreview.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; opacity: 0.7;">✈️</div>';
    }
    
    const diagramPlaceholder = document.querySelector('.diagram-placeholder');
    if (diagramPlaceholder) {
        diagramPlaceholder.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 6rem; opacity: 0.5;">📊</div>';
    }
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', () => {
    addSimulatorEffects();
});

// 团队成员头像添加初始效果
function initializeTeamAvatars() {
    const avatars = document.querySelectorAll('.team-avatar');
    const emojis = ['👨‍💻', '👩‍💻', '👨‍🔧', '👩‍🎨'];
    
    avatars.forEach((avatar, index) => {
        avatar.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; opacity: 0.8;">${emojis[index % emojis.length]}</div>`;
    });
}

// 初始化团队头像
initializeTeamAvatars();