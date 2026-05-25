<template>
  <section id="projects" ref="elementRef" :class="{ 'animate-in': isVisible }" aria-labelledby="projects-heading">
    <h2 class="section-header" id="projects-heading">精选项目</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :techs="project.techs"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const projects = [
  {
    title: '企业智能知识库系统',
    description: '基于 RAG 技术构建的企业级私有知识库，整合公司历年技术文档、项目资料与培训内容，支持自然语言问答与智能检索，大幅降低新员工培训成本与信息查找时间。',
    techs: ['RAG', '向量数据库', 'LLM', 'Python', 'LangChain'],
  },
  {
    title: '供应链智能预警平台',
    description: '使用 Java + Spring Boot 开发的企业内部供应链管理系统，集成库存预警、供应商绩效评估与采购需求预测模块，帮助采购团队提前识别供应风险。',
    techs: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Vue.js'],
  },
  {
    title: 'AI 项目管理助手',
    description: '基于 Coze 和 Claude Code 搭建的 AI 项目管理助手，可自动生成项目周报、风险分析报告与会议纪要，并集成到企业微信工作流中，提升项目管理效率 40%以上。',
    techs: ['Coze', 'Claude API', 'Prompt Engineering', '工作流自动化'],
  },
  {
    title: '电子新品导入 (NPI) 数字化',
    description: '主导某电子企业 NPI 流程的数字化转型，梳理从 EVT 到 MP 的全流程节点，设计数字化看板与自动化审批流，将平均导入周期缩短 20%。',
    techs: ['项目管理', '流程优化', '数字化看板', '跨部门协同'],
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

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
