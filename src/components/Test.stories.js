import Test from "./Test.vue";

export default {
  title: "configure/Test",
  component: Test,
};

const Template = (args) => ({
  components: { Test },
  setup() {
    return { args };
  },
  template: '<Test v-bind="args" />',
});

export const DefaultState = Template.bind({});
DefaultState.args = {};
