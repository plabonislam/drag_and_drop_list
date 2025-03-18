import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderList from "../HeaderList.vue"

describe('Table Header', () => {
    it('renders properly', async () => {
        const wrapper = mount(HeaderList)
        const list = wrapper.vm.headers;
        wrapper.vm.headers = [...list, "to mo"]
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('setValue for input field', async () => {
        const wrapper = mount(HeaderList)

        expect(wrapper.vm.t1).toEqual('')
        expect(wrapper.vm.t2).toEqual('')

        // for single setValue
        wrapper.find('.foo').setValue('single-foo');
        expect(wrapper.vm.t1).toEqual('single-foo')

        // for array
        const wrapperArray = wrapper.findAll('.foo')
        wrapperArray.forEach(wrapper => wrapper.setValue('foo'))
        expect(wrapper.vm.t1).toEqual('foo')
        expect(wrapper.vm.t2).toEqual('foo')

        // directly setValue for vm
        wrapper.vm.t1 = 'test'
        expect(wrapper.vm.t1).toEqual('test')
    })

    it('adds a new header', async () => {
        const wrapper = mount(HeaderList)
        const initialLength = wrapper.vm.headers.length
        wrapper.vm.headers.push('New Header')
        expect(wrapper.vm.headers.length).toBe(initialLength + 1)
        expect(wrapper.vm.headers).toContain('New Header')
    })

    it('removes a header', async () => {
        const wrapper = mount(HeaderList)
        const initialLength = wrapper.vm.headers.length
        wrapper.vm.headers.pop()
        expect(wrapper.vm.headers.length).toBe(initialLength - 1)
    })

    it('checks if header list is empty', async () => {
        const wrapper = mount(HeaderList)
        wrapper.vm.headers = []
        expect(wrapper.vm.headers.length).toBe(0)
    })

    it('checks header list length', async () => {
        const wrapper = mount(HeaderList)
        const length = wrapper.vm.headers.length
        expect(wrapper.vm.headers.length).toBe(length)
    })

    it('checks if a specific header exists', async () => {
        const wrapper = mount(HeaderList)
        const header = 'Specific Header'
        wrapper.vm.headers.push(header)
        expect(wrapper.vm.headers).toContain(header)
    })
})