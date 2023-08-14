import { useQuasar } from 'quasar'

export const useLoadingBar = () => {
  const $q = useQuasar()

  return () => {
    $q.loadingBar.start()
    $q.loadingBar.stop()
  }
}
