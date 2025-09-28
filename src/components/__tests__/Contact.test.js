import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("contact us page test case",()=>{
test("Should load contact us component",()=>{
    render(<Contact />);

    const heading = screen.getByRole("heading");


    //asssertion
    expect(heading).toBeInTheDocument();
});

test("should load button inside contact",()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});


})


