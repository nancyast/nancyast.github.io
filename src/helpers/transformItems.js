import moment from 'moment';

export default function(items) {
  return items.map(item => {
    return {
      date_created: moment(item.data[0].date_created).format('DD MMM, YYYY'),
      description: item.data[0].description,
      nasa_id: item.data[0].nasa_id,
      photographer: item.data[0].photographer || 'unknown',
      title: item.data[0].title,
      media_type: item.data[0].media_type,
      href: item.links[0].href,
      favorite: false
    };
  });
}
