<template>
  <a href="/" class="logo-container">
    <svg 
      class="logo-svg" 
      viewBox="0 0 46 40" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- < -->
      <polyline 
        points="8,8 2,20 8,32" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="4" 
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- / -->
      <line 
        x1="28" y1="6" x2="18" y2="34" 
        stroke="currentColor" 
        stroke-width="4" 
        stroke-linecap="round"
      />
      <!-- > -->
      <polyline 
        points="38,8 44,20 38,32" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="4" 
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
}

.logo-container:hover {
  opacity: 0.7;
}

.logo-svg {
  width: 32px;
  height: 28px;
  color: var(--vp-c-brand-1);
}
</style>
