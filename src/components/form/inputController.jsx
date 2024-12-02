import classNames from 'classnames';
import { Controller } from 'react-hook-form';

const InputController = ({
    name,
    type = 'text',
    control,
    placeholder,
    required,
    containerClassName,
    inputContainerClassName,
    inputClassName,
    onChange,
    icon,
    ...rest
}) => (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
            <div className={classNames('block', containerClassName)}>
                <div className={classNames('relative flex items-center gap-3', inputContainerClassName)}>
                    <div className="absolute left-3">{icon}</div> {/* Icon nằm bên trong */}
                    <input
                        id={name}
                        type={type}
                        className={classNames(
                            'form-control border border-[#858584] rounded-[20px] py-2 px-10 w-full text-base text-[#2B2B2B]', // Thêm padding trái để tránh icon
                            inputClassName
                        )}
                        placeholder={placeholder}
                        {...field}
                        {...rest}
                        onChange={e => {
                            onChange?.(e);
                            field.onChange(e);
                        }}
                    />
                </div>
                {error && <div className="text-danger text-red-500 mt-2">{error.message}</div>}
            </div>
        )}
    />
);

export default InputController;
