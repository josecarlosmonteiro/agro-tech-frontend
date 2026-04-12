function add<T>(list: T[], newItem: T) {
  return [...list, newItem];
}

function update<T>(list: T[], newItem: T, key: keyof T,) {
  return list.map(el => el[key] === newItem[key] ? newItem : el);
}

function remove<T>(list: T[], key: keyof T, value: any) {
  return list.filter(el => el[key] !== value);
}

export const listUtil = {
  add,
  update,
  remove,
}