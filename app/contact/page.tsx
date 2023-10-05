'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const Page = () => {
  // const title = 'contact';
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publickKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitSuccessful },
    formState,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await emailjs.send(serviceId, templateId, data, publickKey).then(
      (result) => {
        if (result.text === 'OK') {
          toast.success('Message Submitted Successfully');
        }
      },
      (error) => {
        toast.error(error.text);
        console.log('error => ' + error.text);
      }
    );

    reset();
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col-reverse gap-8 my-8  md:flex-row md:gap-0 bg-slate-50">
        <div className="w-full mx-auto p-5 md:w-[50%] md:p-0 flex items-center h-full">
          <div className="w-full p-4 text-gray-700 md:p-8">
            <h3 className="text-3xl font-semibold tracking-normal">
              Leave a message
            </h3>

            <form
              className="mt-7 flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Name</span>
                <input
                  type="text"
                  className="text-base placeholder:text-sm border-b-1 rounded-md border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b focus:border-tertiary"
                  placeholder="Enter name"
                  {...register('user_name', {
                    required: 'Please enter your name',
                    minLength: {
                      value: 3,
                      message: 'minimum of 3 characters ',
                    },
                  })}
                />
                {errors.user_name && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.user_name.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Email</span>
                <input
                  type="email"
                  className="text-base placeholder:text-sm border-b-1 rounded-md border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b focus:border-tertiary"
                  placeholder="Enter email"
                  {...register('user_email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.user_email && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.user_email.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Message</span>
                <textarea
                  className="text-base placeholder:text-sm border-b-1 rounded-md border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b focus:border-tertiary"
                  placeholder="Enter Message"
                  rows={4}
                  {...register('message', {
                    required: 'Message can not be empty',
                  })}
                />
                {errors.message && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.message.message}
                  </span>
                )}
              </label>

              <button
                type="submit"
                className="w-full bg-pry py-2 text-[#fff] hover:bg-tertiary hover:text-[#f2f2f2] duration-300 rounded-md"
              >
                Send Message &#10095;
              </button>
            </form>
          </div>
        </div>
        <div className="w-full  text-gray-700 md:w-[50%]  bg-slate-200 flex justify-center items-center">
          <div className="p-8">
            <h3 className="text-3xl font-semibold tracking-normal pb-2">
              Get In Touch
            </h3>
            <p className="text-base text-gray-600">
              Please take a moment to write a message to us. We can guarantee
              that you will receive an automatic reply to the email address you
              provide below confirming that your message has been received.
              Thank you for considering Pursuit Hubs services. If you have any
              question or would like to schedule an appointment, please feel
              free to contact us using the information below. Our friendly staff
              will be happy to assist you.
            </p>
            <div className="my-6 text-gray-600 text-base">
              <h3 className="font-bold pb-2 text-xl text-gray-700">
                Contact Detail:
              </h3>
              <ul>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-700 pr-2">
                      Phone:{' '}
                    </span>{' '}
                    <span className="text-sm">+2348062856154</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-700 pr-2">
                      Email:{' '}
                    </span>{' '}
                    <span className="text-sm">yvvne@gmail.com</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
