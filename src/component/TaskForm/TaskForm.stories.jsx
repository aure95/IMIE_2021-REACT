import TaskForm from './TaskForm'

export default {
    title: 'component/TaskForm',
    component: TaskForm
}

const Template = (args) => <TaskForm {...args} />;

export const normal = Template.bind({});

normal.args = {
  formTasks: [
    {labelName: 'activity', type: 'text'},
    {labelName: 'date', type: 'date'},
    {labelName: 'time', type: 'time'}
  ]
};