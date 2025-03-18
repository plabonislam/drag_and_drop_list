import { describe, it, expect, vi,beforeEach } from 'vitest'
import { mount,flushPromises } from '@vue/test-utils'
import DragAndDrop from '../DragAndDrop.vue'

describe('DragAndDrop', () => {
    it('renders properly', () => {
        const wrapper = mount(DragAndDrop)
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('title checking with props', () => {
        const wrapper = mount(DragAndDrop, {
            props: {
                title: 'Drag and Drop List'
            }
        })
        const titleElement = wrapper.find('.title') // Adjust the selector to match your title element
        expect(titleElement.text()).toBe('Drag and Drop List');
    })

    it('title checking without props', () => {
        const wrapper = mount(DragAndDrop)
        expect(wrapper.html()).toContain('Drag and Drop List'); // New way to check the title
    })

    it('draggable button checking', () => {
        const wrapper = mount(DragAndDrop)
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true);
        expect(button.attributes('draggable')).toBe('true');
    })

    it('renders list items', () => {
        const wrapper = mount(DragAndDrop)
        const listItems = wrapper.findAll('tr')
        expect(listItems.length).toBeGreaterThan(0);
    })
    it('fetchItems updates items correctly', async () => {
      // Mock fetch API
      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([
              { name: 'Alice', age: 25 },
              { name: 'Bob' }, // No age, should default to 20
              { name: 'Charlie', age: 30 }
            ])
        })
      )
  
      const wrapper = mount(DragAndDrop)
  
      // Wait for API call to resolve
      await flushPromises()
  
      expect(global.fetch).toHaveBeenCalledTimes(1)
      expect(wrapper.vm.items).toEqual([
        { fullname: 'Alice', age: 25 },
        { fullname: 'Bob', age: 20 }, // Default age applied
        { fullname: 'Charlie', age: 30 }
      ])
    })

    // it('fetchItems method works correctly', async () => {
    //     const fetchItemsMock = vi.fn().mockResolvedValue(['Item 1', 'Item 2', 'Item 3'])
    //     const wrapper = mount(DragAndDrop, {
    //         methods: {
    //             fetchItems: fetchItemsMock
    //         }
    //     })
    //     await wrapper.vm.fetchItems()
    //     expect(fetchItemsMock).toHaveBeenCalled()
    //     expect(wrapper.vm.items).toEqual(['Item 1', 'Item 2', 'Item 3'])
    // })

    // it('list items are draggable', () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItems = wrapper.findAll('tr')
    //     listItems.forEach(item => {
    //         expect(item.attributes('draggable')).toBe('true');
    //     })
    // })

    // it('emits event on drag start', async () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItem = wrapper.find('tr')
    //     await listItem.trigger('dragstart')
    //     expect(wrapper.emitted()).toHaveProperty('dragstart')
    // })

    // it('emits event on drop', async () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItem = wrapper.find('tr')
    //     await listItem.trigger('drop')
    //     expect(wrapper.emitted()).toHaveProperty('drop')
    // })
})

describe('DragAndDrop.vue', () => {
    beforeEach(() => {
      vi.restoreAllMocks() // Reset mocks before each test
    })
  
    it('fetchItems updates items correctly', async () => {
      // Mock fetch API
      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([
              { name: 'Alice', age: 25 },
              { name: 'Bob' }, // No age, should default to 20
              { name: 'Charlie', age: 30 }
            ])
        })
      )
  
      const wrapper = mount(DragAndDrop)
  
      // Wait for API call to resolve
      await flushPromises()
  
      expect(global.fetch).toHaveBeenCalledTimes(1)
      expect(wrapper.vm.items).toEqual([
        { fullname: 'Alice', age: 25 },
        { fullname: 'Bob', age: 20 }, // Default age applied
        { fullname: 'Charlie', age: 30 }
      ])
    })
  })