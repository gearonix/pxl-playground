import { Notify } from 'quasar'

export const showNotificationPassword = (password: string) => {
  const message = `Пароль пользователя: ${password}. Скопируйте его`

  Notify.create({
    message,
    timeout: 10000
  })
}
