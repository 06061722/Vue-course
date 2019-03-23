<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  // props: {
  //   id: {
  //     type: String,
  //     default: 'QiaoQiao'
  //   }
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
    next()
  }
}
</script>
