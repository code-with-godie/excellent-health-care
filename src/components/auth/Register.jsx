import { zodResolver } from '@hookform/resolvers/zod';
import { Close, FacebookRounded, GitHub } from '@mui/icons-material';
import {
  CircularProgress,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useAPPContext } from '../../context/AppContext';
import { postData } from '../../api/apiCalls';
import url from '../../assets/google.png';
const variants = {
  initial: { y: -300, opacity: 0, transition: { duration: 0.5 } },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const Register = () => {
  const { setShowModel, setIsLogedIn, setToastMesage, isLogin } =
    useAPPContext();
  const schema = z.object({
    username: z.string().min(2, 'usename is required'),
    email: z.string().email('email is required'),
    password: z.string().min(8, 'password must be greater than 7 character'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = async data => {
    try {
      const newUser = await postData('/users/register', data, null);
      if (newUser) {
        setShowModel(true);
        setIsLogedIn(true);
      }
    } catch (error) {
      //show toast
      setToastMesage(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <motion.form
      className={` bg-white text-white p-4 w-full max-w-[350px]  rounded-md flex flex-col gap-1 relative  `}
      variants={variants}
      initial='initial'
      animate={!isLogin ? 'animate' : 'initial'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=' flex items-center justify-end'>
        <IconButton onClick={() => setShowModel(false)}>
          <Close className=' text-black text-2xl' />
        </IconButton>
      </div>
      <div className=' flex flex-col gap-4 py-4'>
        <div className=' flex gap-1 flex-col'>
          <TextField
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: errors.username ? 'tomato' : 'gray', // Border color based on error
                },
                '&:hover fieldset': {
                  borderColor: errors.username ? 'tomato' : 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.username ? 'tomato' : 'gray', // Focused border color based on error
                },
              },
              '& .MuiInputLabel-root': {
                color: errors.username ? 'tomato' : 'gray', // Label color based on error
              },
              '& .MuiInputBase-input': {
                color: 'gray', // Input text color
              },
            }}
            className=' flex-1'
            label='username*'
            variant='outlined'
            name='username'
            {...register('username')}
          />
        </div>
        <div className=' flex gap-1 flex-col'>
          <TextField
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: errors.email ? 'tomato' : 'gray', // Border color based on error
                },
                '&:hover fieldset': {
                  borderColor: errors.email ? 'tomato' : 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.email ? 'tomato' : 'gray', // Focused border color based on error
                },
              },
              '& .MuiInputLabel-root': {
                color: errors.email ? 'tomato' : 'gray', // Label color based on error
              },
              '& .MuiInputBase-input': {
                color: 'gray', // Input text color
              },
            }}
            className=' flex-1'
            label='Email address*'
            variant='outlined'
            name='email'
            {...register('email')}
          />
        </div>
        <div className=' flex gap-1 flex-col text-white'>
          <TextField
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: errors.password ? 'tomato' : 'gray', // Border color based on error
                },
                '&:hover fieldset': {
                  borderColor: errors.password ? 'tomato' : 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.password ? 'tomato' : 'gray', // Focused border color based on error
                },
              },
              '& .MuiInputLabel-root': {
                color: errors.password ? 'tomato' : 'gray', // Label color based on error
              },
              '& .MuiInputBase-input': {
                color: 'gray', // Input text color
              },
            }}
            className=' flex-1 text-white border-white outline-none placeholder:text-white'
            label='password*'
            type='password'
            variant='outlined'
            name='password'
            {...register('password')}
          />
        </div>
      </div>
      <div className=' flex items-center text-white'>
        <button
          disabled={isSubmitting}
          className=' p-2 capitalize text-center cursor-pointer bg-blue-500 rounded-lg flex-1'
        >
          {isSubmitting ? <CircularProgress size={20} /> : 'sign up'}
        </button>
      </div>
      <div className=' flex items-center text-black flex-col text-sm'>
        <p className=' font-mono'>
          Already have an account?{' '}
          <span
            className=' underline cursor-pointer px-2 font-thin'
            onClick={() => setIsLogedIn(true)}
          >
            sign in
          </span>
        </p>
        <p className=' font-thin text-sm mt-5'>Or</p>
        <p className=' text-sm italic font-thin'> sign up with</p>
      </div>
      <div className=' flex items-center justify-center'>
        <Tooltip
          arrow
          title='login with github'
        >
          <IconButton>
            <img
              src={url}
              alt='google'
              className=' size-16 object-contain'
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          arrow
          title='login with github'
        >
          <IconButton>
            <GitHub
              fontSize='large'
              className=' text-black'
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          arrow
          title='login with facebook'
        >
          <IconButton>
            <FacebookRounded
              className=' text-blue-600'
              fontSize='large'
            />
          </IconButton>
        </Tooltip>
      </div>
      <div className=' flex items-center text-white flex-col'>
        <p className=' text-black text-sm italic'>
          {' '}
          &copy; All right reserved.excellent health care{' '}
          {new Date().getUTCFullYear()}{' '}
        </p>
      </div>
    </motion.form>
  );
};

export default Register;
