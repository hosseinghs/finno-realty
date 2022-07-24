<template>
  <ul class="bg-white w-full h-full px-4">
    <LayoutManagerMenuItem
      v-for="item in menuItems"
      :key="item.id"
      :title="item.title"
    />
  </ul>
</template>

<script>
export default {
  name: 'SideBarMenuListComponent',

  data() {
    return {
      menuItems: [
        { id: 1, title: 'داشبورد', route: '', name: '' },
        { id: 2, title: 'پروفایل', route: '', name: '' },
        { id: 3, title: 'مجتمع ها', route: '', name: '' },
        { id: 4, title: 'ارتباطات', route: '', name: '' },
        { id: 5, title: 'تعمیرات و نگهداری', route: '', name: '' },
        { id: 6, title: 'درآمدها و هزینه ها', route: '', name: '' },
        { id: 7, title: 'کیف پول', route: '', name: '' },
        { id: 8, title: 'گزارش ها', route: '', name: '' },
        { id: 9, title: 'تنظیمات', route: '', name: '' },
      ],
    }
  },
}
</script>
