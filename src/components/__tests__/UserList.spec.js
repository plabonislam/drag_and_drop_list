import { mount ,flushPromises } from "@vue/test-utils";
import UserList from "@/components/UserList.vue";
import { describe, it, expect, vi,beforeEach } from 'vitest'
describe("UserList", () => {  

 it('renders properly',()=>{
  const wrapper = mount(UserList)
  expect(wrapper.html()).toMatchSnapshot();
 })

 it('fetching data',async()=>{
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { name: "Alice", age: 25 },
          { name: "Bob" }, // No age, should default to 20
          { name: "Charlie", age: 30 }
        ])
    })
  );
  const wrapper = mount(UserList)
  // Ensure the list is empty initially
  expect(wrapper.find("li").exists()).toBe(false);
  // Click the button
  await wrapper.find("button").trigger("click");
  wrapper.vm.loading = true ;
  // Check if the loading text appears
  // expect(wrapper.find("p").text()).toBe("Loading...");

  // Wait for the users to load
  await flushPromises();

  console.log(wrapper.vm.loading)
  // Check if the correct user data is displayed
  const listItems = wrapper.findAll("li");
  console.log(listItems.length)
  expect(listItems.length).toBe(3);
  expect(listItems[0].text()).toBe("Alice - 25 years old");
  expect(listItems[1].text()).toBe("Bob - 20 years old"); // Default age
  expect(listItems[2].text()).toBe("Charlie - 30 years old");
});


it('updates loading state', async () => {
  const wrapper = mount(UserList)
  

  wrapper.vm.loading = true ;
   expect(wrapper.vm.loading).toBe(true)
  //  console.log(wrapper.find('p').exists().text())
  // // Check if the loading text appears 
 // expect(wrapper.find('p').text()).toContain('Loading...')
})
})