<template>
  <div id="burgur" class="cursor-pointer" @click="$emit('burgerClick')">
    <img :src="require('~/assets/img/burger.svg')" />
  </div>
</template>

<script>
export default {
  name: 'BurgerComponent',
}
</script>
