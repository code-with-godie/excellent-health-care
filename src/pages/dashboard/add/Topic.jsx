import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postData, updateData } from '../../../api/apiCalls';
import { useAPPContext } from '../../../context/AppContext';
import { CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be greater than 2 characters' }),
  description: z
    .array(z.string().min(1, { message: 'Description cannot be empty' }))
    .min(1, { message: 'At least one description is required' }), // Ensure at least one description
  role: z.string().optional(),
  image: z.string().min(1, { message: 'An image is required' }), // Add image validation
  normal: z.boolean().optional(), // Normal option
});

const Topic = () => {
  const [image, setImage] = useState(null);
  const { token } = useAPPContext();
  const location = useLocation();
  const [career, setCareer] = useState(null); // Career info (passed via state)
  const [topic, setTopic] = useState(null); // Topic info (for editing)

  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      description: [''], // Start with one empty description
      image: '', // Initial empty string for the image
      normal: false, // Default value for normal
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'description', // Updated to match the schema
  });

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
    const newData = { ...data, careerID: career?._id };

    let res;
    if (topic) {
      // Editing existing topic
      res = await updateData(`/topics/${topic._id}`, newData, token);
    } else {
      // Adding a new topic
      res = await postData('/topics', newData, token);
    }

    if (res) {
      navigate('/dashboard/careers');
    }
  };

  // When the component is mounted, load the career and topic data if in edit mode
  useEffect(() => {
    setCareer(location?.state?.career); // Career info passed via navigation state
    setTopic(location?.state?.topic); // Topic info passed via navigation state
  }, [location]);

  // If a topic exists, set the form values for editing
  useEffect(() => {
    if (topic) {
      setValue('title', topic.title);
      setValue('description', topic.description || ['']);
      setValue('normal', topic.normal || false);
      setValue('image', topic.image || '');

      setImage(topic.image); // Preload the image for editing
    }
  }, [topic, setValue]);

  return (
    <section className='flex-col md:flex-row flex bg-bg_main text-white md:h-[90vh] gap-2 flex-1 overflow-auto'>
      <article className='md:w-2/5 md:min-w-[200px] bg-bgSoft p-4 self-start rounded-lg'>
        <div className='flex flex-col gap-2 p-2'>
          {career && (
            <div className='w-full h-full max-h-[250px] relative grid place-content-center mb-5'>
              <h1 className='text-white text-lg truncate'>{career?.title}</h1>
              <img
                src={career?.image || '/noprofile.png'}
                alt='selected'
                className='object-contain rounded-lg w-full h-full max-h-[200px]'
              />
            </div>
          )}
          <img
            src={image || '/noprofile.png'}
            alt='selected'
            className='object-contain rounded-lg w-full max-h-[250px]'
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
              Select Topic Image
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
            <label htmlFor='title'>Topic Title</label>
            <input
              type='text'
              className='flex-1 bg-transparent p-2 border border-gray-300 rounded-lg outline-none'
              placeholder='Topic Title'
              {...register('title')}
            />
            {errors.title && (
              <p className='text-red-500'>{errors.title.message}</p>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='normal'>Normal Option</label>
            <select
              {...register('normal', { setValueAs: value => value === 'true' })}
              className='flex-1 bg-[#151C2C] text-white border border-gray-300 rounded-lg outline-none p-2'
            >
              <option value='false'>Image to the left</option>
              <option value='true'>Image to the right</option>
            </select>
            {errors.normal && (
              <p className='text-red-500'>{errors.normal.message}</p>
            )}
          </div>

          <h1 className='text-left text-lg p-4'>Topic Descriptions</h1>
          <button
            type='button'
            onClick={() => append('')}
            className='p-2 bg-blue-500 text-white rounded-lg'
          >
            Add Topic Description
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
                <CircularProgress
                  color='success'
                  size={20}
                />
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Topic;
