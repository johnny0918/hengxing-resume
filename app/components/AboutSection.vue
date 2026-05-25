<template>
  <section id="about" ref="elementRef" :class="{ 'animate-in': isVisible }" aria-labelledby="about-heading">
    <h2 class="section-header" id="about-heading">关于我</h2>
    <div class="content">
      <div class="about-text">
        <p>
          我是 <strong>恒星</strong>，一位专注于<strong>AI 赋能传统企业转型</strong>的复合型人才。
          虽然我的学历背景是计算机科学与技术，但我真正成长的课堂是在<strong>13年的职场实战</strong>中。
          从电子行业的项目工程师到供应链管理专家，从 Java 开发者到 AI 工具链的先行者，
          我始终致力于将前沿 AI 技术落地到传统行业的实际业务场景中。
        </p>
        <p>
          过去五年，我专注于<strong>电子行业的项目管理</strong>，主导过多个从立项到量产的全周期项目，
          深谙硬件研发、供应链协同与交付管理的复杂链路。在此之前，我在供应链管理领域深耕八年，
          对采购策略、供应商管理、库存优化与物流协调有着深刻的实战理解。
        </p>
        <p>
          技术从未远离我的工作。两年的 <strong>Java 开发经验</strong>让我具备了扎实的工程思维，
          而过去一年对 <strong>LLM、RAG、Prompt Engineering</strong> 以及 Coze、Claude Code、DeepSeek 等工具的深入实践，
          则让我站在了 AI 赋能业务的最前沿。我相信，未来的竞争力属于那些既懂业务又懂技术的人。
        </p>
        <p>以下是我目前聚焦的技术与能力领域：</p>
        <ul class="skills-list">
          <li>项目管理 (PMP/敏捷)</li>
          <li>供应链优化</li>
          <li>Java 后端开发</li>
          <li>Prompt Engineering</li>
          <li>LLM 应用架构</li>
          <li>RAG 知识库构建</li>
          <li>AI 工作流自动化</li>
          <li>业务流程数字化</li>
        </ul>
      </div>
      <div class="about-image">
        <div class="about-image-wrapper">
          <div class="about-image-inner">
            <img :src="profileImage" alt="恒星" loading="lazy" style="width:100%;display:block;" />
          </div>
        </div>
      </div>
    </div>

    <StatsGrid />
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()
const config = useRuntimeConfig()
const profileImage = config.app.baseURL + 'githab_view.png'
</script>

<style scoped>
section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

section.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.content {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: 60px;
    align-items: start;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

.about-text strong {
    color: var(--text);
    font-weight: 500;
}

.about-text p:last-child {
    margin-bottom: 0;
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 20px;
    margin-top: 24px;
    list-style: none;
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.skills-list li::before {
    content: '\2014';
    color: var(--border);
    margin-right: 8px;
}

.about-image {
    max-width: 240px;
}

.about-image-wrapper {
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(30, 42, 58, 0.06);
}

.about-image-inner {
    overflow: hidden;
}

@media (max-width: 992px) {
    .content {
        grid-template-columns: 1fr 180px;
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .content {
        grid-template-columns: 1fr;
    }
    .about-image {
        max-width: 200px;
    }
}
</style>
