export default {
  name: 'settlement',
  title: 'Settlement',
  type: 'document',
  fields: [
    {
      name: 'buyer',
      type: 'string',
      title: 'Buyer Name',
    },
    {
      name: 'vesselName',
      title: 'Vessel Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'port',
      type: 'string',
      title: 'Port Name',
    },
    {
      name: 'nextPort',
      type: 'string',
      title: 'Next Port Name',
    },
    {
      name: 'deliveryDate',
      type: 'string',
      title: 'Delivery Date',
    },
    {
      name: 'product',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'volume',
      type: 'string',
      title: 'Volume',
    },
    {
      name: 'volumeUnit',
      type: 'string',
      title: 'Volume Unit',
    },
    {
      name: 'orderNumber',
      type: 'string',
      title: 'Order Number',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
    },
  ],
}
