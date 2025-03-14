export const queryRegulationData = `*[_type == 'regulation' && regulation_slug.current == $slug] {
  regulation_heading,
  regulation_body
}`;
