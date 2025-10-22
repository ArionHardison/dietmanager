<template>
  <div id="content">
    <slot />
  </div>
</template>

<script>
/**
 * Basic page content container.
 */
export default {
  name: 'SContent'
}
</script>

<style lang="scss">
@import '~/assets/scss/_config.scss';
#content {
  position: relative;
  overflow: hidden;

  @include media('<=md') {
    margin-top: $header-mobile-height;
  }
}
</style>
