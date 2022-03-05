import React, {useState} from "react";
import {RadioButton} from "primereact/radiobutton";

const ProductOptions = (props: { option1: string | null, option2: string| null }) => {
    const [option, setOption] = useState<string | null>(null);
    const option1 = props.option1;
    const option2 = props.option2;

    if (option1 && option2) {
        return (
            <div className="options mt-5">
                <div className="field-radiobutton flex-column align-items-start">
                    <div className="flex align-items-center">
                        <RadioButton inputId="option1" name="option1" value={option1}
                                     checked={option === option1}
                                     onChange={(e) => setOption(e.value)}
                                     className="mr-1"
                        />
                        <label htmlFor="option1">{option1}</label>
                    </div>
                    <div className="option-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="field-radiobutton flex-column align-items-start">
                    <div className="flex align-items-center">
                        <RadioButton inputId="option2" name="option2" value={option2}
                                     checked={option === option2}
                                     onChange={(e) => setOption(e.value)}
                                     className="mr-1"
                        />
                        <label htmlFor="option2">{option2}</label>
                    </div>
                    <div className="option-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                </div>
            </div>
        );
    }

    return <div></div>;
}
export default ProductOptions;
