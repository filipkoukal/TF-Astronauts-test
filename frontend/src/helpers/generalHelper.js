// Format date 
export function formatTimePretty(time, delimeter = ".") {
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return (
    (day <= 9 ? "0" + day : day) +
    delimeter +
    (month <= 9 ? "0" + month : month) +
    delimeter +
    date.getFullYear()
  );
}

// Finders for astronaut list sorting and consistency 
export const recursiveFindIndex = (data, id) =>
  data.reduce((indexes, item, index) => {
    let subIndex;
    Array.isArray(item) && (subIndex = recursiveFindIndex(item, id));
    if (subIndex && subIndex.length) {
      return indexes.concat([index], subIndex);
    }
    item.id === id && indexes.push(index);
    return indexes;
  }, []);

export const recursiveFindItem = (data, id) =>
  data.reduce((items, item, index) => {
    let subIndex;
    Array.isArray(item) && (subIndex = recursiveFindIndex(item, id));
    if (subIndex && subIndex.length) {
      return items.concat([index], subIndex);
    }
    item.id === id && items.push(item);
    return items;
  }, []);
