import React, { useEffect } from "react";
import {
  Button,
  FormControl,
  Input,
  Stack,
  useToast,
  TextArea,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useAsync } from "../common/hooks";
import { submitPost } from "../common/api";

function NewPostFrom() {
  const toast = useToast();
  const { execute, status } = useAsync(submitPost, false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (status === "success") {
      reset();
      toast.show({
        title: `Post successfully submitted`,
        duration: 5000,
        isClosable: true,
      });
    }

    if (status === "error") {
      toast.show({
        title: `${String.fromCodePoint(0x1f621)} Unexpected error occurred.`,
        duration: 5000,
        isClosable: true,
      });
    }
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  function onSubmit(values) {
    execute(values);
  }

  return (
    <Stack space={4} w="100%">
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /[\S\s]+[\S]+/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isRequired isInvalid={!!errors.title}>
            <FormControl.Label>Title</FormControl.Label>
            <Input value={value} onChangeText={onChange} onBlur={onBlur} />
            <FormControl.ErrorMessage>
              {errors.title && "Title is required"}
            </FormControl.ErrorMessage>
          </FormControl>
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /[\S\s]+[\S]+/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isRequired isInvalid={!!errors.description}>
            <FormControl.Label>Description</FormControl.Label>
            <TextArea
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              h={20}
            />
            <FormControl.ErrorMessage>
              {errors.description && "Description is required"}
            </FormControl.ErrorMessage>
          </FormControl>
        )}
        name="description"
      />
      <Button onPress={handleSubmit(onSubmit)} isLoading={status === "pending"}>
        Submit
      </Button>
    </Stack>
  );
}

export default NewPostFrom;
