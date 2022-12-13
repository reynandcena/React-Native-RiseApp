export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'flag',
      title: 'Flag',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'phone1',
      type: 'string',
      title: 'Phone Number 1',
    },
    {
      name: 'phone2',
      type: 'string',
      title: 'Phone Number 2',
    },
  ],
}
