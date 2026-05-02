---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const lang = navigator.language?.startsWith('de') ? '/de/' : '/en/'
  window.location.replace(lang)
})
</script>
