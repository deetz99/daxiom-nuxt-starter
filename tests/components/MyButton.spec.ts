import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MyButton from '~/components/MyButton.vue'

it('can mount some component', async () => {
  const component = await mountSuspended(MyButton)
  expect(component.text()).toMatchInlineSnapshot('"Hello World"')
})
