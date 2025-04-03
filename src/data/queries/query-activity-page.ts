export const queryActivityPage = `*[_type == 'activity_item' && activity_item_slug.current == $slug] {
    activity_item_name,
    activity_item_description,
    activity_item_image
  } 
`;
