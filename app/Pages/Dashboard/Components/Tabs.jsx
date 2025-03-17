import { useState } from "react";

const Tabs = (props) => {
    return (
        <div className="text-sm font-medium text-center text-gray-400 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {props.DashboardTabs.map((tab, index) => (
                    <li className="me-2" key={index}>
                        <button
                            className={`${
                                props.activeTab == tab ? 
                                        "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 cursor-pointer" 
                                    : 
                                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-gray-500 dark:hover:text-gray-300 cursor-pointer"
                            }`}
                            onClick={() => props.setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </div>


    )
}

export default Tabs;