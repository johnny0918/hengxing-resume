<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="project-tech">
      <span v-for="tech in techs" :key="tech">{{ tech }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  techs: string[]
}>()
</script>

<style scoped>
.project-card {
    background: var(--bg-card);
    border-radius: 4px;
    padding: 28px;
    border: 1px solid var(--border);
    box-shadow: 0 1px 6px rgba(30, 42, 58, 0.04);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
    border-color: var(--accent);
    box-shadow: 0 2px 16px rgba(45, 125, 154, 0.08);
}

.project-card h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 10px;
}

.project-card p {
    color: var(--text-secondary);
    font-size: 0.88rem;
    margin-bottom: 20px;
    line-height: 1.7;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.project-tech span {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--text-secondary);
}
</style>
