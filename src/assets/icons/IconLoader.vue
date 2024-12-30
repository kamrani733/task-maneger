<template>
  <component
    :is="icon"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 24,
    },
    height: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const icon = defineAsyncComponent(() =>
      import(`./${props.name}.svg`)
    );

    return {
      icon,
    };
  },
};
</script>
