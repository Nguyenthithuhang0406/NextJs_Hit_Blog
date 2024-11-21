
import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, 'Tên đăng nhập phải có ít nhất 5 ký tự')
    .max(30, 'Tên đăng nhập không được quá 30 ký tự')
    .required('Tên không được bỏ trống'),
  email: Yup.string()
    .email('Không đúng định dạng email').required('Email không được bỏ trống'),
  password: Yup.string()
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .max(16, 'Mật khẩu không được quá 16 ký tự')
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Za-z].*[A-Za-z]).*$/,
      'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự đặc biệt và 2 ký tự chữ cái'
    ).required('Mật khẩu không được bỏ trống'),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Không đúng định dạng email').required('Email không được bỏ trống'),
  password: Yup.string()
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .max(16, 'Mật khẩu không được quá 16 ký tự')
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Za-z].*[A-Za-z]).*$/,
      'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự đặc biệt và 2 ký tự chữ cái'
    ).required('Mật khẩu không được bỏ trống'),
});