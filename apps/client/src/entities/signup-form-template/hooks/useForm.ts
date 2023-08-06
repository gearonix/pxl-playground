import { ref } from 'vue'
import { SignupFormValues } from '@/widgets/signup-form/types.ts'

export const useForm = () => {
  const formValues = ref<SignupFormValues>({
    phone: '',
    password: ''
  })

  return { formValues }
}
