import { Notify } from 'quasar'

export const showSuccessNotification = () => {
  return Notify.create('Продукт успешно добавлен')
}

export const showErrorNotification = () => {
  return Notify.create({
    message: 'Произошла ошибка',
    color: 'red'
  })
}
