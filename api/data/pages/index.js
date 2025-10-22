module.exports = {
  pageTitle: null,
  sections: [
    {
      name: 'HeroBasic',
      props: {
        theme: 'dark',
        slides: [
          {
            type: 'PRODUCT',
            image: {
              title: 'Image Title',
              url: 'https://assets.suelo.pl/soup/img/photos/slider-pasta.jpg'
            },
            productId: 1,
            title: 'Boscaiola Pasta',
            tagline: 'New product!',
            price: 9.98
          },
          {
            type: 'BASIC',
            image: {
              title: 'Image Title',
              url: 'https://assets.suelo.pl/soup/img/photos/slider-burger.jpg'
            },
            offerId: 1,
            title: 'Get 10% off coupon',
            tagline: 'and use it with your next order!',
            link: {
              title: 'Check our offers',
              slug: '/offers'
            }
          },
          {
            type: 'BASIC',
            image: {
              title: 'Image Title',
              url: 'https://assets.suelo.pl/soup/img/photos/slider-dessert.jpg'
            },
            offerId: 1,
            title: 'Delicious Desserts',
            tagline: 'Order it online even now!',
            link: {
              title: 'Check our menu',
              slug: '/menu-list-navigation'
            }
          }
        ]
      }
    },
    {
      name: 'ImageEdge',
      props: {
        content: {
          rate: 4,
          title: 'The best food in London!',
          description: 'Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....',
          reviews: [
            {
              content: 'It’ was amazing feeling for may belly!',
              rate: 4,
              source: 'Booking',
              author: {
                name: 'Mark Johnson',
                thumbnail: {
                  title: 'Image Title',
                  url: 'https://assets.suelo.pl/soup/img/avatars/avatar02.jpg'
                }
              }
            },
            {
              content: 'Great food and great atmosphere!',
              rate: 5,
              source: 'Facebook',
              author: {
                name: 'Kate Hudson',
                thumbnail: {
                  title: 'Image Title',
                  url: 'https://assets.suelo.pl/soup/img/avatars/avatar01.jpg'
                }
              }
            }
          ]
        },
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-food.png'
        },
        reverse: false
      }
    },
    {
      name: 'Features',
      props: {
        theme: 'dark',
        bg: 'dark',
        items: [
          {
            title: 'Pick a dish',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'shopping-cart'
          },
          {
            title: 'Make a payment',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'wallet'
          },
          {
            title: 'Recieve your food!',
            description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.',
            icon: 'package'
          }
        ],
        extend: 'right'
      }
    },
    {
      name: 'Categories',
      props: {
        title: 'Our Menu'
      }
    },
    {
      name: 'Offers',
      props: {
        title: 'Special Offers',
        theme: 'light'
      }
    },
    {
      name: 'Cta',
      props: {
        theme: 'dark',
        bg: 'dark',
        image: {
          title: 'Image Title',
          url: 'https://assets.suelo.pl/soup/img/photos/bg-croissant.jpg'
        },
        title: 'Check our promo video!',
        tagline: 'Book a table even right now or make an online order!',
        modalVideo: 'https://www.youtube.com/embed/uVju5--RqtY'
      }
    }
  ]
}
