export function useCountUp(targetValue: number, duration: number = 1500) {
  const currentValue = ref(0)
  const isAnimating = ref(false)

  function start() {
    if (isAnimating.value) return
    isAnimating.value = true
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      currentValue.value = Math.round(eased * targetValue)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        isAnimating.value = false
      }
    }
    requestAnimationFrame(animate)
  }

  return { currentValue, isAnimating, start }
}
