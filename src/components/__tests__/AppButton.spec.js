import { describe,it ,expect } from "vitest";
import { mount} from "@vue/test-utils";
import AppButton from "../AppButton.vue";


describe('APPButton',()=>{

    it("renders component",()=>{
        const wrapper = mount(AppButton,{
            props:{
                text:"click me"
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
       
    })
})