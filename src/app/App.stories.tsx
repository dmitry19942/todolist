import React from "react";
import App from "./App";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";


export default {
    title: 'Todolist/App',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App/>;

export const AppExample = Template.bind({})
