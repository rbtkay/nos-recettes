export const SET_MESSAGE = "SET_MESSAGE";
export const variants = { success: "success", error: "danger" };
export const messageTypes = {
    success_ingredient: {
        isOpen: true,
        content:
            "Thank you for your contribution! :) Your ingredient can be found now in the available ingredients.",
        variant: variants.success,
    },
    error_ingredient: {
        isOpen: true,
        content:
            "We were not able to add your ingredient to our database :/ maybe because it's already there!",
        variant: variants.error,
    },
    default: {
        isOpen: false,
        content: "",
        variant: variants.success,
    },
};

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message,
});
