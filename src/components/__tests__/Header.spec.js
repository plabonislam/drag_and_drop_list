import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderList from "../HeaderList.vue"



describe('Table Header', () => {
 it('renders properly', async () => {
  const wrapper = mount(HeaderList)
  const list = wrapper.vm.headers;
  wrapper.vm.headers =[...list,"to mo"]
  console.log(wrapper.vm.headers)
  expect(wrapper.html()).toMatchSnapshot();
 })

 it('setValue for input field', async () => {
  const wrapper = mount(HeaderList)

  expect(wrapper.vm.t1).toEqual('')
  expect(wrapper.vm.t2).toEqual('')

  //for single setvalue
  wrapper.find('.foo').setValue('single-foo');
  expect(wrapper.vm.t1).toEqual('single-foo')

  //for array
  const wrapperArray = wrapper.findAll('.foo')
  wrapperArray.forEach(wrapper => wrapper.setValue('foo'))
  expect(wrapper.vm.t1).toEqual('foo')
  expect(wrapper.vm.t2).toEqual('foo')

  //directly setvalue for vm
  wrapper.vm.t1='test'
  expect(wrapper.vm.t1).toEqual('test')

 })

})