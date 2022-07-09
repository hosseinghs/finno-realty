<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware({ redirect }) {
    const token = localStorage.getItem('token')
    if (!token) redirect('auth/login')
  },
}
</script>

