// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
  // 顶部移动端菜单
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.add('fade-in');
    });
  }

  // 侧边栏切换（交易市场/数据概览页）
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('aside');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('hidden');
      sidebar.classList.add('fade-in');
    });
  }

  // 点击空白处关闭移动端菜单
  document.addEventListener('click', function(e) {
    if (mobileMenu && !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // 表格行悬停效果增强
  const tableRows = document.querySelectorAll('tbody tr');
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.classList.add('scale-[1.005]');
      this.style.transition = 'all 0.2s ease';
    });
    row.addEventListener('mouseleave', function() {
      this.classList.remove('scale-[1.005]');
    });
  });
});