import { useQuasar } from 'quasar'

export const useLoadingBar = () => {
  const $q = useQuasar()

  $q.loadingBar.start()
  $q.loadingBar.stop()
}
