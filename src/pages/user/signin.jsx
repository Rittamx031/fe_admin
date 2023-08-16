import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('* Required to enter email').email('* Invalid email format'),
  password: yup.string().required('* Password is required'),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: yupResolver(schema),
    });

  const onSubmit = (data) => {
    console.info(data);
  };
  // const onerror = (errors) {
  //   console.log(errors)
  // }
  return (

    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="Email" className="form-label">Email address</label>
          <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" {...register("email")} />
          <span className="text-danger">
            {errors.email?.message}
          </span>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="Password" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password" {...register("password")} />
          <span className="text-danger">
            {errors.password?.message}
          </span>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="checked" />
          <label className="form-check-label" for="checked">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  );
};

export default SignIn;
