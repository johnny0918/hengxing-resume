<template>
  <div class="skill-category">
    <h3>{{ title }}</h3>
    <div class="skill-tags">
      <span
        class="skill-tag"
        v-for="(tag, i) in tags"
        :key="i"
        :class="{ popped: clickedTag === i }"
        @click="popTag(i)"
      >{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  tags: string[]
}>()

const clickedTag = ref(-1)

function popTag(index: number) {
  clickedTag.value = index
  setTimeout(() => { clickedTag.value = -1 }, 200)
}
</script>

<style scoped>
.skill-category h3 {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.skill-tag {
    font-size: 0.78rem;
    padding: 3px 10px;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 2px;
    background: var(--accent-dim);
    cursor: pointer;
    transition: all 0.2s ease;
}

.skill-tag:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: scale(1.05);
    box-shadow: 0 1px 4px rgba(45, 125, 154, 0.12);
}

.skill-tag.popped {
    transform: scale(1.15);
}
</style>
