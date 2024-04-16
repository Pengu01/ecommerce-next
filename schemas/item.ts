export default {
    name: 'clothingItem',
    title: 'Clothing Item',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule : any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule : any) => Rule.required(),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule : any) => Rule.required().positive(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule : any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule : any) => Rule.required(),
            options: {
                list: [
                    { title: 'Men', value: 'men' },
                    { title: 'Women', value: 'women' },
                ],
            },
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
    ],
};
