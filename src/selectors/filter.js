
// Filter Function
export default (data, {text}) => {

  // Text filter field
  return data.filter(post => {

    // filter through the title of each post to only include text from our search
    const textFilter = post.title.toLowerCase().includes(text.toLowerCase());

    return textFilter;
  }).sort((a, b) => {

    // FILTERS BY TEXT
    return a.title < b.title
      ? -1   // -1 will be moved up in array
      : 1;  // 1 will be moved down in array
  });

}