import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { styled } from 'nativewind';
import {
  LabelInput,
  NormalText,
  PrimaryButton,
  PrimaryInput,
  SecondaryTitle,
} from '@/shared/ui';
import { router } from 'expo-router';
import { validationLoginSchema } from '@/entities/auth';
import { yupResolver } from '@hookform/resolvers/yup';

const WrapperInputs = styled(View);
const WrapperForm = styled(View);
const TextWrapper = styled(View);

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmitForm = () => {
    console.log('email =>', email);
    setEmail('');
    router.navigate('/auth/adult/confirm-register');
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TextWrapper>
          <SecondaryTitle> Забули пароль?</SecondaryTitle>
          <NormalText classNames="mt-2 mb-6 ml-2">
            Введіть вашу електронну пошту
          </NormalText>
        </TextWrapper>
        <WrapperInputs className="flex justify-center mb-40 ml-2">
          <View>
            <LabelInput classNames="mb-2">Електронна пошта</LabelInput>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <PrimaryInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="example@email.com"
                  autoFocus
                  keyboardType="email-address"
                  classNames={`${errors.email && 'border border-rose-600 text-red'}`}
                />
              )}
              name="email"
            />
            {errors.email && (
              <LabelInput classNames="text-red">
                {errors.email.message}
              </LabelInput>
            )}
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>

      <PrimaryButton
        text="Відновити пароль"
        onPress={handleSubmit(onSubmitForm)}
        hint="Відновити пароль"
        label="Відновити пароль"
        role="button"
        classNames="w-48 self-center"
      />
    </WrapperForm>
  );
};

export default ResetPasswordForm;
