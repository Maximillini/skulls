export const repeatFunction = (times: number, someFunction: () => void) => {
  for (let i = 0; i < times; i++) {
    someFunction()
  }
}