import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PhoneInput from "./PhoneInput.vue"; 

describe("PhoneInput.vue", () => {
  it("renders a label when passed as a prop", () => {
    const wrapper = mount(PhoneInput, {
      props: {
        label: "Phone Number",
      },
    });
    expect(wrapper.text()).toContain("Phone Number");
  });

  it("renders the default placeholder when no placeholder prop is passed", () => {
    const wrapper = mount(PhoneInput);
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("Enter phone number");
  });

  it("renders a custom placeholder when passed as a prop", () => {
    const wrapper = mount(PhoneInput, {
      props: {
        placeholder: "Custom Placeholder",
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("Custom Placeholder");
  });

  it("emits an update:modelValue event when the phone number is changed", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    await input.setValue("1234567890");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["1234567890"]);
  });

  it("shows error message when errorMessage prop is passed", () => {
    const wrapper = mount(PhoneInput, {
      props: {
        errorMessage: "This is an error",
      },
    });
    const errorMessage = wrapper.find(".text-red-500");
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe("This is an error");
  });

  it("filters the countries based on search query", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find('input[type="text"]');
    await input.setValue("United");
    const countriesList = wrapper.findAll("li");
    expect(countriesList.length).toBeGreaterThan(0);
    expect(countriesList[0].text()).toContain("United");
  });

  it("opens the country dropdown when clicked", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.find("ul").isVisible()).toBe(true);
  });

  it("selects a country when clicked", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    const countryItem = wrapper.findAll("li").at(0);
    await countryItem.trigger("click");
    expect(wrapper.find("button").text()).toContain("US (+1)");  
  });
});
