import { ReactComponentElement } from "react";
import { ProblemDataForm } from "../components/ProblemDataForm";
import { ProblemDataList } from "../components/ProblemDataList";

interface RouteData {
    path: string;
    name: string;
    element: any;
    props?: any;
}

const allRoutes: RouteData[] =  [
    {
        path: '/problemlist',
        name: 'Problem List',
        element: ProblemDataList,
    },
    {
        path: '/newproblem',
        name: 'New Problem',
        element: ProblemDataForm,
    }
]

export  { allRoutes };