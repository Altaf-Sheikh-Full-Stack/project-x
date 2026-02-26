

const registerValidator = (name, email, password) => {

    if (!name || name.length > 8) {
        throw new Error(!name ? "NAME_UNDEFINED" : "NAME_IS_MORE_THAN_MAX_LIMIT");
    }

    if(!email){
        throw new Error("EMAIL_UNDEFINED");
    }


    if (!password) {
        throw new Error("PASSWORD_UNDEFINED");
    }

    let point = 0;
    if (password.length >= 8) {
        const passbartest = [/[0-9]/, /[A-Z]/, /[a-z]/, /[!@#$%&?]/]
        for (let i = 0; i < passbartest.length; i++) {
            if (passbartest[i].test(password)) {
                point += 1
            }

        }
    } else {
        throw new Error("PASSWORD_MIN_LENGTH_SHOULD_BE_MORE_THEN_8_CHAR");
    }

    if (point < 4) {
        throw new Error("PASSWORD_NOT_STRONG");
    }

}

export default registerValidator