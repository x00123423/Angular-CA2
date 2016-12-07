import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
 
export const AppRoutes: any = [
    { path: "page1", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "", component: TodoAppComponent }
];
 
export const AppComponents: any = [
    Page1Component,
    Page2Component,
    TodoAppComponent
];