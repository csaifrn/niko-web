import axiosInstance from '../../../../axiosInstance';

export const DeletePhoto = async () => {
  const status = await axiosInstance.delete('/users/photo');

  return status;
};
