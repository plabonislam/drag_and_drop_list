import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
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

    // it('list items are draggable', () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItems = wrapper.findAll('tr')
    //     listItems.forEach(item => {
    //         expect(item.attributes('draggable')).toBe('true');
    //     })
    // })

    // it('emits event on drag start', async () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItem = wrapper.find('li')
    //     await listItem.trigger('dragstart')
    //     expect(wrapper.emitted()).toHaveProperty('dragstart')
    // })

    // it('emits event on drop', async () => {
    //     const wrapper = mount(DragAndDrop)
    //     const listItem = wrapper.find('li')
    //     await listItem.trigger('drop')
    //     expect(wrapper.emitted()).toHaveProperty('drop')
    // })
})
