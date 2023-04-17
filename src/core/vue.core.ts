import { computed, reactive, ref, watch } from "vue";

abstract class Vue {
  public reactive = reactive;
  public ref = ref;
  public computed = computed;
  public watch = watch;
}

export { Vue };
