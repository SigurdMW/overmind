export default (ts) =>
  ts
    ? [
        {
          code: `
import { Operator, pipe, tryCatch } from 'overmind'

export const doSomething: Operator<string> = tryCatch({
  try: pipe(
    // Whatever throws an error here will trigger the "catch"
  ),
  catch: pipe(
    // Receives the Error as value
  )
})
`,
        },
      ]
    : [
        {
          code: `
import { pipe, tryCatch } from 'overmind'

export const doSomething = tryCatch({
  try: pipe(
    // Whatever throws an error here will trigger the "catch"
  ),
  catch: pipe(
    // Receives the Error as value
  )
})
`,
        },
      ]
