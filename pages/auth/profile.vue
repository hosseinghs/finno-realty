<template>
  <div>
    <ul class="flex items-center">
      <li class="w-full" v-for="(item, i) in items" :key="i">
        {{ item.text }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }],
    }
  },
}
</script>

<style></style>
