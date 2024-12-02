import React from 'react'
import BACKGROUNDSINGUP from '../../assets/image/bglogin.png'
import InputController from '../../components/form/inputController'
import { useForm } from 'react-hook-form';
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Button from '../../components/button';
import { yupResolver } from '@hookform/resolvers/yup';
import {RegisterFormValidate} from '../../utils/validation'

export default function SignUp() {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(RegisterFormValidate),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConf: '',
    },
  });

  const handleSignup = (data) => {
    // lấy cục data đó rồi call api và sử lý nếu nó error thì làm cái gì ,thành công thì làm việc gì
    console.log(data);
  };

  return (
    <section className='min-h-96 bg-grey grid grid-cols-2 max-sm:grid-cols-1 gap-[60px] max-md:gap-10' >
      <div>
        <img src={BACKGROUNDSINGUP} alt="signup" className='w-full h-[691px] max-md:h-[615px] max-sm:h-[300px]' />
      </div>
      <div className='py-[100px] max-md:py-[80px] max-sm:pt-[30px] max-sm:pb-10 flex flex-col max-sm:items-center gap-10 max-md:gap-3'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-[51px] max-md:text-[38px] max-md:leading-[45px] font-wordSans font-semibold leading-[56px] text-white'>Create account</h2>
          <div className='max-w-[420px] max-md:max-w-[320px]'>
            <p className='font-wordSans text-[22px] max-sm:text-base max-sm:leading-6 leading-9 font-normal text-white '>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          </div>
        </div>

        <div>
          <form className='w-[330px] flex flex-col gap-[30px] '>
            <div className='gap-[15px] flex flex-col'>
              <InputController
                name="username"
                control={control}
                type="text"
                placeholder={'Username'}
                icon={<CiUser color='#BDBDBD' fontSize={20} />}
                required
              />
              <InputController
                name="email"
                control={control}
                type="email"
                placeholder={'Email Address'}
                icon={<MdOutlineMail color='#BDBDBD' fontSize={20} />}
                required
              />
              <InputController
                name="password"
                control={control}
                type="password"
                placeholder={'Password'}
                icon={<CiLock color='#BDBDBD' fontSize={20} />}
                required
              />
              <InputController
                name="passwordConf"
                control={control}
                type="password"
                placeholder={'Confirm Password'}
                icon={<CiLock color='#BDBDBD' fontSize={20} />}
                required
              />
            </div>
            <Button
              title={'Create account'}
              classNameButton={'!w-full !h-[46px]'}
              onClick={handleSubmit(handleSignup)}
            />
          </form>
        </div>
      </div>
    </section>
  )
}
