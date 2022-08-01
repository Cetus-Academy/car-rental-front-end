import { useFormContext, useWatch } from 'react-hook-form';

const InputCheckbox = ({ id, required }) => {
  const { register, control } = useFormContext({
    defaultValues: {
      'person-option': 'private-person',
      message: false,
    },
  });

  const addMessage = useWatch({
    control,
    name: 'message',
  });
  return (
    <input
      type='checkbox'
      id={id}
      {...register(`${id}`, { required: required })}
    />
  );
};

export default InputCheckbox;
