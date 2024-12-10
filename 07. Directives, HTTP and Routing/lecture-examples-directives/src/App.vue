<script>

const focus = {
mounted: (element) => {
element.focus()
}
}

export default {
directives: {
  focus
}
}
</script>

<template>
  <input v-focus>
</template>

<style>

</style>
