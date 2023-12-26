import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DragAndDrop from '../DragAndDrop.vue'

describe('DragAndDrop', () => {
 it('renders properly', () => {
  const wrapper = mount(DragAndDrop)
  expect(wrapper.text()).toContain('Drag and drop list view');
  expect(wrapper.find("td").exists()).toBe(true);

  console.log(typeof wrapper.find('button').attributes('draggable'))

  expect(wrapper.find('button').attributes('draggable')).toBe("true");
  expect(wrapper.find('button').exists()).toBe(true);

 })
})