var expect = function(val) {
    return {
        toBe: function(newVal) {
            if (newVal !== val) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: function(newVal) {
            if (newVal === val) {
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    }
};