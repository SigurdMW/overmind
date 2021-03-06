const javascript = {
  react: [
    {
      fileName: 'Count.js',
      target: 'jsx',
      code: `
import React from 'react'
import { useOvermind } from '../overmind'

const Count = () => {
  const { state } = useOvermind()

  return (
    <div>
      {state.count}
    </div>
  )
}

export default Count
    `,
    },
  ],
  vue: [
    {
      fileName: 'index.js',
      code: `
import Vue from 'vue'
import { OvermindPlugin } from './overmind'
import Count from './components/Count'

Vue.use(OvermindPlugin)

new Vue({
  el: '#app',
  render: (h) => h(Count),
})

`,
    },
  ],
}

const typescript = {
  react: [
    {
      fileName: 'components/Count.tsx',
      code: `
import * as React from 'react'
import { useOvermind } from '../overmind'

const Count: React.FunctionComponent = () => {
  const { state } = useOvermind()

  return (
    <div>
      {state.count}
    </div>
  )
}


export default Count
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'count.component.ts',
      code: `
import { Component } from '@angular/core';
import { Store } from '../overmind'

@Component({
  selector: 'count-component',
  template: \`
<div *track>
  {{ state.count }}
</div>
  \`
})
export class CountComponent {
  state = this.store.select()
  constructor (private store: Store) {}
}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
