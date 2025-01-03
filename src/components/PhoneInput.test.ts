import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PhoneInput from "./PhoneInput.vue";

const countryListMock = [
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "UK", dialCode: "+44" },
  { name: "Canada", code: "CA", dialCode: "+1" },
];

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
    expect(input.element.value).toBe("1234567890");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["1234567890"]);
  });

  it("shows error message when errorMessage prop is passed", () => {
    const wrapper = mount(PhoneInput, {
      props: {
        errorMessage: "This is an error",
      },
    });
    const errorMessage = wrapper.find('[data-test="error-message"]');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe("This is an error");
  });

  it("filters the countries based on search query", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
        countryList: countryListMock,
      },
    });
    const searchInput = wrapper.find('[data-test="country-search-input"]');
    await searchInput.setValue("United");
    const countriesList = wrapper.findAll('[data-test="country-item"]');
    expect(countriesList.length).toBe(2);  
    expect(countriesList[0].text()).toContain("United");
  });

  it("opens the country dropdown when clicked", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
        countryList: countryListMock,
      },
    });
    const button = wrapper.find('[data-test="dropdown-button"]');
    await button.trigger("click");
    const dropdown = wrapper.find('[data-test="country-dropdown"]');
    expect(dropdown.exists()).toBe(true);
    expect(dropdown.isVisible()).toBe(true);
  });

  it("selects a country when clicked", async () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
        countryList: countryListMock,
      },
    });
    const button = wrapper.find('[data-test="dropdown-button"]');
    await button.trigger("click");
    const countryItem = wrapper.findAll('[data-test="country-item"]').at(0);
    expect(countryItem.exists()).toBe(true);
    await countryItem.trigger("click");
    expect(button.text()).toContain("US (+1)");
  });

  it("handles empty country list gracefully", () => {
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
        countryList: [],
      },
    });
    const button = wrapper.find('[data-test="dropdown-button"]');
    expect(button.exists()).toBe(true);
    expect(button.text()).toContain("Select a country");
  });
});
