export function delay<T>(time: number, callback: () => T) {
  return new Promise<T>((res) => {
    setTimeout(() => {
      res(callback());
    }, 1000);
  });
}
