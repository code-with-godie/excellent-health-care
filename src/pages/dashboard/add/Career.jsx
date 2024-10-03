import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postData, updateData } from '../../../api/apiCalls';
import { useAPPContext } from '../../../context/AppContext';
import { CircularProgress } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const schema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be greater than 2 characters' }),
  description: z
    .array(z.string().min(1, { message: 'Description cannot be empty' }))
    .min(1, { message: 'At least one description is required' }),
  role: z.string().optional(),
  image: z.string().min(1, { message: 'An image is required' }),
  normal: z.boolean().optional(),
});

const Career = () => {
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track if we are editing
  const { token } = useAPPContext();
  const navigate = useNavigate();
  const location = useLocation();
  const careerToEdit = location.state?.career; // Career data passed from the previous page (when editing)

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      description: [''],
      image: '',
      normal: false,
      title: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'description',
  });

  // Pre-fill form when editing an existing career
  useEffect(() => {
    if (careerToEdit) {
      setIsEditing(true);
      setValue('title', careerToEdit.title);
      setValue('description', careerToEdit.description);
      setValue('normal', careerToEdit.normal);
      setValue('image', careerToEdit.image);
      setImage(careerToEdit.image); // Preload image
    }
  }, [careerToEdit, setValue]);

  const handleFile = e => {
    const file = e.target.files[0];
    const fileType = file.type.split('/')[0];
    if (fileType !== 'image') {
      alert('Select an image');
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result);
      setValue('image', fileReader.result); // Set image value in form
    };
  };

  const onSubmit = async data => {
    let res;
    if (isEditing) {
      // Update the existing career
      res = await updateData(`/programs/${careerToEdit._id}`, data, token);
    } else {
      // Add a new career program
      res = await postData('/programs', data, token);
    }

    console.log('res', res);

    if (res) {
      if (isEditing) {
        navigate(`/dashboard/careers`);
      } else {
        navigate(`/dashboard/careers/add/topic/${res?.post?._id}`, {
          state: { career: res?.post },
        });
      }
    }
  };

  return (
    <section className='flex-col md:flex-row flex bg-bg_main text-white md:h-[90vh] gap-2 flex-1 overflow-auto'>
      <article className='md:w-2/5 md:min-w-[200px] bg-bgSoft p-4 self-start rounded-lg'>
        <div className='flex flex-col gap-2'>
          <img
            src={image || '/noprofile.png'}
            alt='selected'
            className='object-contain rounded-lg w-full max-h-full'
          />
        </div>
      </article>
      <article className='w-3/5 bg-bgSoft p-2 overflow-auto'>
        <form
          className='flex flex-col gap-2 w-full p-2'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='image'
              className='p-4 rounded-lg text-lg bg-blue-500 cursor-pointer'
            >
              Select Career Image
            </label>
            <input
              type='file'
              id='image'
              onChange={handleFile}
              hidden
            />
            {errors.image && (
              <p className='text-red-500'>{errors.image.message}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='title'>Career Title</label>
            <input
              type='text'
              className='flex-1 bg-transparent p-2 border border-gray-300 rounded-lg outline-none'
              placeholder='Career Title'
              {...register('title')}
            />
            {errors.title && (
              <p className='text-red-500'>{errors.title.message}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='normal'>Normal Option</label>
            <select
              {...register('normal', {
                setValueAs: value => value === 'true',
              })}
              className='flex-1 bg-[#151C2C] text-white border border-gray-300 rounded-lg outline-none p-2'
            >
              <option value='false'>image to the left</option>
              <option value='true'>image to the right</option>
            </select>
            {errors.normal && (
              <p className='text-red-500'>{errors.normal.message}</p>
            )}
          </div>
          <h1 className='text-left text-lg p-4'>Career Descriptions</h1>
          <button
            type='button'
            onClick={() => append('')}
            className='p-2 bg-blue-500 text-white rounded-lg'
          >
            Add Description
          </button>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className='flex flex-col gap-1'
            >
              <label htmlFor={`description-${index}`}>
                Description {index + 1}
              </label>
              <input
                type='text'
                className='flex-1 bg-transparent p-2 border border-gray-300 rounded-lg outline-none'
                placeholder='Description'
                {...register(`description.${index}`)}
              />
              {errors.description?.[index]?.message && (
                <p className='text-red-500'>
                  {errors.description[index].message}
                </p>
              )}
              <button
                type='button'
                onClick={() => remove(index)}
                className='text-red-500'
              >
                Remove
              </button>
            </div>
          ))}
          <div className='flex flex-col gap-1'>
            <button
              className='flex-1 p-2 bg-blue-500 border-none cursor-pointer outline-none disabled:cursor-not-allowed'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress size={20} />
              ) : isEditing ? (
                'Update Career'
              ) : (
                'Submit Career'
              )}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Career;
