import React from "react";
import validaterFalse from "../../assets/Images/Webapp/svg/validaterfalse.svg";
import validatertrue from "../../assets/Images/Webapp/svg/validatertrue.svg";
const PasswordStrengthIndicator = ({
    validity: { minChar, number, specialChar, capitalChat, smallChar },
}) => {
    return (
        <div className="password-meter text-left mb-4">
            <p className="text-dark text-center"><b>Must be at least:</b></p>

            <ul className="text-muted">
                <PasswordStrengthIndicatorItem
                    isValid={minChar}
                    text="8 Characters"
                />
                <PasswordStrengthIndicatorItem
                    isValid={number}
                    text="1 number (0-9)"
                />
                <PasswordStrengthIndicatorItem
                    isValid={specialChar}
                    text="1 Special character(!@#$%^&*)"
                />
                <PasswordStrengthIndicatorItem
                    isValid={capitalChat}
                    text="1 Capital case"
                />
                <PasswordStrengthIndicatorItem
                    isValid={smallChar}
                    text="1 Lower case"
                />
            </ul>
        </div>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {

    return (
        <li style={{ listStyle: "none" }} className="text-dark">
            <img
                src={`${isValid ? validatertrue : validaterFalse}`}
                className="pr-3"
                alt="validIcon"
            />
            {text}
        </li>
    );
};

export default PasswordStrengthIndicator;
