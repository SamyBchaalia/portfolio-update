import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import ShotenApi from '../services/shorten.api';

export const useShortenLinkMutation = () => {
  return useMutation({
    mutationFn: ShotenApi.shortenUrl,
    onSuccess: () => {
      void toast.success('Create new Todo successfully');
    },
    onError: () => {
      void toast.error('Create new Todo failed');
    },
  });
};
