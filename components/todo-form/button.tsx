'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { TodoFormContext } from './root';

export function TodoButton({ ...rest }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="outline" {...rest} disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </Button>
  );
}
