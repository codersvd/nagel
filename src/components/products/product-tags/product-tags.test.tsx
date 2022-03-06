import {render, screen, within} from "@testing-library/react";
import React from "react";
import ProductTags from "./product-tags";

test('not empty tags', async () => {
    render(<ProductTags tags={['test1', 'test2']}/>)

    const list = screen.getByRole("list", {
        name: /product-tags/i,
    })
    const {getAllByRole} = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(2)
})

test('empty tags', async () => {
    render(<ProductTags tags={[]}/>)

    const emptyTags = screen.getByRole("div", {
        name: /product-tags-empty/i,
    })
    expect(emptyTags).toBeEmptyDOMElement();
})
