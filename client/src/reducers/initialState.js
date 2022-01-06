const result = {
    menu: false,
    galleryMenu: false,
    category: null,
    galleryMenus: [
     {id:1, title: 'spring'},
     {id:2, title: 'summer'},
     {id:3, title: 'autumn'},
     {id:4, title: 'winter'},
     {id:5, title: 'point'},
    ],
    menus: [
        {id: 1, title: 'About'},
        {id: 2, title: 'Gallery'},
        {id: 3, title: 'Shop'},
        {id: 4, title: 'Contact'}
    ],
    seletedPicture: {id: null, title: null, comment: null, src: null},
    seletedComponetforajax: null
};

export default result;

// {id:1, title: 'about'}