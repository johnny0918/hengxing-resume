<template>
  <section id="experience" ref="elementRef" :class="{ 'animate-in': isVisible }" aria-labelledby="experience-heading">
    <h2 class="section-header" id="experience-heading">工作经历</h2>
    <div class="timeline">
      <div
        class="timeline-item"
        v-for="(exp, index) in experiences"
        :key="index"
        :class="{ 'item-visible': isVisible }"
        :style="{ transitionDelay: isVisible ? `${index * 0.15}s` : '0s' }"
      >
        <div class="timeline-period">{{ exp.period }}</div>
        <div class="timeline-content">
          <h3>{{ exp.title }} <span v-if="exp.subTitle" class="company-inline" v-html="exp.subTitle"></span></h3>
          <span class="company">{{ exp.company }}</span>
          <ul>
            <li v-for="(item, i) in exp.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const experiences = [
  {
    period: '2024 — 至今',
    title: 'AI 技术实践者与解决方案架构师',
    company: '个人技术探索与企业咨询',
    items: [
      '深入研究 LLM 大语言模型架构与应用落地，精通 Prompt Engineering 高阶技巧',
      '基于 RAG 技术构建企业级私有知识库与智能问答系统',
      '使用 Coze、Claude Code、DeepSeek、Qoder 等工具链构建 AI 自动化工作流',
      '为企业提供 AI 赋能业务流程的咨询与落地方案',
    ],
  },
  {
    period: '2019 — 2024',
    title: '项目经理 / 项目工程师',
    company: '电子行业知名企业',
    items: [
      '主导多个电子硬件产品从立项、研发、试产到量产的全生命周期项目管理',
      '协调研发、采购、生产、质量等多部门资源，确保项目按时按质交付',
      '建立并优化项目管理流程与模板，提升团队交付效率约 30%',
      '主导供应链风险评估与供应商审核，降低关键物料交付风险',
    ],
  },
  {
    period: '2017 — 2019',
    title: 'Java 开发工程师',
    subTitle: '<span class="company">（与供应链管理并行）</span>',
    company: '软件开发与系统集成',
    items: [
      '参与企业级管理系统后端开发，使用 Spring Boot、MySQL、Redis 等技术栈',
      '负责供应链相关模块的 API 设计与数据库建模',
      '编写技术文档与单元测试，保障代码质量与系统稳定性',
    ],
  },
  {
    period: '2011 — 2019',
    title: '供应链管理工程师 / 采购工程师',
    company: '制造业 / 电子行业',
    items: [
      '负责供应商开发、评估与关系管理，建立覆盖电子元器件、结构件等领域的供应商网络',
      '优化采购策略与库存周转，年度降本幅度达 8%-15%',
      '主导 ERP 系统供应链模块的实施与优化，推动采购流程数字化',
      '处理供应链突发事件，建立应急响应机制，保障生产连续性',
    ],
  },
]
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

.timeline {
    position: relative;
    max-width: 800px;
}

.timeline-item {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 28px;
    margin-bottom: 48px;
    position: relative;
    padding-left: 24px;
    border-left: 1px solid var(--border);
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.timeline-item:last-child { margin-bottom: 0; }

.timeline-item.item-visible {
    opacity: 1;
    transform: translateX(0);
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -3px;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--text-secondary);
}

.timeline-item:first-child::before {
    background: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-dim);
}

.timeline-period {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--text-secondary);
    white-space: nowrap;
    padding-top: 2px;
}

.timeline-content h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 4px;
}

.company-inline :deep(.company) {
    font-size: 0.82rem;
    color: var(--text-secondary);
}

.timeline-content .company {
    font-size: 0.82rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
    display: block;
}

.timeline-content ul {
    list-style: none;
    color: var(--text-secondary);
    font-size: 0.88rem;
    line-height: 1.8;
}

.timeline-content ul li {
    margin-bottom: 4px;
    padding-left: 14px;
    position: relative;
}

.timeline-content ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 1px;
    background: var(--text-secondary);
}

@media (max-width: 768px) {
    .timeline-item {
        grid-template-columns: 1fr;
        gap: 8px;
    }
}
</style>
