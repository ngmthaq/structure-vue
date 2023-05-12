import { computed, reactive, ref, watch } from "vue";

abstract class Vue {
  public readonly reactive = reactive;
  public readonly ref = ref;
  public readonly computed = computed;
  public readonly watch = watch;
}

export { Vue };
