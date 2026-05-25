<template>
  <div class="stats-grid" ref="elementRef">
    <div class="stat-card" v-for="stat in stats" :key="stat.label">
      <span class="stat-number">{{ stat.display }}{{ stat.suffix }}</span>
      <span class="stat-label">{{ stat.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const statDefs = [
  { value: 13, suffix: '+', label: '年工作经验' },
  { value: 5, suffix: '+', label: '年电子项目管理' },
  { value: 8, suffix: '', label: '年供应链管理' },
  { value: 2, suffix: '', label: '年 Java 开发' },
]

const counters = statDefs.map(s => useCountUp(s.value))

const stats = computed(() =>
  statDefs.map((s, i) => ({
    ...s,
    display: isVisible.value ? counters[i].currentValue.value : 0,
  }))
)

watch(isVisible, (val) => {
  if (val) counters.forEach(c => c.start())
})
</script>

<style scoped>
.stats-grid {
    display: flex;
    gap: 48px;
    margin-top: 56px;
    padding-top: 40px;
    border-top: 1px solid var(--border);
}

.stat-card {
    text-align: left;
}

.stat-number {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--accent);
    display: block;
    font-variant-numeric: tabular-nums;
}

.stat-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-top: 4px;
}

@media (max-width: 768px) {
    .stats-grid {
        flex-wrap: wrap;
        gap: 24px 40px;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        flex-direction: column;
        gap: 20px;
    }
}
</style>
