import axiosInstance from '../../../../axiosInstance';

interface PostParams {
  formData: FormData;
}

export const PostPhoto = async ({ formData }: PostParams) => {
  const status = await axiosInstance.post(
    '/users/photo',
    {
      photo: formData.get('photo'),
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return status;
};
