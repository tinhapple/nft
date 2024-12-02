import * as yup from 'yup';

import {ErrorForm} from '../constants/error';
import {PASSWORD_REGEX} from '../constants/constants';


export const RegisterFormValidate = yup.object().shape({
  username: yup.string().nullable().required(ErrorForm.Required),
  email: yup.string().nullable().required(ErrorForm.Required),
  password: yup
    .string()
    .min(8, ErrorForm.MaximumPasswordLength)
    .max(20, ErrorForm.MaximumPasswordLength)
    .matches(PASSWORD_REGEX, {
      message: ErrorForm.PasswordInvalid,
      excludeEmptyString: true,
    })
    .nullable()
    .required(ErrorForm.Required),
  passwordConf: yup
    .string()
    .min(8, ErrorForm.MaximumPasswordLength)
    .max(20, ErrorForm.MaximumPasswordLength)
    .oneOf([yup.ref('password'), null], ErrorForm.PasswordNotSame)
    .matches(PASSWORD_REGEX, {
      message: ErrorForm.PasswordInvalid,
      excludeEmptyString: true,
    })
    .nullable()
    .required(ErrorForm.Required),
});
