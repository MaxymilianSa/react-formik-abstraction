import { Input } from '@/components/form';

export const PersonalInfo = () => (
  <div className="flex flex-col gap-6">
    <Input {...{ name: 'name', type: 'text', label: 'Name', placeholder: 'e.g. Stephen King' }} />
    <Input
      {...{
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'e.g. stephenking@lorem.com',
      }}
    />
    <Input
      {...{
        name: 'phone',
        type: 'text',
        label: 'Phone Number',
        placeholder: 'e.g. +1 234 567 890',
      }}
    />
  </div>
);
