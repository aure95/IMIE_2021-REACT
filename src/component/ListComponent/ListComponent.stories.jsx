import ListComponent from "./ListComponent";

export default {
    title: 'component/ListComponent',
    component: ListComponent,
    // args: {
    //     tasks: [
    //         {name: 'piscine', date:'27/10/2021 10:30'},
    //         {name: 'paintball', date:'27/10/2021 14:00'},
    //         {name: 'escalade', date:'28/10/2021 10:30'},
    //         {name: 'macdo', date:'28/10/2021 12:30'},
    //         {name: 'ciné', date:'29/10/2021 15:00'}
    //     ]
    // }
}

const Template = (args) => <ListComponent {...args} />;

export const normal = Template.bind({});

normal.args = {
  tasks: [
    {name: 'piscine', date:'27/10/2021 10:30'},
    {name: 'paintball', date:'27/10/2021 14:00'},
    {name: 'escalade', date:'28/10/2021 10:30'},
    {name: 'macdo', date:'28/10/2021 12:30'},
    {name: 'ciné', date:'29/10/2021 15:00'}
  ]
};

// const normal = (args) => <ListComponent {...args} />;

// normal.defaultProps = {
//     tasks: [
//         {name: 'piscine', date:'27/10/2021 10:30'},
//         {name: 'paintball', date:'27/10/2021 14:00'},
//         {name: 'escalade', date:'28/10/2021 10:30'},
//         {name: 'macdo', date:'28/10/2021 12:30'},
//         {name: 'ciné', date:'29/10/2021 15:00'}
//     ]
//   };

