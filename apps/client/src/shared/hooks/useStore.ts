import { Store }       from 'effector'
import { onMounted }   from 'vue'
import { onUnmounted } from 'vue'
import { readonly }    from 'vue'
import { ref }         from 'vue'

export const useStore = <T>(store: Store<T>) => {
  const storeRef = ref(store.getState())
  let unwatch: unknown
  onMounted(() => {
    unwatch = store.watch((value) => {
      storeRef.value = value
    })
  })
  onUnmounted(() => {
    unwatch()
  })
  return readonly(storeRef)
}
