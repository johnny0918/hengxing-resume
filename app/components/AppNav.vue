<template>
  <nav :class="{ scrolled: isScrolled }" aria-label="主导航">
    <a href="#" class="logo">恒星</a>
    <ul class="nav-links" :class="{ active: isMobileOpen }" role="menubar">
      <li role="none"><a href="#about" role="menuitem" @click.prevent="scrollTo('about')">关于</a></li>
      <li role="none"><a href="#experience" role="menuitem" @click.prevent="scrollTo('experience')">经历</a></li>
      <li role="none"><a href="#skills" role="menuitem" @click.prevent="scrollTo('skills')">技能</a></li>
      <li role="none"><a href="#projects" role="menuitem" @click.prevent="scrollTo('projects')">项目</a></li>
      <li role="none"><a href="#contact" role="menuitem" @click.prevent="scrollTo('contact')">联系</a></li>
    </ul>
    <div
      class="mobile-menu-btn"
      :class="{ active: isMobileOpen }"
      role="button"
      :aria-label="isMobileOpen ? '关闭菜单' : '打开菜单'"
      :aria-expanded="isMobileOpen"
      tabindex="0"
      @click="toggleMenu"
      @keydown.enter="toggleMenu"
      @keydown.space.prevent="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMenu() {
  isMobileOpen.value = !isMobileOpen.value
}

function scrollTo(id: string) {
  isMobileOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 0 60px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-nav);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

nav.scrolled {
    border-bottom-color: var(--border);
    box-shadow: 0 1px 8px rgba(30, 42, 58, 0.04);
}

.logo {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    letter-spacing: 0.02em;
}

.nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    transition: color 0.2s ease;
}

.nav-links a:hover { color: var(--text); }

.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1001;
}

.mobile-menu-btn span {
    width: 20px;
    height: 1px;
    background: var(--text-secondary);
    transition: all 0.25s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 768px) {
    nav { padding: 0 24px; }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 72vw;
        height: 100vh;
        background: var(--bg-card);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        transition: right 0.3s ease;
        border-left: 1px solid var(--border);
    }

    .nav-links.active { right: 0; }
    .nav-links a { font-size: 1rem; }
    .mobile-menu-btn { display: flex; }
}
</style>
