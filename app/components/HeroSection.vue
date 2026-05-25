<template>
  <section id="hero">
    <p class="hero-greeting" :class="{ visible: mounted }">你好，我是</p>
    <h1 class="hero-title" :class="{ visible: mounted }">恒星</h1>
    <p class="hero-subtitle" :class="{ visible: mounted }">AI 赋能传统企业转型的实践者</p>
    <p class="hero-description" :class="{ visible: mounted }">
      一位拥有<strong>13年复合经验</strong>的技术专家，深耕电子行业项目管理与供应链管理，
      同时具备 Java 开发能力与前沿 AI 技术实践经验。<strong>目前寻求新机会</strong>，
      擅长以 AI 技术驱动传统业务流程再造，用代码和系统化思维为企业创造可量化的转型价值。
    </p>
    <div class="hero-cta" :class="{ visible: mounted }">
      <a href="#projects" @click.prevent="scrollTo('projects')">查看作品</a>
      <span class="separator" aria-hidden="true"></span>
      <a href="#contact" @click.prevent="scrollTo('contact')">取得联系</a>
    </div>
  </section>
</template>

<script setup lang="ts">
const mounted = ref(false)

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  nextTick(() => { mounted.value = true })
})
</script>

<style scoped>
#hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

#hero::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(45, 125, 154, 0.06) 0%, transparent 70%);
    pointer-events: none;
}

.hero-greeting, .hero-title, .hero-subtitle, .hero-description, .hero-cta {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.hero-greeting.visible { transition-delay: 0.1s; }
.hero-title.visible { transition-delay: 0.2s; }
.hero-subtitle.visible { transition-delay: 0.35s; }
.hero-description.visible { transition-delay: 0.5s; }
.hero-cta.visible { transition-delay: 0.65s; }

.visible { opacity: 1; transform: translateY(0); }

.hero-greeting {
    font-size: 0.82rem;
    color: var(--accent);
    margin-bottom: 20px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
}

.hero-title {
    font-size: clamp(2.4rem, 5.5vw, 3.8rem);
    font-weight: 600;
    color: var(--text);
    line-height: 1.15;
    margin-bottom: 16px;
    position: relative;
}

.hero-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: var(--accent);
    margin-top: 20px;
}

.hero-subtitle {
    font-size: clamp(1.05rem, 2.5vw, 1.4rem);
    font-weight: 300;
    color: var(--text-secondary);
    margin-bottom: 36px;
    margin-top: 24px;
}

.hero-description {
    max-width: 520px;
    font-size: 0.92rem;
    color: var(--text-secondary);
    margin-bottom: 48px;
    line-height: 1.85;
}

.hero-description strong {
    color: var(--text);
    font-weight: 500;
}

.hero-cta {
    display: flex;
    gap: 28px;
    align-items: center;
}

.hero-cta a {
    font-size: 0.85rem;
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;
}

.hero-cta a:hover { color: var(--accent-light); }

.hero-cta .separator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--border);
    flex-shrink: 0;
}

@media (max-width: 480px) {
    .hero-cta {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }
    .hero-cta .separator { display: none; }
}
</style>
