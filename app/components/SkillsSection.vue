<template>
  <section id="skills" ref="elementRef" :class="{ 'animate-in': isVisible }" aria-labelledby="skills-heading">
    <h2 class="section-header" id="skills-heading">技能矩阵</h2>
    <div class="skills-grid">
      <SkillCategory
        v-for="(cat, index) in categories"
        :key="index"
        :title="cat.title"
        :tags="cat.tags"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const categories = [
  {
    title: '项目管理',
    tags: ['项目全周期管理', '敏捷/Scrum', '风险管理', '跨部门协调', '资源调度', '交付管理', 'JIRA / Project'],
  },
  {
    title: '供应链管理',
    tags: ['供应商管理', '采购策略', '库存优化', '成本控制', 'ERP实施', '物流协调', '物料计划'],
  },
  {
    title: '软件开发',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'RESTful API', 'Git', 'Linux'],
  },
  {
    title: 'AI & LLM',
    tags: ['Prompt Engineering', 'RAG架构', '向量数据库', '知识库构建', 'LLM微调', 'AI Agent'],
  },
  {
    title: 'AI 工具链',
    tags: ['Coze', 'Claude Code', 'DeepSeek', 'Qclaw (AI编程助手)', 'Qoder', 'Vibe Coding', '工作流自动化'],
  },
  {
    title: '电子行业',
    tags: ['硬件研发流程', 'BOM管理', 'NPI导入', 'DFM/DFT', '质量标准', '失效分析'],
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

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

@media (max-width: 992px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>
