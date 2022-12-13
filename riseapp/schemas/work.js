export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'workName',
      title: 'Work Card Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Work Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'items',
      type: 'number',
      title: 'Items',
    },
  ],
}
