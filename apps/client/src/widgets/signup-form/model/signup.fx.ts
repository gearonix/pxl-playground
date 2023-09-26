import { createEffect }        from 'effector'
import { sample }              from 'effector'
import { AccessTokenResponse } from 'server-types'

import { resetForm }           from '@/entities/signup-form-template/model'
import { EndPoints }           from '@/shared/config/endpoints'
import { httpService }         from '@/shared/config/http-service'
import { LocalStorageClient }  from '@/shared/lib/local-storage'
import { FetchError }          from '@/shared/types/http'
import { SignupFormValues }    from '@/widgets/signup-form'
import { signupFailed }        from '@/widgets/signup-form/model/auth'

import { validateUserFx }      from './validate-user.fx'

const storage = new LocalStorageClient()

export const signupFx = createEffect<SignupFormValues, string, FetchError>(
  async (values) => {
    const resource = await httpService
      .url(EndPoints.AUTH.login)
      .post(values)
      .json<AccessTokenResponse>()

    storage.set('AUTH_TOKEN', resource.accessToken)

    return resource.accessToken
  }
)

sample({
  clock: signupFx.doneData,
  target: validateUserFx
})

sample({
  clock: signupFx.doneData,
  target: resetForm
})

sample({
  clock: signupFx.failData,
  target: signupFailed
})
