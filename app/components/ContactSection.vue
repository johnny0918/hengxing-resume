<template>
  <section id="contact" ref="elementRef" :class="{ 'animate-in': isVisible }" aria-labelledby="contact-heading">
    <h2 class="section-header" id="contact-heading">联系我</h2>
    <h3 class="contact-subtitle">期待与您共事</h3>
    <p class="contact-text">
      我<strong>目前正在积极寻求新的职业机会</strong>，尤其关注 AI 赋能传统企业转型、
      项目管理与技术融合、供应链数字化等方向的岗位。如果您正在寻找一位既懂业务又懂技术、
      能将 AI 落地到实际场景中的复合型人才，欢迎随时与我联系。
    </p>
    <div class="contact-links">
      <a href="#" class="contact-link" @click.prevent="openMail">
        <span>{{ mail }}</span>
      </a>
      <a href="#" class="contact-link" @click.prevent="openPhone">
        <span>{{ phone }}</span>
      </a>
    </div>
    <p class="location">广州市，广东省，中国</p>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const mail = ref('')
const phone = ref('')

function openMail() {
  if (mail.value) window.location.href = 'mailto:' + mail.value
}

function openPhone() {
  if (phone.value) window.location.href = 'tel:' + phone.value.replace(/-/g, '')
}

onMounted(() => {
  mail.value = atob('Y2ppYW5neXVu') + '@' + atob('MTYzLmNvbQ==')
  phone.value = atob('MTg4') + '-' + atob('OTg0Mw==') + '-' + atob('MzI4Mw==')
})
</script>

<style scoped>
section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    text-align: left;
    border-top: 1px solid var(--border);
}

section.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.contact-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 500;
    color: var(--text);
    margin-bottom: 20px;
}

.contact-text {
    max-width: 520px;
    margin-bottom: 40px;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.8;
}

.contact-text strong {
    color: var(--text);
    font-weight: 500;
}

.contact-links {
    display: flex;
    gap: 32px;
    margin-bottom: 48px;
}

.contact-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
    padding: 10px 18px;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--bg-card);
}

.contact-link:hover {
    color: var(--accent);
    border-color: var(--accent);
}

.location {
    font-size: 0.82rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .contact-links {
        flex-direction: column;
        gap: 12px;
    }
}
</style>
