// (base: https://www.consolelog.io/group-by-in-javascript/)
export function groupBy<T>(array: readonly T[], prop: (v: T) => string) {
  return array.reduce((groups: { [key: string]: T[] }, item) => {
    const val = prop(item);
    groups[val] = groups[val] ?? [];
    groups[val].push(item);
    return groups;
  }, {});
}
