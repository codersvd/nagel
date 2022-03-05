import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Products from "../products/products";
import "./content-tabs.css";

const ContentTabs = () => {
    return (
        <div className="tabview-demo">
            <div className="card">
                <TabView>
                    <TabPanel header="1 Product">
                        <Products></Products>
                    </TabPanel>
                    <TabPanel header="2 Addresses" disabled></TabPanel>
                    <TabPanel header="3 Overview" disabled></TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default ContentTabs;
